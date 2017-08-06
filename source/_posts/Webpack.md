---
title: Webpack
tags: [webpack, v2, bundler]
---

[Webpack](https://webpack.js.org/)는 자바스크립트를 위한 모듈 번들러입니다.
![html](../../../../images/webpack.png)
많이 쓰이지만 처음 접하면 굉장히 복잡한 도구 중 하나라고 생각합니다.
이런 복잡함을 해소하기 위해서 보통 스타터킷으로 많이 시작하곤 하죠.
그렇기에 설정들이 무엇을 의미하는지 알기가 쉽지 않습니다. 
우리는 간단하게 webpack의 설정들이 무엇인지 알아보는 시간을 갖도록 하겠습니다.!!

## Webpack 설정

### 1단계

`webpack.config.js`파일을 생성합니다.(폴더 생성하셔서 이런 이름의 파일을 만드시면 됩니다)

`path`를 로드합니다.

```js
const path = require('path');
```
`path`의 역할은 경로를 설정해주는 의존 모듈

### 2단계

`webpack` 설정 모듈을 정의합니다.
```js
module.export = {
    entry: './test2.js',                 
    output: {                           
      path: __dirname,                     
      filename: 'bundle.js',               
      publicPath: 'http://user-server-domain.com/'
    },
};
```
이제 `entry`와 `output`이 무엇인지 알아봅시다.

- `entry`: 진입 파일의 경로를 설정
- `output`: 출력 파일의 경로를 설정
    - `path`: 출력 파일의 폴더를 설정 (절대 경로) / __dirname은 현재 자신의 경로입니다.
    - `filename`: 출력 파일의 이름 설정
    -  `publicPath`: 배포시 HTML, CSS 파일 내부의 경로 업데이트를 하기 위한 설정
##### `publicPath`: HTML, CSS 파일에 경로가 설정되어 있는데 로컬 테스트 환경에서는 로드할 수 있는 URL이 있을 수 있으나 배포시에는 적용이 안되어 일일이 수정해야하는 경우가 있는데그런경우에 사용합니다.


```js
module: {
    rules: [{
        test: /\.js$/,                
        exclude: [ /node_modules/ ],  // 제외할 경로
        include: [ /src/ ],           // 포함할 경로
        loader: 'babel-loader'        
    }]
  },
```
- `module`: webpack의 모듈을 설정
    - `rules`: 다양한 모듈이 있기에 모듈별로 정의해주기 위한 설정
        - `test`: 파일 경로를 정규표현식으로 설정
        - `excluee`: 제외할 경로(loader가 안 읽을 것들을 제외)
        - `include`: 포함할 경로(loader가 읽을 것들을 포함)
        - `loader`: 번들링에 사용되는 모듈을 설정 (css, js, image, babel등 다양한 타입)

```js
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
```

- `devtool`: 번들된 파일에서 오류검출이 아니라 각각의 파일에서 오류를 검출 설정가능(다양한 설정 존)
- `extensions`: 파일 확장자 설정

```js
plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
```
`plugins`: 결과물인 bundle에 작동하는 추가 node_modules
- `dev-server`: 자신이 설정한 포트로 실행되는 개발 서버입니다. 
서버는 내부적으로 webpack을 호출하며 실시간로딩 및 각종 추가적인 기능을 활용할 수 있습니.
    - `contentBase`: devServer의 루트 경로를 설정합니다.

### 3단계 
이제 웹팩 설정 파일을 보며 복습해 봅시다!
```js
const path = require('path');

module.exports = {
  entry: path.resolve('src/index.jsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }, {
      test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/,
      loader: 'url-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
```

