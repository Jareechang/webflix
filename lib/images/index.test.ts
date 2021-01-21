import {
    ImageSize,
    IMAGE_HOST,
    getImageUrl
} from '.'

describe('getImageUrl()', () => {
    it('should return full url for an image including image host', () => {
        const size : ImageSize = 'w500'
        const path : string = '/ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg'
        expect(getImageUrl('ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg')).toEqual(
            `${IMAGE_HOST}/${size}${path}`
        )
    })

    it('should return with correct url without forward slash', () => {
        const size : ImageSize = 'w500'
        const path : string = 'ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg'
        expect(getImageUrl('ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg')).toEqual(
            `${IMAGE_HOST}/${size}/${path}`
        )
    })

    it('should allow customization of image size (option: "original")', () => {
        const size : ImageSize = 'original'
        const path : string = 'ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg'
        expect(getImageUrl('ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg', size)).toEqual(
            `${IMAGE_HOST}/${size}/${path}`
        )
    })
})
