fetch("js/tovar.json")
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById("product-container");

    data.forEach(item => {
      const divTovar = document.createElement('div');
      divTovar.classList.add('product-card');

      let priceHTML = `<p class="product-price">${item.price} грн</p>`;
      if (item.discountedPrice !== null) {
        priceHTML = `<p class="product-old-price">${item.price} грн</p>
                     <p class="product-discounted-price">${item.discountedPrice} грн</p>`;
      }

      let couponPriceHTML = '';
      if (item.couponPrice !== null) {
        couponPriceHTML = `<p class="product-coupon-price">Ціна за купоном: ${item.couponPrice} грн</p>`;
      }

      divTovar.innerHTML = `
        <div class="product-image">
          <img src="img/${item.photo}" alt="${item.title}" onerror="this.onerror = null; this.src='img/default.png';" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-title">${item.title}</h3>
          <p class="product-description">${item.description}</p>
          <div class="product-details">
            <div class="product-rating">
              ${"⭐".repeat(item.rating) + "☆".repeat(5 - item.rating)}
            </div>
            <p class="product-type">${item.type}</p>
          </div>
          <div class="product-pricing">
            ${priceHTML}
            ${couponPriceHTML}
            </div>
      `;

      productContainer.appendChild(divTovar);
    });
  })
  .catch(error => {
    console.error('Помилка при завантаженні JSON:', error);
  });