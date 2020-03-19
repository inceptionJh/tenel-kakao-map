# Intro

[깃허브](https://github.com/inceptionJh/tenel-kakao-map) | [버그 리포트](https://github.com/inceptionJh/tenel-kakao-map/issues)

카카오맵 타입 정의 라이브러리

- 동적 로드하는 경우를 위해서 전역이 아닌 import 해서 사용할 수 있도록 구성

# Installation

```bash
$ npm install tenel-kakao-map
```


# Getting started

1. [카카오맵 API 가이드](http://apis.map.kakao.com/web/guide/) 를 따라 kakao map sdk를 window 객체에 초기화

2. sdk의 타입 지정 후 api에 맞게 사용

    - 정적 로드 후 사용 예시
        ```typescript
        // global.d.ts

        /** tsconfig.json의 include에 global.d.ts가 포함되어야함. */
        import { IKakao } from "tenel-kakao-map";

        declare global {
            var kakao: IKakao;
        }
        ```

        ```typescript
        // example.ts

        // 카카오맵이 로드 될 컨테이너
        const container = document.getElementById("kakao-map") as HTMLDivElement;

        // 좌표
        const latlng = new kakao.maps.LatLng(33.450701, 126.570667);

        // 줌레벨
        const level = 3;

        const options = { center: latlng, level };

        // 카카오맵 적용
        new kakao.maps.Map(container, options);
        ```

    - 동적 로드 후 사용 예시
        ```typescript
        // example.ts

        import { IKakao } from "tenel-kakao-map";

        declare var kakao: IKakao;

        // 카카오맵이 로드 될 컨테이너
        const container = document.getElementById("kakao-map") as HTMLDivElement;

        // 좌표
        const latlng = new kakao.maps.LatLng(33.450701, 126.570667);

        // 줌레벨
        const level = 3;

        const options = { center: latlng, level };

        // 카카오맵 적용
        new kakao.maps.Map(container, options);
        ```

3. 자세한 api 사용법은 [카카오맵 문서](http://apis.map.kakao.com/web/documentation/) 참조
