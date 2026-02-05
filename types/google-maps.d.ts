interface Window {
  google: any;
  googleMapsLoaded: boolean;
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
      setCenter(latLng: LatLng | LatLngLiteral): void;
      setZoom(zoom: number): void;
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeId?: string;
      styles?: MapTypeStyle[];
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    class LatLng {
      constructor(lat: number, lng: number);
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      setMap(map: Map | null): void;
      addListener(eventName: string, handler: Function): void;
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      icon?: string | Icon | Symbol;
      animation?: Animation;
    }

    interface Icon {
      url?: string;
      scaledSize?: Size;
    }

    interface Symbol {
      path?: SymbolPath;
      scale?: number;
      fillColor?: string;
      fillOpacity?: number;
      strokeColor?: string;
      strokeWeight?: number;
    }

    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      setContent(content: string | Node): void;
      open(map?: Map, anchor?: MVCObject): void;
    }

    interface InfoWindowOptions {
      content?: string | Node;
      position?: LatLng | LatLngLiteral;
    }

    class DirectionsService {
      route(request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void): void;
    }

    class DirectionsRenderer {
      constructor(opts?: DirectionsRendererOptions);
      setMap(map: Map | null): void;
      setDirections(directions: DirectionsResult): void;
    }

    interface DirectionsRendererOptions {
      map?: Map;
      suppressMarkers?: boolean;
      polylineOptions?: PolylineOptions;
    }

    interface DirectionsRequest {
      origin: LatLng | LatLngLiteral | string;
      destination: LatLng | LatLngLiteral | string;
      travelMode: TravelMode;
    }

    interface DirectionsResult {
      routes: Route[];
    }

    interface Route {
      legs: Leg[];
    }

    interface Leg {
      duration: Duration;
    }

    interface Duration {
      text: string;
      value: number;
    }

    interface PolylineOptions {
      strokeColor?: string;
      strokeWeight?: number;
      strokeOpacity?: number;
    }

    class MVCObject {}

    enum TravelMode {
      DRIVING = 'DRIVING',
      WALKING = 'WALKING',
      BICYCLING = 'BICYCLING',
      TRANSIT = 'TRANSIT'
    }

    enum DirectionsStatus {
      OK = 'OK',
      NOT_FOUND = 'NOT_FOUND',
      ZERO_RESULTS = 'ZERO_RESULTS',
      MAX_WAYPOINTS_EXCEEDED = 'MAX_WAYPOINTS_EXCEEDED',
      INVALID_REQUEST = 'INVALID_REQUEST',
      OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
      REQUEST_DENIED = 'REQUEST_DENIED',
      UNKNOWN_ERROR = 'UNKNOWN_ERROR'
    }

    enum Animation {
      DROP = 2,
      BOUNCE = 1
    }

    enum SymbolPath {
      CIRCLE = 0,
      BACKWARD_CLOSED_ARROW = 1,
      FORWARD_CLOSED_ARROW = 2,
      BACKWARD_OPEN_ARROW = 3,
      FORWARD_OPEN_ARROW = 4
    }

    class Size {
      constructor(width: number, height: number, widthUnit?: string, heightUnit?: string);
    }

    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: {}[];
    }
  }
}