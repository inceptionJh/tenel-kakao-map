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
  MapTypeId: IKakaoMapTypeId;
  ControlPosition: IKakaoControlPosition;
  CopyrightPosition: IKakaoCopyrightPosition;
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
  addListener<Target extends TKakaoEventTarget, Type = TKakaoEventType<Target>, Handler = TKakaoEventHandler<Target, TKakaoEventType<Target>>>(target: Target, type: Type, handler: Handler): void;
  removeListener<Target extends TKakaoEventTarget, Type = TKakaoEventType<Target>, Handler = TKakaoEventHandler<Target, TKakaoEventType<Target>>>(target: Target, type: Type, handler: Handler): void;

  trigger: (target: any, type: any, data: any) => void;
  preventMap: () => void;
}

export interface IKakaoMouseEvent {
  latLng: IKakaoLatLng;
  point: IKakaoPoint;
}

export type TKakaoEventTarget = IKakaoMap | IKakaoRoadview | IKakaoMarker | IKakaoPolyline | IKakaoPolygon | IKakaoCircle | IKakaoEllipse | IKakaoRectangle;

export type TKakaoEventType<Target extends TKakaoEventTarget> =
  Target extends IKakaoMap ? "zoom_start" | "zoom_changed" | "bounds_changed" | "idle" | "tilesloaded" | "maptypeid_changed" | "click" | "dblclick" | "rightclick" | "mousemove" | "dragstart" | "drag" | "dragend" :
  Target extends IKakaoRoadview ? "init" | "panoid_changed" | "viewpoint_changed" | "position_changed" :
  Target extends IKakaoMarker ? "click" | "mouseover" | "mouseout" | "rightclick" | "dragstart" | "dragend" :
  Target extends IKakaoPolyline ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" :
  Target extends IKakaoPolygon ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" :
  Target extends IKakaoCircle ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" :
  Target extends IKakaoEllipse ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" :
  Target extends IKakaoRectangle ? "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" : never;

export type TKakaoEventHandler<Target extends TKakaoEventTarget, Type extends TKakaoEventType<Target>> =
  Target extends IKakaoMap ?
  Type extends "zoom_start" | "zoom_changed" | "bounds_changed" | "idle" | "tilesloaded" | "maptypeid_changed" ? (() => void) :
  Type extends "click" | "dblclick" | "rightclick" | "mousemove" | "dragstart" | "drag" | "dragend" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoRoadview ?
  Type extends "init" | "panoid_changed" | "viewpoint_changed" | "position_changed" ? (() => void) : never :
  Target extends IKakaoMarker ?
  Type extends "click" | "mouseover" | "mouseout" | "rightclick" | "dragstart" | "dragend" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoPolyline ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoPolygon ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoCircle ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoEllipse ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" ? ((e: IKakaoMouseEvent) => void) : never :
  Target extends IKakaoRectangle ?
  Type extends "mouseover" | "mouseout" | "mousemove" | "mousedown" | "mouseclick" ? ((e: IKakaoMouseEvent) => void) : never : never;

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

export interface IKakaoMapTypeId {
  ROADMAP: 1;
  NORMAL: 1;
  SKYVIEW: 2;
  HYBRID: 3;
  OVERLAY: 4;
  ROADVIEW: 5;
  TRAFFIC: 6;
  TERRAIN: 7;
  BICYCLE: 8;
  BICYCLE_HYBRID: 9;
  USE_DISTRICT: 10;
}

export type TKakaoMapTypeId = IKakaoMapTypeId[keyof IKakaoMapTypeId];

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
  setMapTypeId: (mapTypeId: TKakaoMapTypeId) => void;
  getMapTypeId: () => TKakaoMapTypeId;
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
  setMapTypeId: (mapTypeId: TKakaoMapTypeId) => void;
  getMapTypeId: () => TKakaoMapTypeId;
  setBounds: (bounds: IKakaoLatLngBounds, paddingTop?: number, paddingRight?: number, paddingBottom?: number, paddingLeft?: number) => void;
  getBounds: () => IKakaoLatLngBounds;
  setMinLevel: (minLevel: number) => void;
  setMaxLevel: (maxLevel: number) => void;
  panBy: (dx: number, dy: number) => void;
  panTo: (latlng_or_bounds: IKakaoLatLng | IKakaoLatLngBounds, padding?: number) => void;
  addControl: (control: IKakaoMapTypeControl | IKakaoMapZoomControl, position?: IKakaoControlPosition[keyof IKakaoControlPosition]) => void;
  removeControl: (control: IKakaoMapTypeControl | IKakaoMapZoomControl) => void;
  setDraggable: (draggable: boolean) => void;
  getDraggable: () => boolean;
  setZoomable: (zoomable: boolean) => void;
  getZoomable: () => boolean;
  relayout: () => void;
  addOverlayMapTypeId: (mapTypeId: TKakaoMapTypeId) => void;
  removeOverlayMapTypeId: (mapTypeId: TKakaoMapTypeId) => void;
  setKeyboardShortcuts: (active: boolean) => void;
  getKeyboardShortcuts: () => boolean;
  setCopyrightPosition: (copyrightPosition: TKakaoCopyrightPosition, reversed?: boolean) => void;
  setCursor: (style: string) => void;
}

export interface IKakaoMapOptions {
  center: IKakaoLatLng;
  level?: number;
  mapTypeId?: TKakaoMapTypeId;
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
  setOptions: (options: IKakaoEllipseOptions) => void;
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
