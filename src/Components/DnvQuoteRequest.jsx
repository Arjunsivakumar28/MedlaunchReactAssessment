function DnvQuoteRequest({next}) {
    return(
        <div>
            <h1 className='mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white' >DnvQuoteRequest</h1>
            <form>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name:
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900" />
                </label>
                <button onClick={next} >Next</button>
            </form>
        </div>
    )
    
}

export default DnvQuoteRequest;