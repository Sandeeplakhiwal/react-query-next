"use client";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

function index() {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isError, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  return (
    <div>
      <button
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Prev Page
      </button>
      <button
        onClick={() => setPageNumber((page) => page++)}
        disabled={pageNumber === 4}
      >
        Next Page
      </button>
    </div>
  );
}

export default index;
