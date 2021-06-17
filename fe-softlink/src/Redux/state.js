import pageNewsReducer from "./pageNewsReducer";

const store = {
    _state: {
        pageNews: {
            textNewNews: {
                titleNews: 'asds',
                contentNews: 'asda'
            },
            listNews: [],
        }
    },

    _сallSubscribe(){
        console.log('Rerendering App');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._сallSubscribe = observer;
    },

    _getStateTitleNew() {
        return this._state.pageNews.textNewNews.titleNews
    },
    _getStateContentNew() {
        return this._state.pageNews.textNewNews.contentNews
    },

    dispatch(action) {
        this._state.pageNews = pageNewsReducer(this._state.pageNews, action)

        this._сallSubscribe(this)
    },

    
}

console.log(store.getState())





export default store


