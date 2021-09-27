import React from 'react';
import {setStateTextTitleNews, setStateTextContentNews, addNews, setCatch} from '../../Redux/actionsNews'
import {setCurrentPage, getNewsThunkCreator} from '../../Redux/actionsNews'
import {NewsStructType, testAC, TextNewNewsType} from '../../Redux/pageNewsReducer'
import {connect} from 'react-redux'
import NewsPage from './NewsPage'
import Preloader from '../../Preloader/Preloader'
import {AppStateType} from "../../Redux/reduxStore";


class NewsPageContainer extends React.Component<AllPropsToState> {
    componentDidMount() {
        this.props.getNewsThunkCreator()
    }


    onClickLink = (page:number) => {
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
                perPage = {this.props.perPage}
                error = {this.props.error}
                onChangeTitle={this.props.setStateTextTitleNews}
                onChangeContent={this.props.setStateTextContentNews}
                onClickLink = {this.onClickLink}
            />
            </>
        )
    }

}

interface StateToProps {
    error: string,
    allNews:  Array<NewsStructType>,
    textNewNews: TextNewNewsType,
    currentPage: number,
    countNews: number,
    perPage: number,
    isLoading: boolean
}

interface DispatchToProps {
    setStateTextTitleNews: (word:string) => void
    setStateTextContentNews: (word:string) => void
    addNews: () => void
    setCatch: (error:string) => void
    setCurrentPage: (current:number) => void
    getNewsThunkCreator: any
}

interface AllPropsToState extends DispatchToProps, StateToProps {}

let mapStateToProps = (state:AppStateType):StateToProps => {
    return {
        error: state.pageNews.catchError,
        allNews: state.pageNews.allNews,
        textNewNews: state.pageNews.textNewNews,
        currentPage: state.pageNews.currentPage,
        countNews: state.pageNews.countNews,
        perPage: state.pageNews.perPage,
        isLoading: state.pageNews.isLoading
    }
}

export default connect(mapStateToProps, {
    setStateTextTitleNews,
    setStateTextContentNews,
    addNews,
    setCatch,
    setCurrentPage,
    getNewsThunkCreator,
} as DispatchToProps)(NewsPageContainer);


