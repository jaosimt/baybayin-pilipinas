import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import "./ContentContainer.scss";
import BaybayinTranslator from "./BaybayinTranslator";

export default class ContentContainer extends React.Component {
    render() {
        const containersLeft = this.props.menuLeft + 300,
            thisStyle = {
                left: `${containersLeft}px`,
                width: `calc(100% - ${containersLeft}px)`
            };
        
        let contents = <Fragment>
            <h1>{this.props.menuItem.name}</h1>
            <h2>{this.props.menuItem.label}</h2>
        </Fragment>;
        
        switch (this.props.menuItem.name) {
            case 'baybayin':
                contents = <BaybayinTranslator/>;
                break;
            case 'news':
                break;
            case 'links':
                break;
            default:
                thisStyle.backgroundColor = `transparent`
        }
        
        return <div
            className={'content-container'}
            style={thisStyle}
        >
            { contents }
        </div>;
    }
}

ContentContainer.propTypes = {
    menuItem: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.any
    }).isRequired,
    menuLeft: PropTypes.number
};

ContentContainer.defaultProps = {
    menuLeft: 0
};