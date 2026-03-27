import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  CalendarRange, 
  MoreHorizontal, 
  Search, 
  Filter, 
  Download,
  CalendarDays,
  Clock3,
  Stethoscope
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const MyAppointments = () => {
  const appointments = [
    { id: '1', service: 'Dental Checkup', date: 'March 30, 2026', time: '10:00 AM', status: 'Upcoming', provider: 'Dr. Sarah Wilson' },
    { id: '2', service: 'Eye Examination', date: 'April 05, 2026', time: '02:30 PM', status: 'Upcoming', provider: 'Dr. Michael Chen' },
    { id: '3', service: 'General Consultation', date: 'March 20, 2026', time: '09:00 AM', status: 'Completed', provider: 'Dr. Amanda Rivera' },
    { id: '4', service: 'Blood Test', date: 'March 15, 2026', time: '11:00 AM', status: 'Cancelled', provider: 'Dr. John Doe' },
  ];

  return (
    <DashboardLayout role="user">
      <div className="flex flex-col gap-8 max-w-[1200px] mx-auto">
        
        {/* Header Area */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-white leading-tight">My <span className="text-blue-400">Appointments</span></h1>
            <p className="text-slate-500 text-sm font-medium italic">"Review and manage your scheduled sessions."</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                 type="text" 
                 placeholder="Search by ID or Doctor..." 
                 className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all shadow-inner"
              />
            </div>
            <button className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all shadow-sm">
               <Download className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Filters/Tabs */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
           {['All Appointments', 'Upcoming', 'Completed', 'Cancelled'].map((tab, i) => (
             <button 
               key={tab}
               className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                 i === 0 ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-500 hover:text-white border border-white/5'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* Appointments List/Table */}
        <div className="glass-card bg-slate-900/40 border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Service & Doctor</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Scheduled For</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {appointments.map((apt, idx) => (
                  <motion.tr 
                    key={apt.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-6">
                       <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${
                             apt.status === 'Cancelled' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                          }`}>
                             <Stethoscope className="w-5 h-5" />
                          </div>
                          <div>
                             <p className="text-sm font-bold text-white mb-0.5">{apt.service}</p>
                             <p className="text-xs text-slate-500">{apt.provider}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-6 font-medium">
                       <div className="space-y-1">
                          <p className="text-sm text-white flex items-center gap-2">
                             <CalendarDays className="w-3.5 h-3.5 text-blue-400/60" />
                             {apt.date}
                          </p>
                          <p className="text-xs text-slate-500 flex items-center gap-2 font-black italic">
                             <Clock3 className="w-3.5 h-3.5" />
                             {apt.time}
                          </p>
                       </div>
                    </td>
                    <td className="px-6 py-6">
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          apt.status === 'Upcoming' ? 'bg-blue-500/10 text-blue-400 border-blue-400/10' :
                          apt.status === 'Completed' ? 'bg-teal-500/10 text-teal-400 border-teal-400/10' :
                          'bg-red-500/10 text-red-500 border-red-500/10'
                       }`}>
                          {apt.status}
                       </span>
                    </td>
                    <td className="px-6 py-6">
                       <div className="flex items-center gap-2">
                          {apt.status === 'Upcoming' && (
                            <button className="px-4 py-2 rounded-lg bg-red-500/5 text-red-500 text-[10px] font-black uppercase border border-red-500/10 hover:bg-red-500/10 transition-all">Cancel</button>
                          )}
                          <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-500 hover:text-white transition-all">
                             <MoreHorizontal className="w-4 h-4" />
                          </button>
                       </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-white/5 bg-slate-900/60 flex items-center justify-between">
             <p className="text-xs text-slate-500 font-medium tracking-tight">Showing 1 to 4 of 24 appointments</p>
             <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-all hover:bg-white/10">1</button>
                <button className="w-8 h-8 rounded-lg bg-blue-500 border border-blue-500 flex items-center justify-center text-white font-bold transition-all shadow-lg shadow-blue-500/20">2</button>
                <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-all hover:bg-white/10">3</button>
             </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default MyAppointments;
