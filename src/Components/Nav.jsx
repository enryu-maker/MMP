import { Dropdown, Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar
      fluid
      rounded
      className="shadow-md p-5 text-black top-0 sticky z-50 bg-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center font-Poppins w-full">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-center md:text-start">
          <Navbar.Link
            href="#"
            className="text-lg text-black hover:text-green-500"
          >
            <p className="text-lg hover:text-green-500 text-black">Home</p>
          </Navbar.Link>
          <Navbar.Link href="#/about" className="text-lg text-black">
            <p className="text-lg hover:text-green-500 text-black">About Us</p>
          </Navbar.Link>
          <Dropdown
            arrowIcon={true}
            inline={true}
            className="text-center  w-full items-center "
            label={
              <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                Residential
              </p>
            }
          >
            <Dropdown.Item>All Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ready Possession</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ongoing Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Upcoming Projects</Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline={true}
            className="text-center w-full items-center"
            label={
              <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                Commercial
              </p>
            }
          >
            <Dropdown.Item>All Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ready Possession</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ongoing Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Upcoming Projects</Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline={true}
            className="text-center w-full items-center"
            label={
              <p className="text-lg md:py-0 py-2 text-center w-full items-center hover:text-green-500 text-black cursor-pointer">
                Na Plots
              </p>
            }
          >
            <Dropdown.Item>All Projects</Dropdown.Item>
          </Dropdown>
          <Navbar.Link href="#/contact-us" className="text-lg text-black">
            <p className="text-lg hover:text-green-500 text-black">Contact</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
