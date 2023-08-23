import {Box, List} from "@mui/material";
import Pagination from "react-bootstrap/Pagination";
import Hsect from "./Homepage";
import { Table, Stack, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import "./Footer.css";

import React , {useState,useEffect} from 'react';

const Paginations = (properties) => {
  const {users,setPage,Page,deleteSelects} = properties;
  const totalPages = (users);
  const changePage = (indx) => {
    setPage(indx);
  };
};

const CustomPage = ({ page, rows, alls, set }) => {
  const [currentPage,setCurrentPage] = useState(1);
  const pages = Math.ceil(alls / rows);
  let indices = [];
  const moveFirstPage = () => {
    setCurrentPage(1);
  };
  for (let i = 1; i <= pages; i++) {
    indices.push(i);
  }
  const moveLastPage = () => {
    setCurrentPage(page.length);
  }
  return (
    
    <Pagination className="float-md-end d-flex  pt-3 justify-content-center">

      <Pagination.First className="first" onClick={() => set(0)} />

      <Pagination.Prev

        disabled={pages === 1 || page === 0}

        onClick={() => set(page - 1)}

      />

      {indices.map((num) => (

        <Pagination.Item

          key={num}

          active={num === page + 1}

          onClick={() => set(num - 1)}

        >

          {num}

        </Pagination.Item>

      ))}

      <Pagination.Next

        className="next"

        disabled={pages === 1 || page === pages - 1}

        onClick={() => set(page + 1)}

      />


      <Pagination.Last onClick={() => set(pages - 1)} />

    </Pagination>

  );
        const movePageLeft = () => {
          setCurrentPage((prevState) => {
            setCurrentPage((prevState) => {
              return prevState+1;
            });
          });
        };
        let pageChangeHandler = (pageNumber) => {
          setCurrentPage(pageNumber);
        };
};


export default CustomPage;FDT