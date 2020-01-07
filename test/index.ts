import "./index.css"

import { IKakao } from "../src";

declare var kakao: IKakao;

const rootEl = document.getElementById("_root");

const latlng = new kakao.maps.LatLng(33.450701, 126.570667);

const map = new kakao.maps.Map(rootEl, { center: latlng });
