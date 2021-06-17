const plus = document.getElementById('but1')
const minus = document.getElementById('but2')
const a = document.getElementById('but3')
const text = document.getElementById('text')

let count = 0

function render() {
	text.value = count.toString();
}

plus.onclick = () => {
	count++;
	render();
}

minus.onclick = () => {
	count--;
	render();
}

a.onclick = () => {
	setTimeout(() => {
		count++;
		render();
	}, 2000);
}


render();