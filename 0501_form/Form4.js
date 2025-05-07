import React,{useState} from 'react';

function Form4(props) {
// 1. 상태값 저장하기 위한 변수
// const [name, setName] = useState('');
// const [id_txt, setId] = useState('');

// 여러 값을 한번에 쓰는 방법
const [FormData, setFormData] = useState({
  name:'',
  id_txt:''
});

// // 작성될 변수선언
// let Print = '';

// // nameChange 함수
// const nameChange=(e)=>{
//   setName(e.target.value);
// }
// // IdChange함수
// const IdChange=(e)=>{
//   setId(e.target.value);
// }

// // text 작성시 값이 있으면 출력, 없으면 공백
// if(name,id_txt){
//   Print=<p>입력하신 이름은{name}이고, 아이디는 {id_txt}입니다.</p>
// }else{
//   Print='';
// }

const nameChange =(e)=>{
  const {name, value} = e.target;
  setFormData((prev)=>({
    ...prev, //es6스프레드 연산자(...)
    [name]:value
  }));
}

// 다시쓰기 함수(onDelete)
const onDelete=()=>{
  setFormData({
    name:'',
    id_txt:''
  })
  // setName('');
  // setId('');

}
//text 작성시 onChange함수 작동 => setName,setId에 값을 전달 => {name},{id_txt}에 값을 출력
  return (
    <>
      <h4>4. 여러개의 input태그의 데이터 관리하는 방법</h4>
      <ul>
        <li>e.target.vlaue : 값에 접근하기</li>
        <li>e.target.name: name속성값에 접근하기</li>
        <li>nameChange : 값을 입력하였을 때 작동되는 이벤트 함수</li>
        <li>state를 사용하여 입력값 관리</li>
        <li>onChange 이벤트를 통해 상태 업데이트</li>
        <li>useState함수를 사용하여 상태 관리값을 한꺼번에 선언하고 관리 가능</li>
      </ul>

      <form>
        <p>출력내용(이름) : {FormData.name}</p>
        <input type='text' id='name' name='name' value={FormData.name} onChange={nameChange} />

        <p>출력내용(아이디) : {FormData.id_txt}</p>
        <input type='text' id='id' name='id_txt' value={FormData.id_txt} onChange={nameChange} />

        {/* {Print} */}
        <p>출력할 이름은 {FormData.name}, 아이디는{FormData.id_txt}입니다.</p>
        <input type='button' value='다시쓰기' onClick={onDelete} />
      </form>
    </>
  );
}

export default Form4;