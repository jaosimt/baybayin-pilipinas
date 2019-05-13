import React from 'react';
import './app.scss';
import SocialMediaLinks from "./components/SocialMediaLinks/SocialMediaLinks";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import {carouselImages, homeItems} from "./data";
import HomeTiles from "./components/Content/HomeTiles/HomeTiles";
import About from "./components/Content/About";
import BaybayinTranslator from "./components/Content/BaybayinTranslator";

export default class App extends React.Component {
    state = {
        opaque: 0,
        selected: 'home'
    };
    
    onMenuClick = (e) => {
        if (this.node) {
            console.log(this.node);
        }
        
        this.setState({selected: e.target.getAttribute('name')})
    };
    
    componentDidMount() {
        setTimeout(() => this.setState({opaque: 1}));
    }
    
    render() {
        const {
            opaque,
            selected
        } = this.state;
        
        return <div className={'app'} style={{opacity: opaque}}>
            <div className={'header'}>
                <div className={'logo'}/>
                <div className={'app-name'}>BAYBAYIN PILIPINAS</div>
                <div className={'social'}>
                    <SocialMediaLinks iconSize={23}/>
                </div>
            </div>
            <div className={'content'}>
                <div className={'media-carousel'}>
                    <ImageSlider images={carouselImages}/>
                </div>
                
                <div ref={node => this.node = node} className={'page-content'} style={{
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
                                Baybayin Translator
                            </li>
                            
                            <li
                                name={'about'}
                                className={selected === 'about' ? 'selected' : ''}
                                onClick={this.onMenuClick}
                            >
                                About
                            </li>
                        </ul>
                    </div>
                    
                    <div className={'content-area'}>
                        {
                            selected === 'about' ?
                                <About/> :
                                selected === 'translator' ?
                                    <BaybayinTranslator/> :
                                    <HomeTiles data={homeItems}/>
                        }
                    </div>
                </div>
            </div>
            <div className={'footer'}>
                &copy;&nbsp;Copyright Baybayin Pilipinas 2019. All rights reserved.
            </div>
        </div>
    }
}