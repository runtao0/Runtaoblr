import React from 'react';
import GreetingContainer from './greetings/greeting_container';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bg: this.chooseBG()};
  }

  chooseBG () {
    const bgs = ["bg-1", "bg-2", "bg-3"];
    return (
      bgs[Math.floor(Math.random() * bgs.length)]
    );
  }
  componentDidMount() {
    this.setState({bg: this.chooseBG()});
  }

  render () {
    return (
      <div className={ "auth group " + this.state.bg}>
        <section className="action_buttons">
          <GreetingContainer/>
        </section>
        <section className="signin_form">
          <h1 className="runtaoblr">runtaoblr.</h1>
          <h2 className="description">Come as you are,<br/> leave transformed</h2>
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default App;
