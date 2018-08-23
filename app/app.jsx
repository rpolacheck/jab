import React from 'react';

/* Local Modules*/
import {
  About,
  Gym,
  Contact,
  Landing,
  Testimonials
} from './components'

/* Root Component*/
function App(){
  return (
    <div>
      Hello World!
      <About />
      <Gym />
      <Contact />
      <Landing />
      <Testimonials />  
    </div> 
  );
};

export default App