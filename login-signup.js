//-- Author: Low Zhi Yi

// Change forms
document.querySelector("#to-signup").addEventListener("click", changePage);
document.querySelector("#to-signin").addEventListener("click", changePage);

function changePage(a) {
    // make sure hyperlink works well
    a.preventDefault();
    changePage2();
};

function changePage2() {
    // hide sign up form and show log in form
    const LoginForm = document.getElementById("signin-form");
    const SignupForm = document.getElementById("signup-form");
    const animationBanner = document.getElementById("animation");
    LoginForm.classList.toggle("hide");
    SignupForm.classList.toggle("hide");
    animationBanner.classList.toggle("hide");

    // change title depends on form
    var title = document.querySelector("title");
    if (LoginForm.classList.contains("hide")) {
        title.innerHTML = "Sign Up to Sephora";
    }
    else {
        title.innerHTML = "Login to Sephora";
    }
};


// Get data from form and store it into local storage
document.addEventListener("DOMContentLoaded", function() {
    // data from signup form
    const inputName = document.querySelector("#SU-name");
    const inputEmail = document.querySelector("#SU-email");
    const inputPw = document.querySelector("#SU-pw");
    const inputPw2 = document.querySelector("#SU-pw2");

    // data from login form
    const loginEmail = document.querySelector("#email");
    const loginPw = document.querySelector("#pw");

    // create local storage or get data from it
    var arrayNameLC = JSON.parse(localStorage.getItem("nameLC"));
    var arrayEmailLC = JSON.parse(localStorage.getItem("emailLC"));
    var arrayPwLC = JSON.parse(localStorage.getItem("pwLC"));

    // declare array
    const arrayName = [];
    const arrayEmail = [];
    const arrayPw = [];

    // get all data from local storage and push into array
    if (arrayNameLC != null) {
        for (const i in arrayNameLC) {
            arrayName.push(arrayNameLC[i]);
        }
        for (const i in arrayEmailLC) {
            arrayEmail.push(arrayEmailLC[i]);
        }
        for (const i in arrayPwLC) {
            arrayPw.push(arrayPwLC[i]);
        }
    }

    // CLICKED SIGN UP BUTTON
    document.querySelector("#signup").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Sign Up Button has been clicked");

        // declare var to send value into function
        var name = inputName.value;
        var email = inputEmail.value;
        var pw = inputPw.value;
        var pw2 = inputPw2.value;

        // add data to local storage
        addToStorage(name, email, pw, pw2);
    });

    function addToStorage(name, email, pw, pw2) {
        // Validation for name
        if (/^[a-zA-Z ]+$/.test(name))
            console.log("Valid name!");
        else {
            alert("Invalid name! Only letters and spaces are allowed.")
            return false;
        }

        // Validation for email
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            console.log("Valid email");
        else {
            alert("Invalid email address!")
            return false;
        }

        // Validation for password
        if (/^\w{7,14}$/.test(pw))
            console.log("Valid password!");
        else {
            alert("Invalid password!\n\nPassword have to be:\n" + 
            " \u27A5 in 7-14 characters\n \u27A5 only letters, numbers, underscore")
            return false;
        }

        // inputted name or email alrd exist
        if (arrayEmail.includes(email)) {
            alert("This email has already registered!");
            return false;
        }

        // sign up passwords do not match
        else if (pw != pw2) {
            alert("Passwords do not match!");
            return false;
        }

        // no repeated name or email
        else {
            console.log("No repeat");

            // add data into array
            arrayName.push(name);
            arrayEmail.push(email);
            arrayPw.push(pw);

            // JSON.stringify() == convert array or object to string
            // JSON.parse() == convert string to array or object

            // convert array to string and add to local storage
            localStorage.setItem('nameLC', JSON.stringify(arrayName));
            localStorage.setItem('emailLC', JSON.stringify(arrayEmail));
            localStorage.setItem('pwLC', JSON.stringify(arrayPw));

            alert("Register successful!");
            window.location.reload();
            changePage2();
        }
    };



    // CLICKED LOGIN BUTTON
    document.querySelector("#signin").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Sign In Button has been clicked");

        // declare var to be sent into function
        var email = loginEmail.value;
        var pw = loginPw.value;

        verifyAccount(email, pw);
    });
    
    function verifyAccount(email, pw) {
        // exist email
        if (arrayEmail.includes(email)) {
            if (arrayPw.includes(pw)) {
                var getAcc = arrayEmail.findIndex((element) => element == email);
                var name = arrayName[getAcc];

                // Store logged in account info and status in temporary local storage
                localStorage.setItem("logInName", name);
                localStorage.setItem("logInEmail", email);
                // register + 50 points
                localStorage.setItem("point", parseInt(50))
                alert("Login successful!");
                location.href = "index.html";
            }
            else {
                alert("Invalid Password!");
            }
        }

        // account does not exist
        else {
            alert("Account does not exist!");
            return false;
        }
    };



    // FORGOT PASSWORD
    document.querySelector("#forgotpw").addEventListener("click", function(e) {
        e.preventDefault();

        // Prompt for user's email
        var email = prompt("Enter your registered email address");

        // Return password
        if (arrayEmail.includes(email)) {
            var findIndex = arrayEmail.findIndex((element) => element == email);
            var findPw = arrayPw[findIndex];
            var findName = arrayName[findIndex];
            alert("Dear " + findName + ", your password is " + findPw);
        }
        else {
            alert("Invalid Email!");
        }
    });
});