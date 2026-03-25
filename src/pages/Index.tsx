import { useState } from "react";
import TopNav from "@/components/TopNav";
import DashboardView from "@/components/DashboardView";
import ReferralsView from "@/components/ReferralsView";
import RewardsView from "@/components/RewardsView";
import CoursesView from "@/components/CoursesView";
import SchemeView from "@/components/SchemeView";
import TermsView from "@/components/TermsView";

const TABS = [
  { id: "dashboard", label: "🏠 Dashboard" },
  { id: "referrals", label: "👥 My Referrals" },
  { id: "rewards", label: "💸 My Rewards" },
  { id: "courses", label: "🎓 Courses" },
  { id: "scheme", label: "🎁 Referral Scheme" },
  { id: "terms", label: "📄 Terms" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background relative z-[1]">
      <TopNav tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="animate-fade-in" key={activeTab}>
          {activeTab === "dashboard" && <DashboardView onNavigate={setActiveTab} />}
          {activeTab === "referrals" && <ReferralsView />}
          {activeTab === "rewards" && <RewardsView />}
          {activeTab === "courses" && <CoursesView onNavigate={setActiveTab} />}
          {activeTab === "scheme" && <SchemeView onNavigate={setActiveTab} />}
          {activeTab === "terms" && <TermsView />}
        </div>
      </main>
    </div>
  );
};

export default Index;
