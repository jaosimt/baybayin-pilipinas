import React from 'react'
import PropTypes from 'prop-types'

export default class MenuItems extends React.Component {
    render() {
        const {
            selected,
            menuItem,
            onClick
        } = this.props;
        
        return <div
            className={`menu-item ${selected === menuItem.index ? 'selected' : ''}`}
            data-index={menuItem.index}
            data-name={menuItem.name}
            onClick={onClick}
        >
            {menuItem.label}
        </div>
    }
}

MenuItems.propTypes = {
    menuItem: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.any
    }).isRequired,
    onClick: PropTypes.func,
    selected: PropTypes.number
};

MenuItems.defaultProps = {
    onClick: () => {},
    selected: 0
};