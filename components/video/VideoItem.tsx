import React from 'react'
import * as Styled from './styled'

export interface VideoItemProps {
    /*
     * The unique ID associated with the video
     *
     * **/
    videoId: string;
    /*
     * thumbnail image to display
     *
     * **/
    thumbnail: string;

    /*
     * Height of the thumbnail
     * **/
    height: number;

    /*
     * Width of the thumbnail
     * **/
    width: number;
}


const VideoItem : React.FC<VideoItemProps> = (
    props: VideoItemProps
) => {
    const {
        videoId
    } = props;

    const handlePlayVideo = React.useCallback(() => {
        console.log('TODO: Add action to load and play video, id: ', videoId);
    }, [videoId])

    return (
        <>
            <Styled.Thumbnail
                width={props.width}
                height={props.height}
                src={props.thumbnail} />
            <Styled.IconButton onClick={handlePlayVideo}>
                <Styled.PlayCircleFilledIcon
                    color="primary"
                />
            </Styled.IconButton>
        </>
    )

}

export default VideoItem
