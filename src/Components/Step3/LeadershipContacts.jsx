import {useState, useEffect, useContext} from 'react'
import { FormContext } from '../FormContext/FormContext'
import { ContactCard } from './ContactCard/ContactCard'

function LeadershipContacts() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-start justify-center space-y-6`}>
            <h1 className='w-full text-left font-bold text-2xl text-[#343434] mb-10' >Contact Information</h1>
            <ContactCard title='Chief Executive Officer (CEO)' billing={false} label='ceo-card'/>
            <ContactCard title='Director of Quality' billing={false} label='doq-card'/>
            <ContactCard title='Invoicing Contact' billing={true} label='billing-card'/>

        </div>
    )

}

export default LeadershipContacts;