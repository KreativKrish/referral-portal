const TermsView = () => (
  <div className="max-w-[680px]">
    <p className="text-muted-foreground text-xs mb-5">Last updated: January 2025 · Please read these terms carefully before participating.</p>

    {[
      { title: "1. Eligibility", content: "The referral program is open to all currently enrolled students. You must have an active account in the portal and have completed your payment details to receive payouts. Self-referrals are not permitted." },
      { title: "2. How Referrals Work", content: "Share your unique referral code with prospective students. A referral is counted when a new student applies using your code and is successfully enrolled in an eligible course." },
      { title: "3. Bonus Amounts", content: "Bonus amounts vary by course tier:", list: ["Platinum Tier (PhD Programs) — ₹5,000", "Gold Tier (Executive Programs) — ₹4,000", "Silver Tier (Masters Programs) — ₹3,000–₹3,500", "Bronze Tier (UG & Other PG) — ₹2,700–₹2,900"] },
      { title: "4. Payout & Payment", content: 'Payouts are processed within 7–10 working days after the referral status is marked "Closed." Valid bank account or UPI details must be saved in the portal.' },
      { title: "5. Reversal Policy", content: "If a referred student drops out within 30 days of enrollment, the referral bonus may be reversed. After the 30-day window, earnings are considered final." },
      { title: "6. Referred Student Benefits", content: "Referred students are entitled to a 10% tuition discount, priority application review, and a dedicated admission counsellor." },
      { title: "7. Code Usage", content: "Only referrals made through the official portal using your assigned referral code are eligible. Spam, paid ads, or third-party promotions are strictly prohibited." },
      { title: "8. Program Changes", content: "We reserve the right to modify or discontinue the referral program at any time. Changes will be communicated via the portal." },
    ].map((s, i) => (
      <div key={i} className="mb-6">
        <h3 className="font-display font-bold text-sm mb-2">{s.title}</h3>
        <p className="text-muted-foreground text-[13px] leading-relaxed">{s.content}</p>
        {s.list && (
          <ul className="pl-4 mt-1">
            {s.list.map((l, j) => (
              <li key={j} className="text-muted-foreground text-[13px] leading-relaxed list-disc mb-0.5">{l}</li>
            ))}
          </ul>
        )}
      </div>
    ))}

    <div className="bg-card2 border border-border rounded-xl p-3.5">
      <p className="text-muted-foreground text-xs">Questions? Email us at <span className="text-primary">support@refportal.com</span> or call our counsellor.</p>
    </div>
  </div>
);

export default TermsView;
