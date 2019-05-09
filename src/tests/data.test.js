import {
    homeItems,
    carouselImages
} from "../data";

describe('homeItems', () => {
    it('has atleast one data', () => {
        expect(homeItems.length).toBeGreaterThan(0);
    });
    
    it('is an array of object with property title, url, image & description', () => {
        for (let i = 0; i < homeItems.length; i++) {
            expect(homeItems[0].hasOwnProperty('title')).toBe(true);
            expect(homeItems[0].hasOwnProperty('url')).toBe(true);
            expect(homeItems[0].hasOwnProperty('image')).toBe(true);
            expect(homeItems[0].hasOwnProperty('description')).toBe(true);
            expect(homeItems[0].title).toMatch(/./);
            expect(homeItems[0].image).toMatch(/./);
        }
    })
});

describe('carouselImages', () => {
    it('has atleast one data', () => {
        expect(carouselImages.length).toBeGreaterThan(0);
    });
    
    it('is an array of object with property image, name & link', () => {
        for (let i = 0; i < carouselImages.length; i++) {
            expect(carouselImages[0].hasOwnProperty('image')).toBe(true);
            expect(carouselImages[0].hasOwnProperty('name')).toBe(true);
            expect(carouselImages[0].hasOwnProperty('link')).toBe(true);
            expect(carouselImages[0].image).toMatch(/./);
        }
    })
});