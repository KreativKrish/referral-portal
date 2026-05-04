import { useState } from "react";
import { Search, Check, Clock, Sparkles, X } from "lucide-react";

const REFERRALS = [
  { initials: "SJ", name: "Sarah Johnson", phone: "+1 (555) 123-4567", email: "sarah.j@company.com", status: "closed", date: "Jan 10, 2025", gradient: "from-secondary to-purple-300" },
  { initials: "MC", name: "Michael Chen", phone: "+1 (555) 234-5678", email: "m.chen@business.io", status: "closed", date: "Jan 8, 2025", gradient: "from-destructive to-warning" },
  { initials: "ED", name: "Emma Davis", phone: "+1 (555) 345-6789", email: "emma.davis@startup.co", status: "in progress", date: "Jan 12, 2025", gradient: "from-success to-sky-400" },
  { initials: "JW", name: "James Wilson", phone: "+1 (555) 456-7890", email: "jwilson@enterprise.com", status: "new", date: "Jan 14, 2025", gradient: "from-purple-300 to-secondary" },
  { initials: "OM", name: "Olivia Martinez", phone: "+1 (555) 567-8901", email: "o.martinez@tech.io", status: "closed", date: "Jan 5, 2025", gradient: "from-warning to-destructive" },
  { initials: "LT", name: "Liam Torres", phone: "+1 (555) 678-9012", email: "l.torres@mail.com", status: "dropped", date: "Dec 28, 2024", gradient: "from-destructive to-purple-300" },
  { initials: "AP", name: "Aisha Patel", phone: "+1 (555) 789-0123", email: "a.patel@uni.edu", status: "in progress", date: "Jan 3, 2025", gradient: "from-warning to-success" },
  { initials: "RK", name: "Ravi Kumar", phone: "+91 98765 43210", email: "ravi.k@college.in", status: "new", date: "Jan 15, 2025", gradient: "from-sky-400 to-secondary" },
  { initials: "ZN", name: "Zara Nguyen", phone: "+1 (555) 890-1234", email: "z.nguyen@startup.io", status: "closed", date: "Jan 7, 2025", gradient: "from-purple-300 to-destructive" },
];

const STATUS_PILLS: Record<string, { className: string; label: string; icon: React.ReactNode }> = {
  closed: { className: "bg-success/10 text-success border border-success/20", label: "Closed", icon: <Check className="w-3 h-3" /> },
  "in progress": { className: "bg-warning/10 text-warning border border-warning/20", label: "In Progress", icon: <Clock className="w-3 h-3" /> },
  new: { className: "bg-secondary/10 text-secondary border border-secondary/20", label: "New", icon: <Sparkles className="w-3 h-3" /> },
  dropped: { className: "bg-destructive/10 text-destructive border border-destructive/20", label: "Dropped", icon: <X className="w-3 h-3" /> },
};

const ReferralsView = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = REFERRALS.filter((r) => {
    if (filter !== "all" && r.status !== filter) return false;
    if (search && !`${r.name}${r.phone}${r.email}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const filters = ["all", "new", "in progress", "closed", "dropped"];

  return (
    <div>
      <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          {/* Search input with properly scoped icon */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              placeholder="Search by name, mobile, or email..."
              className="bg-card2 border border-border pl-9 pr-3 py-1.5 rounded-full text-xs outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap mb-5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs capitalize border transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 bg-card"
              }`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-3 py-2.5">Name</th>
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-3 py-2.5">Mobile</th>
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-3 py-2.5">Email</th>
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-3 py-2.5">Status</th>
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-3 py-2.5">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => {
                const pill = STATUS_PILLS[r.status];
                return (
                  <tr key={i} className="hover:bg-card2/50 transition-colors group">
                    <td className="px-3 py-3 text-[13px] border-t border-border">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center font-display font-bold text-[10px] text-white shrink-0`}>
                          {r.initials}
                        </div>
                        <span className="font-medium text-foreground">{r.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-[12px] text-muted-foreground border-t border-border">{r.phone}</td>
                    <td className="px-3 py-3 text-[12px] text-muted-foreground border-t border-border">{r.email}</td>
                    <td className="px-3 py-3 border-t border-border">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${pill.className}`}>
                        {pill.icon} {pill.label}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-[11px] text-muted-foreground border-t border-border">{r.date}</td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-10 text-center text-muted-foreground text-sm border-t border-border">
                    No referrals match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralsView;
