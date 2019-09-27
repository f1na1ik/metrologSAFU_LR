//auth
let correctPassword = 'admin';
let correctLogin = 'admin';

let inputLogin = document.querySelector('.form-auth__input_login');
let inputPassword = document.querySelector('.form-auth__input_password');
let authButton = document.querySelector('.form-auth__button');

let authForm = document.querySelector('.form-auth');

authButton.addEventListener('click', (event) => {
    this.event.preventDefault();
    if (inputLogin.value == correctLogin && inputPassword.value == correctPassword) {
        authForm.style.display = 'none';
        alert('Вы вошли в систему.')
    } else alert('Введен неверный логин или пароль.')
});
//-------------------------------------------------------
