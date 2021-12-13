function validate() {
    function validateSkinColor() {
        var x = document.querySelectorAll('input[name="skin_color"]')
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) {
                return true;
            }
        }
        alert("Please select at least one skin color");
        return false;
    }
   
    function validateSkinType() {

        if (document.getElementById("skin_type1").checked) {
            return true;
        } else if (document.getElementById("skin_type2").checked) {
            return true;
        } else if (document.getElementById("skin_type3").checked) {
            return true;
        } else if (document.getElementById("skin_type4").checked) {
            return true;
        } else if (document.getElementById("skin_type5").checked) {
            return true;
        } else {
            alert("Please select at least one at skin type!");
            return false;
        }
    }

    function validateSkinConcerns() {
        if (document.getElementById("skin_concerns1").checked) {
            return true;
        } else if (document.getElementById("skin_concerns2").checked) {
            return true;
        } else if (document.getElementById("skin_concerns3").checked) {
            return true;
        } else if (document.getElementById("skin_concerns4").checked) {
            return true;
        } else if (document.getElementById("skin_concerns5").checked) {
            return true;
        } else if (document.getElementById("skin_concerns6").checked) {
            return true;
        } else if (document.getElementById("skin_concerns7").checked) {
            return true;
        } else {
            alert("Please select at least one at skin concerns!");
            return false;
        }
    }

    function validateSkinProduct() {
        if (document.getElementById("skincare_products1").checked) {
            return true;
        } else if (document.getElementById("skincare_products2").checked) {
            return true;
        } else if (document.getElementById("skincare_products3").checked) {
            return true;
        } else if (document.getElementById("skincare_products4").checked) {
            return true;
        } else if (document.getElementById("skincare_products5").checked) {
            return true;
        } else {
            alert("Please select at least one at skincare product!");
            return false;
        }
    }

    function validateHairColor() {
        var x = document.querySelectorAll('input[name="hair_color"]')
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) {
                return true;
            }
        }
        alert("Please select at least one hair color");
        return false;
    }


    function validateHairConcerns() {
        if (document.getElementById("hair_concerns1").checked) {
            return true;
        } else if (document.getElementById("hair_concerns2").checked) {
            return true;
        } else if (document.getElementById("hair_concerns3").checked) {
            return true;
        } else if (document.getElementById("hair_concerns4").checked) {
            return true;
        } else if (document.getElementById("hair_concerns5").checked) {
            return true;
        } else if (document.getElementById("hair_concerns6").checked) {
            return true;
        } else if (document.getElementById("hair_concerns7").checked) {
            return true;
        } else {
            alert("Please select at least one at hair concerns!");
            return false;
        }
    }

    function validateMakeup() {
        if (document.getElementById("makeup_essentials1").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials2").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials3").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials4").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials5").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials6").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials7").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials8").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials9").checked) {
            return true;
        } else if (document.getElementById("makeup_essentials10").checked) {
            return true;
        } else {
            alert("Please select at least one makeup essentials!");
            return false;
        }
    }

    if(validateSkinColor() == false){
        // event.preventDefault();
        return false;
    }
    else if(validateSkinType() == false){
        return false;
    }
    else if(validateSkinConcerns() == false){
        return false;
    }
    else if(validateSkinProduct() == false){
        return false;
    }
    else if(validateHairColor() == false){
        return false;
    }
    else if(validateHairConcerns() == false){
        return false;
    }
    else if(validateMakeup() == false){
        return false;
    }
    else{
        return true;
    }
}

function storeData(){
    function skinType() {
        const CBskinTypes = document.querySelectorAll('input[name="skin_type"]:checked')
        console.log(CBskinTypes);
        let skinTypes = [];
        console.log(CBskinTypes);
        CBskinTypes.forEach((checkbox) => {
            skinTypes.push(checkbox.value);
            console.log(checkbox.value);
        })
        console.log(skinTypes);
        localStorage.setItem("skinTypes", JSON.stringify(skinTypes));
    
    }
    
    function skinConcern() {
        const CBskinConcerns = document.querySelectorAll('input[name="skin_concerns"]:checked')
        console.log(CBskinConcerns);
        let skinConcerns = [];
        CBskinConcerns.forEach((checkbox) => {
            skinConcerns.push(checkbox.value);
            console.log(checkbox.value);
        })
        console.log(skinConcerns);
        localStorage.setItem("skinConcerns", JSON.stringify(skinConcerns));
    }
    
    function skincareProducts() {
        const CBskincareProducts = document.querySelectorAll('input[name="skincare_products"]:checked')
        console.log(CBskincareProducts);
        let skincareProducts = [];
        CBskincareProducts.forEach((checkbox) => {
            skincareProducts.push(checkbox.value);
            console.log(checkbox.value);
        })
        console.log(skincareProducts);
        localStorage.setItem("skincareProducts", JSON.stringify(skincareProducts));
    }
    
    function hairColor() {
        const RBhairColor = document.querySelectorAll('input[name="hair_color"]:checked')
        console.log(RBhairColor);
        let hairColor = "";
        RBhairColor.forEach((checkbox) => {
            console.log(checkbox.value);
            hairColor = checkbox.value;
        })
        console.log(hairColor);
        localStorage.setItem("hairColor",hairColor);
    }
    
    function hairConcerns() {
        const CBhairConcerns = document.querySelectorAll('input[name="hair_concerns"]:checked')
        console.log(CBhairConcerns);
        let hairConcerns = [];
        CBhairConcerns.forEach((checkbox) => {
            hairConcerns.push(checkbox.value);
            console.log(checkbox.value);
        })
        console.log(hairConcerns);
        localStorage.setItem("hairConcerns", JSON.stringify(hairConcerns));
    }
    
    function makeup() {
        const CBmakeup = document.querySelectorAll('input[name="makeup_essentials"]:checked')
        console.log(CBmakeup);
        let makeup = [];
        CBmakeup.forEach((checkbox) => {
            makeup.push(checkbox.value);
            console.log(checkbox.value);
        })
        console.log(makeup);
        localStorage.setItem("makeup", JSON.stringify(makeup));
        
    }
    
    function skinTone(){
        const RBskinColor = document.querySelectorAll('input[name="skin_color"]:checked')
        console.log(RBskinColor);
        let skinColor = "";
        RBskinColor.forEach((checkbox) => {
            console.log(checkbox.value);
            skinColor = checkbox.value;
        })
        console.log(skinColor);
        localStorage.setItem("skinColor",skinColor);
    }
    const updateButton = document.querySelector(".update_btn");
    updateButton.addEventListener("click", function () {
        if(validate() == false){
            event.preventDefault();
        }else{
            skinTone();
            skinType();
            skinConcern();
            skincareProducts();
            hairColor();
            hairConcerns();
            makeup();
            window.location.href = "beauty_profile.html";
            alert("Profile updated successfully");
            

        }
    });
}
storeData();
