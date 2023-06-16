import React from "react";

import Header from "./header";
import Gallery from "./sectionGallery";
import Team from "./srctionTeam";
import Testimonials from "./sectionteTimonials";
import Blog from "./sectionBlog";

import Counter from "./sectionCounter";
import Form from "./Form";

function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Team />
      <Counter />
      <Testimonials />
      <Blog />
      <Form />
    </>
  );
}

export default Home;
