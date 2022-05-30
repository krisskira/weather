import React from "react";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { Thermostat, Water, CloudSync } from "@mui/icons-material";
import { City, Season } from "../../../../application/entities";

export const PlaceInfo: React.FC<PlaceInfoProps> = ({ city, season }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h5" flex={1} marginBottom={theme.spacing()}>
        {city.description}
      </Typography>
      <Chip
        icon={<Thermostat />}
        label={season.temp + "°C"}
        variant="outlined"
      />
      <Chip
        icon={<Water />}
        label={season.humidity + "%"}
        variant="outlined"
        sx={{ marginX: theme.spacing() }}
      />
      <Chip
        icon={<CloudSync />}
        label={season.pressure + " PA"}
        variant="outlined"
      />
    </Box>
  );
};

export interface PlaceInfoProps {
  city: City;
  season: Season;
}

