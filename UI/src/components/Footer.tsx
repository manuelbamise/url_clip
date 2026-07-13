import { Link, Code2, MessageCircle } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'API', 'Pricing', 'Integrations'],
  Developers: ['Documentation', 'GitHub', 'Changelog', 'API Reference'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-deep">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
                <Link size={16} className="text-black" />
              </div>
              <span className="font-bold text-lg text-white tracking-wider">
                URL <span className="text-neon">CLIP</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-[200px]">
              Shorten, track, and optimize your links with the most powerful URL management platform.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <Code2 size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        if (link === 'Features') document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        else if (link === 'Changelog') document.getElementById('changelog')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} URL Clip. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with precision. Shortened with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
