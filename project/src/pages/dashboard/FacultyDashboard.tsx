import React from 'react';
import { Calendar, Users, BookOpen, BarChart, Bell } from 'lucide-react';

export function FacultyDashboard() {
  const managedEvents = [
    { 
      id: 1, 
      name: 'Advanced Web Development', 
      date: '2025-03-15', 
      registrations: 45,
      capacity: 50,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Cloud Computing Workshop', 
      date: '2025-03-20', 
      registrations: 28,
      capacity: 40,
      status: 'Upcoming'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'Registration', message: 'New student registered for Advanced Web Development', time: '2 hours ago' },
    { id: 2, type: 'Update', message: 'Updated Cloud Computing Workshop details', time: '5 hours ago' },
    { id: 3, type: 'Feedback', message: 'Received 5 new feedback submissions', time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your events and track student progress</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Events</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Workshops</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <BarChart className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Managed Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Managed Events</h2>
              <button className="px-4 py-2 bg-[#f14621] text-white rounded-lg hover:bg-[#d13d1b] transition-colors">
                Create Event
              </button>
            </div>
            <div className="space-y-4">
              {managedEvents.map(event => (
                <div key={event.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{event.name}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      event.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Registrations</span>
                      <span>{event.registrations}/{event.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#f14621] h-2 rounded-full"
                        style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-6">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className="p-2 bg-[#f14621]/10 rounded-lg">
                    <Bell className="w-5 h-5 text-[#f14621]" />
                  </div>
                  <div>
                    <p className="text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-600 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}