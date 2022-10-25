const body = document.querySelector('.body');
const select = document.querySelector('.select');
const title = document.querySelector('.title');
function changeСolor() {
	switch (select.value) {
        case 'white':
			body.style.backgroundColor = 'black';
			title.style.color = 'black';
			break;
		case 'red':
			body.style.backgroundColor = 'red';
			title.style.color = 'white';
			break;
		case 'blue':
			body.style.backgroundColor = 'blue';
			title.style.color = 'white';
			break;
		case 'pink':
			body.style.backgroundColor = 'pink';
			title.style.color = 'white';
			break;
		case 'yellow':
			body.style.backgroundColor = 'yellow';
			title.style.color = 'black';
			break;
	}
}
select.addEventListener('change', changeСolor);