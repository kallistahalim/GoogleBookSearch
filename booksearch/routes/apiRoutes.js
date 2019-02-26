const axios = require("axios");
const router = require("express").Router();

router.get("/book", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=XAIzaSyCxir-NABY7A7A8-MdHV-oAhYoeIekLYnk", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));

    console.log(res)
});

module.exports = router;

