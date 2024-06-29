import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../images/logo2.png";

export function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <div>
      <Navbar
        fluid
        rounded
        className="shadow-md p-5 text-black top-0 sticky z-50 bg-white"
      >
        <div
          className={`flex md:flex-row  justify-between items-center font-Poppins w-[88%] self-center`}
        >
          <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              <img src={logo} className="h-10" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            onChange={handleDropdownToggle}
            onClick={handleDropdownToggle}
          />
          <Navbar.Collapse>
            <Navbar.Link
              href="#"
              className="text-lg text-black hover:text-green-500"
            >
              <p className="text-lg hover:text-green-500 text-black">Home</p>
            </Navbar.Link>
            <Navbar.Link href="#/about" className="text-lg text-black">
              <p className="text-lg hover:text-green-500 text-black">
                About Us
              </p>
            </Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline={true}
              className="text-center md:w-fit w-full items-center"
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
              <Dropdown.Item href="#/properties-list/Residential/Ready Possession">
                Ready Possesion
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential/Ongoing Projects">
                Ongoing Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Residential/Upcoming Projects">
                Upcoming Projects
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              arrowIcon={true}
              inline={true}
              className="text-center md:w-fit w-full items-center"
              // onOpenChange={handleDropdownToggle}
              label={
                <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                  Commercial
                </p>
              }
            >
              <Dropdown.Item href="#/properties-list/Commercial">
                All Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Commercial/Ready Possession">
                Ready Possesion
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Commercial/Ongoing Projects">
                Ongoing Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/properties-list/Commercial/Upcoming Projects">
                Upcoming Projects
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              arrowIcon={true}
              inline={true}
              className="text-center md:w-fit w-full items-center"
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
            <Navbar.Link href="#/contact-us" className="text-lg text-black">
              <p className="text-lg hover:text-green-500 text-black">Contact</p>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
