import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

function CreateCard(props) {
  let sts = props.value.status;
  const [val, setVal] = useState("no");

  const handleUpdate = () => {
    const id = props.value.id;
    const name = props.value.name;
    const contact = props.value.contact;
    const experience = props.value.experience;
    const skills = props.value.skills;
    const status = sts;
    const resume = props.value.resume;
    const link = "http://localhost:8000/api/candidate-update/" + id +"/";
		console.log(link)
    axios({
      method: "post",
      url: link,
      data: {
        id,
        name,
        contact,
        experience,
        skills,
        status,
        resume,
      },
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
			window.location.reload()
  };

  const handleVal = (e) => {
    e.preventDefault();
    setVal("yes");
  };

  const handleCloseVal = (e) => {
    e.preventDefault();
    setVal("no");
  };

  return (
    <>
      <Card style={{ width: "80vw", margin: "10px", backgroundColor:"#CCCCFA" }} key={props.index}>
        <Card.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title><h3>{props.value.name}</h3></Card.Title>
            <Card.Title>
              {props.value.status === 1 ? (
                <h3 style={{ color: "green" }}>Accepted</h3>
              ) : props.value.status === 2 ? (
                <h3 style={{ color: "red" }}>Rejected</h3>
              ) : (
                <h3 style={{ color: "#E9C531 " }}>Pending</h3>
              )}
            </Card.Title>
          </div>

          {val === "yes" && (
            <Card.Text><b>Contact Number : </b>{props.value.contact}</Card.Text>
          )}
          {val === "yes" && (
            <Card.Text><b>Experience : </b>{props.value.experience}</Card.Text>
          )}
          <Card.Text><b>Skills : </b>{props.value.skills}</Card.Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {val === "yes" && (
              <DropdownButton title="Accept/Reject">
                <Dropdown.Item
                  as="button"
                  onClick={(e) => {
                    e.preventDefault();
                    sts = 1;
                    handleUpdate();
                  }}
                >
                  Accept
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => {
                    e.preventDefault();
                    sts = 2;
                    handleUpdate();
                  }}
                >
                  Reject
                </Dropdown.Item>
              </DropdownButton>
            )}
            {val === "yes" && (
              <a href={props.value.resume} style={{ textDecoration: "none" }}>
                <Button variant="primary">View Resume</Button>
              </a>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {val === "no" && (
              <Button variant="primary" onClick={handleVal}>
                Open Application
              </Button>
            )}
            {val === "yes" && (
              <Button variant="primary" onClick={handleCloseVal}>
                Close Application
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreateCard;
