"use client";

import React, { Fragment } from "react";

import Hero from "@/views/Hero";
import WhyRevvit from "@/views/WhyRevvit";

const Home = () => {
  return (
    <Fragment>
      <section className="root-section">
        <Hero />
        <WhyRevvit />
      </section>
    </Fragment>
  );
};

export default Home;
