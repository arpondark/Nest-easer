'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaMapMarkerAlt, FaClock, FaSearch } from 'react-icons/fa';

// Mock service categories
const serviceCategories = [
  { id: 1, name: 'Cleaning', icon: '🧹', color: 'bg-blue-100 text-blue-800' },
  { id: 2, name: 'Electrician', icon: '⚡', color: 'bg-yellow-100 text-yellow-800' },
  { id: 3, name: 'Plumbing', icon: '🚿', color: 'bg-green-100 text-green-800' },
  { id: 4, name: 'AC Repair', icon: '❄️', color: 'bg-cyan-100 text-cyan-800' },
  { id: 5, name: 'Painting', icon: '🎨', color: 'bg-purple-100 text-purple-800' },
  { id: 6, name: 'Carpentry', icon: '🔨', color: 'bg-orange-100 text-orange-800' },
  { id: 7, name: 'Pest Control', icon: '🐜', color: 'bg-red-100 text-red-800' },
  { id: 8, name: 'Gardening', icon: '🌱', color: 'bg-emerald-100 text-emerald-800' },
];

// Mock service professionals
const serviceProfessionals = [
  {
    id: 1,
    name: 'Rahul Ahmed',
    category: 'Electrician',
    rating: 4.8,
    reviews: 124,
    price: 500,
    location: 'Gulshan, Dhaka',
    imageBg: 'bg-yellow-400',
    availability: 'Available today',
    isVerified: true,
  },
  {
    id: 2,
    name: 'Sabina Khatun',
    category: 'Cleaning',
    rating: 4.9,
    reviews: 189,
    price: 350,
    location: 'Dhanmondi, Dhaka',
    imageBg: 'bg-blue-400',
    availability: 'Available tomorrow',
    isVerified: true,
  },
  {
    id: 3,
    name: 'Karim Miah',
    category: 'Plumbing',
    rating: 4.6,
    reviews: 92,
    price: 450,
    location: 'Banani, Dhaka',
    imageBg: 'bg-green-400',
    availability: 'Available today',
    isVerified: true,
  },
  {
    id: 4,
    name: 'Taslima Begum',
    category: 'AC Repair',
    rating: 4.7,
    reviews: 76,
    price: 600,
    location: 'Uttara, Dhaka',
    imageBg: 'bg-cyan-400',
    availability: 'Available in 2 days',
    isVerified: false,
  },
  {
    id: 5,
    name: 'Farhan Chowdhury',
    category: 'Painting',
    rating: 4.5,
    reviews: 63,
    price: 400,
    location: 'Mohammadpur, Dhaka',
    imageBg: 'bg-purple-400',
    availability: 'Available today',
    isVerified: true,
  },
  {
    id: 6,
    name: 'Nasrin Akter',
    category: 'Carpentry',
    rating: 4.4,
    reviews: 41,
    price: 550,
    location: 'Mirpur, Dhaka',
    imageBg: 'bg-orange-400',
    availability: 'Available tomorrow',
    isVerified: true,
  },
];

const ServicesPage = () => {
  // State for selected category and search term
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter service professionals based on selected category and search term
  const filteredProfessionals = serviceProfessionals.filter((professional) => {
    // Filter by category
    const categoryMatch = selectedCategory === null || professional.category === selectedCategory;
    
    // Filter by search term
    const searchMatch = searchTerm === '' || 
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Book Home Services On Demand
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
            Connect with verified service professionals for all your home needs
          </p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for services or service providers"
              className="w-full py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Service Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Service Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all
                ${selectedCategory === category.name 
                  ? 'ring-2 ring-blue-500 shadow-md' 
                  : 'hover:shadow-md'
                }
                ${category.color}
              `}
              onClick={() => 
                setSelectedCategory(selectedCategory === category.name ? null : category.name)
              }
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Service Professionals */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {selectedCategory ? `${selectedCategory} Professionals` : 'Top Service Professionals'}
          </h2>
          {selectedCategory && (
            <button 
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => setSelectedCategory(null)}
            >
              View All Services
            </button>
          )}
        </div>
        
        {filteredProfessionals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((professional) => (
              <div key={professional.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className={`relative h-48 w-full ${professional.imageBg} flex items-center justify-center`}>
                    <div className="text-white text-5xl">
                      {professional.category === 'Electrician' && '⚡'}
                      {professional.category === 'Cleaning' && '🧹'}
                      {professional.category === 'Plumbing' && '🚿'}
                      {professional.category === 'AC Repair' && '❄️'}
                      {professional.category === 'Painting' && '🎨'}
                      {professional.category === 'Carpentry' && '🔨'}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {professional.category}
                  </div>
                  {professional.isVerified && (
                    <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Verified
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{professional.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{professional.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({professional.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{professional.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <FaClock className="mr-1" />
                    <span>{professional.availability}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-lg font-semibold">
                      ৳{professional.price}<span className="text-sm text-gray-500 dark:text-gray-400">/hr</span>
                    </div>
                    <Link
                      href={`/services/book/${professional.id}`}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No professionals found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search for a different service.
            </p>
          </div>
        )}
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Are you a service professional?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Join our platform to connect with customers and grow your business. 
          NestEase provides you with tools to manage bookings, payments, and communications.
        </p>
        <Link
          href="/services/join-as-professional"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg font-medium"
        >
          Register as a Service Professional
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage; 