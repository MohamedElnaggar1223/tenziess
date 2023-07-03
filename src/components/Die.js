import React, {useState, useEffect} from "react";
import Btn from "./DieButton"

export default function Die({dies, won})
{
    const [btns , setBtns] = useState(dies)
    const [rollBtn, setRollBtn] = useState("Roll")

    function handleClick(index)
    {
        setBtns(oldBtns => {
            const Array = []
            oldBtns.forEach((btn, indexBtn) =>
            {
                indexBtn === index ? Array.push({...btn, clicked: !btn.clicked}) : Array.push(btn)
            })
            return Array
        })
    }

    useEffect(() => {
        setRollBtn(() => {
            var count = 0
            const Array = btns.filter(btn => btn.number === btns[0].number)
            let name
            btns.forEach(btn => {
                btn.clicked && count++
            })
            count === 10 && Array.length === 10 ? name = "Reset" : name = "Roll"
            name === "Reset" ? won(true) : won(false)
            return name
        })
    }, [btns])

    function handleRoll()
    {
        setBtns(oldBtns => {
            const Array = []
            oldBtns.forEach((btn) =>
            {
                btn.clicked ? Array.push(btn) : Array.push({...btn, number: Math.floor(Math.random() * 6) + 1})
            })
            return Array
        })
    }

    function handleReset()
    {
        setBtns(dies)
    }

    const btnsDisplay = btns.map((btn, index) => <Btn index={index} handleClick={() => handleClick(index)} clicked={btn.clicked} number={btn.number} />)
    return(
        <div className="dieContainer">
            {btnsDisplay}
            <span></span>
            <button onClick={rollBtn === "Roll" ? handleRoll : handleReset} className="resetBtn">{rollBtn}</button>
            <span></span>
        </div>
    )
}