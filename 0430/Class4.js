import React from 'react';
import image1 from '../images/image1.jpg';

function Class4(props) {
  return (
    <>
      <h3>02_리액트에서 이미지 삽입하는 방법</h3>
      <ul>
        <li>public 폴더에서 이미지 가져오기 위한 3가지 방법
          <ol>
            <li>1. src={`${process.env.PUBLIC_URL}/폴더명/파일명.확장자`}</li>
            <li>2. src={'/폴더명/파일명.확장자'}</li>
            <li>3. src={'폴더명.파일명.확장자'}</li>
          </ol>
        </li>
        <li>2. src폴더에서 이미지가 있는 경우 - import
          <ol>
            <li>import logo from "./src/폴더명/파일명.확장자";</li>
            <li>img src={} alt=""식으로 작성</li>
          </ol>
        </li>
        <li>3. src폴더에 이미지가 있는 경우 - require
            <p><img src={require('../images/Logo.png').default} alt="" /></p>
        </li>
        <li>4. css에서 이미지 경로를 설정하여 적용하기
          <ol>
            <li>background속성으로 url:("이미지 경로명/파일명.확장자");</li>
            <li>background: url("폴더명/파일명.확장자");</li>
            <li>background: url("./폴더명/파일명.확장자");</li>
          </ol>
        </li>
      </ul>

      {/* 로고이미지 */}
      <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="모두투어로고" />
      <br />
      {/* import */}
      <img src={image1} alt="" style={{width:'30%'}}/>
      <br />
      {/* require */}
      <img src={require('../images/image2.jpg')} alt="" style={{width:'30%'}}/>
      <br />

      <p>jsx파일에서 절대경로는 public폴더를 기준으로 함.</p>
      <p>css파일에서 절대경로는 src폴더를 기준으로 함.</p>
      <p>리액트에서는 jsx파일로 작성시 환경변수 PUBLIC_URL을 사용할 것을 권장. (github에 업로드시에도 PUBLIC_URL로 설정된 이미지가 정상적으로 노출됨)</p>
    </>
  );
}

export default Class4;