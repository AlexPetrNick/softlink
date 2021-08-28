import React from 'react';
import {setStateTextTitleNews, setStateTextContentNews, addNews, setCatch} from '../../Redux/actionsNews'
import {setCurrentPage, getNewsThunkCreator} from '../../Redux/actionsNews'
import {testAC} from '../../Redux/pageNewsReducer'
import {connect} from 'react-redux'
import NewsPage from './NewsPage'
import Preloader from '../../Preloader/Preloader'
import {apiNews} from '../../apiDAL/DAL'


class NewsPageContainer extends React.Component {
    componentDidMount() {
        this.props.getNewsThunkCreator()
    }

    postNew() {
        let url = "asd"
        fetch(url,
        {
            method: "POST",
            body: JSON.stringify({
                "title": this.titleNew,
                "content": this.titleNew
            })
        })
        .then(res => console.log(res))
        .catch(res => console.log(res))
    }

    onClickLink = (page) => {
        this.props.getNewsThunkCreator(page)
    }


    render() {
        return (
            <> 
            { this.props.isLoading ? <Preloader /> : null }
            <NewsPage 
                allNews = {this.props.allNews}
                textNewNews = {this.props.textNewNews}
                currentPage = {this.props.currentPage}
                countNews = {this.props.countNews}
                addPost = {this.props.addPost}
                perPage = {this.props.perPage}
                error = {this.props.error}
                onChangeTitle={this.props.setStateTextTitleNews}
                onChangeContent={this.props.setStateTextContentNews}
                onClickLink = {this.onClickLink}
                postNew = {this.postNew}
                uid = {this.uid}
                test = {this.props.testAC}
            />
            </>
        )
    }

}



let mapStateToProps = (state) => {
    return {
        error: state.pageNews.catchError,
        allNews: state.pageNews.allNews,
        textNewNews: state.pageNews.textNewNews,
        currentPage: state.pageNews.currentPage,
        countNews: state.pageNews.countNews,
        perPage: state.pageNews.perPage,
        isLoading: state.pageNews.isLoading,
        uid: state.pageNews.uid,
    }
}

export default connect(mapStateToProps, {
    setStateTextTitleNews,
    setStateTextContentNews,
    addNews,
    setCatch,
    setCurrentPage,
    getNewsThunkCreator,
    testAC
})(NewsPageContainer);


