import React from 'react';
import './app.scss';
import {debounce} from 'lodash'
import Menu from "./components/Menu/Menu";
import {
    menuItems,
    socialMedia
} from './utils';
import ContentContainer from "./components/Content/ContentContainer";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            windowWidth: '0',
            windowHeight: '0',
            page: menuItems.length ? menuItems[0].index : 0,
            menuLeft: 0,
            opaque: 0
        };
        
        this.initComponentResizeHandler = this.componentResizeHandler.bind(this);
        this.componentResizeHandler = debounce(this.componentResizeHandler.bind(this));
    }
    
    componentResizeHandler = () => this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
    
    onMenuSelected = (page) => {
        this.setState({
            page
        })
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
                <div className={'social'}>
                    {
                        socialMedia.map((s, i) => <div key={i} className={s.name} onClick={() => window.open(s.url, '_blank')}/>)
                    }
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
                onClick={this.onMenuSelected}
                onSetLeft={this.onMenuSetLeft}
                clickExcludesRegEx={/slider-container|info/}
            />
        </div>
    }
}