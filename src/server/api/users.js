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

router.post("/register", async (req, res) => {
//   const { email, password, uid } = req.body;

  // create firebase user
  try {
    const { email, password, uid } = req.body;
    // const firebaseUser = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );

    // login user upon registration
    // await signInWithEmailAndPassword(auth, email, password);

    // const firebaseUid = firebaseUser.user.uid;
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user in database
    const newUser = await prisma.user.create({
      email: email,
    //   password: password,
      password: hashedPassword,
    //   firebaseUid: firebaseUid,
      firebaseUid: uid,
    });
    res.status(200).send(newUser);
    console.log("User created:", newUser);
  } catch (error) {
    console.log("error during registration", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;


// router.post("/register", async (req, res) => {
//       const { email, password, uid } = req.body;
    

//       try {
//         const hashedPassword = await bcrypt.hash(password, 10);
    

//         const newUser = await prisma.user.create({
//           email: email,
//           password: hashedPassword,
//           firebaseUid: uid,
//         });
//         res.status(200).send(newUser);
//         console.log("User created:", newUser);
//       } catch (error) {
//         console.log("error during registration", error);
//         res.status(500).json({ error: "Internal server error" });
//       }
//     });