"use client"
import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Curtains from "../components/Curtains";
import FruitBascket from "../components/FruitBascket";
import Kanikonna from "../components/Kanikonna";
import Krishnaa from "../components/Krishna";
import HappyVishuText from "../components/HappyVishuText";

const Home = () => {
  var duration = 15 * 1000;
  var skew = 1;
  const audio = new Audio('/audio/vishu.mp3');
  const container = useRef(null);

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

    const handleClick = () => {
      // Play the audio when clicked anywhere on the screen
      if(audio.paused) {
        audio.play();
      }else{
        audio.pause();
        audio.currentTime = 0;
      }
    };

    // Add click event listener to the window object
    container.current.addEventListener("click", handleClick);

    return () => {
      clearTimeout(timeoutConfetti);
      // Remove click event listener when component unmounts
      container.current.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={container} className="h-screen w-screen overflow-hidden">
      <Curtains />
      <FruitBascket />
      <Kanikonna />
      <Krishnaa />
      <HappyVishuText />
    </div>
  );
};

export default Home;
