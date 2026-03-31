import React from 'react';
import { 
  LayoutDashboard, 
  CalendarPlus, 
  CalendarRange, 
  History, 
  UserCircle, 
  LogOut, 
  Users, 
  BarChart3, 
  Settings,
  Calendar as CalendarIcon
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const userLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, href: '/user/dashboard' },
    { name: 'Appointments', icon: <CalendarRange className="w-4 h-4" />, href: '/user/appointments' },
    { name: 'Book New', icon: <CalendarPlus className="w-4 h-4" />, href: '/user/book' },
    { name: 'Profile', icon: <UserCircle className="w-4 h-4" />, href: '/user/profile' },
  ];

  const adminLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, href: '/admin/dashboard' },
    { name: 'Users', icon: <Users className="w-4 h-4" />, href: '/admin/users' },
    { name: 'Analytics', icon: <BarChart3 className="w-4 h-4" />, href: '/admin/analytics' },
    { name: 'Settings', icon: <Settings className="w-4 h-4" />, href: '/admin/settings' },
  ];

  const links = role === 'admin' ? adminLinks : userLinks;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-slate-900 border-r border-white/10 flex flex-col z-30">
      {/* Sidebar Header */}
      <div className="p-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <CalendarIcon className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">
            Apoint<span className="text-blue-500">Hub</span>
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-white/5 space-y-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-blue-500 border border-white/5">
            {user?.name?.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">{user?.name}</p>
            <p className="text-[10px] text-slate-500 uppercase">{user?.role}</p>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
