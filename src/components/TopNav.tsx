interface Tab {
  id: string;
  label: string;
}

interface TopNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const TopNav = ({ tabs, activeTab, onTabChange }: TopNavProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <svg fill="none" viewBox="0 0 15 15" className="w-4 h-4">
                <path d="M7.5 1L12 5V10L7.5 14L3 10V5L7.5 1Z" fill="white" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-[17px] text-foreground">
              Ref<span className="text-primary">Portal</span>
            </span>
          </div>

          {/* Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-card2 border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-card2 border border-border rounded-full flex items-center justify-center text-[13px] cursor-pointer relative">
              🔔
              <div className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full border-2 border-card" />
            </div>
            <div className="flex items-center gap-1.5 bg-card2 border border-border px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center font-display font-extrabold text-[9px] text-secondary-foreground">
                JD
              </div>
              Student ▾
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
