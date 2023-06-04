import React from "react";
import { Link } from "react-router-dom";
const VideoList = () => {

    const videos = ["video1" , "video2" , "video3"]

    return (
        <div>
            {videos.map((video) => {
                return <Link to={`/${video}`}>{video}</Link>
            })}
        </div>
    )
}

export default VideoList