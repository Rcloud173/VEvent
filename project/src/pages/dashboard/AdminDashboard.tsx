import React from 'react';
import { Users, Calendar, Shield, Settings, Bell, BarChart, UserPlus, FileText } from 'lucide-react';

export function AdminDashboard() {
  const systemStats = {
    totalUsers: 2500,
    activeEvents: 45,
    departments: 8,
    averageRating: 4.7
  };

  const recentActivities = [
    { id: 1, type: 'User', message: 'New faculty account created', time: '1 hour ago' },
    { id: 2, type: 'Event', message: 'Technical Symposium 2025 approved', time: '3 hours ago' },
    { id: 3, type: 'System', message: 'Daily backup completed', time: '5 hours ago' }
  ];

  const pendingApprovals = [
    { id: 1, type: 'Event', name: 'AI Workshop Series', department: 'Computer Science', status: 'Pending' },
    { id: 2, type: 'Faculty', name: 'Dr. Sarah Johnson', department: 'Electronics', status: 'Review' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">System overview and management</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.totalUsers}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Events</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.activeEvents}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Departments</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.departments}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <BarChart className="w-8 h-8 text-[#f14621]" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.averageRating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <UserPlus className="w-5 h-5 text-[#f14621]" />
            <span>Add User</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-5 h-5 text-[#f14621]" />
            <span>Manage Events</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <FileText className="w-5 h-5 text-[#f14621]" />
            <span>Generate Reports</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Settings className="w-5 h-5 text-[#f14621]" />
            <span>System Settings</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Approvals */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Approvals</h2>
            <div className="space-y-4">
              {pendingApprovals.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-[#f14621]/10 text-[#f14621] rounded text-sm">
                        {item.type}
                      </span>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.department}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">System Activities</h2>
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