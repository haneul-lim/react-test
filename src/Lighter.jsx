import {useState} from 'react'

function Lighter() {

    const [isLightOn, setIsLightOn] = useState(false);

    const clickLightBtn = () => {
        setIsLightOn((prevIsLightOn) => !isLightOn);
    };

    const elements = {
        light: isLightOn ? 'OFF' : 'ON',
        toggle: isLightOn ? '켜기' : '끄기',
        color: isLightOn ? 'gray' : 'yellow'
    }

    return (
        <span>
            <h1>나는 전구</h1>
            <h1>
                <span style={{backgroundColor: elements.color}}>{elements.light}</span>
            </h1>
            <button onClick={clickLightBtn}>전구 {elements.toggle}</button>
        </span>
    );
}

export default Lighter;