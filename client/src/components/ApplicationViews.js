import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoFormMINE from "./VideoFormMINE";
import VideoDetails from "./VideoDetails";
import UserDetails from "./UserDetails";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <VideoList />
      </Route>

      <Route path="/videos/add">
        <VideoFormMINE />
      </Route>

      <Route path="/videos/:id">
          <VideoDetails />
      </Route>

      <Route path="/users/:id">
          <UserDetails />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
