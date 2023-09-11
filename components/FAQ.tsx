import React, { useState } from "react";

export default function FAQ({ faq }: { faq: any }) {
    const [isOpen, setIsOpen] = useState(faq.open || false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <dt aria-expanded={isOpen ? 'true' : 'false'} onClick={toggle} className="cursor-pointer">
                <div className="flex justify-between">
                    <p className="text-xl font-medium text-quaternary">{faq.question}</p>
                    {isOpen ? <button className="rounded-full bg-quaternary h-8 w-8 text-white text-xl">-</button> : <button className="rounded-full bg-quaternary h-8 w-8 text-white text-xl">+</button>}
                </div>
            </dt>
            <dd className={!isOpen ? 'hidden' : ''}>
                <p className="text-secondary text-large">{faq.answer}</p></dd>
        </React.Fragment>
    )
}