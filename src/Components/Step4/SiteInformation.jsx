import { useState, useEffect, useContext } from 'react'
import { SiteCard } from './SiteCard/SiteCard';
import { FormContext } from '../FormContext/FormContext';
import { ManageFiles } from './ManageFiles/ManageFiles';


// Step 4 main page
function SiteInformation() {

    const [active, setActive] = useState(false)
    const { state, dispatch } = useContext(FormContext)


    useEffect(() => {
        const timer = setTimeout(() => setActive(true), 10)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`container transition-all delay-150 duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} w-full h-full bg-transparent flex flex-col items-start justify-center space-y-6`}>
            <SiteCard />
            {state.values['step4']['location-type'] == 'multi' && <ManageFiles />}
        </div>
    )

}

export default SiteInformation;