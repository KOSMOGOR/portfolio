import React from "react";
import { Bio } from './bio';
import { Footer } from './footer';

export default function Home() {
  return (
    <div>
      <header>
          <div id="hText">Cool portfolio</div>
      </header>
      <Bio />
      <Footer />
    </div>
  );
}
