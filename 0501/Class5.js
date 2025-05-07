import React, { Component } from 'react';
import Grand from './Grand';

class Class5 extends Component {
  render() {
    return (
      <>
        <h3>01_리액트 props개념과 사용</h3>
        <dl>
          <dt>props : properties의 줄임말</dt>
          <dd>'부모콤포넌트'가 '자식콤포넌트'에게 전달해주는 값.</dd>
          <dd>리액트에서 props 값을 읽기 위해서만 사용, 값을 변경하려면 오류가 발생된다.</dd>
          <dd>자식요소에 전달할 값이 없는 경우는 기본값이 출력되도록 설정이 가능하다.(defauliPops=속성:값)</dd>
          <dd>비구조화 할당 방식으로 속성 정의: render()함수 바로 아래 const name, age, hobby = this.props;로 선언하여 적용할 수 있다.</dd>
          <dd>클래스형 콤포넌트로 제작한 후 함수형 콤포넌트로 전환하여 출력하기 - 속성을 매개변수로 처리해야함.</dd>
          <dd>함수형 콤포넌트는 제작시 화살표함수로 사용하고 const 변수명 작성.</dd>
        </dl>
        <br />

        <Grand />

      </>
    );
  }
}

export default Class5;