import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddTask from './components/AddTask/addTask';
import TaskTable from './components/TaskTable/taskTable';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      all: 0,
      done: 0,
      left: 0
    }
  }

  componentDidMount = () => {
    this.getTasks();
  }

  getTasks = async() => {
    const response = await fetch(`http://localhost:8000/api/tasks`, {
      method: 'GET'
    });
    let myres = await response.json()
    let data = myres.data;
    this.setState({
      tasks: data,
    }, () => {
      this.getNums();
    })
  }

  getNums = () => {
    if(this.state.tasks.length) {
      let all = this.state.tasks.length;
      let doneTasks = this.state.tasks.filter(task => task.checked == 1);
      let done = doneTasks.length;
      let todo = all - done;
      this.setState({
        all: all,
        done: done,
        left: todo
      })
    }
  }

  updateNum = () => {
    let done = this.state.done + 1;
    let todo = this.state.left - 1;
    this.setState({
      done: done,
      left: todo
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={(matchProps) => (<TaskTable {...matchProps} {...this.props} taskList={this.state.tasks} getTasks={this.getTasks} changeNum={this.updateNum} all={this.state.all} done={this.state.done} left={this.state.left} />)} />
          <Route path="/add" exact render={(matchProps) => (<AddTask {...matchProps} {...this.props} getTasks={this.getTasks} />)} />
        </Switch> 
      </div>
    );
  }
}

export default App;
