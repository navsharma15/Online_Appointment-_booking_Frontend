import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  CheckCircle2, 
  Clock3, 
  PlusCircle, 
  ChevronRight,
  TrendingUp,
  MapPin,
  Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const UserDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Upcoming', value: '2', icon: <CalendarDays className="w-5 h-5 text-blue-500" />, color: 'blue' },
    { title: 'Completed', value: '12', icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />, color: 'teal' },
    { title: 'Pending', value: '1', icon: <Clock3 className="w-5 h-5 text-purple-500" />, color: 'purple' },
  ];

  const recentAppointments = [
    { id: '1', service: 'Dental Checkup', date: '2026-03-30', time: '10:00 AM', status: 'Upcoming', provider: 'Dr. Sarah Wilson' },
    { id: '2', service: 'Eye Examination', date: '2026-04-05', time: '02:30 PM', status: 'Upcoming', provider: 'Dr. Michael Chen' },
    { id: '3', service: 'General Consultation', date: '2026-03-20', time: '09:00 AM', status: 'Completed', provider: 'Dr. Amanda Rivera' },
  ];

  return (
    <DashboardLayout role="user">
      <div className="flex flex-col gap-8 max-w-[1200px] mx-auto">
        
        {/* Welcome Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-2">
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-2 leading-tight">
              Hello, <span className="text-blue-400">{user?.name?.split(' ')[0]}</span>.
            </h1>
            <p className="text-slate-400 font-medium">Have a productive day ahead.</p>
          </div>
          <Link to="/user/book" className="btn-primary flex items-center gap-2 group shadow-[0_15px_30px_rgba(59,130,246,0.3)]">
            <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Book New Appointment
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 bg-slate-900/40 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-white/5"
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${stat.color}-500/5 blur-[50px] rounded-full group-hover:bg-${stat.color}-500/10 transition-colors`}></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.title}</p>
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 shadow-inner group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout for Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-blue-400" />
                Next Appointments
              </h3>
              <Link to="/user/appointments" className="text-xs font-bold text-blue-400 hover:underline uppercase tracking-widest flex items-center gap-1 group">
                View All
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4">
              {recentAppointments.slice(0, 2).map((apt) => (
                <div 
                  key={apt.id} 
                  className="glass-card p-5 bg-slate-900/40 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-white/20 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex flex-col items-center justify-center p-2 group-hover:border-blue-500/50 transition-colors">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{apt.date.split('-')[1]}</span>
                      <span className="text-xl font-extrabold text-white">{apt.date.split('-')[2]}</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{apt.service}</h4>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><Clock3 className="w-3.5 h-3.5" />{apt.time}</span>
                        <span className="flex items-center gap-1 inline-flex text-blue-400/80"><Stethoscope className="w-3.5 h-3.5" />{apt.provider}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      apt.status === 'Upcoming' ? 'bg-blue-500/10 text-blue-400 border border-blue-400/10' : 'bg-teal-500/10 text-teal-400 border border-teal-400/10'
                    }`}>
                      {apt.status}
                    </span>
                    <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-sm">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Banner */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden shadow-2xl group">
              <div className="absolute top-[-30%] right-[-5%] w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-[1000ms]"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="space-y-3 text-center sm:text-left">
                  <h3 className="text-2xl font-black text-white leading-tight">Upgrade Your Plan</h3>
                  <p className="text-blue-100 max-w-sm text-sm font-medium opacity-90 leading-relaxed">Unlock advanced analytics, dedicated support, and unlimited appointment tracking.</p>
                </div>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95 flex-shrink-0">
                  Join Premium
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <div className="glass-card p-6 bg-slate-900/60 border border-white/10 shadow-2xl relative">
              <h3 className="text-lg font-extrabold mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                Favorite Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                     <TrendingUp className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-sm font-extrabold text-white">Central Medical Hub</p>
                     <p className="text-xs text-slate-500">New York, NY 10001</p>
                   </div>
                </div>
                <button className="w-full py-3.5 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                  Switch Branch
                </button>
              </div>
            </div>

            <div className="glass-card p-6 bg-slate-900/60 border border-white/10 shadow-2xl">
              <h3 className="text-lg font-extrabold mb-6">Weekly Activity</h3>
              <div className="flex items-end justify-between h-32 gap-3 px-1">
                {[40, 70, 45, 90, 65, 85, 30].map((h, i) => (
                  <div key={i} className="flex-1 group relative flex flex-col items-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.8 }}
                      className={`w-full rounded-t-lg bg-gradient-to-t transition-all ${i === 3 ? 'from-blue-600 to-blue-400' : 'from-white/5 to-white/10 group-hover:from-blue-500/20'}`}
                    >
                    </motion.div>
                    <span className={`text-[8px] font-bold mt-2 uppercase ${i === 3 ? 'text-blue-400' : 'text-slate-600'}`}>
                      {['M','T','W','T','F','S','S'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

// Internal icon for consistency if not imported from lucide
const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

export default UserDashboard;
