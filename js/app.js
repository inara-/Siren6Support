import { itemData } from './items.js';
import { identifyItem } from './identifier.js';

// State
const state = {
    price: '',
    transaction: 'buy', // 'buy' or 'sell'
    category: 'all'
};

// DOM Elements
const priceInput = document.getElementById('price-input');
const clearBtn = document.getElementById('clear-btn');
const transactionInputs = document.querySelectorAll('input[name="transaction"]');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultsContainer = document.getElementById('results-container');

// Event Listeners
priceInput.addEventListener('input', (e) => {
    state.price = parseInt(e.target.value, 10);
    updateResults();
});

clearBtn.addEventListener('click', () => {
    priceInput.value = '';
    state.price = '';
    priceInput.focus();
    updateResults();
});

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

// Main Logic
function updateResults() {
    resultsContainer.innerHTML = '';

    if (!state.price || isNaN(state.price)) {
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
        card.className = 'result-card';

        let tagsHtml = `<span class="item-tag">${getCategoryName(result.item.category)}</span>`;

        if (result.condition === 'cursed') {
            tagsHtml += `<span class="item-tag tag-cursed">呪い</span>`;
        } else if (result.condition === 'blessed') {
            tagsHtml += `<span class="item-tag tag-blessed">祝福</span>`;
        }

        let detailsHtml = '';
        if (result.capacity) {
            detailsHtml += `<div>容量/回数: ${result.capacity}</div>`;
        }

        card.innerHTML = `
            <div class="item-name">${result.item.name}</div>
            <div class="item-details">
                <div style="margin-bottom: 0.5rem;">${tagsHtml}</div>
                ${detailsHtml}
                <div class="price-match-type">
                    ${state.transaction === 'buy' ? '買値' : '売値'}: ${result.matchedPrice}G
                </div>
            </div>
        `;
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
