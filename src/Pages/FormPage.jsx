import {useState} from 'react'
import DnvQuoteRequest from '../Components/DnvQuoteRequest'
import FacilityDetails from '../Components/FacilityDetails'
import LeadershipContacts from '../Components/LeadershipContacts'
import ReviewAndSubmit from '../Components/ReviewAndSubmit'
import ServicesAndCertification from '../Components/ServicesAndCertification'
import SiteInformation from '../Components/SiteInformation'

function FormPage() {

    const [step, setStep] = useState(1)

    const next = () => {
        setStep(step + 1)
    }

    const back = () => {
        setStep(step - 1)
    }

    const submit =() => {
        console.log("submit")
        console.log(step)
        setStep(1)
    }


    return (
        <div>
            <div className="flex space-x-2 mb-4">
                {[1, 2, 3, 4, 5, 6].map((s) => (
                    <div
                    key={s}
                    className={`w-full h-2 rounded ${s <= step ? "bg-blue-600" : "bg-gray-300"}`}
                    />
                ))}
            </div>

            <h1 className="font-[Times_New_Roman]" >Form Page</h1>
            <div>
                {step == 1 && <DnvQuoteRequest next={next} />}
                {step == 2 && <FacilityDetails next={next} back={back} />}
                {step == 3 && <LeadershipContacts next={next} back={back} />}
                {step == 4 && <SiteInformation next={next} back={back} />}
                {step == 5 && <ServicesAndCertification next={next} back={back} />}
                {step == 6 && <ReviewAndSubmit back={back} submit={submit}/>}
            </div>
        </div>
    );
}

export default FormPage;