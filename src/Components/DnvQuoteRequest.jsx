import { useState, useEffect } from 'react'

function DnvQuoteRequest() {

    const [active, setActive] = useState(false)
    const [verify, setVerify] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    const verifyEmail = () => {
        console.log('verify email')
        setVerify(true)
    }

    return (
        <form className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-center space-y-16 mb-8`}>
            <div className='healthcare-org w-full flex flex-col items-start space-y-8 ' >
                <h1 className='mb-8 text-2xl font-bold text-[#4E4E4E]'>Identify Healthcare Organization</h1>
                <label name='entity-name' className='entity-name flex flex-col items-start justify-start w-full mb-5'>
                    <p className='label-text  text-base font-bold text-[#343434] mb-3' >Legal Entity Name*</p>
                    <input type='text' id='entity-name' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                </label>
                <label name='entity-name' className='entity-name flex flex-col items-start justify-start w-full mb-2'>
                    <p className='label-text  text-base font-bold text-[#343434] mb-3' >Doing Business As (d/b/a) Name</p>
                    <input type='text' id='entity-name' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                </label>
                <label className='flex items-center mb-4'>
                    <input id='default-checkbox' type='checkbox' value='' className='w-5 h-5 text-[#0056A3] bg-transparent border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2' />
                    <p className='ms-2 text-base font-bold text-black'>Same as Legal Entity Name</p>
                </label>
            </div>
            <div className='primary-contact-info w-full flex flex-col items-start space-y-8' >
                <div className='title flex flex-col items-start justify-start w-full mb-5'>
                    <h1 className='text-2xl font-bold text-[#4E4E4E] mb-2'>Primary Contact Information</h1>
                    <p className='sub-text text-sm font-medium text-[#808080]'>Primary contact receives all DNV Healthcare official communications</p>
                </div>
                <div className='names w-full flex justify-stretch items-center mb-5'>
                    <label name='first-name' className='first-name flex flex-col items-start justify-start w-full'>
                        <p className='label-text  text-base font-bold text-[#343434] mb-3' >First Name *</p>
                        <input type='text' id='first-name' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                    </label>
                    <label name='last-name' className='last-name flex flex-col items-start justify-start w-full ms-2'>
                        <p className='label-text  text-base font-bold text-[#343434] mb-3' >Last Name *</p>
                        <input type='text' id='last-name' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                    </label>
                </div>
                <label name='title-name' className='title-name flex flex-col items-start justify-start w-full mb-5'>
                    <p className='label-text  text-base font-bold text-[#343434] mb-3' >Title *</p>
                    <input type='text' id='title-name' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                </label>
                <div className='phones w-full flex justify-stretch items-center mb-5'>
                    <label name='work-phone' className='work-phone flex flex-col items-start justify-start w-full'>
                        <p className='label-text  text-base font-bold text-[#343434] mb-3' >Work Phone *</p>
                        <input type='text' id='work-phone' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                    </label>
                    <label name='cell-phone' className='cell-phone flex flex-col items-start justify-start w-full ms-2'>
                        <p className='label-text  text-base font-bold text-[#343434] mb-3' >Cell Phone</p>
                        <input type='text' id='cell-phone' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3' />
                    </label>
                </div>
                <div name='email-address' className='email-address flex flex-col items-start justify-start w-full mb-5'>
                    <div className='w-full flex justify-between items-center mb-3'>
                        <p className='email text-base font-bold text-[#343434]'>Email *</p>
                        <svg width='30px' height='30px' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'><path d='M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z' /><path d='M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z' /><path d='M18 24h-2v-6h-6v-2h8z' /><path d='M40 34h-8v-8h2v6h6z' /></svg>
                    </div>
                    <input type='text' id='email' className='w-full bg-transparent rounded-lg border border-[#4E4E4E] text-base text-[#4E4E4E] p-3 mb-3' />
                    <div className='email-btns w-full flex justify-between items-center mb-5'>
                        <button type='button' className='transition-all delay-150 duration-300 ease-in-out text-[#0056A3] hover:text-white border border-[#0056A3] hover:bg-[#0056A3] font-bold rounded-lg text-sm px-8 py-4.5 text-center' onClick={verifyEmail}>Send Verification Email</button>
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
            </div>

        </form>
    )

}

export default DnvQuoteRequest;