import AlertBanner from "./AlertBanner";
import { Users, Clock, CheckCircle, IndianRupee, Trophy, Crown } from "lucide-react";

interface Props {
  onNavigate: (tab: string) => void;
}

const LEADERBOARD = [
  { rank: 1, name: "David Rodriguez", initials: "DR", refs: 156, enrolled: 134, prize: "₹50,000", gradient: "from-amber-400 to-orange-500", color: "text-amber-500" },
  { rank: 2, name: "Jennifer Kim", initials: "JK", refs: 142, enrolled: 118, prize: "₹35,000", gradient: "from-gray-300 to-gray-400", color: "text-gray-400" },
  { rank: 3, name: "Marcus Thompson", initials: "MT", refs: 138, enrolled: 112, prize: "₹25,000", gradient: "from-amber-600 to-red-600", color: "text-amber-700" },
  { rank: 4, name: "Sarah Chen", refs: 98, enrolled: 85, prize: "₹10,000" },
  { rank: 5, name: "Michael Chang", refs: 87, enrolled: 76, prize: "₹10,000" },
  { rank: 6, name: "Jessica Smith", refs: 82, enrolled: 71, prize: "₹10,000" },
];

const DashboardView = ({ onNavigate }: Props) => {
  return (
    <div>
      <AlertBanner />

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 gsap-stagger-container">
        <StatCard
          label="Total Referrals"
          icon={<Users className="w-3.5 h-3.5" />}
          value="9"
          sub="All time"
          scheme="default"
        />
        <StatCard
          label="In Progress"
          icon={<Clock className="w-3.5 h-3.5" />}
          value="2"
          valueClass="text-warning"
          sub="Being processed"
          scheme="warning"
        />
        <StatCard
          label="Closed"
          icon={<CheckCircle className="w-3.5 h-3.5" />}
          value="0"
          valueClass="text-success"
          sub="Converted"
          scheme="success"
        />
        <StatCard
          label="Current Earnings"
          icon={<IndianRupee className="w-3.5 h-3.5" />}
          value="₹3,000"
          valueClass="text-primary"
          badge="Potential ₹7,700"
          scheme="primary"
        />
      </div>

      {/* Leaderboard */}
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display font-extrabold text-[17px] flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" /> Top Performers{" "}
            <span className="font-body font-normal text-[10px] text-muted-foreground bg-card2 px-2 py-0.5 rounded-full border border-border">
              This month
            </span>
          </h3>
        </div>

        {/* Podiums */}
        <div className="flex items-end justify-center mb-6 mt-16 gap-1 md:gap-2 gsap-stagger-container relative">
          <PodiumColumn data={LEADERBOARD[1]} heightClass="h-[180px]" />
          <PodiumColumn data={LEADERBOARD[0]} heightClass="h-[230px]" isFirst />
          <PodiumColumn data={LEADERBOARD[2]} heightClass="h-[150px]" />
        </div>

        {/* Current User Stat Bar */}
        <div className="bg-card2/50 border border-border rounded-xl p-3 text-center mb-8 max-w-sm mx-auto">
          <p className="text-[12px] text-muted-foreground">
            You enrolled <span className="font-bold text-foreground">59</span> students and are ranked{" "}
            <span className="font-bold text-foreground border-b border-primary/40">#8</span> out of{" "}
            <span className="font-bold text-foreground">10</span> users
          </p>
        </div>

        {/* Rest of the List */}
        <div className="w-full bg-card rounded-xl overflow-hidden border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-card2/30">
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-5 py-3">Place</th>
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-left px-5 py-3">Name</th>
                <th className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider text-right px-5 py-3">Performance</th>
              </tr>
            </thead>
            <tbody className="gsap-stagger-container">
              {LEADERBOARD.slice(3).map((u, i) => (
                <tr key={i} className="border-b border-border last:border-b-0 hover:bg-card2/40 transition-colors gsap-stagger-item">
                  <td className="px-5 py-3.5 text-muted-foreground font-semibold text-xs">
                    <div className="flex items-center gap-1.5">
                      <Trophy className="w-3 h-3 opacity-50" /> {u.rank}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-[13px] text-foreground">{u.name}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="text-xs text-muted-foreground">
                      <span className="text-foreground font-semibold">{u.refs}</span> Ref{" "}
                      <span className="opacity-40 mx-0.5">/</span>{" "}
                      <span className="text-primary font-semibold">{u.enrolled}</span> Enr
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  label,
  icon,
  value,
  sub,
  valueClass = "",
  badge,
  scheme = "default",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  sub?: string;
  valueClass?: string;
  badge?: string;
  scheme?: "default" | "warning" | "success" | "primary";
}) => {
  const iconStyle =
    scheme === "warning" ? "bg-warning/10 text-warning"
    : scheme === "success" ? "bg-success/10 text-success"
    : scheme === "primary" ? "bg-primary/10 text-primary"
    : "bg-card2 text-muted-foreground";

  const cardBg =
    scheme === "primary"
      ? "bg-gradient-to-br from-primary/8 to-primary/3"
      : "bg-card";

  const leftAccent =
    scheme === "warning" ? "border-l-2 border-l-warning/50"
    : scheme === "success" ? "border-l-2 border-l-success/50"
    : scheme === "primary" ? "border-l-2 border-l-primary/50"
    : "";

  return (
    <div
      className={`${cardBg} border border-border ${leftAccent} rounded-2xl p-4 hover:-translate-y-1 transition-all shadow-card hover:shadow-card-hover relative overflow-hidden group gsap-stagger-item`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${iconStyle} shrink-0`}>
          {icon}
        </div>
        <div className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider leading-tight">{label}</div>
      </div>
      <div className={`font-display font-extrabold text-2xl leading-none ${valueClass}`}>{value}</div>
      {sub && <div className="text-muted-foreground text-[11px] mt-1.5">{sub}</div>}
      {badge && (
        <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-[10px] font-medium px-2 py-0.5 rounded-full mt-2">
          🚀 {badge}
        </div>
      )}
    </div>
  );
};

const PodiumColumn = ({ data, heightClass, isFirst }: { data: any; heightClass: string; isFirst?: boolean }) => (
  <div
    className={`w-[30%] ${
      isFirst
        ? "bg-gradient-to-t from-primary/15 to-primary/5 border-primary/30 z-10 w-[35%] shadow-lg shadow-primary/5"
        : "bg-gradient-to-t from-card2/90 to-card/20 border-border/60"
    } border-t border-l border-r rounded-t-[1.2rem] relative flex flex-col items-center pt-10 pb-4 ${heightClass} gsap-stagger-item`}
  >
    {/* Floating Avatar Region */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center select-none cursor-default group">
      <div
        className={`${
          isFirst ? "w-[4.5rem] h-[4.5rem] text-2xl shadow-primary/30" : "w-14 h-14 text-sm shadow-black/10"
        } shadow-xl rounded-[1.2rem] bg-gradient-to-br ${data.gradient} flex items-center justify-center font-display font-extrabold text-white mb-2.5 relative border-[3px] border-background group-hover:-translate-y-1 transition-transform`}
      >
        {isFirst && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 drop-shadow-md">
            <Crown className="w-8 h-8 text-amber-500 fill-amber-500 animate-bounce" />
          </div>
        )}
        {data.initials}
      </div>
      <div className="font-display font-black tracking-tight text-[13px] md:text-[14px] text-foreground whitespace-nowrap drop-shadow-sm">
        {data.name}
      </div>
    </div>

    {/* Inner Podium Info */}
    <div className="flex flex-col items-center justify-center mt-auto gap-1.5 w-full px-2 text-center">
      <div className="flex flex-col gap-1 w-full max-w-[100px] mx-auto">
        <div className="text-muted-foreground font-medium text-[9px] uppercase tracking-widest bg-background/50 px-1.5 py-0.5 border border-border/50 rounded-md truncate">
          <span className="font-extrabold">{data.refs}</span> Referred
        </div>
        <div className="text-primary font-bold text-[9px] uppercase tracking-widest bg-primary/10 px-1.5 py-0.5 border border-primary/20 rounded-md truncate">
          <span className="font-extrabold">{data.enrolled}</span> Enrolled
        </div>
      </div>
    </div>
  </div>
);

export default DashboardView;
