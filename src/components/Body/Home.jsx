import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

import bannerimage from '../../assets/home_page_banner.png'
import { Link } from 'react-router-dom';
import { MdMiscellaneousServices } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";

import imageone from '../../assets/employ1.jpg';
import imagetwo from '../../assets/emplyee.webp';
import imagethree from '../../assets/soft.jpg';
import Marquee from "react-fast-marquee";
import { MdPsychology } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

import { MdOutlineSocialDistance } from "react-icons/md";

import { GiHumanTarget } from "react-icons/gi";

import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoBusinessOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";



const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            {/* banner section */}
            <section>
                {/* image */}
                <div className="  bg-black ">
                    <img src={bannerimage} className='bg-cover bg-center' alt="" />
                    <div className='grid grid-cols-3 mt-5 text-left'>
                        <div className='col-span-1 text-white p-5 border-r border-gray-400'>
                            <h1 className='text-[#A4DBC1] text-3xl font-semibold mb-4'>IELTS and Online Courses</h1>
                            <p className='font-semibold ml-3'>We’re offering free online IELTS preparatory program to all our registered students.</p>
                        </div>
                        <div className='col-span-1 text-white p-5 border-r border-gray-400'>

                            <h1 className='text-[#A4DBC1] text-3xl font-semibold mb-4'>Accommodation Arrange</h1>
                            <p className='font-semibold ml-3'>We provide special assistance upon request; i.e. Pick-up students. </p>
                        </div>
                        <div className='col-span-1 text-white p-5 '>
                            <h1 className='text-[#A4DBC1] text-3xl font-semibold mb-4'>Scholarship Arrangement</h1>
                            <p className='font-semibold ml-3'>We also guide the students to avail scholarships according to their merits.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#2A2515] pb-28'>
                    <div className='bg-[#F7F5E8] flex h-40 mx-auto items-center justify-center gap-9 rounded-b-full'>
                        <button className='btn bg-black border-none text-[#A4DBC1] text-xl font-semibold w-72 hover:rounded-full hover:bg-[#6b9481] hover:text-black'><Link></Link><span>See Our Service</span> <MdMiscellaneousServices className='text-white font-extrabold' />
                        </button>
                        <button className='btn bg-black border-none text-[#A4DBC1] text-xl font-semibold w-72 hover:rounded-full hover:bg-[#6b9481] hover:text-black'><Link></Link><span>Top Rated Super Team</span> <BsPersonGear className='text-white font-extrabold' />
                        </button>
                    </div>
                </div>
            </section>

            {/* second section */}
            <section>
                <div className='bg-[#181A1B] px-10 pb-40'>
                    <h1 className='text-7xl text-[#A4DBC1] font-semibold py-10 '>Transform Your Future Gols</h1>
                    <div className='grid grid-cols-3 mx-auto gap-5 justify-center'>

                        <div data-aos="fade-right" className="card col-span-1 bg-base-100  shadow-xl">
                            <figure className="">
                                <img
                                    src={imageone}
                                    alt="Shoes"
                                    className="rounded-t-xl h-72" />
                            </figure>
                            <div className="card-body bg-black items-center text-center rounded-b-xl ">
                                <h2 className="card-title text-left text-2xl font-bold text-white pb-16">Achieve Your Goals with Customized Financial Solutions</h2>


                            </div>
                        </div>
                        <div data-aos="flip-left" className="card col-span-1 bg-base-100 shadow-xl">
                            <figure className="">
                                <img
                                    src={imagetwo}
                                    alt="Shoes"

                                    className="rounded-t-xl h-72" />
                            </figure>
                            <div className="card-body bg-black items-center text-center rounded-b-xl ">
                                <h2 className="card-title text-left text-2xl font-bold text-white">Building Lasting Wealth Through Smart Management</h2>

                            </div>
                        </div>
                        <div data-aos="fade-left" className="card col-span-1 bg-base-100  shadow-xl">
                            <figure className="">
                                <img
                                    src={imagethree}
                                    alt="Shoes"
                                    className="rounded-t-xl h-72" />
                            </figure>
                            <div className="card-body bg-black items-center text-center rounded-b-xl ">
                                <h2 className="card-title text-left text-2xl font-bold text-white">Our goal is to help you plan, prepare, and create a future</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section three */}

            <section>
                <div className='bg-[#21222A] pb-14 '>
                    <div>
                        <h1 className='text-[#A4DBC1] text-7xl font-semibold pt-10'>What We Do</h1>
                        <p className='text-white w-[60%] mx-auto font-semibold pt-10'>We are focused on the top study destinations i.e. Canada, The United Kingdom, Sweden, Netherlands, Germany, Malaysia etc. We are the authorized representative of an array of well reputed institutions with a variety of subjects from where you can complete your desired level of education.</p>
                    </div>
                    
                    <div className='grid grid-cols-3 gap-4 mx-10 '>
                        <div className="card col-span-1    mt-8">
                            <span className='text-9xl font-bold text-white mx-auto my-5'> <MdPsychology></MdPsychology></span>
                            <div className="card-body text-center">
                                <h2 className=" text-[#A4DBC1] text-3xl font-bold text-center my-3">Free Counselling</h2>
                                <p className='text-white font-semibold'>We will help you find the suitable course based on your academic qualifications, test scores, specific interests and requirements.</p>

                            </div>
                        </div>
                        <div className="card col-span-1   mt-8">
                            <span className='text-9xl font-bold text-white mx-auto my-5'> <FaBookOpen></FaBookOpen></span>
                            <div className="card-body text-center">
                                <h2 className=" text-[#A4DBC1] text-3xl font-bold text-center my-3">IELTS and Online Courses</h2>
                                <p className='text-white font-semibold'>We’re offering free online IELTS preparatory program to all our registered students who need assistance in practicing for the test. Also, students can complete different online courses through us.</p>

                            </div>
                        </div>
                        <div className="card col-span-1  mt-8">
                            <span className='text-9xl font-bold text-white mx-auto my-5'> <MdOutlineSocialDistance></MdOutlineSocialDistance></span>
                            <div className="card-body text-center">
                                <h2 className=" text-[#A4DBC1] text-3xl font-bold text-center my-3">Sociology Managment</h2>
                                <p className='text-white font-semibold'>Explores social structures and cultural influences on career choices and workforce trends cultural influences on career choices and workforce trends</p>

                            </div>
                        </div>
                        <div className="card col-span-1  mt-8">
                            <span className='text-9xl font-bold text-white mx-auto my-5'> <GiHumanTarget></GiHumanTarget></span>
                            <div className="card-body text-center">
                                <h2 className=" text-[#A4DBC1] text-3xl font-bold text-center my-3">Human Resource Management</h2>
                                <p className='text-white font-semibold'>Teaches skills like career planning, resume building, and professional development, aligning career goals with market needs.
                                </p>

                            </div>
                        </div>
                        <div className="card col-span-1   mt-8">
                            <span className='text-9xl font-bold text-white mx-auto my-5'> <HiMiniCurrencyDollar></HiMiniCurrencyDollar></span>
                            <div className="card-body text-center">
                                <h2 className=" text-[#A4DBC1] text-3xl font-bold text-center my-3">Economics Specilist</h2>
                                <p className='text-white font-semibold'>Provides insights into job markets, employment trends, and financial aspects of career planning. Prepares individuals for careers in management, entrepreneurship, or corporate roles by aligning personal interests with business fields.</p>

                            </div>
                        </div>
                        <div className="card col-span-1  mt-8">
                            <span className='text-9xl font-bold text-white mx-auto my-5'> <IoBusinessOutline></IoBusinessOutline></span>
                            <div className="card-body text-center">
                                <h2 className=" text-[#A4DBC1] text-3xl font-bold text-center my-3">Information Technology</h2>
                                <p className='text-white font-semibold'>Relevant for tech-based career counseling, especially for students and professionals aiming for careers in IT or related industries.</p>

                            </div>
                        </div>
                        

                    </div>

                    <div className='flex text-center justify-center mt-6'>
                        <Link to={'/services'}><p className='text-white text-2xl font-bold flex items-center text-center  hover:btn hover:btn-outline hover:btn-secondary hover:text-2xl hover:font-bold'><span>See out Service</span> <span><FaLocationArrow className='text-[#A4DBC1] text-4xl font-bold pt-2' /></span> </p></Link>
                        
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;