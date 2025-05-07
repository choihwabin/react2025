import React, { useState } from 'react';

function Form1(props) {
  const [name, setName] = useState(''); //state 초기값

  // 입력창에 입력시 실행하는 함수
  const nameChange =(e)=>{
    setName(e.target.value); //사용자가 입력한 값을 state에 저장
  }

  // 내용을 초기화하기 위한 함수
  const nameReset = (e)=>{
    // alert('asdasdsa');
    setName('');
    //input[type] name속성인 태그의 value값을 ''으로처리
  }

  return (
    <>
      <h4>1. 기본 입력폼 양식</h4>
      <form>
        <p>이름을 작성하세요.</p>
        <p>입력값: {name}</p>
        <input type='text' name='name' onChange={nameChange} value={name}/>
        <input type='button' onClick={nameReset} value='초기화' /> 
      </form>

      <ul>
        <li>input태그의 값이 변경되면 'onChange'이벤트를 사용하여 h4에 텍스트 값이 변경되는 내용을 작성하기</li>
        <li>HTML폼태그는 일반적으로 DOM에 의해 처리됨.</li>
        <li>React폼태는 일반적으로 콤포넌트에 의해 처리됨.</li>
        <li>콤포넌트가 데이터를 처리하면 모든 데이터가 state에 저장됨.</li>
      </ul>
    </>
  );
}

export default Form1;