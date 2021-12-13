//-- Author: Low Zhi Yi

// click '+' at the address table, address form will popup
document.querySelector("#addAddressButton").addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".addAddress").style.display = "block";
});

// create or get data from local storage
var addressHistory = JSON.parse(localStorage.getItem('addressDetail'));
var addressArray = addressHistory || [];

// For every click of save address button
const addAddressButton = document.getElementsByClassName("saveAddress");
for (var i = 0; i < addAddressButton.length; i++) {
    let saveAddressButton = addAddressButton[i];
    saveAddressButton.addEventListener('click', function () {
        // Declare var for address data
        var addressName = document.querySelector("#addressName").value;
        var addressPhone = document.querySelector("#addressPhone").value;
        var addressState = document.querySelector("#state").value;
        var addressPostal = document.querySelector("#postCode").value;
        var addressDetails = document.querySelector("#addressDetails").value;

        // Declare var for validation check
        var name = document.getElementById("addressName");
        var phone = document.getElementById("addressPhone");
        var postal = document.getElementById("postCode");

        console.log('button clicked');

        // Data validations
        if (addressName == "" || addressPhone == "" || addressState == "" || addressPostal == "" || addressDetails == "") {
            alert("Please fill in all of the information");
            if (addressState == "") {
                event.preventDefault(); // prevent form to close after detecting this error
                document.getElementById("state").style.color = "red";
            }
            else {
                document.getElementById("state").style.color = "black";
            }
            return false;
        }
        else if (name.validity.patternMismatch) {
            alert("Invalid name");
            return false;
        }
        else if (phone.validity.patternMismatch) {
            alert("Invalid phone number");
            return false;
        }
        else if (postal.validity.patternMismatch) {
            alert("Invalid post code");
            return false;
        }
        // Address cannot be too short
        else if (addressDetails.length < 20) {
            alert("Invalid address");
            event.preventDefault();
            return false;
        }
        // Data valid
        else {
            // Declare object
            let fullAddress = {
                addName: addressName,
                addPhone: addressPhone,
                addState: addressState,
                addPostal: addressPostal,
                addDetail: addressDetails
            };

            // Add to local storage
            console.log(fullAddress);
            addAddresstoStorage(fullAddress);

            // Close popup form
            document.querySelector('.addAddress').style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        };
    });
};

function addAddresstoStorage(fullAddress) {
    // push address into array
    addressArray.push(fullAddress);
    console.log(addressArray);

    // add array items into local storage
    localStorage.setItem('addressDetail', JSON.stringify(addressArray));
    alert("New address added!");

    displayAddress();
};

function displayAddress() {
    // add form inputs into address table
    let addToHTML = '';
    let address = JSON.parse(localStorage.getItem('addressDetail'));
    address && address.forEach(item => {
        addToHTML += `
            <tr>
                <td>${item.addName}</td>
                <td>${item.addPhone}</td>
                <td style="text-align: left;">${item.addDetail}<br />${item.addPostal} ${item.addState}</td>
                <td class="remove" data-id="${item.addDetail}"><div></div></td>
            </tr>
        `
    });
    document.querySelector('#address tbody').innerHTML = addToHTML;

    // delete address button
    document.querySelectorAll('.remove').forEach(function(deleteAddress) {
        deleteAddress.addEventListener('click', async() => {
            const id = deleteAddress.getAttribute("data-id");

            const deletedArray = await addressArray.filter(function(addData) {
                return addData.addDetail !== id;
            });

            addressArray = deletedArray;
            localStorage.setItem('addressDetail', JSON.stringify(deletedArray));
            displayAddress();
        });
    });
};

// call function to display address in table
displayAddress();