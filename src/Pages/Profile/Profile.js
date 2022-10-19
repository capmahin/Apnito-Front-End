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
      {profile.slice(0, 1).map((teachers) => (
        <Profiles key={profile._id} teachers={teachers}></Profiles>
      ))}

      <div>
        <List></List>
        <div className="flex space-x-5"></div>
      </div>
    </div>
  );
};

export default Profile;
