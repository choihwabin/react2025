import React from 'react';

function Class0(props) {
  return (
    <>
      <h2>1일차 - react node.js 설치와 실행방법</h2>
      <h3>babel (컴파일러)</h3>
      <p>자바스크립트 컴파일러이며 최신 자바스크립트 문법이라든지, 리액트가 사용하는 jsx문법을 브라우저가 이해할 수 있도록 자바스크립트 문법으로 변환시켜주는 역할을 한다.</p>

      <h3>2. 리액트 앱개발을 위한 환경 구축</h3>
      <p>node.js : 자바스크립트로 개발할 수 있는 서버환경을 구축해준다.</p>
      <p>node.js는 공식 사이트에서 '안정화' 버전(LTS)을 클릭하여 다운로드 하고 설치하여 사용한다.</p>
      
      <h3>3. node.js 장점</h3>
      <ul>
        <li>크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임</li>
        <li>웹브라우저 환경이 아닌 곳에서도 자바스크립트를 이용한 연산이 가능</li>
        <li>리액트 프로젝트를 준비하기 위해 필요한 webpack, babel 등의 도구들을 실행하는데 사용</li>
        <li>패키지 매니저 도구인 npm(node package manager)이 자동 설치</li>
        <li>npm(node package manager)으로 수많은 개발자가 만든 패키지(재사용 가능한 코드)를 설치하고 관리할 수 있음.</li>
      </ul>

      <h3>02_리액트_nodejs설치와 리액트 프로젝트 생성하고 실행하기</h3>
      <ol>
        <li>nodejs 사이트에 방문하여 LTS(안정화)버전을 다운로드하여 설치</li>
        <li>내컴퓨터 〉 시작 〉 실행 〉 cmd(명령프롬프트) 실행</li>
        <li>node, npm버전확인 node -v, npm -v</li>
        <li>프로젝트 설치하고자 하는 폴더로 이동 : cd 폴더명</li>
        <li>npx전역설치(execute npm package binaries): npm i npx -g</li>
        <li>npx버전 확인 : npx -v</li>
      </ol>

      <h3>1. 명령프롬프트 사용하는 명령어</h3>
      <ul>
        <li>cd 폴더명: change directory의 약자로서 지정한 폴더로 이동</li>
        <li>dir : 폴더, 파일 리스트 출력하기 위한 명령어</li>
        <li>cd\ : 최상위 폴더로 이동하는 명령어</li>
        <li>cd.. : 이전 상위 폴더로 이동하는 명령어(폴더 나가기)</li>
        <li>cls : clear의 약자로서 화면을 깨끗하게 비우는 명령어</li>
        <li>cd드라이브명 : 현재 폴더위치에서 다른폴더로 이동하기 위한 명령어</li>
      </ul>

      <h3>2. vs code에서 cmd등록하여 리액트 프로젝트 설치하기</h3>
      <ul>
        <li>상단 메뉴에서 '터미널'메뉴 클릭</li>
        <li>새 터미널 생성되면 오른쪽 메뉴 '+'옆 화살표 클릭하여 '기본 프로필선택'하면 vscode에서 항상 cmd창이 나오게 된다.</li>
        <li>드라이브명을 전환하여 프로젝트를 설치할 드라이브(폴더)로 이동한다.</li>
        <li>cmd창에서 npx create-react-app 프로젝트명(폴더명) 입력</li>
        <li>cmd창에서 npx create-react-app kdt  => 프로젝트 설치함. 에러가 나오면 다시 재설치하거나 또는 npx i 명령어로 미설치된 파일 재설치한다.</li>
      </ul>

      <h3>3. 리액트 프로젝트 실행</h3>
      <p>리액트 프로젝트 폴더가 생성되고, 설치가 완료되면 npm run start 또는 npm start 명령어로 프로젝트를 실행한다.</p>

      <h3>4. 리액트 프로젝트 종료</h3>
      <p>프로젝트를 종료하고자 할 때는 브라우저 창만 종료하지 말고 vs code 'cmd'창에서 반드시 'ctrl + c'키를 눌러서 안정적으로 종료를 한다.</p>

      <h3>5. 리액트 프로젝트 작업시 유용한 플러그인 설치</h3>
      <ul>
        <li>Reactjs code snippets: 리액트 코드 작성시 단축키로 빠르게 코드를 작성할 수 있도록 도와주며 문법체크해줌.</li>
        <li>tailwind intellisence : 리액트 프로젝트 작성시 CSS코드를 빠르게 작성하도록 도와주는 플러그인</li>
      </ul>

      <h3>03_리액트_프로젝트 폴더구조 알아보기</h3>
      <p>리액트에 node.js 설치시 생성되는 폴더의 종류와 내용 알아보기</p>
      <ul>
        <li>[node_modules] : babel 및 webpack을 통해 리액트를 실행시켜주는 파일들을 모아놓는 폴더이다. <b>백업하지 않아도 되며</b> 나중에 npm i를 통해 다시 설치 가능</li>
        <li>[public] : babel이 컴파일 하여 변환된 문서 index.html을 저장하는 폴더이며, images, src폴더를 웹사이트에 업로드한다.</li>
        <li>[src] : 리액트로 개발하는 모든 대부분의 파일이 저장되는 폴더</li>
        <li>index.js : 리액트 진입하기 위한 파일로서 첫화면 문서임.</li>
        <li>App.js : 콤포넌트 무넛들을 모아놓은 파일</li>
        <li>[build] : 리액트 프로젝트를 완성한 후 웹서버에 업로드하고자 할 때 생성되는 폴더이며 'npm run build'명령어를 통해 실행할 수 있다.</li>
      </ul>

      <h3>1. public폴더의 index.html</h3>
      <p>index.html문서의 div id='root'는 실제 index.js로부터 렌더링된 내용이 삽입되는 영역이다.</p>

      <h3>2. src폴더 안에 index.js</h3>
      <p>App.js 파일로 부터 내용을 불러온 자식요소 콤포넌트를 삽입하기 위한 부모 콤포넌트 문서이다.</p>
      <p>import React from 'react';</p>
      <p>import ReactDom from 'react-dom';</p>
      <p>리액트를 구현할 수 있는 플러그인을 연결한 내용이며, js파일을 불러오는 것이기 때문에 import라는 키워드를 사용(es6문법)하였으며, 리액트에서는 자바스크립트 확장자 .js를 생략한다.</p>
      <p>import 불러올 무언가의 이름 from '파일경로';</p>
      <p>css파일은 import로 문서서식을 불러오고자 할 때 확장자 '.css'를 작성한다.</p>
      <p>import './index.css'; //확장자까지 모두 작성해야함</p>
      
      <h3>3. index.js파일의 root.render() 함수</h3>
      <pre>
        root.render(
          출력할 내용이 들어가는 곳
        )
      </pre>
      <p>render : html문서 내용을 웹페이지에 렌더링한다.</p>
      <p>document.getElementById('root')를 통해서 아이디가 root인 곳에 App을 렌더링 하겠다는 의미</p>
      <p>실제로 DOM으로 가상돔을 불러오겠다는 함수의 의미</p>
      <p>여기서 'App /'는 App.js위 콤포넌트를 가져오겠다는 의미</p>

      <h3>4. 완성된 프로젝트를 빌드하여 웹배포하기</h3>
      <p>vs code하단 cmd창에서 npm run build 작성하여 실행</p>
      <p>build폴더가 생성되면 모든 파일이 들어가 있음(index.html, css, js, images....)</p>
      <p>index.html파일을 선택하여 실행함. 페이지 나오는지 확인</p>

      <h3>5. build폴더의 index.html실행시 내용이 아무것도 나오지 않는 경우</h3>
      <p>아래 package.json파일 내용을 수정하고 'npm run build'를 다시 실행함.</p>
      <pre>
          "development" : [
          "last 1chrome version",
          "last 1 firefox version",
          "last 1 safari version"
          ]
        },
        "homepage":"./"
      }
      </pre>
    </>
  );
}

export default Class0;