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

let buttonResult = document.querySelector('.form-math__button');

buttonResult.addEventListener('click', function (event) {

    event.preventDefault();

    let coeffA = document.querySelector('.form-math__coeff-A').value;
    let coeffB = document.querySelector('.form-math__coeff-B').value;
    let coeffC = document.querySelector('.form-math__coeff-C').value;

        if (coeffA == 0) {
            return false
        }
        let res = {};
        let D = coeffB * coeffB - 4 * coeffA * coeffC;
        console.log('D = ' + D);
        if (D < 0) {
            return false
        }
        res['discriminant'] = D;
        if (D == 0) {
            res['quadratic roots'] = (-coeffB + Math.sqrt(D)) / (2 * coeffA);
        } else if (D > 0) {
            let tmp = [];
            tmp.push((-coeffB + Math.sqrt(D)) / (2 * coeffA));
            tmp.push((-coeffB - Math.sqrt(D)) / (2 * coeffA));
            res['quadratic roots'] = tmp;
        }
        console.table(res);
        return res;

//      -------------Заполнение данных в теги---------------

});

