'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaExchangeAlt, FaThumbsUp, FaThumbsDown, FaComment, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Mock items for swapping
const barterItems = [
  {
    id: 1,
    title: 'Samsung 32" Smart TV',
    category: 'Electronics',
    condition: 'Good',
    description: 'Samsung 32" Smart TV, 2 years old, in good working condition with minor scratches on the back.',
    imageBg: 'bg-blue-400',
    icon: '📺',
    owner: {
      name: 'Ahmed Khan',
      rating: 4.7,
      swaps: 12,
    },
    location: 'Gulshan, Dhaka',
    swapValue: 4000,
  },
  {
    id: 2,
    title: 'Study Table with Chair',
    category: 'Furniture',
    condition: 'Very Good',
    description: 'Wooden study table with chair, barely used, in excellent condition. Perfect for students.',
    imageBg: 'bg-amber-400',
    icon: '🪑',
    owner: {
      name: 'Fatima Rahman',
      rating: 4.9,
      swaps: 8,
    },
    location: 'Banani, Dhaka',
    swapValue: 3500,
  },
  {
    id: 3,
    title: 'Fitness Treadmill',
    category: 'Fitness',
    condition: 'Fair',
    description: 'Manual treadmill, 3 years old, working condition with some wear and tear but fully functional.',
    imageBg: 'bg-green-400',
    icon: '🏃',
    owner: {
      name: 'Mohammad Ali',
      rating: 4.5,
      swaps: 15,
    },
    location: 'Dhanmondi, Dhaka',
    swapValue: 5000,
  },
  {
    id: 4,
    title: 'DSLR Camera with Lens',
    category: 'Electronics',
    condition: 'New',
    description: 'Canon DSLR Camera with 18-55mm lens, used only twice, comes with original box and accessories.',
    imageBg: 'bg-purple-400',
    icon: '📷',
    owner: {
      name: 'Nadia Haque',
      rating: 4.8,
      swaps: 6,
    },
    location: 'Uttara, Dhaka',
    swapValue: 7500,
  },
  {
    id: 5,
    title: 'Bookshelf (3 Tier)',
    category: 'Furniture',
    condition: 'Good',
    description: 'Wooden bookshelf with 3 tiers, minimalist design, can hold plenty of books.',
    imageBg: 'bg-red-400',
    icon: '📚',
    owner: {
      name: 'Kamal Hassan',
      rating: 4.6,
      swaps: 10,
    },
    location: 'Mohammadpur, Dhaka',
    swapValue: 2000,
  },
  {
    id: 6,
    title: 'Rice Cooker (5L)',
    category: 'Appliances',
    condition: 'Very Good',
    description: 'Philips Rice Cooker, 5L capacity, used for 6 months, works perfectly fine.',
    imageBg: 'bg-cyan-400',
    icon: '🍚',
    owner: {
      name: 'Sabina Yasmin',
      rating: 4.4,
      swaps: 7,
    },
    location: 'Mirpur, Dhaka',
    swapValue: 1500,
  },
];

// Categories for filters
const categories = [
  'All Categories',
  'Electronics',
  'Furniture',
  'Fitness',
  'Appliances',
  'Books',
  'Clothing',
  'Toys',
  'Other',
];

// Condition options for filters
const conditions = [
  'All Conditions',
  'New',
  'Very Good',
  'Good',
  'Fair',
  'Used',
];

const BarterPage = () => {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedCondition, setSelectedCondition] = useState('All Conditions');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSwipeItem, setCurrentSwipeItem] = useState(0);
  const [swipedItems, setSwipedItems] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter items based on selected criteria
  const filteredItems = barterItems.filter((item) => {
    // Filter by category
    const categoryMatch = selectedCategory === 'All Categories' || item.category === selectedCategory;
    
    // Filter by condition
    const conditionMatch = selectedCondition === 'All Conditions' || item.condition === selectedCondition;
    
    // Filter by search term
    const searchMatch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && conditionMatch && searchMatch;
  }).filter(item => !swipedItems.includes(item.id));

  const handleSwipe = (direction: 'left' | 'right') => {
    if (filteredItems.length > 0) {
      // Add current item to swiped items list
      setSwipedItems([...swipedItems, filteredItems[currentSwipeItem].id]);
      
      // If there are more items to show, move to the next one
      if (currentSwipeItem < filteredItems.length - 1) {
        setCurrentSwipeItem(currentSwipeItem + 1);
      } else {
        // Reset to start if we've gone through all items
        setCurrentSwipeItem(0);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Swap & Save: Exchange Items You Don't Need
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
            Our digital barter system lets you exchange items with others in your community
          </p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for items to swap"
              className="w-full py-3 pl-10 pr-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Filters Section */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Condition Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Condition
              </label>
              <select
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
              >
                {conditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Barter Items Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Swipe Card Interface */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Swipe to Swap</h2>
          
          {filteredItems.length > 0 ? (
            <div className="relative h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <motion.div
                className="absolute inset-0"
                key={filteredItems[currentSwipeItem].id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative h-3/5 w-full ${filteredItems[currentSwipeItem].imageBg} flex items-center justify-center`}>
                  <div className="text-white text-8xl">{filteredItems[currentSwipeItem].icon}</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {filteredItems[currentSwipeItem].category}
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                    Condition: {filteredItems[currentSwipeItem].condition}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                    {filteredItems[currentSwipeItem].swapValue} Swap Tokens
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{filteredItems[currentSwipeItem].title}</h3>
                    <div className="flex items-center">
                      <div className="bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs">👤</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{filteredItems[currentSwipeItem].owner.name}</p>
                        <p className="text-xs text-gray-500">
                          {filteredItems[currentSwipeItem].owner.swaps} swaps
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {filteredItems[currentSwipeItem].description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <FaClock className="mr-1" />
                    <span>Listed 3 days ago</span>
                  </div>
                </div>
                
                {/* Swipe Buttons */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 p-4 bg-gray-50 dark:bg-gray-900">
                  <button
                    onClick={() => handleSwipe('left')}
                    className="p-4 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-full transition-colors"
                  >
                    <FaThumbsDown size={24} />
                  </button>
                  <button
                    onClick={() => handleSwipe('right')}
                    className="p-4 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full transition-colors"
                  >
                    <FaThumbsUp size={24} />
                  </button>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">No more items to swipe</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">
                Try adjusting your filters or check back later for new items.
              </p>
              <button
                onClick={() => setSwipedItems([])}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Reset Swipes
              </button>
            </div>
          )}
        </div>
        
        {/* Right Sidebar */}
        <div className="col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Your Swap Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Swap Tokens</span>
                <span className="font-bold text-green-600">2,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Completed Swaps</span>
                <span className="font-bold">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Pending Swaps</span>
                <span className="font-bold text-yellow-600">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Your Rating</span>
                <span className="font-bold text-blue-600">4.8/5</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/barter/my-items"
                className="block w-full py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-center rounded-lg mb-3"
              >
                Manage My Items
              </Link>
              <Link
                href="/barter/add-item"
                className="block w-full py-2 bg-green-600 hover:bg-green-700 transition-colors text-white text-center rounded-lg"
              >
                Add New Item
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Matches</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-800 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <span>👤</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Fatima Rahman</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Interested in your Samsung TV
                  </p>
                </div>
                <Link href="/barter/chat/1">
                  <FaComment className="text-blue-600" />
                </Link>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-800 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <span>👤</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Kamal Hassan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Wants to swap a microwave
                  </p>
                </div>
                <Link href="/barter/chat/2">
                  <FaComment className="text-blue-600" />
                </Link>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/barter/matches"
                className="text-blue-600 hover:underline flex items-center justify-center gap-2"
              >
                <FaExchangeAlt />
                <span>View All Matches</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8 text-center">How Swap & Save Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">List Your Items</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Add photos and description of items you don't need anymore, and assign a condition rating
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Swipe & Match</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Browse available items with our Tinder-style interface and swipe right when you find something you like
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exchange & Rate</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Chat with matches, arrange meetups, and complete the swap. Rate each other after successful exchanges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarterPage; 