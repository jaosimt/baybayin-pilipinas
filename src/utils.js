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

export const menuItems = [
    {
        index: 0,
        name: 'home',
        label: 'home',
        alt: 'Baybayin Pilipinas'
    },
    {
        index: 1,
        name: 'baybayin',
        label: 'baybayin keyboard & translator',
        alt: 'assisted baybayin keyboard & translator'
    },
    {
        index: 2,
        name: 'about',
        label: 'about'
    },
    {
        index: 99,
        name: 'page-not-found',
        label: 'page not found'
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
export const isNumber = (arg) => typeof arg === "number" && !Number.isNaN(arg);

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

export const isMobile = () => {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)))
};