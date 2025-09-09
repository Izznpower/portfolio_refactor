// components/Banner.js
import React, { useEffect, useState } from 'react';

import { useTypewriter } from '../hooks/useTypewriter';
import bannerImage from '../assets/img/Black and Blue Animated Gamer Twitch Banner.gif';

const Banner = () => {
  const displayText = useTypewriter("Welcome to the domain of The ScriptBunny! Clinical Data scientist | Software App Developer!", 100, 0);

  return (
    <section id="banner" className="banner_hero">
      <img className="animated_banner" src={bannerImage} alt="Animated banner" />
          <div className="text_container">
            <h1 id="typewriter">{displayText}</h1>
          </div>
    </section>
  );
};

export default Banner;