# 깃허브 배포
깃허브 접속
리포지토리(폴더) 생성 weekKurly
https://moonjongjs.github.io/weekKurly


1. git init
2. git config user.name 'moonjongjs'
3. git config user.email 'moonseonjong@naver.com'
4. 이름확인 git config user.name
5. 이메일확인 git config user.email
6. 




git 설정 시작



# 닷홈 배포
npm run build

http://moonjong.dothome.co.kr/weekKurly/

# axios 패키설치
npm i axios

# 리액트 회원가입폼 => AXIOS API => PHP => DB

1. PHP 백앤드(서버사이드 스크립트 언어)
파일명 : signup_insert_react.php

2. php 백앤드 FTP 업로드
signup_insert_react.php

3. php 백앤드 HTTP  통신 => 리액트 AXIOS API => 전송 

리액트 서버 주소 => http://localhost:3000/
웹호스팅 서버 주소 => http://moonjong.dothome.co.kr/weekKurly/
웹호스팅 서버 주소 => http://moonjong.dothome.co.kr/weekKurly/signup_insert_react.php

4. 리액트 서버주소와 웹호스팅 서버 주소 다르면 전송 실행 CORS 정책 에러
CORS 정책  웹호스팅 서버 주소에서 [서버파일] => [헤더영역]에서 허가 받아야 전송된다.

5. 리액트에서 직접 CORS 정책을 회피하는 [프록시 Proxy] 서버를 사용하면
웹호스팅 서버 주소에서 [서버파일] => [헤더영역]에서 허가 안받아도 전송가능하다.
[단' 배포하면 반드시 4번과 같이 사용해야한다.]

    - 리액트 입력데이터 POST 방식(메서드 Method)으로 전송된 리액트 전송 변수값을 저장

        $userId = $_POST['userId'];
        $userPw = $_POST['userPw'];
        $userName = $_POST['userName'];
        $userEmail = $_POST['userEmail'];
        $userHp = $_POST['userHp'];
        $userPostcode = $_POST['userPostcode'];
        $userAddr1 = $_POST['userAddr1'];
        $userAddr2 = $_POST['userAddr2'];
        $userGender = $_POST['userName'];
        $userYear = $_POST['userYear'];
        $userMonth = $_POST['userMonth'];
        $userDate = $_POST['userDate'];
        $userChooga = $_POST['userChooga'];
        $userChamyeoEvent = $_POST['userChamyeoEvent'];
        $userChoochuninId = $_POST['userChoochuninId'];
        $userService = $_POST['userService'];


# PHP 회원가입데이터 입력
1. PHP 백앤드(서버사이드 스크립트 언어)
파일명 : signup_insert_test.php

2. php 백앤드 FTP 업로드
signup_insert_test.php

3. php 백앤드 HTTP  실행 테스트 확인
moonjong.dothome.co.kr/weekKurly/signup_insert_test.php


'$userId','$userPw','$userName','$userEmail','$userHp','$userPostcode','$userAddr1','$userAddr2','$userGender','$userYear','$userMonth','$userDate','$userChooga','$userChamyeoEvent','$userChoochuninId','$userService'
필드1, ....
userId,userPw,userName,userEmail,userHp,userPostcode,userAddr1,userAddr2,userGender,userYear,userMonth,userDate,userChooga,userChamyeoEvent,userChoochuninId,userService






# 프론트앤드(회원가입폼) => AXIO API =>  PHP   => DB 
1. PHP 백앤드(서버사이드 스크립트 언어)
작성 파일명 : signup_insert.php

2. php 백앤드 FTP 업로드

3. php 백앤드 HTTP  실행 테스트 확인
moonjong.dothome.co.kr/weekKurly/signup_insert.php


# 회원가입 테이블 저장(입력)
- 마이 닷홈
  기본 주소 :	moonjong.dothome.co.kr
  MySQL ID	: moonjong
  MySQL PW : anstjswhd0105#

- 데이터베이스 사용 권한 설정
1. 데이터베이스서버                    DB_SERVER = localhost 
2. 데이터베이스사용자이름           DB_ USER_NAME = moonjong
3. 데이터베이스사용자비밀번호    DB_USER_PW = anstjswhd0105#
4. 데이터베이스이름                    DB_NAME =  moonjong







   => 내용 저장하기 테스트
   CRUD
   C: Create   => 입력(INSERT)
   R: Read     => 조회(SELECT)
   U: Update  => 수정(UPDATE)
   D: Delete   => 삭제(DELETE)

   입력(INSERT)
   조회(SELECT)
   수정(UPDATE)
   삭제(DELETE)



# 회원가입폼 DB 테이블 설계
- 데이터베이스이름 => moonjong
- 테이블이름 => week3_signup_table
1 idx  자동증가번호(AUTO_INCREMENT ; AI)  숫자
2 아이디  userId 문자열 16
3 비밀번호  userPw 문자열 16
4 이름  userName 문자열 50
5 이메일  userEmail 문자열 250
6 휴대폰  userHp 문자열 11 
7 우편번호 userPostcode 문자열 6
8 주소1 userAddr1 문자열 250
9 주소2 userAddr2 문자열 250
10 성별 userGender 문자열 4
11 생년 userYear 문자열 4
12 생월 userMonth 문자열 2
13 생일 userDate 문자열 2
14 추가입력사항 userChooga 문자열 50
15 참여이벤트명 userChamyeoEvent 문자열 200
16 추천인아이디 userChoochuninId 문자열 16
17 이용약관동의 userService 문자열 500
18 가입일 userGaib 자동날짜  timestamp  now() => CURRENT_TIMESTAMP





# 회원가입폼 구현
- 회원가입 => UIUX디자인 => 회원가입폼 리액트 이벤트 => AXIOS API => PHP => MYSQL
- PHP
- MYSQL
- 프록시(Proxy)
- CORS 정책
- 배포
- 깃허브(Git)
- 닷홈
- 넷트리파이

- 마이 닷홈
  기본 주소 :	moonjong.dothome.co.kr
  MySQL ID	: moonjong
  MySQL PW : anstjswhd0105#

  MySQL 관리(UTF-8) : moonjong.dothome.co.kr/myadmin
  웹로그 보기	moonjong.dothome.co.kr/weblog (유료회원 전용)

- 닷홈 MySQL 관리자 페이지
moonjong.dothome.co.kr/myadmin







# 마켓컬리 쇼핑몰
- 최근본상품 ,JSP, PHP, MYSQL
- 상세페이지 
- 장바구니담기 ,JSP, PHP, MYSQL
- 일일타임세일
- 3일타임세일
- 모달(팝업창) - 쿠키
- 상품 MVC 패턴 ,JSP, PHP, MYSQL
- 필터링 ,JSP, PHP, MYSQL
- 정렬 ,JSP, PHP, MYSQL
- 회원가입 ,JSP, PHP, MYSQL
- 로그인, 아이디찾기, 비밀번호찾기, 비밀번호재설정, 로그인/로그아웃구현 ,JSP, PHP, MYSQL
- 게시판 ,JSP, PHP, MYSQL




# 배포
1. 닷홈 배포 PHP MYSQL       HTTP / HTTS SSL 가입
2-1. 깃허브 배포 드래그드롭  HTTPS => SSL
2-2. 깃허브 배포 git설정 우분투
3. 네틀리파이 배포
4. 카페24 톰켓 JAVA MYSQL
5. 클라우드 배포

배포 폴더(프로젝트폴더)
weekKurly
http://moonjong.co.kr/weekKurly

package.json
   },
  "homepage": "http://moonjong.co.kr/weekKurly"
}

# 브라우저 라우터
- 브라우저라우터는 반드시 basename을 표기한다.
```JSX
   <BrowserRouter basename={process.env.PUBLIC_URL}>
```

# 브라우저 라우터에서 새로고침 => 404 페이지 오류
=> 해시라우터
```JSX
   <HashRouter>
```


터미널
npm run build



# 로그인 구현 리듀서
npm i @reduxjs/toolkit
npm i react-redux

npm i @reduxjs/toolkit react-redux

# 로그인
1. 리덕스 리듀서 login.js
2. 상태변수 설정
loginId=null
loginName=null
admin=false

3. 헤더(네비게이션) => 조건부 연산자
loginId 가 null 이 아니면 로그인 구현
loginName 바인딩
admin 이 true  이면 관리자 로그인 
admin 이 false 이면 일반로그인


# 라우터 시작하기
1. 리액트 라우터 돔 설치
npm i  react-router-dom

2. 브라우저라우터 / 해시라우터
    - WrapComponent 
    => 임포트 {BrowserRouter, Routes, Route} react-router-dom

3. 네비게이션 헤더컴포넌트
   import { Outlet, Link } from 'react-router-dom';

   링크 태그 수정 <a href='!#' className='main-btn'>신상품</a>
                 =>   <Link to='/sub1' className='main-btn'>신상품</Link>



# 리액트 프로젝트 생성

## 프로젝트 폴더 생성

## 프로젝트 생성

1. app 프로젝트 생성
   CTRL + SHIFT + `

```JS
    npx create-react-app app

    cd app
    npm start
```


## 컴포넌트 생성(모듈) import / export

## 헤더컴포넌트 => 네비게이션 => 링크 => 라우터

2. [public] 퍼블릭 구성요소 정적 폴더 public 정리  
   [css]
   [img]
   [js]
   index.html

3. [src] 에스알씨 구성요소 동적 폴더 src 정리  
   [component]  
   index.js

4. [component] 컴포넌트 구성요소
   WrapComponent.jsx
   [wrap]

5. [wrap] 컴포넌트 구성요소
   [main]
   [sub]
   HeaderComponent.jsx
   MainComponent.jsx
   FooterComponent.jsx

# 자동완성 컴포넌트

- rsf 함수 컴포넌트 function 함수
- rsc 함수 컴포넌트 화살표함수
- rcc 클래스 컴포넌트

6. HeaderComponent.jsx 헤더컴포넌트 JSX 코딩

   - class= => className=  
     CTRL + H => class= 문자열을 className= 으로변경
   - <img src='' alt='' > => <img src='' alt='' />
   - <br> => <br />
   - <input type='' .... > => <input type='' .... />
   - <a href='#'> => <a href='!#'>
   - 링크태그 네비게이션 => 라우터 링크 구현

7. ModalTopComponent.jsx 탑모달컴포넌트 JSX 코딩

8. [main] 메인페이지
   Section1Component.jsx
   Section2Component.jsx
   Section3Component.jsx
   Section4Component.jsx
   Section5Component.jsx
   Section6Component.jsx
   Section7Component.jsx
   Section8Component.jsx
   Section9Component.jsx
   Section10Component.jsx
   Section11Component.jsx
   Section12Component.jsx
   Section13Component.jsx

9. [sub] 서브페이지
   [scss]
   SubPublicComponent.scss
   Sub1Component.jsx // 신상품
   Sub2Component.jsx // 베스트
   Sub3Component.jsx // 알뜰상품
   Sub4Component.jsx // 특가/혜택
   Sub5Component.jsx // 회원가입폼
   Sub6Component.jsx // 로그인
   Sub7Component.jsx // 공지사항(고객센터)

10. SASS 패키지 설치
    npm i sass;

11. [main] 사스 폴더 생성
    [scss]
    SectionPublicComponent.scss
    Section1Component.scss
    Section2Component.scss
    Section3Component.scss
    Section4Component.scss
    Section5Component.scss

12. WrapComponent.jsx => 라우터(Router) 설치
    npm i react-router-dom

13. WrapComponent.jsx => 라우터(Router) 구성요소 & 구현
    13-1. import {BrowserRouter, Routes, Route} 'react-router-dom'
    13-2. <BrowserRouter>로 컴포넌트를 감싸준다  
    13-3. <Routes>로 컴포넌트를 감싸준다
    13-4. <Route>로 컴포넌트를 감싸준다
    13-5. 패스네임(PathName) 설정 => <Route path='/main' element={<MainComponent />} />

```JS
      <BrowserRouter>
         <ModalTopComponent /> {/* 고정페이지 */}
         <Routes>
            <Route path='/' element={<HeaderComponent />}>
               <Route index element={<MainComponent />} />
               <Route path='/main' element={<MainComponent />} />
               <Route path='/sub1' element={<Sub1Component />} />
               <Route path='/sub2' element={<Sub2Component />} />
               <Route path='/sub3' element={<Sub3Component />} />
               <Route path='/sub4' element={<Sub4Component />} />
               <Route path='/sub5' element={<Sub5Component />} />
               <Route path='/sub6' element={<Sub6Component />} />
               <Route path='/sub7' element={<Sub7Component />} />
            </Route>
         </Routes>
         <FooterComponent /> {/* 고정페이지 */}
      </BrowserRouter>

```

14. HeaderComponent.jsx 헤더컴포넌트
    => 아울렛(페이지전환) 컴포넌트변경된다.
    => 링크걸어준다 => 패스네임

```JS
   <Link to='/sub1' className='main-btn'>신상품</Link>
   <Link to='/sub2' className='main-btn'>베스트</Link>
   <Link to='/sub3' className='main-btn'>알뜰상품</Link>
   <Link to='/sub4' className='main-btn'>특가/혜택</Link>
   <Link to='/sub5' className='on'>회원가입</Link>
   <Link to='/sub6'>로그인</Link>
   <Link to='/sub7'>고객센터</Link>
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
