import React from 'react';
import { 
  CalendarRange, 
  MoreHorizontal, 
  Search, 
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
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white">My <span className="text-blue-500">Appointments</span></h1>
            <p className="text-slate-400 text-sm">Review and manage your scheduled sessions.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                 type="text" 
                 placeholder="Search by ID or Doctor..." 
                 className="w-full bg-slate-900 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <button className="p-2.5 rounded-lg bg-slate-800 border border-white/10 text-slate-400 hover:text-white transition-all">
               <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
           {['All', 'Upcoming', 'Completed', 'Cancelled'].map((tab, i) => (
             <button 
               key={tab}
               className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                 i === 0 ? 'bg-blue-600 text-white shadow-md shadow-blue-900/10' : 'bg-slate-900 text-slate-400 border border-white/5 hover:bg-slate-800'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* List Table */}
        <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-800 border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Service & Doctor</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scheduled For</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {appointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-5">
                       <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-lg border border-white/5 ${
                             apt.status === 'Cancelled' ? 'text-red-400 bg-red-400/5' : 'text-blue-400 bg-blue-400/5'
                          }`}>
                             <Stethoscope className="w-4 h-4" />
                          </div>
                          <div>
                             <p className="text-sm font-bold text-white">{apt.service}</p>
                             <p className="text-xs text-slate-500">{apt.provider}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-5">
                       <div className="space-y-1">
                          <p className="text-xs text-white flex items-center gap-2">
                             <CalendarDays className="w-3.5 h-3.5 text-blue-500" />
                             {apt.date}
                          </p>
                          <p className="text-[10px] text-slate-500 flex items-center gap-2">
                             <Clock3 className="w-3.5 h-3.5" />
                             {apt.time}
                          </p>
                       </div>
                    </td>
                    <td className="px-6 py-5">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          apt.status === 'Upcoming' ? 'bg-blue-500/10 text-blue-400 border-blue-400/10' :
                          apt.status === 'Completed' ? 'bg-teal-500/10 text-teal-400 border-teal-400/10' :
                          'bg-red-500/10 text-red-500 border-red-500/10'
                       }`}>
                          {apt.status}
                       </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                       <div className="flex items-center justify-end gap-2">
                          {apt.status === 'Upcoming' && (
                            <button className="px-3 py-1.5 rounded-md text-[10px] font-bold uppercase bg-slate-950 border border-white/5 text-red-400 hover:bg-red-400/10 transition-all">Cancel</button>
                          )}
                          <button className="p-2 rounded-lg bg-slate-800 border border-white/10 text-slate-500 hover:text-white transition-colors">
                             <MoreHorizontal className="w-4 h-4" />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-800 border-t border-white/5 flex items-center justify-between">
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Page 1 of 4</p>
             <div className="flex gap-1.5">
                <button className="w-7 h-7 rounded bg-slate-900 border border-white/5 flex items-center justify-center text-[10px] text-white font-bold transition-all shadow-md">1</button>
                <button className="w-7 h-7 rounded bg-slate-800 border border-white/5 flex items-center justify-center text-[10px] text-slate-500 hover:bg-slate-700 transition-all">2</button>
                <button className="w-7 h-7 rounded bg-slate-800 border border-white/5 flex items-center justify-center text-[10px] text-slate-500 hover:bg-slate-700 transition-all">3</button>
             </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default MyAppointments;
