
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");

validName = false;
validEmail = false;
validPhone = false;
// console.log(userName, userEmail, userPhone);

userName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([a-zA-Z0-9]+)$/;
    let str = userName.value;
    if(regex.test(str)){
        userName.classList.remove('is-invalid');
        validName = true;
    }

    else{
        userName.classList.add('is-invalid');
    }
})

userEmail.addEventListener('blur', () => {
    let regex = /^([a-zA-Z0-9]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/;
    let str = userEmail.value;
    if(regex.test(str)){
        userEmail.classList.remove('is-invalid');
        validEmail = true;
    }

    else{
        userEmail.classList.add('is-invalid');
    }
})

userPhone.addEventListener('blur', () => {
    let regex = /^[789][0-9]{9}$/;
    let str = userPhone.value;
    if(regex.test(str)){
        userPhone.classList.remove('is-invalid');
        validPhone = true;
    }

    else{
        userPhone.classList.add('is-invalid');
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(validName && validEmail && validPhone){
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        
    }

    else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }
})
