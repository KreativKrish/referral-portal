interface Props {
  onNavigate: (tab: string) => void;
}

const COURSES = [
  { type: "Postgraduate", name: "PhD in Robotics", bonus: "₹5,000", date: "Apr 15, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "PhD in Quantum Physics", bonus: "₹4,500", date: "May 25, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Executive MBA", bonus: "₹4,000", date: "Nov 15, 2025", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Business Administration", bonus: "₹3,500", date: "Jun 1, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Finance", bonus: "₹3,400", date: "May 20, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Engineering", bonus: "₹3,300", date: "May 1, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Public Health", bonus: "₹3,200", date: "Apr 20, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Data Science", bonus: "₹3,000", date: "May 15, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Philosophy", bonus: "₹2,900", date: "Jun 5, 2026", benefit: "10% OFF tuition" },
  { type: "Undergraduate", name: "Bachelor of Arts in Economics", bonus: "₹2,800", date: "Jun 10, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Applied Mathematics", bonus: "₹2,800", date: "May 30, 2026", benefit: "10% OFF tuition" },
  { type: "Postgraduate", name: "Master of Information Technology", bonus: "₹2,700", date: "Jun 15, 2026", benefit: "10% OFF tuition" },
];

const CoursesView = ({ onNavigate }: Props) => (
  <div>
    <div className="flex gap-2 mb-5 flex-wrap items-center">
      <input type="search" placeholder="🔍  Search courses or universities..." className="bg-card2 border border-border px-3 py-1.5 rounded-full text-xs outline-none focus:border-primary/30 transition-colors w-60" />
      <select className="bg-card border border-border text-muted-foreground px-3 py-1.5 rounded-full text-xs outline-none">
        <option>All Categories</option>
        <option>Postgraduate</option>
        <option>Undergraduate</option>
      </select>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {COURSES.map((c, i) => (
        <div key={i} className="bg-card border border-border rounded-2xl p-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition-all">
          <div className="text-[9px] font-bold uppercase tracking-wider text-secondary mb-1">{c.type}</div>
          <div className="font-display font-bold text-[13px] mb-2 leading-tight">{c.name}</div>
          <div className="font-display font-extrabold text-xl text-primary">
            {c.bonus} <span className="font-body font-normal text-[10px] text-muted-foreground">bonus</span>
          </div>
          <div className="flex gap-1.5 items-center flex-wrap mt-2">
            <span className="text-muted-foreground text-[10px]">📅 {c.date}</span>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">{c.benefit}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-secondary/10 to-primary/5 border border-primary/15 rounded-2xl p-5 flex items-center justify-between gap-4 mt-5 flex-wrap">
      <div>
        <h3 className="font-display font-extrabold text-[17px] mb-1">Know someone perfect for these courses? 🎯</h3>
        <p className="text-muted-foreground text-xs">Refer them now and earn up to ₹5,000 per successful enrollment.</p>
      </div>
      <button onClick={() => onNavigate("referrals")} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-[13px] font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all shrink-0">
        + Add New Referral
      </button>
    </div>
  </div>
);

export default CoursesView;
