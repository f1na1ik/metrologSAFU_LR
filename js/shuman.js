let testAmount = document.querySelector('#tests-amount');
let table = document.querySelector('.model-shuman__table');
let bodyTable = table.querySelector('tbody');

testAmount.addEventListener('change', () => {

	if (testAmount.value <= 20 && testAmount.value >= 0) {

		testAmount.style.color = '';

		let tableChildren = Object.values(bodyTable.children);

		console.log(tableChildren);

		tableChildren[0].innerHTML = '<td class="model-shuman__column"></td>';
		tableChildren[1].innerHTML = '<td class="model-shuman__column">Кол-во ошибок</td>';
		tableChildren[2].innerHTML = '<td class="model-shuman__column">Время тестирования</td>';

		tableChildren.forEach((row) => {

			console.log(row);

			for (let i = 0; i < testAmount.value; i++) {

				if (row.className === 'model-shuman__row model-shuman__test-number') {

					row.innerHTML += `<td class="model-shuman__column"> ${i + 1} </td>`;

				} else {

					row.innerHTML += `<td class="model-shuman__column"><input type="number"></td>`
				}
			}
		})

	} else {

		testAmount.style.color = 'red';
	}
});

let countButton = document.querySelector('.model-shuman__button');
let file = document.querySelector('input[type=file]');

countButton.addEventListener('click', (e) => {

	e.preventDefault();

	let kol = 0;

	let a = +document.querySelector('#inputA').value,
		ak = 0,
		at = 0;

	let b = +document.querySelector('#inputB').value,
		bk = 0,
		bt = 0;

	let qk = 0;
	let t = +document.querySelector('#workTime').value;

	let tableChildren = Object.values(bodyTable.children);

	let columnsAmount = tableChildren[0].querySelectorAll('td');
	let columnsErrors = tableChildren[1].querySelectorAll('input[type=number]');
	let columnsTime = tableChildren[2].querySelectorAll('input[type=number]');

	for(let i = 0; i <= (a-1); i++) {

		ak += +columnsErrors[i].value;
		at += +columnsTime[i].value;
	}

	for(let j = a; j <= (b-1); j++) {

		bk += +columnsErrors[j].value;
		bt += +columnsTime[j].value;
	}

	for(let q = 0; q <= (testAmount.value); q++) {

		qk += +columnsAmount[q].innerText;
	}

	file.click(qk);

	file.onchange = () => {

		let fileReader = new FileReader();

		fileReader.readAsText(file.files[0]);

		fileReader.onload = () => {

			let codeArray = fileReader.result.split(' ');

			codeArray.forEach(codeItem => {

				switch (codeItem) {

					case 'if':
						kol += 1;
						break;

					case 'else':
						kol += 1;
						break;

					case '=':
						kol += 1;
						break;

					case '==':
						kol += 1;
						break;

					case '===':
						kol += 1;
						break;

					case '>':
						kol += 1;
						break;

					case '<':
						kol += 1;
						break;

					case '>=':
						kol += 1;
						break;

					case '<=':
						kol += 1;
						break;

					case '!=':
						kol += 1;
						break;

					case '!':
						kol += 1;
						break;

					case '*':
						kol += 1;
						break;

					case '+':
						kol += 1;
						break;

					case '-':
						kol += 1;
						break;

					case '/':
						kol += 1;
						break;
				}

			});

			let statements = document.querySelector('.model-shuman__statements');

			statements.innerHTML = `Количество операторов ${kol}`;

			let ea = ak/kol;
			let eb = bk/kol;
			let ia = ak/kol;
			let ib = bk/bt;
			let Et = (kol * ((ia/ib) * ea-eb)) / ((ia/ib) - 1);
			let C = ia / (Et/kol - ea);
			let R = Math.round(Math.exp(C * ((Et/kol) - (qk/kol)) * t) * 100);

			alert("Надежность системы равна " +R +"%");

			console.log(qk);
			console.log(kol);
			console.log(codeArray);
		}
	};
});
