import React,{useState} from 'react';

function Form5(props) {
  // 이름, 나이 변수
  const [FormData, setFormData] = useState({
    name:'',
    age:null
  });

  // 전송버튼 변수
  const [result, setResult] = useState('');

  // 입력변경 처리
  const nameChange =(e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  }

  // 전송버튼 클릭시 
  const dataSubmit = (e)=>{
    e.preventDefault();
    const age = FormData.age;
    if(!Number(age)){  //나이가 숫자가 아닐 경우
      alert('나이는 숫자로 입력해주세요.');
    }else{ //나이가 숫자일 경우
      //전송 로직 추가 기능
      // console.log('전송데이터 : ', FormData);
      setResult(`입력하신 이름은 ${FormData.name}이며, 나이는 ${FormData.age}입니다.`);
    }
  }


  return (
    <>
      <h4>5. 데이터 전송시 유효성 검사하기</h4>
      <p>이름, 나이 입력시 이름은 문자, 나이는 숫자로 입력해야함. 하되 나이가 숫자데이터가 아니면 오류메세지가 나올 수 있도록 해야함.</p>
      <p>if문을 사용하여 state값 중 나이가 숫자가 아니면 'alert 메서드'로 경고창을 띄움.</p>
      <p>나이가 숫자데이터이기 때문에 Number형으로 변환해야함.</p>

      <form onSubmit={dataSubmit}>
        {/* 출력 부분 */}
        <p><strong>이름: {FormData.name}</strong></p>
        <p><strong>나이: {FormData.age}</strong></p>
        <p name='result'><b>{result}</b></p>
        <p>이름을 입력하세요 : 
          <input type='text' name='name' onChange={nameChange} value={FormData.name}/>
        </p>

        <p>나이를 입력하세요 :
          <input type='text' name='age' onChange={nameChange} value={FormData.age || ''}/>
          {/* 숫자데이터 값이 있으면 표시, 숫자가 아니면 공백처리 */}
        </p>

        <button type='submit'>전송하기</button>
      </form>
    </>
  );
}

export default Form5;