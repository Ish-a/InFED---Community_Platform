import React from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  BriefcaseBusiness, 
  TrendingUp, 
  MessageCircle 
} from 'lucide-react';

const HomeDashboard = () => {
  // Sample data (would typically come from backend)
  const upcomingEvents = [
    { id: 1, title: 'Tech Networking Night', date: 'Dec 15', time: '7 PM' },
    { id: 2, title: 'Startup Pitch Competition', date: 'Dec 22', time: '6 PM' }
  ];

  const latestOpportunities = [
    { id: 1, title: 'Software Engineer Internship', company: 'TechCorp' },
    { id: 2, title: 'Design Mentorship Program', company: 'Creative Solutions' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Navigation */}
        <div className="bg-white shadow-md rounded-lg p-4 h-fit">
          <nav className="space-y-4">
            <div className="flex items-center space-x-3 text-blue-600 font-semibold">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
              <BriefcaseBusiness className="w-5 h-5" />
              <span>Opportunities</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
              <Users className="w-5 h-5" />
              <span>Community</span>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Welcome Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome, Community Member!</h1>
            <p className="text-gray-600 mt-2">Stay connected, grow, and explore opportunities.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto text-green-500" />
              <h3 className="font-semibold mt-2">Active Connections</h3>
              <p className="text-2xl font-bold text-blue-600">42</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <MessageCircle className="w-8 h-8 mx-auto text-blue-500" />
              <h3 className="font-semibold mt-2">Unread Messages</h3>
              <p className="text-2xl font-bold text-blue-600">7</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto text-purple-500" />
              <h3 className="font-semibold mt-2">Upcoming Events</h3>
              <p className="text-2xl font-bold text-blue-600">3</p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            {upcomingEvents.map(event => (
              <div key={event.id} className="flex justify-between items-center border-b py-3 last:border-b-0">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Latest Opportunities */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Latest Opportunities</h2>
            {latestOpportunities.map(opp => (
              <div key={opp.id} className="flex justify-between items-center border-b py-3 last:border-b-0">
                <div>
                  <h3 className="font-medium">{opp.title}</h3>
                  <p className="text-sm text-gray-500">{opp.company}</p>
                </div>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;