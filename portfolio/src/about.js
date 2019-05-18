import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Nav from './nav';

export default class About extends Component {
    render() {
        return(
          <Fragment>
            <AppBar position="fixed" color="default"/>
            {/* <Nav/> */}
            <p>this is the about page</p>
            <Button variant="contained" color="primary">
      Material UI button
    </Button>
          </Fragment>
        )
    }
}