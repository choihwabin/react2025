import React from 'react';

// function Child({name, age, hobby}){
const Child = ({name, age, hobby})=>{
    return (
      <>
        {/* <h3>Child(자손)콤포넌트</h3>
        <p>child 내용입니다.</p> */}
        {/* 부모가 넘긴 값을 불러옴. */}
        <div>
          <ul>
            <li>이름 : {name}</li>
            <li>나이 : {age}</li>
            <li>취미 : {hobby}</li>
          </ul>
        </div>
        <p>children props는 부모콤포넌트에서 내려주지 않아도 콤포넌트 자체적으로 가지고 있는 props</p>
        <p>모든 클래스콤포넌트는 this.props.children을 사용할 수 있음.</p>
      </>
    );
  }

Child.defaultProps = {
  name:'기본값',
  age:'기본',
  hobby:'기본'
}

export default Child;