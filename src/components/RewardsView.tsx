import { BarChart3, Clock, Rocket, ClipboardList, Download } from "lucide-react";
const TRANSACTIONS = [
  { type: "Referral Bonus", date: "Jan 12, 2025 · 10:30 AM", amount: "+₹500", status: "done" },
  { type: "Referral Bonus", date: "Jan 10, 2025 · 2:20 PM", amount: "+₹750", status: "done" },
  { type: "Referral Bonus", date: "Jan 9, 2025 · 4:30 PM", amount: "+₹500", status: "done" },
  { type: "Referral Bonus", date: "Jan 8, 2025 · 11:00 AM", amount: "+₹500", status: "done" },
  { type: "Referral Bonus", date: "Jan 6, 2025 · 9:15 AM", amount: "+₹750", status: "pending" },
  { type: "Referral Bonus", date: "Jan 4, 2025 · 3:00 PM", amount: "+₹500", status: "done" },
];

const RewardsView = () => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
      <div className="bg-card border border-primary/15 rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-primary/3 to-transparent">
        <div className="text-muted-foreground text-[11px] mb-2 flex items-center gap-1.5"><BarChart3 className="w-3.5 h-3.5" /> Earnings</div>
        <div className="font-display font-extrabold text-3xl text-primary">₹3,000.00</div>
        <div className="text-muted-foreground text-[10px] mt-1">All time</div>
        <div className="inline-flex items-center gap-1.5 bg-secondary/10 border border-secondary/15 rounded-full px-2.5 py-1 mt-2.5 text-[11px] text-secondary">
          <Rocket className="w-3 h-3" /> Potential: up to ₹4,500.00
        </div>
      </div>
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-5">
        <div className="text-muted-foreground text-[11px] mb-2 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Pending Payout</div>
        <div className="font-display font-extrabold text-3xl text-warning">₹750.00</div>
        <div className="inline-flex items-center gap-1 bg-warning/10 text-warning text-[10px] font-medium px-2 py-0.5 rounded-full mt-1.5"><Clock className="w-2.5 h-2.5" /> Processing</div>
      </div>
    </div>

    <div className="bg-card border border-border rounded-2xl p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border">
        <h3 className="font-display font-bold text-[15px] flex items-center gap-2"><ClipboardList className="w-4 h-4 text-primary" /> Transaction History</h3>
        <span className="text-primary text-xs font-medium cursor-pointer flex items-center gap-1">Download all <Download className="w-3 h-3" /></span>
      </div>
      {TRANSACTIONS.map((t, i) => (
        <div key={i} className="flex flex-wrap sm:flex-nowrap items-center justify-between py-3 border-b border-border last:border-b-0 gap-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-2 h-2 rounded-full ${t.status === "done" ? "bg-success" : "bg-warning"}`} />
            <div>
              <div className="font-medium text-[13px]">{t.type}</div>
              <div className="text-muted-foreground text-[10px]">{t.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${t.status === "done" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
              {t.status === "done" ? "Completed" : "Pending"}
            </span>
            <span className={`font-display font-extrabold text-sm ${t.status === "done" ? "text-primary" : "text-warning"}`}>{t.amount}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RewardsView;
