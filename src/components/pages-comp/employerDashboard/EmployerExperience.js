import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Portal,
  TextareaAutosize,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CountrySelect from "../../forms/CountrySelect";
import YearMonthPicker from "../../forms/MonthPicker";
import PositionLevelSelect from "../../forms/PositionLevelSelect";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import AddJob from "./addJob";
import Addjob from "./addJob";
const EmployerExperience = () => {
  //Checkbox Present
  const [checkedPresent, setcheckedPresent] = React.useState(false);
  const handleChangePresent = (event) => {
    setcheckedPresent(event.target.checked);
  };

  //Show Add Experience Form
  const [showForm, setShowForm] = React.useState(false);
  const formContainer = React.useRef(null);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    <Addjob/>
    </>
  );
};

export default EmployerExperience;
