import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { MdOutlineSubtitles } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoTimer } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { CgDollar } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


import imageone from '../../assets/employ1.jpg';
const Details = () => {


    

    const data = useLoaderData()
    const backdata = data[0]
    
    const { id } = useParams();

    const productid = parseInt(id);
    const product = data.find(product => product.id === productid);

    const { image, service_name, category, description, pricing, duration, date, counselor, rating, learn_more, additional_info } = product;

    return (
        <div>
            <div className='grid grid-cols-2 bg-[#181A1B]  p-10'>
                {/* image div */}
                <div className=' col-span-1'>
                    <img src={image} className='w-full rounded-xl' alt="" />
                </div>

                {/* text div */}
                <div className='col-span-1 text-left mx-6 '>
                    <h1 className='flex items-center gap-5 text-3xl font-bold mt-3'> <MdOutlineSubtitles className='text-white' /> <span className='text-[#A4DBC1] '>{service_name}</span></h1>
                    <h1 className='flex items-center gap-5 text-3xl font-semibold mt-3'><span className='text-gray-400'><CgProfile /></span> <span className='text-white'> {counselor}</span></h1>
                    <h4 className='flex items-center gap-5 text-2xl font-semibold mt-3'> <span className='text-gray-400'><BiCategory /></span> <span className='text-white'>{category}</span></h4>
                    <h4 className='flex items-center gap-5 text-2xl font-semibold mt-3'> <span className='text-gray-400'><CgDollar /></span> <span className='text-white'>{pricing}</span></h4>
                    <div className='flex gap-14 mt-3'>
                        <h4 className='flex items-center gap-5 text-xl font-semibold'> <span className='text-gray-400'><IoTimer /></span> <span className='text-white'>{duration}</span></h4>
                        <h4 className='flex items-center gap-3 text-xl font-semibold'> <span className='text-gray-400'><FaCalendarAlt /></span> <span className='text-white'>{date}</span></h4>
                    </div>

                    <div className='flex items-center gap-10 mt-3'>
                        <h4 className='flex items-center gap-5 text-xl font-semibold'> <span className='text-gray-400'><FaLocationDot /></span> <span className='text-white'>{additional_info.location}</span></h4>

                        <h4 className='flex items-center gap-5 text-xl font-semibold '> <span className='text-gray-400'><CgProfile /></span> <span className='text-white'>{additional_info.max_participants} Preson participant maximum</span></h4>
                    </div>

                    <h4 className='flex items-center gap-5 text-2xl font-semibold mt-3'>

                        <div className='flex text-yellow-400'>
                            {
                                [...Array(5)].map((_, index) => (<FaStar key={index}
                                    className={index < Math.floor(rating) ? '' : 'text-gray-200'}
                                >

                                </FaStar>))
                            }
                        </div>

                        <p className='text-white'>{rating}</p>



                    </h4>

                    <div className='mt-5 gap-10 flex justify-around'>
                       <Link to={learn_more}> <button className="btn px-10 rounded-full text-xl font-bold">Learn More  </button></Link>

                        <Link to={`/services`}><button className="btn px-10 rounded-full text-xl font-bold">Back to service</button></Link>
                    </div>

                </div>
            </div>

            {/* description site */}
            <div className='bg-slate-900 py-16'>
                <h1 className='text-white font-semibold text-3xl pb-7 '>Description</h1>
                <p className='text-lg text-white mx-20 text-left'>{description}</p>
            </div>
        </div>
    );
};

export default Details;


