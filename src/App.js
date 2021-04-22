import React, { Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import './app.scss';
import SocialMediaLinks from "./components/SocialMediaLinks/SocialMediaLinks";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import {carouselImages, homeItems, youtubeLinks} from "./data";
import HomeTiles from "./components/Content/HomeTiles/HomeTiles";
import About from "./components/Content/About";
import BaybayinTranslator from "./components/Content/BaybayinTranslator";
import {isMobile} from "./utils";

export default class App extends React.Component {
    state = {
        opaque: 0,
        selected: 'home',
        auto: true
    };
    
    onMenuClick = (e) => {
        this.setState({selected: e.target.getAttribute('name')});
        window.scrollTo({top: isMobile() ? 200 : 500, behavior: 'smooth'});
    };
    
    onBPClick = (e) => {
        this.setState({selected: 'home'});
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    onAutoNoClick = (e) => e.stopPropagation();
    
    onAutoClick = (e) => {
        e.stopPropagation();
        this.setState({auto: !this.state.auto});
    };
    
    componentDidMount() {
        setTimeout(() => this.setState({opaque: 1}));
    }
    
    render() {
        const {
            opaque,
            selected
        } = this.state;
        
        return <Fragment>
            <div className={'app'} style={{opacity: opaque}}>
                <div className={'header'}>
                    <div className={'logo'}/>
            
                    <div
                       className={'app-name'}
                       onClick={this.onBPClick}
                    >
                        BAYBAYIN PILIPINAS
                    </div>
            
                    <div className={'social'}>
                        <SocialMediaLinks iconSize={23}/>
                    </div>
                </div>
                <div className={'content'}>
                    <div className={'media-carousel'}>
                        <ImageSlider images={carouselImages}/>
                    </div>
            
                    <div className={'page-content'} style={{
                        minHeight: window.innerHeight
                    }}>
                        <div className={'menu'}>
                            <ul>
                                <li
                                   name={'home'}
                                   className={selected === 'home' ? 'selected' : ''}
                                   onClick={this.onMenuClick}
                                >
                                    Home
                                </li>
                        
                                <li
                                   name={'translator'}
                                   className={selected === 'translator' ? 'selected' : ''}
                                   onClick={this.onMenuClick}
                                >
                                    Baybayin Keyboard & Translator
                                    <span>
                                    <span
                                       style={{float: 'right'}}
                                       title={'keyboard assist on/off'}
                                       onClick={this.onAutoClick}
                                    >
                                    auto
                                </span>
                                <input
                                   type={'checkbox'}
                                   style={{float: 'right'}}
                                   title={'keyboard assist on/off'}
                                   onChange={this.onAutoClick}
                                   onClick={this.onAutoNoClick}
                                   checked={this.state.auto}
                                />
                                </span>
                                </li>
                        
                                <li
                                   name={'about'}
                                   className={selected === 'about' ? 'selected' : ''}
                                   onClick={this.onMenuClick}
                                >
                                    About
                                </li>
                            </ul>
                            <div className={'youtube-videos'}>
                                {
                                    youtubeLinks.map((v, i) => <iframe key={i} title={v.title} width="100%" src={v.url}/>)
                                }
                            </div>
                        </div>
                
                        <div ref={node => this.node = node} className={'content-area'}>
                            {
                                selected === 'about' ?
                                   <About/> :
                                   selected === 'translator' ?
                                      <BaybayinTranslator autoAssist={this.state.auto}/> :
                                      <HomeTiles data={homeItems}/>
                            }
                        </div>
                    </div>
                </div>
                <div className={'footer'}>
                    &copy;&nbsp;Copyright Baybayin Pilipinas { new Date().getFullYear() }. All rights reserved.
                </div>
            </div>
            <ReactTooltip html={true} />
        </Fragment>
    }
}