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
    <div className="flex gap-2 mb-5 flex-wrap items-center relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
      <input type="search" placeholder="Search courses..." className="bg-card2 border border-border pl-9 pr-3 py-1.5 rounded-full text-xs outline-none focus:border-primary/30 transition-colors w-64" />
      <select className="bg-card border border-border text-muted-foreground px-3 py-1.5 rounded-full text-xs outline-none">
        <option>All Categories</option>
        <option>Postgraduate</option>
        <option>Undergraduate</option>
      </select>
    </div>

    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-card2/50">
            <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-4 py-2.5">Course</th>
            <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-4 py-2.5">Type</th>
            <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-4 py-2.5">Referrer Bonus</th>
            <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-4 py-2.5">Deadline</th>
            <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-4 py-2.5">Referral Benefit</th>
            <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-right px-4 py-2.5">Action</th>
          </tr>
        </thead>
        <tbody className="gsap-stagger-container">
          {COURSES.map((c, i) => (
            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-card2/30 transition-colors gsap-stagger-item">
              <td className="px-4 py-3 font-semibold text-[13px]">{c.name}</td>
              <td className="px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-card2 px-2 py-0.5 rounded-full">{c.type}</span>
              </td>
              <td className="px-4 py-3 font-extrabold text-primary text-sm">{c.bonus}</td>
              <td className="px-4 py-3 text-muted-foreground text-xs flex items-center gap-1.5 mt-2.5 border-none"><Calendar className="w-3 h-3" /> {c.date}</td>
              <td className="px-4 py-3">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">{c.benefit}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <button onClick={() => onNavigate("referrals")} className="bg-card2 border border-border text-foreground hover:border-primary/30 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5">
                  <Link className="w-3 h-3" /> Refer Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-gradient-to-r from-secondary/10 to-primary/5 border border-primary/15 rounded-2xl p-5 flex items-center justify-between gap-4 mt-5 flex-wrap gsap-reveal-up">
      <div>
        <h3 className="font-extrabold text-[17px] mb-1 flex items-center gap-2">Know someone perfect for these courses? <Target className="w-5 h-5 text-primary" /></h3>
        <p className="text-muted-foreground text-xs">Refer them now and earn up to ₹5,000 per successful enrollment.</p>
      </div>
      <button onClick={() => onNavigate("referrals")} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-[13px] font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all shrink-0">
        + Add New Referral
      </button>
    </div>
  </div>
);

export default CoursesView;
