import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


export default class About extends Component {
    render() {
        return(
          <Fragment>
            <AppBar position="fixed" color="default"/>
            <nav>
              <ul>
                <li className="nav"><a href="/">home</a></li>
                <li className="nav"><a href="/about">about</a></li>
              </ul>
            </nav>
            <p>this is the about page</p>
            <Button variant="contained" color="primary">
      Hello World
    </Button>
          </Fragment>
        )
    }
}