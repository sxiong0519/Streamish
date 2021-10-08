const baseUrl = '/api/video';

export const getAllVideos = () => {
  return fetch(`${baseUrl}/GetWIthComments`)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const searchVideos = () => {
    return fetch(`${baseUrl}/search`)
      .then((res) => res.json())
  };