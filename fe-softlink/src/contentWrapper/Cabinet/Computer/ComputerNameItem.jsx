let ComputerNameItem = (props) => {

    let correctText = (cntReal, cntFix) => {
        if ((cntReal == cntFix) && cntFix != 0 ) {
            return 'correct'
        } else if (cntReal > cntFix) {
            return 'incorrect'
        } else {
            return 'passive'
        }
    }
    

    let funcCorrect = (stateText, text, cntReal, cntFix) => {
        if (stateText == 'correct') {
            return (
                <div className="computer__data__name correct">{text} (Слоты {cntReal}/{cntFix})</div>
            )
        } else if (stateText == 'incorrect') {
            return (
                <div className="computer__data__name incorrect">{text} (Слоты {cntReal}/{cntFix})</div>
            )
        } else if (stateText == 'passive') {
            return (
                <div className="computer__data__name">{text} (Слоты {cntReal}/{cntFix})</div>
            )
        } else {
            <></>
        } 
    }
    return(
        funcCorrect(correctText(props.cntReal, props.cntFix), props.text, props.cntReal, props.cntFix)
    )
}

export default ComputerNameItem