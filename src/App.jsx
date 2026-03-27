import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

// User Dashboard Pages
import UserDashboard from './pages/dashboard/UserDashboard';
import BookAppointment from './pages/dashboard/BookAppointment';
import MyAppointments from './pages/dashboard/MyAppointments';

// Admin Dashboard Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageAppointments from './pages/admin/ManageAppointments';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-['Inter'] min-h-screen relative text-white bg-slate-950 overflow-x-hidden selection:bg-purple-500/50 selection:text-white">
          {/* Soft glowing circles / Bokeh effects */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
            <div className="absolute top-[40%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-teal-400/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700 duration-1000"></div>
            <div className="absolute bottom-[10%] left-[30%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000 duration-1000"></div>
          </div>
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* User Routes */}
            <Route 
              path="/user/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/book" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <BookAppointment />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/appointments" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <MyAppointments />
                </ProtectedRoute>
              } 
            />
            {/* Catch missing user routes with redirect to dashboard */}
            <Route path="/user/*" element={<Navigate to="/user/dashboard" replace />} />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ManageUsers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/appointments" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ManageAppointments />
                </ProtectedRoute>
              } 
            />
            {/* Catch missing admin routes with redirect to dashboard */}
            <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
            
            {/* Global Catch */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
