import React, { useState } from 'react';

// function Counter2(props) {
const Counter2 = (props)=> {
  // 초기 변수값 지정
  const [num, setNum] =useState(1);

  // 함수작성하는 곳

  // 플러스일 때
  const onPlus1 = ()=>{
    setNum(num+1);
  }

/*
  ==: 변수값이 일치하는지 여부
  ===: 변수값, 데이터형식이 일치하는지 여부
*/

  // 마이너스일 떄
  const onMinus1 = ()=>{
    if(num===1){
      setNum(1);
    }else{
      setNum(num-1);
    }
  }

  return (
    <>
      <p>+, -버튼을 클릭하면 숫자증가, 숫자감소하는 state값을 작성하기</p>

      <div>숫자 출력 :<span className='Numcolor'>{num}</span></div>
      <input type='button' value='+' className='Btn' onClick={onPlus1} />
      <input type='button' value='-' className='Btn' onClick={onMinus1} />
    </>
  );
}

export default Counter2;