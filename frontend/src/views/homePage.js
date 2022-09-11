import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Landing from "./landingPage";
import Workflow from "./Workflow";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {(user && user.username)?<div><Workflow/></div>:<div><Landing/></div>}
    </section>
  );
}

export default Home;
