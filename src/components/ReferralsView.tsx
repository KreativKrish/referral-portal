import { useState } from "react";

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

const STATUS_PILLS: Record<string, { className: string; label: string }> = {
  closed: { className: "bg-success/10 text-success", label: "✓ Closed" },
  "in progress": { className: "bg-warning/10 text-warning", label: "⏳ In Progress" },
  new: { className: "bg-secondary/10 text-secondary", label: "✦ New" },
  dropped: { className: "bg-destructive/10 text-destructive", label: "✕ Dropped" },
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
      <AlertBanner />
      <div className="bg-card border border-border rounded-2xl p-5">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex gap-2 items-center flex-wrap">
            <input
              type="search"
              placeholder="🔍  Search by name, mobile, or email..."
              className="bg-card2 border border-border px-3 py-1.5 rounded-full text-xs outline-none focus:border-primary/30 transition-colors w-60"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap mb-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs capitalize border transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary font-bold"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-2 py-1">Name</th>
                <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-2 py-1">Mobile Number</th>
                <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-2 py-1">Email</th>
                <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-2 py-1">Status</th>
                <th className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide text-left px-2 py-1">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => {
                const pill = STATUS_PILLS[r.status];
                return (
                  <tr key={i} className="hover:bg-card2/50">
                    <td className="px-2 py-2.5 text-[13px] border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center font-display font-bold text-[10px] text-primary-foreground shrink-0`}>{r.initials}</div>
                        {r.name}
                      </div>
                    </td>
                    <td className="px-2 py-2.5 text-[13px] text-muted-foreground border-t border-border">{r.phone}</td>
                    <td className="px-2 py-2.5 text-[13px] text-muted-foreground border-t border-border">{r.email}</td>
                    <td className="px-2 py-2.5 border-t border-border">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${pill.className}`}>{pill.label}</span>
                    </td>
                    <td className="px-2 py-2.5 text-xs text-muted-foreground border-t border-border">{r.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralsView;
