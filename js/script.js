
const itemData = {
    weapon: [
        { name: "木刀", buy: 250, sell: 100, category: "weapon" },
        { name: "青銅の太刀", buy: 550, sell: 220, category: "weapon" },
        { name: "カタナ", buy: 1000, sell: 400, category: "weapon" },
        { name: "つるはし", buy: 1000, sell: 400, category: "weapon" },
        { name: "木づち", buy: 1000, sell: 400, category: "weapon" },
        { name: "かつおぶし", buy: 1800, sell: 720, category: "weapon" },
        { name: "どうたぬき", buy: 2200, sell: 880, category: "weapon" },
        { name: "金の剣", buy: 3000, sell: 1200, category: "weapon" },
        { name: "使い捨て刀", buy: 3000, sell: 1200, category: "weapon" },
        { name: "斬鉄剣", buy: 3100, sell: 1240, category: "weapon" },
        { name: "一ツ目殺し", buy: 3200, sell: 1280, category: "weapon" },
        { name: "水斬りの剣", buy: 3300, sell: 1320, category: "weapon" },
        { name: "三日月刀", buy: 3500, sell: 1400, category: "weapon" },
        { name: "ドレインバスター", buy: 3600, sell: 1440, category: "weapon" },
        { name: "空の刃", buy: 3700, sell: 1480, category: "weapon" },
        { name: "山姥包丁", buy: 4000, sell: 1600, category: "weapon" },
        { name: "ドラゴンキラー", buy: 4000, sell: 1600, category: "weapon" },
        { name: "成仏のカマ", buy: 4200, sell: 1680, category: "weapon" },
        { name: "巨大ハリセン", buy: 4200, sell: 1680, category: "weapon" },
        { name: "回復の剣", buy: 4300, sell: 1720, category: "weapon" },
        { name: "罠探りの棒", buy: 4400, sell: 1760, category: "weapon" },
        { name: "桃まん棒", buy: 4500, sell: 1800, category: "weapon" },
        { name: "原始の斧", buy: 5000, sell: 2000, category: "weapon" },
        { name: "鉄塊の大剣", buy: 5300, sell: 2120, category: "weapon" },
        { name: "ステーキナイフ", buy: 5400, sell: 2160, category: "weapon" },
        { name: "剛剣マンジカブラ", buy: 5500, sell: 2200, category: "weapon" },
        { name: "スパークソード", buy: 5500, sell: 2200, category: "weapon" },
        { name: "四ツ叉", buy: 5600, sell: 2240, category: "weapon" },
        { name: "めでたい熊手", buy: 5700, sell: 2280, category: "weapon" },
        { name: "金食い虫こん棒", buy: 6000, sell: 2400, category: "weapon" },
        { name: "ミノタウロスの斧", buy: 6500, sell: 2600, category: "weapon" },
        { name: "妖刀かまいたち", buy: 8400, sell: 3360, category: "weapon" },
        { name: "連撃刀", buy: 10000, sell: 4000, category: "weapon" },
        { name: "火迅風魔刀", buy: 16000, sell: 6400, category: "weapon" },
        { name: "黄金のつるはし", buy: 18000, sell: 7200, category: "weapon" },
        { name: "必中の剣", buy: 20000, sell: 8000, category: "weapon" },
        { name: "秘剣カブラステギ", buy: 25000, sell: 10000, category: "weapon" }
    ],
    shield: [
        { name: "木甲の盾", buy: 500, sell: 200, category: "shield" },
        { name: "青銅甲の盾", buy: 800, sell: 320, category: "shield" },
        { name: "鉄甲の盾", buy: 1200, sell: 480, category: "shield" },
        { name: "おにおおかみ", buy: 1500, sell: 600, category: "shield" },
        { name: "オトトの盾", buy: 2000, sell: 800, category: "shield" },
        { name: "ハラモチの盾", buy: 2000, sell: 800, category: "shield" },
        { name: "バトルカウンター", buy: 2200, sell: 880, category: "shield" },
        { name: "金の盾", buy: 2500, sell: 1000, category: "shield" },
        { name: "ミノタウロスの盾", buy: 2500, sell: 1000, category: "shield" },
        { name: "不動の盾", buy: 2500, sell: 1000, category: "shield" },
        { name: "トドよけの盾", buy: 2600, sell: 1040, category: "shield" },
        { name: "ガマラよけの盾", buy: 2700, sell: 1080, category: "shield" },
        { name: "いたずらよけの盾", buy: 2800, sell: 1120, category: "shield" },
        { name: "ドラゴンシールド", buy: 3000, sell: 1200, category: "shield" },
        { name: "ざぶとん", buy: 3000, sell: 1200, category: "shield" },
        { name: "爆発隠の盾", buy: 3300, sell: 1320, category: "shield" },
        { name: "使い捨ての盾", buy: 3400, sell: 1360, category: "shield" },
        { name: "にぎりよけの盾", buy: 3600, sell: 1440, category: "shield" },
        { name: "見切りの盾", buy: 4000, sell: 1600, category: "shield" },
        { name: "ゲイズの盾", buy: 4000, sell: 1600, category: "shield" },
        { name: "山姥の鍋ぶた", buy: 4100, sell: 1640, category: "shield" },
        { name: "鉄塊の大盾", buy: 4400, sell: 1760, category: "shield" },
        { name: "ステーキプレート", buy: 4500, sell: 1800, category: "shield" },
        { name: "根性の盾", buy: 4600, sell: 1840, category: "shield" },
        { name: "カッパのお皿", buy: 5000, sell: 2000, category: "shield" },
        { name: "絶好調の盾", buy: 5000, sell: 2000, category: "shield" },
        { name: "めでたい御守", buy: 5500, sell: 2200, category: "shield" },
        { name: "風魔の盾", buy: 6000, sell: 2400, category: "shield" },
        { name: "金食い虫の盾", buy: 6000, sell: 2400, category: "shield" },
        { name: "お告げの盾", buy: 7000, sell: 2800, category: "shield" },
        { name: "魔法よけの盾", buy: 7500, sell: 3000, category: "shield" },
        { name: "サトリの盾", buy: 10000, sell: 4000, category: "shield" },
        { name: "螺旋風魔の盾", buy: 15000, sell: 6000, category: "shield" }
    ],
    bracelet: [
        { name: "遠投の腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "ヘタ投げの腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "ボヨヨンの腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "連射の腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "諸刃の腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "痛恨の腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "高飛びの腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "爆発の腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "垂れ流しの腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "金垂れ流しの腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "罠増しの腕輪", buy: 1500, sell: 600, category: "bracelet" },
        { name: "ちからの腕輪", buy: 2000, sell: 800, category: "bracelet" },
        { name: "睡眠よけの腕輪", buy: 2500, sell: 1000, category: "bracelet" },
        { name: "気配察知の腕輪", buy: 2500, sell: 1000, category: "bracelet" },
        { name: "道具感知の腕輪", buy: 2500, sell: 1000, category: "bracelet" },
        { name: "大砲強化の腕輪", buy: 2500, sell: 1000, category: "bracelet" },
        { name: "呪いよけの腕輪", buy: 3000, sell: 1200, category: "bracelet" },
        { name: "水グモの腕輪", buy: 3000, sell: 1200, category: "bracelet" },
        { name: "浮遊の腕輪", buy: 3000, sell: 1200, category: "bracelet" },
        { name: "魔物呼びの腕輪", buy: 3000, sell: 1200, category: "bracelet" },
        { name: "弾きよけの腕輪", buy: 3500, sell: 1400, category: "bracelet" },
        { name: "胃拡張の腕輪", buy: 3500, sell: 1400, category: "bracelet" },
        { name: "胃縮小の腕輪", buy: 3500, sell: 1400, category: "bracelet" },
        { name: "値切りの腕輪", buy: 3500, sell: 1400, category: "bracelet" },
        { name: "混乱よけの腕輪", buy: 4000, sell: 1600, category: "bracelet" },
        { name: "しあわせの腕輪", buy: 4000, sell: 1600, category: "bracelet" },
        { name: "回復の腕輪", buy: 5000, sell: 2000, category: "bracelet" },
        { name: "錆よけの腕輪", buy: 5000, sell: 2000, category: "bracelet" },
        { name: "毒消しの腕輪", buy: 6500, sell: 2600, category: "bracelet" },
        { name: "透視の腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "裏道の腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "壁抜けの腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "忍び足の腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "すれちがいの腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "罠師の腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "鑑定士の腕輪", buy: 8000, sell: 3200, category: "bracelet" },
        { name: "百発百中の腕輪", buy: 15000, sell: 6000, category: "bracelet" }
    ],
    scroll: [
        { name: "ぬれた巻物", buy: 200, sell: 80, category: "scroll" },
        { name: "識別の巻物", buy: 300, sell: 120, category: "scroll" },
        { name: "混乱の巻物", buy: 300, sell: 120, category: "scroll" },
        { name: "バクスイの巻物", buy: 300, sell: 120, category: "scroll" },
        { name: "ゾワゾワの巻物", buy: 300, sell: 120, category: "scroll" },
        { name: "真空斬りの巻物", buy: 300, sell: 120, category: "scroll" },
        { name: "天の恵みの巻物", buy: 400, sell: 160, category: "scroll" },
        { name: "地の恵みの巻物", buy: 400, sell: 160, category: "scroll" },
        { name: "メッキの巻物", buy: 400, sell: 160, category: "scroll" },
        { name: "おにぎりの巻物", buy: 400, sell: 160, category: "scroll" },
        { name: "困った時の巻物", buy: 400, sell: 160, category: "scroll" },
        { name: "くちなしの巻物", buy: 1000, sell: 400, category: "scroll" },
        { name: "魔物部屋の巻物", buy: 2000, sell: 800, category: "scroll" },
        { name: "全滅の巻物", buy: 3000, sell: 1200, category: "scroll" },
        { name: "ねだやしの巻物", buy: 10000, sell: 4000, category: "scroll" }
    ],
    grass: [
        { name: "雑草", buy: 10, sell: 4, category: "grass" },
        { name: "薬草", buy: 40, sell: 10, category: "grass" },
        { name: "毒草", buy: 50, sell: 20, category: "grass" },
        { name: "暴走の種", buy: 50, sell: 20, category: "grass" },
        { name: "混乱草", buy: 70, sell: 25, category: "grass" },
        { name: "睡眠草", buy: 70, sell: 25, category: "grass" },
        { name: "目つぶし草", buy: 70, sell: 25, category: "grass" },
        { name: "弟切草", buy: 80, sell: 30, category: "grass" },
        { name: "高飛び草", buy: 100, sell: 40, category: "grass" },
        { name: "くねくね草", buy: 100, sell: 40, category: "grass" },
        { name: "いやし草", buy: 200, sell: 80, category: "grass" },
        { name: "かっとび草", buy: 200, sell: 80, category: "grass" },
        { name: "復活の草", buy: 400, sell: 160, category: "grass" },
        { name: "無敵草", buy: 400, sell: 160, category: "grass" },
        { name: "ドラゴン草", buy: 500, sell: 200, category: "grass" },
        { name: "命の草", buy: 500, sell: 200, category: "grass" },
        { name: "ちからの草", buy: 700, sell: 280, category: "grass" },
        { name: "しあわせ草", buy: 1000, sell: 400, category: "grass" },
        { name: "天使の種", buy: 2000, sell: 800, category: "grass" }
    ],
    staff: [
        // Base price (0 charges). Buy Inc: 100, Sell Inc: 40
        { name: "ただの杖", type: "staff", buyBase: 500, buyInc: 100, sellBase: 200, sellInc: 40, category: "staff" },
        { name: "吹き飛ばしの杖", type: "staff", buyBase: 500, buyInc: 100, sellBase: 200, sellInc: 40, category: "staff" },
        { name: "場所がえの杖", type: "staff", buyBase: 500, buyInc: 100, sellBase: 200, sellInc: 40, category: "staff" },
        { name: "飛びつきの杖", type: "staff", buyBase: 500, buyInc: 100, sellBase: 200, sellInc: 40, category: "staff" },
        { name: "転ばぬ先の杖", type: "staff", buyBase: 500, buyInc: 100, sellBase: 200, sellInc: 40, category: "staff" },
        { name: "トンネルの杖", type: "staff", buyBase: 700, buyInc: 100, sellBase: 280, sellInc: 40, category: "staff" },
        { name: "土塊の杖", type: "staff", buyBase: 700, buyInc: 100, sellBase: 280, sellInc: 40, category: "staff" },
        { name: "加速の杖", type: "staff", buyBase: 700, buyInc: 100, sellBase: 280, sellInc: 40, category: "staff" },
        { name: "鈍足の杖", type: "staff", buyBase: 700, buyInc: 100, sellBase: 280, sellInc: 40, category: "staff" },
        { name: "かなしばりの杖", type: "staff", buyBase: 900, buyInc: 100, sellBase: 360, sellInc: 40, category: "staff" },
        { name: "封印の杖", type: "staff", buyBase: 900, buyInc: 100, sellBase: 360, sellInc: 40, category: "staff" },
        { name: "導きの杖", type: "staff", buyBase: 900, buyInc: 100, sellBase: 360, sellInc: 40, category: "staff" },
        { name: "感電の杖", type: "staff", buyBase: 900, buyInc: 100, sellBase: 360, sellInc: 40, category: "staff" },
        { name: "痛み分けの杖", type: "staff", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "staff" },
        { name: "一時しのぎの杖", type: "staff", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "staff" },
        { name: "ガイコツまどうの杖", type: "staff", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "staff" },
        { name: "幸せの杖", type: "staff", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "staff" },
        { name: "不幸の杖", type: "staff", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "staff" },
        { name: "身代わりの杖", type: "staff", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "staff" },
        { name: "桃まんの杖", type: "staff", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "staff" }
    ],
    pot: [
        // Base price (0 capacity). Buy Inc: 100, Sell Inc: 40
        { name: "保存の壺", type: "pot", buyBase: 800, buyInc: 100, sellBase: 320, sellInc: 40, category: "pot" },
        { name: "識別の壺", type: "pot", buyBase: 800, buyInc: 100, sellBase: 320, sellInc: 40, category: "pot" },
        { name: "変化の壺", type: "pot", buyBase: 800, buyInc: 100, sellBase: 320, sellInc: 40, category: "pot" },
        { name: "ただの壺", type: "pot", buyBase: 800, buyInc: 100, sellBase: 320, sellInc: 40, category: "pot" },
        { name: "やりすごしの壺", type: "pot", buyBase: 800, buyInc: 100, sellBase: 320, sellInc: 40, category: "pot" },
        { name: "換金の壺", type: "pot", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "pot" },
        { name: "底抜けの壺", type: "pot", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "pot" },
        { name: "倉庫の壺", type: "pot", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "pot" },
        { name: "手封じの壺", type: "pot", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "pot" },
        { name: "割れない壺", type: "pot", buyBase: 1000, buyInc: 100, sellBase: 400, sellInc: 40, category: "pot" },
        { name: "おはらいの壺", type: "pot", buyBase: 1600, buyInc: 100, sellBase: 640, sellInc: 40, category: "pot" },
        { name: "呪いの壺", type: "pot", buyBase: 1600, buyInc: 100, sellBase: 640, sellInc: 40, category: "pot" },
        { name: "背中の壺", type: "pot", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "pot" },
        { name: "トドの壺", type: "pot", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "pot" },
        { name: "水鉄砲の壺", type: "pot", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "pot" },
        { name: "笑いの壺", type: "pot", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "pot" },
        { name: "魔物の壺", type: "pot", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "pot" },
        { name: "ビックリの壺", type: "pot", buyBase: 2000, buyInc: 100, sellBase: 800, sellInc: 40, category: "pot" },
        { name: "合成の壺", type: "pot", buyBase: 6000, buyInc: 100, sellBase: 2400, sellInc: 40, category: "pot" },
        { name: "強化の壺", type: "pot", buyBase: 10000, buyInc: 100, sellBase: 4000, sellInc: 40, category: "pot" },
        { name: "弱化の壺", type: "pot", buyBase: 10000, buyInc: 100, sellBase: 4000, sellInc: 40, category: "pot" }
    ]
};

// Identifier Logic
function identifyItem(price, transactionType, categoryFilter, allItems) {
    const matches = [];

    // Helper to check if category matches
    const isCategoryMatch = (itemCat) => {
        if (categoryFilter === 'all') return true;
        return itemCat === categoryFilter;
    };

    // Iterate through all categories in data
    for (const [category, items] of Object.entries(allItems)) {
        // Skip if category doesn't match filter (unless filter is all)
        if (!isCategoryMatch(category)) continue;

        items.forEach(item => {
            // Base prices
            const basePrice = transactionType === 'buy' ? item.buy : item.sell;

            // 1. Standard Price
            if (basePrice === price) {
                matches.push({ item, condition: 'normal', matchedPrice: basePrice });
            }

            // 2. Cursed Price (0.87 * base, floored)
            const cursedPrice = Math.floor(basePrice * 0.87);
            if (cursedPrice === price) {
                matches.push({ item, condition: 'cursed', matchedPrice: cursedPrice });
            }

            // 3. Blessed Price (2.0 * base)
            const blessedPrice = basePrice * 2;
            if (blessedPrice === price) {
                matches.push({ item, condition: 'blessed', matchedPrice: blessedPrice });
            }

            // 4. Divine (神器) Price (2.0 * base) - Only for Weapons and Shields
            if ((category === 'weapon' || category === 'shield') && basePrice * 2 === price) {
                matches.push({ item, condition: 'divine', matchedPrice: price });
            }

            // 5. Capacity/Charges (Staff/Pot)
            if (item.type === 'staff' || item.type === 'pot') {
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

    // Check range 0 to 10
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
    }
}

// App Logic
document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        price: '',
        transaction: 'sell', // 'buy' or 'sell'
        category: 'all',
        identifiedItems: JSON.parse(localStorage.getItem('shiren6_identified_items')) || []
    };

    // DOM Elements
    const priceInput = document.getElementById('price-input');
    const clearBtn = document.getElementById('clear-btn');
    const transactionInputs = document.querySelectorAll('input[name="transaction"]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resultsContainer = document.getElementById('results-container');
    const resetIdentifiedBtn = document.getElementById('reset-identified-btn');

    if (!resetIdentifiedBtn) {
        console.error('Reset button not found');
    }

    // Helper to toggle identified state
    function toggleIdentified(itemName) {
        const index = state.identifiedItems.indexOf(itemName);
        if (index === -1) {
            state.identifiedItems.push(itemName);
        } else {
            state.identifiedItems.splice(index, 1);
        }
        localStorage.setItem('shiren6_identified_items', JSON.stringify(state.identifiedItems));
        updateResults();
    }

    // Event Listeners
    if (priceInput) {
        priceInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val === '') {
                state.price = '';
            } else {
                state.price = parseInt(val, 10);
            }
            updateResults();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            priceInput.value = '';
            state.price = '';
            priceInput.focus();
            updateResults();
        });
    }

    transactionInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            state.transaction = e.target.value;
            updateResults();
        });
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update state
            state.category = btn.dataset.category;
            updateResults();
        });
    });

    // Modal Elements
    const confirmModal = document.getElementById('confirm-modal');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');

    function showModal() {
        confirmModal.classList.remove('hidden');
    }

    function hideModal() {
        confirmModal.classList.add('hidden');
    }

    if (resetIdentifiedBtn) {
        resetIdentifiedBtn.addEventListener('click', () => {
            showModal();
        });
    }

    if (modalCancelBtn) {
        modalCancelBtn.addEventListener('click', hideModal);
    }

    if (modalConfirmBtn) {
        modalConfirmBtn.addEventListener('click', () => {
            state.identifiedItems = [];
            localStorage.removeItem('shiren6_identified_items');
            updateResults();
            hideModal();
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === confirmModal) {
            hideModal();
        }
    });

    // Main Logic
    function updateResults() {
        resultsContainer.innerHTML = '';

        if (state.price === '' || isNaN(state.price)) {
            resultsContainer.innerHTML = '<div class="placeholder-message">価格を入力してください</div>';
            return;
        }

        const results = identifyItem(state.price, state.transaction, state.category, itemData);

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="placeholder-message">該当するアイテムが見つかりませんでした</div>';
            return;
        }

        renderResults(results);
    }

    function renderResults(results) {
        results.forEach(result => {
            const card = document.createElement('div');
            const isIdentified = state.identifiedItems.includes(result.item.name);
            card.className = `result-card ${isIdentified ? 'identified' : ''}`;

            let tagsHtml = `<span class="item-tag">${getCategoryName(result.item.category)}</span>`;

            if (result.condition === 'cursed') {
                tagsHtml += `<span class="item-tag tag-cursed">呪い</span>`;
            } else if (result.condition === 'blessed') {
                tagsHtml += `<span class="item-tag tag-blessed">祝福</span>`;
            } else if (result.condition === 'divine') {
                tagsHtml += `<span class="item-tag tag-blessed">神器</span>`;
            }

            let detailsHtml = '';
            if (result.capacity !== undefined) {
                detailsHtml += `<div>容量/回数: ${result.capacity}</div>`;
            }

            card.innerHTML = `
                <div class="card-header">
                    <div class="item-name">${result.item.name}</div>
                </div>
                <div class="item-details">
                    <div style="margin-bottom: 0.5rem;">${tagsHtml}</div>
                    ${detailsHtml}
                    <div class="price-match-type">
                        ${state.transaction === 'buy' ? '買値' : '売値'}: ${result.matchedPrice}G
                    </div>
                </div>
            `;

            // Attach event listener to the card itself
            card.addEventListener('click', () => {
                toggleIdentified(result.item.name);
            });

            resultsContainer.appendChild(card);
        });
    }

    function getCategoryName(category) {
        const map = {
            'weapon': '武器',
            'shield': '盾',
            'bracelet': '腕輪',
            'scroll': '巻物',
            'staff': '杖',
            'pot': '壺',
            'grass': '草'
        };
        return map[category] || category;
    }

    // Initialize state from input if present (e.g. on reload)
    if (priceInput) {
        const initialPrice = parseInt(priceInput.value, 10);
        if (!isNaN(initialPrice)) {
            state.price = initialPrice;
            updateResults();
        }
    }
});

