import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        let left = this.props.left;
        let done = this.props.done;
        let all = this.props.all;
      return (
          <main>
              <div className="footer">
                <div>
                    לסיום: {left}
                </div>
                <div>
                    הושלמו: {done}
                </div>
                <div>
                    סך הכול: {all}
                </div>
              </div>
          </main>
      )
    }
}

export default Footer;