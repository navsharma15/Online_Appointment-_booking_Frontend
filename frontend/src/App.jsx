import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import Dashboard from './pages/Dashboard';
import AppointmentsPage from './pages/AppointmentsPage';
import NotificationsPage from './pages/NotificationsPage';

import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AnimatedBackground />
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Private Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/complete-profile" element={<CompleteProfilePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/profile" element={<CompleteProfilePage />} /> {/* Reuse for editing */}
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
