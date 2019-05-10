import React from 'react';
import "./About.scss";
import UnderConstruction from "../UnderConstruction/UnderConstruction";

export default class About extends React.Component {
    state = {
        writing: 'baybayin',
        language: 'tagalog'
    };
    
    ___allAbout = {
        baybayin: {
            tagalog: {
                title: 'ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜉᜒᜎᜒᜉᜒᜈᜐ᜔',
                subtitle: 'ᜃᜓᜎᜒᜃ᜔ᜐ᜔ᜌᜓᜈ᜔ ᜅ᜔ ᜋ᜔ᜄ ᜉᜃ᜔ᜐ ᜆᜓᜅ᜔ᜃᜓᜎ᜔ ᜐ ᜊᜌ᜔ᜊᜌᜒᜈ᜔. ᜋ᜔ᜄ ᜀᜍ᜔ᜆᜒᜃᜓᜎᜓ ᜂ ᜊᜎᜒᜆ ᜋᜓᜎ ᜐ ᜋᜍᜋᜒᜅ᜔ ᜋ᜔ᜄ ᜋᜉᜄ᜔ᜃᜓᜃᜓᜈᜈ᜔.',
                p1: 'ᜀᜅ᜔ ᜐᜌ᜔ᜆ᜔ ᜈ ᜁᜆᜓ ᜀᜌ᜔ ᜈᜄ᜔-ᜀᜀᜎᜓᜃ᜔ ᜇᜒᜈ᜔ ᜅ᜔ ᜁᜐᜅ᜔ ᜋᜊᜒᜎᜒᜐᜅ᜔ ᜆᜄᜐᜎᜒᜈ᜔ ᜐ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜈ ᜋᜌ᜔ ᜃᜆᜓᜋ᜔ᜉᜃᜅ᜔ ᜇᜒᜉᜒᜈ᜔ᜇᜒ ᜐ ᜃᜏᜐ᜔ᜆᜓᜑᜈ᜔ ᜅ᜔ ᜁᜌᜓᜅ᜔ ᜐᜎᜒᜆ ᜂ ᜉᜅᜓᜅᜓᜐᜉ᜔. ᜄᜌᜓᜈ᜔ᜉᜋᜈ᜔, ᜑᜓᜏᜄ᜔ ᜃᜎᜒᜋᜓᜆᜈ᜔ ᜈ ᜐ ᜊᜌ᜔ᜊᜌᜒᜈ᜔, "ᜁᜐᜓᜎᜆ᜔ ᜁᜆᜓ ᜃᜓᜅ᜔ ᜉᜀᜈᜓ ᜋᜓ ᜈᜍᜒᜈᜒᜄ᜔ ᜀᜅ᜔ ᜉᜄ᜔ᜊᜒᜄ᜔ᜃᜐ᜔ ᜈᜒᜆᜓ."'
            }
        },
        roman: {
            tagalog: {
                title: 'Baybayin Pilipinas',
                subtitle: 'Koleksyon ng mga paksa tungkol sa baybayin. Mga artikulo o balita mula sa maraming mga mapagkukunan.',
                p1: 'Ang site na ito ay nag-aalok din ng isang mabilisang tagasalin sa baybayin na may katumpakang depende sa kawastuhan ng iyong salita o pangungusap. Gayunpaman, huwag kalimutan na sa baybayin, "Isulat ito kung paano mo narinig ang pagbigkas nito."'
            },
            english: {
                title: 'Baybayin Philippines',
                subtitle: 'A collection of baybayin related topics. Articles, blogs or news from multiple sources.',
                p1: 'This site also offers an on the fly baybayin translator with accuracy depending on the accuracy of your word or sentence.  Do take note that in baybayin, "Spell it how you pronounce it."'
            }
        }
    };
    
    toggleWritingSystem = (e) => {
        e.preventDefault();
        
        if (e.target.className.match(/selected|disabled/)) return;
        
        const system = e.target.dataset.name;
        let thisState = {
            writing: system
        };
        
        if (system === 'baybayin') thisState.language = 'tagalog';
        
        this.setState(thisState)
    };
    
    toggleLanguage = (e) => {
        e.preventDefault();
        
        if (e.target.className.match(/selected|disabled/)) return;
        this.setState({language: e.target.dataset.name})
    };
    
    render() {
        const {
            writing,
            language
        } = this.state;
        
        return <div className={'about'}>
            <div className={'language-settings'}>
                <span>Writing System:</span>
                
                <span
                    data-name="baybayin"
                    className={`btn${writing === 'baybayin' ? ' selected' : ''}`}
                    onClick={this.toggleWritingSystem}
                >
                    Baybayin
                </span>
                
                <span
                    data-name="roman"
                    className={`btn${writing === 'roman' ? ' selected' : ''}`}
                    onClick={this.toggleWritingSystem}
                >
                    Roman/Latin
                </span>
                
                <span>&nbsp;&nbsp;&nbsp;Language:</span>
                
                <span
                    data-name="tagalog"
                    className={`btn${language === 'tagalog' ? ' selected' : ''}`}
                    onClick={this.toggleLanguage}
                >
                    Tagalog
                </span>
                
                <span
                    data-name="english"
                    className={`btn${language === 'english' ? ' selected' : ''}${writing === 'baybayin' ? ' disabled' : ''}`}
                    onClick={this.toggleLanguage}
                >
                    English
                </span>
            </div>
            
            <h1 className={'title'}>{this.___allAbout[writing][language].title}</h1>
            <div className={'subtitle'}>{this.___allAbout[writing][language].subtitle}</div>
            <div className={'p1'}>{this.___allAbout[writing][language].p1}</div>
            <br/>
            <div className={'uc'}/>
        </div>;
    }
}