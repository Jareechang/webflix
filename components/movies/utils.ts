
export const trimDescription = (text, limit) => {
    if (!text && typeof text !== 'string') return text
    return `${text.slice(0, limit)}...`
}
