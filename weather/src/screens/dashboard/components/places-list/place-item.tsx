import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import React from "react";
import { ListChildComponentProps } from "react-window";
import { City } from "../../../../application/entities";
import { Season } from "../../../../application/entities/seasons";
import { Close, Thermostat } from "@mui/icons-material";
import { TemperatureAlarmModal } from "../temperature-alarm-modal";

export const PalceListItem: React.FC<
  ListChildComponentProps<{ city: City; season: Season; alarm?: number }[]>
> = (props) => {
  const theme = useTheme();
  const { index, style, data } = props;
  const [open, setOpen] = React.useState(false);

  const onShowModal = () => setOpen(true);

  const onCloseModal = () => {
    setOpen(false);
  };
  const onSaveAlertValue = (value?: number) => {
    setOpen(false);
    /** @todo save from here the alarm to favorite place, maybe you need the user or the favorite id or an owner, or the user on session */
    console.log(">>> Save the alert to this favorite place.");
  };
  const onDelete = () => {
    /** @todo delete from here the favorite place, maybe you need the user or the favorite id or an owner, or the user on session */
    console.log(">>> Delete this favorite place.");
  };
  const getTemperatureAlarmText = () => {
    /**  @todo draw the alarm from the favorite place, change de colors, also It need show from up or down the temperature seted */
    return (
      (data[index].alarm !== null &&
        data[index].alarm !== undefined &&
        ` - Alarm: ${data[index].alarm}°C`) ||
      ""
    );
  };
  return (
    <ListItem divider dense style={style} key={index}>
      <ListItemButton onClick={onShowModal}>
        <ListItemText
          primary={data[index].city.description}
          secondary={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Thermostat />
              {`${data[index].season.temp}°C ${getTemperatureAlarmText()}`}
            </Box>
          }
        />
      </ListItemButton>
      <TemperatureAlarmModal
        onSave={onSaveAlertValue}
        open={open}
        onClose={onCloseModal}
      />
      <IconButton onClick={onDelete}>
        <Close />
      </IconButton>
    </ListItem>
  );
};
