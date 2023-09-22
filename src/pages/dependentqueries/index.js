import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

function index() {
  const email = "sandeeplakhiwal@gmail.com";

  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;
  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });
  return <div>index</div>;
}

export default index;
