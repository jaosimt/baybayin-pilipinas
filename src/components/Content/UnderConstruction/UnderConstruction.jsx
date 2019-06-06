import React from 'react';

export default class UnderConstruction extends React.Component {
    render() {
        return <div className={'under-construction'}>
            <h1></h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>;
    }
}
