import {
    getPopularMovies
} from '../../lib/api/movies'

import { NextApiRequest, NextApiResponse } from 'next'

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const popularMovies = await getPopularMovies()
    res.status(200).json(popularMovies)
}
