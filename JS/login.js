



// step 1: set event handler
document.getElementById("btn-login").addEventListener("click",(event)=>{

    // step 2: use prevent default() --> prevent default help browser not to reload the browser.
    event.preventDefault();

    // phone number 
    const phoneNumber = document.getElementById("phone-number");
    // console.log( phoneNumber.value);

    // pin 
    const pin = document.getElementById("pin");
    // console.log( pin.value);

    // Validation phone_number and pin
    if(phoneNumber.value === "1" && pin.value === "1"){
        console.log("you are successfully login");
        window.location.href = "home.html";
    }else{
        alert("enter valid information");
    }



});


