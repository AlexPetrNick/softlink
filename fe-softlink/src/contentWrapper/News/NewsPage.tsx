import React, {FC} from 'react';
import NewsItem from "./NewsItem/NewsItem";
import {NewsStructType, TextNewNewsType} from "../../Redux/pageNewsReducer";
import AddNews from "./FormAddNews/AddNews";

type PropsState = {
    allNews: Array<NewsStructType>
    textNewNews: TextNewNewsType
    currentPage: number
    countNews: number
    perPage: number
    error: string
    onChangeTitle: (word:string) => void
    onChangeContent: (word:string) => void
    onClickLink: (page:number) => void
}

const NewsPage: FC<PropsState> = (props:PropsState) => {

    let onChangeTitle = () => {
        let textTitleDoc = document.getElementById('title__news') as HTMLInputElement
        let textTitle = textTitleDoc.value
        props.onChangeTitle(textTitle)
    }

    let onChangeContent = () => {
        let textContentDoc = document.getElementById('content__news') as HTMLInputElement
        let textContent = textContentDoc.value
        console.log('sadfasdfs')
        props.onChangeContent(textContent)
    }    


    let listNews;
    let titleNew = props.textNewNews.titleNews;
    let contentNew = props.textNewNews.contentNews;
    let allNews = props.allNews
    if (allNews) {
        listNews = allNews.map((data) => {
            return (<NewsItem id={data.id} key={data.id} title={data.title} content={data.content} />)
        })
    }
    let countPages = Math.ceil(props.countNews / props.perPage)
    let pages = []
    for (let i=1; i <= countPages; i++) {
        pages.push(i)
    }
    let styleSelect = 'pageSelected'


    return (
        <div className="wrapper__main__news">
            <div className="news__page__content">
                <div className="news__item__content">
                    <span>{props.error}</span>
                    {listNews}
                </div>    
                <div className="news__pagenumber__list">
                    <div className="empty"></div>
                    <ul className="page__slot">
                        {
                            pages.map(p => {
                                return (
                                    <li className="number__page">
                                        <span className={String(props.currentPage === p && styleSelect)}
                                        onClick={() => {props.onClickLink(p)}} >
                                        {p}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="empty"></div>
                </div>
                <AddNews />
            </div>
            <div className="filter__list">12</div>
        </div>
    )
}



export default NewsPage