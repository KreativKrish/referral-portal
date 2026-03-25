const AlertBanner = () => (
  <div className="bg-warning/5 border border-warning/20 rounded-2xl p-3.5 flex items-start gap-3 mb-5">
    <span className="text-warning text-[15px] shrink-0 mt-0.5">⚠️</span>
    <div className="flex-1">
      <strong className="text-warning text-[13px] block mb-0.5">Complete Your Payment Details</strong>
      <p className="text-muted-foreground text-[11px]">Add your bank account and UPI information to receive referral earnings seamlessly.</p>
    </div>
    <button className="bg-warning text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold hover:opacity-90 transition-all shrink-0 self-center whitespace-nowrap">
      Complete Payment Details
    </button>
  </div>
);

export default AlertBanner;
