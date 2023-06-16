import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  styled,
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import logo from "../../assets/logotype.png";

const Tiktok = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const [fileType, setFileType] = useState("mp3");

  const handleFileTypeSelect = (event) => {
    setFileType(event.target.value);
  };

  const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor",
  })((p) => ({
    "& .MuiInputBase-input": {
      color: "#ffffff",
      height: "1.5rem",
      padding: "1rem",
    },
    // input label when focused
    "& label.Mui-focused": {
      color: p.focusColor,
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: p.focusColor,
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: p.focusColor,
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor,
      },
    },
  }));

  const CssFormControl = styled(FormControl, {
    shouldForwardProp: (prop) => prop !== "focusColor",
  })(({ focusColor }) => ({
    // Remove underline for variant='standard'
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    // Remove underline for variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
    // Remove underline for variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: focusColor,
      },
      "&:hover fieldset": {
        borderColor: focusColor,
      },
      "& fieldset": {
        borderColor: "transparent", // Or use the color you prefer here
      },
    },
    "& label.Mui-focused": {
      color: focusColor,
    },
  }));

  return (
    <Box>
      <Box
        color="#ffffff"
        p="2rem"
        m="3rem auto"
        id="input-submit"
        width={isNonMobileScreen ? "60%" : "93%"}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            component="img"
            mt="1rem"
            alignItems="center"
            sx={{
              height: "100%",
              width: "100%",
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="mediahook"
            src={logo}
          />
        </Box>
        <Box mt="4rem">
          <Navbar />
        </Box>
        <Box mt="6rem" display="flex" justifyContent="space-between">
          <Typography sx={{ opacity: "40%", mt: "1.5rem" }}>
            paste tiktok url below
          </Typography>
          <CssFormControl
            focusColor="#6121B5"
            variant="standard"
            sx={{ mb: "1rem" }}
          >
            <InputLabel
              id="file-type-label"
              sx={{ color: "#ffffff" }}
            ></InputLabel>
            <Select
              labelId="file-type-label"
              id="file-type-select"
              value={fileType}
              onChange={handleFileTypeSelect}
              label="file type"
              sx={{
                color: "#ffffff",
              }}
            >
              <MenuItem value={"mp3"}>mp3</MenuItem>
              <MenuItem value={"mp4"}>mp4</MenuItem>
            </Select>
          </CssFormControl>
        </Box>
        <CssTextField
          focusColor="#6121B5"
          size="small"
          id="url-input"
          variant="filled"
          placeholder="https://www.tiktok.com/@levyrozman/video/7241238602649177387"
          fullWidth
          sx={{
            color: "#ffffff",
          }}
        />
        <Box mt="1rem" textAlign="right">
          <Button
            disableElevation
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#6121B5",
              p: "0.75rem 1.5rem 0.75rem 1.5rem",
              "&:hover": { backgroundColor: "#7F43CE" },
            }}
          >
            Convert
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Tiktok;
