export function createStore(rootReducer, initialState) {
	let state = rootReducer(initialState, {type: '__INIT__'})
	const subscribers= []

	return {
		dispatch(action) {
			state = rootReducer(action, this.state);
			subscribers.forEach(sub => sub())
		},
		subscribe(callback) {
			subscribers.push(callback);
		},
		getState() {
			return this.state;
		}
	}
}