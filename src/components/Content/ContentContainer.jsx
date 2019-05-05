import React from 'react';
import PropTypes from 'prop-types';
import "./ContentContainer.scss";

export default class ContentContainer extends React.Component {
    render() {
        return <div
            className={'content-container'}
        >
            <h1>{this.props.menuItem.name}</h1>
            <h2>{this.props.menuItem.label}</h2>
        </div>;
    }
}

ContentContainer.propTypes = {
    menuItem: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.any
    }).isRequired
};