const app = "I don't do much.";
const token = "77939cf1b5c9c3ed3adf75dda0af71a80d5b1344"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))
