import pageNewsReducer from "./pageNewsReducer";
/*@ts-ignore */
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
    /*@ts-ignore */
    subscribe(observer) {
        this._сallSubscribe = observer;
    },

    _getStateTitleNew() {
        return this._state.pageNews.textNewNews.titleNews
    },
    _getStateContentNew() {
        return this._state.pageNews.textNewNews.contentNews
    },
    /*@ts-ignore */
    dispatch(action) {
        /*@ts-ignore */
        this._state.pageNews = pageNewsReducer(this._state.pageNews, action)
        /*@ts-ignore */
        this._сallSubscribe(this)
    },

    
}

console.log(store.getState())





export default store


