const form = document.getElementById("contact-form")

form.addEventListener("submit", function (e) {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    if(firstName.value == "" || lastName.value == "" || email.value == ""){
        showValidationText();
        alert("Please fill in all required fields");
        e.preventDefault();
        return false;
    } else {
        alert("Thank you");
    }
    
    
})


function showValidationText(){
    const validationText1 = document.querySelector(".validation1");
    const validationText2 = document.querySelector(".validation2");
    const validationText3 = document.querySelector(".validation3");
    validationText1.textContent = "Required field";
    validationText2.textContent = "Required field";
    validationText3.textContent = "Required field";
}







