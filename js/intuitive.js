const intuitiveBtn = document.querySelector('.intuitive__button');

intuitiveBtn.addEventListener('click', () => {

	const n1 = document.querySelector('#firstGroup').value;
	const n2 = document.querySelector('#secondGroup').value;
	const n12 = document.querySelector('#commonGroup').value;

	let N = (n1 * n2) / n12;
	let E1 = (n1 / N).toFixed(2);
	let E2 = (n2 / N).toFixed(2);

	alert("Эффективность первой группы = " + E1 + "%\nЭффективность второй группы = " + E2 + "%");
});



