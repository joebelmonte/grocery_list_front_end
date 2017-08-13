import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchLists } from '../actions'

class ListsIndex extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  renderLists() {
    return _.map(this.props.lists, list => {
      return (
        <li className="list-group-item" key={list.id}>
          <Link to={`/lists/${list.id}`}>
            {list.name}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/lists/new">
            Create a new list
          </Link>
        </div>
        <h3>Lists</h3>
        <ul className="list-group">
          {this.renderLists()}
         </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {lists: state.lists}
}

export default connect(mapStateToProps, { fetchLists })(ListsIndex)
