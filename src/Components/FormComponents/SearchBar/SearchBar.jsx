import React from 'react'

export const SearchBar = ({ query, setQuery }) => {
    return (
        <div className='w-full flex justify-between items-center border border-[#BBBBBB] px-2 rounded-lg mb-2' >
            <input 
                type='search' 
                value={query} 
                placeholder='Search...' 
                className='w-full h-11 outline-none px-10 pr-10' 
                onChange={(e) => setQuery(e.target.value)} />
            <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M21 21l-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    )
}
