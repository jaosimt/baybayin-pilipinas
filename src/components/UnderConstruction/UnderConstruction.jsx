import React from 'react';
import PropTypes from 'prop-types'
import "./UnderConstruction.scss";

export default class UnderConstruction extends React.Component {
    render() {
        return this.props.is404 === true ? <div className={'no-page'}/> : <div className={'under-construction'}/>
    }
}

UnderConstruction.propTypes = {
    is404: PropTypes.bool
};