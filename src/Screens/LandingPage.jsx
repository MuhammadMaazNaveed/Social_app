import React from "react";
import Navbar from "../Component/Navbar";
import Mobile1 from "../assests/4.png";
import Mobile2 from "../assests/3.png";
import Laptop from "../assests/5.png";
import "../LandingPage.css"

const LandingPage = () => {

    return (
        <>
            <div className="landing_page">
                <Navbar />
                <div className="line"></div>
                <div className="firstSecion">
                    <div className="innersection">
                        <div className="content">
                            <h1>READ & LISTEN</h1>
                            <h2>Stories/Books</h2>
                            <div className="button_group">
                                <div className="button_part">
                                    <button>
                                        {" "}
                                        <i className="fa-brands fa-apple"></i> Download for iOS
                                    </button>
                                </div>
                                <div className="button_part">
                                    <button>
                                        <i className="fa-brands fa-android"></i> Download for
                                        Android
                                    </button>
                                </div>
                                <div className="button_part">
                                    <button>Start Reading</button>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <img src={Mobile1} alt="" className="mobile1" />
                            <img src={Mobile2} alt="" className="mobile2" />
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="second_section" id="mission">
                    <div className="image">
                        <img src={Laptop} alt="" />
                    </div>
                    <div className="content">
                        <h1>Our Mission</h1>
                        <p>
                            Publishly empowers writers to create, monetize, and connect with
                            readers through a seamless, ad-free platform. Our mission is to
                            revolutionize the literary world, fostering a community that
                            values creative expression, reader customization, and content
                            accessibility. We enable authors to write and repurpose their work
                            into audio, enriching the reading experience for all.
                        </p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="third_section" id="features">
                    <div className="top_heading">
                        <h1>Features</h1>
                    </div>
                    <div className="row">
                        <div className="item">
                            <ul>
                                <li>
                                    {/* <span className="material-symbols-outlined">sensors</span> */}
                                    <a href="/">Interest Based Recommendations</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-user-plus"></i>
                                    <a href="/">Follow Writers</a>
                                </li>
                                <li>
                                    {/* <span className="material-symbols-outlined">graphic_eq</span> */}
                                    <a href="/">Listen to Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lines"></div>

                        <div className="item">
                            <ul>
                                <li>
                                    <a href="/">Write Blogs and Publish Books </a>{" "}
                                    <i className="fa-solid fa-book"></i>
                                </li>
                                <li>
                                    <a href="/">In-Built SEO</a>
                                    <i className="fas fa-search"></i>
                                </li>
                                <li>
                                    <a href="/">Custom Domains</a>
                                    <i className="fa-solid fa-building-user"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom_heading">
                        <h1>
                            <i className="fas fa-heart"></i>
                            Like, Share, Comment on articles and books
                        </h1>
                    </div>
                </div>
                <div className="line"></div>
                <div className="fourth_section">
                    <div className="item">
                        <div className="logo">
                            <h1>Publishly</h1>
                        </div>
                    </div>
                    <div className="item">
                        <ul>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Writer’s Guide</a>
                            </li>
                            <li>
                                <a href="/">Publish Books</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">Monetisation Policies</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <div className="button_part">
                            <button>
                                <i className="fa-brands fa-android"></i>Download for Android
                            </button>
                        </div>
                        <div className="button_part">
                            <button>
                                <i className="fa-brands fa-apple"></i> Download for iOS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
