//---------------------------------------auth---------------------
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
//---------------------------------------math-form------------------------------

let coeffA = document.querySelector('.form-math__coeff-A').value;
let coeffB = document.querySelector('.form-math__coeff-B').value;
let coeffC = document.querySelector('.form-math__coeff-C').value;

let buttonResult = document.querySelector('.form-math_button');

buttonResult.addEventListener('click', function () {
    let quadraticEquation = (a, b, c) => {
        if (a == 0) {
            return false
        }
        let res = {};
        let D = b * b - 4 * a * c;
        console.log('D = ' + D);
        if (D < 0) {
            return false
        }
        res['discriminant'] = D;
        if (D == 0) {
            res['quadratic roots'] = (-b + Math.sqrt(D)) / (2 * a);
        } else if (D > 0) {
            let tmp = [];
            tmp.push((-b + Math.sqrt(D)) / (2 * a));
            tmp.push((-b - Math.sqrt(D)) / (2 * a));
            res['quadratic roots'] = tmp;
        }
        return res;
    }
});