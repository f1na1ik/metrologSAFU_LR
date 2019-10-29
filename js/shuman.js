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

countButton.addEventListener('click', (e) => {
	e.preventDefault();
})
