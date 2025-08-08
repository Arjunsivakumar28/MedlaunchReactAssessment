function SiteInformation() {
    return(
        <div>
            <h1 className='mb-3 text-2xl font-bold tracking-tight text-gray-900' >SiteInformation</h1>
            <form>
                <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Name:
                    <input type='text' id='name' className='bg-gray-50 border border-gray-300 text-gray-900' />
                </label>
            </form>
        </div>
    )
    
}

export default SiteInformation;