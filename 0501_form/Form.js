import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';

function Form(props) {
  return (
    <>
      <h3>React Form</h3>
      <p>html애서 폼태그와 마찬가지로 React에서도 사용자가 웹페이지에서 상호작용(Interaction)을 할 수 있도록 할 수 있다.</p>
      <ul>
        <li>nameChange : 이름을 변경하기 위한 함수명</li>
        <li>e.target.value : 이벤트 객체의 매개 변수 e의값</li>
        <li>state : 자기 자신의 콤포넌트에서 변경이 되는 값을 저장하기 위한 곳.</li>
        <li>setState()함수 : state값을 변경하기 위한 함수</li>
      </ul>

      <Form1 />
      <br />
      <Form2 />
      <br />
      <Form3 />
      <br />
      <Form4 />
      <br />
      <Form5 />
      <br />
      <Form6 />
    </>
  );
}

export default Form;