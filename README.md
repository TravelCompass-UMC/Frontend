npm이 아닌 yarn으로 진행합니다.

커밋 규칙: [TYPE] #branch - issue (닉네임)

작업하기 전 항상 devlop에서 풀 받아서(작업시간이 길어지면 주기적으로)
[feature/기능]으로 브랜치를 파서 작업합니다.
다른 사람과 작업하는 폴더가 겹치면 푸쉬에서 오류가 납니다!
자신이 어떤 폴더를 수정하는지 팀원들과 공유해주세요!

오류가 뜨면 npm i 해볼 것. 프로젝트가 의존하는 모든 패키지 설치.

깃허브에 푸쉬할 때에도 전체 푸쉬(git add .)가 아닌
해당 폴더만 푸쉬해주세요.
수정)add . 을 쓸 때는 본인이 편집한 파일이 맞는지, 다른 사람과 겹치는 폴더를 수정한 것이 아닌지 확인 후 사용 바랍니다.

[풀/푸쉬]는 main이 아닌 develop에서만 진행해주세요.

강제푸쉬는 하지 말아주세요.

직접 머지하지 마시고 풀리퀘스트만 날려주시고 알려주세요! 확인 후 머지하겠습니다.

yarn.lock, package.json README.md 등 작업과 관련 없는 파일은 [수정/푸쉬]하지 말아주세요!

index.html, app.js, index.js는 우선 담당자 이외에는 수정하지 말아주세요!

# 폴더 설명

components
재사용 가능한 컴포넌트들 폴더.
컴포넌트가 많아지면 폴더를 추가해 분류 후
경로 수정 바랍니다.

assets
이미지 혹은 폰트와 같은 파일들이 저장되는 폴더입니다.
파비콘과 같이 index.html내부에서 직접 사용하여 컴파일 단계에서 필요하지 않은 파일들은 public에,
컴포넌트 내부에서 사용하는 이미지 파일인 경우 이 assets 폴더에 위치시켜주세요.

hooks (= hoc)
커스텀 훅이 위치하는 폴더

pages
react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트들

constants
공통적으로 사용되는 상수들을 정의한 파일들

config
config 파일이 많지 않은 경우 보통 최상위에 위치시켜놓지만 여러개의 config 파일이 있을 경우 폴더로 분리

styles
css 파일들

services (= api)
api관련 로직의 모듈 파일, auth와 같이 인증과 관련된 파일

utils
정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들

contexts
contextAPI를 사용할 때 관련 파일들

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
