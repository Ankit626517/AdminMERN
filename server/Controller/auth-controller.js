// home page  logic
const home = async (req, res) => {
  try {
    res.send("Welcome to routes worlds with controlle ");
  } catch (error) {
    console.log(error);
  }
};

// register page
const register = async (req, res) => {
  try {
    res.send("welcome to register page with controller");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
