import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9fb] to-[#f3e8ff] flex flex-col items-center justify-start py-0 px-4">
      {/* Header and Navigation */}
      <header className="w-full max-w-7xl flex items-center justify-between py-8 px-2 md:px-0">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl md:text-3xl text-indigo-700">Investink</span>
        </div>
        <nav className="hidden md:flex gap-10 text-gray-700 text-base font-medium">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Service</Link>
          <Link href="#">Testimonials</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="px-5 py-2 rounded-full text-indigo-700 font-semibold hover:bg-indigo-50 transition">Login</Link>
          <Link href="/signup" className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-pink-600 transition">Register</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0 mb-20 mt-4 md:mt-10">
        <div className="flex-1 flex flex-col gap-7 md:gap-8 items-start">
          <span className="inline-block bg-gray-100 text-gray-700 px-5 py-1.5 rounded-full w-max text-sm font-semibold mb-2 shadow-sm">Coming soon &bull; Investink will have mobile app soon!</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-2 tracking-tight" style={{lineHeight: '1.1'}}>We're creating better way<br />to invest for the future</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-xl">Intelligent management software to control future investment accounting. Every your funds are taken into account for need future.</p>
          <div className="flex gap-4 mb-2">
            <Link href="#" className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold text-lg shadow-lg hover:from-pink-500 hover:to-pink-600 transition">Discover now</Link>
            <Link href="#" className="px-8 py-3 rounded-full bg-white text-gray-700 font-bold text-lg border border-gray-200 shadow hover:bg-gray-100 transition">Learn more</Link>
          </div>
          <div className="flex gap-12 mt-4">
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">12k</span>
              <span className="text-gray-500 text-base md:text-lg font-medium">Years of experience</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">24k</span>
              <span className="text-gray-500 text-base md:text-lg font-medium">Satisfied and happy user</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full md:w-auto mb-10 md:mb-0">
          {/* Improved SVG illustration placeholder */}
          <svg width="400" height="340" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="170" rx="180" ry="140" fill="#F3F4F6" />
            <circle cx="270" cy="90" r="55" fill="#F0C3F7" />
            <rect x="120" y="120" width="150" height="110" rx="24" fill="#B3E0FF" />
            <rect x="155" y="155" width="90" height="45" rx="12" fill="#F0C3F7" />
            <rect x="190" y="190" width="50" height="22" rx="6" fill="#B3E0FF" />
            <ellipse cx="340" cy="230" rx="32" ry="22" fill="#F0C3F7" />
            <ellipse cx="80" cy="250" rx="40" ry="25" fill="#F0C3F7" />
            <ellipse cx="340" cy="270" rx="30" ry="18" fill="#F0C3F7" />
            <ellipse cx="110" cy="120" rx="18" ry="13" fill="#B3E0FF" />
            <ellipse cx="300" cy="60" rx="13" ry="9" fill="#B3E0FF" />
            <ellipse cx="200" cy="320" rx="60" ry="15" fill="#E0E7FF" />
            {/* Piggy bank */}
            <ellipse cx="340" cy="250" rx="30" ry="20" fill="#F0C3F7" />
            <ellipse cx="340" cy="250" rx="25" ry="15" fill="#F472B6" />
            <circle cx="355" cy="245" r="4" fill="#fff" />
            {/* Card and bank icons */}
            <rect x="170" y="135" width="40" height="28" rx="6" fill="#fff" stroke="#7C3AED" strokeWidth="2" />
            <rect x="220" y="135" width="40" height="28" rx="6" fill="#fff" stroke="#7C3AED" strokeWidth="2" />
            <rect x="195" y="110" width="40" height="28" rx="6" fill="#fff" stroke="#7C3AED" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-5xl flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why should choose us</h2>
        <p className="text-gray-600 mb-10 text-lg">Because we always think of user needs and provide the best</p>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
          {/* Trusted by many */}
          <div className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105">
            <div className="mb-4">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#F0C3F7" />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#7C3AED">$$</text>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted by many</h3>
            <p className="text-gray-500 text-base">Free admin fees up to $100 paid up to 2 days in advance with initial direct deposit</p>
          </div>
          {/* Guaranteed safety */}
          <div className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105">
            <div className="mb-4">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#B3E0FF" />
                <rect x="20" y="25" width="30" height="20" rx="6" fill="#7C3AED" />
                <rect x="30" y="35" width="10" height="10" rx="2" fill="#fff" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed safety</h3>
            <p className="text-gray-500 text-base">We use secure process security to protect your information and help prevent unauthorized use</p>
          </div>
          {/* Friendly support */}
          <div className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105">
            <div className="mb-4">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#F0C3F7" />
                <ellipse cx="35" cy="45" rx="18" ry="10" fill="#7C3AED" />
                <ellipse cx="35" cy="35" rx="10" ry="10" fill="#fff" />
                <rect x="28" y="28" width="14" height="6" rx="3" fill="#7C3AED" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Friendly support</h3>
            <p className="text-gray-500 text-base">If you have any questions send message to our member service team or check out the help center</p>
          </div>
        </div>
      </section>
    </main>
  );
} 