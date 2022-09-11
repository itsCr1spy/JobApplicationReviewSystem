import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

function AddCandidate(props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState(
    "https://itscr1spy.github.io/React-Portfolio-Website/"
  );
  const [status, setStatus] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/candidate-add/",
      data: {
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

    props.setAns("no");
    window.location.reload();
    setName("");
    setContact("");
    setExperience("");
    setSkills("");
    setResume("");
  };
  return (
    <>
      <Card style={{ width: "80vw", marginTop: "10px" }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact Number"
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="experience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Experience"
                onChange={(e) => setExperience(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="skills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Skills"
                onChange={(e) => setSkills(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Resume">
              <Form.Label>Resume link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Resume"
                onChange={(e) => setResume(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddCandidate;
