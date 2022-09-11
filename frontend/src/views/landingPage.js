import React from "react";
import Card from "react-bootstrap/Card";

function Landing() {
  return (
    <div style={{ display: "flex", justifyContent: "center" , alignItems:"center",height:"50vh"}}>
      <Card style={{ width: "59rem" ,justifyContent: "center" , alignContent:"center", backgroundColor:"lightyellow"}}>
        <Card.Body>
          <Card.Text style={{ fontSize: "24px", justifyContent: "center" , alignitems:"center", fontWeight:"bold"}}>
						Welcome, Please login or register your account to access the list of Candidates
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Landing;
