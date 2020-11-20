const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.json()
);
const PORT = 3117;

app.get("/", (req, res) => {
  res.send("received!");
});

app.get("/cat", async (req, res) => {
  const apiKey = "9a87cf04-fe3c-4666-92ed-5eb26534b071";
  //search user input, return the breed_id

  const breedName = "sib";

  let result = await fetch(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  result = await result.json();
  let breed_id = result[0].id;

  //search for images using breeds_id

  const queryId = breed_id;
  //this is to show how many image result the cat api should return, default is one I believe.
  const queryLimit = 3;

  result = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breed_id}&limit=${queryLimit}`
  );

  const imageResult = await result.json();

  const imagesUrl = [];
  imageResult.forEach((element) => {
    imagesUrl.push(element.url);
  });

  console.log(imagesUrl);

  res.send("received");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT} `);
});
