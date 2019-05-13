import React from 'react';
import './BaybayinTranslator.scss';
import {isMobile} from "../../utils";

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
    
    previewMessage = `${isMobile() ? '↑↑↑' : '← ← ←'} type or paste something there<br/>and see the translation here. ↓↓↓`;
    
    state = {
        baybayin: '',
        translation: this.previewMessage,
        simplify: true
    };
    
    onTextAreaChange = (e) => {
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
        if (this.node) this.node.focus();
    };
    
    render() {
        return <div className={'baybayin-translator'}>
            <textarea
                ref={node => this.node = node}
                defaultValue={this.state.baybayin}
                onKeyUp={this.onTextAreaChange}
            />
            
            <div className={'preview'} dangerouslySetInnerHTML={{__html: this.state.translation}}/>
            
            <div className={'info'}>
            </div>
        </div>;
    }
}