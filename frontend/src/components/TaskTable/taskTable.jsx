import React from 'react';
import './taskTable.css';
import Header from './header/header';
import Tasks from './tasks/tasks';
import Footer from './footer/footer';

class TaskTable extends React.Component {
    render() {
      return (
          <main>
              <Header/>
              <Tasks taskList={this.props.taskList} getTasks={this.props.getTasks} changeNum={this.props.changeNum}/>
              <Footer all={this.props.all} done={this.props.done} left={this.props.left}/>
          </main>
      )
    }
}

export default TaskTable;