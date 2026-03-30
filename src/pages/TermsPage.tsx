import TermsView from "@/components/TermsView";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background relative z-[1] py-12">
      <main className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-extrabold text-3xl mb-8">Terms & Conditions</h1>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <TermsView />
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
