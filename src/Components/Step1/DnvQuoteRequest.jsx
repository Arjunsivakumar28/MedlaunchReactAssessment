import { useState, useEffect} from 'react'
import { EntityName } from './EntityName/EntityName'
import { PrimaryContact } from './PrimaryContact/PrimaryContact'

// Step 1 main page
function DnvQuoteRequest() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-center`}>
            <EntityName />
            <PrimaryContact />
        </div>
    )

}

export default DnvQuoteRequest;