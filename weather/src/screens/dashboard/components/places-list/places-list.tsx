import * as React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList } from "react-window";
import { PalceListItem } from "./place-item";
import { Paper, useTheme } from "@mui/material";
import { City, Season } from "../../../../application/entities";
type dataTypev = {
  city: City;
  season: Season;
}[];

export const FavoriteCitiesList: React.FC = () => {
    const theme = useTheme();
  const data: dataTypev = new Array(10).fill({
    city: {
      description: "Paris, France",
      lat: 48.8566,
      lng: 2.3522,
    },
    season: {
      feels_like: 10.44,
      humidity: 87,
      pressure: 1012,
      temp: 10.44,
      temp_max: 10.44,
      temp_min: 10.44,
    },
    alarm:7
  });

  return (
    <Paper sx={{ padding: theme.spacing() }}>
      <FixedSizeList
        height={400}
        width="100%"
        itemSize={80}
        overscanCount={5}
        itemCount={data.length}
        itemData={data}
      >
        {PalceListItem}
      </FixedSizeList>
    </Paper>
  );
};
