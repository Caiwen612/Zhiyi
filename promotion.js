//-- Author: Tan Jie Yi & Low Zhi Yi

//-- Author: Tan Jie Yi
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      //restart to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
}

//-- Author: Low Zhi Yi
// Add to cart module (Similar as cart.js)
document.addEventListener('DOMContentLoaded', function(){
    init();
});

function init() {
    // Click 'Add to cart' button
    document.querySelectorAll(".cart_button").forEach((button) => {
        button.addEventListener("click", getProductDetail);
    });
}

function getProductDetail() {
    console.log("Obtaining product details...");

    // to get respective correct items to cart
    var productInfo = event.target.parentElement.parentElement.parentElement;
    console.log(productInfo);

    // get product image
    var getImage = productInfo.querySelector(".product-img a img");
    var productImg = getImage.getAttribute('src');
    console.log("Image: " + productImg);

    // get product name and shade
    var productDetail = productInfo.querySelector(".product-name").textContent;
    console.log("Name & Shade: " + productDetail);

    // separate product name and product shade
    var separateProduct = productDetail.split("•");
    var productName = separateProduct[0];
    var productShade = separateProduct[1];
    console.log("Name: " + productName);
    console.log("Shade: " + productShade);

    // get product price per item
    var price = productInfo.querySelectorAll(".product-price")[1].textContent;
    // set as float in 2 decimal places
    var priceInNum = parseFloat(price.slice(2, price.length)).toFixed(2);
    console.log("Price: RM" + priceInNum);

    // get product amount
    var amount = 1;

    // declare list of items(object) to display in cart
    let product = {
        img: productImg,
        name: productName,
        shade: productShade,
        price: priceInNum,
        quantity: amount,
        totalPrice: priceInNum * amount
    }

    // call function to store products into cart
    addProductToLocalStorage(product);
};

// add cart product details to local storage
function addProductToLocalStorage(product) {
    // declare array to store product before storing in local storage
    const arrProduct = [];
    alert("Item added to cart!");
    console.log("Current product details: ");
    console.log(product);

    // get item in local storage for checking
    let cartProduct = JSON.parse(localStorage.getItem("productInCart"));
    
    // if the storage is not created yet
    if (cartProduct === null) {
        console.log("Created local storage.");

        // add data into array then to local storage
        arrProduct.push(product);
        localStorage.setItem("productInCart", JSON.stringify(arrProduct));

        // check and alert
        console.log(product.name + " (" + product.quantity + ") added.");
    }
    // productInCart storage exists
    else {
        // compare item in storage and current product (loop)
        cartProduct.forEach((item) => {
            // check if the item is alrd added to cart
            console.log("Checking for repeat items...");
            console.log(item);      // items in local storage
            console.log(product);   // newly added product

            if (product.img == item.img) {
                alert("Item existed in cart. Quantity renewed to 1.");
            }
            // if storage did not have this item, then add in
            else {
                // push previous cart items into array
                arrProduct.push(item);
            }
        });
        // push new product into array
        arrProduct.push(product);
    }
    
    // set the product data in array to local storage
    localStorage.setItem("productInCart", JSON.stringify(arrProduct));
}