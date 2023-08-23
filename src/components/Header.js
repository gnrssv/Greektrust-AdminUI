import {Icons,Segments} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import "./Home.css";
import React from 'react';
import "./Header.css";
import {Homebar} from "./Homepage.js";

const Header = () => {
return (
<Box className="headline">
<Typography variant="h5" className="headings">
[ Employee Table ]
</Typography>
</Box>
);
};

export default Header;