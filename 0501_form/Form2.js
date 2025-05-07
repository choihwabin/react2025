import React, { useState } from 'react';

function Form2(props) {
  const [name, setName] = useState(''); //상태 관리값 초기화
  const [pw_name, setPass] = useState('');

  // 변수선언
  let header = '';
  

  // nameChange함수 (이름저장)
  const nameChange =(e)=>{
  setName(e.target.value); 
  };

  // pwChange 함수 (비밀번호저장)
  const pwChange = (e)=>{
    setPass(e.target.value);
  }

  //초기화 함수 (모두 리셋)
  const onDateReset = (e)=>{
    setName('');
    setPass('');
  }

  //조건식을 사용하여 값이 있으면 출력, 없으면 공백
  if(name){ //조건식이 참이면 
    header=<p>사용자가 입력한 이름은 {name}이고, 패스워드는 {pw_name}입니다.</p>
  }else{ // 거짓이면
    header='';
  }



  // 비밀번호 조건식

  return (
    <>
      <h4>2. if문으로 조건식 작성하기</h4>
      {header}

      <form>
        <p>
          <label for='id_name'>아이디 : </label>
          <input
          type='text'
          name='name'
          onChange={nameChange}
          id='id_name'
          value={name}
          />
        </p>
        <p>
          <label for='password'>비밀번호 : </label>
          <input 
          type='text'
          id='pw_name' 
          name='password' 
          onChange={pwChange} 
          value={pw_name}
          />
        </p>
        <input type='button' onClick={onDateReset} value='초기화'/>
      </form>
    </>
  );
}

export default Form2;