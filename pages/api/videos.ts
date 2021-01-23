import { NextApiRequest, NextApiResponse } from 'next'
import {
    searchVideo
} from '../../lib/api/youtube'

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const videos = await searchVideo('some-query')
    res.status(200).json(videos)
}
