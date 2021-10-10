import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    
  return (
      <>
    <Card >
      <p className="text-left px-2">Hello, {user.name}</p>
      <CardBody>
          {user.videos.length > 0 ? <ul><li>
        <iframe className="video"
          src={user.videos.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
        <Link to={`/videos/${user.videos.id}`}>
            <strong>{user.videos.title}</strong>
        </Link>

        </p>
        <p>{user.videos.description}</p>        
        
        </li></ul> : "no videos"}
      </CardBody>   
    </Card>
    </>
  );
};

export default User;
