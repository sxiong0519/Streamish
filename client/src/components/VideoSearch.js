import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { getAllVideos, searchVideos } from "../modules/videoManager";



export const VideoSearch = ({setVideos}) => {

    const handleClickSearch = () => {
        searchVideos()
    }
    
    return (
        <>
        Search:
        <form action="/">
            <input type="text" placeholder="Search.." value={setVideos.Title} onInput={e => setVideos(e.target.value)} name="search"/>
            <button className="btns" onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSearch()
                }
            }>Submit
            </button>
        </form>
        </>
    )
}