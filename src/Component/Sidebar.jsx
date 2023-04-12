import React, { useState } from 'react'
import banner from "../assests/1.png";
import { BiBookmark } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Trending from "./Trending";
import TopBar from "./TopBar";
import Model from "./Model";
const routes = [
  // {
  //   path: "/newPost",
  //   name: "Post",
  //   icon: <AiFillPlusCircle />,
  // },
  {
    path: "/draft",
    name: "Drafts",
    icon: <RiDraftFill />,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    icon: <BiBookmark />,
  },
  {
    path: "/Books",
    name: "Books",
    icon: <IoBookSharp />,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    path: "/notification",
    name: "Notification",
    icon: <IoIosNotifications />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const imageAnimation = {
    hidden: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "90px",
      height: "90px",
      opacity: 1,
      border_radius: "50px",
      transition: {
        duration: 0.2,
      },
    },
  };
  const textLinkAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const handleCloseButton = (
    <button className="model-btn" onClick={closeModal}>
      Accept It
    </button>
  );

  const mainModal = (
    <Model closeModal={closeModal} handleCloseButton={handleCloseButton}>
      <h2>STAY TUNED</h2>
      <p>
        Subscribe to our newsletter and never miss our designs ,latest news.etc.
        Our newsletter is sent once a week, every Monday
      </p>
    </Model>)
  return (
    <div className="upper_container">
      <div className="container_section">
        <motion.div animate={{
          width: isOpen ? "50px" : "250px", transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          }
        }} className="left_part_of_container">
          <div className="sidebar">
            <div className="top_sidebar_logo">
              <AnimatePresence>
                {!isOpen &&
                  <motion.img initial="hidden" animate="show" exit="hidden" src={banner} variants={imageAnimation} alt="" />
                }
              </AnimatePresence>
            </div>
            <div className="middle_sidebar_item">
              <button onClick={() => setShowModal(true)} className='links'><AiFillPlusCircle />{

                !isOpen &&
                "Open Modal"
              }
              </button>
              {showModal && mainModal}
              {
                routes.map((route) => (
                  <NavLink to={route.path}
                    key={route.name}
                    className={({ isActive }) => (isActive ? "active-styled" : 'links')}
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {
                        !isOpen &&
                        <motion.div initial="hidden" animate="show" variants={textLinkAnimation} exit="hidden" className="link_text">{route.name}</motion.div>
                      }
                    </AnimatePresence>
                  </NavLink>
                )
                )
              }
            </div>
            <div className="bottom_sidebar_menu">
              <div className="bar" onClick={toggle}>
                <FaBars />
              </div>
              {
                !isOpen &&
                <h1>Menu</h1>
              }
            </div>
          </div>
        </motion.div>
        <hr />
        <div className="middle_part_of_container" animate={{ width: isOpen ? "515px" : "415px" }}>
          <TopBar />

          {children}
        </div>
        <hr />
        <motion.div className="right_part_of_container" animate={{ width: isOpen ? "615px" : "415px" }} >
          <Trending isOpen={isOpen} />
        </motion.div>
      </div>
    </div>
  )
}

export default Sidebar