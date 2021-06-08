import React from 'react';
import './tasks.css';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: null
        }
    }

    componentDidMount = () => {
        console.log(this.state.taskList)
    }

    disableCheckbox = (e) => {
        e.target.disabled = "disabled";
        this.checkTask(e);
    }

    checkTask = async(e) => {
        let check = {
            checked: 1,
        }
        const response = await fetch(`http://localhost:8000/api/tasks/${e.target.id}`, {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(check),
        });
        const body = await response.text();
        this.setState({
            body: body
        }, () => {
            this.props.changeNum()
        })
    }

    deleteTask = async(e) => {
        let id = e.target.id;
        let something = document.querySelector(`#key${id}`);
        something.style.display = "none";
        const response = await fetch(`http://localhost:8000/api/tasks/${e.target.id}`, {
            method: 'DELETE'
        });
        let myres = await response.json()
        this.setState({
            body: myres.data
        }, () => {
            this.props.getTasks();
        })
    }

    render() {

        let taskList = this.props.taskList;

      return (
          <main>
              <div className="maindiv">
                <table>
                    <tbody>
                            {taskList.map((task,index) => (
                                <tr key={task.id} id={`key${task.id}`}>
                                    <td>
                                        {(task.checked == 0) ? <input type="checkbox" name={task.id} id={task.id} onClick={(e) => this.disableCheckbox(e)}/> : <input type="checkbox" name={task.id} id={task.id} checked disabled onClick={(e) => this.disableCheckbox(e)}/> }
                                        <label htmlFor={task.id} className="labels">
                                            <span className="taskLabel">{`${index+1}. ${task.title}`}</span>
                                            <span className="taskBox"></span>
                                        </label>
                                        <div className="end" id={task.id} onClick={(e) => this.deleteTask(e)}>
                                            X
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
              </div>
          </main>
      )
    }
}

export default Tasks;