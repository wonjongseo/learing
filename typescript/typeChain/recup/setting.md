1. npm i ts-node

   1. 빌드없이 타입스크립트를 실행할 수 있음
      "dev": "ts-node src/index.ts",

2. npm i nodemon
   1. "dev": "nodemon --exec ts-node src/index.ts",

기본적으로 타입스크립트에서 자바 내장 라이브러리를 쓸때는
import \* as crpto from "crypto";
식으로 선언해야하는데

tsconfig.json 에

"moduleResolution": "node", 를선언해주면

import crpto from "crypto"; 식으로 사용 가능하다

하지만 타입스크립트는 자바스크립트로 작성된 crypto 를 모르기에

https://github.com/DefinitelyTyped/DefinitelyTyped
에 가서 타입스크립트를 위한 .d.ts 파일이 있는지 확인해서 인스톨 해야한다.

이 경우에는 npm i @types/node 를 설치함.
