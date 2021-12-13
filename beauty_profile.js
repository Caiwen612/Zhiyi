function displayProfile(){
   let skinColorLS = localStorage.getItem("skinColor");
   console.log(skinColorLS);
   let displaySColor = document.querySelector(".valueSkinColor");
   console.log(displaySColor);
   displaySColor.style.backgroundColor = skinColorLS;
   
   let skinTypesLS = JSON.parse(localStorage.getItem("skinTypes"));
   console.log(skinTypesLS);
   let displayST = document.querySelector(".valueSkinType");
   console.log(displayST);
   displayST.innerHTML = skinTypesLS.join("<br>");
   
   let skinConcernsLS = JSON.parse(localStorage.getItem("skinConcerns"));
   console.log(skinConcernsLS);
   let displaySC = document.querySelector(".valueSkinConcerns");
   console.log(displaySC);
   displaySC.innerHTML = skinConcernsLS.join("<br>");
   
   let skincareProductsLS = JSON.parse(localStorage.getItem("skincareProducts"));
   console.log(skincareProductsLS);
   let displaySP = document.querySelector(".valueSkincareProducts");
   console.log(displaySP);
   displaySP.innerHTML = skincareProductsLS.join("<br>");
   
   let hairColorLS = localStorage.getItem("hairColor");
   console.log(hairColorLS);
   let displayHColor = document.querySelector(".valueHairColor");
   console.log(displayHColor);
   displayHColor.textContent = hairColorLS;
   
   let hairConcernsLS = JSON.parse(localStorage.getItem("hairConcerns"));
   console.log(hairConcernsLS);
   let displayHC = document.querySelector(".valueHairConcerns");
   console.log(displayHC);
   displayHC.innerHTML = hairConcernsLS.join("<br>");
   
   let makeupLS = JSON.parse(localStorage.getItem("makeup"));
   console.log(makeupLS);
   let displayMu = document.querySelector(".valueMakeup");
   console.log(displayMu);
   displayMu.innerHTML = makeupLS.join("<br>");
}


function checkCard(){
  
   let pointLS = localStorage.getItem("point");
   let INTpoint = parseInt(pointLS);
   var cardImage = document.querySelector(".membercard");
   if(INTpoint < 900){
       cardImage.src = "image/white-card2.png"
   }
   if(INTpoint >= 900){
      document.documentElement.style.setProperty('--color1', "#f62f5e")
      cardImage.src = "image/membership_2.png"
   }
   if(INTpoint >= 4500){
       document.documentElement.style.setProperty('--color2', "#f62f5e")
       cardImage.src = "image/membership_3.png"
   }
   document.querySelector('.total-point').textContent="Total: "+INTpoint+"points";
}
checkCard();

//check whether local storage is null or not then perform function
function check(){
   let skinTypesLS = JSON.parse(localStorage.getItem("skinTypes"));
   if(skinTypesLS === null){
      console.log("wait for user update profile");
      return false;
   }
   else{
      displayProfile();
   }
}
check();


var button = document.querySelector(".editButton");
button.addEventListener("click",function(){
   window.location.href = "edit_beautyprofile.html";
});