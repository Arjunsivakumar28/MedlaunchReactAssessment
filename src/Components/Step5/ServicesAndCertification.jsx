import {useState, useEffect} from 'react'
import { ServiceOffering } from './ServiceOffering/ServiceOffering'
import { StandardsToApply } from './StandardsToApply/StandardsToApply'

function ServicesAndCertification() {

    const [active, setActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-start justify-center space-y-6`}>
            <ServiceOffering />
            <StandardsToApply />
        </div>
    )


}

export default ServicesAndCertification;