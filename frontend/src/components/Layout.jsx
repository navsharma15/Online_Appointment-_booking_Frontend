import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            <main>
                {children}
            </main>
            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                theme="dark"
                toastStyle={{
                    background: 'rgba(15, 15, 30, 0.95)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    borderRadius: '1rem',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                }}
            />
        </div>
    );
};

export default Layout;
