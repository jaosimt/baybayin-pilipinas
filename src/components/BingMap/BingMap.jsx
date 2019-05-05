import React from 'react'
import PropTypes from 'prop-types'
import {ReactBingmaps} from 'react-bingmaps'
import './BingMap.css'
import HideIf from '../HideIf'
import {debounce} from "lodash"
import {observer} from "../../utils"

export default class BingMap extends React.Component {
    constructor(props) {
        super(props);
        
        this.mapContainerRef = React.createRef();
        this.observerRef = null; // set in observer ref callback
        
        this.state = {
            width: '0',
            height: '0',
            overlayHeight: '100%',
            overlayWidth: '100%'
        };
        
        this.handleClick.bind(this);
        this.initUpdateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateWindowDimensions = debounce(this.updateWindowDimensions.bind(this), 200)
    }
    
    handleClick = (e) => {
        e.stopPropagation();
        
        const {target} = e;
        
        if (target.classList.contains('labelCanvas') || target.classList.contains('modals')) {
            return
        }
        
        if (target.classList.contains('react-bing-map-overlay')) {
            this.setState({overlayHeight: 0});
            return
        }
        
        const map = document.querySelector('.react-bing-map');
        this.setState({overlayHeight: map ? map.clientHeight : 100})
    };
    
    observer = (mutationsList, observer) => {
        if (typeof this.props.onLoad === 'function') this.props.onLoad(mutationsList);
        
        observer.disconnect();
    };
    
    locationClickHandler = (location) => {
        if (typeof this.props.onMapClick === 'function') this.props.onMapClick(location);
    };
    
    componentDidMount() {
        observer(this.mapContainerRef.current, this.observer, {subtree: true, childList: false}, (observerRef) => {
            this.observerRef = observerRef;
        });
        
        this.initUpdateWindowDimensions();
        
        window.addEventListener('resize', this.updateWindowDimensions);
        document.addEventListener('mousedown', this.handleClick, false);
        
        const map = document.querySelector('.react-bing-map');
        this.setState({overlayHeight: (map ? map.clientHeight : 100), overlayWidth: (map ? map.clientWidth : 100)})
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
        window.removeEventListener('resize', this.updateWindowDimensions);
        if (this.observerRef instanceof MutationObserver) this.observerRef.disconnect();
    }
    
    updateWindowDimensions() {
        const map = document.querySelector('.react-bing-map');
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            overlayHeight: (map ? map.clientHeight : 100),
            overlayWidth: (map ? map.clientWidth : 100)
        })
    }
    
    render() {
        const {
            center,
            zoom,
            pins,
            overlay,
        } = this.props;
        
        return <div style={{width: "100%", height: "100%"}}>
            <div className='react-bing-map' ref={ this.mapContainerRef }>
                <ReactBingmaps
                    bingmapKey="ApOAYEm6eqzBlaaVjDuBeX037kwQBbDMdRkR5rGItzG94p9cjhkjugSimzFV9x87"
                    navigationBarMode="compact"
                    mapTypeId="aerial"
                    disableScrollWheelZoom={true}
                    supportedMapTypes={[
                        "road",
                        "aerial",
                        "canvasLight"
                    ]}
                    center={center}
                    zoom={zoom || 14}
                    infoboxesWithPushPins={
                        pins.map(p => {
                            p.addHandler = "mouseover";
                            return p
                        })
                    }
                    getLocation={{
                        addHandler: "click", callback: this.locationClickHandler
                    }}
                
                >
                </ReactBingmaps>
            </div>
            <HideIf condition={overlay === false}>
                <div className='react-bing-map-overlay' style={{
                    visibility: this.state.overlayHeight === 0 ? 'hidden' : 'visible',
                    width: this.state.overlayWidth,
                    height: this.state.overlayHeight,
                    transform: "translateY(-100%)"
                }}>
                    <div className='m-align enable-map'>
                        <div className='enable-map'>click to access map's functionality</div>
                    </div>
                </div>
            </HideIf>
        </div>;
    }
}

BingMap.propTypes = {
    overlay: PropTypes.bool,
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
    pins: PropTypes.array,
    onMapClick: PropTypes.func,
    onLoad: PropTypes.func
};

BingMap.defaultProps = {
    overlay: true,
    center: [7, 7],
};
