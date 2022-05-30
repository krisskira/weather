import { City } from "../../../../application/entities";

export interface GooglePlaceAutoCompleteProps {
  onSelect?: (place: City) => void;
}

export declare module GooglePlaceResponse {
  export interface Place {
    description: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: string[];
  }

  export interface PlaceDetails {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    geometry: Geometry;
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    photos: Photo[];
    place_id: string;
    reference: string;
    types: string[];
    url: string;
    utc_offset: number;
    vicinity: string;
    website: string;
    html_attributions: any[];
    utc_offset_minutes: number;
  }

  export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  export interface Location {
    lat: () => number;
    lng: () => number;
  }

  export interface Viewport {
    south: number;
    west: number;
    north: number;
    east: number;
  }

  export interface Geometry {
    location: Location;
    viewport: Viewport;
  }

  export interface Photo {
    height: number;
    html_attributions: string[];
    width: number;
  }
  export interface MatchedSubstring {
    length: number;
    offset: number;
  }

  export interface StructuredFormatting {
    main_text: string;
    main_text_matched_substrings: MatchedSubstring[];
    secondary_text: string;
  }

  export interface Term {
    offset: number;
    value: string;
  }
}
