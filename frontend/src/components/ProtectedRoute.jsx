import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { user } = useAuth();
    const location = useLocation();
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Force profile completion if not done — but allow the /complete-profile and /profile routes through
    if (!user.isProfileComplete && location.pathname !== '/complete-profile' && location.pathname !== '/profile') {
        return <Navigate to="/complete-profile" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
