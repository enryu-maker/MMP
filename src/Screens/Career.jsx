import React from "react";
import axios from "axios";
import { baseurl } from "../Helper";
import { useRef } from "react";
import { Bounce, ToastContainer, Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Career() {
  const errnotify = () => toast.error("Invalid Credentials!");
  const susnotify = () => toast.success("Info Submitted!");

  const [data, setData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    appliedfor: "",
    linkdin: "",
    portfolio: "",
  });

  const txtarea = useRef(null);
  async function sendEnquiry(data) {
    await axios
      .post(baseurl + "/web/contact-form/", data)
      .then((res) => {
        console.log(res.data);
        txtarea.current.value = "";
        susnotify();
        Array.from(document.querySelectorAll("input", "textarea")).forEach(
          (input) => (input.value = ""),
          (textarea) => (textarea.value = "")
        );
      })
      .catch((err) => {
        errnotify();
        console.log(err);
      });
  }
  return (
    <div className="h-full w-full flex flex-col justify-center font-Poppins items-center ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      {/* Same as */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      <div className="h-[200px] w-full bg-green-500 text-white px-10 text-4xl font-black tracking-wide flex items-center">
        Career
      </div>
      <div className="sm:w-[88%] flex justify-evenly my-5 sm:flex-row flex-col items-start">
        <div className="w-full h-full">
          <div className="flex md:flex-row flex-col justify-center items-center m-auto">
            <div className="w-full flex justify-center py-3">
              <input
                placeholder="Name"
                type="text"
                required
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
              />
            </div>
            <div className="w-full flex justify-center py-3">
              <input
                placeholder="Linkdin Profile"
                type="text"
                required
                onChange={(e) => {
                  setData({ ...data, linkdin: e.target.value });
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center m-auto">
            <div className="w-full flex justify-center py-3">
              <input
                placeholder="Email"
                type="text"
                required
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
              />
            </div>
            <div className="w-full flex justify-center py-3">
              <input
                placeholder="Portfolio"
                type="text"
                onChange={(e) => {
                  setData({ ...data, portfolio: e.target.value });
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center m-auto">
            <div className="w-full flex justify-center py-3">
              <input
                placeholder="Phone"
                type="text"
                required
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value });
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
              />
            </div>
            <div className="w-full flex justify-center py-3">
              <input
                placeholder="Applied for"
                type="text"
                required
                onChange={(e) => {
                  setData({ ...data, appliedfor: e.target.value });
                }}
                className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
              />
            </div>
          </div>
          <div className="md:w-full min-w-full w-screen md:flex-row flex-col flex justify-center md:px-9 px-6   py-3">
            <textarea
              ref={txtarea}
              placeholder="Message"
              required
              onChange={(e) => {
                setData({ ...data, message: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-full px-6 border-none focus:ring-green-500 rounded-md py-4 text-lg"
            />
          </div>
          <div className="w-full flex justify-center px-8">
            <button
              onClick={() => {
                console.log(data);
                if (
                  data.name &&
                  data.phone &&
                  data.email &&
                  data.linkdin &&
                  data.appliedfor
                ) {
                  sendEnquiry(data);
                }
              }}
              className="bg-green-500 w-full py-4 px-6 mb-5 rounded-lg font-semibold text-xl text-white"
            >
              Send Enquiry
            </button>
          </div>
        </div>

        {/* <div className="sm:w-[50%] w-[100%]">
          <div className="flex flex-col justify-between items-center h-full space-y-5 py-8">
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
            />
            <input
              placeholder="Phone"
              type="tel"
              onChange={(e) => {
                setData({ ...data, number: e.target.value });
              }}
              className="font-semibold bg-gray-100   w-[88%] px-6 border-none focus:ring-green-500 rounded-md  py-4 text-lg"
            />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-[88%] px-6 border-none focus:ring-green-500 rounded-md  py-4 text-lg"
            />
            <textarea
              ref={txtarea}
              placeholder="Message"
              onChange={(e) => {
                setData({ ...data, message: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-[88%] px-6 border-none focus:ring-green-500 rounded-md  py-4 text-lg"
            />
            <button
              onClick={() => {
                console.log(data);
                if (data.name && data.number && data.email) {
                  sendEnquiry(data);
                }
              }}
              className="bg-green-500 w-[88%] py-4 mb-5 font-semibold text-xl text-white"
            >
              Send Enquiry
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 w-full  ">
          <div className="flex flex-col justify-between items-center h-full space-y-5 ">
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              className="font-semibold bg-gray-100 border-none rounded-md    focus:ring-green-500 w-[88%] px-6 py-4 text-lg"
            />
            <input
              placeholder="Phone"
              type="tel"
              onChange={(e) => {
                setData({ ...data, number: e.target.value });
              }}
              className="font-semibold bg-gray-100   w-[88%] px-6 border-none focus:ring-green-500 rounded-md  py-4 text-lg"
            />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-[88%] px-6 border-none focus:ring-green-500 rounded-md  py-4 text-lg"
            />
            <textarea
              ref={txtarea}
              placeholder="Message"
              onChange={(e) => {
                setData({ ...data, message: e.target.value });
              }}
              className="font-semibold bg-gray-100 w-[88%] px-6 border-none focus:ring-green-500 rounded-md  py-4 text-lg"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
