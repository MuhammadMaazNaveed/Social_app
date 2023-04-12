import React from "react";
import banner from "../assests/1677704401753.jpg";

const ProfileBooks = () => {
  return (<>
    <div className="books">
      <div className="profile_books">
        <h1>Books published by Aarav Patel</h1>
        <div className="row">
          <div className="item">
            <div className="image">
              <img src={banner} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                <h1>Book Title here</h1>
                <span>8hr 36mins read</span>
              </div>
              <div className="icons">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={banner} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                <h1>Book Title here</h1>
                <span>8hr 36mins read</span>
              </div>
              <div className="icons">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="recommendation_books">
        <h1>Books Recommended by Aarav Patel</h1>
        <div className="row">
          <div className="item">
            <div className="image">
              <img src={banner} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                <h1>Book Title here</h1>
                <span>8hr 36mins read</span>
              </div>
              <div className="icons">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={banner} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                <h1>Book Title here</h1>
                <span>8hr 36mins read</span>
              </div>
              <div className="icons">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
};

export default ProfileBooks;
