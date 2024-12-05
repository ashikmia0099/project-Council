import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { HiOutlineStatusOffline } from "react-icons/hi";
import { IoIosRadioButtonOff } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

import { MdOutlineSubtitles } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoTimer } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { CgDollar } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";



const Services = () => {


    const [cards, setCards] = useState([]);


    useEffect(() => {

        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))


    }, []);

    // console.log(cards)


    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);



    return (
        <div>
            <div className='bg-black'>
                <div className='px-10 pb-20'>

                    <div>
                        <h1 className='text-[25em] text-[#F7F5E9] font-bold font-Bokor '>
                            <span className='mx-10'>O</span>
                            <span className='mx-10'>C</span>
                            <span className='mx-10'>E</span>
                            <span className='mx-10'>A</span>
                            <span className='mx-10'>N</span>
                        </h1>
                    </div>

                    <div className=' -mt-20'>
                        <p className=' text-4xl font-bold text-[#A4DBC1]'>Connect Ocean Council & Change Your Life</p>
                    </div>
                </div>
            </div>

            <div className='py-10 bg-[#18212F] pb-24'>
                <div className='flex items-center justify-between mx-20 mb-8'>
                    <h1 className='text-[#A4DBC1] text-2xl font-bold'>Our Councling service</h1>
                    <div className='space-x-6 flex'>
                        <button className='items-center flex font-bold text-white'><IoIosRadioButtonOff></IoIosRadioButtonOff><span className='font-bold text-white'>Online</span></button>
                        <button><span className=' flex items-center font-bold text-white'> <IoIosRadioButtonOff></IoIosRadioButtonOff>Ofline</span></button>
                    </div>
                </div>
                <div className='  grid grid-cols-3 mx-10 gap-5'>
                    {
                        cards.map(singlecard =>
                            <div data-aos="zoom-in-down" className="card   shadow-xl col-span-1 " key={singlecard.id} cards={singlecard}>
                                <figure>
                                    <img
                                        src={singlecard.image} className='h-60 w-full'
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-semibold flex items-center gap-2 text-white"> <span><MdOutlineSubtitles /></span> <span className='text-[#A4DBC1]'>{singlecard.service_name}</span> </h2>

                                    <div className='flex items-center justify-between text-white'>
                                        <h6 className="card-title "> <span><CgProfile /></span><span>{singlecard.counselor}</span></h6>
                                        <div className=' flex items-center space-x-2 '>
                                            <span className='font-semibold '><IoTimer></IoTimer></span>
                                            <p className='font-semibold  '>{singlecard.duration}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between text-white'>
                                        <div className='flex text-left space-x-2 items-center'>
                                            <span><BiCategory /></span>
                                            <p className='text-lg font-semibold'>{singlecard.category} </p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex text-yellow-400'>
                                                {
                                                    [...Array(5)].map((_,index)=>(<FaStar key={index} 
                                                        className={index < Math.floor(singlecard.rating)? '' : 'text-gray-200'}
                                                    >

                                                    </FaStar>))
                                                }
                                            </div>
                                           <p className='text-white'>{singlecard.rating}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between text-white'>
                                        <div className='flex text-left space-x-2 items-center'>
                                            <span><CgDollar/></span>
                                            <h3 className='text-xl font-bold '> {singlecard.pricing} </h3>
                                        </div>
                                        <div>
                                            <Link to={`details/${singlecard.id}`}><button className="btn px-14 rounded-full">Details</button></Link>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Services;
