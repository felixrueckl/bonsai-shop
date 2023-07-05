const { Router } = require("express");
const router = new Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const mongoose = require("mongoose");

const User = require("../models/User.model");
const {
  isLoggedIn,
  isLoggedOut,
  redirectToProfile,
} = require("../middleware/route-guard.js");

// GET route ==> to display the signup form to users
router.get("/signup", isLoggedIn, (req, res) => res.render("auth/signup"));

// POST route ==> to process form data
router.post("/signup", isLoggedIn, (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });

    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword,
      });
    })
    .then((userFromDB) => {
      console.log("Newly created user is: ", userFromDB);
      req.session.currentUser = {
        username: userFromDB.username,
        email: userFromDB.email,
      };
      if (!req.session.newUserCreated) {
        req.session.newUserCreated = true;
      }
    })
    .then((user) => {
      res.redirect("/userProfile");
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render("auth/signup", {
          errorMessage:
            "Username and email need to be unique. Either username or email is already used.",
        });
      } else {
        next(error);
      }
    });
});

router.get("/login", isLoggedIn, (req, res) => res.render("auth/login"));

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  console.log("SESSION =====> ", req.session);

  if (email === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, email and password to login.",
    });
    return;
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        console.log("Email not registered. ");
        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        res.redirect("/userProfile");
      } else {
        console.log("Incorrect password. ");
        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });
      }
    })
    .catch((error) => next(error));
});

// userProfile route and the module export stay unchanged
router.get("/userProfile", isLoggedOut, (req, res) => {
  res.render("users/user-profile", { userInSession: req.session.currentUser });
});

router.get("/editUser", (req, res, next) => {
  res.render("users/edit-user", { userInSession: req.session.currentUser });
});

router.post("/editUser", isLoggedOut, (req, res, next) => {
  const { _id } = req.session.currentUser;
  const { username, email } = req.body;
  User.findByIdAndUpdate(_id, { username, email }, { new: true })
    .then((updatedUser) => {
      console.log("User updated: ", updatedUser);
      res.redirect("/userProfile");
    })
    .catch((error) => next(error));
});

router.post("/deleteUser", isLoggedOut, (req, res, next) => {
  const { _id } = req.session.currentUser;
  console.log("Hello");
  User.findByIdAndDelete(_id)
    .then(() => {
      console.log("User deleted");
      req.session.destroy();
    })
    .then(() => res.redirect("/"))
    .catch((error) => next(error));
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
});

module.exports = router;
