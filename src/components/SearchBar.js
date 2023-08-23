import * as homer from "./Homepage";
import "./Home.css";
import React from 'react';
import {Accordion,Input,Card} from '@mui/material';
import { lime } from "@mui/material/colors";


const customs = {
".MuiInput-inputSizeMedium":{
    width : 100,
    textIndent : '17px',
    fontSize : '20px',
    borderRadius : '3px',
},
margin:"1rem",
alignSelf:"center",
padding:"0.8rem",
width:"50%",
".MuiInput-formControl":
{
  color : "#1a237e"
},
".MuiInput-input":
{
color: "#FFFFFF" ,
textAlign:"center",
}
}

const SearchBar = ({
srchText,
setSearchText,
emp,
setList,
}) => {
const checkSearch = (event) => {
const value = event.target.value;
setSearchText(value);
if (srchText) {
const line = srchText.toLowerCase();
const list = emp.filter((emp) => {
return (
emp.role.toLowerCase().includes(line) ||
emp.email.toLowerCase().includes(line) ||
emp.name.toLowerCase().includes(line)
);
});
setList(list);
} else {
setList(emp);
}
};

return (
<Input
onChange={checkSearch}
className="searchbox"
multiline
sx={customs}
color="primary"
placeholder="Search by name , email or role"
value={srchText}
/>
);
};

export default SearchBar;