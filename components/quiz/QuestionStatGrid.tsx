import React from 'react'


function generateDummyArray(n: number) {
    let array = []
    for (let i = 1; i <= n; i++) {
        array.push(i)
    }
    return array
}


export const QuestionStatGrid = () => {

    const dummyArray = generateDummyArray(100)

    return (
        <div className='flex flex-col items-start justify-start'>
            <h2 className='text-[#3d4e61] font-bold text-lg'>Questions</h2>

            {/* GRID CONTAINER  */}
            <div className='grid grid-cols-5  w-full gap-3 mt-5 h-[550px] overflow-x-hidden overflow-y-auto'>
                {dummyArray.map((item, index) => (
                    <p key={index} className='border-2 border-green-500 text-green-600 
                    cursor-pointer hover:bg-green-600 hover:text-white 
                    rounded-md w-10 h-10 flex items-center justify-center 
                    transition-all ease-linear'>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}
