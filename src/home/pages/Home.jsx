import React from 'react';
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div>
            <section className="w3l-main-slider" id="home">
                <div className="companies20-content">
                    <div className="owl-one owl-carousel owl-theme">
                        <div className="item">
                            <div className="slider-info banner-view bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg text-left">
                                            <p>Charity Life</p>
                                            <h5>Charity, Faith and Hope. Help the Homeless. Charity life.</h5>
                                            <Link to="/about" className="btn btn-primary btn-style">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info banner-view banner-top1 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg text-left">
                                            <p>Save Children</p>
                                            <h5>Donate with Kindness. Every amount Donated by you Counts.</h5>
                                            <Link to="/about" className="btn btn-primary btn-style">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info banner-view banner-top2 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg text-left">
                                            <p>Unconditional Help</p>
                                            <h5>Give a Helping hand. We all need to come together. Our Mission.</h5>
                                            <Link to="/about" className="btn btn-primary btn-style">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info banner-view banner-top3 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg text-left">
                                            <p>Unconditional Help</p>
                                            <h5>Should Children suffer this way? Don't leave Orphans alone</h5>
                                            <Link to="/about" className="btn btn-primary btn-style">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <section className="homeblock1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap">
                                <h4><Link to="#mission">View our Mission</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-sm-4 mt-3">
                            <div className="box-wrap">
                                <h4><Link to="#team">Top Founders</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-sm-4 mt-3">
                            <div className="box-wrap">
                                <h4><Link to="/contact">Request a Quote</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="middle py-5" id="facts">
                <div className="container pt-lg-3">
                    <div className="welcome-left text-center py-md-5 py-3">
                        <h3 className="title-big">Over 93% of all Donations go directly to Projects.</h3>
                        <p className="my-3">Under 7% for admin, fundraising, and salaries.</p>
                        <h4>Thank you for your continued Support </h4>
                        <Link to="/donate" className="btn btn-style btn-primary mt-sm-5 mt-4"><span className="fa fa-heart mr-1"></span> Donate Now</Link>
                    </div>
                </div>
            </div>

            <section className="w3l-bottom-grids-6 py-5">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="grids-area-hny main-cont-wthree-fea row">
                        <div className="col-lg-4 col-md-6 grids-feature">
                            <div className="area-box">
                                <img src="assets/images/donate.png" alt="" />
                                <h4><Link to="#feature" className="title-head">Give Donation.</Link></h4>
                                <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                                <Link to="/donate" className="btn btn-text">Donate Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                            <div className="area-box">
                                <img src="assets/images/volunteer.png" alt="" />
                                <h4><Link to="#feature" className="title-head">Become a Volunteer.</Link></h4>
                                <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                                <Link to="/contact" className="btn btn-text">Join Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                            <div className="area-box">
                                <img src="assets/images/child.png" alt="" style={{ width: '52px' }} />
                                <h4><Link to="#feature" className="title-head">Help the Children.</Link></h4>
                                <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                                <Link to="/donate" className="btn btn-text">Help Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3_stats py-5" id="stats">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="title-content text-center">
                        <h3 className="title-big">Our mission is to help people by distributing Money and Service globally.</h3>
                    </div>
                    <div className="w3-stats text-center">
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <span className="fa fa-users"></span>
                                    <div className="timer count-title count-number mt-3" data-to={1500} data-speed={1500}></div>
                                    <p className="count-text">Total Volunteers</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <span className="fa fa-cutlery"></span>
                                    <div className="timer count-title count-number mt-3" data-to={2256} data-speed={1500}></div>
                                    <p className="count-text">Meals Served</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <span className="fa fa-home"></span>
                                    <div className="timer count-title count-number mt-3" data-to={1000} data-speed={1500}></div>
                                    <p className="count-text">Got Shelter</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <span className="fa fa-male"></span>
                                    <div className="timer count-title count-number mt-3" data-to={260} data-speed={1500}></div>
                                    <p className="count-text">Adapted Children</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w3l-bg py-5">
                <div className="container py-lg-5 py-md-4">
                    <div className="welcome-left text-center py-lg-4">
                        <span className="fa fa-heart-o"></span>
                        <h3 className="title-big">Help the Homeless & Hungry People.</h3>
                        <Link to="/donate" className="btn btn-style btn-primary mt-sm-5 mt-4">Donate Now</Link>
                    </div>
                </div>
            </div>

            <section className="w3l-index5 py-5" id="causes">
                <div className="container py-lg-5 py-md-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="header-section">
                                <h3 className="title-big">Our Charity Causes </h3>
                                <h4>If you want to work with for Save Poor charity? <Link to="#url">Send your Details.</Link></h4>
                                <p className="mt-3 mb-lg-5 mb-4"> Lorem ipsum dolorus animi obcaecati vel ipsum. Vivamus a ligula quam.
                                    Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet igula quam.</p>
                            </div>
                            <Link to="/contact" className="btn btn-outline-primary btn-style">Contact Us</Link>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                            <div className="img-block">
                                <Link to="photos">
                                    <img src="assets/images/blog5.jpg" className="img-fluid radius-image-full" alt="image" />
                                    <span className="title">Food for Hungry</span>
                                </Link>
                            </div>
                            <div className="img-block mt-4">
                                <Link to="photos"> <img src="assets/images/blog2.jpg" className="img-fluid radius-image-full"
                                    alt="image" />
                                    <span className="title">Help from Injuries</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-5 mt-4">
                            <div className="img-block">
                                <Link to="photos"> <img src="assets/images/blog3.jpg" className="img-fluid radius-image-full"
                                    alt="image" />
                                    <span className="title">Education for all</span>
                                </Link>
                            </div>
                            <div className="img-block mt-4">
                                <Link to="photos">
                                    <img src="assets/images/blog4.jpg" className="img-fluid radius-image-full" alt="image" />
                                    <span className="title">Clean water for all</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3-services-ab py-5" id="mission">
                <div className="container py-lg-5 py-md-4">
                    <h3 className="title-big text-center mb-5">Our Mission and Goals</h3>
                    <div className="w3-services-grids">
                        <div className="fea-gd-vv row">
                            <div className="col-lg-4 col-md-6">
                                <div className="float-lt feature-gd">
                                    <div className="icon">
                                        <img src="assets/images/home.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="icon-info">
                                        <h5>Homeless Charities.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                                <div className="float-mid feature-gd">
                                    <div className="icon">
                                        <img src="assets/images/education.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="icon-info">
                                        <h5>Education Charities.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <div className="float-rt feature-gd">
                                    <div className="icon">
                                        <img src="assets/images/health.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="icon-info">
                                        <h5>Health Charities.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                                <div className="float-lt feature-gd">
                                    <div className="icon">
                                        <img src="assets/images/icon1.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="icon-info">
                                        <h5>Animal Charities.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                                <div className="float-lt feature-gd">
                                    <div className="icon">
                                        <img src="assets/images/food.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="icon-info">
                                        <h5>Food Charities.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                                <div className="float-lt feature-gd">
                                    <div className="icon">
                                        <img src="assets/images/eco.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="icon-info">
                                        <h5>Eco Charities.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-clients py-5" id="clients">
                <div className="call-w3 py-lg-5 py-md-4">
                    <div className="container">
                        <h3 className="title-big text-center">Whom we work with</h3>
                        <div className="company-logos text-center mt-5">
                            <div className="row logos">
                                <div className="col-lg-2 col-md-3 col-4">
                                    <img src="assets/images/brand1.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4">
                                    <img src="assets/images/brand2.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4">
                                    <img src="assets/images/brand3.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                                    <img src="assets/images/brand4.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                    <img src="assets/images/brand5.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                    <img src="assets/images/brand6.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


           
        </div>
    );
}

export default Home;
