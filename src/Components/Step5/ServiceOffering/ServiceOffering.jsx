import React, { useEffect, useState, useContext } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { TopNavBar } from '../../FormComponents/TopNavBar/TopNavBar'
import { SearchBar } from '../../FormComponents/SearchBar/SearchBar'
import { OptionsCard } from '../../FormComponents/OptionsCard/OptionsCard'
import { ClearButton } from '../../Buttons/ClearButtonComponent/ClearButton'
import { OtherServices } from '../OtherServices/OtherServices'

// navigation bar sections
const navs = ['All Services', 'Clinical', 'Surgical', 'Diagonstic', 'Rehabilitation', 'Speciality']

// services offered list
const services = {
    'Emergency & Critical Care': ['Emergency Department', 'Neonatal internsive care', 'Pediatric internsive care', 'Prediatrice normal care'],
    'Cardiac Services': ['Cardiac catheterization lab', 'open heart'],
    'Diagnostic Services': ['mri', 'diagnostic radiostop facility', 'lithptripsy'],
    'Rehabilitation Services': ['physical rehabilitation', 'physical therapy', 'occupational therapy', 'speech/language therapy', 'audiology']
}

// main service offering component of step 5
export const ServiceOffering = () => {

    const { state, dispatch } = useContext(FormContext)
    const [section, setSection] = useState('AllService')
    const [sectionCard, setSectionCard] = useState(services)
    const [query, setQuery] = useState('')
    const [otherServices, setOtherServices] = useState(state.values.step5?.['other-services']?.length > 0)

    // filter services based on section selected in navigation
    useEffect(() => {
        let newStatus
        switch (section) {
            case 'All Services':
                newStatus = services;
                break
            case 'Clinical':
                newStatus = {};
                break
            case 'Surgical':
                newStatus = { 'Emergency & Critical Care': services['Emergency & Critical Care'] }
                break
            case 'Diagonstic':
                newStatus = { 'Diagnostic Services': services['Diagnostic Services'] }
                break
            case 'Rehabilitation':
                newStatus = { 'Rehabilitation Services': services['Rehabilitation Services'] }
                break
            case 'Speciality':
                newStatus = { 'Cardiac Services': services['Cardiac Services'] }
                break
            default:
                newStatus = services
        }
        setSectionCard(newStatus);
    }, [section])

    return (
        <div className='service-offering w-full flex flex-col jutsify-center items-start space-y-2' >
            <h1 className='font-bold text-2xl text-[#343434] mb-2' >Service Offering</h1>
            <p className='font-medium text-sm text-[#808080] mb-5' >Primary Site Service offering</p>
            <TopNavBar navs={navs} selected={section} setSelected={setSection} />
            <SearchBar query={query} setQuery={setQuery} />
            <div className='option-card-container w-full grid grid-cols-2 gap-4'>

                {/* filtering services based on section and search query */}
                {Object.entries(sectionCard).map(([key, service]) => (
                    query == '' ? <OptionsCard key={key} step='step5' title={key} options={service} /> :
                        (key.toLowerCase().includes(query) || service.some(item => item.toLowerCase().includes(query))) && <OptionsCard key={key} step='step5' title={key} options={service} />
                ))}
            </div>

            <ClearButton
                text='Other Services'
                type='button'
                click={() => setOtherServices(!otherServices)}
                calssname=''
            />
            {otherServices && <OtherServices />}

        </div>
    )
}
