"use client";

import React, { Fragment } from "react";

import Hero from "@/views/Hero";
import WhyRevvit from "@/views/WhyRevvit";
import Features from "@/views/Features";

const Home = () => {
  return (
    <Fragment>
      <section className="root-section">
        <Hero />
        <WhyRevvit />
        <Features />
      </section>
    </Fragment>
  );
};

export default Home;
