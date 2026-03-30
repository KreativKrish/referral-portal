import TopNav from "@/components/TopNav";
import DashboardView from "@/components/DashboardView";
import ReferralsView from "@/components/ReferralsView";
import RewardsView from "@/components/RewardsView";
import CoursesView from "@/components/CoursesView";

import FaqView from "@/components/FaqView";
import TermsView from "@/components/TermsView";

const SECTIONS = [
  { id: "dashboard", label: "🏠 Dashboard" },
  { id: "referrals", label: "👥 My Referrals" },
  { id: "rewards", label: "💸 My Rewards" },
  { id: "courses", label: "🎓 Courses" },
  { id: "faq", label: "❓ FAQ" },
  { id: "terms", label: "📄 Terms" },
];

const noop = () => {};

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative z-[1]">
      <TopNav tabs={SECTIONS} activeTab="" onTabChange={scrollTo} />
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-12">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border border-primary/15 rounded-2xl p-8 md:p-12 text-center">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
            Refer Friends. Shape Futures.<br className="hidden sm:block" /> <span className="text-primary">Earn Rewards.</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Share your referral code, help students find the right course, and earn real cash bonuses for every successful enrollment.
          </p>
        </section>
        {/* Start Referring Now */}
        <section className="text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-8">Start Referring Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
              <p className="text-3xl mb-3">🚀</p>
              <h3 className="font-display font-bold text-lg mb-2">Step 1: Get Started</h3>
              <p className="text-muted-foreground text-sm">Log in to the Referral Portal through your Student Portal and quickly set up your bank details to start earning.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
              <p className="text-3xl mb-3">🔗</p>
              <h3 className="font-display font-bold text-lg mb-2">Step 2: Share & Refer</h3>
              <p className="text-muted-foreground text-sm">Invite your friends by sharing your referral link or code. They can easily use it while filling out the enquiry form—simple and seamless!</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
              <p className="text-3xl mb-3">💰</p>
              <h3 className="font-display font-bold text-lg mb-2">Step 3: Earn Rewards</h3>
              <p className="text-muted-foreground text-sm">Once your referral enrolls, you earn a commission directly in your bank account. Plus, your friend enjoys an exclusive discount on their course fee (varies by course).</p>
            </div>
          </div>
        </section>

        {/* Referral Code */}
        <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <h3 className="font-display font-bold text-base mb-0.5">🔗 Your Referral Code</h3>
                <p className="text-muted-foreground text-xs">Share with students to earn rewards</p>
              </div>
              <div className="flex items-center gap-2 bg-accent/30 border border-border rounded-lg px-4 py-2.5 font-display font-extrabold text-lg tracking-wider">
                REF2024SD847
                <button
                  onClick={(e) => {
                    navigator.clipboard.writeText("REF2024SD847").catch(() => {});
                    const btn = e.currentTarget;
                    btn.textContent = "✓ Copied!";
                    setTimeout(() => (btn.textContent = "📋 Copy"), 2000);
                  }}
                  className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-[11px] font-bold hover:opacity-90 transition-all shrink-0 ml-2"
                >
                  📋 Copy
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  navigator.share?.({ title: "Referral Link", text: "Use my referral code REF2024SD847", url: window.location.href }).catch(() => {});
                }}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 shrink-0"
              >
                🔗 Share Referral Link
              </button>
              <button className="bg-foreground text-background px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 shrink-0">
                ➕ Add New Referral
              </button>
            </div>
        </section>

        <section id="dashboard">
          <h2 className="font-display font-extrabold text-xl mb-4">🏠 Dashboard</h2>
          <DashboardView onNavigate={noop} />
        </section>
        <section id="referrals">
          <h2 className="font-display font-extrabold text-xl mb-4">👥 My Referrals</h2>
          <ReferralsView />
        </section>
        <section id="rewards">
          <h2 className="font-display font-extrabold text-xl mb-4">💸 My Rewards</h2>
          <RewardsView />
        </section>
        <section id="courses">
          <h2 className="font-display font-extrabold text-xl mb-4">🎓 Courses</h2>
          <CoursesView onNavigate={noop} />
        </section>
        <section id="faq">
          <h2 className="font-display font-extrabold text-xl mb-4">❓ FAQ</h2>
          <FaqView />
        </section>
        <section id="terms">
          <h2 className="font-display font-extrabold text-xl mb-4">📄 Terms & Conditions</h2>
          <TermsView />
        </section>
      </main>
    </div>
  );
};

export default Index;
