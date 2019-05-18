import React, { Component } from 'react'
import Markdown from 'markdown-to-jsx';
import resume from './resume.md';

class ResumeInMD extends Component {
  constructor(props) {
    super(props)

    this.state = { md: "" }
  }

  componentWillMount() {
    fetch(resume)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {

    let { md } = this.state

    return (
        <div className="resume">
          <Markdown children={md}/>
        </div>
    )
  }
}

export default ResumeInMD
