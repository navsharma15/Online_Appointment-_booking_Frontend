import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  CalendarRange, 
  MoreHorizontal, 
  Search, 
  Download,
  CalendarDays,
  Clock3,
  Stethoscope,
  AlertCircle
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { useAuth } from '../../context/AuthContext';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user?.id) return;
      const token = localStorage.getItem('hub_token');
      try {
        const response = await axios.get(`/api/appointments/user/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAppointments(response.data);
      } catch (err) {
        setError('Failed to load appointments');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  const handleCancel = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
    
    const token = localStorage.getItem('hub_token');
    try {
      await axios.delete(`/api/appointments/${appointmentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Update local state
      setAppointments(appointments.map(apt => 
        apt._id === appointmentId ? { ...apt, status: 'cancelled' } : apt
      ));
    } catch (err) {
      alert('Failed to cancel appointment');
    }
  };

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

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        {/* List Table */}
        <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-800 border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Doctor & Service</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scheduled For</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-10 text-center text-slate-500 text-sm italic">Loading appointments...</td>
                  </tr>
                ) : appointments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-10 text-center text-slate-500 text-sm italic">No appointments found.</td>
                  </tr>
                ) : appointments.map((apt) => (
                  <tr key={apt._id} className="hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-5">
                       <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-lg border border-white/5 ${
                             apt.status === 'cancelled' ? 'text-red-400 bg-red-400/5' : 'text-blue-400 bg-blue-400/5'
                          }`}>
                             <Stethoscope className="w-4 h-4" />
                          </div>
                          <div>
                             <p className="text-sm font-bold text-white">{apt.doctor_id?.name || 'Unknown Doctor'}</p>
                             <p className="text-xs text-slate-500">{apt.doctor_id?.specialization || 'Consultation'}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-5">
                       <div className="space-y-1">
                          <p className="text-xs text-white flex items-center gap-2">
                             <CalendarDays className="w-3.5 h-3.5 text-blue-500" />
                             {new Date(apt.date).toLocaleDateString()}
                          </p>
                          <p className="text-[10px] text-slate-500 flex items-center gap-2">
                             <Clock3 className="w-3.5 h-3.5" />
                             {apt.time}
                          </p>
                       </div>
                    </td>
                    <td className="px-6 py-5">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          apt.status === 'pending' ? 'bg-blue-500/10 text-blue-400 border-blue-400/10' :
                          apt.status === 'confirmed' ? 'bg-teal-500/10 text-teal-400 border-teal-400/10' :
                          'bg-red-500/10 text-red-500 border-red-500/10'
                       }`}>
                          {apt.status}
                       </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                       <div className="flex items-center justify-end gap-2">
                          {apt.status !== 'cancelled' && (
                            <button 
                              onClick={() => handleCancel(apt._id)}
                              className="px-3 py-1.5 rounded-md text-[10px] font-bold uppercase bg-slate-950 border border-white/5 text-red-400 hover:bg-red-400/10 transition-all"
                            >
                              Cancel
                            </button>
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
        </div>

      </div>
    </DashboardLayout>
  );
};

export default MyAppointments;
