import React from 'react';
import PropTypes from 'prop-types';
import "./MediaPreview.scss";

export default class MediaPreview extends React.Component {
    constructor(props) {
        super(props);
        
        // Component Click Handler
        this.componentClickHandler.bind(this);
        
        // Component Keypress Handler
        this.componentKeyPressHandler.bind(this);
    }
    
    componentKeyPressHandler = ({keyCode}) => {
        if (keyCode === 27) this.props.onClose();
    };
    
    // Component Click Handler
    componentClickHandler = (e) => {
        if (!this.node.contains(e.target)) this.props.onClose();
    };
    
    componentDidMount() {
        this.menuNode = document.querySelector('.app > .menu');
        if (this.menuNode) this.menuNode.style.zIndex = -1;
        
        // Component Click Handler
        document.addEventListener('mousedown', this.componentClickHandler, false);
        
        // Component Keypress Handler
        document.addEventListener('keyup', this.componentKeyPressHandler, false);
    }
    
    componentWillUnmount() {
        if (this.menuNode) this.menuNode.style.zIndex = '';
        
        document.removeEventListener('mousedown', this.componentClickHandler, false);
        document.removeEventListener('keyup', this.componentKeyPressHandler, false);
    }
    
    render() {
        return <div className='media-preview-overlay'>
            <div
                className={'preview'}
                ref={node => this.node = node}
                style={{
                    background: `white url(${this.props.media}) no-repeat center`
                }}
            >
            
            </div>
        </div>;
    }
}

MediaPreview.propTypes = {
    media: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};
