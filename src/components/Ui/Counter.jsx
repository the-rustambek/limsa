"use client";
import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styles from "@/srcstyles/Counter.module.css";

const Counter = ({countEnd, text}) => {
  const [count, setCount] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <h3 className={styles.title}>{count && <CountUp start={0} end={countEnd} duration={3} />}+</h3>
      <p className={styles.text}>{text}</p>
    </ScrollTrigger>
  );
};

export default Counter;
