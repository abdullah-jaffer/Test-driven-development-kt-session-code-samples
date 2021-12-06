const axios = require("axios");
const mockServer = require("./mockAdapter");

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});

if (process.env.NODE_ENV === "test") {
  mockServer.mockAdapter(axiosInstance);
}

module.exports = async () => {
  try {
    const result = await axiosInstance.get("/posts");
    return result.data;
  } catch (error) {
    console.log("My exception", error);
  }
};
