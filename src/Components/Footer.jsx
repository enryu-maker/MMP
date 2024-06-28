import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function Foot() {
  return (
    <Footer container className="bg-green-50">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="flex gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-green-500">
                  Home
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  About Us
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
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
            <div className="max-w-80">
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-green-500">
                  Shree Tirumala Ashirwad Apt, Pethe Nagar Rd (Indira Nagar),
                  Opp. Balbharti, Nashik 422009.
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  +91 7770002222
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-green-500">
                  Connect@roongtagroup.co.in
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NerdTech" year={2021} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              className="text-black hover:text-green-500 transition ease-in-out"
              icon={BsTwitter}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
