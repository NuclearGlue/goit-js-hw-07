const inputForm = document.querySelector('.login-form');



inputForm.addEventListener('submit', checkForm)

function checkForm(event) {
    event.preventDefault();

    const  {
        elements: { email, password }
    } = event.currentTarget; 
    

    if (email.value === "" || password.value === "" || password.value.trim() === "") {
        return alert("Somethin wrong, perhaps one of ht field empty!")
    }
    else{
        const formList = { email: email.value, password: password.value };
        console.log(formList);
}
    
    event.currentTarget.reset();
    

};















      // const inputs = event.currentTarget.elements;
    // const mail = inputs.email.value;
    // const password = inputs.password.value;
    // const inputInfo = {};
   
    //     if (mail === ''|| password === '') {
    //         return alert("You forgot to fill one of input field, please fill it!")
    //     }
    //     else {
    //         inputInfo[mail.name] = `${mail.value}`;
    //         inputInfo[password.name] = `${password.value }`;
    //     }

