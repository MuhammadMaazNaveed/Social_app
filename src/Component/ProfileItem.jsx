import React from 'react';
import banner from "../assests/1677704401753.jpg";
import { NavLink } from 'react-router-dom';

const ProfileItem = () => {
    return (
        <>


            <div className="profile_item">
                <div className="banner">
                    <div className="image">
                        <img src={banner} alt="" />
                    </div>
                    <div className="button_group">
                        <button>Follow <i class="fa-solid fa-circle-plus"></i></button>
                        <button>Message <i class="fa-regular fa-comment"></i></button>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <h1>Aarav Patel</h1>
                        <span>5,346 Followers</span>
                    </div>
                    <div className="right">
                        <div className="handle">
                            <p>@aaravpatel</p>
                        </div>
                        <div className="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-solid fa-globe"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list">
                {/* <ul> */}
                <NavLink className={({ isActive }) => (isActive ? "active_style" : "styled")} to="/mypost">Posts</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active_style" : "styled")} to="/mybooks">Books</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active_style" : "styled")} to="/donate">Donate</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active_style" : "styled")} to="/about">About</NavLink>
                {/* </ul > */}
            </div >
        </>
    )
}

export default ProfileItem