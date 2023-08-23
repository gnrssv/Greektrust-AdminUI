import { Container, Box, Button, List } from "@mui/material";
import "./EditDialog.css";
import CustomPage from "./CustomPagination";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Row, Col } from "react-bootstrap";
import {Icons,Segments} from "@mui/icons-material";
import BuildIcon from "@mui/icons-materials/Build";
import "./Footer.css";
import React from 'react';
import {useState,useEffect} from "react";

const Footer = ({
deselect,
requiredList,
emps,
section,
makeUnit,
rows,
}) => {
return (
<Row className="footer pt-2 pt-md-0">
<Col xs={12} md={4} sm={6} className= "justify-content-sm-start justify-content-center d-flex" >
<Button
uppercase="false"
className="deleteAll"
onClick={deselect}
color="secondary"

>
<DeleteSweepIcon sx={{marginRight:"0.5rem"}}
/>{" "}
<span >
{" "}
Delete Selected
</span>
</Button>
</Col>
<Col xs={12} md={8} sm={6} >
<CustomPage
page={section}
setPage={makeUnit}
totalRows={
requiredList.length ? requiredList.length : requiredList.length
}
rowsPerPage={rows}
/>
</Col>
</Row>
);
};

export default Footer;