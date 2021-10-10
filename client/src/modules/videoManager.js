const baseUrl = '/api/video';
const userBaseUrl = '/api/UserProfile'

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

export const searchVideos = (q, bool) => {
    return fetch(`${baseUrl}/search?q=${q}&sortDesc=${bool}`)
      .then((res) => res.json())
  };

  export const getVideo = (id) => {
    return fetch(`${baseUrl}/GetVideoWithComments/${id}`).then((res) => res.json());
};


export const getUserVideos = () => {
    return fetch(`${userBaseUrl}`)
        .then((res) => res.json());
}

export const getUserById = (id) => {
    return fetch(`${userBaseUrl}/${id}`)
        .then((res) => res.json());
}