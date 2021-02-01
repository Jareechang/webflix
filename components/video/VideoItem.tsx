import * as Styled from './styled'

export interface VideoItemProps {
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

    return (
        <>
            <Styled.Thumbnail
                width={props.width}
                height={props.height}
                src={props.thumbnail} />
            <Styled.PlayCircleFilledIcon
                color="primary"
            />
        </>
    )

}

export default VideoItem
