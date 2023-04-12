import React from 'react'; import banner from "../assests/1.png";
import { motion } from "framer-motion";

const Trending = ({ isOpen }) => {

  return (
    <motion.div animate={{ width: isOpen ? "615px" : "415px" }} className='right'>  {/* <!-- ********************************************************************* TRENDING SECTION START *********************************************************************--> */}
      <motion.div animate={{ width: isOpen ? "615px" : "415px" }} className="profile_path">
        <motion.div className="image">
          <img src={banner} alt="" />
        </motion.div>
        <motion.div className="profile_name">
          <h1>Welcome back!</h1>
          <h2>Deepankar Ahlawat</h2>
        </motion.div>
      </motion.div>
      <motion.div animate={{ width: isOpen ? "615px" : "415px" }} className="trending_section">
        <motion.div animate={{ width: isOpen ? "615px" : "415px" }} className="heading">
          <motion.h1 animate={{ width: isOpen ? "615px" : "415px" }}>Trending this week</motion.h1>
        </motion.div>
        <motion.div className="trending_list" animate={{ width: isOpen ? "615px" : "415px" }}>
          <motion.div className="item" animate={{ width: isOpen ? "615px" : "415px" }} >
            <motion.div className="left_section">
              <motion.div className="image">
                <img src={banner} alt="" />
              </motion.div>
              <motion.div className="content">
                <p>March 20</p>
                <span>5 mins read</span>
              </motion.div>
            </motion.div>
            <motion.div className="right_section">
              <motion.div className="upper">
                <motion.div className="profile">
                  <motion.div className="image">
                    <img src={banner} alt="" />
                  </motion.div>
                  <motion.div className="text">
                    <p>Siddharth Mishra</p>
                    <span> from</span>
                    <p>Cricbuzz</p>
                    <i className="fa-sharp fa-regular fa-circle-check"></i>
                  </motion.div>
                </motion.div>
                <motion.div className="play">
                  <i className="fa-solid fa-circle-play"></i>
                </motion.div>
              </motion.div>
              <motion.div className="trending_middle">
                <h1>
                  Off the Beaten Path: Exploring Hidden Gems in Europe
                </h1>
              </motion.div>
              <motion.div className="bottom">
                <motion.div className="button_group">
                  <button>Travel</button>
                </motion.div>
                <motion.div className="icons">
                  <i className="fa-sharp fa-regular fa-bookmark"></i>
                  <i className="fa-solid fa-ellipsis"></i>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="item" animate={{ width: isOpen ? "615px" : "415px" }}>
            <motion.div className="left_section">
              <motion.div className="image">
                <img src={banner} alt="" />
              </motion.div>
              <motion.div className="content">
                <p>March 20</p>
                <span>5 mins read</span>
              </motion.div>
            </motion.div>
            <motion.div className="right_section">
              <motion.div className="upper">
                <motion.div className="profile">
                  <motion.div className="image">
                    <img src={banner} alt="" />
                  </motion.div>
                  <motion.div className="text">
                    <p>Siddharth Mishra</p>
                    <span> from</span>
                    <p>Cricbuzz</p>
                    <i className="fa-sharp fa-regular fa-circle-check"></i>
                  </motion.div>
                </motion.div>
                <motion.div className="play">
                  <i className="fa-solid fa-circle-play"></i>
                </motion.div>
              </motion.div>
              <motion.div className="trending_middle">
                <h1>
                  Off the Beaten Path: Exploring Hidden Gems in Europe
                </h1>
              </motion.div>
              <motion.div className="bottom">
                <motion.div className="button_group">
                  <button>Travel</button>
                </motion.div>
                <motion.div className="icons">
                  <i className="fa-sharp fa-regular fa-bookmark"></i>
                  <i className="fa-solid fa-ellipsis"></i>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="item" animate={{ width: isOpen ? "615px" : "415px" }}>
            <motion.div className="left_section">
              <motion.div className="image">
                <img src={banner} alt="" />
              </motion.div>
              <motion.div className="content">
                <p>March 20</p>
                <span>5 mins read</span>
              </motion.div>
            </motion.div>
            <motion.div className="right_section">
              <motion.div className="upper">
                <motion.div className="profile">
                  <motion.div className="image">
                    <img src={banner} alt="" />
                  </motion.div>
                  <motion.div className="text">
                    <p>Siddharth Mishra</p>
                    <span> from</span>
                    <p>Cricbuzz</p>
                    <i className="fa-sharp fa-regular fa-circle-check"></i>
                  </motion.div>
                </motion.div>
                <motion.div className="play">
                  <i className="fa-solid fa-circle-play"></i>
                </motion.div>
              </motion.div>
              <motion.div className="trending_middle">
                <h1>
                  Off the Beaten Path: Exploring Hidden Gems in Europe
                </h1>
              </motion.div>
              <motion.div className="bottom">
                <motion.div className="button_group">
                  <button>Travel</button>
                </motion.div>
                <motion.div className="icons">
                  <i className="fa-sharp fa-regular fa-bookmark"></i>
                  <i className="fa-solid fa-ellipsis"></i>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* <!-- ********************************************************************* TRENDING SECTION END *********************************************************************--> */}
        {/* <!-- ********************************************************************* AUTHOR SECTION START *********************************************************************--> */}
        <motion.div className="heading">
          <h1>Top Authors this week</h1>
        </motion.div>
        <motion.div className="author">
          <motion.div className="items">
            <motion.div className="profile">
              <motion.div className="image">
                <img src={banner} alt="" />
              </motion.div>
              <motion.div className="text">
                <p>Siddharth Mishra</p>
                <i className="fa-sharp fa-regular fa-circle-check"></i>
              </motion.div>
            </motion.div>
            <motion.div className="play">
              <button>
                Follow
                <i className="fa-solid fa-circle-plus"></i>
              </button>
            </motion.div>
          </motion.div>
          <motion.div className="items">
            <motion.div className="profile">
              <motion.div className="image">
                <img src={banner} alt="" />
              </motion.div>
              <motion.div className="text">
                <p>Siddharth Mishra</p>
                <i className="fa-sharp fa-regular fa-circle-check"></i>
              </motion.div>
            </motion.div>
            <motion.div className="play">
              <button>
                Follow
                <i className="fa-solid fa-circle-plus"></i>
              </button>
            </motion.div>
          </motion.div>
          <motion.div className="items">
            <motion.div className="profile">
              <motion.div className="image">
                <img src={banner} alt="" />
              </motion.div>
              <motion.div className="text">
                <p>Siddharth Mishra</p>
                <i className="fa-sharp fa-regular fa-circle-check"></i>
              </motion.div>
            </motion.div>
            <motion.div className="play">
              <button>
                Follow
                <i className="fa-solid fa-circle-plus"></i>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* <!-- ********************************************************************* AUTHOR SECTION END *********************************************************************--> */}
      </motion.div>
    </motion.div >
  )
}

export default Trending