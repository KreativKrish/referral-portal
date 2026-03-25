interface Props {
  onNavigate: (tab: string) => void;
}

const SchemeView = ({ onNavigate }: Props) => (
  <div>
    {/* Hero */}
    <div className="bg-gradient-to-br from-secondary/10 to-primary/5 border border-primary/12 rounded-2xl p-8 mb-5 text-center">
      <h2 className="font-display font-extrabold text-2xl mb-2">How the Referral Program Works 🎁</h2>
      <p className="text-muted-foreground text-[13px] max-w-md mx-auto mb-5">Share your code, help friends find the right course, and earn real cash rewards — it's that simple.</p>
      <button onClick={() => onNavigate("referrals")} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-[13px] font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all inline-flex items-center gap-2">
        + Start Referring Now
      </button>
    </div>

    {/* Steps */}
    <h3 className="font-display font-bold text-[15px] mb-3">3 Simple Steps</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
      {[
        { icon: "🔗", num: 1, title: "Share Your Code", desc: <>Copy your unique code <strong className="text-primary">REF2024SD847</strong> and share it with students.</> },
        { icon: "🎓", num: 2, title: "They Enroll", desc: "Your referred student applies using your code and completes enrollment." },
        { icon: "💸", num: 3, title: "You Get Paid", desc: "Once enrollment is confirmed, your bonus hits your account within 7–10 working days." },
      ].map((s, i) => (
        <div key={i} className="bg-card border border-border rounded-2xl p-5 text-center">
          <div className="text-2xl mb-2">{s.icon}</div>
          <div className="w-8 h-8 bg-primary/10 border border-primary/18 rounded-full flex items-center justify-center font-display font-extrabold text-[13px] text-primary mx-auto mb-2.5">{s.num}</div>
          <div className="font-display font-bold text-[13px] mb-1">{s.title}</div>
          <div className="text-muted-foreground text-xs leading-relaxed">{s.desc}</div>
        </div>
      ))}
    </div>

    {/* Tiers */}
    <h3 className="font-display font-bold text-[15px] mb-3">Bonus Tiers by Course</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
      {[
        { label: "Platinum Tier", bonus: "₹5,000", name: "PhD Programs", req: "Robotics, Quantum Physics", featured: true },
        { label: "Gold Tier", bonus: "₹4,000", name: "Executive Programs", req: "Exec MBA & equivalent" },
        { label: "Silver Tier", bonus: "₹3,000–₹3,500", name: "Masters Programs", req: "MBA, Finance, Engineering" },
        { label: "Bronze Tier", bonus: "₹2,700–₹2,900", name: "UG & Other PG", req: "Bachelors & other PG" },
      ].map((t, i) => (
        <div key={i} className={`bg-card border rounded-2xl p-4 text-center hover:-translate-y-0.5 transition-transform relative overflow-hidden ${t.featured ? "border-primary/25 bg-gradient-to-br from-primary/3 to-transparent" : "border-border"}`}>
          {t.featured && <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full">TOP</div>}
          <div className="text-muted-foreground text-[10px] uppercase tracking-wide mb-1">{t.label}</div>
          <div className="font-display font-extrabold text-xl text-primary">{t.bonus}</div>
          <div className="font-semibold text-xs mt-1">{t.name}</div>
          <div className="text-muted-foreground text-[11px] mt-1">{t.req}</div>
        </div>
      ))}
    </div>

    {/* Friend Benefits */}
    <div className="bg-card border border-border rounded-2xl p-5 mb-4">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
        <h3 className="font-display font-bold text-[15px]">🎁 What Your Referred Friend Gets</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { icon: "🏷️", title: "10% Tuition Discount", desc: "Applied automatically at checkout when they use your referral code." },
          { icon: "⚡", title: "Priority Application Review", desc: "Referred students get their applications reviewed faster." },
          { icon: "🧑‍💼", title: "Dedicated Counsellor", desc: "Referred students are paired with a dedicated admission counsellor." },
          { icon: "🎓", title: "Welcome Onboarding Kit", desc: "A special welcome package with study materials on enrollment." },
        ].map((b, i) => (
          <div key={i} className="bg-card2 border border-border rounded-xl p-3.5 flex items-start gap-3">
            <span className="text-xl">{b.icon}</span>
            <div>
              <div className="font-semibold text-[13px] mb-0.5">{b.title}</div>
              <div className="text-muted-foreground text-xs">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Key Terms */}
    <div className="bg-card border border-border rounded-2xl p-5">
      <h3 className="font-display font-bold text-[15px] mb-3">📋 Key Terms at a Glance</h3>
      <div className="flex flex-col gap-2.5">
        {[
          "Referral bonus paid out within 7–10 working days after confirmed enrollment.",
          "If the referred student drops out within 30 days, the bonus may be reversed.",
          "No cap on the number of referrals you can make.",
          "International students are eligible as long as they enroll in a listed course.",
          "Payment details must be completed before a payout is processed.",
          "Only referrals made through the portal using your code are eligible.",
        ].map((t, i) => (
          <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
            <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5" />
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SchemeView;
