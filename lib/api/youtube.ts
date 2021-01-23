import youtubeSearchResults from './mocks/youtube_search.json'


export const searchVideo = async(query: string) : Promise<any> => {
    return new Promise((resolve, reject) => {
        // Return only top 4, for grid layout
        resolve(youtubeSearchResults.items.slice(0, 4))
    })
}
