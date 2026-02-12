import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { businesses } from "./data";
import { FortitudeFitness } from "./pages/FortitudeFitness";
import {
  Search,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MapPin,
  ExternalLink,
  Crown,
  ArrowRight,
} from "lucide-react";

// Main App Component with Router
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortitude-fitness" element={<FortitudeFitness />} />
      </Routes>
    </HashRouter>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 1. Get a unique list of all categories from the data
  const categories = [
    "All",
    ...new Set(businesses.map((b) => b.category)),
  ].sort();

  // 2. Filter and Sort the data (No useMemo needed for this dataset size)
  const filteredBusinesses = businesses
    .filter((business) => {
      const matchesCategory =
        selectedCategory === "All" || business.category === selectedCategory;
      const matchesSearch =
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="bg-brand-dark border-b-4 border-brand-gold py-10 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Placeholder*/}
          <div className="inline-block p-4 rounded-full border-2 border-brand-gold mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-brand-gold">
              {/* Simple Crown Icon representation */}
              <Crown size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            The Remnant Collective
          </h1>
          <p className="text-brand-gold/80 text-lg max-w-2xl mx-auto font-light">
            A directory of businesses, services, and skills within Remnant
            Church.
          </p>
        </div>
      </header>

      {/* Controls Section */}
      <div className="sticky top-0 z-10 bg-brand-gray/95 backdrop-blur-sm border-b border-gray-200 shadow-sm px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search Input - Fixed width on desktop, full on mobile, prevented from shrinking */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search directory..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter - Horizontal scroll on mobile, Multiline wrap on desktop */}
          <div className="w-full overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar">
            <div className="flex md:flex-wrap gap-2 md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-brand-gold text-brand-dark shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {filteredBusinesses.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No results found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-brand-gold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// Sub-component for individual cards
function BusinessCard({ business }) {
  // Safe access to socials, defaulting to an empty object if undefined
  const socials = business.socials || {};
  const hasSocials = Object.keys(socials).length > 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block px-3 py-1 bg-brand-gray text-xs font-semibold tracking-wide text-gray-600 rounded-full uppercase">
            {business.category}
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-brand-dark mb-3">
          {business.name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {business.description}
        </p>

        {business.internalLink && (
          <Link
            to={business.internalLink}
            className="inline-flex items-center text-sm font-bold text-brand-gold hover:text-brand-dark mb-4 transition-colors"
          >
            View Full Profile
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        )}

        {/* Contact Links */}
        <div className="space-y-2 mt-4 text-sm">
          {business.email && (
            <a
              href={`mailto:${business.email}`}
              className="flex items-center text-gray-600 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              {business.email}
            </a>
          )}
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className="flex items-center text-gray-600 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {business.phone}
            </a>
          )}
          {business.website && (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-brand-gold hover:underline font-medium"
            >
              <Globe className="w-4 h-4 mr-2" />
              Visit Website
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          )}
        </div>
      </div>

      {/* Social Footer */}
      {hasSocials && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex gap-4">
          {socials.facebook && (
            <SocialLink href={socials.facebook} icon={<Facebook size={18} />} />
          )}
          {socials.instagram && (
            <SocialLink
              href={socials.instagram}
              icon={<Instagram size={18} />}
            />
          )}
          {socials.twitter && (
            <SocialLink href={socials.twitter} icon={<Twitter size={18} />} />
          )}
          {socials.linkedin && (
            <SocialLink href={socials.linkedin} icon={<Linkedin size={18} />} />
          )}
          {socials.youtube && (
            <SocialLink href={socials.youtube} icon={<Youtube size={18} />} />
          )}
          {socials.nextdoor && (
            <SocialLink href={socials.nextdoor} icon={<MapPin size={18} />} />
          )}
        </div>
      )}
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-brand-gold transition-colors"
    >
      {icon}
    </a>
  );
}

export default App;
