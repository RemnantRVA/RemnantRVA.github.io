import {
  ArrowLeft,
  Mail,
  CheckCircle,
  Dumbbell,
  Activity,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

export function FortitudeFitness() {
  // PLACEHOLDER: Replace this with the real phone number
  const phoneNumber = "804-301-5101";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Directory
          </Link>
          <div className="font-bold text-slate-800 tracking-tighter">
            FORTITUDE FITNESS
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-slate-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-600 text-white mb-8 shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
            <Activity className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 uppercase">
            Fortitude Fitness
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-8">
            Zachary C. Crump, PT, DPT, NCS
          </p>
          <div className="inline-block px-6 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-semibold tracking-widest uppercase text-slate-300">
            Health & Wellness
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Build Strength. Prevent Injury.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Specialized personal training services designed for men and
            students. Whether you are looking to improve athletic performance or
            build a foundation for a lifetime of health, we provide
            professional, evidence-based guidance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <ServiceCard
            title="Sports Conditioning"
            desc="Pre-season conditioning to ensure you are physically prepared for competition."
            icon={<Dumbbell className="w-6 h-6" />}
          />
          <ServiceCard
            title="Rep Max Testing"
            desc="Professional strength testing to establish baselines and measure progress accurately."
            icon={<Activity className="w-6 h-6" />}
          />
          <ServiceCard
            title="Custom Prescription"
            desc="Tailored exercise prescription and progression plans specific to your physiology and goals."
            icon={<CheckCircle className="w-6 h-6" />}
          />
          <ServiceCard
            title="Home Gym Class"
            desc="Structured home-based gym class prescriptions for students. Available for individuals or groups."
            icon={<Dumbbell className="w-6 h-6" />}
          />
        </div>

        {/* Contact Section */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Ready to train?</h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Take the first step towards your physical goals. Contact Zachary
            today to schedule your consultation.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-sm hover:shadow-lg transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call
            </a>
            <a
              href={`sms:${phoneNumber}`}
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all shadow-sm hover:shadow-lg transform hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Text
            </a>
            <a
              href="mailto:zacharyonthehill@gmail.com"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 mr-3" />
              Email
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-500/50 flex flex-col md:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2 opacity-70" />
              zacharyonthehill@gmail.com
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2 opacity-70" />
              {phoneNumber}
            </span>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Fortitude Fitness
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
