const filterSocket = document.querySelector('.filter__body');
const filterInterCore = document.querySelectorAll('.filter__body')[1];
const filterAmdCore = document.querySelectorAll('.filter__body')[2];
const filterTechProc = document.querySelectorAll('.filter__body')[3];
const filterHasG = document.querySelectorAll('.filter__body')[4];
const formFilter = document.querySelector('#filter')

let currentLocation = window.location;
const url = new URL(currentLocation.href);

let sockets = url.searchParams.getAll('socket');
let coreAMD = url.searchParams.getAll('core_amd');
let coreINT = url.searchParams.getAll('core_int');
let techProc = url.searchParams.getAll('tech_proc');
let hasGraph = url.searchParams.getAll('has_graph');


getCheck(filterSocket, sockets);
getCheck(filterInterCore, coreINT);
getCheck(filterAmdCore, coreAMD);
getCheck(filterTechProc, techProc);
getCheck(filterHasG, hasGraph);


filterSocket.onclick = corrField

const inputValue = filterSocket.querySelectorAll('[value]')



function corrField(item) {	
	let cntIntel = 0;	
	let cntAmd = 0;

	for (let i=0;i<inputValue.length;i++) {
		item = inputValue[i]
		if (String(item.value).match(/Intel/i)) {
			if (item.checked) {
				cntIntel++;
			}
		} else if (String(item.value).match(/Amd/i)) {
			if (item.checked) {
				cntAmd++;
			}
		}
	}
	if ((cntAmd == 0)&&(cntIntel == 0)) {
		filterAmdCore.style.display = 'block';
		filterInterCore.style.display = 'block';
	}

	if (cntAmd > 0) {
		filterAmdCore.style.display = 'block';
		if ((!filterInterCore.hidden)&&(cntIntel == 0)) {
			filterInterCore.style.display = 'none';
		}
	}
	if (cntIntel > 0) {
		filterInterCore.style.display = 'block';
		if ((!filterAmdCore.hidden)&&(cntAmd == 0)) {
			filterAmdCore.style.display = 'none';
		}
	} 
}


function getCheck(filter, param) {
	let temp = filter.getElementsByTagName('input')
	for(let i=0;i<temp.length;i++) {
		tempVal = temp[i].value;
		for(let j=0;j<param.length;j++) {
			if (tempVal == param[j]) {
				temp[i].checked = true;
				console.log('sasd');
			}
		}
	}
}


function ajaxSend(ulr, param) {
	fetch('${url}?${param}', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	}).then(responce => responce.json())
	.then(json => render(json))
	.catch(error => console.error(error))
}

function render(data) {
	let template = Hogan.compile(html);
	let output = template.render(data);
}