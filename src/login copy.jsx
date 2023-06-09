import React, { useState } from 'react'
import axios from "axios"
// import TextField from '@mui/material/TextField';
import './App.css';
import bootstrap from 'bootstrap'

export default function SignIn() {
    
    const [userId, setUserid] = useState('');  //아이디 값을 입력받음
    const [userPassword, setPassword] = useState('');

    const signUpHandler = () => {
        if (userId.length === 0 || userPassword.length === 0){
            alert("이메일과 비밀번호를 입력하세요.");
            return;
        } // 아무런 값을 입력하지 않았을 때 alert를 호출합니다.

      const data = {
        "userid": userId,
        "password": userPassword,
      };

      axios //입력한 데이터를 받음.
        .post("/api/member/login", data)
            .then((response) => {
            const respnseData = response.data;
            console.log(respnseData);
            if (!respnseData.result){
                alert('성공했습니다.')
                return 
            }
        })
        .catch((error) =>{alert('로그인에 실패했습니다.')});   //axios값에 데이터가 일치 하지 않으면 함수를 호출함
    };
    
  return (



    
    <div className="form-floating">
      <input type="text" class="form-control" id="floatingInput" lable="로그인" placeholder="text" onChange={(e) => setUserid(e.target.value)}>
        <label for="floatingInput">아이디를 입력해주세요.</label>
        </input>
        <button onClick={() => signUpHandler()} > 로그인 </button>
    </div>
  )
};



// <TextField fullWidth type="text" id="outlined-basic" label="로그인" variant="standard" onChange={(e) => setUserid(e.target.value)} />
// <TextField fullWidth type="password" id="outlined-basic" label="비밀번호" variant="standard" onChange={(e) => setPassword(e.target.value)} />

// variant="standard" 이부분은 아이디를 적을 때 작게 줄어드는 것입니다.