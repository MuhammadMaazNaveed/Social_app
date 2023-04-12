import React from 'react';
import banner from "../assests/1.png";

const NotificationItem = () => {
    return (
        <>
            {/* <!-- ********************************************************************* NOTIFICATION SECTION START *********************************************************************--> */}
            <div className="notification_section">
                <div className="item">
                    <div className="notification">
                        <div className="notification_bottom_part">
                            <div className="left">
                                <div className="top">
                                    <div className="image">
                                        <img src={banner} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Al Bayan, Plain</h1>
                                        <span>Commented</span>
                                        <h1>"Very Well Writing article"</h1>
                                        <span>On your Article title</span>
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <h1>
                                        Check out these interesting facts about the Cheetah -
                                        The fastest land animal.
                                    </h1>
                                </div>
                            </div>
                            <div className="right">
                                <img src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="notification">
                        <div className="notification_bottom_part">
                            <div className="left">
                                <div className="top">
                                    <div className="image">
                                        <img src={banner} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Al Bayan, Plain</h1>
                                        <span>Commented</span>
                                        <h1>"Very Well Writing article"</h1>
                                        <span>On your Article title</span>
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <h1>
                                        Check out these interesting facts about the Cheetah -
                                        The fastest land animal.
                                    </h1>
                                </div>
                            </div>
                            <div className="right">
                                <img src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="notification">
                        <div className="notification_bottom_part">
                            <div className="left">
                                <div className="top">
                                    <div className="image">
                                        <img src={banner} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Al Bayan, Plain</h1>
                                        <span>Commented</span>
                                        <h1>"Very Well Writing article"</h1>
                                        <span>On your Article title</span>
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <h1>
                                        Check out these interesting facts about the Cheetah -
                                        The fastest land animal.
                                    </h1>
                                </div>
                            </div>
                            <div className="right">
                                <img src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- ********************************************************************* NOTIFICATION SECTION END *********************************************************************--> */}

        </>
    )
}

export default NotificationItem