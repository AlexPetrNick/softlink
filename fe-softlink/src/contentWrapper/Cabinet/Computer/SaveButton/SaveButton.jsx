let SaveButton = (props) => {
    console.log(props)
    let cnts = props.cntError
    let buttonDis = (cntError) => {
        if (cntError) {
            return (
            <div className="saveChanges" >Сохранить</div>
            )
        } else {
            return (
                <div className="saveChanges disabled" disabled >Сохранить</div>
            )
        }
    }
    
    return (
        <>
        {buttonDis(cnts)}
        </>
    )
}

export default SaveButton