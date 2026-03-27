import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  ClipboardCheck,
  Stethoscope,
  HeartPulse,
  Syringe,
  Activity
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    provider: '',
    date: '',
    time: ''
  });

  const services = [
    { id: '1', title: 'General Checkup', icon: <Stethoscope className="w-5 h-5" />, price: '$50', duration: '30 min' },
    { id: '2', title: 'Cardiology', icon: <HeartPulse className="w-5 h-5" />, price: '$120', duration: '45 min' },
    { id: '3', title: 'Vaccination', icon: <Syringe className="w-5 h-5" />, price: '$30', duration: '15 min' },
    { id: '4', title: 'Blood Test', icon: <Activity className="w-5 h-5" />, price: '$40', duration: '20 min' },
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <DashboardLayout role="user">
      <div className="max-w-4xl mx-auto pb-20">
        
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-12 relative px-4">
           {/* Progress Line */}
           <div className="absolute top-5 left-10 right-10 h-[2px] bg-white/5 -z-10">
              <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: '0%' }}
                animate={{ width: `${(step - 1) * 33.3}%` }}
              />
           </div>

           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex flex-col items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  step >= i ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-slate-900 border border-white/10 text-slate-500'
                }`}>
                  {step > i ? <Check className="w-5 h-5" /> : i}
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-black ${step >= i ? 'text-blue-400' : 'text-slate-600'}`}>
                  {['Service', 'Provider', 'Schedule', 'Confirm'][i-1]}
                </span>
             </div>
           ))}
        </div>

        <motion.div
           key={step}
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="glass-card p-8 bg-slate-900/40 border border-white/10 shadow-2xl"
        >
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div className="space-y-8">
               <div className="space-y-2">
                 <h2 className="text-2xl font-black text-white">Select a Service</h2>
                 <p className="text-slate-400 text-sm">Choose the clinical service you require.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <button 
                      key={s.id}
                      onClick={() => { setBookingData({...bookingData, service: s.title}); nextStep(); }}
                      className={`p-6 rounded-2xl border flex items-center justify-between transition-all group ${
                        bookingData.service === s.title 
                          ? 'bg-blue-500/10 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                          : 'bg-white/5 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                           bookingData.service === s.title ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-400 group-hover:text-blue-400'
                        }`}>
                          {s.icon}
                        </div>
                        <div className="text-left">
                           <p className="font-bold text-white mb-0.5">{s.title}</p>
                           <p className="text-xs text-slate-500">{s.duration}</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-blue-400">{s.price}</span>
                    </button>
                  ))}
               </div>
            </div>
          )}

          {/* STEP 2: SELECT PROVIDER */}
          {step === 2 && (
            <div className="space-y-8">
               <div className="space-y-2">
                 <h2 className="text-2xl font-black text-white">Choose Specialist</h2>
                 <p className="text-slate-400 text-sm">Select from our expert medical professionals.</p>
               </div>
               
               <div className="space-y-3">
                  {['Dr. Sarah Wilson', 'Dr. Michael Chen', 'Dr. Amanda Rivera'].map((name) => (
                    <button 
                      key={name}
                      onClick={() => { setBookingData({...bookingData, provider: name}); nextStep(); }}
                      className="w-full p-4 rounded-xl glass border border-white/5 flex items-center justify-between group hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-black text-blue-400">
                          {name.split(' ')[1].charAt(0)}
                        </div>
                        <p className="font-bold text-white">{name}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                    </button>
                  ))}
               </div>
               
               <button onClick={prevStep} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Go Back</button>
            </div>
          )}

          {/* STEP 3: SCHEDULE */}
          {step === 3 && (
            <div className="space-y-8">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <h2 className="text-2xl font-black text-white">Schedule Time</h2>
                   <p className="text-slate-400 text-sm">Select your preferred date and time slot.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Pick Date</label>
                       <input 
                         type="date" 
                         onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                         className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                       />
                    </div>
                    
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Available Slots</label>
                       <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map(t => (
                            <button 
                              key={t}
                              onClick={() => setBookingData({...bookingData, time: t})}
                              className={`py-2.5 rounded-lg text-xs font-bold border transition-all ${
                                bookingData.time === t 
                                  ? 'bg-blue-500 text-white border-blue-500' 
                                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>
               </div>

               <div className="flex items-center justify-between pt-4">
                  <button onClick={prevStep} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Go Back</button>
                  <button 
                    disabled={!bookingData.date || !bookingData.time}
                    onClick={nextStep} 
                    className="btn-primary"
                  >
                    Review Details
                  </button>
               </div>
            </div>
          )}

          {/* STEP 4: CONFIRMATION */}
          {step === 4 && (
            <div className="space-y-8">
               <div className="text-center space-y-2">
                 <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-500 mb-4 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                   <ClipboardCheck className="w-8 h-8" />
                 </div>
                 <h2 className="text-2xl font-black text-white">Review Booking</h2>
                 <p className="text-slate-400 text-sm">Please verify the details before confirming.</p>
               </div>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                  <div className="space-y-1 relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service</p>
                     <p className="text-sm font-bold text-white">{bookingData.service}</p>
                  </div>
                  <div className="space-y-1 relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Doctor</p>
                     <p className="text-sm font-bold text-white">{bookingData.provider}</p>
                  </div>
                  <div className="space-y-1 relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Date</p>
                     <p className="text-sm font-bold text-white">{bookingData.date}</p>
                  </div>
                  <div className="space-y-1 relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Time</p>
                     <p className="text-sm font-bold text-white">{bookingData.time}</p>
                  </div>
               </div>

               <div className="flex items-center justify-between pt-4">
                  <button onClick={prevStep} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Go Back</button>
                  <button className="btn-primary shadow-[0_20px_40px_rgba(59,130,246,0.5)]">
                    Confirm Appointment
                  </button>
               </div>
            </div>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default BookAppointment;
