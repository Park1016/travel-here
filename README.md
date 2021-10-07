# Travel-here

✈ travel-here는 전 세계의 여행후기글을 볼 수 있는 여행후기 플랫폼입니다.

[사이트 보러가기](https://travelhere.netlify.app)

<a href="https://www.figma.com/file/dTugkNDMoHBZrPUQvRB7hS/TravelApp" target="_blank">FIGMA 프로토타입</a>

<br>

## 목차

1. [팀원 소개](#1)
2. [기술 스택](#2)
3. [프로젝트 설치 및 실행 방법](#3)
4. [폴더 디렉토리](#4)
5. [프로젝트 기능 설명](#5)
6. [버그](#6)
7. [아쉬운 점 / 개선할 점](#7)

<br>

## 1. 팀원 <a id="1"></a>

- 전상우(팀장)
- 김현수
- 박현정
- 임상기

<br>

## 2. 기술 스택 <a id="2"></a>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black">
<img src="https://img.shields.io/badge/Redux_Thunk-a88bd6?style=for-the-badge&logo=Redux&logoColor=black">
<img src="https://img.shields.io/badge/styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">

<br>
<br>

## 3. 프로젝트 설치 및 실행 방법 <a id="3"></a>

```js
$ npm install
$ yarn install
$ yarn start
```

<br>

## 4. 폴더 디렉토리 <a id="4"></a>

```
📦public
┗ 📜index.html
📦src
┣ 📂assets
┃ ┗ 📂images
┃ ┃ ┣ 📜background.jpeg
┃ ┃ ┣ 📜blur.png
┃ ┃ ┗ 📜logo.png
┣ 📂components
┃ ┣ 📂Category
┃ ┃ ┣ 📜Category.jsx
┃ ┃ ┣ 📜Category.style.js
┃ ┃ ┗ 📜CategorySkeleton.jsx
┃ ┣ 📂Comment
┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┣ 📜Comment.style.js
┃ ┃ ┣ 📜CommentList.jsx
┃ ┃ ┗ 📜styleConstants.js
┃ ┣ 📂GreetingCard
┃ ┃ ┣ 📜GreetingCard.jsx
┃ ┃ ┗ 📜GreetingCard.style.js
┃ ┣ 📂Header
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┗ 📜Header.style.js
┃ ┣ 📂Loading
┃ ┃ ┗ 📜Loading.jsx
┃ ┣ 📂LoginHelp
┃ ┃ ┣ 📜LoginHelp.jsx
┃ ┃ ┗ 📜LoginHelp.style.js
┃ ┣ 📂LoginModal
┃ ┃ ┣ 📂footer
┃ ┃ ┃ ┣ 📜LoginFooter.jsx
┃ ┃ ┃ ┗ 📜LoginFooter.style.js
┃ ┃ ┣ 📂header
┃ ┃ ┃ ┣ 📜LoginHeader.jsx
┃ ┃ ┃ ┗ 📜LoginHeader.style.js
┃ ┃ ┣ 📜LoginModalOpen.jsx
┃ ┃ ┗ 📜LoginModalOpen.style.js
┃ ┣ 📂Logo
┃ ┃ ┣ 📜Logo.jsx
┃ ┃ ┗ 📜Logo.style.js
┃ ┣ 📂Mypage
┃ ┃ ┣ 📂bookmark
┃ ┃ ┃ ┣ 📜Bookmark.jsx
┃ ┃ ┃ ┗ 📜Bookmark.style.js
┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┃ ┗ 📜Comment.style.js
┃ ┃ ┣ 📂info
┃ ┃ ┃ ┣ 📜Info.jsx
┃ ┃ ┃ ┗ 📜Info.style.js
┃ ┃ ┣ 📂Password
┃ ┃ ┃ ┣ 📜Password.jsx
┃ ┃ ┃ ┗ 📜Password.style.js
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ 📜Post.jsx
┃ ┃ ┃ ┗ 📜Post.style.js
┃ ┃ ┣ 📜Mypage.jsx
┃ ┃ ┣ 📜Mypage.style.js
┃ ┃ ┗ 📜styleConstatns.js
┃ ┣ 📂NavBar
┃ ┃ ┣ 📜NavBar.jsx
┃ ┃ ┗ 📜NavBar.style.js
┃ ┣ 📂NavLinks
┃ ┃ ┣ 📜NavLinks.jsx
┃ ┃ ┗ 📜NavLinks.style.js
┃ ┣ 📂Post
┃ ┃ ┣ 📂PostSlider
┃ ┃ ┃ ┣ 📜ContentPlaceholder.js
┃ ┃ ┃ ┣ 📜PostSlider.jsx
┃ ┃ ┃ ┗ 📜PostSlider.style.js
┃ ┃ ┣ 📜NoneMember.jsx
┃ ┃ ┣ 📜Post.jsx
┃ ┃ ┣ 📜Post.style.js
┃ ┃ ┗ 📜styleConstants.js
┃ ┣ 📂PostCard
┃ ┃ ┣ 📜ContentPlaceholder.js
┃ ┃ ┣ 📜PostCard.jsx
┃ ┃ ┗ 📜PostCard.style.js
┃ ┗ 📂Write
┃ ┃ ┣ 📂WriteBtn
┃ ┃ ┃ ┣ 📜WriteBtn.jsx
┃ ┃ ┃ ┗ 📜WriteBtn.style.js
┃ ┃ ┗ 📂WriteModal
┃ ┃ ┃ ┣ 📜UpdateModal.jsx
┃ ┃ ┃ ┣ 📜WriteModal.jsx
┃ ┃ ┃ ┗ 📜WriteModal.style.js
┣ 📂hooks
┃ ┗ 📜useAuth.js
┣ 📂pages
┃ ┣ 📂Board
┃ ┃ ┣ 📜Board.jsx
┃ ┃ ┗ 📜Board.style.js
┃ ┣ 📜CategoryList.jsx
┃ ┣ 📜Home.jsx
┃ ┣ 📜Login.jsx
┃ ┣ 📜LoginFind.jsx
┃ ┣ 📜MyPage.jsx
┃ ┣ 📜NotFound.jsx
┃ ┣ 📜NotFound.style.js
┃ ┗ 📜Write.jsx
┣ 📂store
┃ ┣ 📂apis
┃ ┃ ┣ 📜board.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜delete.js
┃ ┃ ┣ 📜post.js
┃ ┃ ┣ 📜postLike.js
┃ ┃ ┗ 📜userLike.js
┃ ┣ 📂modules
┃ ┃ ┣ 📜board.js
┃ ┃ ┣ 📜bookmark.js
┃ ┃ ┣ 📜category.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜delete.js
┃ ┃ ┣ 📜login.js
┃ ┃ ┣ 📜mypageBookmark.js
┃ ┃ ┣ 📜mypageComment.js
┃ ┃ ┣ 📜mypagePost.js
┃ ┃ ┣ 📜nav.js
┃ ┃ ┣ 📜postLike.js
┃ ┃ ┣ 📜user.js
┃ ┃ ┣ 📜userLike.js
┃ ┃ ┗ 📜view.js
┃ ┗ 📜index.js
┣ 📂styles
┃ ┣ 📜Background.js
┃ ┗ 📜GlobalStyle.js
┣ 📂utils
┃ ┗ 📜getDate.js
┣ 📜App.js
┣ 📜auth_service.js
┣ 📜firebase.js
┣ 📜history.js
┗ 📜index.js
```

<br>

## 5. 프로젝트 기능 설명 <a id="5"></a>

<hr />

### 로그인

<details>
  <summary>상세보기</summary>

#### 이메일과 비밀번호로 로그인/회원가입

![travel-1이메일로그인회원가입!](https://user-images.githubusercontent.com/76847993/136286365-bc839a8d-f9fb-43d4-920e-20419fe781bb.gif)

#### SNS 로그인

![travel-1sns로그인!](https://user-images.githubusercontent.com/76847993/136286912-be4ce264-a12e-40ce-a093-dfdd32ded87c.gif)

#### SNS 회원가입

![travel-1sns회원가입!](https://user-images.githubusercontent.com/76847993/136287256-4eac9790-9022-45b1-bedd-946360b41736.gif)

#### 로그인/회원가입 오류메세지

##### 로그인 비밀번호 오류가 나면 비밀번호 재설정 버튼이 생성됩니다.

![travel-1로그인회원가입오류들!](https://user-images.githubusercontent.com/76847993/136287310-ca03a820-5ada-416f-bc0f-4f2b10f57a83.gif)

#### 비밀번호 재설정

##### 이메일로 비밀번호 재설정을 안내합니다.

![travel-1비번변경!](https://user-images.githubusercontent.com/76847993/136287350-0326ba83-91da-4a39-a2d5-3dc4c2c6c365.gif)

</details>

<hr />

### 게시글 쓰기

<details>
  <summary>상세보기</summary>

#### 전체적인 게시글쓰기 스타일

##### 제목, 내용, 지역은 필수작성으로 입력내용 없이 등록을 누르면 알림문구가 뜹니다.

![travel-2글쓰기스타일!](https://user-images.githubusercontent.com/76847993/136287411-84c3db9f-3332-4168-81f6-f7e3893deb3f.gif)

#### 글등록

##### 제목, 내용, 지역, 사진(선택)을 작성한 후 등록을 누르면 해당 게시글로 바로 이동합니다.

![travel-2글쓰기!](https://user-images.githubusercontent.com/76847993/136287437-1393ef3c-c751-4d85-81f8-7d16d6e2b662.gif)

</details>

<hr />

### 게시판 (Board)

<details>
  <summary>상세보기</summary>

#### 카테고리 --> 게시판

##### 지역별 카테고리에서 특정지역을 선택하면, 해당 지역의 게시글들을 모아볼 수 있습니다. <br /> 특정 게시글을 선택하면 해당 게시글이 띄워집니다.

![용줄3카테고리](https://user-images.githubusercontent.com/76847993/136288753-7fd103fa-0ccb-4bca-9d8f-8fc5b7832997.gif)

</details>

<hr />

### 게시글 (Post)

<details>
  <summary>상세보기</summary>

#### 좋아요, 북마크 기능

![travel-5좋아요찜!](https://user-images.githubusercontent.com/76847993/136291948-a9a4fa17-402d-431e-b439-6d2e38ca32cb.gif)

#### 게시글, 댓글은 본인일 경우에만 수정/삭제가 가능

![travel-5본일일때수정삭제토글!](https://user-images.githubusercontent.com/76847993/136291909-08cd9788-c130-401a-85a4-57f855f183ef.gif)

#### 게시글, 댓글의 수정/삭제 기능

![travel-5수정삭제!](https://user-images.githubusercontent.com/76847993/136289288-4a7fb6a0-a349-47fa-a164-38c20eaf3ca2.gif)

</details>

<hr />

### 마이페이지

<details>
  <summary>상세보기</summary>

##### 전체적인 마이페이지 디자인입니다. <br /> 왼쪽창에서 같은 목록, 또는 오른쪽 창에서 < 아이콘을 누르면 창이 닫힙니다.

![travel-6마이페이지스타일](https://user-images.githubusercontent.com/76847993/136289407-5e61acec-7341-4b1b-9e45-0304e1d5155a.gif)

##### 닉네임, 프로필사진 수정 기능입니다. <br />프로필사진은 기본사진이 아닐 때 수정할 경우 '기본사진으로 변경' 버튼이 추가됩니다.

![travel-6닉네임사진수정](https://user-images.githubusercontent.com/76847993/136291987-0b3bfc9e-678b-49f3-b4ec-da83a250e936.gif)

##### 수정사항은 게시글쓰기, 게시글, 댓글에서 모두 바로 반영됩니다.

![travel-6즉시반영](https://user-images.githubusercontent.com/76847993/136289717-7c15bdd8-fde0-4c1c-8a76-b1342ad62b2f.gif)

##### 내가 쓴 글, 댓글, 찜 목록을 클릭하면 해당 게시글로 이동합니다.

![travel-6마이페이지이동](https://user-images.githubusercontent.com/76847993/136289562-2d24bd3a-c662-458c-9855-3e1558dceea8.gif)

##### 이메일로 로그인 했을 때에만 비밀번호 변경 창이 뜹니다.

![travel-6비번변경창유무](https://user-images.githubusercontent.com/76847993/136292038-7153b5a1-f730-4edb-9d15-bc7912ccb4e5.gif)

##### 비밀번호 변경 시 현재 비밀번호로 재인증을 한 후 맞게 입력한 경우에만 변경이 가능합니다.

![travel-6마이페이지비번](https://user-images.githubusercontent.com/76847993/136292010-dc36778b-d97b-4f8b-b1c7-b369333f9982.gif)

##### 탈퇴하기를 클릭하면 탈퇴 여부를 선택하여 탈퇴 할 수 있다.

![travel-6탈퇴](https://user-images.githubusercontent.com/76847993/136292065-72bd4b64-6ab7-4be6-978b-b6dab295ff08.gif)
<<<<<<< HEAD

=======

> > > > > > > 4f0eadb483c70d3b97a8c424827c5fc5e7b39b76

</details>

<hr />

### 비회원

<details>
  <summary>상세보기</summary>

#### 로그인하지않고 게시글을 클릭하면 다음과같은 창이 뜹니다.

![travel-7비회원!](https://user-images.githubusercontent.com/76847993/136292105-f76f7f15-a862-48e6-bf2d-103d89e59b42.gif)

#### 또한 navBar에 mypage, 우측하단 게시글쓰기 버튼이 뜨지 않습니다.

</details>

<hr />

### 404 not Found

<details>
  <summary>상세보기</summary>

#### 404오류 화면입니다.

![travel-7_404!](https://user-images.githubusercontent.com/76847993/136292096-bffeb524-b2be-44e5-85d8-5f9fad927785.gif)

</details>

<hr />

### 반응형

<details>
  <summary>상세보기</summary>

#### 로그인/회원가입 반응형

![travel-로그인반응형!](https://user-images.githubusercontent.com/76847993/136291116-e977388c-553a-4a94-a100-22c6f21baafd.gif)

#### 게시판/게시글 반응형

![post반응형](https://user-images.githubusercontent.com/76847993/136290279-c9ce740d-4035-4aeb-852f-97d1dde120f4.gif)

#### 마이페이지 반응형

![마이페이지반응형](https://user-images.githubusercontent.com/76847993/136291784-66c41cb5-6641-44fd-a1f5-65c5df12545e.gif)

#### 카테고리, 게시글 쓰기, 알림창 반응형

![각종반응형](https://user-images.githubusercontent.com/76847993/136290745-eda46a4f-59ae-45e0-85d4-b094d3b4a4a4.gif)

</details>

<br>

## 6. 버그 <a id="6"></a>

##### 1. 마이페이지 - 내 정보 - 닉네임 변경이 간헐적으로 안되는 경우

<br>

## 7. 아쉬운 점 / 개선할 점 <a id="7"></a>

<table class="table">
  <tr>
    <td class="title">팀원</td>
    <td class="title left">아쉬운 점</td>
    <td class="title right">개선할 점</td>
  </tr>
  <tr>
    <td rowspan="5" class="phj">박현정</td>
    <td>역할 분배를 페이지별로 했더니 특정 사람에게 너무 많은 역할이 주어졌습니다.</td>
    <td>개발을 시작하기 전에 기능별 정의를 분명하게 하고 그 기능별로 역할 분배를 해야겠다고 느꼈습니다.</td>
  </tr>
  <tr>
    <td>리덕스의 action이 너무 많아진 느낌입니다.</td>
    <td>개발을 하면서 그때그때 중복된 부분을 정리해야할 것 같습니다.</td>
  </tr>
  <tr>
    <td>데이터를 정의할 때 어떤 type의 값을 넣을건지를 정확히 정하지 않아 나중에 수정할 일이 많았습니다.</td>
    <td>개발 전 단계에서 데이터타입을 정확하게 해야겠다고 느꼈습니다. 예를 들어 post id는 string타입의 date.now로 하자는 식으로요.</td>
  </tr>
  <tr>
    <td>firebase와 redux상태간의 정확한 정리가 없어 헷갈리는 일이 많았습니다.	</td>
    <td>firebase에서 받아오는 사용자와, redux에서의 사용자를 서류상으로 정확하게 명시해놓고 각각 어떻게 쓸것인지 팀원들과 정의하는 시간을 가져야할 것 같습니다.</td>
  </tr>
  <tr>
    <td>코드리뷰가 적극적으로 이루어지지 않았던 것 같습니다. 제가 짠 코드가 괜찮은 코드인지 아닌지를 판단하기 어려웠고, 팀원이 짠 코드를 제대로 파악하기 힘들었습니다.</td>
    <td>팀프로젝트이니만큼 프로젝트에 사용된 코드에 모두가 책임감을 가져야한다고 생각합니다. 그 책임감을 지려면 어느정도 코드리뷰에 강제성이 있어야될 것 같습니다.</td>
  </tr>
  <tr>
    <td rowspan="3" class="khs">김현수</td>
    <td>정확한 디자인이 없었던 점</td>
    <td>figma를 사용해서 대략적인 디자인이 있었지만 기능 및 세부사항들을 개발하면서 추가하여 프로젝트의 기간이 늘어지는 상황이 됐습니다. 시간이 좀 걸리더라도 기능별 세부사항과 디자인을 확정시켜두고 개발하는 방법이 좋을 것 같습니다.</td>
  </tr>
  <tr>
    <td>대화의 부재</td>
    <td>프로젝트를 진행할 때 서로 도움이 될 수 있는 부분이 있었지만 내꺼 하기에 바쁘다는 핑계가 있었던 것 같습니다. 개발 스케쥴을 내 작업에만 맞췄던 것 같습니다.</td>
  </tr>
  <tr>
    <td>다른 사람의 코드를 확인하지 못함</td>
    <td>흐름정도만 파악한 뒤 정확한 동작을 확인하지 않았습니다. 더 세심하게 보는 습관을 가져야 할 것 같습니다.</td>
  </tr>
  <tr>
    <td rowspan="5" class="jsw">전상우</td>
  </tr>
  <tr>
    <td>코드 리뷰의 문제점</td>
    <td>코드 리뷰 담당자를 한 명씩 정해서 이상이 있으면 연대 책임시키기</td>
  </tr>
  <tr>
    <td>너무 많은 state</td>
    <td>추적 중인 state가 15개이다. 비슷한 위치에 놓인 컴포넌트끼리는 state를 통하해도 좋지 않을까? 예를 들어 mypage, board, post 3개로.</td>
  </tr>
  <tr>
    <td>너무 많은 Boilerplate</td>
    <td>redux 자체의 문제점. redux toolkit을 사용하는 것이 좋을 듯 하다. 최근에는 비동기적인 작업을 redux-saga 대신에 react-query, swr, apollo로 대신한다고 하니 다음 프로젝트에서는 이를 활용해보는 것이 좋을 듯 하다.</td>
  </tr>
  <tr>
    <td>서로 다른 코딩 방식</td>
    <td>3가지 방법으로 이를 해결할 수 있을듯 하다. 첫 번째는 ESLint와 Prettier을 맨처음 세팅할 때 설정하는 것. 두 번째는 변수명을 좀 더 명확하게 짓는 것. 세 번째는 주석을 좀 더 명확하게 다는 것</td>
  </tr>
  <tr>
    <td  rowspan="5"  class="lsg">임상기</td>
   <td>해결되지 않는 문제를 혼자 끙끙 앓고 있던 것이 아쉽습니다.</td>
    <td>모르는 것들은 팀원들과 상의하면서 프로젝트를 하면 좋을 거 같습니다.</td>
  </tr>
  <tr>
   <td>프로젝트 기간을 정확히 정하지 않고 계속 연장했던 부분이 아쉽습니다.</td>
    <td>프로젝트의 우선순위를 두어 필요한 기능을 먼저 구현하여 완성하고, 나머지 기능들은 그 다음에 완성을 해나가면 좋을 것 같습니다.</td>
  </tr>
  <tr>
   <td>리덕스 강의는 들었으나 적용을 하지 못한 점이 아쉽습니다.</td>
    <td>프로젝트 끝나고 개인적으로 리덕스를 적용하면서 이해를 더 높여야겠습니다.</td>
  </tr>
  <tr>
   <td>영어 실력 부족. 번역기를 쓴다지만 어느 정도 영어 실력은 있으면 훨씬 수월할 것 같습니다.</td>
    <td>영어 원문을 보고 해석하는 연습을 조금씩이라도 해야 될 것 같습니다.</td>
  </tr>
  <tr>
    <td colspan="2">*** 향후 계획 *** <br />Node.js도 배워 볼 계획입니다. 파이어스토어가 아닌 Node.js를 통해서도 백엔드를 구현해볼 수 있도록 공부할 계획입니다.</td>
  </tr>
</table>
