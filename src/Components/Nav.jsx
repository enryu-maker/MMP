import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../images/logo2.png";
import { motion } from "framer-motion";

export function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar
        fluid
        rounded
        className="shadow-md p-5 text-black top-0 sticky z-50 bg-white"
      >
        <div
          className={`flex md:flex-row ${
            isDropdownOpen ? "flex-col gap-3" : "flex-row"
          } justify-between items-center font-Poppins w-[88%] self-center`}
        >
          <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              <img src={logo} className="h-10" />
            </span>
          </Navbar.Brand>
          <div onClick={handleDropdownToggle}>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link
              href="#"
              className="text-lg text-black hover:text-green-500  text-center md:w-fit w-full items-center align-middle h-full"
            >
              <p className="text-lg hover:text-green-500 text-black items-center align-middle h-full">
                Home
              </p>
            </Navbar.Link>
            <Navbar.Link
              href="#/about"
              className="text-lg text-black text-center md:w-fit w-full items-center align-middle h-full"
            >
              <p className="text-lg hover:text-green-500 text-black">
                About Us
              </p>
            </Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline={true}
              className="text-center md:w-fit w-full items-center align-middle h-fit md:h-fit"
              // onOpenChange={handleDropdownToggle}
              label={
                <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                  Residential
                </p>
              }
            >
              <Dropdown.Item href="#/properties-list/Residential">
                All Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential">
                Ready Possesion
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential">
                Ongoing Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential">
                Upcoming Projects
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              arrowIcon={true}
              inline={true}
              className="text-center md:w-fit w-full items-center align-middle h-fit md:h-fit"
              // onOpenChange={handleDropdownToggle}
              label={
                <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                  Commercial
                </p>
              }
            >
              <Dropdown.Item href="#/properties-list/Residential">
                All Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential">
                Ready Possesion
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential">
                Ongoing Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential">
                Upcoming Projects
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              arrowIcon={true}
              inline={true}
              className="text-center md:w-fit w-full items-center align-middle h-fit md:h-fit"
              // onOpenChange={handleDropdownToggle}
              label={
                <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                  Na Plots
                </p>
              }
            >
              <Dropdown.Item href="#/properties-list/Residential">
                All Projects
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Link
              href="#/contact-us"
              className="text-lg text-black items-center align-middle h-full"
            >
              <p className="text-lg hover:text-green-500 text-black text-center md:w-fit w-full items-center align-middle h-full">
                Contact
              </p>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
