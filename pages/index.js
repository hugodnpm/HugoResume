import React, { useReducer } from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl'>Olá! Eu sou <span className='font-bold'>Hugo Carvalho</span></h1>
            <h2 className='font-bold text-3xl'>Meus Repositórios no GitHub</h2>
            <p>Github stats: Public Repos: {user.public_repos} / Public_gists: {user.public_gists} / Followers: {user.followers} </p>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>language: {repo.language} / Starts: {repo.stargazers_count} </p>
                    </div>
                )

            })}
        </div>
    )
}
export async function getServerSideProps(context) {
    const {repos, user } = await getUser('hugodnpm')


    return {
        props: {
            repos,
            user
        }
    }
}
export default Index