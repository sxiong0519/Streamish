import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    
  return (
      <>
    <Card >
      <p className="text-left px-2">Hello, {user.name}</p>
      <CardBody>
          {user.videos.length > 0 ? <ul>{user.videos.map(v => <li>
        <iframe className="video"
          src={v.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
        <Link to={`/videos/${v.id}`}>
            <strong>{v.title}</strong>
        </Link>

        </p>
        <p>{v.description}</p>        
        
        </li>)}</ul> : "no videos"}
      </CardBody>   
    </Card>
    </>
  );
};

export default User;
