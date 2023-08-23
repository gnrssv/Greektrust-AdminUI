import * as containment from "react-bootstrap";
import axios from "axios";
import {Box, List} from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import {useSnackBar} from "notistack";
import EditDialog from "./EditDialog";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import {useState,useEffect} from "react";
import EmployeeTable from "./EmployeeTable";
const linkURL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";


const Hsect = () => {
const headingWidth = 30;
const [emp,setEmp] = useState([]);
const rowOrder = 20;
const { enqueueSnackbar } = useSnackBar();
const [row,setRow] = useState([]);
const entries = [];
const [page, setPage] = useState(0);
const [check,setCheck] = useState(false);
const rows = 10;
const [srchTxt,setSrchTxt] = useState("");
const [open, setOpen] = useState(false);
let OpenFlag = true;
const [id,setId] = useState("");
const [list,setList] = useState([]);
for(let i=0; i<rowOrder;++i)
    entries.push(OpenFlag);
const getUsers = async () => {
try {
const answer = await axios.get(linkURL);
    setEmp(answer.data);
} catch (error) {
console.log("Error in getting users", error);
}
};

const deleteUser = (id) => {
const filterList = emp.filter((e) => e.id !== id);

const afilteredList = list.filter((emp) => emp.id !== id);
setEmp(filterList);
setList(afilteredList);
enqueueSnackbar("Data deleted successfully ", { variant: "success" });
};

const addSelects = (event) => {
const id = event.target.value;
let newList = [...row];
const filterList = [];
let index;
if (event.target.checked) {
newList = [...row, id];
} else {
    index = newList.indexOf(id);
    newList.splice(index, index + 1);
}
setRow(newList);
};

const deleteEntry = () => {
const newListing = emp.filter((employee) => {
return !row.includes(employee.id);
});
const newFilterList = List.filter((employee) => {
return !row.includes(employee.id);
});
setList(newFilterList);
setEmp(newListing);
setCheck(false);

if (
(row.length && newListing.length) ||
(row.length && newFilterList.length)
) {
enqueueSnackbar("Data deleted successfully ", { variant: "success" });
const left = list.length ? list.length
: emp.length;
const totals = Math.ceil(left / rows);
if (page === totals - 1 && totals > 1) {
setPage(--page);
}

} else {
enqueueSnackbar("No data selected to delete ", { variant: "warning" });
}
};

const checkHeader = (event) => {
let updatedItems = [...row];
const data = [...currentRow];
if (event.target.checked) {
updatedItems = data.map((employee) => employee.id);
setCheck(true);
} else {
setCheck(false);
updatedItems = [];
}
setRow(updatedItems);
};

const checkEdit = (id) => {
setOpen(true);
setId(id);
};

const checkClose = () => {
setOpen(false);
};

useEffect(() => {
getUsers();
}, []);

let begin = rows;
const last = (page + 1) * rows;
begin = last - rows;

const currentRow = list.length
? list.slice(begin, last)
: emp.slice(begin, last);

return (
<Box className="parent">
<Header />
<containment.Container>
<SearchBar
employees={emp}
searchtext={srchTxt}
setSearchText={setSrchTxt}
setFilteredList={setList}
/>
<EmployeeTable
isChecked={check}
handleDelete={deleteUser}
handleEdit={checkEdit}
handleHeaderCheckBox={checkHeader}
currentPageRows={currentRow}
selectedRows={row}
addToSelectedRows={addSelects}
/>
{open ? (
<EditDialog
open={open}
handleClose={checkClose}
id={id}
employees={emp}
setEmployees={setEmp}
filteredList={list}
setFilteredList={setList}
/>
) : null}
<Footer
page={page}
setPage={setPage}
filteredList={list}
rowsPerPage={rows}
employees={emp}
deleteSelected={deleteEntry}
/>
</containment.Container>
</Box>
);
};

export default Hsect;
