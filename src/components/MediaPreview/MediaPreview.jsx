import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import "./MediaPreview.scss";

export default class MediaPreview extends React.Component {
    constructor(props) {
        super(props);
        
        this.componentClickHandler.bind(this);
        this.componentKeyPressHandler.bind(this);
        
        this.propType = typeof this.props.media === 'object' ? 'article' : 'image';
        
        this.menuNode = document.querySelector('.app > .menu');
        if (this.menuNode) this.menuNode.style.zIndex = -1;
        
        this.socialNode = document.querySelector('.app > .wrapper > .social');
        if (this.socialNode) this.socialNode.style.zIndex = -1;
    }
    
    componentKeyPressHandler = ({keyCode}) => {
        if (keyCode === 27) this.props.onClose();
    };
    
    componentClickHandler = (e) => {
        if (!this.node.contains(e.target)) this.props.onClose();
    };
    
    getDescription = (media) => {
        const arr = media.description.split(/\n|<[/]*br[/]*>/);
        return <div>
            {
                arr.map((p, i) => {
                    if (i === 0) return p;
                    return <Fragment>
                        <br/>
                        {p}
                    </Fragment>
                })
                
            }
        </div>
    };
    
    componentDidMount() {
        document.addEventListener('mousedown', this.componentClickHandler, false);
        document.addEventListener('keyup', this.componentKeyPressHandler, false);
    }
    
    componentWillUnmount() {
        if (this.menuNode) this.menuNode.style.zIndex = '';
        if (this.socialNode) this.socialNode.style.zIndex = '';
        
        document.removeEventListener('mousedown', this.componentClickHandler, false);
        document.removeEventListener('keyup', this.componentKeyPressHandler, false);
    }
    
    render() {
        let contents = this.propType === 'image' ? <div
            ref={node => this.node = node}
            className={'preview'}
            style={{
                background: `white url(${this.props.media}) no-repeat center`
            }}
        /> : <div
            ref={node => this.node = node}
            className={'article-preview'}
        >
            <div
                className={'image'}
                style={{
                    background: `black url(${this.props.media.image}) no-repeat center`
                }}
            />
            
            <div className={'info'}>
                <div
                    className={'title'}
                >
                    <div>{this.props.media.title}</div>
                </div>
                
                <div
                    className={'description'}
                >
                    {this.getDescription(this.props.media)}
                </div>
                
                <div
                    className={'read-more'}
                    onClick={() => window.open(this.props.media.url, '_blank')}
                >
                    read more
                </div>
            </div>
            
            <div className={'close'} onClick={this.props.onClose}/>
        </div>;
        
        return <div className='media-preview-overlay'>
            {contents}
        </div>
    }
}

MediaPreview.propTypes = {
    media: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string
        })
    ]).isRequired,
    onClose: PropTypes.func.isRequired
};
