import {useState} from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const [inputs, setInputs] = useState({
        name: '',
        birth: '',
        country: '',
        bio: ''
    });

    const {name, birth, country, bio} = inputs;

    const onChangeInfo = (e) => {
        console.log(e.target.name, e.target.value)
      const {value, name} = e.target;
      setInputs({
          ...inputs,
          [name]: value
      });
    };

    return (
        <div>
            <div>
                <input
                    name="name"
                    value={name}
                    onChange={onChangeInfo}
                    placeholder={"이름"}
                ></input>
            </div>
            <div>
                <input name="birth" value={birth} onChange={onChangeInfo} type="date" />
            </div>
            <div>
                <select name="country" value={country} onChange={onChangeInfo}>
                    <option value=""></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"uk"}>영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={bio} onChange={onChangeInfo}></textarea>
            </div>
        </div>
    );
};

export default Register;
