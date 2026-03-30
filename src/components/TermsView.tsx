const TERMS = [
  { title: "1. Eligibility", content: "The referral program is open to all currently enrolled students. You must have an active account in the portal and have completed your payment details to receive payouts. Self-referrals are not permitted." },
  { title: "2. How Referrals Work", content: "Share your unique referral code with prospective students. A referral is counted when a new student applies using your code and is successfully enrolled in an eligible course." },
  { title: "3. Bonus Amounts", content: "Bonus amounts vary by course tier:", list: ["Platinum Tier (PhD Programs) — ₹5,000", "Gold Tier (Executive Programs) — ₹4,000", "Silver Tier (Masters Programs) — ₹3,000–₹3,500", "Bronze Tier (UG & Other PG) — ₹2,700–₹2,900"] },
  { title: "4. Payout & Payment", content: 'Payouts are processed within 7–10 working days after the referral status is marked "Closed." Valid bank account or UPI details must be saved in the portal.' },
  { title: "5. Reversal Policy", content: "If a referred student drops out within 30 days of enrollment, the referral bonus may be reversed. After the 30-day window, earnings are considered final." },
  { title: "6. Referred Student Benefits", content: "Referred students are entitled to a 10% tuition discount, priority application review, and a dedicated admission counsellor." },
  { title: "7. Code Usage", content: "Only referrals made through the official portal using your assigned referral code are eligible. Spam, paid ads, or third-party promotions are strictly prohibited." },
  { title: "8. Program Changes", content: "We reserve the right to modify or discontinue the referral program at any time. Changes will be communicated via the portal." },
];

const TermsView = () => (
  <div className="flex flex-col gap-3">
    <p className="text-muted-foreground text-xs mb-2">Last updated: January 2025 · Please read these terms carefully before participating.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {TERMS.map((s, i) => (
        <details key={i} className="bg-card border border-border rounded-xl p-4 group hover:border-primary/30 transition-colors">
          <summary className="font-display font-medium text-[13px] cursor-pointer flex justify-between items-center hover:text-primary transition-colors list-none gap-3">
            <span>{s.title}</span>
            <span className="w-5 h-5 bg-card2 border border-border rounded-full flex items-center justify-center text-muted-foreground text-[10px] shrink-0 group-open:bg-primary/10 group-open:text-primary group-open:border-primary/20 transition-colors">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">×</span>
            </span>
          </summary>
          <div className="text-muted-foreground text-[11px] pt-3 leading-relaxed border-t border-border mt-3">
            <p>{s.content}</p>
            {s.list && (
              <ul className="pl-4 mt-2 mb-1">
                {s.list.map((l, j) => (
                  <li key={j} className="list-disc mb-1">{l}</li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>

    <div className="bg-card2 border border-border rounded-xl p-3.5 mt-2">
      <p className="text-muted-foreground text-xs">Questions? Email us at <span className="text-primary">support@refportal.com</span> or call our counsellor.</p>
    </div>
  </div>
);

export default TermsView;
