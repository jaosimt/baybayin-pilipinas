import React from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.scss';
import HideIf from "../HideIf";

export default class ImageSlider extends React.Component {
    state = {
        firstImageLeft: -55,
        hasLeft: true,
        hasRight: true
    };
    
    onRightButtonClick = (e) => {
        e.preventDefault();
        
        const newFirstImageLeft = this.state.firstImageLeft - 70;
        
        let thisStates = {
            hasLeft: true,
            firstImageLeft: newFirstImageLeft
        };
        
        if (15 - ((this.props.images.length - 1) * 70) === newFirstImageLeft) thisStates.hasRight = false;
        
        this.setState(thisStates);
    };
    
    onLeftButtonClick = (e) => {
        e.preventDefault();
        
        const newFirstImageLeft = this.state.firstImageLeft + 70;
        
        let thisStates = {
            hasRight: true,
            firstImageLeft: newFirstImageLeft
        };
        
        if (newFirstImageLeft === 15) thisStates.hasLeft = false;
        
        this.setState(thisStates);
    };
    
    render() {
        const {
            firstImageLeft,
            hasLeft,
            hasRight
        } = this.state;
        
        const {images} = this.props;
        
        return <div
            className={'slider-container'}
        >
            {
                images.map((img, idx) => {
                    const thisLeft = firstImageLeft + (idx * 70);
                    let classNames = 'img';
                    
                    if (thisLeft !== 15) classNames += ' blurred';
                    
                    return <div
                        key={idx}
                        className={classNames}
                        style={{
                            left: `${thisLeft}%`,
                            background: `transparent url(${img.image}) no-repeat center`
                        }}
                    >
                        <HideIf condition={(!img.name && !img.link) || (img.name.trim() === '' && img.link.trim() === '')}>
                            <div className={'label'}>
                                <HideIf condition={!img.name || img.name.trim() === ''}>
                                    <div className={'name'}>{img.name}</div>
                                </HideIf>
                                
                                <HideIf condition={!img.link || img.link.trim() === ''}>
                                    <div className={'link'}>
                                        <a
                                            rel="noopener noreferrer"
                                            target='_blank'
                                            href={img.link}>{img.link}
                                            </a>
                                    </div>
                                </HideIf>
                            </div>
                        </HideIf>
                    </div>
                })
            }
            
            <HideIf condition={!hasLeft}>
                <div
                    className={'btn left'}
                    onClick={this.onLeftButtonClick}
                />
            </HideIf>
            
            <HideIf condition={!hasRight}>
                <div
                    className={'btn right'}
                    onClick={this.onRightButtonClick}
                />
            </HideIf>
        </div>;
    }
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            link: PropTypes.string
        })
    )
};