



// step 1: set event handler
document.getElementById("btn-login").addEventListener("click",(event)=>{

    // step 2: use prevent default() --> prevent default help browser not to reload the browser.
    event.preventDefault();
    console.log("login button clicked");

    const phoneNumber = document.getElementById("phone-number");
    console.log(phoneNumber.value);

    const pin = document.getElementById("pin");
    console.log(pin.value);


});


