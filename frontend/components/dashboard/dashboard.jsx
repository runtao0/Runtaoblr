import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="dashboard_main">
        <section>
          <GreetingContainer/>
        </section>
        <h1>HELLO!</h1>
      </div>
    );
  }
}

export default withRouter(Dashboard);

// return(
//   <div className="dashboard">
//     <header>
//       <section className="action_buttons">
//         <GreetingContainer/>
//       </section>
//     </header>
//     { this.props.children }
//   </div>
// );
