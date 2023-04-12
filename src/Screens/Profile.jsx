import React from "react";
import ProfileItem from "../Component/ProfileItem";
import MyPost from "../Component/MyPost";
import ProfileBooks from "../Component/ProfileBooks";
import Profileabout from "../Component/Profileabout";
import { Routes, Route } from "react-router-dom";
const Profile = () => {
    return (
        <>
            <ProfileItem>
                <Routes>
                    <Route path="/mypost" element={<MyPost />} />
                    <Route path="/about" element={<Profileabout />} />
                    <Route path="/mybooks" element={<ProfileBooks />} />
                    <Route path="/donate" element={<ProfileBooks />} />
                </Routes>
            </ProfileItem>
        </>
    );
};

export default Profile;
