import React from 'react'

const Repos = ({user, repos}) => {
    return (
        <div>
            <h2 className='font-bold text-2xl pt-4 pb-0'>Meus Repositórios no GitHub</h2>
            <p className='pb-4 pt-0'>Github stats: Public Repos: {user.public_repos} / Public_gists: {user.public_gists} / Followers: {user.followers} </p>
            <div className='grid grid-cols-2 gap-1'>
                {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-white mx-8 p-4 hover:shadow-md hover:bg-blue-100 border-b-2'>
                    <h3 className='font-bold'><a href={'https://github.com/' + repo.full_name} target='_blank' >{repo.full_name}</a></h3>
                    <p>Language: {repo.language} / Starts: {repo.stargazer_count} </p>
                    </div>
                    )

                            })}
                        </div>
                    </div>
    )
}

export default Repos