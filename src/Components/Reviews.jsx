import React from "react";
import about from "../images/about.png";
import "youtube-video-js";
import axios from "axios";
import { baseurl } from "../Helper";

function Reviews() {
  const [data, setData] = React.useState([])
  function getReviews() {
    axios.get(baseurl + "/web/customer-reviews/").then((res) => {
      setData(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getReviews()
  }, [])
  return (
    <div className="h-full w-full bg-green-50">
      <p className="text-center font-semibold text-4xl py-10">
        Good Reviews By Customers
      </p>
      <div className="flex flex-wrap gap-5 bg-h-[300px] items-center align-middle justify-between">
        <div className="p-2 rounded-md bg-white">
          <youtube-video
            src="https://www.youtube.com/watch?v=Wn9twYUXw6w"
            controls
            width="380"
            height="240"
          />
        </div>
        <div className="p-2 rounded-md bg-white">
          <youtube-video
            src="https://www.youtube.com/watch?v=Wn9twYUXw6w"
            controls
            width="380"
            height="240"
          />
        </div>
        <div className="p-2 rounded-md bg-white">
          <youtube-video
            src="https://www.youtube.com/watch?v=Wn9twYUXw6w"
            controls
            width="380"
            height="240"
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
