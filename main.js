let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let burgerMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let shoppingCart = document.querySelector(".navbar-shopping-cart");
let productDetail = document.querySelector(".product-detail");

function toggleDesktopMenu() {
    let isProductDetailActive = !productDetail.classList.contains("inactive");

    if (isProductDetailActive) {
        productDetail.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    let isDesktopMenuActive = !desktopMenu.classList.contains("inactive");

    if (isDesktopMenuActive) {
        desktopMenu.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}

navbarEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleProductDetail);

// PRODUCTS
let productList = [];

productList.push({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "TV",
    price: 400,
    img: "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "PC",
    price: 500,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Cellphone",
    price: 330,
    img: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Car",
    price: 10000,
    img: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(products) {
    for (product of products) {
        let cardsContainer = document.querySelector(".cards-container");

        let productCardDiv = document.createElement("div");
        productCardDiv.className = "product-card";

        let productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);

        let productInfoDiv = document.createElement("div");
        productInfoDiv.className = "product-info";

        let productDetailsDiv = document.createElement("div");

        let productPriceP = document.createElement("p");
        productPriceP.innerText = `$${product.price}`;

        let productNameP = document.createElement("p");
        productNameP.innerText = `${product.name}`;

        let productFigure = document.createElement("figure");

        let figureImg = document.createElement("img");
        figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productDetailsDiv.append(productPriceP, productNameP);
        productFigure.append(figureImg);
        productInfoDiv.append(productDetailsDiv, productFigure);
        productCardDiv.append(productImg, productInfoDiv);
        cardsContainer.append(productCardDiv);
    }
}

renderProducts(productList);
