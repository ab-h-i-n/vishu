"use client";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import Curtains from "../components/Curtains";
import FruitBascket from "../components/FruitBascket";
import Kanikonna from "../components/Kanikonna";
import Krishnaa from "../components/Krishna";
import HappyVishuText from "../components/HappyVishuText";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  var duration = 15 * 1000;
  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function startConfetti() {
    var timeLeft = duration;
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);
    confetti({
      particleCount: 10,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        y: Math.random() * skew - 0.2,
      },
      colors: ["#FFF633"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });
    setTimeout(startConfetti, 500);
  }

  useEffect(() => {
    const timeoutConfetti = setTimeout(startConfetti, 2000);

    return () => {
      clearTimeout(timeoutConfetti);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Analytics />
      <Curtains />
      <FruitBascket />
      <Kanikonna />
      <Krishnaa />
      <HappyVishuText />
    </div>
  );
};

export default Home;
