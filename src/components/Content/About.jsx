import React from 'react';
import "./About.scss";

export default class About extends React.Component {
    state = {
        writing: 'baybayin',
        language: 'tagalog'
    };
    
    ___allAbout = {
        baybayin: {
            tagalog: {
                title: 'ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜉᜒᜎᜒᜉᜒᜈᜐ᜔',
                subtitle: 'ᜁᜐᜅ᜔ ᜐᜌ᜔ᜆ᜔ ᜈ ᜈᜄ᜔ᜎᜎᜋᜈ᜔ ᜅ᜔ ᜋ᜔ᜄ ᜃᜓᜎᜒᜃ᜔ᜐ᜔ᜌᜓᜈ᜔ ᜅ᜔ ᜋ᜔ᜄ ᜉᜃ᜔ᜐ ᜆᜓᜅ᜔ᜃᜓᜎ᜔ ᜐ ᜊᜌ᜔ᜊᜌᜒᜈ᜔. ᜋ᜔ᜄ ᜀᜍ᜔ᜆᜒᜃᜓᜎᜓ ᜂ ᜊᜎᜒᜆ ᜋᜓᜎ ᜐ ᜋᜍᜋᜒᜅ᜔ ᜋ᜔ᜄ ᜋᜉᜄ᜔ᜃᜓᜃᜓᜈᜈ᜔.',
                p0: 'ᜀᜅ᜔ ᜐᜌ᜔ᜆ᜔ ᜈ ᜁᜆᜓ ᜀᜌ᜔ ᜈᜄ᜔-ᜀᜀᜎᜓᜃ᜔ ᜇᜒᜈ᜔ ᜅ᜔ ᜁᜐᜅ᜔ ᜋᜊᜒᜎᜒᜐᜅ᜔ ᜆᜄᜐᜎᜒᜈ᜔ ᜐ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜈ ᜋᜌ᜔ ᜃᜆᜓᜋ᜔ᜉᜃᜅ᜔ ᜇᜒᜉᜒᜈ᜔ᜇᜒ ᜐ ᜃᜏᜐ᜔ᜆᜓᜑᜈ᜔ ᜅ᜔ ᜁᜌᜓᜅ᜔ ᜐᜎᜒᜆ ᜂ ᜉᜅᜓᜅᜓᜐᜉ᜔. ᜄᜌᜓᜈ᜔ᜉᜋᜈ᜔, ᜑᜓᜏᜄ᜔ ᜃᜎᜒᜋᜓᜆᜈ᜔ ᜈ ᜐ ᜊᜌ᜔ᜊᜌᜒᜈ᜔, "ᜁᜐᜓᜎᜆ᜔ ᜀᜅ᜔ ᜐᜎᜒᜆ ᜃᜓᜅ᜔ ᜉᜀᜈᜓ ᜋᜓ ᜁᜆᜓ ᜊᜒᜄ᜔ᜃᜐᜒᜈ᜔"',
                h1: 'ᜀᜈᜓ ᜀᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔?',
                p1: 'ᜊᜌ᜔ᜊᜌᜒᜈ᜔ - ᜁᜐᜅ᜔ ᜐᜒᜈᜂᜈᜅ᜔ ᜋᜄᜈ᜔ᜇᜅ᜔ ᜉᜈᜓᜎᜆ᜔ ᜐ ᜉᜒᜎᜒᜉᜒᜈᜐ᜔. ᜋᜎᜒᜅ᜔ ᜈᜃᜒᜎᜎ ᜊᜒᜎᜅ᜔ "ᜀᜎᜒᜊᜆ". ᜀᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜀᜌ᜔ ᜁᜐᜅ᜔ ᜉᜅᜓᜈᜑᜒᜅ᜔ ᜊᜑᜄᜒ ᜅ᜔ ᜀᜆᜒᜅ᜔ ᜃᜓᜎ᜔ᜆᜓᜍ ᜀᜆ᜔ ᜁᜐᜅ᜔ ᜉᜋᜈ ᜐ ᜎᜓᜂᜊ᜔ ᜅ᜔ ᜋᜍᜋᜒᜅ᜔ ᜐᜒᜄ᜔ᜎᜓ. ᜁᜆᜓ ᜀᜅ᜔ ᜈᜄ᜔ᜊᜓᜃ᜔ᜎᜓᜇ᜔ ᜐ ᜀᜆᜒᜅ᜔ ᜋ᜔ᜄ ᜈᜒᜈᜓᜈᜓ ᜐ ᜉᜋᜋᜄᜒᜆᜈ᜔ ᜅ᜔ ᜉᜄ᜔ᜐᜓᜐᜓᜎᜆ᜔. ᜉᜄ᜔ᜊᜌ᜔ᜊᜌ᜔; ᜋᜓᜎ ᜐ ᜐᜎᜒᜆᜅ᜔ ᜊᜌ᜔ᜊᜌ᜔. ᜀᜅ᜔ ᜀᜆᜒᜅ᜔ ᜋ᜔ᜄ ᜈᜒᜈᜓᜈᜓ ᜀᜌ᜔ ᜄᜓᜋᜋᜒᜆ᜔ ᜅ᜔ ᜉᜈᜓᜎᜆ᜔ ᜈ ᜐᜍᜒᜎᜒᜅ᜔ ᜀᜆᜒᜈ᜔ ᜐ ᜉᜄ᜔ ᜉᜒᜍ᜔ᜋ ᜅ᜔ ᜋ᜔ᜄ ᜇᜓᜃᜓᜋᜒᜈ᜔ᜆᜓ, ᜉᜄ᜔ᜐᜓᜐᜓᜎᜆ᜔ ᜅ᜔ ᜆᜓᜎ ᜀᜆ᜔ ᜎᜒᜑᜋ᜔ ᜉᜍ ᜐ ᜁᜐ\'ᜆ᜔ ᜁᜐ. ᜁᜆᜓ ᜀᜌ᜔ ᜁᜐᜅ᜔ ᜂᜍᜒ ᜅ᜔ ᜃᜓᜋᜓᜈᜒᜃᜐ᜔ᜌᜓᜈ᜔ ᜈ ᜋᜒᜈ᜔ᜐᜈ᜔ ᜈ ᜈᜆᜒᜅ᜔ ᜄᜒᜈᜋᜒᜆ᜔ ᜐ ᜀᜍᜏ᜔-ᜀᜍᜏ᜔ ᜀᜆ᜔ ᜁᜄᜒᜈᜄᜎᜅ᜔ ᜈᜅ᜔ ᜋ᜔ᜄ ᜊᜈ᜔ᜌᜄ ᜈ ᜈᜓᜂᜌ᜔ ᜈᜉᜇ᜔ᜉᜇ᜔ ᜐ ᜀᜆᜒᜅ᜔ ᜊᜌᜈ᜔. ᜁᜐᜅ᜔ ᜉᜄ᜔ᜐᜐᜇ᜔ ᜅ᜔ ᜁᜐᜅ᜔ ᜉᜇ᜔ᜍᜒ ᜆ᜔ᜐᜒᜍᜒᜈᜓ. ᜈᜓᜂᜅ᜔ ᜆᜂᜅ᜔ ᜁᜐᜅ᜔ ᜎᜒᜊᜓ, ᜀᜈᜒᜋ᜔ ᜈ ᜍᜀᜈ᜔ ᜀᜆ᜔ ᜀᜉᜆ᜔ ᜋᜓᜎ ᜐ ᜃᜈ᜔ᜌᜅ᜔ ᜀᜃ᜔ᜎᜆ᜔ ᜈ ᜉᜒᜈᜋᜄᜆᜅ᜔ ᜍᜒᜎᜐ᜔ᜌᜓᜈ᜔ ᜇᜒ ᜎᜐ᜔ ᜁᜐ᜔ᜎᜐ᜔ ᜉᜒᜎᜒᜉᜒᜈᜐ᜔:',
                p1dot1: 'ᜀᜅ᜔ ᜎᜑᜆ᜔ ᜅ᜔ ᜋ᜔ᜄ ᜁᜐ᜔ᜎᜅ᜔ ᜁᜆᜓ ᜀᜌ᜔ ᜊᜒᜑᜐ ᜐ ᜉᜄ᜔ᜊᜊᜐ ᜀᜆ᜔ ᜉᜄ᜔ᜐᜓᜐᜓᜎᜆ᜔ ᜀᜆ᜔ ᜑᜎᜓᜐ᜔ ᜏᜎᜅ᜔ ᜁᜐᜅ᜔ ᜎᜎᜃᜒ, ᜂ ᜃᜑᜒᜆ᜔ ᜁᜐᜅ᜔ ᜊᜊᜁ, ᜈ ᜑᜒᜈ᜔ᜇᜒ ᜈᜄ᜔ᜊᜊᜐ ᜂ ᜈᜃᜐᜓᜎᜆ᜔ ᜐ ᜋ᜔ᜄ ᜆᜒᜆᜒᜃ᜔ ᜈ ᜄᜒᜈᜋᜒᜆ᜔ ᜐ ᜁᜐ᜔ᜎ ᜅ᜔ ᜋᜌ᜔ᜈᜒᜎ - ᜈ ᜎᜓᜊᜓᜐ᜔ ᜈ ᜈᜁᜁᜊ ᜋᜓᜎ ᜐ ᜋ᜔ᜄ ᜆ᜔ᜐᜒᜈ, ᜑᜉᜓᜈ᜔, ᜀᜆ᜔ ᜁᜈ᜔ᜇ᜔ᜌ.  ᜋᜃᜒᜃᜒᜆ ᜁᜆᜓ ᜋᜓᜎ ᜐ ᜋ᜔ᜄ ᜀᜎ᜔ᜉᜊᜒᜆᜓ ᜈᜒᜆᜓ. - "ᜀᜅ᜔ ᜀᜋᜒᜅ᜔ ᜉᜈ᜔ᜎᜊᜐ᜔ ᜈ ᜃᜄᜈ᜔ᜇᜑᜈ᜔ ᜀᜌ᜔ ᜈᜃᜒᜃᜒᜆ ᜀᜅ᜔ ᜀᜋᜒᜅ᜔ ᜉᜈ᜔ᜎᜓᜂᜊ᜔ ᜈ ᜃᜄᜈ᜔ᜇᜑᜈ᜔" - ᜉᜏ᜔ᜎᜓ ᜃᜓᜁᜎᜓ',
                p2: 'ᜊᜒᜎᜅ᜔ ᜁᜐᜅ᜔ ᜉᜒᜎᜒᜉᜒᜈᜓ, ᜁᜆᜓ ᜀᜌ᜔ ᜀᜃᜒᜅ᜔ ᜃᜐᜒᜌᜑᜈ᜔ ᜈ ᜌᜃᜉᜒᜈ᜔ ᜀᜅ᜔ ᜑᜎᜓᜐ᜔ ᜈᜃᜎᜒᜋᜓᜆᜈ᜔ ᜈ ᜉᜈᜓᜎᜆ᜔ ᜈ ᜁᜆᜓ. ᜈᜆᜓᜆᜓ ᜀᜃᜓᜅ᜔ ᜋᜄ᜔ᜊᜐ ᜀᜆ᜔ ᜋᜄ᜔ᜐᜓᜎᜆ᜔ ᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜅ᜔ ᜏᜎ ᜉᜅ᜔ ᜁᜐᜅ᜔ ᜀᜍᜏ᜔, ᜀᜅ᜔ ᜀᜃᜒᜅ᜔ ᜀᜈᜃ᜔ ᜈ ᜊᜊᜁ ᜀᜌ᜔ ᜈᜆᜓᜆᜓ ᜈᜒᜆᜓ ᜅ᜔ ᜏᜎ ᜉᜅ᜔ ᜇᜎᜏᜅ᜔ ᜂᜍᜐ᜔. ᜀᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔, ᜑᜒᜈ᜔ᜇᜒ ᜋᜈ᜔ ᜋᜀᜀᜍᜒᜅ᜔ ᜄᜈᜉ᜔ ᜈ ᜋᜆᜓᜋ᜔ᜊᜐᜈ᜔ ᜀᜅ᜔ ᜏᜒᜃ ᜑᜊᜅ᜔ ᜈᜄ᜔ᜊᜊᜄᜓ ᜋᜓᜎ ᜉ ᜈᜓᜂᜈ᜔, ᜅᜓᜈᜒᜆ᜔ ᜁᜆᜓ ᜀᜌ᜔ ᜆᜒᜌᜃ᜔ ᜈ ᜁᜐᜅ᜔ ᜊᜑᜄᜒ ᜅ᜔ ᜀᜆᜒᜅ᜔ ᜃᜓᜎ᜔ᜆᜓᜍ ᜈ ᜎᜎᜓᜅ᜔ ᜋᜄ᜔ᜆᜆᜆᜄ᜔ ᜅ᜔ ᜀᜆᜒᜅ᜔ ᜐᜓᜊᜒᜍᜈ᜔ᜌ ᜊᜒᜎᜅ᜔ ᜁᜐᜅ᜔ ᜃᜓᜋᜓᜈᜒᜇᜇ᜔ ᜀᜆ᜔ ᜁᜐᜅ᜔ ᜊᜈ᜔ᜐ.'
            }
        },
        roman: {
            
            tagalog: {
                title: 'Baybayin Pilipinas',
                subtitle: 'Isang site na naglalaman ng mga koleksyon ng mga paksa tungkol sa baybayin. Mga artikulo o balita mula sa maraming mga mapagkukunan.',
                p0: 'Ang site na ito ay nag-aalok din ng isang mabilisang tagasalin sa baybayin na may katumpakang depende sa kawastuhan ng iyong salita o pangungusap. Gayunpaman, huwag kalimutan na sa baybayin, "Isulat ang salita kung paano mo ito bigkasin"',
                h1: 'Ano ang Baybayin?',
                p1: 'Baybayin - Isang sinaunang magandang panulat sa Pilipinas.  Maling nakilala bilang "Alibata".  Ang baybayin ay isang pangunahing bahagi ng ating kultura at isang pamana sa loob ng maraming siglo.  Ito ang nagboklod sa ating mga ninuno sa pamamagitan ng pagsusulat.  Pagbaybay;  Mula sa salitang Baybay.  Ang ating mga ninuno ay gumamit ng panulat na sariling atin sa pag pirma ng mga dokumento, pagsusulat ng tula at liham para sa isa\'t isa.  Ito ay isang uri ng komunikasyon na minsan na nating ginamit sa araw-araw at iginagalang nang mga banyaga na nooy napadpad sa ating bayan.  Isang pagsasad ng isang Padre Chirino, S.J. noong taong isang libo, anim na raan at apat mula sa kanyang aklat na pinamagatang Relacion de las Islas Filipinas:',
                p1dot1: 'Ang lahat ng mga islang ito ay bihasa sa pagbabasa at pagsusulat at halos walang isang lalaki, o kahit isang babae, na hindi nagbabasa o nakasulat sa mga titik na ginamit sa isla ng Maynila - na lubos na naiiba mula sa mga Tsina, Hapon, at Indya.  Makikita ito mula sa mga alpabeto nito. - "Ang aming panlabas na kagandahan ay nakikita ang aming panloob na kagandahan" - Paulo Coehlo',
                p2: 'Bilang isang Pilipino, ito ay aking kasiyahan na yakapin ang halos nakalimutan na panulat na ito. Natuto akong magbasa at magsulat ng baybayin ng wala pang isang araw, ang aking anak na babae ay natoto nito ng wala pang dalawang oras. Ang Baybayin, hindi man maaaring ganap na matumbasan ang wika habang nagbabago mula pa noon, ngunit ito ay tiyak na isang bahagi ng ating kultura na lalong magtatatag ng ating soberanya bilang isang komunidad at isang bansa.'
            },
            english: {
                title: 'Baybayin Philippines',
                subtitle: 'A site that contains collection of baybayin related topics. Articles, blogs or news from multiple sources.',
                p0: 'This site also offers an on-the-fly baybayin translator with accuracy depending on the accuracy of your word or sentence.  Do take note that in baybayin, "Spell it how you pronounce it."',
                h1: 'What is Baybayin?',
                p1: 'Baybayin – The pre-colonial beautiful ancient writing script of the Islands of the Philippines.  Incorrectly known as “Alibata”.  Baybayin has been a core part of our culture and heritage for centuries.  It has been the soul interconnecting our ancestors through writing. To spell; rooted from the word Baybay.  Our ancestors used our very own writing script to sign documents, write poetries, communicate, and write letters to one another. It was a form of communication that we once utilized in our every day lives and was very well respected by the explorers who came to our islands. One account of a Fr. Pedro Chirino, S.J. in 1604, from his book called the Relacion de las Islas Filipinas stated:',
                p1dot1: '“All these islands are much given to reading and writing and there is hardly a man, and much less woman, who does not read or write in the letters used in the island of Manila – which entirely different from those of China, Japan, and India. This will be seen from its alphabets.” – “Our outer beauty is our inner beauty made visible” – Paulo Coehlo',
                p2: 'Being a Filipino, it is my pleasure to embrace this almost forgotten writing system of our own.  I have learned to read and write baybayin in less than a day, my daughter have it in less than 2 hours.  Baybayin may not be able to fully compensate the language as it evolves since then, but it is surely a part of our culture that will further establish our sovereignty as a people and a nation.'
                
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
                
                <span className={'lang'}>&nbsp;&nbsp;&nbsp;Language:</span>
                
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
            <p className={'p0'}>{this.___allAbout[writing][language].p0}</p>
            <h3 className={'h1'}>{this.___allAbout[writing][language].h1}</h3>
            <p className={'p1'}>{this.___allAbout[writing][language].p1}</p>
            <p className={'p1dot1'}>{this.___allAbout[writing][language].p1dot1}</p>
            <div className={'bc'}/>
            <p className={'p2'}>{this.___allAbout[writing][language].p2}</p>
        </div>;
    }
}