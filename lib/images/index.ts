export const IMAGE_HOST : string = 'https://image.tmdb.org/t/p'

export type ImageSize = 'w500' | 'original'

export const getImageUrl = (
    path: string = '',
    imageSize: ImageSize = 'w500'
): string => {
    if (!path || typeof path !== 'string') return path

    const urlWithSize = `${IMAGE_HOST}/${imageSize}`

    if (path.startsWith('/')) return `${urlWithSize}${path}`

    return `${urlWithSize}/${path}`
}
