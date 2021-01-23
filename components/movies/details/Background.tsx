import {
    Box
} from '@material-ui/core'

import {
    ImageSize,
    getImageUrl
} from '../../../lib/images'

import * as styled from './styled'

interface BackgroundProps {
    /*
     * image subpath from the movie object
     * **/
    imagePath: string;
}

const imageSize : ImageSize = 'original'

const Background : React.FC<BackgroundProps> = (
    props: BackgroundProps
) => {
    const { imagePath } = props
    return (
        <styled.Video
            poster={getImageUrl(imagePath, imageSize)} />
    )
}

export default Background
