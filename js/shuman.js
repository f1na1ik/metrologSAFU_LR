let testAmount = document.querySelector('#tests-amount');
let table = document.querySelector('.model-shuman__table');
let bodyTable = table.querySelector('tbody');

testAmount.addEventListener('input', () => {

    let tableChildren = bodyTable.childNodes;

    console.log(tableChildren);

    tableChildren[0].innerHTML = '<td class="model-shuman__column"></td>';
    tableChildren[2].innerHTML = '<td class="model-shuman__column">Кол-во ошибок</td>';
    tableChildren[4].innerHTML = '<td class="model-shuman__column">Время тестирования</td>';

    tableChildren.forEach((row) => {

        // console.log(row);

        for(let i = 0; i< testAmount.value; i++) {

            if (row.className === 'model-shuman__row model-shuman__test-number') {
                row.innerHTML +=`<td class="model-shuman__column">${ i+1}</td>`;
            } else {
                row.innerHTML += `<td class="model-shuman__column"><input type="number"></td>`
            }
        }
    })


})