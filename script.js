if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    var inputt = quantityInputs[i];
    inputt.addEventListener("change", quantityChanged);
  }
  // Add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    var buttonn = addCart[i];
    buttonn.addEventListener("click", addCartClicked);
  }

  // Buy button working
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

// Buy button
function buyButtonClicked() {
  cart2.style.backgroundColor = "orange";
  cart2.style.textAlign = "center";
  cart2.innerHTML = `
<div class="final-cart">
<p>Compra realizada com sucesso!</p>
<p>Tempo estimado de entrega: <br> 30-40 minutos.</p>
<a href="index.html"><button class="normal">Continuar comprando</button></a>
</div>
`;
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Quantity Changes
function quantityChanged(event) {
  var inputtt = event.target;
  if (isNaN(inputtt.value) || inputtt.value <= 0) {
    inputtt.value = 1;
  }
  updateTotal();
}
// Add to cart
function addCartClicked(event) {
  var buttonnn = event.target;
  var shopProducts = buttonnn.parentElement;
  var prodTitle =
    shopProducts.getElementsByClassName("product-title")[0].innerText;
  var prodPrice =
    shopProducts.getElementsByClassName("prod-price")[0].innerText;
  var prodImg = shopProducts.getElementsByClassName("prod-img")[0].src;
  addProductToCart(prodTitle, prodPrice, prodImg);
  updateTotal();
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

function addProductToCart(prodTitle, prodPrice, prodImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartBoxContentt = `
<i class="fas fa-times cart-remove"></i>
<img src="${prodImg}" alt="product1" class="cart-img">
<div class="detail-box">
<div class="cart-product-title">${prodTitle}</div>
<div class="cart-price">${prodPrice}</div>
<input type="number" value="1" class="cart-quantity">
`;
  const cartItemss = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItemss.getElementsByClassName("cart-product-title");
  cartShopBox.innerHTML = cartBoxContentt;
  cartItemss.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
  for (let i = 0; i < cartItemsNames.length; i++) {
    return;
  }
}

// Update
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var totalpric = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var quantity = quantityElement.value;
    var price = parseFloat(priceElement.innerText.replace("R$", ""));
    totalpric = totalpric + price * quantity;
  }
  totalpric = Math.round(totalpric * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText =
    "R$" + totalpric.toFixed(2); // Convert number to string and return the whole price
}

const cartIcon2 = document.getElementById("cart-icon2");
var cart2 = document.querySelector(".cart2");
const closeCart2 = document.querySelector("#close-cart2");

cartIcon2.addEventListener("click", () => {
  cart2.classList.add("active");
});

closeCart2.addEventListener("click", () => {
  cart2.classList.remove("active");
});

const cartIcon3 = document.getElementById("cart-icon3");
cartIcon3.addEventListener("click", () => {
  cart2.classList.add("active");
});

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active2");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active2");
  });
}
