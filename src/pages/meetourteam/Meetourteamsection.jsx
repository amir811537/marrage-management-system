import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const TeamMember = ({ name, role, image, phone, socialLinks }) => (
    <div className="bg-white p-4 shadow-lg rounded-lg">
        <img src={image} alt={name} className="w-full h-auto rounded-full mx-auto" />
        <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{role}</p>
            <p className="text-gray-600 mt-2">{phone}</p>
            <div className="mt-4">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className="text-blue-500 hover:text-blue-700 ml-2">
                        <i className={`fab ${link.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const Meetourteamsection = () => {
    const teamMembers = [
        {
            name: 'Williamson',
            role: 'Design Specialist',
            image: 'https://i.ibb.co/HpWzPyz/annie-spratt-Akftc-Huj-Umk-unsplash.jpg',
            phone: '123-456-7890',
            socialLinks: [
                { url: '#', icon: 'fa-facebook' },
                { url: '#', icon: 'fa-google-plus' },
                { url: '#', icon: 'fa-twitter' },
                { url: '#', icon: 'fa-linkedin' },
                { url: '#', icon: 'fa-pinterest-p' },
            ],
        },
        {
            name: 'Kristina',
            role: 'Management Specialist',
            image: 'https://i.ibb.co/6D3pRKR/shipman-northcutt-sg-ZX15-Da8-YE-unsplash.jpg',
            phone: '987-654-3210',
            socialLinks: [
                { url: '#', icon: 'fa-facebook' },
                { url: '#', icon: 'fa-google-plus' },
                { url: '#', icon: 'fa-twitter' },
                { url: '#', icon: 'fa-linkedin' },
                { url: '#', icon: 'fa-pinterest-p' },
            ],
        },
        {
            name: 'John',
            role: 'Photography Specialist',
            image: 'https://i.ibb.co/6nLZX88/thom-holmes-I2lg-3ns-GI-unsplash.jpg',
            phone: '555-123-4567',
            socialLinks: [
                { url: '#', icon: 'fa-facebook' },
                { url: '#', icon: 'fa-google-plus' },
                { url: '#', icon: 'fa-twitter' },
                { url: '#', icon: 'fa-linkedin' },
                { url: '#', icon: 'fa-pinterest-p' },
            ],
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Meet Our Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            phone={member.phone}
                            socialLinks={member.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Meetourteamsection;
