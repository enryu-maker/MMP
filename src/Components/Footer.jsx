import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import logo from "../images/logo2.png";

export function Foot() {
  return (
    <Footer container className="bg-green-50">
      <div className="w-full p-0 md:py-10">
        <div className="grid gap-10 sm:flex sm:justify-between md:grid-cols-3">
          <div className="flex justify-center sm:justify-start">
            <Footer.Brand
              className=" h-16"
              // href="https://flowbite.com"
              src={logo}
              alt=" Logo"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-3 md:gap-0 justify-end">
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#/" className="hover:text-green-500">
                  Home
                </Footer.Link>
                <Footer.Link href="#/about" className="hover:text-green-500">
                  About Us
                </Footer.Link>
                <Footer.Link href="#/career" className="hover:text-green-500">
                  Career
                </Footer.Link>
                <Footer.Link
                  href="#/contact-us"
                  className="hover:text-green-500"
                >
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Category" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-green-500">
                  Residential
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  Commercial
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  Na Plots
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="max-w-xs">
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://maps.app.goo.gl/BLiivArKKRd6d9Qx6"
                  className="hover:text-green-500"
                >
                  Office no.6, 1st floor, jagdish sankul, KBT circle, near
                  wellness medical, Thatte Nagar, Nashik, Maharashtra 422005
                </Footer.Link>
                <Footer.Link
                  href="tel:+919029263511"
                  className="hover:text-green-500"
                >
                  +91 9029263511
                </Footer.Link>
                <Footer.Link
                  href="mailto:info@makemyproperties.co.in"
                  className="hover:text-green-500"
                >
                  info@makemyproperties.co.in
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <Footer.Copyright href="#" by="NerdTech" year={2021} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=61555711885900"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/make_my_properties/"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.youtube.com/@makemyproperty-1234/featured"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsYoutube}
            />
            <Footer.Icon
              href="https://www.linkedin.com/company/make-my-properties/"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
