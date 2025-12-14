'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    // Static data matching the page.contact.json content
    const faqs: FAQItem[] = [
        {
            question: "Returns and refunds",
            answer: "<p>Our customers' satisfaction is our number one priority.</p><p>We offer a full refund when the product has not been opened and is unused and a partial refund when the packaging can not be accounted for.</p><p>Please note that customers will be responsible for shipping costs.</p><p>Any returns must be in the original packaging with proof of purchase.</p>"
        },
        {
            question: "Our warranty policy",
            answer: "<p>Products under warranty should be handled with care.</p><p>If the products arrive with visible defects, please take photos of them and send them our way. We will reach back out to clear up all the details.</p>"
        },
        {
            question: "Payment security",
            answer: "<p>All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.</p>"
        },
        {
            question: "Delivery times",
            answer: "<p>Standard delivery usually takes around 7 business days. Please note that with the state of the global pandemic, orders may arrive later than usual.</p><p>If your order hasn't arrived after two weeks, please contact us and we will look into the details.</p>"
        },
        {
            question: "Back in stock notifications",
            answer: "<p>Products are stocked up on a regular basis.</p><p>If a product you want is out of stock, please feel free to shoot us a message with the product you are looking for in the subject line. We will send you a notifications when they are back in stock!</p>"
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-faq section-padding bg-paper">
            <div className="wrapper wrapper--narrow">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold uppercase tracking-widest">FAQ</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                            >
                                <span className="font-medium text-lg group-hover:text-gray-600 transition-colors">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                                )}
                            >
                                <div
                                    className="prose text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
