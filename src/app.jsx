import { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
};

  render() {
    return(
      <>
        <Navbar habits={this.state.habits} />
        <Habits habits={this.state.habits} />
      </>
    )
  }
}

export default App;
