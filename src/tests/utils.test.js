import {
    fileImageCompression,
    getMaxKey,
    toFixed
} from '../utils';

describe('toFixed', () => {
    it('returns the number argument fixed in specified or 2 digit decimal as a string', () => {
        
        expect(toFixed(77.77777)).toBe("77.78");
    });
    
    it('round number down properly', () => {
        expect(toFixed(77.554)).toBe("77.55");
    });
    
    it('round number up properly', () => {
        expect(toFixed(77.555)).toBe("77.56");
    });
    
    it('trims a .00 decimal', () => {
        expect(toFixed(76.999)).toBe("77");
    })
});

describe('getMaxKey', () => {
    const array = [
        {
            id: 7,
            age: 42,
            discount: 333
        },
        {
            id: 1,
            age: 38,
            discount: 777
        },
        {
            id: 3,
            age: 45,
            discount: 555
        }
    ];
    
    it('gets max value of specified object key in an array', () => {
        expect(getMaxKey(array, 'id')).toBe(7);
        expect(getMaxKey(array, 'age')).toBe(45);
        expect(getMaxKey(array, 'discount')).toBe(777);
    })
});

describe('fileImageCompression', () => {
    it('triggers an immediate error callback when arg imageFile is not an instance of Blob', () => {
        
        let testVar;
        
        fileImageCompression(
            null,
            () => {},
            () => testVar = 'error'
        );
        
        expect(testVar).toBe('error');
    })
});
