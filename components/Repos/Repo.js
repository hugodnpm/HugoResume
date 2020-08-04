import React from 'react'

const repo = ({repo}) => {
    return(
        <div className='rounded bg-white mx-8 my-4 p-4 hover:shadow-md hover:bg-blue-100 border-b-2'>
                            <h3 className='font-bold'><a href={'https://github.com/' + repo.full_name} target='_blank' >{repo.full_name}</a></h3>
                            <p>language: {repo.language} / Starts: {repo.stargazers_count} </p>
                        </div>
    )
}
export default repo