import React, { useState } from 'react'
import axios from "axios"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SignUp() {
    const [userId, setUserid] = useState('');  //아이디 값을 입력받음
    const [userEmail, setEmail] = useState('');  //비밀번호 값을 입력 받음
    const [userName, setName] = useState('');  //비밀번호 입력값을 받음
    const [userNickname, setUserNickname] = useState('');  //닉네임 값을 입력 받음
    const [userPassword, setPassword] = useState('');  //닉네임 값을 입력 받음
    const [userCurriculm, setCurriculum] = useState('');  //닉네임 값을 입력 받음
    //위에 적힌 함수를 호출합니다.



    const signUpHandler = () => {

      const data = {
        "userid": userId,
        "email": userEmail,
        "name": userName,
        "nickkname": userNickname,
        "password": userPassword,
        "curriculm": userCurriculm,
      };

      axios //입력한 데이터를 받음.
        .post("/api/member/signup", data)
        .then((response) => {console.log(response)})  //성공했을시 response를 받아옴.
        .catch((error) =>{console.log(error)});   //실패했을 시 error를 발생함.
    };
    
  return (
    <div className="singupform">
        <TextField fullWidth type="text" id="outlined-basic" label="아이디" variant="standard" onChange={(e) => setUserid(e.target.value)} />
        <TextField fullWidth type="email" id="outlined-basic" label="이메일" variant="standard" onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth type="password" id="outlined-basic" label="비밀번호" variant="standard" onChange={(e) => setPassword(e.target.value)} />
        <TextField fullWidth type="password" id="outlined-basic" label="비밀번호확인" variant="standard" onChange={(e) => setPassword(e.target.value)} />
        <TextField fullWidth type="text" id="outlined-basic" label="이름" variant="standard" onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth type="text" id="outlined-basic" label="닉네임" variant="standard" onChange={(e) => setUserNickname(e.target.value)} />
        <TextField fullWidth type="text" id="outlined-basic" label="교육과정" variant="standard" onChange={(e) => setCurriculum(e.target.value)} />
        <button onClick={() => signUpHandler() } > 회원가입 </button>
    </div>
  )
};