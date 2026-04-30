import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-10 pb-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

          {/* CTA */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight mb-4">
              Санаагаа олсон уу? <br />
              <span className="text-gray-500">Тэгвэл хамтдаа бүтээе!</span>
            </h2>
            <a 
              href="mailto:orgio1298@gmail.com" 
              className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full hover:scale-110 transition-transform duration-300 mx-auto md:mx-0"
            >
              <ArrowUpRight size={20} color="white" />
            </a>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:justify-end md:gap-20 gap-10 text-center md:text-left">
            
            {/* Company Links */}
            <div>
              <h4 className="text-gray-500 mb-3 font-mono uppercase text-xs">
                Компани
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors text-sm">Бидний тухай</a></li>
                <li><a href="#expertise" className="hover:text-primary transition-colors text-sm">Ажлын байр</a></li>
                <li><a href="#work" className="hover:text-primary transition-colors text-sm">Түгээмэл асуулт</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors text-sm">Холбоо барих</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-gray-500 mb-3 font-mono uppercase text-xs">
                Сошиал
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.facebook.com/vibemediallc" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm">
                    <Facebook size={14} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm">
                    <Twitter size={14} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm">
                    <Instagram size={14} /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm">
                    <Linkedin size={14} /> Linkedin
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/10 text-xs text-gray-500">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <span>© 2026 Вайб Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан.</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-white transition-colors">Үйлчилгээний нөхцөл</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;