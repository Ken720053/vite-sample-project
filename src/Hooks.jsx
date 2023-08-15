import { useState } from "react";

function Hooks () {
    // let a = 1
    //[值, 寫入的方法]
    const [a, setA] = useState(1);
    const [text , setText] = useState('卡斯柏');

    function handleOnClick() {
        setA(a + 1)
        console.log(a)
    }

    const handleOnChange =(event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }
    return (
        <div>
            Hooks
            <button onClick={handleOnClick}>{a}</button>
            {text}
            <input type="text" value={text} onChange={handleOnChange} />
        </div>
    )
}

export default Hooks