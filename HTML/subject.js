let innerpart = "";
products.forEach((element) => {
   innerpart += `<div class="flex">
    <div class="book-image"><img src="${element.image}"></div>
    <div class="book-name">${element.name}</div>
    <div class="avail-books">${element.description}</div>
</div>`

})
console.log(innerpart);
document.querySelector('.container').innerHTML=innerpart;


    function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <div class="book-image"><img  src="${product.image}" alt="${product.name}"></div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            resultsContainer.appendChild(productItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No Books found...(*.*)</p>';
    }
}
function showSuggestions() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const suggestions = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    if (suggestions.length > 0 && query !== '') {
        suggestions.forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = product.name;

            suggestionItem.onmouseover = function() {
                document.getElementById('search-input').value = product.name;
            };

            suggestionItem.onclick = function() {
                search();
                suggestionsContainer.innerHTML = '';
            };

            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function toggleSuggestions(show) {
    const suggestionsContainer = document.getElementById('suggestions');
    if (show) {
        suggestionsContainer.style.display = 'block';
    } else {
        setTimeout(() => {
            suggestionsContainer.style.display = 'none';
        }, 100);
    }
}
