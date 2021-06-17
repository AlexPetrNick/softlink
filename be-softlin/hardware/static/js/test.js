import {createStore} from 'createstore.js'
import {rootReducer} from './redux/rootReducer.js'

const plus = document.getElementById('but1')
const minus = document.getElementById('but2')
const a = document.getElementById('but3')
const text = document.getElementById('text')


const store = createStore(rootReducer, {
	count = 0;
})

plus.onclick = () => {
}

minus.onclick = () => {
}

a.onclick = () => {
}


render();*/

