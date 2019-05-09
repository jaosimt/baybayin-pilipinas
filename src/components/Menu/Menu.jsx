import React from 'react';
import PropTypes from 'prop-types';
import "./Menu.scss";
import MenuItems from "./MenuItems";
import {
    isFunction, isMobile
} from "../../utils";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            menuLeft: this.props.initLeft
        };
        
        this.onComponentClick.bind(this);
        this.onHandleClick.bind(this);
    }
    
    onComponentClick = (e) => {
        if (e.target.parentNode.className.match(this.props.clickExcludesRegEx) || this.state.menuLeft < 0) return;
        
        if (!this.node.contains(e.target)) this.setState({menuLeft: -300}, () => {
            if (isFunction(this.props.onSetLeft)) this.props.onSetLeft(this.state.menuLeft);
        });
    };
    
    onHandleClick = (e) => {
        e.stopPropagation();
        this.setState({menuLeft: this.state.menuLeft === 0 ? -300 : 0}, () => {
            if (isFunction(this.props.onSetLeft)) this.props.onSetLeft(this.state.menuLeft);
        });
    };
    
    onMenuItemClick = (e) => {
        e.preventDefault();
        
        const selected = +e.currentTarget.dataset.index;
        
        if (isMobile()) this.setState({ menuLeftL: -300 });
        if (!Number.isNaN(selected) && isFunction(this.props.onClick)) this.props.onClick(selected);
    };
    
    componentDidMount() {
        if (isFunction(this.props.onSetLeft)) this.props.onSetLeft(this.state.menuLeft);
        document.addEventListener('mousedown', this.onComponentClick, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onComponentClick, false);
    }
    
    render() {
        const {
            menuLeft,
        } = this.state;
        
        const {
            initSelected: selected
        } = this.props;
        
        return <div
            ref={node => this.node = node}
            style={{
                left: `${menuLeft}px`
            }} className={'menu'}>
            <div
                className={'menu-header'}
                onClick={this.onHandleClick}
            />
            
            {
                this.props.menu.map(m => <MenuItems
                    key={m.index}
                    menuItem={m}
                    selected={selected}
                    onClick={this.onMenuItemClick}
                
                />)
            }
            
            <div
                className={'handle'}
                onClick={this.onHandleClick}
            />
            
            <div className={'page-title'}>
                <div className={'center-page-title'}>
                    {this.props.menu[selected].alt || this.props.menu[selected].label}
                </div>
            </div>
        </div>
    }
}

Menu.propTypes = {
    initLeft: PropTypes.number,
    initSelected: PropTypes.number.isRequired,
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.any
        })
    ).isRequired,
    onClick: PropTypes.func,
    onSetLeft: PropTypes.func,
    clickExcludesRegEx: PropTypes.any
};

Menu.defaultProps = {
    initLeft: 0,
    onClick: () => {},
    clickExcludesRegEx: / /
};
