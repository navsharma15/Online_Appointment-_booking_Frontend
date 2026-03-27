import React from 'react';
import { Calendar, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-3xl border-t border-white/10 z-20">
      <div className="section-container pb-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center backdrop-blur-sm bg-opacity-80">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Apoint<span className="text-blue-400">Hub</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm text-sm">
              The simplest way to schedule, manage, and scale your appointments. Elevate your business with our smart scheduling platform.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: '#' },
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Instagram className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Documentation'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm hover:underline underline-offset-4 decoration-blue-500/50">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm hover:underline underline-offset-4 decoration-teal-500/50">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ApointHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
