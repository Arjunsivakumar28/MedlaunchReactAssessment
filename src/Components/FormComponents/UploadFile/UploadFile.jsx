export const UploadFile = ({ label, id, onChange }) => {
    return (
        <div className='flex justify-center'>
            <label htmlFor={`file-${id}`} className='btn text-white transition-all delay-150 duration-300 ease-in-out hover:text-white border border-[#0056A3] bg-[#0056A3] hover:bg-[#004b8f] font-bold rounded-lg text-base px-8 py-4.5 text-center' >{label}</label>
            <input type='file' id={`file-${id}`} onChange={onChange} className='hidden'></input>
        </div>
    )
}
