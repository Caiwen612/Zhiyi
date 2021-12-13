//-- Author: Low Zhi Yi
// For product pages

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
    console.log("Adding product below to cart: ");

    // get product name
    var productName = document.querySelector(".product_name").textContent;
    console.log("Name: " + productName);

    // get product shade
    var shade = document.querySelector(".get-shade");
    var shadeValue = shade.options[shade.selectedIndex].value;
    var shadeName = shadeValue.slice(2, shadeValue.length);
    console.log("Shade: " + shadeName);

    // get product price per item
    var price = document.querySelector(".product_price").textContent;
    var priceInNum = parseInt(price.slice(2, price.length)).toFixed(2);
    console.log("Price: RM" + priceInNum);

    // get product amount
    var amount = document.querySelector(".get-amount");
    var toNum = parseInt(amount.options[amount.selectedIndex].textContent);
    console.log("Quantity: " + toNum);

    // Check if shade is selected
    if (shadeValue == "0") {
        alert("Please select a shade!");
        return false;
    }
    else {
        // get product image
        function getAlt(shadeName) {
            return document.querySelectorAll('img[alt="' + shadeName + '"]');
        }

        var getImage = getAlt(shadeName)[0];
        var productImg = getImage.getAttribute('src');
        console.log("Image: " + productImg);
    }

    // Check if quantity is selected (check if it's a number)
    if (Number.isNaN(toNum)) {
        alert("Please select a quantity!");
        return false;
    }

    // declare list of items(object) to display in cart
    let product = {
        img: productImg,
        name: productName,
        shade: shadeName,
        price: priceInNum,
        quantity: toNum,
        totalPrice: priceInNum * toNum
    }
    console.log(product);

    // call function to store products into cart
    alert("Item added to cart!");
    addProductToLocalStorage(product);
};


// add cart product details to local storage
function addProductToLocalStorage(product) {
    // declare array to store product before storing in local storage
    const arrProduct = [];

    // Console check
    console.log("Product details: ");
    console.log(product);

    // get item in local storage for checking
    let cartProduct = JSON.parse(localStorage.getItem("productInCart"));

    // if the storage is not created yet
    if (cartProduct === null) {
        console.log("Local storage is empty");

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
                var sameProduct = confirm("The item is already in your cart. Do you wish to overwrite the quantity " 
                    + item.quantity + " with new quantity " + product.quantity + "?");
                
                // If yes, overwrite 
                if (sameProduct == true) {
                    product.quantity = product.quantity;
                    product.totalPrice = product.price * product.quantity;
                    alert("Quantity is changed to " + product.quantity);
                }
                // Else no, quanitty not changed
                else {
                    product.quantity = item.quantity;
                    product.totalPrice = product.price * item.quantity;
                    alert("Quantity remains as " + item.quantity);
                }
            }
            // item not in cart
            else {
                arrProduct.push(item);
                console.log(product.name + " " + product.shade + " added for the first time");
            }
        });
        // push new product into array
        arrProduct.push(product);
    }
    
    // set the product data in array to local storage
    localStorage.setItem("productInCart", JSON.stringify(arrProduct));
}