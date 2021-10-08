import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { getAllVideos, searchVideos } from "../modules/videoManager";



const VideoSearch = ({setVideos}) => {

    
    return (
        <>
        Search:
        <input type="text" className="tipsearch" onKeyUp={(event) => 
            searchVideos(event.target.value, true).then(v => setVideos(v))}  placeholder="Search for a post" />
        </>
    );
};

export default VideoSearch;