import {useState} from 'react'

function Lighter() {

    const [light, setLight] = useState("OFF");
    const [toggle, setToggle] = useState("켜기");
    const [color, setColor] = useState("gray");

    const clickLightButton = () => {
        setLight((light) =>
            light === "OFF" ? light = "ON" : light = "OFF"
        );
        setToggle((toggle) =>
            toggle === "켜기" ? toggle = "끄기" : toggle = "켜기"
        );
        setColor((color) =>
            color === "gray" ? color = "yellow" : color = "gray"
        );
    }

    return (
        <span>
            <h1>나는 전구</h1>
            <h1>
                <span style={{backgroundColor: color}}>{light}</span>
            </h1>
            <button onClick={clickLightButton}>전구 {toggle}</button>
        </span>
    );
}

export default Lighter;