"use client"
import FAQ from "./FAQ";

export function FAQs() {
    const faqs = [
        {
            question: 'What is CCF?',
            answer: 'CCF, or Committee for campus fauna is an administrative body consisting of students and faculty working together to cater to human - animal conflict and create a safe space for both. CCF promotes coexistence and works to educate the students, faculty and staff on Animal rights, Basic First aid of community animals, and coexistence.',
        },
        {
            question: 'Why do we need CCF?',
            answer: 'IIT Roorkee is a vast campus, and encountering animals, such as dogs and cats, and birds becomes inevitable, so is conflict. CCF acts as a bridge between humans and animals, solving any issue faced by either. Stray animals often face numerous challenges, including lack of food, shelter, and veterinary care. CCF helps to address these issues by providing compassionate care, including feeding programs, medical treatment, and sterilization. CCF also raises awareness about the importance of community animals, animal laws, need for vaccination, and the benefits of spaying and neutering. We also organize educational campaigns, workshops, and awareness programs to educate students, faculty, and the community about animal welfare issues.',
        },
        {
            question: 'What are the perks of being a CCF volunteer?',
            answer: 'The presence of an animal welfare committee in our campus provides an opportunity for students and faculty to engage with the community in meaningful ways. CCF  is an opportunity for students to actively participate in community service, develop leadership skills, learn basic first aid of community animals, and make a positive impact on society.',
        },
        {
            question: 'Does CCF only work for dogs?',
            answer: 'CCF as its name defines is a committee for all the fauna on our campus, since dogs and cats share the same living space they are the animals that mostly rely on humans for food and medical needs, and that is why we are mostly working for Cats and Dogs.',
        },
        {
            question: 'How does CCF deal with medical issues of dogs and cats?',
            answer: 'Whenever we receive information about a dog or cat going through a medical issue from concerned residents, we forward the issue to a group of volunteers where we ask for help. Any volunteer who is free takes the lead and the concerned animal is either taken to the veterinary hospital or provides treatment on the spot depending on the requirements.',
        },
        {
            question: 'How can I join CCF as a volunteer?',
            answer: 'You can Email us at ccf@iit.ac.in, after which you will be added in a whatsapp group where requests for feeding or medical cases are posted which you can participate in.',
        },
        {
            question: 'What are the prerequisites for being a CCF volunteer?',
            answer: 'The only prerequisite for being a volunteer is willingness.You can learn how to interact, feed or provide medical care with time as you volunteer in the same, there will always be someone to guide you in your journey. ',
        },
        {
            question: 'Do I need to be a dog/animal lover to join CCF?',
            answer: 'NO, CCF has verticals like Finance, content, design, web development etc. So if you are not head over heels for dogs and cats then also you can join CCF, provided that you understand coexistence and have empathy for them.',
        },
    ]

    return (
        <div id='#faq' className="bg-white px-20 py-20">
            <p className='text-primary text-6xl font-bold'>Frequently Asked Questions</p>
            <div className="py-12">
                <dl className="space-y-8">
                    {faqs.map((faq, index) => (
                        <FAQ faq={faq} key={index} />
                    ))}
                </dl>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <p className="text-quaternary text-2xl text-center font-semibold">Still have questions ?</p>
                <button className="mx-auto text-white text-base px-6 py-2 bg-quaternary rounded-md">Ask us {'->'}</button>
            </div>
        </div>
    )
}