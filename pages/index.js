import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import Tech from '../components/Tech';
import Educations from '../components/Educations';

const Index = ({ repos, user }) => {
    return (

        <div className='container mx-auto'>
            <PageHead/>
            
            <div className='flex flex-col-reverse md:flex-row-reverse flex-wrap'>
                <div className="w-full md:w-3/4 p-4 text-center text-blue-700 ">
                    
                    <div>
                        <h2 className='font-bold text-2xl pt-4 pb-0'>Meus Repositórios no GitHub</h2>
                        <p className='pb-4 pt-0'>Github stats: Public Repos: {user.public_repos} / Public_gists: {user.public_gists} / Followers: {user.followers} </p>
                        <div className='grid grid-cols-2 gap-2'>
                            {repos.map(repo => {
                                return (
                                    <div key={repo.id} className='rounded bg-white mx-8 my-4 p-4 hover:shadow-md hover:bg-blue-100 border-b-2'>
                                    <h3 className='font-bold'><a href={'https://github.com/' + repo.full_name} target='_blank' >{repo.full_name}</a></h3>
                                        <p>Language: {repo.language} / Starts: {repo.stargazer_count} </p>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                    <Educations/>
                    <Tech/>
                </div >
                <div className="w-full md:w-1/4 bg-white p-4 text-center text-blue-700 ">
                    <div><img className='w-auto object-center sm:object-center md:object-center inline-block ' src='/images/hugo07.png' /></div>
                    <h1 className='text-center text-base py-4 border-b-2 bg-opacity-50'>Hugo Carvalho</h1>
                    <p className='text-center text-base py-4 border-b-2'>Full Stack Developer</p>
                    <p className='text-center text-base py-4 border-b-2 '>hugosc@gmail.com</p>
                    <p className='text-center text-base py-4 border-b-2'>Rio de Janeiro, RJ</p>
                    <p className='py-4'><button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">
                        Download Resume
                    </button></p>
                    
                        <div >
                        <div className='text-4xl text-bluePale inline-block'><a href='https://www.linkedin.com/in/dev-hugo-carvalho/' target='_blank'><FaLinkedin/></a></div>
                        <div className='text-4xl text-bluePale inline-block'><a href='https://github.com/hugodnpm' target='_blank'><FaGithubSquare/></a></div>
                        </div>
                    
                </div>
                <div>

                </div>
            </div>
            
        </div>
    )
}
export async function getServerSideProps(context) {
    
    const request = await fetch(process.env.API_URL + '/api/getUser')
    const { repos, user } = await request.json()


    return {
        props: {
            repos,
            user
        }
    }
}
export default Index