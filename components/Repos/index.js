import React from 'react'
import getUser from '../../utils/getUser'
import Repo from '../Repos/Repo'

const Repos = ({ user, repos }) => {
    return(
        <div>
            <h2 className='font-bold text-3xl pt-4 pb-0'>Meus Repositórios no GitHub</h2>
            <p className='pb-4 pt-0'>Github stats: Public Repos: {user.public_repos} / Public_gists: {user.public_gists} / Followers: {user.followers} </p>
            <div className='grid grid-cols-2 gap-2'>
                {repos.map(repo => {
                    return (
                        <Repo key={repo.id} repo={repo}/>
                    )
                    })}
            </div>
        </div>
    )
}
export default Repos