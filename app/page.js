"use client";

import React, { Fragment } from "react";

import Hero from "@/views/Hero";
import WhyRevvit from "@/views/WhyRevvit";
import Features from "@/views/Features";
import BuySell from "@/views/BuySell";
import Reviews from "@/views/Reviews";

const Home = () => {
  return (
    <Fragment>
      <section className="root-section">
        <Hero />
        <WhyRevvit />
        <Features />
        <BuySell />
        <Reviews />
      </section>
    </Fragment>
  );
};

export default Home;
