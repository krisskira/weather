import {
  AppBar,
  Box,
  Container,
  Paper,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { City } from "../../application/entities";
import { useWeatherApi } from "../../application/hooks";
import { GooglePlaceAutoComplete } from "./components/autocomplete-place";
import { Weather } from "./components/weather";
import { main, name } from "../../application/data/weather.data.json";
import { Season } from "../../application/entities/seasons";
import { FavoriteCitiesList } from "./components/places-list";
export const DashboardScreen: React.FC = () => {
  const theme = useTheme();
  const [placeSelected, setPlaceSelected] = React.useState<City | null>(null);

  /**
   * @todo Active this
   */
  // const [
  //   [{ city = undefined, season = undefined } = {}] = [],
  //   { isLoading, getWheaters },
  // ] = useWeatherApi([]);

  /**
   * @todo remove this, just for test
   */
  const city: City = {
    description: "Paris, France",
    lat: 48.8566,
    lng: 2.3522,
  };

  /**
   * @todo remove this, just for test
   */
  const season: Season = {
    ...main,
  };

  useEffect(() => {
    /**
     * @todo Active this
     */
    // if (placeSelected) getWheaters([placeSelected]);
  }, [placeSelected]);

  useEffect(() => {
    /** @todo get the favorite places from the user */
    console.log(">>> Get the favorite places from the user");
    const intervalRef = setInterval(() => {
      /** @todo  update temperatures */
      console.log(">>> Get the favorite places to update temperatures");
    }, 5000);
    return () => clearInterval(intervalRef);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingY: `calc(${theme.mixins.toolbar.minHeight}px + 20px)`,
      }}
    >
      <AppBar>
        <Toolbar>
          <Typography variant="h6">WEATHER SEASON</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%" }}>
        <Paper
          elevation={3}
          sx={{
            padding: theme.spacing(),
            marginX: "auto",
            marginBottom: theme.spacing(2),
            width: 400,
          }}
        >
          <GooglePlaceAutoComplete onSelect={setPlaceSelected} />
          {!city && !season && (
            <Typography variant="h5" marginTop={1}>
              You need choise a city
            </Typography>
          )}
          {!!city && !!season && <Weather city={city} season={season} />}
        </Paper>
        <FavoriteCitiesList />
      </Box>
    </Container>
  );
};
