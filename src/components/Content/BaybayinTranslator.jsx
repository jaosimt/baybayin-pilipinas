import React from 'react';
import './BaybayinTranslator.scss';
import {isMobile} from "../../utils";
import kudlitE from './kudlit-e.png';
import kudlitI from './kudlit-i.png';
import kudlitO from './kudlit-o.png';
import kudlitU from './kudlit-u.png';
import virama from './virama.png';
import PropTypes from 'prop-types';

export default class BaybayinTranslator extends React.Component {
    constructor(props) {
        super(props);
        
        this.componentKeyDownHandler.bind(this);
        this.componentKeyUpHandler.bind(this);
        
        this.___bybyn = {
            a: 'ᜀ',
            e: 'ᜁ',
            i: 'ᜁ',
            o: 'ᜂ',
            u: 'ᜂ',
            
            b: 'ᜊ᜔',
            ba: 'ᜊ',
            be: 'ᜊᜒ',
            bi: 'ᜊᜒ',
            bo: 'ᜊᜓ',
            bu: 'ᜊᜓ',
            
            k: 'ᜃ᜔',
            ka: 'ᜃ',
            ke: 'ᜃᜒ',
            ki: 'ᜃᜒ',
            ko: 'ᜃᜓ',
            ku: 'ᜃᜓ',
            
            d: 'ᜇ᜔',
            da: 'ᜇ',
            de: 'ᜇᜒ',
            di: 'ᜇᜒ',
            do: 'ᜇᜓ',
            du: 'ᜇᜓ',
            
            g: 'ᜄ᜔',
            ga: 'ᜄ',
            ge: 'ᜄᜒ',
            gi: 'ᜄᜒ',
            go: 'ᜄᜓ',
            gu: 'ᜄᜓ',
            
            h: 'ᜑ᜔',
            ha: 'ᜑ',
            he: 'ᜑᜒ',
            hi: 'ᜑᜒ',
            ho: 'ᜑᜓ',
            hu: 'ᜑᜓ',
            
            l: 'ᜎ᜔',
            la: 'ᜎ',
            le: 'ᜎᜒ',
            li: 'ᜎᜒ',
            lo: 'ᜎᜓ',
            lu: 'ᜎᜓ',
            
            m: 'ᜋ᜔',
            ma: 'ᜋ',
            me: 'ᜋᜒ',
            mi: 'ᜋᜒ',
            mo: 'ᜋᜓ',
            mu: 'ᜋᜓ',
            
            n: 'ᜈ᜔',
            na: 'ᜈ',
            ne: 'ᜈᜒ',
            ni: 'ᜈᜒ',
            no: 'ᜈᜓ',
            nu: 'ᜈᜓ',
            
            ng: 'ᜅ᜔',
            nga: 'ᜅ',
            nge: 'ᜅᜒ',
            ngi: 'ᜅᜒ',
            ngo: 'ᜅᜓ',
            ngu: 'ᜅᜓ',
            
            p: 'ᜉ᜔',
            pa: 'ᜉ',
            pe: 'ᜉᜒ',
            pi: 'ᜉᜒ',
            po: 'ᜉᜓ',
            pu: 'ᜉᜓ',
            
            r: 'ᜍ᜔',
            ra: 'ᜍ',
            re: 'ᜍᜒ',
            ri: 'ᜍᜒ',
            ro: 'ᜍᜓ',
            ru: 'ᜍᜓ',
            
            s: 'ᜐ᜔',
            sa: 'ᜐ',
            se: 'ᜐᜒ',
            si: 'ᜐᜒ',
            so: 'ᜐᜓ',
            su: 'ᜐᜓ',
            
            t: 'ᜆ᜔',
            ta: 'ᜆ',
            te: 'ᜆᜒ',
            ti: 'ᜆᜒ',
            to: 'ᜆᜓ',
            tu: 'ᜆᜓ',
            
            w: 'ᜏ᜔',
            wa: 'ᜏ',
            we: 'ᜏᜒ',
            wi: 'ᜏᜒ',
            wo: 'ᜏᜓ',
            wu: 'ᜏᜓ',
            
            y: 'ᜌ᜔',
            ya: 'ᜌ',
            ye: 'ᜌᜒ',
            yi: 'ᜌᜒ',
            yo: 'ᜌᜓ',
            yu: 'ᜌᜓ',
            
            c: 'c',
            f: 'f',
            j: 'j',
            q: 'q',
            v: 'v',
            x: 'x',
            z: 'z'
        };
        
        this.___ynbyby = {
            "ᜂ": "[o/u]",
            "ᜁ": "[i/e]",
            "ᜀ": "a",
            
            "ᜊᜓ": "b[o/u]",
            "ᜊᜒ": "b[i/e]",
            "ᜊ᜔": "b",
            "ᜊ": "ba",
            
            "ᜃᜓ": "k[o/u]",
            "ᜃᜒ": "k[i/e]",
            "ᜃ᜔": "k",
            "ᜃ": "ka",
            
            "ᜇᜓ": "d[o/u]",
            "ᜇᜒ": "d[i/e]",
            "ᜇ᜔": "d",
            "ᜇ": "da",
            
            "ᜄᜓ": "g[o/u]",
            "ᜄᜒ": "g[i/e]",
            "ᜄ᜔": "g",
            "ᜄ": "ga",
            
            "ᜑᜓ": "h[o/u]",
            "ᜑᜒ": "h[i/e]",
            "ᜑ᜔": "h",
            "ᜑ": "ha",
            
            "ᜎᜓ": "l[o/u]",
            "ᜎᜒ": "l[i/e]",
            "ᜎ᜔": "l",
            "ᜎ": "la",
            
            "ᜋᜓ": "m[o/u]",
            "ᜋᜒ": "m[i/e]",
            "ᜋ᜔": "m",
            "ᜋ": "ma",
            
            "ᜈᜓ": "n[o/u]",
            "ᜈᜒ": "n[i/e]",
            "ᜈ᜔": "n",
            "ᜈ": "na",
            
            "ᜅᜓ": "ng[o/u]",
            "ᜅᜒ": "ng[i/e]",
            "ᜅ᜔": "ng",
            "ᜅ": "nga",
            
            "ᜉᜓ": "p[o/u]",
            "ᜉᜒ": "p[i/e]",
            "ᜉ᜔": "p",
            "ᜉ": "pa",
            
            "ᜍᜓ": "r[o/u]",
            "ᜍᜒ": "r[i/e]",
            "ᜍ᜔": "r",
            "ᜍ": "ra",
            
            "ᜐᜓ": "s[o/u]",
            "ᜐᜒ": "s[i/e]",
            "ᜐ᜔": "s",
            "ᜐ": "sa",
            
            "ᜆᜓ": "t[o/u]",
            "ᜆᜒ": "t[i/e]",
            "ᜆ᜔": "t",
            "ᜆ": "ta",
            
            "ᜏᜓ": "w[o/u]",
            "ᜏᜒ": "w[i/e]",
            "ᜏ᜔": "w",
            "ᜏ": "wa",
            
            "ᜌᜓ": "y[o/u]",
            "ᜌᜒ": "y[i/e]",
            "ᜌ᜔": "y",
            "ᜌ": "ya"
        };
        
        this.previewMessage = `${isMobile() ? '↑↑↑' : '← ← ←'} type or paste something there<br/>and see the translation here. ↓↓↓<br/><br/><i style="color: #ff00ff"><b>Note:</b><br/>This is an assisted and automatic translator as you type.  No need to worry on the convention of typing on a baybayin keyboard.  Just type normally as you would.</i>`;
        this.manualKeyboardMessage = `<i style="color: #ff00ff"><b>Note:</b><br/>Follow typing pattern to/off characters indicated on the keyboard.</i>`;
        
        this.state = {
            baybayin: '',
            translation: this.props.autoAssist ? this.previewMessage : this.manualKeyboardMessage,
            simplify: true,
            capslock: false,
            shift: false
        };
    }
    
    componentKeyDownHandler = ({keyCode}) => {
        //console.log('keyDown', keyCode);
        if (keyCode === 20) {
            this.setState({capslock: true});
        } else if (keyCode === 16) {
            this.setState({shift: true});
        }
    };
    
    componentKeyUpHandler = ({keyCode}) => {
        //console.log('keyUp', keyCode);
        if (keyCode === 20) {
            this.setState({capslock: false});
        } else if (keyCode === 16) {
            this.setState({shift: false});
        }
    };
    
    onTextAreaChange = (e) => {
        if (this.props.autoAssist) {
            e.target.value = e.target.value.toLowerCase()
                .replace(/(ᜊ᜔|ᜃ᜔|ᜇ᜔|ᜄ᜔|ᜑ᜔|ᜎ᜔|ᜋ᜔|ᜈ᜔|ᜅ᜔|ᜉ᜔|ᜍ᜔|ᜐ᜔|ᜆ᜔|ᜏ᜔|ᜌ᜔)([aieoug])/igm, (x, y, z) => {
                    return this.___bybyn[this.___ynbyby[y] + z] || x
                })
                .replace(/ng([aieou])*/igm, (x) => {
                    return this.___bybyn[x] || x;
                })
                .replace(/([bkdghlmnprstwy])([aieou])/igm, (x) => {
                    return this.___bybyn[x] || x;
                })
                .replace(/[a-z]/igm, (x) => {
                    return this.___bybyn[x] || x;
                });
            
            this.setState({
                baybayin: e.target.value,
                translation: this.translate(e.target.value) || this.previewMessage
            })
        } else {
            e.target.value = e.target.value
                .replace(/N/gm, this.___bybyn['nga'])
                .replace(/([bkdghlmnprstwy])/gm, (x) => {
                    return this.___bybyn[x+'a'] || x;
                })
                .replace(/([ᜊᜃᜇᜄᜑᜎᜋᜈᜅᜉᜍᜐᜆᜏᜌ])([aieoug])/gm, (x, y, z) => {
                    return this.___bybyn[this.___ynbyby[y].replace(/[aeiou]/gm, '') + z] || x
                })
                .replace(/([ᜊᜃᜇᜄᜑᜎᜋᜈᜅᜉᜍᜐᜆᜏᜌ])(=)/gm, (x, y, z) => {
                    return this.___bybyn[this.___ynbyby[y].replace(/[aeiou]/gm, '')] || x
                });
    
            this.setState({
                baybayin: e.target.value,
                translation: (this.translate(e.target.value) || this.manualKeyboardMessage).toLowerCase()
            })
        }
    };
    
    translate = (str, normalize) => {
        str = str.toString();
        if (str.trim() === '') return;
        
        for (let b in this.___ynbyby) {
            if (this.___ynbyby.hasOwnProperty(b)) str = str.replace(new RegExp(b, 'igm'), this.___ynbyby[b]);
        }
        
        return ((normalize === true || this.state.simplify.checked) ? str.replace(/\[e\/i\]/g, 'i').replace(/\[o\/u\]/g, 'o') : str).replace(/(\[\w\/\w\])/gm, "<span class='dimmed'>$1</span>").replace(/\n/gm, '<br/>');
    };
    
    onCapslockClick = () => this.setState({capslock: !this.state.capslock, shift: false});
    onShiftClick = () => this.setState({shift: !this.state.shift});
    
    onKeyClick = (e) => {
        const ds = e.currentTarget.dataset,
            {capslock, shift} = this.state;
        
        if (ds.up || ds.down) {
            this.textAreaNode.value += capslock || shift ? ds.up : ds.down;
            this.dispatchKeyPressEvent();
        }
    };
    
    onBackspaceClick = () => {
        const ta = this.textAreaNode.value;
        if (ta.length >= 1) {
            this.textAreaNode.value = this.textAreaNode.value.slice(0, this.textAreaNode.value.length - 1);
            this.dispatchKeyPressEvent();
        }
        
    };
    
    dispatchKeyPressEvent = () => {
        const evt = new Event("keyup", {bubbles: true, cancelable: false});
        this.textAreaNode.dispatchEvent(evt);
        
        if (this.state.shift) this.setState({shift: !this.state.shift});
    };
    
    componentDidMount() {
        if (this.textAreaNode) this.textAreaNode.focus();
        document.addEventListener('keydown', this.componentKeyDownHandler, false);
        document.addEventListener('keyup', this.componentKeyUpHandler, false);
    };
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.componentKeyDownHandler, false);
        document.removeEventListener('keyup', this.componentKeyUpHandler, false);
    }
    
    render() {
        const leftBracket = '{';
        const rightBracket = '}';
        const {
            capslock,
            shift
        } = this.state;
        
        return <div className={'baybayin-translator'}>
            <textarea
                ref={node => this.textAreaNode = node}
                defaultValue={this.state.baybayin}
                onKeyUp={this.onTextAreaChange}
            />
            
            <div className={'preview'} dangerouslySetInnerHTML={{__html: this.state.translation}}/>
            
            <div className={'info'}>
                <div className={'keyboard'}>
                    <div
                        className={'key-tilde'}
                        data-up='~'
                        data-down='`'
                        onClick={this.onKeyClick}
                    >
                        <div>~<span className={'pink-fg'}>ᜈ᜔ᜌ</span></div>
                        <div>`</div>
                    </div>
                    
                    <div
                        className={'key-1'}
                        data-up='!'
                        data-down='1'
                        onClick={this.onKeyClick}
                    >
                        <div>!</div>
                        <div>1</div>
                    </div>
                    
                    <div
                        className={'key-2'}
                        data-up='@'
                        data-down='2'
                        onClick={this.onKeyClick}
                    >
                        <div>@</div>
                        <div>2</div>
                    </div>
                    
                    <div
                        className={'key-3'}
                        data-up='#'
                        data-down='3'
                        onClick={this.onKeyClick}
                    >
                        <div>#</div>
                        <div>3</div>
                    </div>
                    
                    <div
                        className={'key-4'}
                        data-up='₱'
                        data-down='4'
                        onClick={this.onKeyClick}
                    >
                        <div>$<span className={'red-fg'}>₱</span></div>
                        <div>4</div>
                    </div>
                    
                    <div
                        className={'key-5'}
                        data-up='%'
                        data-down='5'
                        onClick={this.onKeyClick}
                    >
                        <div>%</div>
                        <div>5</div>
                    </div>
                    
                    <div
                        className={'key-6'}
                        data-up='^'
                        data-down='6'
                        onClick={this.onKeyClick}
                    >
                        <div>^</div>
                        <div>6</div>
                    </div>
                    
                    <div
                        className={'key-7'}
                        data-up='&'
                        data-down='7'
                        onClick={this.onKeyClick}
                    >
                        <div>&</div>
                        <div>7</div>
                    </div>
                    
                    <div
                        className={'key-8'}
                        data-up='*'
                        data-down='8'
                        onClick={this.onKeyClick}
                    >
                        <div>*</div>
                        <div>8</div>
                    </div>
                    
                    <div
                        className={'key-9'}
                        data-up='('
                        data-down='9'
                        onClick={this.onKeyClick}
                    >
                        <div>(</div>
                        <div>9</div>
                    </div>
                    
                    <div
                        className={'key-0'}
                        data-up=')'
                        data-down='0'
                        onClick={this.onKeyClick}
                    >
                        <div>)</div>
                        <div>0</div>
                    </div>
                    
                    <div
                        className={'key-dash'}
                        data-up='_'
                        data-down='-'
                        onClick={this.onKeyClick}
                    >
                        <div>_</div>
                        <div>-</div>
                    </div>
                    
                    <div
                        className={'key-equal'}
                        data-up='+'
                        data-down='='
                        onClick={this.onKeyClick}
                    >
                        <div>+</div>
                        <div>=<img alt='' src={virama}/></div>
                    
                    </div>
                    
                    <div
                        className={'key-backspace gray-bg'}
                        onClick={this.onBackspaceClick}
                    >
                        <div/>
                        <div>BackSpace</div>
                    </div>
                    
                    <div
                        className={'key-tab gray-bg'}
                    >
                        <div/>
                        <div>Tab</div>
                    </div>
                    
                    <div
                        className={'key-q'}
                        data-up='Q'
                        data-down='q'
                        onClick={this.onKeyClick}
                    >
                        <div>Q<span className={'pink-fg'}>ᜃ᜔ᜏ</span></div>
                        <div>q<span className={'pink-fg'}>ᜃᜓᜏ</span></div>
                    </div>
                    
                    <div
                        className={'key-w'}
                        data-up='W'
                        data-down='w'
                        onClick={this.onKeyClick}
                    >
                        <div>W</div>
                        <div>w<span className={'pink-fg'}>ᜏ</span></div>
                    </div>
                    
                    <div
                        className={'key-e'}
                        data-up='E'
                        data-down='e'
                        onClick={this.onKeyClick}
                    >
                        <div>E<span className={'pink-fg'}>ᜁ</span></div>
                        <div>e<img alt='' src={kudlitE}/></div>
                    </div>
                    
                    <div
                        className={'key-r'}
                        data-up='R'
                        data-down='r'
                        onClick={this.onKeyClick}
                    >
                        <div>R</div>
                        <div>r<span className={'pink-fg'}>ᜍ</span></div>
                    </div>
                    
                    <div
                        className={'key-t'}
                        data-up='T'
                        data-down='t'
                        onClick={this.onKeyClick}
                    >
                        <div>T</div>
                        <div>t<span className={'pink-fg'}>ᜆ</span></div>
                    </div>
                    
                    <div
                        className={'key-y'}
                        data-up='Y'
                        data-down='y'
                        onClick={this.onKeyClick}
                    >
                        <div>Y</div>
                        <div>y<span className={'pink-fg'}>ᜌ</span></div>
                    </div>
                    
                    <div
                        className={'key-u'}
                        data-up='U'
                        data-down='u'
                        onClick={this.onKeyClick}
                    >
                        <div>U<span className={'pink-fg'}>ᜂ</span></div>
                        <div>u<img alt='' src={kudlitU}/></div>
                    </div>
                    
                    <div
                        className={'key-i'}
                        data-up='I'
                        data-down='i'
                        onClick={this.onKeyClick}
                    >
                        <div>I<span className={'pink-fg'}>ᜁ</span></div>
                        <div>i<img alt='' src={kudlitI}/></div>
                    </div>
                    
                    <div
                        className={'key-o'}
                        data-up='O'
                        data-down='o'
                        onClick={this.onKeyClick}
                    >
                        <div>O<span className={'pink-fg'}>ᜂ</span></div>
                        <div>o<img alt='' src={kudlitO}/></div>
                    </div>
                    
                    <div
                        className={'key-p'}
                        data-up='P'
                        data-down='p'
                        onClick={this.onKeyClick}
                    >
                        <div>P</div>
                        <div>p<span className={'pink-fg'}>ᜉ</span></div>
                    </div>
                    
                    <div
                        className={'key-leftbracket'}
                        data-up='{'
                        data-down='['
                        onClick={this.onKeyClick}
                    >
                        <div>{leftBracket}</div>
                        <div>[</div>
                    </div>
                    
                    <div
                        className={'key-rightbracket'}
                        data-up={rightBracket}
                        data-down=']'
                        onClick={this.onKeyClick}
                    >
                        <div>}</div>
                        <div>]</div>
                    </div>
                    
                    <div
                        className={'key-backslash'}
                        data-up='|'
                        data-down='\'
                        onClick={this.onKeyClick}
                    >
                        <div>|</div>
                        <div>\</div>
                    </div>
                    
                    <div
                        className={'key-capslock gray-bg'}
                        onClick={this.onCapslockClick}
                    >
                        <div className={'capslight'} style={{color: capslock ? '#ff00ff' : '#fff'}}>•</div>
                        <div>Capslock</div>
                    </div>
                    
                    <div
                        className={'key-a'}
                        data-up='A'
                        data-down='a'
                        onClick={this.onKeyClick}
                    >
                        <div>A<span className={'pink-fg'}>ᜀ</span></div>
                        <div>a</div>
                    </div>
                    
                    <div
                        className={'key-s'}
                        data-up='S'
                        data-down='s'
                        onClick={this.onKeyClick}
                    >
                        <div>S</div>
                        <div>s<span className={'pink-fg'}>ᜐ</span></div>
                    </div>
                    
                    <div
                        className={'key-d'}
                        data-up='D'
                        data-down='d'
                        onClick={this.onKeyClick}
                    >
                        <div>D</div>
                        <div>d<span className={'pink-fg'}>ᜇ</span></div>
                    </div>
                    
                    <div
                        className={'key-f'}
                        data-up='F'
                        data-down='f'
                        onClick={this.onKeyClick}
                    >
                        <div>F</div>
                        <div>f<span className={'pink-fg'}>ᜉ</span></div>
                    </div>
                    
                    <div
                        className={'key-g'}
                        data-up='G'
                        data-down='g'
                        onClick={this.onKeyClick}
                    >
                        <div>G</div>
                        <div>g<span className={'pink-fg'}>ᜄ</span></div>
                    </div>
                    
                    <div
                        className={'key-h'}
                        data-up='H'
                        data-down='h'
                        onClick={this.onKeyClick}
                    >
                        <div>H</div>
                        <div>h<span className={'pink-fg'}>ᜑ</span></div>
                    </div>
                    
                    <div
                        className={'key-j'}
                        data-up='J'
                        data-down='j'
                        onClick={this.onKeyClick}
                    >
                        <div>J<span className={'pink-fg'}>ᜇ᜔ᜌ</span></div>
                        <div>j<span className={'pink-fg'}>ᜇᜒᜌ</span></div>
                    </div>
                    
                    <div
                        className={'key-k'}
                        data-up='K'
                        data-down='k'
                        onClick={this.onKeyClick}
                    >
                        <div>K</div>
                        <div>k<span className={'pink-fg'}>ᜃ</span></div>
                    </div>
                    
                    <div
                        className={'key-l'}
                        data-up='L'
                        data-down='l'
                        onClick={this.onKeyClick}
                    >
                        <div>L</div>
                        <div>l<span className={'pink-fg'}>ᜎ</span></div>
                    </div>
                    
                    <div
                        className={'key-colon'}
                        data-up=':'
                        data-down=';'
                        onClick={this.onKeyClick}
                    >
                        <div>:</div>
                        <div>;</div>
                    </div>
                    
                    <div
                        className={'key-quote'}
                        data-up='"'
                        data-down="'"
                        onClick={this.onKeyClick}
                    >
                        <div>"</div>
                        <div>'</div>
                    </div>
                    
                    <div
                        className={'key-enter gray-bg'}
                        data-up='
'
                        data-down='
'
                        onClick={this.onKeyClick}
                    >
                        <div/>
                        <div>Enter</div>
                    </div>
                    
                    <div
                        className={'key-leftshift gray-bg' + (shift ? ' pressed' : '')}
                        onClick={this.onShiftClick}
                    >
                        <div/>
                        <div>Shift</div>
                    </div>
                    
                    <div
                        className={'key-z'}
                        data-up='Z'
                        data-down='z'
                        onClick={this.onKeyClick}
                    >
                        <div>Z</div>
                        <div>z<span className={'pink-fg'}>ᜐ</span></div>
                    </div>
                    
                    <div
                        className={'key-x'}
                        data-up='X'
                        data-down='x'
                        onClick={this.onKeyClick}
                    >
                        <div>X</div>
                        <div>x<span className={'pink-fg'}>ᜃ᜔ᜐ</span></div>
                    </div>
                    
                    <div
                        className={'key-c'}
                        data-up='C'
                        data-down='c'
                        onClick={this.onKeyClick}
                    >
                        <div>C<span className={'pink-fg'}>ᜆ᜔ᜐ</span></div>
                        <div>c<span className={'pink-fg'}>ᜃ</span></div>
                    </div>
                    
                    <div
                        className={'key-v'}
                        data-up='V'
                        data-down='v'
                        onClick={this.onKeyClick}
                    >
                        <div>V</div>
                        <div>v</div>
                    </div>
                    
                    <div
                        className={'key-b'}
                        data-up='B'
                        data-down='b'
                        onClick={this.onKeyClick}
                    >
                        <div>B</div>
                        <div>b<span className={'pink-fg'}>ᜊ</span></div>
                    </div>
                    
                    <div
                        className={'key-n'}
                        data-up='N'
                        data-down='n'
                        onClick={this.onKeyClick}
                    >
                        <div>N<span className={'pink-fg'}>ᜅ</span></div>
                        <div>n<span className={'pink-fg'}>ᜈ</span></div>
                    </div>
                    
                    <div
                        className={'key-m'}
                        data-up='M'
                        data-down='m'
                        onClick={this.onKeyClick}
                    >
                        <div>M</div>
                        <div>m<span className={'pink-fg'}>ᜋ</span></div>
                    </div>
                    
                    <div
                        className={'key-comma'}
                        data-up='<'
                        data-down=','
                        onClick={this.onKeyClick}
                    >
                        <div>{"<"}</div>
                        <div>,</div>
                    </div>
                    
                    <div
                        className={'key-period'}
                        data-up='>'
                        data-down='.'
                        onClick={this.onKeyClick}
                    >
                        <div>{">"}</div>
                        <div>.</div>
                    </div>
                    
                    <div
                        className={'key-slash'}
                        data-up='?'
                        data-down='/'
                        onClick={this.onKeyClick}
                    >
                        <div>?</div>
                        <div>/</div>
                    </div>
                    
                    <div
                        className={'key-rightshift gray-bg' + (shift ? ' pressed' : '')}
                        onClick={this.onShiftClick}
                    >
                        <div/>
                        <div>Shift</div>
                    </div>
                    
                    <div
                        className={'key-leftctrl gray-bg'}
                    >
                        <div/>
                        <div>Control</div>
                    </div>
                    
                    <div
                        className={'key-empty1 gray-bg'}
                    />
                    <div
                        className={'key-leftalt gray-bg'}
                    >
                        <div/>
                        <div>Alt</div>
                    </div>
                    
                    <div
                        className={'key-spacebar'}
                        data-up=' '
                        data-down=' '
                        onClick={this.onKeyClick}
                    />
                    
                    <div
                        className={'key-rightalt gray-bg'}
                    >
                        <div/>
                        <div>Alt</div>
                    </div>
                    
                    <div
                        className={'key-empty2 gray-bg'}
                    />
                    
                    <div
                        className={'key-rightctrl gray-bg'}
                    >
                        <div/>
                        <div>Control</div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

BaybayinTranslator.propType = {
    autoAssist: PropTypes.bool
};

BaybayinTranslator.defaultProps = {
    autoAssist: true
};