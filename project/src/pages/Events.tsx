import React, { useState } from 'react';
import { Calendar, Search, Filter, MapPin } from 'lucide-react';

const categories = [
  'All Events',
  'Academic',
  'Cultural',
  'Sports',
  'Technical',
  'Workshop',
  'Seminar'
];

const events = [
  {
    id: 1,
    title: 'Tech Symposium 2025',
    category: 'Technical',
    date: '2025-03-15',
    time: '10:00 AM',
    location: 'Main Auditorium',
    description: 'Annual technology showcase featuring student projects and industry speakers',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    tags: ['Technology', 'Innovation', 'Projects']
  },
  {
    id: 2,
    title: 'Cultural Fest',
    category: 'Cultural',
    date: '2025-03-20',
    time: '11:30 AM',
    location: 'College Ground',
    description: 'A celebration of diversity through music, dance, and art performances',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    tags: ['Culture', 'Arts', 'Performance']
  },
  {
    id: 3,
    title: 'Career Fair',
    category: 'Seminar',
    date: '2025-03-25',
    time: '9:00 AM',
    location: 'Seminar Hall',
    description: 'Connect with top companies and explore career opportunities',
    image: 'https://images.unsplash.com/photo-1559587521-f4911e0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    tags: ['Career', 'Networking', 'Professional']
  },
  {
    id: 4,
    title: 'Sports Tournament',
    category: 'Sports',
    date: '2025-04-05',
    time: '8:00 AM',
    location: 'Sports Complex',
    description: 'Annual inter-college sports competition featuring multiple sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    tags: ['Sports', 'Competition', 'Fitness']
  },
  {
    id: 5,
    title: 'Research Symposium',
    category: 'Academic',
    date: '2025-04-15',
    time: '10:30 AM',
    location: 'Conference Center',
    description: 'Showcase of student and faculty research projects',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    tags: ['Research', 'Academic', 'Innovation']
  },
  {
    id: 6,
    title: 'Coding Workshop',
    category: 'Workshop',
    date: '2025-04-20',
    time: '2:00 PM',
    location: 'Computer Lab',
    description: 'Hands-on workshop on modern web development technologies',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    tags: ['Coding', 'Technology', 'Learning']
  }
];

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All Events' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-[#f14621] py-24">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
            alt="Events showcase"
          />
          <div className="absolute inset-0 bg-[#f14621] mix-blend-multiply opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Discover Events
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
              Find and participate in exciting events happening across campus
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f14621] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="mt-4 md:mt-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                      ${selectedCategory === category
                        ? 'bg-[#f14621] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#f14621]">{event.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-6">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-[#f14621] text-white px-4 py-2 rounded-lg hover:bg-[#d13d1b] transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}