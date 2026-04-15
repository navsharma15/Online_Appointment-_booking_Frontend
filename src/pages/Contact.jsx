import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-24">
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl shadow-black/20">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">We&apos;re here to help.</h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Need assistance with your appointment booking, account access, or business setup? Send us a message and our team will respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="rounded-3xl bg-slate-950/40 border border-slate-800 p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <div className="space-y-4 text-slate-300 text-sm">
                  <p>
                    <span className="font-medium text-white">Email:</span> support@apointhub.com
                  </p>
                  <p>
                    <span className="font-medium text-white">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p>
                    <span className="font-medium text-white">Address:</span> 123 Appointment Lane, Suite 400, City, Country
                  </p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/40 border border-slate-800 p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Support Hours</h2>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>Monday - Friday: 8am to 6pm</li>
                  <li>Saturday: 9am to 3pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            <form className="space-y-6 bg-slate-950/30 border border-slate-800 rounded-3xl p-8">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us about your question or request"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
