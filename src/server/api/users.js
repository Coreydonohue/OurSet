const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const auth = require("../auth/firebase");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  const { email, password } = req.body;

 
  try {

     // create firebase user
    const firebaseUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // login user upon registration
    await signInWithEmailAndPassword(auth, email, password);

    const firebaseUid = firebaseUser.user.uid;
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user in database
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        firebaseUid: firebaseUid, 
      },
    });
    res.send(newUser);
    console.log("User created:", newUser);
  } catch (error) {
    console.log("error during registration", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
