import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold mb-6">
              <span className="text-amber-500">Abus</span>Wood
            </h3>
            <p className="mb-6 text-gray-400 max-w-sm mx-auto">
              Premium wood products crafted with passion and expertise. Over 25
              years of bringing natural beauty into homes and businesses.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-amber-900/20 hover:text-amber-500"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-medium text-lg mb-6">
              Contact<span className="text-amber-500">Us</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-gray-400">
                  123 AbusWood Road, Timber District
                  <br />
                  Forestville, CA 94568
                </span>
              </li>
              <li className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">+62 822314295535</span>
              </li>
              <li className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">info@abuswood.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} AbusWood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

