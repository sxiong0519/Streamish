import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
    
  return (
      <>
    <Card >
      <p className="text-left px-2">Posted by: <Link to={`/users/${video.userProfileId}`}>
          {video.userProfile.name}
          </Link></p>
      <CardBody>
        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
        <Link to={`/videos/${video.id}`}>
            <strong>{video.title}</strong>
        </Link>

        </p>
        <p>{video.description}</p>        
        <div>
            <h3>Comments</h3>        
            {video.comments.length > 0 ? <ul>{video.comments.map(c => <li>{c.userProfile.name}: {c.message}</li>)}</ul> : "No comment(s)"}
        </div>
      </CardBody>   
    </Card>
    </>
  );
};

export default Video;
