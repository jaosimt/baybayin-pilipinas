import theRules from './images/carousel/theRules.jpg';
import phNativeScrips from './images/carousel/Philippine-scripts-Interaksyon.jpg';
import ancientPhScripts from './images/carousel/theAncientPhScripts.jpg';
import bambooBaybayin from './images/carousel/Baybayin-Carved-on-Bamboo-Stem.jpg';
import baybayinConferenceProgram from './images/carousel/Baybayin-conference-program.jpg';
import hashTag from './images/carousel/hashTagFilipinoAncientWriting.jpg';
import kultura from './images/carousel/927ac4bcedcbac58491f335cb67e4a87.jpg';
import chars from './images/carousel/baybayinCharacters.png';

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
        url: ''
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/jaosimt/'
    },
    {
        name: 'facebook',
        url: 'www.facebook.com/jaosimt/'
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
        label: 'keyboard and translator'
    },
    {
        index: 2,
        name: 'news',
        label: 'news'
    },
    {
        index: 3,
        name: 'links',
        label: 'links'
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