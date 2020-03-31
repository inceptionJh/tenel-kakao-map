export interface IKakao {
  maps: IKakaoMaps;
}

export interface IKakaoMaps {
  Viewpoint: new (pan: number, tilt: number, zoom: number, panaId?: number) => IKakaoViewpoint;
  LatLng: new (latitude: number, longitude: number) => IKakaoLatLng;
  LatLngBounds: IKakaoLatLngBoundsConstructor;
  Coords: new (x: number, y: number) => IKakaoCoords;
  Point: new (x: number, y: number) => IKakaoPoint;
  Size: new (width: number, height: number) => IKakaoSize;
  MapTypeControl: new () => IKakaoMapTypeControl;
  ZoomControl: new () => IKakaoMapZoomControl;
  Tileset: new (width: number, height: number, urlFunc: (x: number, y: number, z: number) => string, copyright?: IKakaoTilesetCopyright[], dark?: boolean, minZoom?: number, maxZoom?: number, getTile?: (x: number, y: number, z: number) => string) => IKakaoTileset;
  TilesetCopyright: new (msg: string, shortMsg: string, minZoom?: number) => IKakaoTilesetCopyright;
  StaticMap: new (container: HTMLElement, options?: IKakaoStaticMapOptions) => IKakaoStaticMap;
  Map: new (container: HTMLElement, options?: IKakaoMapOptions) => IKakaoMap;
  Roadview: new (container: HTMLElement, options?: IKakaoRoadviewOptions) => IKakaoRoadview;
  RoadviewClient: new () => IKakaoRoadviewClient;
  RoadviewOverlay: new () => IKakaoRoadviewOverlay;
  Marker: new (options?: IKakaoMarkerOptions) => IKakaoMarker;
  MarkerImage: new (src: string, size: IKakaoSize, options?: IKakaoMarkerImageOptions) => IKakaoMarkerImage;
  InfoWindow: new (options?: IKakaoInfoWindowOptions) => IKakaoInfoWindow;
  CustomOverlay: new (options?: IKakaoCustomOverlayOptions) => IKakaoCustomOverlay;
  AbstractOverlay: new () => IKakaoAbstractOverlay;
  Polyline: new (options?: IKakaoPolylineOptions) => IKakaoPolyline;
  Polygon: new (options?: IKakaoPolygonOptions) => IKakaoPolygon;
  Circle: new (options?: IKakaoCircleOptions) => IKakaoCircle;
  Rectangle: new (options?: IKakaoRectangleOptions) => IKakaoRectangle;
  Ellipse: new (options?: IKakaoEllipseOptions) => IKakaoEllipse;
  event: IKakaoEvent;
  drawing: IKakaoDrawing;
  services: IKakaoServices;
  MapTypeId: IKakaoMapTypeId;
  ControlPosition: IKakaoControlPosition;
  CopyrightPosition: IKakaoCopyrightPosition;
}

export interface IKakaoServices {
  Status: IKakaoServicesStatus;
  SortBy: IKakaoServicesSortBy;
  Coords: IKakaoServicesCoords;
  Places: new (map?: IKakaoMap) => IKakaoServicesPlaces;
  Geocoder: new () => IKakaoServicesGeocoder;
}

export interface IKakaoServicesGeocoder {
  addressSearch: (
    /** 변환할 주소명 */
    addr: string,


    callback: (
      /** 결과 상세는 {@link https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord 로컬 REST API 주소 검색}의 응답결과 참고 */
      result: any[],

      /** {@link http://apis.map.kakao.com/web/documentation/#services_Status kakao.maps.services.Status}와 비교하여 사용 */
      status: any,

      /** {@link http://apis.map.kakao.com/web/documentation/#Pagination kakao.maps.services.Pagenation}의 인스턴스 */
      pagination: IKakaoServicesPagination,
    ) => void,

    options?: {
      /** 검색할 페이지. 기본값은 1 */
      page?: number,

      /** 검색할 페이지. 기본값은 10, 1~30 까지 가능 */
      size?: number,
    }
  ) => void;

  coord2Address: (
    /** x 좌표, 경위도인 경우 longitude */
    x: number,

    /** y 좌표, 경위도인 경우 latitude */
    y: number,

    callback: (
      /** 결과 상세는 {@link https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-address 로컬 REST API 주소 검색}의 응답결과 참고 */
      result: any[],

      /** {@link http://apis.map.kakao.com/web/documentation/#services_Status kakao.maps.services.Status}와 비교하여 사용 */
      status: any,
    ) => void,

    options?: {
      /** 입력 좌표 체계. 기본값은 WGS84 */
      input_coord: IKakaoCoords,
    }
  ) => void;

  coord2RegionCode: (
    /** x 좌표, 경위도인 경우 longitude */
    x: number,

    /** y 좌표, 경위도인 경우 latitude */
    y: number,

    callback: (
      /** 결과 상세는 {@link https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-district 로컬 REST API 주소 검색}의 응답결과 참고 */
      result: any[],

      /** {@link http://apis.map.kakao.com/web/documentation/#services_Status kakao.maps.services.Status}와 비교하여 사용 */
      status: any,
    ) => void,

    options?: {
      /** 입력 좌표 체계. 기본값은 WGS84 */
      input_coord?: IKakaoCoords,

      /** 출력 좌표 체계. 기본값은 WGS84 */
      output_coord?: IKakaoCoords,
    }
  ) => void;

  transCoord: (
    /** 변환할 x 좌표 */
    x: number,

    /** 변환할 y 좌표 */
    y: number,

    /** 변환 결과를 받을 콜백함수 */
    callback: (
      /** 변환된 좌표 결과, 결과 상세는 로컬 REST API 좌표계 변환 의 응답결과 참고 */
      result: any[],

      /** {@link http://apis.map.kakao.com/web/documentation/#services_Status kakao.maps.services.Status}와 비교하여 사용 */
      status: any,
    ) => void,

    options?: {
      /** 입력 좌표 체계. 기본값은 WGS84 */
      input_coord?: IKakaoCoords,

      /** 출력 좌표 체계. 기본값은 WGS84 */
      output_coord?: IKakaoCoords,
    }
  ) => void;
}

export interface IKakaoServicesStatus {
  OK: any;
  ZERO_RESULT: any;
  ERROR: any;
}

export interface IKakaoServicesSortBy {
  ACCURACY: any;
  DISTANCE: any;
}

export interface IKakaoServicesCoords {
  /** WGS84 좌표계 */
  WGS84: any;

  /** WCONGNAMUL 좌표계 */
  WCONGNAMUL: any;

  /** CONGNAMUL 좌표계 */
  CONGNAMUL: any;

  /** WTM 좌표계 */
  WTM: any;

  /** TM 좌표계 */
  TM: any;
}

/**
 * 검색 결과의 페이징을 담당하는 클래스.
 *
 * 하나의 검색 결과에 대해 페이지 이동을 쉽게 할 수 있도록 도와준다.
 *
 * 직접 선언은 불가능하며 검색 결과를 다루는 콜백함수의 인자로 인스턴스가 생성되어 넘어온다.
 */
export interface IKakaoServicesPagination {
  /** 현재 검색의 결과 목록의 총 갯수 */
  totalCount: number;

  /** 현재 검색 결과 기준, 다음 페이지가 있는지 여부 */
  hasNextPage: boolean;

  /** 현재 검색 결과 기준, 이 전 페이지가 있는지 여부 */
  hasPrevPage: boolean;

  /** 현재 페이지 번호 */
  current: number;

  /** 다음 페이지를 검색한다. */
  nextPage: () => void;

  /** 이 전 페이지를 검색한다. */
  prevPage: () => void;

  /** 저장한 페이지를 검색한다. */
  gotoPage: (page: number) => void;

  /** 가장 처음 페이지를 검색한다. */
  gotoFirst: () => void;

  /** 가장 마지막 페이지를 검색한다. */
  gotoLast: () => void;
}

export interface IKakaoServicesPlaces {
  setMap: (map: IKakaoMap) => void;
  keywordSearch: (
    /** 검색할 키워드 */
    keyword: string,

    /** 검색 결과를 받을 콜백함수 */
    callback: (
      /** 결과 상세는 {@link https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword 로컬 REST API 키워드로 장소 검색}의 응답결과 참고 */
      result: any[],

      /** {@link http://apis.map.kakao.com/web/documentation/#services_Status kakao.maps.services.Status}와 비교하여 사용 */
      status: any,

      /** {@link http://apis.map.kakao.com/web/documentation/#Pagination kakao.maps.services.Pagenation}의 인스턴스 */
      pagination: IKakaoServicesPagination,
    ) => void,

    options?: {
      /** 키워드 필터링을 위한 카테고리 코드 */
      category_group_code?: string,

      /** 중심 좌표. 특정 지역을 기준으로 검색한다. */
      location?: IKakaoLatLng,

      /** x 좌표, longitude, location 값이 있으면 무시된다. */
      x?: number,

      /** y 좌표, latitude, location 값이 있으면 무시된다. */
      y?: number,

      /** 중심 좌표로부터의 거리(반경) 필터링 값. location / x , y / useMapCenter 중 하나와 같이 써야 의미가 있음. 미터(m) 단위. 기본값은 5000, 0~20000까지 가능 */
      radius?: number,

      /** 검색할 사각형 영역 */
      bounds?: IKakaoLatLngBounds,

      /** 사각 영역. 좌x,좌y,우x,우y 형태를 가짐. bounds 값이 있으면 무시된다. */
      rect?: string,

      /** 한 페이지에 보여질 목록 개수. 기본값은 15, 1~15까지 가능 */
      size?: number,

      /** 검색할 페이지. 기본값은 1, size 값에 따라 1~45까지 가능 */
      page?: number,

      /** 정렬 옵션. DISTANCE 일 경우 지정한 좌표값에 기반하여 동작함. 기본값은 ACCURACY (정확도 순), kakao.maps.services.SortBy 참조 */
      sort?: any,

      /** 지정한 Map 객체의 중심 좌표를 사용할지의 여부. 참일 경우, location 속성은 무시된다. 기본값은 false */
      useMapCenter?: boolean,

      /** 지정한 Map 객체의 영역을 사용할지의 여부. 참일 경우, bounds 속성은 무시된다. 기본값은 false) => void; */
      useMapBounds?: boolean,
    }
  ) => void;

  categorySearch: (
    /** 검색할 카테고리 코드 */
    code: string,

    callback: (
      result: any[],

      /** {@link http://apis.map.kakao.com/web/documentation/#services_Status kakao.maps.services.Status}와 비교하여 사용 */
      status: any,

      /** {@link http://apis.map.kakao.com/web/documentation/#Pagination kakao.maps.services.Pagenation}의 인스턴스 */
      pagination: IKakaoServicesPagination,
    ) => void,

    options?: {
      /** 중심 좌표. 특정 지역을 기준으로 검색한다. 카테고리 검색에서는 필수. */
      location?: IKakaoLatLng,

      /** x 좌표, longitude, location 값이 있으면 무시된다. */
      x?: number,

      /** y 좌표, latitude, location 값이 있으면 무시된다. */
      y?: number,

      /** 중심 좌표로부터의 거리(반경) 필터링 값. location / x , y / useMapCenter 중 하나와 같이 써야 의미가 있음. 미터(m) 단위. 기본값은 5000, 0~20000까지 가능 */
      radius?: number,

      /** 검색할 사각형 영역 */
      bounds?: IKakaoLatLngBounds,

      /** 사각 영역. 좌x,좌y,우x,우y 형태를 가짐. bounds 값이 있으면 무시된다. */
      rect?: string,

      /** 한 페이지에 보여질 목록 개수. 기본값은 15, 1~15까지 가능 */
      size?: number,

      /** 검색할 페이지. 기본값은 1, size 값에 따라 1~45까지 가능 */
      page?: number,

      /** 정렬 옵션. DISTANCE 일 경우 지정한 좌표값에 기반하여 동작함. 기본값은 ACCURACY (정확도 순), kakao.maps.services.SortBy 참조 */
      sort?: any,

      /** 지정한 Map 객체의 중심 좌표를 사용할지의 여부. 참일 경우, location 속성은 무시된다. 기본값은 false */
      useMapCenter?: boolean,

      /** 지정한 Map 객체의 영역을 사용할지의 여부. 참일 경우, bounds 속성은 무시된다. 기본값은 false */
      useMapBounds?: boolean,
    },
  ) => void;
}

export interface IKakaoDrawing {
  OverlayType: IKakaoDrawingOverayType;
  Toolbox: new (options: IKakaoDrawingToolboxOptions) => IKakaoDrawingToolbox;
  DrawingManager: new (options?: IDrawingManagerOptions) => IKakaoDrawingManager;
}

export interface IKakaoDrawingToolboxOptions {
  /** 그리기 모드를 가져올 DrawingManager 객체 */
  drawingManager: IKakaoDrawingManager;
}

export interface IKakaoDrawingToolbox {
  getElement(): Element;
}

export interface IDrawingManagerOptions {
  /** 마커와 그리기 요소를 그릴 지도 객체 */
  map: IKakaoMap;

  /**
   * 마우스 오버 시 가이드 툴팁 표시 여부.
   *
   * ‘draw’, ‘drag’, ‘edit’ 3가지를 지정할 수 있다. (기본값: 모두 표시 안함)
   *
   * 예를들어 [‘draw’]로 설정하면 객체를 그릴때 가이드 툴팁이 표시된다.
   * */
  guideTooltip?: string[];

  /** 사용할 그리기 요소 지정한다 (기본값: 모든 그리기 요소) */
  drawingMode?: (IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType])[];

  /** 마커 그리기 옵션 */
  markerOptions?: {
    /** 드래그 가능한 마커 */
    draggable?: boolean;

    /** 삭제가 가능한 마커 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
    removable?: boolean;

    /** 그릴 마커의 이미지를 설정한다 (기본값: API 기본 마커 이미지) */
    markerImages?: IDrawingMarkerImageOptions[];
  };

  /** 사각형 그리기 옵션 */
  rectangleOptions?: IDrawingRectangleOptions;

  /** 원 그리기 옵션 */
  circleOptions?: IDrawingCircleOptions;

  /** 타원 그리기 옵션 */
  ellipseOptions?: IDrawingEllipseOptions;

  /** 선 그리기 옵션 */
  polylineOptions?: IDrawingPolylineOptions;

  /** 화살표 선 그리기 옵션 */
  arrowOptions?: IDrawingArrowOptions;

  /** 다각형 그리기 옵션 */
  polygonOptions?: IDrawingPolygonOptions;
}

export interface IDrawingMarkerImageOptions {
  /** 마커 이미지 URL */
  src: string;

  /** 마커의 너비 */
  width: number;

  /** 마커의 높이 */
  height: number;

  /** 마커의 좌표에 일치시킬 이미지 안의 X 좌표 */
  offsetX?: number;

  /** 마커의 좌표에 일치시킬 이미지 안의 Y 좌표 */
  offsetY?: number;

  /** 스프라이트 이미지의 전체 너비 */
  spriteWidth?: number;

  /** 스프라이트 이미지의 전체 높이 */
  spriteHeight?: number;

  /** 스프라이트 이미지에서 사용할 영역의 좌측 좌표 */
  spriteOriginX?: number;

  /** 스프라이트 이미지에서 사용할 영역의 상단 좌표 */
  spriteOriginY?: number;

  /** 마커의 클릭 또는 마우스오버 가능한 영역의 모양 */
  shape?: string;

  /** 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값 */
  coords?: string;

  hoverImage?: IDrawingMarkerImageOptions;
  dragImage?: IDrawingMarkerImageOptions;
}

export interface IDrawingRectangleOptions {
  /** 드래그 가능한 사각형 */
  draggable?: boolean;

  /** 삭제 가능한 사각형 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
  removable?: boolean;

  /** 수정 가능한 사각형 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다) */
  editable?: boolean;

  /** 외각선의 두께 (기본값: 3) */
  strokeWeight?: number;

  /** #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’) */
  strokeColor?: string;

  /** 외곽선의 불투명도 (0-1, 기본값: 1.0) */
  strokeOpacity?: number;

  /** 외곽선선 스타일 (기본값: ‘solid’) */
  strokeStyle?: string;

  /** #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’) */
  fillColor?: string;

  /** 채우기 불토명도 (0-1, 기본값: 0) */
  fillOpacity?: number;
}

export interface IDrawingCircleOptions {
  /** 드래그 가능한 원 */
  draggable?: boolean;

  /** 삭제 가능한 원 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
  removable?: boolean;

  /** 수정 가능한 원 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다) */
  editable?: boolean;

  /** 외각선의 두께 (기본값: 3) */
  strokeWeight?: number;

  /** #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’) */
  strokeColor?: string;

  /** 외곽선의 불투명도 (0-1, 기본값: 1.0) */
  strokeOpacity?: number;

  /** 외곽선 스타일 (기본값: ‘solid’) */
  strokeStyle?: string;

  /** #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’) */
  fillColor?: string;

  /** 채우기 불토명도 (0-1, 기본값: 0) */
  fillOpacity?: number;
}

export interface IDrawingEllipseOptions {
  /** 드래그 가능한 타원 */
  draggable?: boolean;

  /** 삭제 가능한 타원 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
  removable?: boolean;

  /** 수정 가능한 타원 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다) */
  editable?: boolean;

  /** 외각선의 두께 (기본값: 3) */
  strokeWeight?: number;

  /** #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’) */
  strokeColor?: string;

  /** 외곽선의 불투명도 (0-1, 기본값: 1.0) */
  strokeOpacity?: number;

  /** 외곽선 스타일 (기본값: ‘solid’) */
  strokeStyle?: string;

  /** #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’) */
  fillColor?: string;

  /** 채우기 불토명도 (0-1, 기본값: 0) */
  fillOpacity?: number;
}

export interface IDrawingPolylineOptions {
  /** 드래그 가능한 선 */
  draggable?: boolean;

  /** 삭제 가능한 선 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
  removable?: boolean;

  /** 수정 가능한 선 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다) */
  editable?: boolean;

  /** 선의 두께 (기본값: 3) */
  strokeWeight?: number;

  /** #xxxxxx 형태의 선 색 (기본값: ‘#F10000’) */
  strokeColor?: string;

  /** 선의 불투명도 (0-1, 기본값: 1.0) */
  strokeOpacity?: number;

  /** 선 스타일 (기본값: ‘solid’) */
  strokeStyle?: string;

  /** 그리기 중, 마우스를 따라다니는 보조선의 스타일 (기본값: ‘solid’) */
  hintStrokeStyle?: string;

  /** 그리기 중, 마우스를 따라다니는 보조선의 투명도. (기본값: 0.5) */
  hintStrokeOpacity?: number;
}

export interface IDrawingArrowOptions {
  /** 드래그 가능한 화살표 선 */
  draggable?: boolean;

  /** 삭제 가능한 화살표 선 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
  removable?: boolean;

  /** 수정 가능한 화살표 선 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다) */
  editable?: boolean;

  /** 화살표 선의 두께 (기본값: 3) */
  strokeWeight?: number;

  /** #xxxxxx 형태의 화살표 선 색 (기본값: ‘#F10000’) */
  strokeColor?: string;

  /** 화살표 선의 불투명도 (0-1, 기본값: 1.0) */
  strokeOpacity?: number;

  /** 화살표 선 스타일 (기본값: ‘solid’) */
  strokeStyle?: string;

  /** 그리기 중, 마우스를 따라다니는 보조선의 스타일 (기본값: ‘solid’) */
  hintStrokeStyle?: string;

  /** 그리기 중, 마우스를 따라다니는 보조선의 투명도. (기본값: 0.5) */
  hintStrokeOpacity?: number;

  /** 시작점의 화살표 표시 여부 (기본값: false) */
  startArrow?: boolean;
}

export interface IDrawingPolygonOptions {
  /** 드래그 가능한 다각형 */
  draggable?: boolean;

  /** 삭제 가능한 다각형 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다) */
  removable?: boolean;

  /** 수정 가능한 다각형 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다) */
  editable?: boolean;

  /** 외각선의 두께 (기본값: 3) */
  strokeWeight?: number;

  /** #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’) */
  strokeColor?: string;

  /** 외곽선의 불투명도 (0-1, 기본값: 1.0) */
  strokeOpacity?: number;

  /** 외곽선 스타일 (기본값: ‘solid’) */
  strokeStyle?: string;

  /** #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’) */
  fillColor?: string;

  /** 채우기 불토명도 (0-1, 기본값: 0) */
  fillOpacity?: number;
}

/**
 * 그리기 관리자 객체를 생성한다.
 *
 * {@link http://apis.map.kakao.com/web/sample/basicDrawingLibrary drawing Library 사용하기 샘플보기}
 *
 * {@link http://apis.map.kakao.com/web/sample/drawingGetData drawing Library에서 데이터 얻기 샘플보기}
 */
export interface IKakaoDrawingManager {
  setStyle: (type: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType], props: string, value: string | number) => void;
  setStrokeWeight: (strokeWeight: number) => void;

  /** format: #xxxxxx */
  setStrokeColor: (strokeColor: string) => void;

  /**
   * 그리기 요소를 선택한다. 이미 선택한 상태에서 다시 호출하면 이 전 선택된 요소는 취소된다.
   *
   * 여러개의 마커 이미지를 선언했을 경우, 두 번째 파라메터로 해당 마커 이미지의 인덱스 값을 넣는다.
   *
   * 인덱스 값은 0 부터 시작한다.
   */
  select: (type: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType], index?: number) => void;
  cancel: () => void;

  /**
   * 그리기 요소를 이전 상태로 되돌린다.
   *
   * 그리기 요소의 생성/수정/이동/삭제 동작을 되돌릴 수 있고 여러번 호출이 가능하다.
   *
   * 그리기 요소의 상태는 최대 20개 까지 저장된다.
   */
  undo: () => void;

  /**
   * 이전 상태로 되돌린 상태를 취소한다.
   *
   * 여러번의 undo 호출 이후에 DrawingManager 객체에 그리기 요소에 대한 새로운 상태가 추가되지 않으면 되돌리기 이전 상태까지 실행할 수 있다.
   */
  redo: () => void;

  /** 그리기 요소를 이전 상태로 되돌릴 수 있는지 여부를 반환한다. */
  undoable: () => boolean;

  /** 이전으로 되돌린 상태를 취소할 수 있는지 여부를 반환한다. */
  redoable: () => boolean;

  /**
   * 지도에 그려진 요소들 중 선택한 요소의 데이터를 반환한다.
   *
   * 요소를 지정하지 않으면 그려진 모든 요소의 데이터를 반환한다.
   *
   * {@link http://apis.map.kakao.com/web/sample/drawingGetData drawing Library에서 데이터 얻기 샘플보기}
   */
  getData: (types?: (IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType])[]) => { [shape: string]: any }

  /**
   * 지도에 그려진 요소들 중 선택한 요소의 객체를 반환한다.
   *
   * 요소를 지정하지 않으면 그려진 모든 요소의 객체를 반환한다.
   */
  getOverlays: (types?: (IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType])[]) => { [shape: string]: any }

  /**
   * overlayType OverlayType : 그리기 관리자에 추가할 오버레이 타입
   *
   * param1 : 추가할 그리기 요소가 마커/원인 경우 LatLng를, 타원/사각형인 경우는 LatLngBounds를, 선, 화살표선, 다각형인 경우는 좌표의 배열 또는 좌표 배열의 배열을 받는다.
   *
   * param2 : 추가할 그리기 요소가 마커인경우 사용할 마커 이미지의 인덱스를, 원인 경우 원의 반지름을 파라미터로 받는다.
   */
  put: (overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType], param1: IKakaoLatLng | IKakaoLatLngBounds | IKakaoLatLng[] | IKakaoLatLng[][], param2?: number) => void;

  /** overlay : 그리기 관리자에서 생성한 확장 오버레이 객체 */
  remove: (overlay: any) => void;

  addListener(type: "select", callback: (e: { overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType] }) => void): void;
  addListener(type: "drawstart", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;
  addListener(type: "draw", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;
  addListener(type: "drawend", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;

  /** 다음 단계 그리기를 하면 발생한다. (Polyline, Polygon, Arrow 한정) */
  addListener(type: "drawnext", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;

  addListener(type: "cancel", callback: (e: { overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType] }) => void): void;
  addListener(type: "remove", callback: (e: { overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType] }) => void): void;

  /**
   * 그리기 요소들의 상태가 변경되면 발생한다.
   *
   * 각 요소의 생성/수정/이동/삭제 동작과 undo 또는 redo 함수 호출이 이에 해당한다.
   */
  addListener(type: "state_changed", callback: () => void): void;

  removeListener(type: "select", callback: (e: { overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType] }) => void): void;
  removeListener(type: "drawstart", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;
  removeListener(type: "draw", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;
  removeListener(type: "drawend", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;
  removeListener(type: "drawnext", callback: (mouseEvent: IKakaoDrawingMouseEvent) => void): void;
  removeListener(type: "cancel", callback: (e: { overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType] }) => void): void;
  removeListener(type: "remove", callback: (e: { overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType] }) => void): void;
  removeListener(type: "state_changed", callback: () => void): void;
}

export interface IKakaoDrawingMouseEvent {
  overlayType: IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType];
  coords: IKakaoCoords;
  point: IKakaoPoint;

  /** 그리기 요소의 인스턴스. drawend 이벤트에서만 존재한다. */
  target: any;
}

export type TKakaoDrawingOverayTypeValue = IKakaoDrawingOverayType[keyof IKakaoDrawingOverayType];

export interface IKakaoDrawingOverayType {
  MARKER: "marker";
  RECTANGLE: "rectangle";
  CIRCLE: "circle";
  ELLIPSE: "ellipse";
  POLYLINE: "polyline";
  POLYGON: "polygon";
  ARROW: "arrow";
}

export interface IKakaoViewpoint {
  pan: number;
  tilt: number;
  zoom: number;
  panaId: number;
}

export interface IKakaoLatLng {
  getLat: () => number;
  getLng: () => number;
  equals: (IKakaoLatLng: IKakaoLatLng) => boolean;
  toCoords: () => IKakaoCoords;
  toString: () => string;
}

export interface IKakaoLatLngBoundsConstructor {
  new(): IKakaoLatLngBounds;
  new(sw: IKakaoLatLng, ne: IKakaoLatLng): IKakaoLatLngBounds;
}

export interface IKakaoLatLngBounds {
  getSouthWest: () => IKakaoLatLng;
  getNorthEast: () => IKakaoLatLng;
  isEmpty: () => boolean;
  extend: (latlng: IKakaoLatLng) => void;
  contain: (latlng: IKakaoLatLng) => boolean;
  equals: (latlngBounds: IKakaoLatLngBounds) => boolean;
  toString: () => string;
}

export interface IKakaoCoords {
  getX: () => number;
  getY: () => number;
  equals: (coords: IKakaoCoords) => boolean;
  toLatLng: () => IKakaoLatLng;
  toString: () => string;
}

export interface IKakaoPoint {
  equals: (point: IKakaoPoint) => boolean;
  toString: () => string;
}

export interface IKakaoSize {
  equals: (size: IKakaoSize) => boolean;
  toString: () => string;
}

export interface IKakaoEvent {
  addListener<Target extends TKakaoEventTarget, Type extends TKakaoEventType<Target>, Handler extends TKakaoEventHandler<Target, Type>>(target: Target, type: Type, handler: Handler): void;
  removeListener<Target extends TKakaoEventTarget, Type extends TKakaoEventType<Target>, Handler extends TKakaoEventHandler<Target, Type>>(target: Target, type: Type, handler: Handler): void;

  trigger: (target: any, type: any, data: any) => void;
  preventMap: () => void;
}

export interface IKakaoMouseEvent {
  latLng: IKakaoLatLng;
  point: IKakaoPoint;
  coords: IKakaoCoords;
}

export type TKakaoEventTarget = IKakaoMap | IKakaoRoadview | IKakaoMarker | IKakaoPolyline | IKakaoPolygon | IKakaoCircle | IKakaoEllipse | IKakaoRectangle;

export type TKakaoEventType<Target extends TKakaoEventTarget> =
  Target extends IKakaoMap ? "zoom_start" | "zoom_changed" | "bounds_changed" | "idle" | "tilesloaded" | "maptypeid_changed" | "click" | "dbclick" | "rightclick" | "mousemove" | "dragstart" | "drag" | "dragend" :
  Target extends IKakaoRoadview ? "init" | "panoid_changed" | "viewpoint_changed" | "position_changed" :
  Target extends IKakaoMarker ? "click" | "mouseover" | "mouseout" | "rightclick" | "dragstart" | "dragend" :
  Target extends IKakaoPolyline ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" :
  Target extends IKakaoPolygon ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" :
  Target extends IKakaoCircle ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" :
  Target extends IKakaoEllipse ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" :
  Target extends IKakaoRectangle ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" : never;

export type TKakaoEventHandler<Target extends TKakaoEventTarget, Type extends TKakaoEventType<Target>> =
  Target extends IKakaoMap ?
  Type extends "zoom_start" | "zoom_changed" | "bounds_changed" | "idle" | "tilesloaded" | "maptypeid_changed" ? (() => void) :
  Type extends "click" | "rightclick" | "dbclick" | "mousemove" | "dragstart" | "drag" | "dragend" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoRoadview ?
  Type extends "init" | "panoid_changed" | "viewpoint_changed" | "position_changed" ? (() => void) : never :
  Target extends IKakaoMarker ?
  Type extends "click" | "mouseover" | "mouseout" | "dragstart" | "dragend" | "rightclick" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoPolyline ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoPolygon ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoCircle ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoEllipse ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoRectangle ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "click" ? ((e: IKakaoMouseEvent) => void) : never : never;

export interface IKakaoMapTypeControl { }

export interface IKakaoMapZoomControl { }

export interface IKakaoTilesetCopyright { }

export interface IKakaoInfoWindow {
  open: (map_or_roadview: IKakaoMap | IKakaoRoadview, marker?: IKakaoMarker) => void;
  close: () => void;
  getMap: () => IKakaoMap | IKakaoRoadview;
  setPosition: (position: IKakaoLatLng | IKakaoViewpoint) => void;
  getPosition: () => IKakaoLatLng;
  setContent: (content: HTMLElement | string) => void;
  getContent: () => HTMLElement | string;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
  setAltitude: (altitude: number) => void;
  getAltitude: () => number;
  setRange: (range: number) => void;
  getRange: () => number;
}

export interface IKakaoInfoWindowOptions {
  content?: HTMLElement | string;
  disableAutoPan?: boolean;
  map?: IKakaoMap | IKakaoRoadview;
}

export interface IKakaoCustomOverlay {
  setMap: (map_or_roadview: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setPosition: (position: IKakaoLatLng | IKakaoViewpoint) => void;
  getPosition: () => IKakaoLatLng | IKakaoViewpoint;
  setContent: (content: HTMLElement | string) => void;
  getContent: () => HTMLElement | string;
  setVisible: (visible: boolean) => void;
  getVisible: () => boolean;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
  setAltitude: (altitude: number) => void;
  getAltitude: () => number;
  setRange: (range: number) => void;
  getRange: () => number;
}

export interface IKakaoAbstractOverlay {
  draw: () => void;
  onAdd: () => void;
  onRemove: () => void;
  setMap: (map: IKakaoMap | IKakaoRoadview) => void;
  getMap: () => IKakaoMap | IKakaoRoadview;
  getPanels: () => IKakaoMapPanels;
  getProjection: () => IKakaoMapProjection;
}

export interface IKakaoCustomOverlayOptions {
  clickable?: boolean;
  content?: HTMLElement | string;
  map?: IKakaoMap | IKakaoRoadview;
  position?: IKakaoLatLng | IKakaoViewpoint;
  xAnchor?: number;
  yAnchor?: number;
  zIndex?: number;
}

export interface IKakaoMapPanels {
  overlayLayer: HTMLElement;
}

export interface IKakaoMapProjection {
  pointFromCoords: (latlng: IKakaoLatLng) => IKakaoPoint;
  coordsFromPoint: (point: IKakaoPoint) => IKakaoLatLng;
  containerPointFromCoords: (latlng: IKakaoLatLng) => IKakaoPoint;
  coordsFromContainerPoint: (point: IKakaoPoint) => IKakaoLatLng;
}

export interface IKakaoControlPosition {
  TOPLEFT: 0;
  TOP: 1;
  TOPRIGHT: 2;
  BOTTOMLEFT: 3;
  BOTTOM: 4;
  BOTTOMRIGHT: 5;
  LEFT: 6;
  RIGHT: 7;
}

export interface IKakaoBaseMapTypeId {
  ROADMAP: 1;
  SKYVIEW: 2;
  HYBRID: 3;
}

export type TKakaoBaseMapTypeIdKey = keyof IKakaoBaseMapTypeId;
export type TKakaoBaseMapTypeIdValue = IKakaoBaseMapTypeId[keyof IKakaoBaseMapTypeId];

export interface IKakaoOverayMapTypeId {
  OVERLAY: 4;
  ROADVIEW: 5;
  TRAFFIC: 6;
  TERRAIN: 7;
  BICYCLE: 8;
  BICYCLE_HYBRID: 9;
  USE_DISTRICT: 10;
}
export type TKakaoOverayMapTypeIdKey = keyof IKakaoOverayMapTypeId;
export type TKakaoOverayMapTypeIdValue = IKakaoOverayMapTypeId[keyof IKakaoOverayMapTypeId];

export interface IKakaoMapTypeId extends IKakaoBaseMapTypeId, IKakaoOverayMapTypeId { }
export type TKakaoMapTypeIdValue = IKakaoMapTypeId[keyof IKakaoMapTypeId];
export type TKakaoMapTypeIdKey = keyof IKakaoMapTypeId;

export interface IKakaoCopyrightPosition {
  BOTTOMLEFT: 0;
  BOTTOMRIGHT: 1;
}

export type TKakaoCopyrightPosition = IKakaoCopyrightPosition[keyof IKakaoCopyrightPosition];

export type TKakaoStrokeStyles = "solid" | "shortdash" | "shortdot" | "shortdashdot" | "shortdashdotdot" | "dot" | "dash" | "dashdot" | "longdash" | "longdashdot" | "longdashdotdot";

export interface IKakaoTileset { }

export interface IKakaoStaticMap {
  setCenter: (latlng: IKakaoLatLng) => void;
  getCenter: () => IKakaoLatLng;
  setLevel: (level: number, options?: { animate?: boolean | { duration?: number }, anchor?: IKakaoLatLng }) => void;
  getLevel: () => number;
  setMapTypeId: (mapTypeId: TKakaoMapTypeIdValue) => void;
  getMapTypeId: () => TKakaoMapTypeIdValue;
}

export interface IKakaoStaticMapOptions {
  center?: IKakaoLatLng;
  level?: number;
  mapTypeId?: IKakaoMapTypeId;
  marker?: { position: IKakaoLatLng, text?: string } | { position: IKakaoLatLng, text?: string }[];
}

export interface IKakaoMap {
  setCenter: (latlng: IKakaoLatLng) => void;
  getCenter: () => IKakaoLatLng;
  setLevel: (level: number, options?: { animate?: boolean | { duration?: number }, anchor?: IKakaoLatLng }) => void;
  getLevel: () => number;
  setMapTypeId: (mapTypeId: TKakaoBaseMapTypeIdValue) => void;
  getMapTypeId: () => TKakaoBaseMapTypeIdValue;
  setBounds: (bounds: IKakaoLatLngBounds, paddingTop?: number, paddingRight?: number, paddingBottom?: number, paddingLeft?: number) => void;
  getBounds: () => IKakaoLatLngBounds;
  setMinLevel: (minLevel: number) => void;
  setMaxLevel: (maxLevel: number) => void;
  panBy: (dx: number, dy: number) => void;
  panTo: (latlng_or_bounds: IKakaoLatLng | IKakaoLatLngBounds, padding?: number) => void;
  addControl: (control: Element | IKakaoMapTypeControl | IKakaoMapZoomControl, position?: IKakaoControlPosition[keyof IKakaoControlPosition]) => void;
  removeControl: (control: IKakaoMapTypeControl | IKakaoMapZoomControl) => void;
  setDraggable: (draggable: boolean) => void;
  getDraggable: () => boolean;
  setZoomable: (zoomable: boolean) => void;
  getZoomable: () => boolean;
  relayout: () => void;
  addOverlayMapTypeId: (mapTypeId: TKakaoOverayMapTypeIdValue) => void;
  removeOverlayMapTypeId: (mapTypeId: TKakaoOverayMapTypeIdValue) => void;
  setKeyboardShortcuts: (active: boolean) => void;
  getKeyboardShortcuts: () => boolean;
  setCopyrightPosition: (copyrightPosition: TKakaoCopyrightPosition, reversed?: boolean) => void;
  setCursor: (style: string) => void;
}

export interface IKakaoMapOptions {
  center: IKakaoLatLng;
  level?: number;
  mapTypeId?: TKakaoMapTypeIdValue;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClick?: boolean;
  disableDoubleClickZoom?: boolean;
  tileAnimation?: boolean;
  keyboardShortcuts?: boolean | { speed: number };
}

export interface IKakaoRoadview {
  setPanoId: (panoId: number, position: IKakaoLatLng) => void;
  getPanoId: () => number;
  setViewpoint: (viewpoint: IKakaoViewpoint) => void;
  getViewpoint: () => IKakaoViewpoint;
  getViewpointWithPanoId: () => IKakaoViewpoint;
  getPosition: () => IKakaoLatLng;
  relayout: () => void;
}

export interface IKakaoRoadviewOptions {
  panoId?: number;
  panoX?: number;
  panoY?: number;
  pan?: number;
  tilt?: number;
  zoom?: number;
}

export interface IKakaoRoadviewClient {
  getNearestPanoId: (position: IKakaoLatLng, radius: number, callback: (panoId: number | null) => void) => void;
}

export interface IKakaoRoadviewOverlay {
  setMap: (map: IKakaoMap | null) => void;
  getMap: () => IKakaoMap | null;
}

export interface IKakaoMarker {
  setMap: (map_or_roadview: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setImage: (image: IKakaoMarkerImage) => void;
  getImage: () => IKakaoMarkerImage;
  setPosition: (position: IKakaoLatLng | IKakaoViewpoint) => void;
  getPosition: () => IKakaoLatLng;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
  setVisible: (visible: boolean) => void;
  getVisible: () => boolean;
  setTitle: (title: string) => void;
  getTitle: () => string;
  setDraggable: (draggable: boolean) => void;
  getDraggable: () => boolean;
  setClickable: (clickable: boolean) => void;
  getClickable: () => boolean;
  setAltitude: (altitude: number) => void;
  getAltitude: () => number;
  setRange: (range: number) => void;
  getRange: () => number;
  setOpacity: (opacity: number) => void;
  getOpacity: () => number;
}

export interface IKakaoMarkerOptions {
  map?: IKakaoMap | IKakaoRoadview;
  position?: IKakaoLatLng | IKakaoViewpoint;
  image?: IKakaoMarkerImage;
  title?: string;
  draggable?: boolean;
  clickable?: boolean;
  zIndex?: number;
  opacity?: number;
  altitude?: number;
  range?: number;
}

export interface IKakaoMarkerImage { }

export interface IKakaoMarkerImageOptions {
  alt?: string;
  coords?: string;
  offset?: IKakaoPoint;
  shape?: string;
  spriteOrigin?: IKakaoPoint;
  spriteSize?: IKakaoSize;
}

export interface IKakaoPolyline {
  setMap: (map: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setOptions: (options: IKakaoPolylineOptions) => void;
  setPath: (path: IKakaoLatLng[] | IKakaoLatLng[][]) => void;
  getPath: () => IKakaoLatLng[] | IKakaoLatLng[][];
  getLength: () => number;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
}

export interface IKakaoPolylineOptions {
  endArrow?: boolean;
  path?: IKakaoLatLng[] | IKakaoLatLng[][];
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: TKakaoStrokeStyles;
  zIndex?: number;
}

export interface IKakaoPolygon {
  setMap: (map: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setOptions: (options: IKakaoPolygonOptions) => void;
  setPath: (path: IKakaoLatLng[] | IKakaoLatLng[][]) => void;
  getPath: () => IKakaoLatLng[] | IKakaoLatLng[][];
  getLength: () => number;
  getArea: () => number;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
}

export interface IKakaoPolygonOptions {
  fillColor?: string;
  fillOpacity?: number;
  path?: IKakaoLatLng[] | IKakaoLatLng[][];
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  zIndex?: number;
}

export interface IKakaoCircle {
  setMap: (map: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setOptions: (options: IKakaoCircleOptions) => void;
  setPosition: (position: IKakaoLatLng) => void;
  getPosition: () => IKakaoLatLng;
  setRadius: (radius: number) => void;
  getRadius: () => number;
  getBounds: () => IKakaoLatLngBounds;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
}

export interface IKakaoCircleOptions {
  center?: IKakaoLatLng;
  fillColor?: string;
  fillOpacity?: number;
  radius?: number;
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: TKakaoStrokeStyles;
  zIndex?: number;
}

export interface IKakaoEllipse {
  setMap: (map: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setOptions: (options: Partial<IKakaoEllipseOptions>) => void;
  setPosition: (position: IKakaoLatLng) => void;
  getPosition: () => IKakaoLatLng;
  setRadius: (rx: number, ry: number) => void;
  getRadius: () => { rx: number, ry: number };
  getRadiusX: () => number;
  getRadiusY: () => number;
  getBounds: () => IKakaoLatLngBounds;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
}

export interface IKakaoEllipseOptions {
  center?: IKakaoLatLng;
  rx: number;
  ry: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: TKakaoStrokeStyles;
  zIndex?: number;
}

export interface IKakaoRectangle {
  setMap: (map: IKakaoMap | IKakaoRoadview | null) => void;
  getMap: () => IKakaoMap | IKakaoRoadview | null;
  setOptions: (options: IKakaoRectangleOptions) => void;
  setBounds: (bounds: IKakaoLatLngBounds) => void
  getBounds: () => IKakaoLatLngBounds;
  setZIndex: (zIndex: number) => void;
  getZIndex: () => number;
}

export interface IKakaoRectangleOptions {
  bounds?: IKakaoLatLngBounds;
  fillColor?: string;
  fillOpacity?: number;
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: TKakaoStrokeStyles;
  zIndex?: number;
}
