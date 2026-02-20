export default function Footer() {
    return (
      <footer className="mt-20 border-t border-stone-800/50 bg-[#1a1614] py-16 px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl font-light tracking-[0.4em] text-stone-100">
            LUXÉ <span className="italic text-amber-600">ATELIER</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[10px] tracking-[0.2em] uppercase text-stone-500">
            <div className="space-y-4">
              <p className="text-stone-300">Visit Our Gallery</p>
              <p>123 Aesthetic St, Design District<br/>Jakarta, Indonesia</p>
            </div>
            <div className="space-y-4">
              <p className="text-stone-300">Inquiries</p>
              <p>concierge@luxe-atelier.com<br/>+62 21 555 0123</p>
            </div>
            <div className="space-y-4">
              <p className="text-stone-300">Follow The Art</p>
              <p>Instagram • Pinterest • ArchDaily</p>
            </div>
          </div>
  
          <div className="pt-12 text-[8px] text-stone-600 tracking-widest uppercase border-t border-stone-800/30">
            © 2026 LUXÉ Atelier. All Rights Reserved. Crafted for PABP Assignment.
          </div>
        </div>
      </footer>
    );
  }