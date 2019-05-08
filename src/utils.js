import theRules from './images/carousel/theRules.jpg';
import phNativeScrips from './images/carousel/Philippine-scripts-Interaksyon.jpg';
import ancientPhScripts from './images/carousel/theAncientPhScripts.jpg';
import bambooBaybayin from './images/carousel/Baybayin-Carved-on-Bamboo-Stem.jpg';
import baybayinConferenceProgram from './images/carousel/Baybayin-conference-program.jpg';
import hashTag from './images/carousel/hashTagFilipinoAncientWriting.jpg';
import kultura from './images/carousel/927ac4bcedcbac58491f335cb67e4a87.jpg';
import chars from './images/carousel/baybayinCharacters.png';

import keyboard from './images/homeItems/baybayin_QWERTY_keys-1080x500.jpg';
import baybayinDotCom from './images/homeItems/baybayinDotCom.jpg';
import natMuseum from './images/homeItems/national-museum-baybayin-gc_4503.jpg';
import baybayinPinas from './images/homeItems/baybayinPinas.jpg';
import baybayinBuhayin from './images/homeItems/baybayinBuhayin.png';
import nordenx from './images/homeItems/nordenx.jpg';
import baybayinScript from './images/homeItems/baybayinScript.jpg';

export const homeItems = [
    {
        title: 'How to use the Baybayin keyboard',
        url: 'https://sim.portfolio.ph/howto/how-to-use-the-baybayin-keyboard/',
        image: keyboard,
        description: 'Typing using a baybayin keyboard is not as simple as how we know typing is.  There are certain typing behaviours that we need to pay attention to.  For instance, typing a vowel character needs to be typed in with the caps lock on.'
    },
    {
        title: 'Baybayin Script',
        url: 'https://baybayinscript.wordpress.com/',
        image: baybayinScript,
        description: 'Baybayin (Tagalog pronunciation: [baɪˈbaɪjɪn]); known in Unicode as Tagalog alphabet, known in Visayan as badlit , and known in Ilocano as kur-itan/kurditan). It continued to be used during the Spanish colonization of the Philippines up until the late 19th century.'
    },
    {
        title: 'Philippine indigenous writing system',
        url: 'https://www.baybayin.com/',
        image: baybayinDotCom,
        description: 'Baybayin is a pre-Filipino writing system from the islands known as the “Philippines”. Baybayin comes from the word “baybay”, which literally means “spell”. You may know the script by the incorrect term of Alibata that was coined by Paul Versoza in the 1920’s.'
    },
    {
        title: '5 things to know about PH\'s baybayin',
        url: 'https://news.abs-cbn.com/life/04/25/18/5-things-to-know-about-phs-pre-hispanic-writing-system',
        image: natMuseum,
        description: 'The House Committee on Basic Education and Culture has recently approved a bill seeking to declare Baybayin, a pre-Hispanic writing system used in the Philippines, as the country\'s national writing system.'
    },
    {
        title: 'Baybayin Pinas',
        url: 'https://www.facebook.com/pg/baybayinpinas/',
        image: baybayinPinas,
        description: 'Baybayin Pinas aims to promote tourism in the Philippines using Poems and Baybayin (Philippine\'s native script writing). Baybayin in tagalog means exploring while Pinas is the short term for Pilipinas'
    },
    {
        title: 'Baybayin Buhayin',
        url: 'https://www.facebook.com/pg/baybayinbuhayin/',
        image: baybayinBuhayin,
        description: 'Isang paglalayon na muling ibalik sa ating Lahi ang ating katutubong sulat. Ito ay isang kayamanan ng Pilipinas na dapat nating buhayin, alagaan at muling pagyamanin. Yaman ng lahi na mahalagang maipasa sa mga bago at susunod na henerasyon.'
    },
    {
        title: 'Nordenx Blogspot',
        url: 'http://nordenx.blogspot.com/',
        image: nordenx,
        description: 'I am a graphic designer and Philippine Script (Baybayin, Kulitan, Surat Mangyan, etc.) font developer. I do workshops and academic presentations about Philippine writing systems; its history and modern day applications. I\'ve done presentations at universities and cultural centers in Tokyo, Taiwan, The Philippines, and the United States.'
    }
];

export const carouselImages = [
    {
        image: kultura,
        name: '',
        link: ''
    },
    {
        image: chars
    },
    {
        image: theRules,
        name: '',
        link: 'https://www.facebook.com/baybayinpinas/'
    },
    {
        image: phNativeScrips,
        name: '',
        link: 'https://insta-stalker.com/post/BqUd_sTF6TL/'
    },
    
    {
        image: ancientPhScripts,
        name: 'The Ancient Filipino Script',
        link: 'https://www.kickstarter.com/projects/baybayin/teaching-the-ancient-filipino-script'
    },
    {
        image: bambooBaybayin,
        name: '',
        link: 'https://www.endangeredalphabets.net/alphabets/baybayin/'
    },
    {
        image: baybayinConferenceProgram,
        name: '',
        link: 'https://www.endangeredalphabets.net/alphabets/baybayin/'
    },
    {
        image: hashTag,
        name: '',
        link: 'https://insta-stalker.com/tag/filipinoancientwriting/'
    }
];

export const socialMedia = [
    {
        name: 'twitter',
        url: 'https://twitter.com/jaosimt/'
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/jaosimt/'
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/jaosimt/'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/sim-jao-65324677'
    },
    
];

export const menItems = [
    {
        index: 0,
        name: 'home',
        label: 'home'
    },
    {
        index: 1,
        name: 'baybayin',
        label: 'online keyboard and translator'
    }
];

export const getSetColor = (index, frequency, opacity) => {
    frequency = frequency || 0.1;
    opacity = opacity || 0.9;
    
    const red = Math.sin(frequency * index) * 127 + 128,
        green = Math.sin(frequency * index + 2.5) * 127 + 128,
        blue = Math.sin(frequency * index + 4) * 127 + 128;
    
    return `rgba(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)}, ${opacity})`;
};

export async function fileImageCompression(imageFile, successCallback, errorCallback) {
    if (!(imageFile instanceof Blob)) {
        console.log('imageFile argument is not an instance of Blob!');
        
        errorCallback();
        return
    }
    
    const aKB = 1024;
    const fwBold = "font-weight:bold",
        fwNormal = "font-weight:normal",
        mimeType = 'image/jpeg',
        origKB = imageFile.size / aKB;
    
    console.clear();
    console.log(`compressing %c${imageFile.name} %cfrom %c${origKB > aKB ? toFixed(origKB / aKB) + ' MB' : toFixed(origKB) + ' KB'} %cto...`, fwBold, fwNormal, fwBold, fwNormal);
    
    const Jimp = require('jimp'),
        reader = new FileReader();
    
    reader.addEventListener("load", () => {
        Jimp.read(reader.result)
            .then(image => {
                const w = image.getWidth(),
                    h = image.getHeight();
                
                image
                    .resize((w > h ? 300 : Jimp.AUTO), (w > h ? Jimp.AUTO : 300))
                    .quality(14)
                    .getBase64Async(mimeType)
                    .then(dataUrl => {
                        successCallback(dataUrl);
                        
                        const buffer = new Buffer(dataUrl);
                        
                        if (buffer) {
                            const compressedKB = buffer.byteLength / aKB;
                            
                            console.log(`--> %c${toFixed(compressedKB)} KB %c| %c${Math.round(origKB / compressedKB)}:1 %c| %c${toFixed((1 - (compressedKB / origKB)) * 100)}%`, fwBold, fwNormal, fwBold, fwNormal, fwBold);
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        errorCallback(error);
                    });
            })
            .catch(error => {
                console.error(error);
                errorCallback(error);
            });
    }, false);
    
    reader.addEventListener("abort", (error) => {
        console.error(error);
        errorCallback(error);
    }, false);
    
    reader.readAsDataURL(imageFile);
}

export const getMaxKey = (array, key) => {
    if (!Array.isArray(array) || (array && array.length < 1) || array[0][key] === undefined) return -1;
    
    let max = -1;
    array.map(u => {
        if (u[key] > max) max = u[key];
        return null
    });
    
    return max;
};

export const hasLocalStorage = localStorage && typeof localStorage.setItem === 'function' && typeof localStorage.getItem === 'function';

export const observer = (element, callback, config, ref) => {
    if (typeof MutationObserver !== 'function') return;
    
    if (!element) {
        console.log('Invalid element: ', element);
        return
    }
    
    if (typeof callback !== 'function') {
        console.log('No callback specified!');
        return
    }
    
    let defaultConfig = {
        characterData: true,
        attributes: false,
        childList: false,
        subtree: false
    };
    
    if (typeof config === 'object') {
        defaultConfig = {
            ...defaultConfig,
            ...config
        };
    }
    
    const observer = new MutationObserver((mutationsList, observer) => {
        callback(mutationsList, observer);
    });
    
    observer.observe(element, defaultConfig);
    
    if (typeof ref === 'function') ref(observer);
};

export const toFixed = (number, digit) => {
    number = +number;
    digit = (+digit || 2);
    
    if (Number.isNaN(number) || number === 0) return number;
    
    return number.toFixed(digit).replace(/\.00$/, '');
};

export const download = (href, fileName) => {
    let a = document.createElement('a');
    a.href = href;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const isFunction = (arg) => typeof arg === "function";

export const isVisible = (htmlElement) => {
    if (!htmlElement) return false; // ???
    
    const rect = htmlElement.getBoundingClientRect();
    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
};

export const getImageSize = (url, callback) => {
    const img = new Image();
    
    img.onload = function(){
       if (isFunction(callback)) callback({
           width: img.width,
           height: img.height
       })
    };
    
    img.src = url;
};