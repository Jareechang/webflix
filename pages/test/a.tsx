import {
    useState,
    useEffect
} from 'react'

import {
    getPopularMovies
} from '../../lib/api/movies'

import axios from 'axios'

const Page = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const apiRequest = async() => {
            const response = await axios.get(
                'http://localhost:3000/api/movies'
            );
            setData(response.data);
        }

        apiRequest()
    }, [])

    console.log(data);

    return (
        <div> Testing </div>
    )
}

export default Page
