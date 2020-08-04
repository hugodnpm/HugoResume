import React from 'react'

const Educations = () => {
    return(
        <div>
            <h2 className='font-bold text-2xl py-4'>Formação Academica</h2>
            <div className="flex bg-white border-b-2">
            <div className="flex-1 text-center px-4 py-2 m-2">Bacharel em Direito</div>
            <div className="flex-1 text-center px-4 py-2 m-2">Universidade Estácio de Sá</div>
            </div>
            <div className="flex bg-white ">
            <div className="flex-1 text-center px-4 py-2 m-2">Analise e Desenvolvimento de Software</div>
            <div className="flex-1 text-center px-4 py-2 m-2">UNICESUMAR - Universidade Cesumar</div>
            </div>
        </div>
    )
}

export default Educations