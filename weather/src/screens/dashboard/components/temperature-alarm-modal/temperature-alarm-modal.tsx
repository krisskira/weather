import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const TemperatureAlarmModal: React.FC<TemperatureAlarmModalProps> = (
  props
) => {
  const [temperature, setTemperature] = React.useState(props.initialValue);

  const onSaveTemperature = () => {
    props.onSave(temperature);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temperature =
      event.target.value === "" ? undefined : parseInt(event.target.value);
    setTemperature(temperature);
  };

  return (
    <Modal open={props.open} onClose={() => props.onClose()}>
      <Box sx={style}>
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "right",
            display: "flex",
          }}
        >
          <IconButton sx={{ marginRight: -2 }} onClick={() => props.onClose()}>
            <Close />
          </IconButton>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Setting Temperature Alarm
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Please enter the temperature you want to set as an alarm.
        </Typography>
        <TextField
          sx={{ mt: 2, input: { textAlign: "center" } }}
          InputProps={{ inputProps: { min: -50, max: 100 } }}
          onChange={onChangeText}
          defaultValue={
            props.initialValue === undefined ? "" : props.initialValue
          }
          value={temperature}
          label="Alarm temperature"
          placeholder="0"
          size="small"
          type="number"
          fullWidth
        />
        <Box sx={{ mt: 2 }}>
          <Button fullWidth variant="contained" onClick={onSaveTemperature}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export interface TemperatureAlarmModalProps {
  open: boolean;
  initialValue?: number;
  onClose: () => void;
  onSave: (value?: number) => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  paddingTop: 1,
};
