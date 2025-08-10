import React, {useState} from 'react'
import { ClearButton } from '../../Buttons/ClearButtonComponent/ClearButton'

export const EmailAddress = ({setAddress, verify, setVerify}) => {

    // handle email verfifiction
    const verifyEmail = () => {
        console.log('verify email')
        setVerify(true)
    }

  return (
    <div name='email-address' className='email-address flex flex-col items-start justify-start w-full'>
        <div className='w-full flex justify-between items-center mb-3'>
            <p className='email text-base font-bold text-[#343434]'>Email *</p>
            <svg width='30px' height='30px' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'><path d='M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z' /><path d='M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z' /><path d='M18 24h-2v-6h-6v-2h8z' /><path d='M40 34h-8v-8h2v6h6z' /></svg>
        </div>
        <input onChange={(e) => setAddress(e.target.value)} name='email' type='text' id='email' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3 mb-3'/>
        
        <div className='email-btns w-full flex justify-between items-center mb-5'>
            <ClearButton text='Send Verification Email' type='button' click={verifyEmail} classname='' /> 
            <button type='button' className={`transition-all delay-150 duration-300 ease-in-out text-[#A16800] ${verify ? 'bg-[#ffd230] opacity-100' : 'bg-[#FBEFC4] opacity-100'} font-bold rounded-full text-sm px-8 py-3 text-center me-2 mb-2`} disabled>
                <span className={`transition-opacity delay-150 duration-300 ease-in-out ${verify ? 'inline' : 'hidden'}`}>
                    Verified
                </span>
                <span className={`transition-opacity delay-150 duration-300 ease-in-out ${verify ? 'hidden' : 'inline'}`}>
                    Not Verified
                </span>
            </button>
        </div>
    </div>
  )
}
