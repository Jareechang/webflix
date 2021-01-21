export const ellipsis : string = '...'

export const trimByWords = (
    text: string,
    limit: number
) : string => {
    if (!text && typeof text !== 'string') return text
    const words = text.split(' ')
    const newText = words.slice(0, limit).join(' ')
    return `${newText}${ellipsis}`
}

export const trimByCharacters = (
    text: string,
    limit: number,
    includeEllipsis: boolean = true
) : string => {
    if (!text && typeof text !== 'string') return text
    return `${text.slice(0, limit)}${includeEllipsis ? ellipsis : ''}`
}
