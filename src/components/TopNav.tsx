import { useState, useRef } from "react";
import { Bell, ChevronDown, Phone, Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);

  const updateHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const group = btn.parentElement;
    if (!group) return;
    
    setHoverStyle({
      left: group.offsetLeft,
      width: btn.offsetWidth,
      opacity: 1,
    });
  };

  const hideHover = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleTabClick = (id: string) => {
    onTabChange(id);
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 bg-card/85 backdrop-blur-xl border-b border-border shadow-sm/50 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Menu Toggle for Mobile */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleMenu}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-card2 border border-border/50 text-foreground hover:bg-card hover:border-primary/30 transition-all active:scale-95"
            >
              {isMenuOpen ? <X className="w-5 h-5 animate-in spin-in-90" /> : <Menu className="w-5 h-5 animate-in fade-in" />}
            </button>
            
            <div className="flex items-center gap-2.5 shrink-0 group cursor-pointer" onClick={() => handleTabClick("dashboard")}>
              <div className="group-hover:-rotate-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                <img src="/logo.png" alt="RefPortal Logo" className="h-8 md:h-10 object-contain" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav 
            ref={navRef}
            onMouseLeave={hideHover}
            className="hidden md:flex items-center gap-0.5 sm:gap-1 overflow-x-auto md:overflow-visible scrollbar-none relative max-w-full"
          >
            {/* Sliding Glass Oval */}
            <div 
              className="absolute h-8 bg-card2/80 backdrop-blur-md rounded-full transition-all duration-300 ease-out border border-border/80 pointer-events-none z-0 shadow-sm"
              style={{
                left: hoverStyle.left,
                width: hoverStyle.width,
                opacity: hoverStyle.opacity,
                transform: "translateY(1px)", // slight optical alignment
              }}
            />

            {tabs.map((tab) => (
              <div key={tab.id} className="relative group">
                <button
                  onMouseEnter={updateHover}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative z-10 whitespace-nowrap px-2 sm:px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary font-semibold border border-primary/20 shadow-sm"
                      : "text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>

                {tab.id === "counsellor" && (
                  <div className="absolute top-full right-0 lg:left-1/2 lg:-translate-x-1/2 pt-3 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 animate-in fade-in slide-in-from-top-4">
                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xl flex flex-col gap-4 group-hover:block text-left">
                      <h4 className="font-display font-bold text-[15px] text-foreground leading-tight">
                        For any queries connect to our counsellor
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-primary" fill="currentColor" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="font-display font-extrabold text-[15px] text-foreground tracking-wide">+91 83828 28258</div>
                          <div className="text-muted-foreground text-[11px] mt-0.5">Mon–Sat, 9 AM – 6 PM</div>
                        </div>
                      </div>
                      <a href="tel:+918382828258" className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl text-[13px] font-bold hover:bg-primary/90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-sm">
                        <Phone className="w-3.5 h-3.5" fill="currentColor" /> Call Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Notification Bell */}
            <div className="w-8 h-8 bg-card2 hover:bg-card border border-border hover:border-primary/30 rounded-full flex items-center justify-center text-[13px] cursor-pointer relative transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95 hover:shadow-sm group">
              <Bell className="w-4 h-4 group-hover:animate-bounce" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full border-2 border-card animate-pulse" />
            </div>

            {/* Profile Menu */}
            <div className="flex items-center gap-1.5 bg-card2 hover:bg-card border border-border hover:border-primary/30 px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 hover:shadow-sm group">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center font-display font-extrabold text-[9px] text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                JD
              </div>
              <span className="group-hover:text-primary transition-colors duration-300 flex items-center gap-0.5">Student <ChevronDown className="w-3 h-3" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-md md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div 
          className={`absolute inset-x-0 top-[56px] bg-card border-b border-border shadow-2xl transition-all duration-500 ease-out p-6 pt-10 flex flex-col gap-8 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-10"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Nav Links */}
          <div className="grid grid-cols-2 gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 active:scale-95 ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary border-primary/20 shadow-sm font-bold"
                    : "bg-card2 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                <span className="text-[14px] whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Support Card */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/15 rounded-3xl p-6">
            <h4 className="font-display font-extrabold text-[17px] text-foreground mb-4">
              Need Assistance?
            </h4>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm shadow-primary/10">
                <Phone className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
              <div>
                <div className="font-display font-black text-[16px] text-foreground tracking-tight underline decoration-primary/30 decoration-2 underline-offset-4">+91 83828 28258</div>
                <div className="text-muted-foreground text-[11px] mt-1 font-medium italic">Available Mon–Sat, 9AM – 6PM</div>
              </div>
            </div>
            <a 
              href="tel:+918382828258" 
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-2xl text-[14px] font-black hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" fill="currentColor" /> CALL COUNSELLOR
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
