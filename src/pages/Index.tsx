import TopNav from "@/components/TopNav";
import DashboardView from "@/components/DashboardView";
import ReferralsView from "@/components/ReferralsView";
import RewardsView from "@/components/RewardsView";
import CoursesView from "@/components/CoursesView";
import SchemeView from "@/components/SchemeView";
import TermsView from "@/components/TermsView";

const SECTIONS = [
  { id: "dashboard", label: "🏠 Dashboard" },
  { id: "referrals", label: "👥 My Referrals" },
  { id: "rewards", label: "💸 My Rewards" },
  { id: "courses", label: "🎓 Courses" },
  { id: "scheme", label: "🎁 Referral Scheme" },
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
        <section id="dashboard">
          <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">🏠 Dashboard</h2>
          <DashboardView onNavigate={noop} />
        </section>
        <section id="referrals">
          <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">👥 My Referrals</h2>
          <ReferralsView />
        </section>
        <section id="rewards">
          <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">💸 My Rewards</h2>
          <RewardsView />
        </section>
        <section id="courses">
          <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">🎓 Courses</h2>
          <CoursesView onNavigate={noop} />
        </section>
        <section id="scheme">
          <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">🎁 Referral Scheme</h2>
          <SchemeView onNavigate={noop} />
        </section>
        <section id="terms">
          <h2 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">📄 Terms</h2>
          <TermsView />
        </section>
      </main>
    </div>
  );
};

export default Index;
