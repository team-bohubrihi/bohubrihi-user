import React from 'react';
import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyBillAlt,
    faShareAlt,
    faCopy,
    faHandshake,
    faCertificate,
    faCode,
    faMobileAlt,
    faUniversalAccess,
    faLocationArrow,
    faClock,
    faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/CourseDetails.css";

const CourseDetails = () => {
    return (
        <Layout>
            {/* Course Details Top Banner */}
            <section className="course-details-top-banner pb-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-1 g-4 py-5">
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <small className="fw-bold">Project Based Bangla Online Course on Node.Js</small>

                                    <h2 className="card-title pt-3">Learn Backend Web Development With Node Js, Express And MongoDB</h2>

                                    <p className="card-text pt-3 pb-1 px-5">Learn server side development using one of the most in-demand JavaScript runtime systems today - Node JS. Learn the concepts and modules of NodeJS - Express and Database Side NoSQL or MongoDB by projecting with pen in hand as well as gain the ability to connect front end and back end using REST API.</p>
                                </div>

                                <div className="card-footer d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
                                    <a href="/" className="m-1 btn btn-secondary">SYLLABUS AND DEMO</a>

                                    <a href="/" className="m-1 btn btn-danger">GET ADMITTED TO THE COURSE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course About */}
            <section className="course-about pb-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                        <div className="col">
                            <div className="card h-100 border-less">
                                <div className="card-body">
                                    <h4 className="card-title border-bottom py-3">Why Node.Js Is Needed?</h4>

                                    <p className="card-text text-secondary">Node.js is one of the latest additions to the current web development industry. The Node.js runtime environment is used on the back end of the popular web development stack MERN stack. This makes back and web development possible with the help of Express.js, the most widely used JavaScript framework for front end development. Node.js has become very popular among programmers because it allows them to do full stack web development only by mastering JavaScript . World renowned companies like Paypal, LinkedIn, UBER, Yahoo are currently using this technology. </p>

                                    <p className="card-text text-secondary">There are several reasons why Node.js is currently gaining popularity. Almost all types of web apps require real-time communication between users, clients and servers. Node.js's synchronization process is quite fast, so Node.js is very effective for these apps. Again, this runtime environment was created using Google Chrome's V8 Engine. This allows the node to run and execute JavaScript code very quickly.</p>

                                    <p className="card-text text-secondary">In this course we will learn how to do back and development work using Node.js. You will also get the opportunity to learn by hand through various projects.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                {/* Promo Video */}
                                <div className="p-3">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/pBFxKOdbBlk" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>

                                <div className="card-body">
                                    {/* Price */}
                                    <div className="pb-3">
                                        <div className="row p-1">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                                <div className="d-flex justify-content-between">
                                                    <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" className="my-1" />
                                                    <del className="silver-text fw-bold fs-4">৳ ২৫০০</del>
                                                    <span className="fw-bold fs-4">৳ ১৯০০</span>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                                <a href="/" className="w-100 fw-bold btn btn-danger">Get admitted to the course</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Course Info */}
                                    <table className="table borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="fw-normal silver-text">Video Duration</th>
                                                <th scope="col" className="fw-normal silver-text">Language</th>
                                                <th scope="col" className="fw-normal silver-text">Difficulty</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="fw-bold silver-text">Approx. 30 Hours</td>
                                                <td className="fw-bold silver-text">Bengali</td>
                                                <td className="fw-bold silver-text">Basic to Advanced</td>
                                            </tr>
                                        </tbody>

                                        <br />
                                        <thead>
                                            <tr>
                                                <th scope="col" className="fw-normal silver-text">Category</th>
                                                <th scope="col" className="fw-normal silver-text">Node Version</th>
                                                <th scope="col" className="fw-normal silver-text">Instructor</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="fw-bold silver-text">Programming</td>
                                                <td className="fw-bold silver-text">14.15.5</td>
                                                <td className="fw-bold silver-text">Simanta Paul</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <hr />

                                    {/* Get The Most Out Of This Course */}
                                    <div>
                                        <h6 className="card-title silver-text fw-bold text-center py-2">Get The Most Out Of This Course</h6>

                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <FontAwesomeIcon icon={faShareAlt} className="me-2 text-danger" /> 3 Real Life Projects Shown
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faCopy} className="me-2 text-danger" /> Exclusive Resources
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <FontAwesomeIcon icon={faHandshake} className="me-2 text-danger" /> Mentor Support
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faCertificate} className="me-2 text-danger" /> Certificate After Completion
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <FontAwesomeIcon icon={faCode} className="me-2 text-danger" />Quizzes and Assignments
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faMobileAlt} className="me-2 text-danger" /> From Mobile, Tab or PC
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <FontAwesomeIcon icon={faUniversalAccess} className="me-2 text-danger" /> Lifetime Access
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faLocationArrow} className="me-2 text-danger" /> From Any Place
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <FontAwesomeIcon icon={faClock} className="me-2 text-danger" /> Self-Paced Learning
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faDollarSign} className="me-2 text-danger" />48 Hour Refund Policy
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CourseDetails;