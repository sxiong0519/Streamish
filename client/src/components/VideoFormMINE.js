import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { addVideo} from "../modules/videoManager";

const VideoFormMINE = () => {
    const [video, setVideo] = useState({})
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newVideo = { ...video }
          newVideo[event.target.id] = event.target.value
          setVideo(newVideo)
        }

        const handleClickSaveVideo = () => {
            if (video.title === undefined || video.url === undefined) {
                window.alert("Please complete the form")
            } else {
                const newvideo = {
                    id: video.id,
                    title: video.title,
                    description: video.description,
                    url: video.url
              }
              addVideo(newvideo)
              .then((p) => history.push("/"))
              }
            }

    return (
        <>
        <form className="videoForm">
            <h2 className="videoForm__title video_header">Video Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Enter a video" value={video.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" required autoFocus className="form-control" placeholder="Enter a video" value={video.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" required autoFocus className="form-control" placeholder="Enter a video" value={video.url} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <div className="buttons"><button className="btns" onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveVideo()
                }
            }>
            Save video
            </button> </div>
        </form>
        </>
    )
}

export default VideoFormMINE;