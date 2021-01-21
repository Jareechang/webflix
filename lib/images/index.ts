export const IMAGE_HOST : string = 'https://image.tmdb.org/t/p/w500'

export const getImageUrl = (
    path: string = ''
): string => {
    if (!path || typeof path !== 'string') return path

    if (path.startsWith('/')) return `${IMAGE_HOST}${path}`

    return `${IMAGE_HOST}/${path}`
}
