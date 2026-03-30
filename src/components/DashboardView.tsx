import AlertBanner from "./AlertBanner";

interface Props {
  onNavigate: (tab: string) => void;
}

const DashboardView = ({ onNavigate }: Props) => {
  return (
    <div>
      <AlertBanner />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <StatCard label="👥 Total Referrals" value="9" sub="All time" />
        <StatCard label="🔄 In Progress" value="2" valueClass="text-warning" sub="Being processed" />
        <StatCard label="✅ Successfully Closed" value="0" valueClass="text-success" sub="Converted" />
        <StatCard label="💰 Total Earnings" value="₹3,000" valueClass="text-primary" badge="🚀 Potential ₹7,700" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4">
        <div className="flex flex-col gap-4">
          {/* Leaderboard */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h3 className="font-display font-bold text-[15px] flex items-center gap-2">
                🏆 Top Performers <span className="font-body font-normal text-[10px] text-muted-foreground bg-card2 px-2 py-0.5 rounded-full">This month</span>
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2 items-end mb-4">
              <PodiumItem name="Jennifer Kim" initials="JK" position="2nd Place" refs={142} enrolled={118} gradient="from-gray-400 to-gray-500" />
              <PodiumItem name="David Rodriguez" initials="DR" position="1st Place" refs={156} enrolled={134} gradient="from-amber-400 to-orange-400" isFirst />
              <PodiumItem name="Marcus Thompson" initials="MT" position="3rd Place" refs={138} enrolled={112} gradient="from-orange-400 to-red-600" />
            </div>
            <div className="flex items-center justify-between bg-card2 rounded-xl p-3 border border-border">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center font-display font-extrabold text-xs text-secondary-foreground">Y</div>
                <div>
                  <div className="font-semibold text-[13px]">Your Rank</div>
                  <div className="text-muted-foreground text-[11px]">#8 of 10</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display font-extrabold text-base text-primary">₹30,000</div>
                <div className="text-muted-foreground text-[10px]">59 enrolled</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Panel */}
        <div className="flex flex-col gap-4">
          {/* Counsellor */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-sm">Your Counsellor</h3>
              <span className="inline-flex items-center gap-1 bg-success/10 text-success text-[10px] font-medium px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-blink" /> Online
              </span>
            </div>
            <div className="flex items-center gap-3 my-3">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center font-display font-extrabold text-[15px] text-primary-foreground shrink-0">PS</div>
              <div>
                <div className="font-display font-bold text-[13px]">Dr. Priya Sharma</div>
                <div className="text-muted-foreground text-[11px]">Senior Admission Counsellor</div>
                <div className="text-muted-foreground text-[10px]">8+ years experience</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button className="px-3 py-2 rounded-lg text-xs border border-border bg-card2 hover:bg-border transition-all flex items-center justify-center gap-1.5">📞 Call</button>
              <button className="px-3 py-2 rounded-lg text-xs border border-border bg-card2 hover:bg-border transition-all flex items-center justify-center gap-1.5">✉️ Email</button>
            </div>
            <button className="w-full px-3 py-2 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-all flex items-center justify-center gap-1.5">💬 Chat Now</button>
          </div>

          {/* Referral Code */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <h3 className="font-display font-bold text-sm mb-0.5">🔗 Your Referral Code</h3>
            <p className="text-muted-foreground text-[11px]">Share with students to earn rewards</p>
            <div className="flex items-center justify-between bg-card2 border border-border rounded-lg p-3 my-3 font-display font-extrabold text-[17px] tracking-wider">
              REF2024SD847
              <CopyButton />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-card2 rounded-lg p-2.5 text-center">
                <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Used</div>
                <div className="font-display font-extrabold text-base mt-0.5">9</div>
              </div>
              <div className="bg-card2 rounded-lg p-2.5 text-center">
                <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Success</div>
                <div className="font-display font-extrabold text-base text-primary mt-0.5">0</div>
              </div>
              <div className="bg-card2 rounded-lg p-2.5 text-center">
                <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Earned</div>
                <div className="font-display font-extrabold text-base text-secondary mt-0.5">₹3K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, sub, valueClass = "", badge }: { label: string; value: string; sub?: string; valueClass?: string; badge?: string }) => (
  <div className="bg-card border border-border rounded-2xl p-4 hover:-translate-y-0.5 transition-transform relative overflow-hidden group">
    <div className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mb-1">{label}</div>
    <div className={`font-display font-extrabold text-2xl ${valueClass}`}>{value}</div>
    {sub && <div className="text-muted-foreground text-[10px] mt-1">{sub}</div>}
    {badge && <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-[10px] font-medium px-2 py-0.5 rounded-full mt-1.5">{badge}</div>}
  </div>
);

const PodiumItem = ({ name, initials, position, refs, enrolled, gradient, isFirst }: { name: string; initials: string; position: string; refs: number; enrolled: number; gradient: string; isFirst?: boolean }) => (
  <div className="text-center">
    <div className={`${isFirst ? "w-14 h-14 text-lg" : "w-11 h-11 text-sm"} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-display font-extrabold mx-auto mb-1.5 relative shadow-lg`}>
      {isFirst && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs">👑</span>}
      {initials}
    </div>
    {isFirst && <div className="text-warning text-[10px] font-semibold mb-0.5">🏆 Champion</div>}
    <div className="font-display font-bold text-[11px]">{name}</div>
    <div className="text-muted-foreground text-[10px] mb-1">{position}</div>
    <div className="flex gap-1 justify-center">
      <div className="bg-card2 rounded-md px-1.5 py-1 text-[9px] text-center">Refs<br /><span className="font-extrabold text-[11px]">{refs}</span></div>
      <div className="bg-card2 rounded-md px-1.5 py-1 text-[9px] text-center">Enr<br /><span className="font-extrabold text-[11px] text-primary">{enrolled}</span></div>
    </div>
  </div>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => (
  <details className="border-b border-border group">
    <summary className="py-3 font-medium text-[13px] cursor-pointer flex justify-between items-center hover:text-primary transition-colors list-none">
      {q}
      <span className="text-muted-foreground text-base group-open:hidden">+</span>
      <span className="text-primary text-base hidden group-open:inline">×</span>
    </summary>
    <div className="text-muted-foreground text-xs pb-3 leading-relaxed">{a}</div>
  </details>
);

const CopyButton = () => {
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText("REF2024SD847").catch(() => {});
    const btn = e.currentTarget;
    btn.textContent = "✓ Copied!";
    setTimeout(() => (btn.textContent = "📋 Copy"), 2000);
  };
  return (
    <button onClick={handleCopy} className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-[11px] font-bold hover:opacity-90 transition-all shrink-0">
      📋 Copy
    </button>
  );
};

export default DashboardView;
