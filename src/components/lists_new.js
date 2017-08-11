import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ListsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="List Name"
          name="name"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values){
  const errors = {}
  if (!values.name) {
    errors.name = "Please enter a name for your list"
  }
  return errors

}

export default reduxForm({
  validate,
  form: 'ListsNewForm'
})(ListsNew)
