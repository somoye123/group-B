import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { id,name, age, hobby } = this.props.info;
    return (
      <div>
        <p>{`${id}. Name: ${name}. Age: ${age}. Hobbies include: ${hobby}`}</p>
      </div>
    );
  }
}
