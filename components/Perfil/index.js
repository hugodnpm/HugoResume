import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Perfil = () => {
    return(
        <div className="w-full md:w-1/4 bg-white p-4 text-center text-blue-700 ">
                    <div><img className='w-auto object-center sm:object-center md:object-center inline-block ' src='/images/hugo07.png' /></div>
                    <h1 className='text-center text-base py-4 border-b-2 bg-opacity-50'>Hugo Carvalho</h1>
                    <p className='text-center text-base py-4 border-b-2'>Full Stack Developer</p>
                    <p className='text-center text-base py-4 border-b-2 '>hugosc@gmail.com</p>
                    <p className='text-center text-base py-4 border-b-2'>Rio de Janeiro, RJ</p>
                    <div className='mt-8'>
                        <div className=' text-5xl inline-block  md:text-6xl inline-block mr-6 text-bluePale'><a href='https://www.linkedin.com/in/dev-hugo-carvalho/' target='_blank'><FaLinkedin/></a></div>
                        <div className='text-5xl inline-block  md:text-6xl inline-block mr-6 text-bluePale '><a href='https://github.com/hugodnpm' target='_blank'><FaGithubSquare/></a></div>
                    </div>
                    
                </div>
    )
}
export default Perfil