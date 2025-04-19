import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                NestEase: Your Unified Home Solutions Platform
              </h1>
              <p className="text-xl mb-8">
                Find verified properties, book reliable home services, and swap items
                all in one place. Simplifying urban living in Dhaka.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/property" className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Find Properties
                </Link>
                <Link href="/services" className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-medium transition duration-300">
                  Book Services
                </Link>
                <Link href="/barter" className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-medium transition duration-300">
                  Swap Items
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg shadow-2xl bg-blue-500 flex items-center justify-center">
                <div className="text-white text-8xl">🏠</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property Rental */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3">Property Rental & Real Estate</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Verified property listings</li>
                <li>✅ Smart search filters</li>
                <li>✅ Tenant & landlord reviews</li>
                <li>✅ Rental agreement generator</li>
                <li>✅ Secure in-app communication</li>
              </ul>
              <Link href="/property" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
                Find your perfect home →
              </Link>
            </div>

            {/* Home Services */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Home Service Booking</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Category-based service listings</li>
                <li>✅ Live tracking of professionals</li>
                <li>✅ Instant price estimation</li>
                <li>✅ Review & rating system</li>
                <li>✅ Wallet & referral rewards</li>
              </ul>
              <Link href="/services" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
                Book reliable services →
              </Link>
            </div>

            {/* Barter System */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Swap & Save - Digital Barter</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Tinder-style swipe interface</li>
                <li>✅ Item condition ratings</li>
                <li>✅ Token-based swapping system</li>
                <li>✅ In-app chat & scheduling</li>
                <li>✅ Eco-friendly initiative</li>
              </ul>
              <Link href="/barter" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
                Start swapping items →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your home experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of verified users on NestEase and experience a seamless solution for all your housing needs.
          </p>
          <Link href="/auth/signup" className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-lg font-medium text-lg transition duration-300">
            Sign Up Now - It's Free!
          </Link>
        </div>
      </section>
    </div>
  );
}
