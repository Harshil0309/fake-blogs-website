
import { useParams } from "react-router"

const VideoPage = () => {
    const params = useParams();
    console.log(params);
    return <h1>{params.videoId}</h1>
}

export default VideoPage