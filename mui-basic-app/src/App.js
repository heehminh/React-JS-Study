import React from "react";
import Button from "@mui/material/Button";

function Header() {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello Web!
      <br />
      <Button variant="outlined">Create</Button>
      <Button variant="contained">Update</Button>
      <Button variant="text">Delete</Button>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
