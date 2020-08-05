import React from 'react'
import PageHead from '../components/PageHead';
import Tech from '../components/Tech';
import Educations from '../components/Educations';
import Repos from '../components/Repos';
import Perfil from '../components/Perfil';

const Index = ({ repos, user }) => {
    return (

        <div className='container mx-auto'>
            <PageHead/>            
            <div className='flex flex-col-reverse md:flex-row-reverse flex-wrap'>
                <div className="w-full md:w-3/4 p-4 text-center text-blue-700 ">                    
                    <Repos user={user} repos={repos}/>
                    <Educations/>
                    <Tech/>
                </div >
                <Perfil/>
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