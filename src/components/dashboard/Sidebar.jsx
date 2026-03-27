import React from 'react';
import { motion } from 'framer-motion';
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
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, href: '/user/dashboard' },
    { name: 'Book Appointment', icon: <CalendarPlus className="w-5 h-5" />, href: '/user/book' },
    { name: 'My Appointments', icon: <CalendarRange className="w-5 h-5" />, href: '/user/appointments' },
    { name: 'History', icon: <History className="w-5 h-5" />, href: '/user/history' },
    { name: 'Profile', icon: <UserCircle className="w-5 h-5" />, href: '/user/profile' },
  ];

  const adminLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, href: '/admin/dashboard' },
    { name: 'Users', icon: <Users className="w-5 h-5" />, href: '/admin/users' },
    { name: 'Appointments', icon: <CalendarRange className="w-5 h-5" />, href: '/admin/appointments' },
    { name: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, href: '/admin/analytics' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, href: '/admin/settings' },
  ];

  const links = role === 'admin' ? adminLinks : userLinks;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-72 h-screen fixed left-0 top-0 glass-card bg-slate-900/60 border-r border-white/10 flex flex-col z-30 m-0 rounded-none overflow-hidden">
      {/* Sidebar Header */}
      <div className="p-8 pb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center backdrop-blur-sm bg-opacity-80">
              <CalendarIcon className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Apoint<span className="text-blue-400">Hub</span>
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                isActive 
                  ? 'bg-blue-500/10 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`transition-colors duration-300 ${isActive ? 'text-blue-400' : 'group-hover:text-blue-400'}`}>
                {link.icon}
              </span>
              {link.name}
              {isActive && (
                <motion.div 
                  layoutId="sidebarActive"
                  className="absolute left-0 w-1 h-6 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer / User Info */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
            {user?.name?.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate">{user?.name}</p>
            <p className="text-[10px] text-slate-500 truncate uppercase tracking-widest">{user?.role}</p>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 active:scale-95"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
