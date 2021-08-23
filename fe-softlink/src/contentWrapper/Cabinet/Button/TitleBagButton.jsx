let TitleBagButton = (props) => {
    
    return (
        <div className="bug_title">
            <div>{props.nameTitle}</div>
            <img className="img__roll" src={props.up} width="30" onClick={(e) => {props.openClose(e)}}/>
        </div>
    )
}


export default TitleBagButton