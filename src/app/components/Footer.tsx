import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E5E5] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Info & Address */}
          <div>
            <h3 className="font-bold text-black mb-4">Marketra®</h3>
            <p className="text-sm text-[#666666] mb-4">
              Performance marketing and growth infrastructure for ambitious brands.
            </p>
            <p className="text-sm text-[#666666]">
              123 Marketing Street<br />
              San Francisco, CA 94102<br />
              growth@marketra.com
            </p>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-[#666666] hover:text-black transition-colors">About</a></li>
              <li><a href="#services" className="text-[#666666] hover:text-black transition-colors">Services</a></li>
              <li><a href="#works" className="text-[#666666] hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="text-[#666666] hover:text-black transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-[#666666] hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Creator Info */}
          <div>
            <h4 className="font-semibold text-black mb-4">Get In Touch</h4>
            <p className="text-sm text-[#666666] mb-2">Email: hello@marketra.com</p>
            <p className="text-sm text-[#666666] mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-sm text-[#666666]">Available Mon-Fri, 9am-6pm PST</p>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="border-t border-[#E5E5E5] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Privacy Policy</a>
          <div className="text-sm text-[#666666]">©2025 Marketra. All rights reserved.</div>
          <div className="font-bold text-black">Marketra®</div>
        </div>
      </div>
    </footer>
  );
}