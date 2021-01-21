import {
    IMAGE_HOST,
    getImageUrl
} from '.'

describe('getImageUrl()', () => {
    it('should return full url for an image including image host', () => {
        const path : string = '/ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg'
        expect(getImageUrl('ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg')).toEqual(
            `${IMAGE_HOST}${path}`
        )
    })

    it('should return with correct url without forward slash', () => {
        const path : string = 'ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg'
        expect(getImageUrl('ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg')).toEqual(
            `${IMAGE_HOST}/${path}`
        )
    })
})
