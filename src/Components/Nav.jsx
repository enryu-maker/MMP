import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar
      fluid
      rounded
      className="shadow-md p-5 text-black top-0 sticky z-50 "
    >
      <div className="flex flex-row justify-around items-center font-Poppins w-[88%] self-center">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link
            href="#"
            className="text-lg text-black hover:text-green-500"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#/about" className="text-lg text-black">
            About Us
          </Navbar.Link>

          <Dropdown
            arrowIcon={true}
            inline
            label={
              <p className="text-lg hover:text-green-500 text-black">
                Residential
              </p>
            }
            className="w-fit"
          >
            <Dropdown.Item>All Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ready Possesion</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ongoing Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Upcoming Projects</Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <p className="text-lg text-black hover:text-green-500">
                Commercial
              </p>
            }
            className="w-fit"
          >
            <Dropdown.Item>All Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ready Possesion</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Ongoing Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Upcoming Projects</Dropdown.Item>
          </Dropdown>

          <Dropdown
            arrowIcon={true}
            inline
            label={<p className="text-lg">Na Plots</p>}
            className="w-fit"
          >
            <Dropdown.Item>All Projects</Dropdown.Item>
          </Dropdown>
          <Navbar.Link href="#/contact-us" className="text-lg text-black">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
