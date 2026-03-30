import TopNav from "@/components/TopNav";
import DashboardView from "@/components/DashboardView";
import ReferralsView from "@/components/ReferralsView";
import RewardsView from "@/components/RewardsView";
import CoursesView from "@/components/CoursesView";
import FaqView from "@/components/FaqView";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LayoutDashboard, Users, Wallet, GraduationCap, Phone, HelpCircle, Share2, PlusCircle, Copy, Check, Rocket } from "lucide-react";

const SECTIONS = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
  { id: "referrals", label: "My Referrals", icon: <Users className="w-3.5 h-3.5" /> },
  { id: "rewards", label: "My Rewards", icon: <Wallet className="w-3.5 h-3.5" /> },
  { id: "courses", label: "Courses", icon: <GraduationCap className="w-3.5 h-3.5" /> },
  { id: "counsellor", label: "Support", icon: <Phone className="w-3.5 h-3.5" /> },
  { id: "faq", label: "FAQ", icon: <HelpCircle className="w-3.5 h-3.5" /> },
];

const noop = () => { };

const Index = () => {
  const [copied, setCopied] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("REF2024SD847").catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Apply the scroll reveal hook to animated scroll elements
  useScrollReveal();

  useEffect(() => {
    // Initial cool loading animation matching the GSAP aesthetic
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Hide main content initially
      gsap.set(mainContentRef.current, { opacity: 0, scale: 0.98 });
      
      // Logo entry pulse
      tl.fromTo(logoRef.current, 
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      )
      // Small float effect
      .to(logoRef.current, {
        y: -10, duration: 0.6, yoyo: true, repeat: 1, ease: "power1.inOut"
      })
      // Fade out background loader
      .to(loaderRef.current, {
        opacity: 0, duration: 0.8, ease: "power2.inOut",
        onComplete: () => {
          if (loaderRef.current) loaderRef.current.style.display = "none";
        }
      }, "-=0.3")
      // Reveal the main website
      .to(mainContentRef.current, {
        opacity: 1, scale: 1, duration: 1, ease: "power3.out"
      }, "-=0.4");
      
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* GSAP Fullscreen Loader */}
      <div 
        ref={loaderRef}
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center font-display"
      >
        <div className="relative">
          <img 
            ref={logoRef}
            src="/logo.png" 
            alt="Loading..." 
            className="w-48 object-contain drop-shadow-lg" 
          />
        </div>
      </div>

      <div ref={mainContentRef} className="min-h-screen bg-background relative z-[1] overflow-x-hidden">
      <TopNav tabs={SECTIONS.map(s => ({ id: s.id, label: <span className="flex items-center gap-1.5">{s.icon}{s.label}</span> } as any))} activeTab="" onTabChange={scrollTo} />

      <main className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6 py-8 flex flex-col gap-14">

        {/* ─── HERO AND PROCESS ─────────────────────────────────── */}
        <section aria-label="Hero and Process" className="gsap-reveal-up grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 xl:gap-8">
          
          {/* LEFT SIDE: Hero Text + Stats */}
          <div className="flex flex-col gap-4">
            {/* Main hero cell */}
            <div className="bg-gradient-to-br from-sky-400/20 via-sky-400/5 to-transparent border border-sky-400/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-6 flex-1">
              <div>
                <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.6rem] leading-tight mb-3">
                  Refer Friends.<br />Shape Futures.<br />
                  <span className="text-sky-600 dark:text-sky-500">Earn Rewards.</span>
                </h1>
                <p className="text-muted-foreground text-sm md:text-base max-w-md">
                  Share your referral code, help students find the right course, and earn real cash bonuses for every successful enrollment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigator.share?.({ title: "Referral Link", text: "Use my referral code REF2024SD847", url: window.location.href }).catch(() => { })}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Share2 className="w-4 h-4" /> Share Referral Link
                </button>
                <button className="bg-foreground text-background px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" /> Add New Referral
                </button>
              </div>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Referral code card */}
              <div className="bg-card border border-border rounded-3xl p-5 flex flex-col justify-between gap-3 hover:border-primary/30 transition-colors">
                <div>
                  <div className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mb-1">Your Referral Code</div>
                  <div className="font-display font-extrabold text-2xl tracking-wider text-foreground">REF2024SD847</div>
                </div>
                <button
                  onClick={handleCopy}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${copied ? "bg-success/10 text-success border border-success/20" : "bg-card2 border border-border hover:border-primary/30 text-foreground"}`}
                >
                  {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Code</>}
                </button>
              </div>

              {/* Quick stat: earnings */}
              <div className="bg-gradient-to-br from-primary/8 to-transparent border border-primary/15 rounded-3xl p-5 flex flex-col justify-between group">
                <div className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mb-1">Current Earnings</div>
                <div className="font-display font-extrabold text-3xl text-primary group-hover:scale-105 transition-transform origin-left">₹3,000</div>
                <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-[10px] font-medium px-2 py-0.5 rounded-full mt-2 self-start">
                  🚀 Potential ₹7,700
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Steps of referral process */}
          <div className="flex flex-col gsap-stagger-container">
            <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2"><Rocket className="w-5 h-5 text-primary" /> Start Referring Now</h2>
            <div className="flex flex-col gap-3 flex-1 justify-between">
              {[
                { icon: "01", title: "Get Started", desc: "Log in through your Student Portal and securely set up your bank details so you're ready to start earning immediately." },
                { icon: "02", title: "Share & Refer", desc: "Invite your friends by sharing your unique referral link or code. They simply apply it while filling out their enquiry form." },
                { icon: "03", title: "Earn Rewards", desc: "Once your friend is enrolled, your commission is wired directly to you. Plus, they score an exclusive tuition discount!" },
              ].map((s, i) => (
                <div 
                  key={i} 
                  className="bg-card border border-border rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-1 hover:border-primary/30 transition-all group shadow-sm hover:shadow-md gsap-stagger-item"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-extrabold text-xl text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base mb-1.5 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DASHBOARD ──────────────────────────────────── */}
        <section id="dashboard" aria-label="Dashboard" className="gsap-reveal-up">
          <SectionHeading><LayoutDashboard className="w-5 h-5" /> Dashboard</SectionHeading>
          <DashboardView onNavigate={noop} />
        </section>

        {/* ─── REFERRALS ──────────────────────────────────── */}
        <section id="referrals" aria-label="My Referrals" className="gsap-reveal-up">
          <SectionHeading><Users className="w-5 h-5" /> My Referrals</SectionHeading>
          <ReferralsView />
        </section>

        {/* ─── REWARDS ────────────────────────────────────── */}
        <section id="rewards" aria-label="My Rewards" className="gsap-reveal-up">
          <SectionHeading><Wallet className="w-5 h-5" /> My Rewards</SectionHeading>
          <RewardsView />
        </section>

        {/* ─── COURSES ────────────────────────────────────── */}
        <section id="courses" aria-label="Courses" className="gsap-reveal-up">
          <SectionHeading><GraduationCap className="w-5 h-5" /> Courses</SectionHeading>
          <CoursesView onNavigate={noop} />
        </section>

        {/* ─── FAQ ────────────────────────────────────────── */}
        <section id="faq" aria-label="FAQ" className="gsap-reveal-up">
          <FaqView />
        </section>

        <footer className="gsap-reveal-up border-t border-border pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="RefPortal Logo" className="h-6 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <span>© 2025 RefPortal · All rights reserved</span>
          <div className="flex gap-4">
            <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">FAQ</button>
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms</a>
            <button onClick={() => scrollTo("counsellor")} className="hover:text-foreground transition-colors">Support</button>
          </div>
        </footer>

      </main>
    </div>
    </>
  );
};

const SectionHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`font-display font-extrabold flex items-center gap-2 ${className || "text-xl mb-5"}`}>
    {children}
  </h2>
);

export default Index;
