//-- Author: Low Zhi Yi

displayCartItem();

function displayCartItem() {
    let displayProduct = '';
    let cartProductLS = JSON.parse(localStorage.getItem('productInCart'));

    // if local storage is null, return false
    cartProductLS && cartProductLS.forEach((item) => {
        // add each product row
        displayProduct += `
            <tr class="cart">
                <td><img src="${item.img}" alt="product image" height="100" /></td>
                <td><b>${item.name}</b><br /><span style="display: none;">~</span><i>${item.shade}</i></td>
                <td>RM${item.price}</td>
                <td>
                    <button class="minus">-</button>
                    <input type="text" class="quantityInput" value="${item.quantity}" readonly />
                    <button class="add">+</button>
                </td>
                <td>RM${item.totalPrice.toFixed(2)}</td>
                <td class="remove"><div onclick="removeCartItem()"></div></td>
            </tr>
        `;
    });

    // display product details in cart table
    document.querySelector('.displayCart').innerHTML = displayProduct;

    displayDelivery();  // display delivery price
    displayCartTotal(); // display total price
    addQuantity();      // add button for quantity
    minusQuantity();    // minus button for quantity
}


function displayDelivery() {
    // declare total and get each item's total price
    let total = 0;
    let cartProduct = JSON.parse(localStorage.getItem("productInCart"));

    // calculate total price of all items in cart
    cartProduct && cartProduct.forEach((item) => {
        total += item.totalPrice;
    })
    console.log(total);

    // display delivery price in table footer
    if (total > 110 || total == 0) {
        document.querySelector('.deliveryPrice').textContent = "RM0.00";
    }
    else {
        document.querySelector('.deliveryPrice').textContent = "RM15.00";
    }
}


function displayCartTotal() {
    // declare total and get each item's total price
    let total = 0;
    let cartProduct = JSON.parse(localStorage.getItem("productInCart"));

    // calculate total price of all items in cart
    cartProduct && cartProduct.forEach(item => {
        total += item.totalPrice;
    })

    // add delivery fee to the final total price
    if (total < 110 && total > 0) {
        total += 15;
    }

    // save total to local storage and display in table footer in 2 decimal places
    localStorage.setItem('finalCartTotal', JSON.stringify(total));
    document.querySelector('.totalPrice').textContent = "RM" + total.toFixed(2);
}


// clicked remove icon
function removeCartItem() {
    // to get the specific item details from table depends on which remove button clicked
    var productDetails = event.target.parentElement.parentElement.children[1].textContent;

    // seperate name and shade
    var separateProduct = productDetails.split("~");
    var productName = separateProduct[0];
    var productShade = separateProduct[1];

    console.log("Name & Shade: " + productDetails);
    console.log("Name: " + productName);
    console.log("Shade: " + productShade);

    // ask for confirmation before removing item
    var doubleConfirm = confirm("Confirm to remove " + productName + "(" + productShade + " )?");

    // if confirm to delete
    if (doubleConfirm) {
        const removeButtons = document.querySelectorAll('.remove');
        const currentProduct = [];
        // check which remove button is clicked
        removeButtons && removeButtons.forEach(removeButton => {
            // for the clicked remove button
            removeButton.addEventListener("click", function () {
                // get product data from local storage
                let cartProductLS = JSON.parse(localStorage.getItem('productInCart'));

                // loop to remove the selected product
                cartProductLS.forEach((item) => {
                    // get every cart product's image as it is unique
                    cartImage = event.target.parentElement.parentElement.children[0].children[0].getAttribute("src");
                    console.log(cartImage);

                    // only push items other than the removed one to the array
                    if (item.img != cartImage) {
                        currentProduct.push(item);
                    }
                    else {
                        console.log("This product will not be added into the array.");
                    }
                });
                // store array after removing the selected product to local storage
                localStorage.setItem('productInCart', JSON.stringify(currentProduct));
                window.location.reload();   // refresh the page
            });
        });
    }
    // the user cancel to remove cart item
    else {
        return false;
    }
    displayCartItem();
}


//-- functions for sorting algorithm
function sortNameAscending() {
    // get product details and push into a new array
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'));
    let sortArray = [];
    console.log(cartProduct);
    cartProduct && cartProduct.forEach((item) => {
        sortArray.push(item);
    });

    sortArray.sort((item1, item2) => {
        // change product name to lower case to sort accurately
        let productA = item1.name.toLowerCase();
        let productB = item2.name.toLowerCase();

        // sort string from a to z
        if (productA < productB) {
            return -1;
        }
        if (productA > productB) { 
            return 1;
        }
        // else return default value (no sorting)
        return 0;
    });

    // renew the local storage
    localStorage.setItem('productInCart', JSON.stringify(sortArray));
    window.location.reload();
    displayCartItem();
}

function sortNameDescending() {
    // get product details and push into a new array
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'));
    let sortArray = [];
    console.log(cartProduct);
    cartProduct && cartProduct.forEach((item) => {
        sortArray.push(item);
    });

    sortArray.sort((item1, item2) => {
        // change product name to lower case to sort accurately
        let productA = item1.name.toLowerCase();
        let productB = item2.name.toLowerCase();
        
        // sort string from z to a
        if (productA > productB) {
            return -1;
        }
        if (productA < productB) { 
            return 1;
        }
        // else return default value (no sorting)
        return 0;
    });

    // renew the local storage
    localStorage.setItem('productInCart', JSON.stringify(sortArray));
    window.location.reload();
    displayCartItem();
}

function sortPriceAscending() {
    // get product details and push into a new array
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'));
    let sortArray = [];
    console.log(cartProduct);
    cartProduct && cartProduct.forEach((item) => {
        sortArray.push(item);
    });

    sortArray.sort((item1, item2) => {
        return item1.totalPrice - item2.totalPrice;
    });

    // renew the local storage
    localStorage.setItem('productInCart', JSON.stringify(sortArray));
    window.location.reload();
    displayCartItem();
}

function sortPriceDescending() {
    // get product details and push into a new array
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'));
    let sortArray = [];
    console.log(cartProduct);
    cartProduct && cartProduct.forEach((item) => {
        sortArray.push(item);
    });

    sortArray.sort((item1, item2) => {
        return item2.totalPrice - item1.totalPrice;
    });

    // renew the local storage
    localStorage.setItem('productInCart', JSON.stringify(sortArray));
    window.location.reload();
    displayCartItem();
}


// 2 functions to adjust product quantity
function addQuantity() {
    var increaseButtons = document.querySelectorAll(".add");
    increaseButtons.forEach(increaseButton => {
        increaseButton.addEventListener("click", function() {
            // get product details from local storage
            let cartProductLS = JSON.parse(localStorage.getItem('productInCart'));
            // get the specific product to increase quantity
            var productDetails = increaseButton.parentNode.parentNode;
            console.log(productDetails);
            var productImage = productDetails.children[0].children[0].getAttribute("src");

            cartProductLS && cartProductLS.forEach(item => {
                if (item.img == productImage) {
                    // make sure quantity does not exceed 4
                    if (item.quantity > 3) {
                        alert("Maximum quantity reached.")
                        return false;
                    }
                    // else add 1 quantity for 1 click and update the total price
                    else {
                        item.quantity++;
                        item.totalPrice = item.price * item.quantity;
                    }
                }
            });

            localStorage.setItem('productInCart', JSON.stringify(cartProductLS));
            displayCartItem();
        })
    });
};

function minusQuantity() {
    var decreaseButtons = document.querySelectorAll(".minus");
    decreaseButtons.forEach(decreaseButton => {
        decreaseButton.addEventListener("click", function() {
            // get product details from local storage
            let cartProductLS = JSON.parse(localStorage.getItem('productInCart'));
            // get the specific product to decrease quantity
            var productDetails = decreaseButton.parentNode.parentNode;
            console.log(productDetails);
            var productImage = productDetails.children[0].children[0].getAttribute("src");

            cartProductLS && cartProductLS.forEach(item => {
                if (item.img == productImage) {
                    // make sure quantity does not less than 1
                    if (item.quantity < 2) {
                        alert("Minimum quantity reached.")
                        return false;
                    }
                    // else minus 1 quantity for 1 click and update the total price
                    else {
                        item.quantity--;
                        item.totalPrice = item.price * item.quantity;
                    }
                }
            });

            localStorage.setItem('productInCart', JSON.stringify(cartProductLS));
            displayCartItem();
        })
    });
};

// Checkout to Payment Success page
function checkOut() {
    if (localStorage.logInName == null) {
        event.preventDefault();
        alert("Please login to continue.");
        window.location.href="login-signup.html";
    }
    else {
        let total = 0;
        let cartProduct = JSON.parse(localStorage.getItem("productInCart"));
        cartProduct && cartProduct.forEach(item => {
            total += item.totalPrice;
        })
        if (total == 0) {
            event.preventDefault();
            alert("No item in cart.");
        }
    }
}