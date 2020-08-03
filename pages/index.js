import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { BsFillEnvelopeFill } from "react-icons/bs";

const Index = ({ repos, user }) => {
    return (


        <div className='container mx-auto'>
            <head>
                <title>Hugo Carvalho - Fullstack Developer</title>
            </head>

            <div className='flex flex-col-reverse md:flex-row-reverse flex-wrap'>
                <div className="w-full md:w-3/4 p-4 text-center text-blue-700 bg-gray-100">
                    <div>
                        <h2 className='font-bold text-4xl py-6'>Tecnologia</h2>
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-4 lg:gap-0 lg:px-10 items-center">
                            <img src="/techs/javascript.svg" alt='javascript' className="w-20" />
                            <img src="/techs/html-5.svg" alt='html-5' className="w-20" />
                            <img src="/techs/css3.svg" alt='css3' className="w-20" />
                            <img src="/techs/bootstrap-4.svg" alt='bootstrap' className="w-20" />
                            <img src="/techs/tailwind.png" alt='tailwind' className="w-20" />
                            <img src="/techs/git-icon.svg" alt='git-icon' className="w-20" />
                            <img src="/techs/nodejs.svg" alt='nodejs' className="w-20" />
                            <img src="/techs/json.svg" alt='json' className="w-20" />
                            <img src="/techs/ejs.png" alt='ejs' className="w-20" />
                            <img src="/techs/express.png" alt='express' className="w-20" />
                            <img src="/techs/nextjs-3.svg" alt='nextjs-3' className="w-20" />
                            <img src="/techs/sqlite.svg" alt='sqlite' className="w-20" />
                            <img src="/techs/sequelize.svg" alt='sequelize' className="w-20" />
                            <img src="/techs/mysql.svg" alt='mysql' className="w-20" />
                            <img src="/techs/firebase-1.svg" alt='firabase' className="w-20" />
                            <img src="/techs/mongodb.svg" alt='mongodb' className="w-20" />


                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-3xl pt-4 pb-0'>Meus Repositórios no GitHub</h2>
                        <p className='pb-4 pt-0'>Github stats: Public Repos: {user.public_repos} / Public_gists: {user.public_gists} / Followers: {user.followers} </p>
                        <div className='grid grid-cols-2 gap-2'>
                            {repos.map(repo => {
                                return (
                                    <div key={repo.id} className='rounded bg-white mx-8 my-4 p-4 hover:shadow-md hover:bg-blue-100 border-b-2'>
                                    <h3 className='font-bold'><a href={'https://github.com/' + repo.full_name} target='_blank' >{repo.full_name}</a></h3>
                                        <p>language: {repo.language} / Starts: {repo.stargazers_count} </p>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-3xl py-4'>Formação Academica</h2>
                        <div className="flex bg-white border-b-2">
                            <div className="flex-1 text-center px-4 py-2 m-2">Bacharel em Direito</div>
                            <div className="flex-1 text-center px-4 py-2 m-2">Universidade Estácio de Sá</div>
                        </div>

                        <div className="flex bg-white ">
                            <div className="flex-1 text-center px-4 py-2 m-2">Analise e Desenvolvimento de Software</div>
                            <div className="flex-1 text-center px-4 py-2 m-2">UNICESUMAR - Universidade Cesumar</div>
                        </div>
                    </div>
                </div >
                <div className="w-full md:w-1/4 bg-white p-4 text-center text-blue-700 ">
                    <div><img className='object-center sm:object-center md:object-center lg:object-center xl:object-center inline-block ' src='/images/hugo05.png' /></div>
                    <h1 className='uppercase text-center text-3xl py-4 border-b-2 bg-opacity-50'>Hugo Carvalho</h1>
                    <p className='uppercase text-center text-2xl py-4 border-b-2'>Full Stack Developer</p>
                    <p className='uppercase text-center text-2xl py-4 border-b-2 '>hugosc@gmail.com</p>
                    <p className='uppercase text-center text-2xl py-4 border-b-2'>Rio de Janeiro, RJ</p>
                    <p className='py-4'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">
                        Download Resume
                    </button></p>
                    
                        <div >
                        <div className='text-6xl text-bluePale inline-block'><a href='https://www.linkedin.com/in/dev-hugo-carvalho/' target='_blank'><FaLinkedin/></a></div>
                        <div className='text-6xl text-bluePale inline-block'><a href='https://github.com/hugodnpm' target='_blank'><FaGithubSquare/></a></div>
                        </div>
                    
                </div>
                <div>

                </div>
            </div>
            
        </div>
    )
}
export async function getServerSideProps(context) {
    const { repos, user } = await getUser('hugodnpm')


    return {
        props: {
            repos,
            user
        }
    }
}
export default Index