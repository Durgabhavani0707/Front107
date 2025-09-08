import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home component</h2>
      
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About component</h2>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact component</h2>
    </div>
  );
};

const App = () => {
  console.log('Welcome to component');

  const a = 10;
  const b = 20;

  const now = new Date(); 
  const currentTime = now.toString(); 

  return (
    <div>
      <h1>Congratulations, you completed your first React app!</h1>
      <p>Hello, current time = {currentTime}</p>
            <p>{a} + {b} = {a + b}</p>


    
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
