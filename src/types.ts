import { ImageProps } from "react-native";

type ImageFormat = "png" | "gif" | "jpg";
type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";

export interface GoogleStaticMapNextProps extends Omit<ImageProps, "source"> {
  location: {
    latitude: string;
    longitude: string;
  };
  size: {
    width: number;
    height: number;
  };
  zoom?: number;
  scale?: number;
  format?: ImageFormat;
  mapType?: MapType;
  apiKey: string;
  hasCenterMarker?: boolean;
  customMarkerUrl?: string;
}