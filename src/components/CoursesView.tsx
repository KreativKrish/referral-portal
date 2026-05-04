import { Search, Calendar, Link, Target } from "lucide-react";

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
      {/* Search with properly scoped icon */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          placeholder="Search courses..."
          className="bg-card2 border border-border pl-9 pr-3 py-1.5 rounded-full text-xs outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all w-64"
        />
      </div>
      <select className="bg-card border border-border text-muted-foreground px-3 py-1.5 rounded-full text-xs outline-none focus:border-primary/40 transition-colors">
        <option>All Categories</option>
        <option>Postgraduate</option>
        <option>Undergraduate</option>
      </select>
    </div>

    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-card2/40">
            <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-4 py-3">Course</th>
            <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-4 py-3">Type</th>
            <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-4 py-3">Your Bonus</th>
            <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-4 py-3">Deadline</th>
            <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-4 py-3">Friend Gets</th>
            <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-right px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="gsap-stagger-container">
          {COURSES.map((c, i) => (
            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-card2/40 transition-colors gsap-stagger-item">
              <td className="px-4 py-3.5 font-medium text-[13px] text-foreground">{c.name}</td>
              <td className="px-4 py-3.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-card2 border border-border px-2 py-0.5 rounded-full">
                  {c.type}
                </span>
              </td>
              <td className="px-4 py-3.5 font-display font-extrabold text-primary text-sm">{c.bonus}</td>
              <td className="px-4 py-3.5">
                {/* Wrap in div to apply flex correctly — td doesn't support flex display reliably */}
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3 shrink-0" /> {c.date}
                </div>
              </td>
              <td className="px-4 py-3.5">
                <span className="bg-success/8 text-success border border-success/20 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {c.benefit}
                </span>
              </td>
              <td className="px-4 py-3.5 text-right">
                <button
                  onClick={() => onNavigate("referrals")}
                  className="bg-primary/8 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ml-auto"
                >
                  <Link className="w-3 h-3" /> Refer Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-gradient-to-r from-secondary/10 to-primary/5 border border-primary/15 rounded-2xl p-5 flex items-center justify-between gap-4 mt-5 flex-wrap gsap-reveal-up shadow-card">
      <div>
        <h3 className="font-display font-extrabold text-[17px] mb-1 flex items-center gap-2">
          Know someone perfect for these courses? <Target className="w-5 h-5 text-primary" />
        </h3>
        <p className="text-muted-foreground text-xs">Refer them now and earn up to ₹5,000 per successful enrollment.</p>
      </div>
      <button
        onClick={() => onNavigate("referrals")}
        className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-[13px] font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all shrink-0 active:scale-[0.98]"
      >
        + Add New Referral
      </button>
    </div>
  </div>
);

export default CoursesView;
