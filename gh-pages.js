var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/rosskeen/rosskeen.github.io",
    user: {
      name: "Ross",
      email: "rosssamuelkeen@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
