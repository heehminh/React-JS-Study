import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  anna: {
    name: "김민희",
    description: "Frontend Engineer",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

const Profile = () => {
  const { username } = useParams(); // 파라미터를 받아옴 ("/profiles/:username")에서 username을 받아옴
  const profile = profileData[username]; // [name, description]
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name}){/* anna(김민희) */}
      </h3>

      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
