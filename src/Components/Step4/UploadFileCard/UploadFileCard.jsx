import React, { use, useContext, useEffect, useState } from 'react'
import { FormContext } from '../../FormContext/FormContext'
import { UploadFile } from '../../FormComponents/UploadFile/UploadFile'
import { PreviewFileList } from '../PreviewFileList/PreviewFileList'

// upload file component of step 4
export const UploadFileCard = () => {
    const { state, dispatch } = useContext(FormContext)
    const files = state.values?.step4?.csvFiles || []

    // upload the file
    const onChange = (e) => {
        const selected = Array.from(e.target.files || [])
        if (selected.length) {
            dispatch({
                type: 'SET_VALUE',
                step: 'step4',
                field: 'csvFiles',
                payload: [...files, ...selected],
            });
        }

    }

    // remove file
    const onRemove = (index) => {
        const next = files.filter((_, i) => i !== index)
        dispatch({ type: 'SET_VALUE', step: 'step4', field: 'csvFiles', payload: next })
    }

    return (
        <div className='w-full bg-[#E2F0F8] border border-[#BBBBBB] rounded-lg p-6' >
            <div className='w-full flex flex-col items-center justify-center space-y-2 bg-white border border-dashed p-10 mb-4'>
                <div className='upload-buttons w-1/2 flex flex-col items-center justify-center space-y-2'>
                    <svg width="50px" height="50px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-file-upload">

                        <title>1126</title>

                        <defs>

                        </defs>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(1.000000, 1.000000)" fill="#434343">
                                <path d="M14,8.047 L14,12.047 L2,12.047 L2,8.047 L0,8.047 L0,15 L15.969,15 L15.969,8.047 L14,8.047 Z" class="si-glyph-fill">

                                </path>
                                <path d="M7.997,0 L5,3.963 L7.016,3.984 L7.016,8.969 L8.953,8.969 L8.953,3.984 L10.953,3.984 L7.997,0 Z" class="si-glyph-fill">

                                </path>
                            </g>
                        </g>
                    </svg>
                    <h1 className='text-center text-black font-bold text-base mt-8 '>Upload Site Information</h1>
                    <p className='text-center text-[#707070] font-normal text-xs'>Drag and drop your CSV or Excel file here, or click to select</p>
                    <UploadFile label='Select File' id='step4-csv' onChange={onChange} />
                    <div className='text-[#1A3A70] font-bold text-base' >
                        Download CSV Template
                    </div>

                </div>

            </div>

            <PreviewFileList files={files} onRemove={onRemove} />
        </div>
    )
}
