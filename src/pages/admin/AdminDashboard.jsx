import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CalendarCheck, 
  Clock, 
  TrendingUp, 
  Settings, 
  ArrowUpRight, 
  MoreHorizontal,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const AdminDashboard = () => {
  const { user } = useAuth();

  const data = [
    { name: 'Jan', bookings: 400, users: 240 },
    { name: 'Feb', bookings: 300, users: 139 },
    { name: 'Mar', bookings: 200, users: 980 },
    { name: 'Apr', bookings: 278, users: 390 },
    { name: 'May', bookings: 189, users: 480 },
    { name: 'Jun', bookings: 239, users: 380 },
    { name: 'Jul', bookings: 349, users: 430 },
  ];

  const adminStats = [
    { title: 'Total Users', value: '1,248', change: '+12.5%', icon: <Users className="w-5 h-5 text-blue-500" />, color: 'blue' },
    { title: 'Appointments', value: '3,892', change: '+20.1%', icon: <CalendarCheck className="w-5 h-5 text-teal-500" />, color: 'teal' },
    { title: 'Avg. Revenue', value: '$4,280', change: '+5.4%', icon: <TrendingUp className="w-5 h-5 text-purple-500" />, color: 'purple' },
  ];

  const recentRequests = [
    { id: '1', user: 'Sarah Jenkins', service: 'Cardiology Consultation', date: '2026-03-27', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: '2', user: 'Michael Ross', service: 'Dental Implant', date: '2026-03-27', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: '3', user: 'Jessica Taylor', service: 'Physical Therapy', date: '2026-03-28', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=20' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-8 max-w-[1300px] mx-auto pb-12">
        
        {/* Admin Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-white leading-tight flex items-center gap-3">
              Admin <span className="text-teal-400">Control</span>
              <div className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black uppercase tracking-widest text-teal-400">PRO VERSION</div>
            </h1>
            <p className="text-slate-500 text-sm font-medium">Monitoring system performance and user activity.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                 type="text" 
                 placeholder="Quick find user..." 
                 className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all shadow-inner"
              />
            </div>
            <button className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all shadow-sm">
               <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adminStats.map((stat, i) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 bg-slate-900/60 transition-all duration-300 hover:border-white/20 border border-white/5 relative group"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-600 uppercase tracking-widest mb-1">{stat.title}</h3>
                    <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-teal-400 font-bold">
                     <TrendingUp className="w-4 h-4" />
                     {stat.change} <span className="text-slate-600 font-normal">than last month</span>
                  </div>
                </div>
                <div className="p-1 rounded-lg hover:bg-white/5 cursor-pointer text-slate-600 hover:text-white transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          
          {/* Main Chart Card */}
          <div className="lg:col-span-2 glass-card p-8 bg-slate-900/60 border border-white/10 flex flex-col relative overflow-hidden group">
            {/* Background Blur Accent */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="space-y-1">
                <h3 className="text-xl font-black text-white">Booking Trends</h3>
                <p className="text-xs text-slate-500 font-medium">Visualizing monthly booking vs user growth</p>
              </div>
              <div className="flex gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-white/5">
                 <button className="px-5 py-1.5 text-[10px] font-black uppercase text-white bg-blue-500 rounded-lg shadow-lg shadow-blue-500/20 transition-all">Yearly</button>
                 <button className="px-5 py-1.5 text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors">Monthly</button>
              </div>
            </div>

            <div className="flex-1 min-h-[350px] relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10}} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold'}}
                    itemStyle={{color: '#fff'}}
                  />
                  <Area type="monotone" dataKey="bookings" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorBookings)" />
                  <Area type="monotone" dataKey="users" stroke="#14B8A6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" opacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pending Approval Sidebar */}
          <div className="glass-card p-6 bg-slate-900/60 border border-white/10 flex flex-col min-h-full">
            <h3 className="text-lg font-black text-white mb-6 flex items-center justify-between">
              Pending Requests
              <span className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] flex items-center justify-center tracking-tighter shadow-sm font-black">04</span>
            </h3>
            
            <div className="space-y-4 flex-1">
              {recentRequests.map((req) => (
                <div key={req.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all space-y-4 group">
                  <div className="flex items-center gap-3">
                     <img src={req.avatar} className="w-10 h-10 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" />
                     <div className="min-w-0">
                       <p className="text-xs font-bold text-white truncate">{req.user}</p>
                       <p className="text-[10px] text-slate-500 truncate">{req.service}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <button className="flex-1 py-1.5 rounded-lg bg-teal-500/10 text-teal-400 text-[10px] font-black uppercase tracking-wider hover:bg-teal-500/20 transition-all border border-teal-500/10">Approve</button>
                     <button className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-600 hover:text-red-400 transition-colors">
                       <MoreHorizontal className="w-4 h-4" />
                     </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full group py-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              Manage All Requests
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Audit / Logs Section (Simplified) */}
        <div className="glass-card overflow-hidden bg-slate-900/40 border border-white/5">
             <div className="p-6 border-b border-white/5 bg-white/5">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 leading-none">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  System Audit Logs / Live Updates
                </h3>
             </div>
             <div className="p-6 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between text-[11px] font-medium text-slate-500 group">
                    <div className="flex items-center gap-4">
                       <span className="text-slate-600 font-mono">16:42:0{i}</span>
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors"></span>
                       <span className="text-slate-300">Security audit completed successfully for node-0{i}</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 cursor-pointer">VERIFY</span>
                  </div>
                ))}
             </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
