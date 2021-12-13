function displayCartTotal() {
    let total = parseFloat(localStorage.getItem('finalCartTotal')).toFixed(2);
    document.querySelector('.total-price').textContent = "TOTAL:RM" + total;
}
displayCartTotal();

function pointCounter() {
    let total = parseFloat(localStorage.getItem('finalCartTotal')).toFixed(2);
    let pointLS = localStorage.getItem("point");
    let INTpointLS = parseInt(localStorage.getItem("point"));
    if (pointLS === null) {
        console.log("empty");
        if (total > 0) {
            point = total;
        }
        localStorage.setItem("point", parseInt(point));
    } else {
        if (total > 0) {
            var newPoint = 0;
            var pointInLS = INTpointLS;
            newPoint = parseFloat(total) + parseInt(pointInLS);
            localStorage.setItem("point", parseInt(newPoint))
        }
    }
    //clear local storage
    localStorage.removeItem("productInCart");
    localStorage.removeItem("finalCartTotal");
    window.location.href = "payment_success.html";
    alert("Payment sucessfully");

}

function success() {
    var form = document.querySelector(".checkOutForm");
    console.log(form.checkValidity());
    if (form.checkValidity() == false) 
    {} else {
        pointCounter();
    }
}