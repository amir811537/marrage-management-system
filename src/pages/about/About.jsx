import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-semibold mb-6">About Us</h1>
                    <p className="text-gray-700 mb-8">
                        Welcome to our Wedding Management Service! We are dedicated to making your special day unforgettable.
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        Our mission is to create beautiful and memorable weddings for our clients. We believe that every couple deserves a wedding that reflects their unique love story.
                    </p>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                    <p className="text-gray-700">
                        We offer a wide range of services to make your wedding planning stress-free. From venue selection to catering, we've got you covered.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
