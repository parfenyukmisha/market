const itemsContainer = document.getElementById("items");

fetch('js/tovar.json')
  .then(response => response.json())
  .then(productData => {
    productData.forEach((product) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      itemDiv.innerHTML = `
        <div class="item-title">${product.title}</div>

        <div class="item-image">
          <img src="${product.image}" alt="${product.title}">
        </div>

        <div class="parts-pay">
          ${product.partsPay6 ? '<div><img src="img/free-icon-paws-4225935.png" alt="">6</div>' : ''}
          ${product.partsPay8 ? '<div><img src="img/pb_parts_payment.svg" alt="">8</div>' : ''}
        </div>

        <div class="price">
          <div><span>${product.oldPrice} </span><sup>грн</sup></div>
          <div><span>${product.newPrice} </span><sup>грн</sup></div>
        </div>

        <div class="price bonus">
          <div>Ціна за купоном</div>
          <div><span>${product.bonusPrice} </span><sup>грн</sup></div>
        </div>
      `;

      itemsContainer.appendChild(itemDiv);
    });
  })
  .catch(error => {
    console.error("Помилка завантаження даних:", error);
    itemsContainer.innerHTML = '<p>Не вдалося завантажити товари.</p>';
  });