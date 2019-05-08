import React from 'react';
import './BaybayinTranslator.scss';
import {
    bybyn,
    ynbyby,
    carouselImages
} from "../../utils";
import ImageSlider from "../ImageSlider/ImageSlider";

export default class BaybayinTranslator extends React.Component {
    //__tileVowels = [
    //    {b: 'ᜀ', r: 'A'},
    //    {b: 'ᜁ', r: 'E/I'},
    //    {b: 'ᜂ', r: 'O/U'},
    //];
    //
    //__tileConsonants = [
    //    {b: 'ᜊ', r: 'BA'},
    //    {b: 'ᜃ', r: 'KA'},
    //    {b: 'ᜇ', r: 'DA/RA'},
    //    {b: 'ᜄ', r: 'GA'},
    //    {b: 'ᜑ', r: 'HA'},
    //    {b: 'ᜎ', r: 'LA'},
    //    {b: 'ᜋ', r: 'MA'},
    //    {b: 'ᜈ', r: 'NA'},
    //    {b: 'ᜅ', r: 'NGA'},
    //    {b: 'ᜉ', r: 'PA'},
    //    {b: 'ᜐ', r: 'SA'},
    //    {b: 'ᜆ', r: 'TA'},
    //    {b: 'ᜏ', r: 'WA'},
    //    {b: 'ᜌ', r: 'YA'},
    //];
    
    state = {
        baybayin: 'Umaga',
        translation: 'umaga',
        simplify: true
    };
    
    onTextAreaChange = (e) => {
        e.target.value = e.target.value.toLowerCase().replace(/(ᜊ᜔|ᜃ᜔|ᜇ᜔|ᜄ᜔|ᜑ᜔|ᜎ᜔|ᜋ᜔|ᜈ᜔|ᜅ᜔|ᜉ᜔|ᜍ᜔|ᜐ᜔|ᜆ᜔|ᜏ᜔|ᜌ᜔)([aieoug])/ig, (x, y, z) => {
            return bybyn[ynbyby[y] + z] || x
        }).replace(/ng([aieou])*/ig, (x) => {
            return bybyn[x] || x;
        }).replace(/([bkdghlmnprstwy])([aieou])/ig, (x) => {
            return bybyn[x] || x;
        }).replace(/[a-z]/ig, (x) => {
            return bybyn[x] || x;
        });
        
        this.setState({
            baybayin: e.target.value,
            translation: this.translate(e.target.value)
        })
    };
    
    translate = (str, normalize) => {
        str = str.toString();
        if (str.trim() === '') return;
        
        for (let b in ynbyby) {
            if (ynbyby.hasOwnProperty(b)) str = str.replace(new RegExp(b, 'igm'), ynbyby[b]);
        }
        
        return ((normalize === true || this.state.simplify.checked) ? str.replace(/\[e\/i\]/g, 'i').replace(/\[o\/u\]/g, 'o') : str).replace(/(\[\w+\/\w+\])/gm, "<span class='dimmed'>$1</span>");
    };
    
    //tile = (a, i) => {
    //    return <div key={i}>
    //        <div>{a.b}</div>
    //        <div>{a.r}</div>
    //    </div>
    //};
    
    componentDidMount() {
        this.node.focus();
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
                <ImageSlider images={carouselImages}/>
            </div>
    
            {/*<div className={'chart'}>*/}
                {/*<div className={'vowels'}>*/}
                    {/*{*/}
                        {/*this.__tileVowels.map((c, i) => this.tile(c, i))*/}
                    {/*}*/}
                {/*</div>*/}
                {/*<div className={'consonants'}>*/}
                    {/*{*/}
                        {/*this.__tileConsonants.map((c, i) => this.tile(c, i))*/}
                    {/*}*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>;
    }
}