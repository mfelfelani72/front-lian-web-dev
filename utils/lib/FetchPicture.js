import axios from "axios";

export const FetchPicture = async (source) => {
  try {
    const timestamp = new Date().getTime();
    const urlWithTimestamp = `${
      process.env.SERVER_ROOT_ROUTE + source
    }?t=${timestamp}`;

    return await axios.get(urlWithTimestamp);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
