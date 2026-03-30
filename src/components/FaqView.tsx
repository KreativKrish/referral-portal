const FAQS = [
  { q: "How do I earn money through referrals?", a: "Share your unique referral code with students. When they enroll in eligible courses using your code, you earn a cash bonus for each successful enrollment." },
  { q: "When will I receive my payout?", a: "Payouts are processed within 7–10 working days after a referral is marked 'Closed.' Make sure your bank or UPI details are complete." },
  { q: "What happens if a referred student drops out?", a: "If a student drops out within 30 days, the referral bonus may be reversed. After 30 days, your earnings are locked in." },
  { q: "Can I refer international students?", a: "Yes! International students are eligible as long as they enroll in a course listed on the Earning Opportunities page." },
  { q: "How do I track my referral progress?", a: 'Head to "My Referrals" to see real-time status for each person.' },
  { q: "Is there a limit on how many referrals I can make?", a: "No cap at all! Refer as many students as you like — every valid enrollment earns you a bonus." },
];

const FaqView = () => (
  <div className="bg-card border border-border rounded-2xl p-5 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
    <div className="flex flex-col gap-3">
      <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight" style={{ fontWeight: 450 }}>FAQs</h2>
      <p className="text-muted-foreground text-[13px] font-medium tracking-wide">FAQ about referrals.</p>
    </div>
    <div className="flex flex-col pt-2">
      {FAQS.map((f, i) => (
        <details key={i} className={`group border-b border-border transition-all duration-300 ${i === 0 ? "border-t" : ""}`}>
          <summary className="font-display font-medium text-[16px] md:text-[17px] cursor-pointer flex justify-between items-center py-5 list-none hover:opacity-70 transition-opacity gap-4">
            <span className="text-foreground tracking-tight">{f.q}</span>
            <span className="w-[1.125rem] h-[1.125rem] rounded-full border border-primary text-primary flex items-center justify-center shrink-0 transition-transform duration-300 font-light text-[12px] group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="text-muted-foreground text-[14px] pb-6 leading-relaxed pr-10 animate-in fade-in slide-in-from-top-1 opacity-90">
            {f.a}
          </div>
        </details>
      ))}
    </div>
  </div>
);

export default FaqView;
