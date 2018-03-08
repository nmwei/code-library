/**
 * Created by nimengwei on 2018/3/7.
 */
import React, { Component } from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'

@inject('appState') @observer
export default class TopicList extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount() {
    // do something

  }

  changeName(event) {
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{ this.props.appState.msg }</span>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
}
