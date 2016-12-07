import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="auth group">
    <header>
      <section className="action_buttons">
        <GreetingContainer/>
      </section>
    </header>

    <section className="signin_form">
      <h1 className="runtaoblr">runtaoblr.</h1>
      <h2 className="description">Come as you are,<br/> leave transformed</h2>
      { children }
    </section>
  </div>

);

export default App;