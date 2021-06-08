import React from 'react';
import './addBody.css';

class AddBody extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
            send: false,
            body: null
        }
    }

    getValue = (e) => {
        if(e.target.value.length > 3) {
            let chars = e.target.value.trim();
            if(chars.length > 3) {
                this.setState({
                    task: e.target.value,
                    send: true,
                })
            } else {
                this.setState({
                    task: '',
                    send: false
                })
            }
        } else {
            this.setState({
                task: '',
                send: false
            })
        }
    }

    addTask = async(e) => {

        let body = {
            title: this.state.task
        };

        const response = await fetch(`http://localhost:8000/api/tasks`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const myres = await response.text();
        this.setState({
            body: myres,
            task: '',
            send: false
        }, () => {
            this.props.getTasks();
            document.querySelector('#taskInput').value = '';
        })
    }

    render() {

      return (
          <main>
              <div className="inputDiv">
                  <label htmlFor="taskInput" className="taskInputLabel"><h2 className="taskInputLabel">ניתן להכניס בין 3 ל-50 תווים</h2></label>
                  <input type="text" name="taskInput" id="taskInput" maxLength="50" onChange={(e) => {this.getValue(e)}} />
                  <br/>
                  {this.state.send ? <button className="addButton" onClick={(e) => {this.addTask(e)}}>הוסף משימה</button> : <button className="addButton" disabled>הוסף משימה</button>}
              </div>
          </main>
      )
    }
}

export default AddBody;