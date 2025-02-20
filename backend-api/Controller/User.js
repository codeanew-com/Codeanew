const User = require("../Models/User");
const Message = require("../Models/Messages");
const {generateToken} =  require('../Middlewares/AuthMiddlewares');
const Booking = require("../Models/Booking");
const path = require("path");
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

const nodemailer = require("nodemailer");

const userHome = (req, res) => {
  console.log(req);
  res.json({ meta: "user home" });
};

// const userAdded = async (req, res) => {
//   console.log(Date.now());

//   // Create a new user
//   try {
//     const { email, fullname, password, agreeToTerms } = req.body;

//     const profilePhotoPath = req?.file?.path;

//     console.log(req.body);
//     const newUser = new User({
//       email,
//       fullname,
//       password,
//       agreeToTerms,
//       profilePhoto: profilePhotoPath,
//       // profilePhoto: req.files['file-0'] ? req.files['file-0'] : null,
//     });

//     console.log(req.file);
//     console.log(newUser);
//     // console.log(req.files['file-0']);

//     const ValidateIfEmailExist = await User.findOne({ email });
//     if (ValidateIfEmailExist) {
//       return res.status(400).json({
//         meta: "The Email address Already exist.",
//       });
//     }

//     const savedUser = await newUser.save();

//     res.json({ meta: "user added success", savedUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };










// const login = async (req, res) => {
//   // Create a new user
//   try {
//     const { email, password } = req.body;

//     const newUser = new User({
//       email,
//       password,
//     });

//     const ValidateIfEmailExist = await User.findOne({ email });

//     console.log(ValidateIfEmailExist);

//     if (!ValidateIfEmailExist) {
//       return res.status(400).json({
//         meta: "Email not exist .",
//       });
//     }
//     if (ValidateIfEmailExist.password !== password) {
//       return res.status(400).json({
//         meta: "Invalid creadentials.",
//       });
//     }

//     // const savedUser = await newUser.save();

//     res
//       .status(200)
//       .json({
//         success: true,
//         message: "logged in successfully",
//         meta: ValidateIfEmailExist,
//       });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };







// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         meta: "The email address does not exist or is invalid.",
//       });
//     }

//     // if (user.deleted) {
//     //   return res.status(403).json({ message: 'Account is deleted' });
//     // }

//     if (await bcrypt.compare(password, user.password)) {
//       return res.status(403).json({ message: user.activated, meta: 0, token : generateToken(
//         { id: user._id.toString(), email },
//         "1d"
//       ), userId : user._id.toString(), 
//         fullname: user.fullname,

//         // picture: JSON.stringify(user.picture),
//         pictureLocal: JSON.stringify(user.pictureLocal),

      
     
//      });
//     }

//     const checking_password = await bcrypt.compare(password, user.password);
//     if (!checking_password) {
//       return res.status(400).json({
//         meta: "Invalid Credentials. Please try again.",
//       });
//     }

//     let emailVericationToken = generateToken(
//       { id: user._id.toString(), email },
//       "1d"
//     );
//     user.token = emailVericationToken;

//     // Update the existing user document with the new token
//     await User.findOneAndUpdate(
//       { email },
//       { $set: { token: emailVericationToken } },
//       { new: true, useFindAndModify: false }
//     );

//     res.status(200).json({
//       id: user._id,
//       fullname: user.fullname,
//       email: user.email,
//       // role: user.role,
      
//     });
//   } catch (err) {
//     res.status(500).json({ meta: err.message });
//   }
// };



// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find the user by email
//     const user = await User.findOne({ email });

//     // Check if the user exists
//     if (!user) {
//       return res.status(400).json({
//         meta: "The email address does not exist or is invalid.",
//       });
//     }

//     // Check if the password matches
//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(400).json({
//         meta: "Invalid Credentials. Please try again.",
//       });
//     }

//     // Optionally check if the user account is activated (if applicable)
//     if (!user.activated) {
//       return res.status(403).json({
//         message: "Account is not activated.",
//         meta: "Please verify your email to activate your account.",
//       });
//     }

//     // Generate token on successful login
//     const token = generateToken(
//       { id: user._id.toString(), email }, // Payload for token
//       "1d" // Token expiry (1 day)
//     );

//     // Update the user's token in the database (if required)
//     user.token = token;
//     await User.findOneAndUpdate(
//       { email },
//       { $set: { token } },
//       { new: true, useFindAndModify: false }
//     );

//     // Respond with the login success, token, and user details
//     res.status(200).json({
//       message: "Login successful",
//       token,
//       userId: user._id.toString(),
//       fullname: user.fullname,
//       // pictureLocal: user.pictureLocal, // No need for JSON.stringify on basic fields
//     });

//   } catch (err) {
//     res.status(500).json({ meta: err.message });
//   }
// };




// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find the user by email
//     const user = await User.find({ email });

//     // Check if the user exists
//     if (!user) {
//       return res.status(400).json({
//         meta: "The email address does not exist or is invalid.",
//       });
//     }

//     // Check if the password matches
//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(400).json({
//         meta: "Invalid Credentials. Please try again.",
//       });
//     }

//     // Optionally check if the user account is activated (if applicable)
//     // if (!user.activated) {
//     //   return res.status(403).json({
//     //     message: "Account is not activated.",
//     //     meta: "Please verify your email to activate your account.",
//     //   });
//     // }

//     // Generate token on successful login
//     const token = generateToken(
//       { id: user._id.toString(), email }, // Payload for token
//       "1d" // Token expiry (1 day)
//     );

//     // Update the user's token in the database (if required)
//     user.token = token;
//     await User.findOneAndUpdate(
//       { email },
//       { $set: { token } },
//       { new: true, useFindAndModify: false }
//     );

//     // Respond with the login success, token, and user details
//     res.status(200).json({
//       message: "Login successful",
//       token,
//       userId: user._id.toString(),
//       fullname: user.fullname,
//       // pictureLocal: user.pictureLocal, // No need for JSON.stringify on basic fields
//     });

//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ meta: err.message });
//   }
// };



// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {


//     console.log(email);
//     console.log(password);
    
//     // Find the user by email
//     const user = await User.findOne({ email }); // Use findOne instead of find

//     // Check if the user exists
//     if (!user) {
//       return res.status(400).json({
//         meta: "The email address does not exist or is invalid.",
//       });
//     }



//     // Check if the password matches
//     const isPasswordCorrect = await bcrypt.compare(password, user.password);


//     console.log(isPasswordCorrect)
//     if (!isPasswordCorrect) {
//       return res.status(400).json({
//         meta: "Invalid Credentials. Please try again.",
//       });
//     }


//     console.log(user._id.toString())

//     // Generate token on successful login
//     const token = generateToken(
//       { id: user._id.toString(), email }, // Payload for token
//       "1d" // Token expiry (1 day)
//     );

//     // Update the user's token in the database (if required)
//     user.token = token;
//     await User.findOneAndUpdate(
//       { email },
//       { $set: { token } },
//       { new: true, useFindAndModify: false }
//     );

//     // Respond with the login success, token, and user details
//     res.status(200).json({
//       message: "Login successful",
//       token,
//       userId: user._id.toString(),
//       fullname: user.fullname,
//       // pictureLocal: user.pictureLocal, // No need for JSON.stringify on basic fields
//     });

//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ meta: err.message });
//   }
// };




// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     console.log(email);
//     console.log(password);
    
//     // Find the user by email
//     const user = await User.findOne({ email });

//     // Check if the user exists
//     if (!user) {
//       return res.status(400).json({
//         meta: "The email address does not exist or is invalid.",
//       });
//     }

//     // Temporarily compare passwords directly (for testing purposes)
//     if (password !== user.password) {
//       return res.status(400).json({
//         meta: "Invalid Credentials. Please try again.",
//       });
//     }

//     console.log(user._id.toString());

//     // Generate token on successful login
//     const token = generateToken(
//       { id: user._id.toString(), email }, // Payload for token
//       "1d" // Token expiry (1 day)
//     );

//     // Update the user's token in the database (if required)
//     user.token = token;
//     await User.findOneAndUpdate(
//       { email },
//       { $set: { token } },
//       { new: true, useFindAndModify: false }
//     );

//     // Respond with the login success, token, and user details
//     res.status(200).json({
//       message: "Login successful",
//       token,
//       userId: user._id.toString(),
//       fullname: user.fullname,
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ meta: err.message });
//   }
// };




const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // console.log(email);
    // console.log(password);
    
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(400).json({
        meta: "The email address does not exist or is invalid.",
      });
    }

    // Temporarily compare passwords directly (for testing purposes)
    // if (password !== user.password) {
    //   return res.status(400).json({
    //     meta: "Invalid Credentials. Please try again.",
    //   });
    // }


    //     // Check if the password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);


    console.log(isPasswordCorrect)
    if (!isPasswordCorrect) {
      return res.status(400).json({
        meta: "Invalid Credentials. Please try again.",
      });
    }

    console.log(user._id.toString());

    // Generate token on successful login
    const token = generateToken(
      { id: user._id.toString(), email }, // Payload for token
      "1d" // Token expiry (1 day)
    );

    // Update the user's token in the database (if required)
    user.token = token;
    await User.findOneAndUpdate(
      { email },
      { $set: { token } },
      { new: true, useFindAndModify: false }
    );

    // Respond with the login success, token, and user details
    res.status(200).json({
      message: "Login successful",
      token,
      userId: user._id.toString(),
      fullname: user.fullname,
    });

  } catch (err) {
    // console.log(err);
    res.status(500).json({ meta: err.message });
  }
};








// const createUser = async (req, res) => {
//   const { email, password, fullname } = req.body;

//   // Hash the password before saving
//   const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//   const newUser = new User({
//     email,
//     password: hashedPassword,  // Store the hashed password
//     fullname,
//   });

//   await newUser.save();
//   res.status(201).json({ message: "User created successfully" });
// };
// const createUser = async (req, res) => {
//   const { fullname, email, password } = req.body;

//   try {
//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//         // Hash the password before saving
//         const saltRounds = 10; // Adjust the number of salt rounds as needed
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Create a new user if the email is unique
//     const newUser = new User({ fullname, email, password : hashedPassword }); // Make sure to hash the password in real use cases
//     await newUser.save();
    
//     return res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };




const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password before saving
    const saltRounds = 10; // Adjust the number of salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log(hashedPassword);

    // Create a new user with the hashed password
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword, // Store the hashed password
    });

    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};





// const checkEmailExistance = async (req, res) => {
//   const { email } = req.params;

//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.json({ exists: true });
//     }
//     return res.json({ exists: false });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// }




const checkEmailExistance = async (req, res) => {
  const { email } = req.query; // Get the email from query parameters

  try {
    const user = await User.findOne({ email });
    return res.json({ exists: !!user }); // Respond with true or false
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};


const forgetPassword = async (req, res) => {
  // Create a new user
  try {
    const { email } = req.body;

    const newUser = new User({
      email,
    });

    const ValidateIfEmailExist = await User.findOne({ email });

    if (!ValidateIfEmailExist) {
      return res.status(400).json({
        meta: "Email not exist .",
      });
    }

    const password = ValidateIfEmailExist?.password;

    res.json({ meta: "logged in", meta: password });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  console.log(req.body);

  try {
    const allUsers = await User.find().sort({ createdAt: -1 });
    res.json({ meta: allUsers, total: allUsers.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneUser = async (req, res) => {
  console.log(req.body);

  const id = req.params.id;

  console.log(id);

  try {
    const allUsers = await User.find({ _id: id });
    res.json({ meta: allUsers, total: 10 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  console.log(req.body);

  const id = req.params.id;

  console.log(id);

  try {
    const allUsers = await User.findOneAndDelete({ _id: id });
    res.json({ meta: allUsers, total: 10 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const contactUs = async (req, res) => {

//     try {

//         const {
//                 name ,
//                 email,
//                 subject ,
//                 number ,
//                 description

//         } = req.body

//         const newMessage = new Messages({
//             name ,
//             email,
//             subject ,
//             number ,
//             description
//         });

//         const savedMessage = await newMessage.save();

//         res.json({ meta: "message added success", savedMessage });

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

const contactUs = async (req, res) => {
  try {
    const { name, email, subject, number, description } = req.body;

    // Check if the contact already exists in the database
    const existingContact = await Message.findOne({ email });

    if (existingContact) {
      return res.status(409).json({
        status: "error",
        message: `Contact already exists. Existing ID: ${existingContact._id}`,
        category: "CONFLICT",
      });
    }

    // If the contact does not exist, create a new one
    const newMessage = new Message({
      name,
      email,
      subject,
      number,
      description,
    });

    const savedMessage = await newMessage.save();
    res.json({ meta: "Message added successfully", savedMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};








// This is a simple example and should be adapted to your needs
async function removeDuplicateEmails() {
  const duplicates = await User.aggregate([
    {
      $group: {
        _id: "$email",
        count: { $sum: 1 },
      },
    },
    {
      $match: { count: { $gt: 1 } },
    },
  ]);

  for (const duplicate of duplicates) {
    const usersToRemove = await User.find({ email: duplicate._id }).sort({ _id: 1 }).skip(1);
    await User.deleteMany({ _id: { $in: usersToRemove.map(user => user._id) } });
  }
}

// Run this function as needed to clean up duplicates
removeDuplicateEmails().catch(console.error);






module.exports = {
  userHome,
  // userAdded,
  getAllUsers,
  getOneUser,
  deleteUser,
  login,
  forgetPassword,
  contactUs,
  // booking,
  createUser,
  checkEmailExistance
};
