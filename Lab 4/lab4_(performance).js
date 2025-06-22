const products = [
    {
      name: "Product one",
      img: "https://i.pinimg.com/236x/39/43/40/39434011ae0f17e4756d459973c7368f.jpg",
      price: 5.99,
    },
    {
      name: "Product two",
      img: "https://images.everydayhealth.com/images/diet-nutrition/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg",
      price: 7.99,
    },
    {
      name: "Product three",
      img: "https://cdnimg.webstaurantstore.com/uploads/blog/2021/5/fresh-dragon-fruit-sliced-in-half-on-wooden-board-min.jpg",
      price: 2.99,
    },
    {
      name: "Product four",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ7soB3V_WsBSBKQCGYClhfgwfmmsPG2dqQ&s",
      price: 4.49,
    },
  ];
  
  const discounts = [10, 5, 20, 15]; // 10%, 5%, 20%, 15%
  
  const cartContainer = document.getElementById("cart-container");
  
  products.forEach((product, index) => {
    const discountPercent = discounts[index] || 0;
    const discountAmount = (product.price * (discountPercent / 100)).toFixed(2);
    const discountedPrice = (product.price - discountAmount).toFixed(2);
  
    const productDiv = document.createElement("div");
    productDiv.className = "cart-item";
  
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>
        ${
          discountPercent > 0
            ? `<span style="text-decoration: line-through; color: #999;">$${product.price.toFixed(2)}</span> 
               <span style="color: #28a745; font-weight: bold;">$${discountedPrice}</span>`
            : `$${product.price.toFixed(2)}`
        }
      </p>
      <button>Add to Cart</button>
    `;
  
    cartContainer.appendChild(productDiv);
  });
  