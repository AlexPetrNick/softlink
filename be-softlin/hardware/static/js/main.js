const url = 'http://127.0.0.1:8000/hardware/hdd/filter';
const divFilterMem = document.querySelector("#filter__memory");
const divFilterFf = document.querySelector('#filter__formfactor');

const divItems = divFilterMem.getElementsByTagName('input');

divFilterMem.onclick = checkFF;


function checkFF() {
	var qnt = 0;
	for (var i=0; i<divItems.length; i++) {
		var chck = divItems[i].checked;
		if (chck) {
			qnt+=1;
		}
	}
	console.log(qnt);
	if (qnt != 0) {
		divFilterFf.hidden = true;
	} else {
		divFilterFf.hidden = false;

	}
}  