import {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const onClickButton = (e) => {
        setCount((count) =>
            count + parseInt(e.target.value)
        )
    }
    return (
        <div>
            <h1>Simple Counter</h1>
            <p>현재 카운트 :</p>
            <h1>{count}</h1>
            <button name="countBtn" onClick={onClickButton} value="-1">-1</button>
            <button name="countBtn" onClick={onClickButton} value="-10">-10</button>
            <button name="countBtn" onClick={onClickButton} value="-100">-100</button>
            <button name="countBtn" onClick={onClickButton} value="+100">+100</button>
            <button name="countBtn" onClick={onClickButton} value="+10">+10</button>
            <button name="countBtn" onClick={onClickButton} value="+1">+1</button>
        </div>
    );
}

export default Counter;