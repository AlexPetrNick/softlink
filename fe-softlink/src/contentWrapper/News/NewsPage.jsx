import React from 'react';
import NewsItem from "./NewsItem/NewsItem";


const NewsPage = (props) => {

    let onChangeTitle = () => {
        let textTitle = document.getElementById('title__news').value
        props.onChangeTitle(textTitle)
    }

    let onChangeContent = () => {
        let textContent = document.getElementById('content__news').value
        console.log('sadfasdfs')
        props.onChangeContent(textContent)
    }    

    let onClickNewsAddBUtton = () => {
        props.addPost()
    }



    let listNews;
    let titleNew = props.textNewNews.titleNews;
    let contentNew = props.textNewNews.contentNews;
    let allNews = props.allNews[0]
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
                                        <span className={props.currentPage === p && styleSelect} 
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
                <div  className="form__news__add">
                        <span>Заголовок</span>
                        <input  onChange={ onChangeTitle } id="title__news" type="text" value={ titleNew} />
                        <span>Текст</span>
                        <input onChange={ onChangeContent } type="text" id="content__news" value={ contentNew} />
                        <button onClick={ onClickNewsAddBUtton } id="submit__news" >Отправить форму</button>
                    </div>
            </div>
            <div className="filter__list">12</div>
        </div>
    )
}



export default NewsPage