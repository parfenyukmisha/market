const productData = [
  {
    title: "Мотокоса 43",
    image: "img/image.png",
    partsPay6: true,
    partsPay8: true,
    oldPrice: 5499,
    newPrice: 4497,
    bonusPrice: 4395,
  },
  {
    title: "Елкктричний тример 110",
    image: "img/3212861224_w600_h600_3212861224.webp",
    partsPay6: true,
    partsPay8: true,
    oldPrice: 5499,
    newPrice: 4497,
    bonusPrice: 4395,
  },
  {
    title: "Електрична газонакосарка 32",
    image: "img/pol_pl_prowadnica-45cm-1-6mm-3-8-stihl-light-04-30030087717-36413_1_2.1800x1800w.jpg",
    partsPay6: true,
    partsPay8: true,
    oldPrice: 5499,
    newPrice: 4497,
    bonusPrice: 4395,
  },
  {
    title: "Акумуляторний обприскувач",
    image: "img/1674217014.jpg",
    partsPay6: true,
    partsPay8: true,
    oldPrice: 5499,
    newPrice: 4497,
    bonusPrice: 4395,
  },
];

const itemsContainer = document.getElementById("items");

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