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
    
    state = {
        baybayin: '',
        translation: this.previewMessage,
        simplify: true,
        keyHeight: 70
    };
    
    onTextAreaChange = (e) => {
        //e.target.value = e.target.value.toLowerCase().replace(/(ᜊ᜔|ᜃ᜔|ᜇ᜔|ᜄ᜔|ᜑ᜔|ᜎ᜔|ᜋ᜔|ᜈ᜔|ᜅ᜔|ᜉ᜔|ᜍ᜔|ᜐ᜔|ᜆ᜔|ᜏ᜔|ᜌ᜔)([aieoug])/ig, (x, y, z) => {
        //    return this.___bybyn[this.___ynbyby[y] + z] || x
        //}).replace(/ng([aieou])*/ig, (x) => {
        //    return this.___bybyn[x] || x;
        //}).replace(/([bkdghlmnprstwy])([aieou])/ig, (x) => {
        //    return this.___bybyn[x] || x;
        //}).replace(/[a-z]/ig, (x) => {
        //    return this.___bybyn[x] || x;
        //});
        //
        //this.setState({
        //    baybayin: e.target.value,
        //    translation: this.translate(e.target.value) || this.previewMessage
        //})
    };
    
    translate = (str, normalize) => {
        str = str.toString();
        if (str.trim() === '') return;
        
        for (let b in this.___ynbyby) {
            if (this.___ynbyby.hasOwnProperty(b)) str = str.replace(new RegExp(b, 'igm'), this.___ynbyby[b]);
        }
        
        return ((normalize === true || this.state.simplify.checked) ? str.replace(/\[e\/i\]/g, 'i').replace(/\[o\/u\]/g, 'o') : str).replace(/(\[\w\/\w\])/gm, "<span class='dimmed'>$1</span>").replace(/\n/gm, '<br/>');
    };
    
    componentDidMount() {
        if (this.textAreaNode) this.textAreaNode.focus();
        if (this.tildeNode) this.setState({keyHeight: this.tildeNode.getBoundingClientRect().width});
    };
    
    render() {
        const {keyHeight} = this.state;
        
        return <div className={'baybayin-translator'}>
            <textarea
                ref={node => this.textAreaNode = node}
                defaultValue={this.state.baybayin}
                onKeyUp={this.onTextAreaChange}
            />
            
            <div className={'preview'} dangerouslySetInnerHTML={{__html: this.state.translation}}/>
            
            <div className={'info'}>
                <div className={'keyboard'}>
                    <div className={'row-1'}>
                        <div
                            ref={node => this.tildeNode = node}
                            className={'key-tilde'}
                            style={{height: keyHeight + 'px'}}
                        >
                            <div>~<span className={'green-fg'}>ᜈ᜔ᜌ</span></div>
                            <div>`</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-1'}
                        >
                            <div>!</div>
                            <div>1</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-2'}
                        >
                            <div>@</div>
                            <div>2</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-3'}
                        >
                            <div>#</div>
                            <div>3</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-4'}
                        >
                            <div>$<span className={'red-fg'}>₱</span></div>
                            <div>4</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-5'}
                        >
                            <div>%</div>
                            <div>5</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-6'}
                        >
                            <div>^</div>
                            <div>6</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-7'}
                        >
                            <div>&</div>
                            <div>7</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-8'}
                        >
                            <div>*</div>
                            <div>8</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-9'}
                        >
                            <div>(</div>
                            <div>9</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-0'}
                        >
                            <div>)</div>
                            <div>0</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-dash'}
                        >
                            <div>_</div>
                            <div>-</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-equal'}
                        >
                            <div>+</div>
                            <div>=</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-backspace gray-bg'}
                        >
                            <div/>
                            <div>BackSpace</div>
                        </div>
                    </div>
                    
                    <div className={'row-2'}>
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-tab gray-bg'}
                        >
                            <div/>
                            <div>Tab</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-q'}
                        >
                            <div>Q<span className={'green-fg'}>ᜃ᜔ᜏ</span></div>
                            <div>q<span className={'green-fg'}>ᜃᜓᜏ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-w'}
                        >
                            <div>W</div>
                            <div>w<span className={'green-fg'}>ᜏ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-e'}
                        >
                            <div>E<span className={'green-fg'}>ᜁ</span></div>
                            <div>e<img src={kudlitE}/></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-r'}
                        >
                            <div>R</div>
                            <div>r<span className={'green-fg'}>ᜍ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-t'}
                        >
                            <div>T</div>
                            <div>t<span className={'green-fg'}>ᜆ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-y'}
                        >
                            <div>Y</div>
                            <div>y<span className={'green-fg'}>ᜌ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-u'}
                        >
                            <div>U<span className={'green-fg'}>ᜂ</span></div>
                            <div>u<img src={kudlitU}/></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-i'}
                        >
                            <div>I<span className={'green-fg'}>ᜁ</span></div>
                            <div>i<img src={kudlitI}/></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-o'}
                        >
                            <div>O<span className={'green-fg'}>ᜂ</span></div>
                            <div>o<img src={kudlitO}/></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-p'}
                        >
                            <div>P</div>
                            <div>p<span className={'green-fg'}>ᜉ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-leftbracket'}
                        >
                            <div>{"{"}</div>
                            <div>[</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-rightbracket'}
                        >
                            <div>}</div>
                            <div>]</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-backslash'}
                        >
                            <div>|</div>
                            <div>\</div>
                        </div>
                    </div>
                    
                    <div className={'row-3'}>
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-capslock gray-bg'}
                        >
                            <div style={{color: 'white'}}>•</div>
                            <div>Capslock</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-a'}
                        >
                            <div>A<span className={'green-fg'}>ᜀ</span></div>
                            <div>a</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-s'}
                        >
                            <div>S</div>
                            <div>s<span className={'green-fg'}>ᜐ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-d'}
                        >
                            <div>D</div>
                            <div>d<span className={'green-fg'}>ᜇ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-f'}
                        >
                            <div>F</div>
                            <div>f<span className={'green-fg'}>ᜉ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-g'}
                        >
                            <div>G</div>
                            <div>g<span className={'green-fg'}>ᜄ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-h'}
                        >
                            <div>H</div>
                            <div>h<span className={'green-fg'}>ᜑ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-j'}
                        >
                            <div>J<span className={'green-fg'}>ᜇ᜔ᜌ</span></div>
                            <div>j<span className={'green-fg'}>ᜇᜒᜌ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-k'}
                        >
                            <div>K</div>
                            <div>k<span className={'green-fg'}>ᜃ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-l'}
                        >
                            <div>L</div>
                            <div>l<span className={'green-fg'}>ᜎ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-colon'}
                        >
                            <div>:</div>
                            <div>;</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-quote'}
                        >
                            <div>"</div>
                            <div>'</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-enter gray-bg'}
                        >
                            <div/>
                            <div>Enter</div>
                        </div>
                    </div>
                    
                    <div className={'row-4'}>
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-leftshift gray-bg'}
                        >
                            <div/>
                            <div>Shift</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-z'}
                        >
                            <div>Z</div>
                            <div>z<span className={'green-fg'}>ᜐ</span></div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-x'}
                        >
                            <div>X</div>
                            <div>x<span className={'green-fg'}>ᜃ᜔ᜐ</span></div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-c'}
                        >
                            <div>C<span className={'green-fg'}>ᜆ᜔ᜐ</span></div>
                            <div>c<span className={'green-fg'}>ᜃ</span></div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-v'}
                        >
                            <div>V</div>
                            <div>v</div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-b'}
                        >
                            <div>B</div>
                            <div>b<span className={'green-fg'}>ᜊ</span></div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-n'}
                        >
                            <div>N</div>
                            <div>n<span className={'green-fg'}>ᜈ</span></div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-m'}
                        >
                            <div>M</div>
                            <div>m<span className={'green-fg'}>ᜋ</span></div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-comma'}
                        >
                            <div>{"<"}</div>
                            <div>,</div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-period'}
                        >
                            <div>{">"}</div>
                            <div>.</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-slash'}
                        >
                            <div>?</div>
                            <div>/</div>
                        </div>
    
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-rightshift gray-bg'}
                        >
                            <div/>
                            <div>Shift</div>
                        </div>
                    </div>
                    
                    <div className={'row-5'}>
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-leftctrl gray-bg'}
                        >
                            <div/>
                            <div>Control</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-empty gray-bg'}
                        />
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-leftalt gray-bg'}
                        >
                            <div/>
                            <div>Alt</div>
                        </div>
                        
                        <div style={{height: keyHeight + 'px'}}
                             className={'key-spacebar'}/>
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-rightalt gray-bg'}
                        >
                            <div/>
                            <div>Alt</div>
                        </div>
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-empty gray-bg'}
                        />
                        
                        <div
                            style={{height: keyHeight + 'px'}}
                            className={'key-rightctrl gray-bg'}
                        >
                            <div/>
                            <div>Control</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}