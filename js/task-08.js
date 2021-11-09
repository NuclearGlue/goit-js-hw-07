const inputForm = document.querySelector('.login-form');
console.log(inputForm.elements);



inputForm.addEventListener('submit', checkForm)

function checkForm(event) {
    event.preventDefault();

    const  {
        elements: { email, password }
    } = event.currentTarget; 
    
    const formList = {};
    
    if (email.value === "" || password.value === "") {
        return alert("Somethin wrong, perhaps one of ht field empty!")
    }
    else{
         formList[`${email.name}`]= `${ email.value }`;
       formList[`${password.name}`] =`${password.value }`;
    
    
    };
        console.log(formList);
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

