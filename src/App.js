import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState("C-PEITEL3 EXPECTATIONS");
  const [name, setName] = useState("Kimberly G. Manaloto");

  const handleKeyPress = (key) => {
    switch (key) {
      case '1':
        setDisplayText("Being On Time");
        break;
      case '2':
        setDisplayText("Making An Effort");
        break;
      case '3':
        setDisplayText("Being High Energy");
        break;
      case '4':
        setDisplayText("Having A Positive Attitude");
        break;
      case '5':
        setDisplayText("Being Passionate");
        break;
      case '6':
        setDisplayText("Using Good Body Language");
        break;
      case '7':
        setDisplayText("Being Coachable");
        break;
      case '8':
        setDisplayText("Doing A Little Extra");
        break;
      case '9':
        setDisplayText("Being Prepared");
        break;
      case '0':
        setDisplayText("Having A Strong Work Ethic");
        break;
      case 'RESET':
        setDisplayText("10 Things That Require Zero Talent");
        break;
      case 'NAME':
        setDisplayText(name.toUpperCase());
        break;
      case 'What I learned?':
        setDisplayText("Through this IT Elective course, I have learned the significance of understanding emerging technologies and their real-world applications. The hands-on approach in this course has helped me grasp complex IT concepts more effectively.");
        break;
      case 'What I want to learn?':
        setDisplayText("I want to learn more about software development frameworks and tools used in the industry. Understanding best practices in project management, especially in IT, is also an area I am eager to explore.");
        break;
      case 'How will I learn?':
        setDisplayText("I will learn by actively participating in project-based assignments, collaborating with my peers on group projects, and using online resources to deepen my understanding of software development practices.");
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name} - IT3A</h1>
        <div className="button-container">
          <button onClick={() => handleKeyPress('1')}>1</button>
          <button onClick={() => handleKeyPress('2')}>2</button>
          <button onClick={() => handleKeyPress('3')}>3</button>
          <button onClick={() => handleKeyPress('4')}>4</button>
          <button onClick={() => handleKeyPress('5')}>5</button>
          <button onClick={() => handleKeyPress('6')}>6</button>
          <button onClick={() => handleKeyPress('7')}>7</button>
          <button onClick={() => handleKeyPress('8')}>8</button>
          <button onClick={() => handleKeyPress('9')}>9</button>
          <button onClick={() => handleKeyPress('0')}>0</button>
          <button onClick={() => handleKeyPress('RESET')}>RESET</button>
          <button onClick={() => handleKeyPress('NAME')}>NAME</button>
          <button onClick={() => handleKeyPress('What I learned?')}>What I learned?</button>
          <button onClick={() => handleKeyPress('What I want to learn?')}>What I want to learn?</button>
          <button onClick={() => handleKeyPress('How will I learn?')}>How will I learn?</button>
        </div>
        <h2>{displayText}</h2>
      </header>
    </div>
  );
}

export default App;