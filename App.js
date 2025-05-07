import './App.css';
import Class0 from './0428/Class0'; //문서연결

import Class1 from './0429/Class1'; //문서연결
import Class2 from './0429/Class2'; //문서연결

import Class3 from './0430/Class3'; //문서연결
import Class4 from './0430/Class4'; //문서연결

import Class5 from './0501/Class5'; //props
import Class6 from './0501/Class6'; //state
import Event from './0501/Event'; //event
import Form from './0501_form/Form'; //form태그

import Array1 from './0507/Array1'; //Array1 배열데이터
import Yellow from './0507/Yellow'; //노랑풍선 상품목록 출력하기


function App() {
  return (
    <>
    <header className="App">
      <h1>리액트 학습하기</h1>
    </header>

    <main>
      <h2 className="title3">1일차 학습</h2>
      <Class0 />
      <hr />

      <h2 className='title3'>2일차 학습</h2>
      <Class1 />
      <hr />
      <Class2 />
      <hr />
      <h2 className='title3'>3일차 학습</h2>
      <Class3 />
      <hr />
      <Class4 />
      <hr />
      <h2 className='title3'>4일차 학습</h2>
      <Class5 />
      <hr />
      <Class6 />
      <hr />
      <Event />
      <hr />
      <h2 className='title3'>5일차 학습 0502 - 폼태그와 값출력, 유효성검사, 실습예제</h2>
      <Form />
      <hr />
      <h2 className='title3'>6일차 학습 0507- 배열데이터</h2>
      <Array1 />
      <Yellow />
      <hr />
    </main>
    
    <footer className="footer">
      <p>하단 푸터영역</p>
      <address>Copyright&copy;2025 0000 allrights reserved</address>
    </footer>
    </>
    
  );
}

export default App;
