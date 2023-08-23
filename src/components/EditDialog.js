import {Icons,Segments} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import BuildIcon from "@mui/icons-materials/Build";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./Home.css";
import "./EditDialog.css";
import DialogTitle from "@mui/material/DialogTitle";
import { Accordion,TextField, Stack, Button,Card,Input } from "@mui/material";
import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import React from 'react';

const CustomInput = ({ label, id, type, name, classes, onChangeHandler, value, error }) => {
    return (
    <div className={`form-group ${classes}`}>
    <label htmlFor={id}>{label} : </label>
    <input
    type={type}
    value={value}
    name={name}
    onChange={onChangeHandler}
    className='form-control'
    id={id}
    />
    {
    error.length > 0 &&
    <div id='msg'>
    
    <span>
    <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
    </span>
    
    <span>
    {error}
    </span>
    
    </div>
    }
    
    </div>
    
    )
    }

const ActionDialog = ( {index, flag, checkClose , agents, setAgent, newList, setList}) => {
    const person = agents.find((element) => element.index === index);
    const {enqueueSnackBar} = useSnackbar();

    const [entryData,setEntry] = useState({
        id : person.id,
        name : person.name,
        email : person.email,
        role : person.role,
    });

    const checkData = (name,email,role) => {
        var regexp = /^[a-zA-Z]{2,30}$/;
        var mailregex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        var kind = ["admin","member"];

        if(!regexp.test(name)){
            enqueueSnackBar(
                "Please enter name with only characters with length between 2-30",
                {variant : "warning"}
            );
            return false;
        }
        if(!mailregex.test(email)){
            enqueueSnackBar("Please enter a valid email",{variant : "warning"});
            return false;
        }
        if(!kind.includes(role)){
            enqueueSnackBar("Role should be member or admin",{variant : "warning"});
            return false;
        }
        return true;
    };


    const saveEdit = () => {
        if(checkData(entryData.name,entryData.email,entryData.role)){
            const employeeList = agents.map( (agent) => {
                if(agent.index === index){
                    agent = {...entryData};
                }
                return agent;
            });
            const filteredData = newList.map( (agent) => {
                if(agent.index === index){
                    agent = {...entryData};
                }
                return agent;
            });
            setAgent(employeeList);
            setList(filteredData);
            enqueueSnackBar("Data saved successfully", {variant : "success"});
            checkClose();
        }
    };

    const returnValue = (event) => {
        let {name,value} = event.target;
        console.log("New value : "+value);
        if(value.trim().length === 0){
            value = entryData[name];
        }
        setEntry( (values) => {
            return {
                ...values,
                [name] : value.trim(),
            };
        } );
    };

    return (
       <Dialog open={flag} onClose = {checkClose} >
        <DialogTitle className = "dialogtitle">Edit Employee Data</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                type="text"
                name="name"
                fullWidth
                onChange={returnValue}
                variant = "standard"
                placeholder = {person.name}
            ></TextField>
            <TextField
                autoFocus
                margin = "dense"
                type = "text"
                name = "email"
                fullWidth
                onChange = {returnValue}
                variant = "standard"
                placeholder = {person.email}>
            </TextField>

            <TextField
                autoFocus
                margin = "dense"
                type="text"
                name = "role"
                fullWidth 
                onChange = {returnValue}
                variant = "standard"
                placeholder = {person.role}
            ></TextField>

            <Stack direction = "row" className="dialogButtons">
                <Button variant="contained" onClick = {saveEdit}>Save</Button>
                <Button variant="contained" onClick = {checkClose}>Cancel</Button>
            </Stack>
        </DialogContent>
    </Dialog>
    );
    };

    export default ActionDialog;

        