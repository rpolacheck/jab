import React from 'react';

/* Local Modules*/
import {
  About,
  Gym,
  Contact,
  Landing,
  Testimonials,
} from './components'

/* Root Component*/
function App(){
  return (
    <div id="page-wrapper">
      <Landing />
      <About />
      <Gym />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App
