import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                NxtGen<span className="text-primary">Sec</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next Generation Security — Securing Digital Assets with cutting-edge cybersecurity solutions and development services.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/development" className="hover:text-primary transition-colors">Development</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link to="/awmate" className="hover:text-primary transition-colors">AwMate</Link></li>
              <li><Link to="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/updates" className="hover:text-primary transition-colors">Updates</Link></li>
              <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> contact@nxtgensec.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NxtGenSec. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Securing Digital Assets
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
