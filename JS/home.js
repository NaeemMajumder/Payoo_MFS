
// toggle button
document.getElementById("add-money-button").addEventListener("click",()=>{
    document.getElementById("cashout-money-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.toggle("hidden");
})

document.getElementById("cashout-money-button").addEventListener("click",()=>{
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cashout-money-form").classList.toggle("hidden");
})

// step 1: add money
document.getElementById("add-money").addEventListener("click",(event)=>{

    event.preventDefault();
    
    const add_amount = document.getElementById("add-amount");
    const pin = document.getElementById("pin");
    // console.log(pin.value);
    

    if(pin.value === "1"){
        let available_balance = document.querySelector("#available-balance span");
        let current_balance = parseInt(available_balance.innerText);

        // add money with the current balance........ updated balance
        available_balance.innerText = current_balance+parseInt(add_amount.value);
    }else{
        alert("you enter a wrong pin. try again after 5 second");
    }
})



// step 1: cash out money
document.getElementById("out-money").addEventListener("click",(event)=>{

    event.preventDefault();
    
    const add_amount = document.getElementById("out-amount");
    const pin1 = document.getElementById("pin1");
    // console.log(pin.value);
    

    if(pin1.value === "1"){
        let available_balance = document.querySelector("#available-balance span");
        let current_balance = parseInt(available_balance.innerText);

        // add money with the current balance........ updated balance
        available_balance.innerText = current_balance-parseInt(add_amount.value);
    }else{
        alert("you enter a wrong pin. try again after 5 second");
    }
})