import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import usePlacesAutocompleteService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import {
  GooglePlaceAutoCompleteProps,
  GooglePlaceResponse,
} from "./autocomplete.interfaces";

export const GooglePlaceAutoComplete: React.FC<GooglePlaceAutoCompleteProps> = (
  props = {}
) => {
  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesAutocompleteService({
      apiKey: import.meta.env.VITE_GOOGLE_PLACES_API,
      options: {
        types: ["(cities)"],
      },
      debounce: 300,
    });

  const [suggestPlaces, setSuggetPlaces] = React.useState<
    GooglePlaceResponse.Place[]
  >([]);
  const [placeSelected, setPlaceSelected] =
    React.useState<GooglePlaceResponse.PlaceDetails | null>(null);

  React.useEffect(() => {
    if (placePredictions.length <= 0 && suggestPlaces.length === 0) return;
    setSuggetPlaces(placePredictions ?? []);
  }, [placePredictions]);

  React.useEffect(() => {
    if (!placeSelected) return;
    props.onSelect?.({
      description: placeSelected.formatted_address ?? placeSelected.name,
      lat: placeSelected.geometry?.location?.lat() ?? 0,
      lng: placeSelected.geometry?.location?.lng() ?? 0,
    });
  }, [placeSelected]);

  function onChoisePlace(place: GooglePlaceResponse.Place | null) {
    if (place === null) {
      setPlaceSelected(null);
      return;
    }
    placesService?.getDetails({ placeId: place.place_id }, setPlaceSelected);
  }

  return (
    <Autocomplete
      disablePortal
      options={suggestPlaces}
      getOptionLabel={(option) => option.description}
      fullWidth
      onChange={(_, value) => onChoisePlace(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => getPlacePredictions({ input: e.target.value })}
          label="City"
        />
      )}
    />
  );
};
