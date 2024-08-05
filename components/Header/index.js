"use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from "react-icons/fa";

import HeaderIcon from "./sub-components/HeaderIcon";

const Header = () => {
  const params = useParams();

  const [scrolling, setScrolling] = useState(true);
  const [primerymenu, setPrimerymenu] = useState(false);
  const [activepage, setActivepage] = useState("");

  useEffect(() => {
    setActivepage(window.location.pathname);
  }, [params]);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1024) {
        if (window.scrollY > 15) {
          setScrolling(false);
          setPrimerymenu(true);
        } else {
          setPrimerymenu(false);
          setScrolling(true);
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleMenuIcon = () => {
    if (window.innerWidth < 1023) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };

  const hanldeMobileCloseHandler = () => {
    if (window.innerWidth < 1024) {
      setScrolling(true);
    }
  };

  return (
    <Fragment>
      <div
        className={`secondary-header ${
          scrolling
            ? "translate-y-0 lg:-translate-y-full"
            : "-translate-y-full lg:translate-y-0"
        }`}
      >
        <div className="main-container-root">
          <div className="secondary-header-wraper">
            <Link href="/">
              <div>
                <Image
                  src="/assets/logo/revvit-logo.png"
                  alt="Logo"
                  width={100}
                  height={30}
                />
              </div>
            </Link>
            <div className="login-icon-section">
              <div className="login-icon-section-inner">
                <a href="https://app.revvit.ca" rel="noopener noreferrer">
                  <Image
                    src="/assets/icons/download.png"
                    alt="Logo"
                    width={23}
                    height={23}
                  />
                  <span>login</span>
                </a>
              </div>
              <div className="white-break" />
              <HeaderIcon handleMenuIcon={handleMenuIcon} />
            </div>
          </div>
        </div>
      </div>
      <header
        className={`primary-header ${
          scrolling
            ? "-translate-y-full lg:translate-y-0"
            : "translate-y-0 lg:-translate-y-full"
        }`}
      >
        <div className={`banner-root ${primerymenu && "!hidden"}`}>
          <div className="main-container-root">
            <div className="banner-section flex-between">
              <div className="banner-icon-section">
                <Link href="/">
                  <FaFacebookF className="banner-icon-wrapper" />
                </Link>
                <Link href="/">
                  <FaTwitter className="banner-icon-wrapper" />
                </Link>
                <Link href="/">
                  <FaLinkedinIn className="banner-icon-wrapper" />
                </Link>
              </div>
              <span className="banner-text hidden lg:flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vestibulum suscipit bibendum.&nbsp;
                <Link href="/" className="banner-text-link">
                  Read More
                </Link>
              </span>
              <div className="search-section">
                <FaSearch className="search-icon" />
                <input placeholder="search" />
              </div>
            </div>
          </div>
        </div>
        <div className="primary-header-root">
          <Image
            onClick={hanldeMobileCloseHandler}
            src="/assets/icons/close.png"
            alt="heare-close-icon"
            width={24}
            height={24}
            className="close-icon"
          />

          <div className="main-container-root">
            <div className="primary-header-section flex-between">
              <Link href="/" onClick={hanldeMobileCloseHandler}>
                <Image
                  src="/assets/logo/revvit-logo.png"
                  alt="Logo"
                  width={140}
                  height={50}
                />
              </Link>

              <div className="primary-header-inner">
                <ul className="primary-header-nav-list nav-list">
                  <li>
                    <Link href="/why-revvit" onClick={hanldeMobileCloseHandler}>
                      <div
                        className={`nav-list-inner ${
                          activepage.includes("/why-revvit") && "active"
                        }`}
                      >
                        <div className="nav-list-inner-img-root">
                          <Image
                            src="/assets/slash-icons/red.png"
                            alt="Logo"
                            width={14}
                            height={19}
                            className="nav-list-inner-img1 "
                          />
                          <Image
                            src="/assets/slash-icons/black.png"
                            alt="Logo"
                            width={12}
                            height={15}
                            className="nav-list-inner-img2"
                          />
                        </div>
                      </div>
                      <span
                        className={`${
                          activepage.includes("/why-revvit") && "active-link"
                        }`}
                      >
                        WHY REVVIT
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/buyers" onClick={hanldeMobileCloseHandler}>
                      <div
                        className={`nav-list-inner ${
                          activepage.includes("/buyers") && "active"
                        }`}
                      >
                        <div className="nav-list-inner-img-root">
                          <Image
                            src="/assets/slash-icons/red.png"
                            alt="Logo"
                            width={14}
                            height={19}
                          />
                          <Image
                            src="/assets/slash-icons/black.png"
                            alt="Logo"
                            width={12}
                            height={15}
                            className="nav-list-inner-img2"
                          />
                        </div>
                      </div>
                      <span
                        className={`${
                          activepage.includes("/buyers") && "active-link"
                        }`}
                      >
                        BUYERS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sellers" onClick={hanldeMobileCloseHandler}>
                      <div
                        className={`nav-list-inner ${
                          activepage.includes("/sellers") && "active"
                        }`}
                      >
                        <div className="nav-list-inner-img-root ">
                          <Image
                            src="/assets/slash-icons/red.png"
                            alt="Logo"
                            width={14}
                            height={19}
                          />
                          <Image
                            src="/assets/slash-icons/black.png"
                            alt="Logo"
                            width={12}
                            height={15}
                            className="nav-list-inner-img2"
                          />
                        </div>
                      </div>
                      <span
                        className={`${
                          activepage.includes("/sellers") && "active-link"
                        }`}
                      >
                        SELLERS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" onClick={hanldeMobileCloseHandler}>
                      <div
                        className={`nav-list-inner ${
                          activepage.includes("/locations") && "active"
                        }`}
                      >
                        <div className="nav-list-inner-img-root">
                          <Image
                            src="/assets/slash-icons/red.png"
                            alt="Logo"
                            width={14}
                            height={19}
                          />
                          <Image
                            src="/assets/slash-icons/black.png"
                            alt="Logo"
                            width={12}
                            height={15}
                            className="nav-list-inner-img2"
                          />
                        </div>
                      </div>
                      <span
                        className={`${
                          activepage.includes("/locations") && "active-link"
                        }`}
                      >
                        LOCATIONS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" onClick={hanldeMobileCloseHandler}>
                      <div
                        className={`nav-list-inner ${
                          activepage.includes("/pricing") && "active"
                        }`}
                      >
                        <div className="nav-list-inner-img-root ">
                          <Image
                            src="/assets/slash-icons/red.png"
                            alt="Logo"
                            width={14}
                            height={19}
                          />
                          <Image
                            src="/assets/slash-icons/black.png"
                            alt="Logo"
                            width={12}
                            height={15}
                            className="nav-list-inner-img2"
                          />
                        </div>
                      </div>
                      <span
                        className={`${
                          activepage.includes("/pricing") && "active-link"
                        }`}
                      >
                        PRICING
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="primary-header-login-section flex-between">
                <a href="https://app.revvit.ca" rel="noopener noreferrer">
                  <button
                    className="signup-button header-btn"
                    onClick={hanldeMobileCloseHandler}
                  >
                    Sign up
                  </button>
                </a>
                <a href="https://app.revvit.ca" rel="noopener noreferrer">
                  <button
                    className="login-button header-btn"
                    onClick={hanldeMobileCloseHandler}
                  >
                    Log in
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
