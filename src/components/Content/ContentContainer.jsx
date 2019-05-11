import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import "./ContentContainer.scss";
import BaybayinTranslator from "./BaybayinTranslator";
import HomeTiles from "./HomeTiles/HomeTiles";
import { homeItems } from "../../data";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import About from "./About";

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
            case 'about':
                contents = <About/>;
                break;
            case 'home':
                thisStyle.backgroundColor = `transparent`;
                contents = <HomeTiles data={homeItems}/>;
                break;
            default:
                contents = <UnderConstruction is404={true}/>
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