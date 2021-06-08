import React from 'react';
import './addTask.css';
import AddHeader from './addHeader/addHeader'
import AddBody from './addBody/addBody';

class AddTask extends React.Component {
    
    reloadTasks = () => {
        this.props.getTasks();
    }

    render() {
      return (
          <main>
              <AddHeader/>
              <AddBody getTasks={this.reloadTasks}/>
          </main>
      )
    }
}

export default AddTask;