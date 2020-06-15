import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  renderError({touched, error}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderField = ({input, label, type, meta}) => {
    const classErrorName = meta.touched && meta.error ? 'error' : ''
    return (
      <div className={`field ${classErrorName}`}>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {this.renderError(meta)}
        </div>
      </div>
    )
  }

  onFormSubmit(values) {
    console.log(values)

  }

  render() {
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field
            name="title"
            type="text"
            label="Title"
            component={this.renderField}
          />
          <Field
            name="description"
            type="text"
            label="Description"
            component={this.renderField}
          />
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Please enter title'
  }

  if (!values.description) {
    errors.description = 'Please enter description'
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)
