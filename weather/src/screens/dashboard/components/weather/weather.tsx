import React from "react";
import {
  Button,
  Chip,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Thermostat, Water, CloudSync } from "@mui/icons-material";
import { Box } from "@mui/system";
import { City } from "../../../../application/entities";
import { Season } from "../../../../application/entities/seasons";
import { PlaceInfo } from "../place-info";

export const Weather: React.FC<WeatherProps> = ({ city, season }) => {
  const theme = useTheme();
  const onAddToFavoriteClick = () => {
    /** @todo add to favorite */
    console.log(">>> Add to favorite", { city, season });
  };
  return (
    <Paper
      variant="outlined"
      sx={{ padding: theme.spacing(), marginTop: theme.spacing() }}
    >
      <PlaceInfo city={city} season={season} />
      <Divider sx={{ marginY: theme.spacing() }}></Divider>
      <Box sx={{ flexDirection: "row-reverse", display: "flex" }}>
        <Button variant="text">Add to your favorites</Button>
      </Box>
    </Paper>
  );
};

export interface WeatherProps {
  city: City;
  season: Season;
}
