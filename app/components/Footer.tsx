export default function Footer() {
    return (
      <footer className="bg-[#1a1614] border-t border-stone-800/50 py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
          <h2 className="text-2xl md:text-4xl tracking-[0.3em] text-white">
            LUXÉ <span className="italic text-amber-600">ATELIER</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 text-[10px] uppercase tracking-[0.2em] text-stone-500">
            <div className="space-y-4">
              <p className="text-stone-300">Visit Our Gallery</p>
              <p className="leading-loose">123 Aesthetic St, Design District<br/>Jakarta, Indonesia</p>
            </div>
            <div className="space-y-4">
              <p className="text-stone-300">Inquiries</p>
              <p>concierge@luxe-atelier.com<br/>+62 21 555 0123</p>
            </div>
            <div className="space-y-4">
              <p className="text-stone-300">Follow The Art</p>
              <div className="flex justify-center gap-4">
                <span>Instagram</span><span>•</span><span>Pinterest</span>
              </div>
            </div>
          </div>
          
          <p className="text-[8px] text-stone-700 pt-10">© 2026 LUXÉ ATELIER. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    );
  }