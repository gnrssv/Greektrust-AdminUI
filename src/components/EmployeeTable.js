import React, { useReducer }  from 'react';
import {Container, Table, Stack, Form , PageItem } from "react-bootstrap";
import {  Accordion,TextField , Button,Card,Input,Box, Typography } from "@mui/material";
import "./EmployeeTable.css";
import "./EditDialog.css";

const SegmentBar = ({

  flag,
  checkHeader,
  pageCounts,
  rowSelected,
  addSelected,
  checkDelete,
  checkEdit,

}) => {

  return (
    <>
    <Table
      striped
      bordered
      hover
      responsive
      className="table"
      bsPrefix="table"
    >

      <thead className="thead">
        <tr key={0} id={0}>
          <th >
            <Form.Check
              type="checkbox"
              checked={flag}
              className="checkbox"
              onChange={checkHeader}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {pageCounts.map((user) => {
          return (
            <>
           <tr key = {user.id}>
              <td>
                <Form.Check
                  type="checkbox"
                  value={useReducer.id}
                  checked={rowSelected.includes(user.id)}
                  onChange={(event) => addSelected(event)}
                  className="checkbox"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Stack direction="horizontal" className="actions">
                  <Button
                    variant="link"
                    size="md"
                    onClick={() => checkEdit(user.id)}
                  >
                    <i className="bi bi-pencil-square text-primary"></i>
                  </Button>
                  <Button
                    variant="link"
                    size="md"
                    onClick={() => checkDelete(user.id)}
                  >
                    <i className="bi bi-trash text-danger"></i>
                  </Button>
                </Stack>
              </td>
            </tr>
            </>
          );  
        })}
      </tbody>
    </Table>
    </>
  );
};

export default SegmentBar;