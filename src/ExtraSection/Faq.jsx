
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Faq = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            offset: 100,
        });
        AOS.refresh();
    }, []);
    

    return (
        <section data-aos="fade-up" className="dark:bg-gray-100 rounded-lg  dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl animate-pulse text-center">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-center dark:text-gray-600">
                    Explore answers to the most common questions about our Sustainable Cycling Tour and eco-adventure services.
                </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What does the Sustainable Cycling Tour include?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            The tour includes a bicycle, helmet, and a professional guide. Additionally, you'll enjoy stops at eco-friendly locations.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How eco-friendly is this tour?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            The tour is completely carbon-neutral, featuring eco stops and sustainable transportation methods to minimize environmental impact.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What should I bring for the cycling tour?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            We recommend wearing reflective clothing, staying hydrated, and following cycling rules for a safe and enjoyable experience.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What is the maximum group size for this tour?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            The maximum group size for the Sustainable Cycling Tour is 10 participants to ensure personalized attention and safety.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Is the tour suitable for beginners?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Yes, the tour is rated "Easy" and is perfect for beginners. The route is designed to be comfortable and enjoyable for all skill levels.
                        </p>
                    </details>
                </div>
            </div>
        </section>

    );
};

export default Faq;




