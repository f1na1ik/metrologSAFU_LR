//---------------------------------------auth---------------------
let correctPassword = 'admin';
let correctLogin = 'admin';

let inputLogin = document.querySelector('.form-auth__input_login');
let inputPassword = document.querySelector('.form-auth__input_password');
let authButton = document.querySelector('.form-auth__button');
let formMath = document.querySelector('.form-math');

let authForm = document.querySelector('.form-auth');

authButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputLogin.value == correctLogin && inputPassword.value == correctPassword) {
        authForm.style.display = 'none';
        alert('Вы вошли в систему.');
        formMath.style.display = 'block';
        setTimeout(() => formMath.style.transform = 'translate(-50%, -50%) scale(1)'
            , 50);
    } else alert('Введен неверный логин или пароль.')
});
//---------------------------------------math-form------------------------------

let buttonResult = document.querySelector('.form-math__button');

buttonResult.addEventListener('click', function (event) {

    event.preventDefault();

    let timer = performance.now();

    let coeffA = document.querySelector('.form-math__coeff-A').value;
    let coeffB = document.querySelector('.form-math__coeff-B').value;
    let coeffC = document.querySelector('.form-math__coeff-C').value;

    let resD = document.querySelector('.form-math__input-h3_resD');
    let resX1 = document.querySelector('.form-math__input-h3_resX1');
    let resX2 = document.querySelector('.form-math__input-h3_resX2');
    let timerForm = document.querySelector('.form-math__input-h3_timeResult');

    if (coeffA == 0) {
        return false
    }
    let res = {};
    let D = 0;
    D = coeffB * coeffB - 4 * coeffA * coeffC;
    console.log('D = ' + D);
    if (D < 0) {
        resD.innerHTML = `D = ${D}`;
        resX1.innerHTML = 'корней нет';
        resX2.innerHTML = '';
        timer = performance.now() - timer;
        timerForm.innerHTML = `Время вып. = ${timer.toFixed(3)}`;

        return false;
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
    console.log(res);

    resD.innerHTML = `D = ${res['discriminant']}`;
    resX1.innerHTML = `X1 = ${res['quadratic roots'][0].toFixed(3)}`;
    resX2.innerHTML = `X2 = ${res['quadratic roots'][1].toFixed(3)}`;
    timer = performance.now() - timer;
    timerForm.innerHTML = `Время вып. = ${timer.toFixed(3)}`;

    // console.log(timer);
    return res;

});

//----------------model shuman------------------


