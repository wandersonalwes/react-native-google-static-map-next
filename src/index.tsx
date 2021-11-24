import React from "react";
import { Image } from "react-native";
import { GoogleStaticMapNextProps } from "./types";

export const GoogleStaticMapNext = ({
  location,
  size,
  zoom = 15,
  scale = 1,
  format = "png",
  mapType = "roadmap",
  apiKey,
  hasCenterMarker = true,
  customMarkerUrl,
  ...rest
}: GoogleStaticMapNextProps) => {
  const handleCenterMarker = () => {
    if (hasCenterMarker && !customMarkerUrl) {
      return `&markers=color:red%7Clabel:%7C${location.latitude},${location.longitude}`;
    } else {
      return "";
    }
  };

  const handleCustomMarker = () => {
    if (hasCenterMarker && customMarkerUrl) {
      return `&markers=icon:${customMarkerUrl}%7C${location.latitude},${location.longitude}`;
    } else {
      return "";
    }
  };

  const BASE_URL = "https://maps.googleapis.com/maps/api/staticmap";
  const uri = `${BASE_URL}?center=${location.latitude},${
    location.longitude
  }&zoom=${zoom}&scale=${scale}&size=${size.width}x${
    size.height
  }&maptype=${mapType}&key=${apiKey}&format=${format}&visual_refresh=true${handleCenterMarker()}${handleCustomMarker()}`;

  return <Image source={{ uri }} {...rest} />;
};
