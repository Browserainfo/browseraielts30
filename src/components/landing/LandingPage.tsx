/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Play, 
  CheckCircle, 
  Mic, 
  Monitor, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Star, 
  Users, 
  FileText, 
  Send,
  ArrowRight,
  ShieldAlert,
  Headphones,
  Laptop
} from 'lucide-react';
import { UserRole } from '../../types';

interface LandingPageProps {
  onNavigateRole: (role: UserRole) => void;
  onLaunchCdIelts: () => void;
  onLaunchPte: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateRole,
  onLaunchCdIelts,
  onLaunchPte
}) => {
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryCourse, setEnquiryCourse] = useState('CD-IELTS Academic');

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setEnquiryName('');
      setEnquiryPhone('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-14 pb-24 border-b border-slate-800">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-400 mb-6 backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Browsera Infotech • Official CD-IELTS & PTE Training Center</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Achieve Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Band 7.5+ & PTE 79</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                BrowseraIELTS delivers genuine computer-delivered exam simulations, instant AI writing & speaking rubrics, certified British Council/Pearson master faculty, and accredited computer diploma programs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onLaunchCdIelts}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2.5 transition active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch CD-IELTS Simulator</span>
                </button>

                <button
                  onClick={onLaunchPte}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-slate-700 transition flex items-center gap-2 cursor-pointer"
                >
                  <Mic className="w-4 h-4 text-amber-400" />
                  <span>Try PTE Speaking Lab</span>
                </button>

                <button
                  onClick={() => onNavigateRole('student')}
                  className="bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white font-medium px-4 py-3 rounded-xl text-sm transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Student Portal</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Key Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl font-extrabold text-white">9,850+</div>
                  <div className="text-xs text-slate-400 font-medium">Students Enrolled</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-amber-400">7.8 Band</div>
                  <div className="text-xs text-slate-400 font-medium">Center Average Band</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Official Exam Layout</div>
                </div>
              </div>

            </div>

            {/* Hero Interactive Terminal Card Preview */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 pl-2">CD-IELTS Terminal #04</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">LIVE ENGINE</span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">Writing Task 2 AI Diagnostic</span>
                      <span className="font-bold text-amber-400">Band 7.5 (TR: 8.0, CC: 7.5)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-full w-[84%]"></div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 italic">
                      "Sophisticated thesis statement with induced demand arguments. Ready for master review."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                      <div className="text-slate-400 text-[10px] uppercase font-semibold">Speaking Waveform</div>
                      <div className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                        <Mic className="w-3.5 h-3.5" />
                        <span>Oral Fluency: 7.0</span>
                      </div>
                    </div>
                    <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                      <div className="text-slate-400 text-[10px] uppercase font-semibold">PTE Read Aloud</div>
                      <div className="text-sky-400 font-bold flex items-center gap-1 mt-0.5">
                        <Monitor className="w-3.5 h-3.5" />
                        <span>Score: 78/90</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-amber-400">Authentic Computer Lab Terminals</div>
                      <div className="text-[11px] text-slate-300">Practice under authentic test-day pressure</div>
                    </div>
                    <button 
                      onClick={onLaunchCdIelts}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg transition"
                    >
                      Enter Test
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Browsera Infotech Institute Campus</span>
                  <span className="text-emerald-400 font-medium">● 25 Terminals Active</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Course Programs Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Comprehensive Academics
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 sm:text-4xl">
            Choose Your Target Preparation Program
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tailored curriculum for study visas, PR immigration, corporate careers, and vocational IT diplomas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: CD-IELTS */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between group hover:border-amber-400">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Laptop className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-xs font-bold text-amber-600 uppercase">Academic & General</div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">CD-IELTS Exam Lab</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Full authentic computer-delivered IELTS simulation. 40 questions, official timer, passage highlighter, and AI diagnostic band feedback.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> 40 Reading & Listening Tests</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Writing Task 1 & 2 Live Scorer</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> 1-on-1 Certified Examiner Review</li>
              </ul>
            </div>
            <button
              onClick={onLaunchCdIelts}
              className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition"
            >
              <span>Practice CD-IELTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: PTE Academic */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between group hover:border-sky-400">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Headphones className="w-6 h-6 text-sky-600" />
              </div>
              <div className="text-xs font-bold text-sky-600 uppercase">Pearson Exam Prep</div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">PTE Academic 79+</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Specialized Pearson PTE simulation covering Read Aloud, Describe Image, Repeat Sentence, and Summarize Written Text with phonetic meters.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Real-time Speech-to-Text</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Pronunciation & Oral Fluency</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> 10-Minute Essay Evaluator</li>
              </ul>
            </div>
            <button
              onClick={onLaunchPte}
              className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition"
            >
              <span>Practice PTE Modules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Spoken English */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between group hover:border-emerald-400">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Mic className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-xs font-bold text-emerald-600 uppercase">Fluency & Confidence</div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Spoken English Pro</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Accent neutralization, daily conversation modules, embassy visa interview drills, and corporate presentation masterclasses.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Daily Situational Role-plays</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Phonetic Intonation Drills</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Embassy Interview Training</li>
              </ul>
            </div>
            <button
              onClick={() => onNavigateRole('student')}
              className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition"
            >
              <span>Explore Spoken Drills</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Computer Courses */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between group hover:border-purple-400">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-xs font-bold text-purple-600 uppercase">Vocational IT Diploma</div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Computer Courses & DCA</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Diploma in Computer Applications (DCA), PGDCA, MS Office 365, Pro Speed Typing tests, and fundamental Web Development.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Government Recognized DCA</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Interactive Typing Speed Test</li>
                <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Advanced Excel & Accounting</li>
              </ul>
            </div>
            <button
              onClick={() => onNavigateRole('student')}
              className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition"
            >
              <span>View IT Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Dedicated Portal Access Cards */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Institutional Role-Based Dashboards
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Select your persona below to experience the specialized workflows built for students, faculty and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Student Dashboard Preview */}
            <div 
              onClick={() => onNavigateRole('student')}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400 transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Laptop className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider group-hover:translate-x-1 transition flex items-center gap-1">
                  Enter Portal &rarr;
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">Student Learning Portal</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Track target vs current band score, launch timed CD-IELTS and PTE exams, access daily assigned homework, and review detailed mistake analyses.
              </p>
            </div>

            {/* Teacher Dashboard Preview */}
            <div 
              onClick={() => onNavigateRole('teacher')}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400 transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider group-hover:translate-x-1 transition flex items-center gap-1">
                  Enter Portal &rarr;
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">Faculty & Evaluator Portal</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Monitor assigned student cohorts, schedule practice tests, review AI diagnostic scores, override bands, and provide personalized feedback notes.
              </p>
            </div>

            {/* Admin Dashboard Preview */}
            <div 
              onClick={() => onNavigateRole('admin')}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400 transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider group-hover:translate-x-1 transition flex items-center gap-1">
                  Enter Portal &rarr;
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition">Admin Control Center</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Manage student records, teachers, curriculum, question banks, daily batch assignments, full mock exam schedules, and performance analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Student Counseling & Quick Enquiry */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Book Free Band Assessment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-3">
                Need Guidance on Target Band or Visa Requirements?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Visit the Browsera Infotech campus or schedule a free 1-on-1 diagnostic test with our head examiner to identify your current band level.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Free Speaking Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Personalized 30-Day Study Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Computer Lab Access</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
              {enquirySubmitted ? (
                <div className="text-center py-8 space-y-2">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Enquiry Received!</h3>
                  <p className="text-xs text-slate-600">
                    A Browsera Infotech senior counselor will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">Request Call Back & Free Mock Slot</h3>
                  
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={enquiryName}
                      onChange={(e) => setEnquiryName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98..."
                        value={enquiryPhone}
                        onChange={(e) => setEnquiryPhone(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Course of Interest</label>
                      <select
                        value={enquiryCourse}
                        onChange={(e) => setEnquiryCourse(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                      >
                        <option value="CD-IELTS Academic">CD-IELTS Academic</option>
                        <option value="CD-IELTS General">CD-IELTS General</option>
                        <option value="PTE Academic">PTE Academic 79+</option>
                        <option value="Spoken English">Spoken English</option>
                        <option value="Computer Courses (DCA)">DCA & IT Diploma</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs shadow-md transition flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Free Assessment Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              B
            </div>
            <div>
              <div className="font-bold text-white text-sm">Browsera<span className="text-amber-400">IELTS</span></div>
              <div className="text-[11px] text-slate-500">Browsera Infotech Institute of English & Computing</div>
            </div>
          </div>
          <div className="text-center md:text-right text-slate-400 text-[11px]">
            &copy; 2026 Browsera Infotech. All rights reserved. CD-IELTS & PTE Academic Test Prep Platform.
          </div>
        </div>
      </footer>

    </div>
  );
};
