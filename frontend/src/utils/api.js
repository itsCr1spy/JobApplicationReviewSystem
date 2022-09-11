import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import AddCandidate from "../views/AddCandidate";
import CreateCard from "./CreateCard";

const FetchCandidates = () => {
  const [candidataeList, setCandidateList] = useState([]);
  const [ans, setAns] = useState("no");

  const fetchCandidates = () => {
    axios.get("http://127.0.0.1:8000/api/candidate-list/").then((response) => {
      setCandidateList(response.data);
    });
  };
  useEffect(fetchCandidates, []);

  const handleAdd = (event) => {
    setAns("yes");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        backgroundColor: "lightyellow",
      }}
    >
      <Button variant="primary" style={{ margin: "30px" }} onClick={handleAdd}>
        Add New Candidate
      </Button>
      {ans === "yes" && <AddCandidate setAns={(word) => setAns(word)} />}
      {candidataeList.map((value, index) => {
        return <CreateCard value={value} index={index} key={index} />;
      })}
    </div>
  );
};

export default FetchCandidates;
