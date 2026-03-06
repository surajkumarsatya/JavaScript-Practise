const ORG_ID = "699e7adc111ca6cdeef5c722";
const TOKEN = "x76RXSWCj1sT_jCqhvUaNUfexfhrkPXRkO2nIm3P0O-";

const fetchChannels = async () => {
  const response = await fetch('https://api.buffer.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query GetChannels {
          account {
            organizations {
              id
              channels {
                id
                name
                service
              }
            }
          }
        }
      `,
    }),
  });

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
};

fetchChannels();

