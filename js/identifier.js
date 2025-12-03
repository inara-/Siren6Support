export function identifyItem(price, transactionType, categoryFilter, allItems) {
    const matches = [];

    // Helper to check if category matches
    const isCategoryMatch = (itemCat) => {
        if (categoryFilter === 'all') return true;
        return itemCat === categoryFilter;
    };

    // Iterate through all categories in data
    for (const [category, items] of Object.entries(allItems)) {
        // Skip if category doesn't match filter (unless filter is all)
        // Note: The itemData structure keys should match the filter values or we map them
        // Let's assume itemData keys are 'weapon', 'shield', etc.
        if (!isCategoryMatch(category)) continue;

        items.forEach(item => {
            // Base prices
            const basePrice = transactionType === 'buy' ? item.buy : item.sell;

            // 1. Standard Price
            if (basePrice === price) {
                matches.push({ item, condition: 'normal', matchedPrice: basePrice });
            }

            // 2. Cursed Price (0.87 * base, floored)
            // Only relevant for equipment and some items, but we can check all generally
            // or restrict based on item type. For simplicity, check all.
            const cursedPrice = Math.floor(basePrice * 0.87);
            if (cursedPrice === price) {
                matches.push({ item, condition: 'cursed', matchedPrice: cursedPrice });
            }

            // 3. Blessed Price (2.0 * base)
            // Mostly for scrolls and grasses
            const blessedPrice = basePrice * 2;
            if (blessedPrice === price) {
                matches.push({ item, condition: 'blessed', matchedPrice: blessedPrice });
            }

            // 4. Divine (神器) Price (2.0 * base) - Only for Weapons and Shields (Buy only usually, but let's check both or just Buy)
            // Search result says "神器の場合は、基礎となる買値が2倍". Sell price might also be higher? 
            // Usually Sell is also higher. Let's assume 2x for both for now or just Buy.
            // Let's treat it like Blessed for now but label it Divine.
            if ((category === 'weapon' || category === 'shield') && basePrice * 2 === price) {
                matches.push({ item, condition: 'divine', matchedPrice: price });
            }

            // 4. Capacity/Charges (Staff/Pot)
            // If the item has a 'increment' or 'range' logic
            // This is complex. For now, let's assume items with charges are listed individually 
            // OR we implement a calculator here.
            // Let's implement a simple calculator for Staves/Pots if they have a 'base' and 'perCharge' property.
            if (item.type === 'staff' || item.type === 'pot') {
                // Logic for capacity would go here if data supports it
                // For this MVP, we will rely on the data file having entries for specific capacities 
                // OR we can add dynamic calculation if we have the formula.
                // Formula: Base + (Charge * Increment)
                // Let's assume the data might have 'buyBase', 'buyInc' etc.
                if (item.buyBase && item.buyInc) {
                    checkCapacity(item, price, transactionType, matches);
                }
            }
        });
    }

    return matches;
}

function checkCapacity(item, targetPrice, transactionType, matches) {
    const base = transactionType === 'buy' ? item.buyBase : item.sellBase;
    const inc = transactionType === 'buy' ? item.buyInc : item.sellInc;

    // Check range 0 to 99 (reasonable max)
    // Usually staves are 3-7, pots 3-5, but can be more.
    for (let i = 0; i <= 10; i++) {
        const calculated = base + (i * inc);

        // Normal
        if (calculated === targetPrice) {
            matches.push({ item, condition: 'normal', matchedPrice: calculated, capacity: i });
        }
        // Cursed
        if (Math.floor(calculated * 0.87) === targetPrice) {
            matches.push({ item, condition: 'cursed', matchedPrice: targetPrice, capacity: i });
        }
        // Blessed (only if applicable, usually not for pots/staves in terms of price doubling? 
        // Actually blessed pots/staves usually just have better effects, price might not double like scrolls.
        // Need to verify. For now, omit blessed for pots/staves unless sure.)
    }
}
