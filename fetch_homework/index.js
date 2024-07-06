document.addEventListener('DOMContentLoaded', function () {
    const previewPopup = document.getElementById('previewPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const popupImage = document.getElementById('popupImage');
    /*products*/
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('product-container');

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.setAttribute('data-id', product.id); // Her ürün kartına bir id atıyoruz

                const productImage = document.createElement('img');
                productImage.className = 'product-image';
                productImage.src = product.image;
                productImage.alt = product.title;

                const productName = document.createElement('h2');
                productName.className = 'product-name';
                productName.textContent = product.title;

                const productPrice = document.createElement('p');
                productPrice.className = 'product-price';
                productPrice.textContent = `₺${product.price}`;
                /*click-open*/
                productCard.addEventListener('click', function () {
                    popupTitle.textContent = product.title;
                    popupDescription.textContent = product.description;
                    popupImage.src = product.image;
                    popupPrice.textContent = `₺${product.price}`;

                    previewPopup.style.display = 'block';
                });

                productCard.appendChild(productImage);
                productCard.appendChild(productName);
                productCard.appendChild(productPrice);

                container.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error:', error));
        /*close-icon*/
    closePopup.addEventListener('click', function () {
        previewPopup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });
});
