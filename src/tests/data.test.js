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
            expect(homeItems[i].hasOwnProperty('title')).toBe(true);
            expect(homeItems[i].hasOwnProperty('url')).toBe(true);
            expect(homeItems[i].hasOwnProperty('image')).toBe(true);
            expect(homeItems[i].hasOwnProperty('description')).toBe(true);
            expect(homeItems[i].title).toMatch(/./);
            expect(homeItems[i].image).toMatch(/./);
        }
    })
});

describe('carouselImages', () => {
    it('has atleast one data', () => {
        expect(carouselImages.length).toBeGreaterThan(0);
    });
    
    it('is an array of object with property image, name & link', () => {
        for (let i = 0; i < carouselImages.length; i++) {
            expect(carouselImages[i].hasOwnProperty('image')).toBe(true);
            expect(carouselImages[i].hasOwnProperty('name')).toBe(true);
            expect(carouselImages[i].hasOwnProperty('link')).toBe(true);
            expect(carouselImages[i].image).toMatch(/./);
        }
    })
});