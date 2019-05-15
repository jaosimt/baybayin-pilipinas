import React from 'react';
import './BaybayinTranslator.scss';
import {isMobile} from "../../utils";
import kudlitE from './kudlit-e.png';
import kudlitI from './kudlit-i.png';
import kudlitO from './kudlit-o.png';
import kudlitU from './kudlit-u.png';

export default class BaybayinTranslator extends React.Component {
    ___bybyn = {
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
    
    ___ynbyby = {
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
    
    previewMessage = `${isMobile() ? '↑↑↑' : '← ← ←'} type or paste something there<br/>and see the translation here. ↓↓↓<br/><br/><i style="color: #ff00ff"><b>Note:</b><br/>This is an assisted and automatic translator as you type.  No need to worry on the convention of typing on a baybayin keyboard.  Just type normally as you would.</i>`;
    manualKeyboardMessage = `<i style="color: #ff00ff"><b>Note:</b><br/>Follow typing pattern to/off characters indicated on the keyboard.</i>`;
    
    state = {
        baybayin: '',
        translation: this.previewMessage,
        simplify: true,
        auto: false,
        capslock: false,
        shift: false
    };
    
    onTextAreaChange = (e) => {
        if (this.state.auto) {
            e.target.value = e.target.value.toLowerCase().replace(/(ᜊ᜔|ᜃ᜔|ᜇ᜔|ᜄ᜔|ᜑ᜔|ᜎ᜔|ᜋ᜔|ᜈ᜔|ᜅ᜔|ᜉ᜔|ᜍ᜔|ᜐ᜔|ᜆ᜔|ᜏ᜔|ᜌ᜔)([aieoug])/ig, (x, y, z) => {
                return this.___bybyn[this.___ynbyby[y] + z] || x
            }).replace(/ng([aieou])*/ig, (x) => {
                return this.___bybyn[x] || x;
            }).replace(/([bkdghlmnprstwy])([aieou])/ig, (x) => {
                return this.___bybyn[x] || x;
            }).replace(/[a-z]/ig, (x) => {
                return this.___bybyn[x] || x;
            });
    
            this.setState({
                baybayin: e.target.value,
                translation: this.translate(e.target.value) || this.previewMessage
            })
        } else if (this.state.manualKeyboardMessage !== this.manualKeyboardMessage){
            this.setState({translation: this.translate(e.target.value) || this.manualKeyboardMessage})
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
            { capslock, shift } = this.state;
        
        if (ds.up || ds.down) {
            this.textAreaNode.value += capslock || shift ? ds.up : ds.down;
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
    };
    
    render() {
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
                        data-up='ᜈ᜔ᜌ'
                        data-down='`'
                        onClick={this.onKeyClick}
                    >
                        <div>~<span className={'green-fg'}>ᜈ᜔ᜌ</span></div>
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
                        <div>=</div>
                    </div>
    
                    <div
                        className={'key-backspace gray-bg'}
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
                        data-up='ᜃ᜔ᜏ'
                        data-down='ᜃᜓᜏ'
                        onClick={this.onKeyClick}
                    >
                        <div>Q<span className={'green-fg'}>ᜃ᜔ᜏ</span></div>
                        <div>q<span className={'green-fg'}>ᜃᜓᜏ</span></div>
                    </div>
                    
                    <div
                        className={'key-w'}
                        data-up='ᜏ'
                        data-down='ᜏ'
                        onClick={this.onKeyClick}
                    >
                        <div>W</div>
                        <div>w<span className={'green-fg'}>ᜏ</span></div>
                    </div>
                    
                    <div
                        className={'key-e'}
                        data-up='ᜁ'
                        data-down='e'
                        onClick={this.onKeyClick}
                    >
                        <div>E<span className={'green-fg'}>ᜁ</span></div>
                        <div>e<img alt='' src={kudlitE}/></div>
                    </div>
                    
                    <div
                        className={'key-r'}
                    >
                        <div>R</div>
                        <div>r<span className={'green-fg'}>ᜍ</span></div>
                    </div>
                    
                    <div
                        className={'key-t'}
                    >
                        <div>T</div>
                        <div>t<span className={'green-fg'}>ᜆ</span></div>
                    </div>
                    
                    <div
                        className={'key-y'}
                    >
                        <div>Y</div>
                        <div>y<span className={'green-fg'}>ᜌ</span></div>
                    </div>
                    
                    <div
                        className={'key-u'}
                    >
                        <div>U<span className={'green-fg'}>ᜂ</span></div>
                        <div>u<img alt='' src={kudlitU}/></div>
                    </div>
                    
                    <div
                        className={'key-i'}
                    >
                        <div>I<span className={'green-fg'}>ᜁ</span></div>
                        <div>i<img alt='' src={kudlitI}/></div>
                    </div>
                    
                    <div
                        className={'key-o'}
                    >
                        <div>O<span className={'green-fg'}>ᜂ</span></div>
                        <div>o<img alt='' src={kudlitO}/></div>
                    </div>
                    
                    <div
                        className={'key-p'}
                    >
                        <div>P</div>
                        <div>p<span className={'green-fg'}>ᜉ</span></div>
                    </div>
                    
                    <div
                        className={'key-leftbracket'}
                    >
                        <div>{"{"}</div>
                            <div>[</div>
                            </div>
                    
                            <div
                            className={'key-rightbracket'}
                            >
                            <div>}</div>
                        <div>]</div>
                    </div>
                    
                    <div
                        className={'key-backslash'}
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
                    >
                        <div>A<span className={'green-fg'}>ᜀ</span></div>
                        <div>a</div>
                    </div>
                    
                    <div
                        className={'key-s'}
                    >
                        <div>S</div>
                        <div>s<span className={'green-fg'}>ᜐ</span></div>
                    </div>
                    
                    <div
                        className={'key-d'}
                    >
                        <div>D</div>
                        <div>d<span className={'green-fg'}>ᜇ</span></div>
                    </div>
                    
                    <div
                        className={'key-f'}
                    >
                        <div>F</div>
                        <div>f<span className={'green-fg'}>ᜉ</span></div>
                    </div>
                    
                    <div
                        className={'key-g'}
                    >
                        <div>G</div>
                        <div>g<span className={'green-fg'}>ᜄ</span></div>
                    </div>
                    
                    <div
                        className={'key-h'}
                    >
                        <div>H</div>
                        <div>h<span className={'green-fg'}>ᜑ</span></div>
                    </div>
                    
                    <div
                        className={'key-j'}
                    >
                        <div>J<span className={'green-fg'}>ᜇ᜔ᜌ</span></div>
                        <div>j<span className={'green-fg'}>ᜇᜒᜌ</span></div>
                    </div>
                    
                    <div
                        className={'key-k'}
                    >
                        <div>K</div>
                        <div>k<span className={'green-fg'}>ᜃ</span></div>
                    </div>
                    
                    <div
                        className={'key-l'}
                    >
                        <div>L</div>
                        <div>l<span className={'green-fg'}>ᜎ</span></div>
                    </div>
                    
                    <div
                        className={'key-colon'}
                    >
                        <div>:</div>
                        <div>;</div>
                    </div>
                    
                    <div
                        className={'key-quote'}
                    >
                        <div>"</div>
                        <div>'</div>
                    </div>
                    
                    <div
                        className={'key-enter gray-bg'}
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
                    >
                        <div>Z</div>
                        <div>z<span className={'green-fg'}>ᜐ</span></div>
                    </div>
                    
                    <div
                        className={'key-x'}
                    >
                        <div>X</div>
                        <div>x<span className={'green-fg'}>ᜃ᜔ᜐ</span></div>
                    </div>
                    
                    <div
                        className={'key-c'}
                        data-up='ᜆ᜔ᜐ'
                        data-down='ᜃ'
                        onClick={this.onKeyClick}
                    >
                        <div>C<span className={'green-fg'}>ᜆ᜔ᜐ</span></div>
                        <div>c<span className={'green-fg'}>ᜃ</span></div>
                    </div>
                    
                    <div
                        className={'key-v'}
                    >
                        <div>V</div>
                        <div>v</div>
                    </div>
                    
                    <div
                        className={'key-b'}
                    >
                        <div>B</div>
                        <div>b<span className={'green-fg'}>ᜊ</span></div>
                    </div>
                    
                    <div
                        className={'key-n'}
                    >
                        <div>N</div>
                        <div>n<span className={'green-fg'}>ᜈ</span></div>
                    </div>
                    
                    <div
                        className={'key-m'}
                    >
                        <div>M</div>
                        <div>m<span className={'green-fg'}>ᜋ</span></div>
                    </div>
                    
                    <div
                        className={'key-comma'}
                    >
                        <div>{"<"}</div>
                        <div>,</div>
                    </div>
                    
                    <div
                        className={'key-period'}
                    >
                        <div>{">"}</div>
                        <div>.</div>
                    </div>
                    
                    <div
                        className={'key-slash'}
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