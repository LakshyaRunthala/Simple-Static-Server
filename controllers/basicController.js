// this controller.js exports an object of methods 
const path = require("path");

module.exports = {
  User: (req, res) => {
    const filePath = path.resolve(__dirname, "../public/templates/user.html");
    res.sendFile(filePath, function (err) {
      if (err) {
        console.error("Error loading user page:", err);
        res.status(500).send("User page not found");
      }
    });
  },

  Admin: (req, res) => {
    const filePath = path.resolve(__dirname, "../public/templates/admin.html");
    res.sendFile(filePath, function (err) {
      if (err) {
        console.error("Error loading admin page:", err);
        res.status(500).send("Admin page not found");
      }
    });
  },
};
