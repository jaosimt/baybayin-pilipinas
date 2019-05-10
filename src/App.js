import React from 'react';
import './app.scss';
import {debounce} from 'lodash'
import Menu from "./components/Menu/Menu";
import {
    isMobile, isNumber,
    menuItems,
} from './utils';
import ContentContainer from "./components/Content/ContentContainer";
import SocialMediaLinks from "./components/SocialMediaLinks/SocialMediaLinks";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            windowWidth: '0',
            windowHeight: '0',
            page: this.getInitPage(),
            menuLeft: 0,
            opaque: 0
        };
        
        this.initComponentResizeHandler = this.componentResizeHandler.bind(this);
        this.componentResizeHandler = debounce(this.componentResizeHandler.bind(this));
    }
    
    getInitPage = () => {
        let thisPage = menuItems.length ? menuItems[0].index : 0;
        
        const pathName = window.location.pathname.trim().toLocaleLowerCase().replace(/^\/baybayin-pilipinas/, '').replace(/^\//, '');
        if (pathName === '') return thisPage;
        
        const menu = menuItems.find(m => m.name === pathName);
        thisPage = menu && isNumber(menu.index) ? menu.index : 99;
        
        return thisPage;
    };
    
    componentResizeHandler = () => this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
    
    onMenuSelected = (page) => {
        let thisState = {
            page: page
        };
        
        if (isMobile()) thisState.menuLeft = -300;
        
        this.setState(thisState);
    };
    onMenuSetLeft = (menuLeft) => this.setState({menuLeft});
    
    componentDidMount() {
        this.initComponentResizeHandler();
        window.addEventListener('resize', this.componentResizeHandler);
        
        setTimeout(() => this.setState({opaque: 1}));
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.componentResizeHandler);
    }
    
    render() {
        const {
            windowWidth,
            windowHeight,
            opaque,
            menuLeft,
            page
        } = this.state;
        
        return <div className={'app'} style={{opacity: opaque}}>
            <div className={'wrapper'}
                 style={{
                     width: `${windowWidth}px`,
                     height: `${windowHeight}px`
                 }}
            >
                <div className={'menu-area-strip'}/>
                
                <div className={'social'}>
                    <SocialMediaLinks iconSize={isMobile() ? 21 : 35}/>
                </div>
                
                <div className={'slogan'}>
                    <div className={'s1'}>ᜃᜌ᜔ᜄᜈ᜔ᜇᜅ᜔ ᜉᜒᜎᜒᜉᜒᜈᜐ᜔</div>
                    <div className={'s2'}>ka • y • ga • n • da • ng&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pi • li • pi • na •
                        s
                    </div>
                </div>
                
                {
                    menuItems.map(m => {
                        return <div
                            key={m.index}
                            className={`content ${m.name}`}
                            style={{
                                width: `${windowWidth}px`,
                                height: `${windowHeight}px`,
                                opacity: m.index === page ? 1 : 0,
                                top: page > m.index ? '-100%' : (page < m.index ? '100%' : '0')
                                
                            }}
                        >
                            <ContentContainer menuItem={m} menuLeft={menuLeft}/>
                        </div>
                    })
                }
            </div>
            
            <Menu
                menu={menuItems}
                initLeft={menuLeft}
                initSelected={page}
                onClick={this.onMenuSelected}
                onSetLeft={this.onMenuSetLeft}
                clickExcludesRegEx={/slider-container|info/}
            />
        </div>
    }
}