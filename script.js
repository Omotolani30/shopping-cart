let showList = document.getElementById("showList");
let count = 1;

    function displayNav(){
      showList.style.display = "block";
    }
    function closeNav(){
      showList.style.display = "none"
    }
    
    function minus(){
      count--;
      document.getElementById("count").textContent = count;
    }
    function plus(){
      count++;
      document.getElementById("count").textContent = count;
    }

    let slideIndex = 1;
    showSlides(slideIndex);
    let lightBox = document.getElementById("lightBox");
    
    function openLightBox() {
      lightBox.style.display = "block";
    }
    function closeLightBox() {
      lightBox.style.display = "none";
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length){
        slideIndex = 1
      }
      if (n < 1){
        slideIndex = slides.length
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
    }

    // Cart functionality
    let allItems = JSON.parse(localStorage.getItem("items")) ||[];
    let cart = document.getElementById("cart");
    let cartList = document.getElementById("cartList");

    function addCart() {
      const item = {
        title: "Fall Limited Edition Sneakers",
        price: 125.00,
        quantity: count,
        image: "images/image-product-1.jpg"
      };
      cartList.innerHTML = "";
      allItems.push(item);
      displayCart();
      localStorage.setItem("items", JSON.stringify(allItems));
    }

    function showCart() {
      cart.style.display = (cart.style.display === "block") ? "none" : "block";
    }

    function displayCart() {
      allItems.forEach((item, index) => {
      const total = item.price * item.quantity;

      cartList.innerHTML = `
        <div class="flex items-center justify-center gap-3 px-2 py-5">
          <img src="${item.image}" class="w-1/6 rounded-sm">
          <div class="text-gray-400">
            <p class="text-sm font-medium">${item.title}</p>
            <p>$${item.price.toFixed(2)} &times; ${item.quantity} 
              <span class="font-bold text-black"> $${total.toFixed(2)}</span>
            </p>
          </div>
          <img src="images/icon-delete.svg" class="cursor-pointer" onclick="removeItem(${index})">
        </div>
         <button class="bg-orange-400 w-full rounded p-2 mx-auto text-sm font-medium">Checkout</button>
      `;
      });
    }

    displayCart()