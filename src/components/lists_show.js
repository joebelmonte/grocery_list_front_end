import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchList, deleteList } from '../actions'

class ListsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchList(id)
  }

  onDeleteClick(){
    const { id } = this.props.match.params
    this.props.deleteList(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { list } = this.props

    if (!list) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to All Lists</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
        Delete List
        </button>
        <h3>{list.name}</h3>
      </div>
    )
  }
}

function mapStateToProps({ lists }, ownProps ) {
  return { list: lists[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchList, deleteList} )(ListsShow)
