// Datos de ejemplo (deberías reemplazar con una API real)
const productsData = [
    {
        id: 1,
        name: 'Echeveria Perla',
        price: 12990,
        category: 'Suculentas',
        image: '../assets/images/productos/echeveria.webp',
        description: 'Hermosa suculenta con forma de roseta y tonos perlados.',
        stock: 15
    },
    // ... más productos
];

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    productsData.forEach(product => {
        grid.innerHTML += `
            <div class="col-lg-4 col-md-6" data-category="${product.category}" data-price="${product.price}">
                <div class="product-card" data-aos="fade-up">
                    <div class="card-image">
                        <img src="${product.image}" class="img-fluid" alt="${product.name}" loading="lazy">
                        <button class="quick-view" data-bs-toggle="modal" data-bs-target="#productModal">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-meta">
                            <span class="price">$${product.price.toLocaleString('es-CL')}</span>
                            <span class="category">${product.category}</span>
                        </div>
                        <button class="btn btn-primary add-to-cart">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Filtrado de productos
document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceSort').addEventListener('change', sortProducts);

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    document.querySelectorAll('#productsGrid > div').forEach(item => {
        const matchesSearch = item.querySelector('h3').textContent.toLowerCase().includes(searchTerm);
        const matchesCategory = category ? item.dataset.category === category : true;
        
        item.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
}

function sortProducts() {
    const sortBy = document.getElementById('priceSort').value;
    const container = document.getElementById('productsGrid');
    
    Array.from(container.children)
        .sort((a, b) => sortBy === 'asc' ? 
            a.dataset.price - b.dataset.price : 
            b.dataset.price - a.dataset.price)
        .forEach(node => container.appendChild(node));
}

document.getElementById('resetFilters').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceSort').value = '';
    filterProducts();
});

