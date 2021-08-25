let PagingComponent = (props) => {
    return (
        <div className="page__number__list">
                <div className="empty"></div>
                    <ul className="page__slot">
                        {props.prev ? 
                        <li className="prev__page"><a href="#">Пред.</a></li>: null}
                        {props.pages.map((data) => {
                            return(
                                <li className="number__page">
                                    {data == props.current ?
                                    <span onClick={()=> props.onClicking(data)}><u><b>{data}</b></u></span> : 
                                    <span onClick={()=> props.onClicking(data)}>{data}</span>
                                    }
                                </li>
                            )
                        })}
                        {props.next ? 
                        <li className="next__page"><a href="#">След.</a></li>: null}
                    </ul>
                <div className="empty"></div>
            </div>
    )
}

export default PagingComponent