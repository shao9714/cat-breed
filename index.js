const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.json(),
  express.static(".")
);
const PORT = process.env.PORT || 3117;

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: __dirname });
});

app.get("/cat", async (req, res) => {
  const apiKey = "9a87cf04-fe3c-4666-92ed-5eb26534b071";
  //search user input, return the breed_id

  const breedName = req.query.breed;
  const limit = parseInt(req.query.limit);

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
<<<<<<< HEAD
  if (result.length == 0) {
    const imagesUrl = [];
    return res.status(200).json({
      imagesUrl,
      "breed_name": "no_result"
    });
  }

  let breed_id = result[0].id;
  let breed_name = result[0].name;
=======

  let breed_id = result[0].id;
>>>>>>> 965d2bd477fb5b8858c3443e90a3644e6a045da2

  //search for images using breeds_id

  const queryId = breed_id;
  //this is to show how many image result the cat api should return, default is one I believe.
  const queryLimit = 3;

  result = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breed_id}&limit=${limit}`
  );

  const imageResult = await result.json();

  const imagesUrl = [];
  imageResult.forEach((element) => {
    imagesUrl.push(element.url);
  });

  console.log(imagesUrl);

  res.status(200).json({
    imagesUrl,
<<<<<<< HEAD
    breed_name
=======
>>>>>>> 965d2bd477fb5b8858c3443e90a3644e6a045da2
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT} `);
});
