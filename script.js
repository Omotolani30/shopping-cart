let mobileMenu = document.getElementById("mobileMenu");
//Responsive navbar
function openNav() {
  mobileMenu.style.display = "flex";
}
function closeNav() {
  mobileMenu.style.display = "none";
}

// number of product being added to cart
let count = 1;
let cartCount = 0;
let cartCounter = document.getElementById("cartCounter");
function minus() {
  if (count > 1) {
    count--;
    document.getElementById("count").textContent = count;
  }
}
function plus() {
  count++;
  document.getElementById("count").textContent = count;
}

let lightBox = document.getElementById("lightBox");
window.onclick = function (event) {
  if (event.target == lightBox) {
    closeLightBox();
  }
}
function openLightBox() {
  lightBox.style.display = "flex";
}
function closeLightBox() {
  lightBox.style.display = "none";
}


// slide functionality
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// lightbox functionality
let lightboxIndex = 1;
showLightboxSlides(lightboxIndex);

function showLightboxSlides(n) {
  let j;
  let lightBoxSlides = document.getElementsByClassName("lightBoxSlides");
  let boxDots = document.getElementsByClassName("box_dot");

  if (n > lightBoxSlides.length) {
    lightboxIndex = 1;
  }
  if (n < 1) {
    lightboxIndex = lightBoxSlides.length;
  }

  for (j = 0; j < lightBoxSlides.length; j++) {
    lightBoxSlides[j].style.display = "none";
  }
  for (j = 0; j < boxDots.length; j++) {
    boxDots[j].className = boxDots[j].className.replace(" active", "");
  }

  lightBoxSlides[lightboxIndex - 1].style.display = "block";
}

function plusLightBoxSlides(n) {
  showLightboxSlides((lightboxIndex += n));
}
function currentLightBoxSlide(n) {
  showLightboxSlides((lightboxIndex = n));
}

// Cart functionality
let allItems = [];
let cart = document.getElementById("cart");
let cartList = document.getElementById("cartList");

function updateCount(count) {
  cartCounter.textContent = count;
}

// add & remove items from cart
function addCart() {
  const item = {
    title: "Fall Limited Edition Sneakers",
    price: 125.0,
    quantity: count,
    image: "images/image-product-1.jpg",
  };
  cartBadge.style.display = "flex";
  allItems.push(item);
  cartCount++;
  displayCart();
  updateCount(allItems.length);
}
function removeItem(index) {
  allItems.splice(index, 1);
  cartCount--;
  updateCount(allItems.length);
  displayCart();
}

// toggle cart
function openCart() {
  cart.style.display = cart.style.display === "block" ? "none" : "block";
}
function checkout() {
  cart.style.display = "none";
}

function displayCart() {
  cartList.innerHTML = "";
  allItems.forEach((item, index) => {
    const total = item.price * item.quantity;

    cartList.innerHTML += `
    <div class="flex items-center justify-center gap-3 px-2 py-5 lg:px-4">
      <img src="${item.image}" class="w-1/6 rounded-sm">
      <div class="text-gray-400">
        <p class="text-sm font-medium">${item.title}</p>
        <p>$${item.price.toFixed(2)} &times; ${item.quantity} 
          <span class="font-bold text-black"> $${total.toFixed(2)}</span>
        </p>
      </div>
      <img src="images/icon-delete.svg" class="cursor-pointer" onclick="removeItem(${index})">
    </div>
  `;
  });

  if (allItems.length > 0) {
    cartList.innerHTML += `
      <button class="bg-orange-400 w-9/12 lg:w-10/12 rounded p-3 mx-auto text-sm font-medium" onclick="checkout()">Checkout</button>
    `;
  } else {
    cartList.innerHTML = `<p class="text-center text-gray-400">Your cart is empty</p>`;
    cartBadge.style.display = "none"
  }
}