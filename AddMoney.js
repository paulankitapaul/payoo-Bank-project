document.getElementById('AddMoney-btn').addEventListener('click',function(event){
    event.preventDefault();
    const ammount = document.getElementById('ammount').value
    const ammountNumber = parseFloat(ammount);

    const pinNumber = document.getElementById('pin-number').value 
    // wrong way
    if(pinNumber ==='1234'){
        const totalAmmount = document.getElementById('total-ammount').innerText 
        const totalAmmountNumber = parseFloat(totalAmmount)
        const total = ammountNumber + totalAmmountNumber;
        document.getElementById('total-ammount').innerText = total

    }
    else{
        alert("ooppsss!!!! wrong")
    }
    
})