import TopNav from "@/components/TopNav";
import DashboardView from "@/components/DashboardView";
import ReferralsView from "@/components/ReferralsView";
import RewardsView from "@/components/RewardsView";
import CoursesView from "@/components/CoursesView";
import SchemeView from "@/components/SchemeView";
import FaqView from "@/components/FaqView";
import TermsView from "@/components/TermsView";

const SECTIONS = [
  { id: "dashboard", label: "🏠 Dashboard" },
  { id: "referrals", label: "👥 My Referrals" },
  { id: "rewards", label: "💸 My Rewards" },
  { id: "courses", label: "🎓 Courses" },
  { id: "scheme", label: "🎁 Referral Scheme" },
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
        <section id="scheme">
          <h2 className="font-display font-extrabold text-xl mb-4">🎁 Referral Scheme</h2>
          <SchemeView onNavigate={noop} />
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
