import React from 'react';
import './css/Compo.css';
import '../css/Sub_style.css';

function Class1(props) {
  // 사용자 정의 객체
  const styling = {
    backgroundColor:"#0f0", //속성: 값,
    color:"#00f" //속성:값
  }
  return (
    <>
      <h2>2일차 - 리액트 JSX문법</h2>
      <p>JSX : JavaScript + XML의 약자</p>
      <p>리액트에서 UI를 표현하고자 할 때 쓰는 문법</p>
      <p>자바스크립트의 확장문법, XML과 매우 비슷함.</p>
      <p>JSX를 반드시 사용해야 하는 것은 아니지만, JSX를 사용하면 REACT애플리케이션을 더 쉽게 작성이 가능하다.</p>
      <p>Compile이란? 영어문장을 한글로 번역한다.</p>

      <h3>1. JSX의 장점</h3>
      <ul>
        <li>html코드 작성문법과 비슷하기 때문에 쉽고 사용자에게 익숙하다.</li>
        <li>콤포넌트들도 html태그를 작성하듯이 그냥 작성하여 활용도가 높다.</li>
      </ul>

      <h3>2. JSX문서 작성시 주의할 점(문법)</h3>
      <ul>
        <li>꼭 태그 최상위 태그 div, 〈 〉, fragment로 감싸줘야 한다.</li>
        <li>닫는 태그는 반드시 작성해야한다. br / 처럼 태그는 무조건 닫혀있어야 하며, 종료 태그가 없는 태그는 끝에 /를 넣어준다.</li>
        <li>JSX의 표현방식 { }: 콤포넌트 UI를 구현하는것 이외에도 여러가지 기능을 한다. 그 중 하나가 자바스크립트 값을 처리하는 것이다. { }내부에는 변수값, 속성값 또는 기타 유효한 JAVASCRIPT표현식을 작성할 수 있다.</li>
        <li>JSX { } 안의 주석은 /**/만 사용 가능하다.</li>
        <li>조건부 렌더링 - 삼항조건연산자 문법 =〉 (조건식)?(참일때 표현식):(거짓일 경우 표현식)</li>
        <li>JSX문법에서 CSS스타일 작성하는 5가지 방법
          <ol className='border1'>
            <li style={{backgroundColor:'#ff0', color:'#f00'}}>inline스타일</li>
            <li style={styling}>변수값 활용</li>
            <li className='txt_color1'>외부스타일을 작성하고 import로 연결</li>
            <li className='txt_color1'>className="클래스명" 식으로 작성함.</li>
            <li id='bg_color1'>id선택자로 서식적용하기</li>
            <li>css모듈방식</li>
          </ol>
        </li>
        <li>부모와 자손 콤포넌트(class, function)</li>
        <li>리액트에서는 파일명을 저장시 앞글자는 대문자로 저장을 한다.(App.js)</li>
      </ul>
    </>
  );
}

export default Class1;