import React, { useEffect, useState } from "react";
import List from "./List/List";
import Profiles from "./List/Profiles";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div>
      <Profiles></Profiles>
      <div>
        <List></List>
        <div className="flex space-x-5"></div>
      </div>
    </div>
  );
};

export default Profile;
