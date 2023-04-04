import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

function Header() {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav style={{ border: "1px solid gray" }}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article style={{ border: "1px solid gray" }}>
      <h2>Welcome</h2>
      RTK Query takes inspiration from many other data fetching libraries in the
      ecosystem. Much like the Redux core library was inspired by tools like
      Flux and Elm, RTK Query builds on API design patterns and feature concepts
      popularized by libraries like React Query, SWR, Apollo, and Urql. RTK
      Query has been written from scratch, but tries to use the best concepts
      from those libraries and other data fetching tools, with an eye towards
      leveraging the unique strengths and capabilities of Redux. We think that
      all of those tools are great! If you're using one of them, you're happy
      with it, and it solves the problems you are facing in your app, keep using
      that tool. The information on this page is meant to help show where there
      are differences in features, implementation approaches, and API design.
      The goal is to help you make informed decisions and understand tradeoffs,
      rather than argue that tool X is better than tool Y.
      <br />
      <ButtonGroup>
        <Button variant="outlined">Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </article>
  );
}

export default function App() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs="2">
          <Nav></Nav>
        </Grid>
        <Grid item xs="10">
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}
