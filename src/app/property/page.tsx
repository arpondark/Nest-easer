'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBath, FaBed, FaHome, FaSearch, FaFilter } from 'react-icons/fa';

// Mock property data
const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Gulshan',
    type: 'Apartment',
    location: 'Gulshan, Dhaka',
    price: 25000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    imageBg: 'bg-blue-400',
    isVerified: true,
  },
  {
    id: 2,
    title: 'Spacious House in Dhanmondi',
    type: 'House',
    location: 'Dhanmondi, Dhaka',
    price: 35000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    imageBg: 'bg-green-400',
    isVerified: true,
  },
  {
    id: 3,
    title: 'Cozy Studio in Banani',
    type: 'Studio',
    location: 'Banani, Dhaka',
    price: 15000,
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    imageBg: 'bg-yellow-400',
    isVerified: false,
  },
  {
    id: 4,
    title: 'Luxury Villa in Baridhara',
    type: 'Villa',
    location: 'Baridhara, Dhaka',
    price: 80000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    imageBg: 'bg-purple-400',
    isVerified: true,
  },
  {
    id: 5,
    title: 'Shared Room in Mohammadpur',
    type: 'Shared',
    location: 'Mohammadpur, Dhaka',
    price: 8000,
    bedrooms: 1,
    bathrooms: 1,
    area: 300,
    imageBg: 'bg-red-400',
    isVerified: true,
  },
  {
    id: 6,
    title: 'Family Apartment in Uttara',
    type: 'Apartment',
    location: 'Uttara, Dhaka',
    price: 28000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    imageBg: 'bg-indigo-400',
    isVerified: false,
  },
];

// Property types for filters
const propertyTypes = [
  'All Types',
  'Apartment',
  'House',
  'Villa',
  'Studio',
  'Shared',
];

// Price ranges for filters
const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: '৳5,000 - ৳15,000', min: 5000, max: 15000 },
  { label: '৳15,000 - ৳30,000', min: 15000, max: 30000 },
  { label: '৳30,000 - ৳50,000', min: 30000, max: 50000 },
  { label: '৳50,000+', min: 50000, max: Infinity },
];

// Locations for filters
const locations = [
  'All Locations',
  'Gulshan',
  'Banani',
  'Dhanmondi',
  'Uttara',
  'Mohammadpur',
  'Baridhara',
];

const PropertyPage = () => {
  // State for filters
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: Infinity });
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter properties based on selected criteria
  const filteredProperties = properties.filter((property) => {
    // Filter by property type
    const typeMatch = selectedType === 'All Types' || property.type === selectedType;
    
    // Filter by price range
    const priceMatch = property.price >= selectedPrice.min && property.price <= selectedPrice.max;
    
    // Filter by location
    const locationMatch = selectedLocation === 'All Locations' || property.location.includes(selectedLocation);
    
    // Filter by search term
    const searchMatch = searchTerm === '' || 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return typeMatch && priceMatch && locationMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Find Your Perfect Property
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
            Browse verified property listings with real landlords and secure rental agreements
          </p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by location, property name, or features"
              className="w-full py-3 pl-10 pr-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
            </button>
          </div>
        </div>
      </div>
      
      {/* Filters Section */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Type
              </label>
              <select
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range
              </label>
              <select
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={priceRanges.findIndex((range) => 
                  range.min === selectedPrice.min && range.max === selectedPrice.max
                )}
                onChange={(e) => {
                  const selectedIndex = parseInt(e.target.value);
                  setSelectedPrice(priceRanges[selectedIndex]);
                }}
              >
                {priceRanges.map((range, index) => (
                  <option key={index} value={index}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <select
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className={`relative h-56 ${property.imageBg} flex justify-center items-center`}>
                <div className="text-white text-6xl">🏠</div>
                {property.isVerified && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Verified
                  </div>
                )}
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1">
                  ৳{property.price.toLocaleString()}/month
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <FaBed className="mr-1" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-1" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <FaHome className="mr-1" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/property/${property.id}`}
                    className="w-full block text-center py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPage; 