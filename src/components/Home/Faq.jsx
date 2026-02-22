import React from 'react'

const Faq = ({ faqList }) => {
    return (
        <div className='flex flex-col gap-2 w-64 md:w-96 lg:w-[700px]'>
            {
                faqList.map((item, index) => (
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300" key={index}>
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">{item.question}</div>
                        <div className="collapse-content text-sm">{item.answer}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Faq