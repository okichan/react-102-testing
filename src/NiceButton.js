import React, { Component } from 'react';

export const NiceButton = ({name}) => {
    return (
        <div><button> { name } </button></div>
    )
}


export class Child extends React.Component {
    render() {
        return <h1>Hey, my name is {this.props.name}!</h1>
    }
}