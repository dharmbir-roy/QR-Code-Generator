const btn = document.getElementById('qbtn');

btn.addEventListener('click' , () => {
    const qrinput = document.getElementById('qinput');
    const  inputValue = qrinput.value ;
    const img = document.getElementById('image');

    console.log(inputValue);
    
    if(inputValue === "" ){
        alert('Please Enter A Valide URL..');
        return;
    }else{
        img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        img.alt = `QR Code for ${inputValue}`;
    }
});