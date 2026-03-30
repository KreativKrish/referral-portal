const FAQS = [
  { q: "How do I earn money through referrals?", a: "Share your unique referral code with students. When they enroll in eligible courses using your code, you earn a cash bonus for each successful enrollment." },
  { q: "When will I receive my payout?", a: "Payouts are processed within 7–10 working days after a referral is marked 'Closed.' Make sure your bank or UPI details are complete." },
  { q: "What happens if a referred student drops out?", a: "If a student drops out within 30 days, the referral bonus may be reversed. After 30 days, your earnings are locked in." },
  { q: "Can I refer international students?", a: "Yes! International students are eligible as long as they enroll in a course listed on the Earning Opportunities page." },
  { q: "How do I track my referral progress?", a: 'Head to "My Referrals" to see real-time status for each person.' },
];

const FaqView = () => (
  <div className="bg-card border border-border rounded-2xl p-5">
    <p className="text-muted-foreground text-[11px] mb-3">Quick answers about the referral program</p>
    {FAQS.map((f, i) => (
      <details key={i} className="border-b border-border group">
        <summary className="py-3 font-medium text-[13px] cursor-pointer flex justify-between items-center hover:text-primary transition-colors list-none">
          {f.q}
          <span className="text-muted-foreground text-base group-open:hidden">+</span>
          <span className="text-primary text-base hidden group-open:inline">×</span>
        </summary>
        <div className="text-muted-foreground text-xs pb-3 leading-relaxed">{f.a}</div>
      </details>
    ))}
  </div>
);

export default FaqView;
