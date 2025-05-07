import React, {useState} from 'react';

function Form3(props) {
// 1. 상태값을 저장하기 위한 변수
const [name, setName] = useState('');       //name과 setName변수에 ('')값을 넣음. (이름저장)
const [result, setResult] = useState('');   //출력할 부분에 변수값('')을 넣음. (전송버튼 클릭시 내용저장)

// 2. nameChange 함수
//name='name' 값이 들어간 텍스트에 값이 들어가면 onChange가 작동
const nameChange=(e)=>{ //nameChange = 사용자가 입력한 값
  setName(e.target.value); //사용자가 입력한 값을 setName에 저장
}

// 3. 전송버튼 클릭시 실행하는 함수
const dataSubmit =(e)=>{
  e.preventDefault(); //새로고침 방지
  setResult(`입력하신 이름은 ${name}입니다.`); //출력 양식
}


//text작성 > nameChange 실행 > setName > name 순으로 전달
  return (
    <>
      <form onSubmit={dataSubmit}>  {/*전송하기 클릭시 함수 작동*/}
        <h4>3. onSubmit(전송버튼)으로 입력한 내용 전송하기</h4>
        <p>사용자가 입력한 이름은 <strong>{name}</strong>입니다.</p>
        <p id='result'>{result && <strong>{result}</strong>}</p>

        <input type='text' name='name' onChange={nameChange} />
        <button type='submit'>전송하기</button>
      </form>
    </>
  );
}

export default Form3;