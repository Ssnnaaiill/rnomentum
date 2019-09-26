react-momentum
===
>[reference](https://velog.io/@bosco/TOY-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AA%A8%EB%A9%98%ED%85%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-1)

## 프로젝트 준비
CSS를 좀 더 쉽게 적용하기 위해 yarn을 사용하여 `styled-components`, `styled-reset` 을 설치함니다. 또한, data type check를 위해 `prop-types` 도 설치합니다.
```
yarn add styled-components styled-reset prop-types
```

다음과 같은 명령어를 사용해서 App을 실행합니다.
```
yarn start
```

컴포넌트에서 fontawesome icon들을 사용할 수 있도록 다음 모듈들을 add해줍니다.
```
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
yarn add @fortawesome/react-fontawesome
```

날씨 API를 코드 상에서 사용할 수 있도록 `[openweathermap](https://openweathermap.org)`에 signup한 후 API key를 발급받습니다.
또한, API 정보를 쉽게 가져올 수 있도록 axios를 설치합니다.
```
yarn add axios
```

## Components

### 메인 화면

### name
처음 rnoomentum을 시작할 때 이름을 입력받습니다. 이 이름은 현재 세션의 localStorage에 저장되며, `clock` component의 greeting 문구에서 사용됩니다.

### clock
현재 시간을 초 단위로 표시합니다. 표시되는 시간은 현재 자신의 컴퓨터 시간대를 기준으로 하며, 형식은 `HH:MM:SS` 입니다.

### search
좌측 상단에 고정되어 있는 컴포넌트로, 입력받은 문자열을 google에 검색할 수 있도록 합니다.

### weather
`openweathermap` API를 이용하여 현재 자신이 위치하고 있는 지역(위도, 경도 사용) 날씨를 표시합니다.

### todo
간단한 To do list를 구현합니다.