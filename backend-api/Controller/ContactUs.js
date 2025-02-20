
const Message = require('../Models/Messages');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();


// const SendcontactUs = async (req, res) => {

//         const url = `${process.env.Hubspot_api_url}/objects/contacts`;
//     const token = `${process.env.Hubspot_token}`;

//     const {fullname, email, phone, service, messages} = req.body;
//   // Map your data to HubSpot's expected property names
//   const serviceString = Array.isArray(service) ? service.join(', ') : service;

//   const data = {
//     properties: {
//       fullname : fullname,
//       email: email,
//       phone: phone,    // This might need to match the exact property name HubSpot expects
//       service : serviceString ,
//       messages: messages
//     }
//   };

//   const options = {
//     headers: {
//       Authorization: `Bearer ${token}`,  // Using the correct token
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     // Send data to the HubSpot API
//     const response = await axios.post(url, data, options);
//     console.log('Success:', response.data);

//     // Save the data to MongoDB
//     const message = new Message(req.body); // Save the original request data to your database
//     await message.save(); // Save it to the database

//     res.status(200).json({ message: 'Contact saved and sent to HubSpot successfully.', data: response.data });
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//     res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
//   }
// };



// const SendcontactUs = async (req, res) => {
//     const url = `${process.env.Hubspot_api_url}/objects/contacts`;
//     const token = `${process.env.Hubspot_token}`;
  
//     const { fullname, email, phone, service, messages } = req.body;


//     console.log(fullname)
//     console.log(email)
//     console.log(phone)
//     console.log(service)
//     console.log(messages)
  
//     // Ensure service is an array and join it as a string
//     const serviceString = Array.isArray(service) ? service.join(', ') : service;
  
//     // Map your data to HubSpot's expected property names
//     const data = {
//       properties: {
//         // Map to correct HubSpot property names
//         firstname: fullname,  // Example: Map to 'firstname'
//         email: email,         // HubSpot expects 'email'
//         phone: phone,         // HubSpot expects 'phone'
//         service: serviceString, // This should match a custom field in HubSpot
//         messages: messages     // This should also match a custom field in HubSpot
//       }
//     };
  
//     const options = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     };
  
//     try {
//       // Send data to the HubSpot API
//       const response = await axios.post(url, data, options);
//       console.log('Success:', response.data);
  
//       // Save the data to MongoDB
//       const message = new Message(req.body); // Save the original request data to your database
//       await message.save(); // Save it to the database
  
//       res.status(200).json({ message: 'Contact saved and sent to HubSpot successfully.', data: response.data });
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
//     }
//   };
  


// const SendcontactUs = async (req, res) => {
//     console.log(req.body); // Log the entire request body
  
//     const url = `${process.env.Hubspot_api_url}/objects/contacts`;
//     const token = `${process.env.Hubspot_token}`;
  
//     // const { fullname, email, phone, service, messages } = req.body.properties;

//     // console.log(fullname)
//     // console.log(email)
//     // console.log(phone)
//     // console.log(service)
//     // console.log(messages)
  
//     // Ensure service is an array and join it as a string
//     // const serviceString = Array.isArray(service) ? service.join(', ') : service;
  
//     const data = {
//       properties: {
//         fullname: req.body.properties.fullname,
//         email: req.body.properties.email,
//         phone: req.body.properties.phone,
//         service: req.body.properties.service.Array.isArray(service) ? service.join(', ') : service,
//         messages: req.body.properties.messages
//       }
//     };


//     console.log(data);
  
//     const options = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     };
  
//     try {
//       // Send data to the HubSpot API
//       const response = await axios.post(url, data, options);
//       console.log('Success:', response.data);
  
//       // Save the data to MongoDB
//       const message = new Message(req.body);
//       await message.save();
  
//       res.status(200).json({ message: 'Contact saved and sent to HubSpot successfully.', data: response.data });
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
//     }
//   };
  
  


// const SendcontactUs = async (req, res) => {
//     console.log(req.body); // Log the entire request body
  
//     const url = `${process.env.Hubspot_api_url}/objects/contacts`;
//     const token = `${process.env.Hubspot_token}`;
  
//     // Extract properties from the request body
//     const { fullname, email, phone, service, messages } = req.body.properties;
  
//     // Ensure service is an array and join it as a string
//     const serviceString = Array.isArray(service) ? service.join(',') : service;

//     // console.log("serviceString " + serviceString) 
  
//     const data = {
//       properties: {
//         fullname: fullname,
//         email: email,
//         phone: phone,
//         service: serviceString,
//         messages: messages
//       }
//     };
  
//     console.log(data);
  
//     const options = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     };
  
//     try {
//       // Send data to the HubSpot API
//       const response = await axios.post(url, data, options);
//       console.log('Success:', response.data);
  
//       // Save the data to MongoDB
//       const message = new Message(req.body);
//       await message.save();
  
//       res.status(200).json({ message: 'Contact saved and sent to HubSpot successfully.', data: response.data });
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
//     }
//   };




// const SendcontactUs = async (req, res) => {
//     // console.log(req.body); // Log the entire request body
  
//     const url = `${process.env.Hubspot_api_url}/objects/contacts`;
//     const token = `${process.env.Hubspot_token}`;
  
//     // Extract properties from the request body
//     const { fullname, email, phone, service, messages } = req.body.properties;
  
//     // Ensure service is an array and join it as a properly formatted string
//     const allowedServices = service; // Add other allowed services
//     // const serviceString = service
//     //   ? service.filter(s => allowedServices.includes(s))
//     //   : service;

//     const serviceString = Array.isArray(allowedServices) ? allowedServices.join(', ') : allowedServices;

//     const convertedToString = serviceString.toString();
//     //   console.log(1)
//     //   console.log(convertedToString)
//     //   console.log(typeof convertedToString)
//     //   console.log(2)
  
//     const data = {
//       properties: {
//         fullname: fullname,
//         email: email,
//         phone: phone,
//         service: `${convertedToString}`,
//         messages: messages
//       }
//     };
  
  
//     const options = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     };
  
//     try {
//       // Send data to the HubSpot API
//       const response = await axios.post(url, data, options);
//     //   console.log('Success:', response.data);
  
//       // Save the data to MongoDB
//       const message = new Message(req.body);
//       await message.save();
  

//       if(response.error.category == "CONFLICT"){
//         res.status(400).json({ message: 'Contact is already Exist.'});
//       }


//       res.status(200).json({ message: 'Contact sent to successfully.', data: response.data });
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
//     }
//   };
  


const SendcontactUs = async (req, res) => {
  const url = `${process.env.Hubspot_api_url}/objects/contacts`;
  const token = `${process.env.Hubspot_token}`;

  const { fullname, email, phone, service, messages } = req.body.properties;

  const serviceString = Array.isArray(service) ? service.join(', ') : service;

  const data = {
    properties: {
      firstname: fullname, // Ensure 'fullname' is compatible with HubSpot's schema
      email: email,
      phone: phone,
      service: serviceString,
      message: messages // Ensure 'messages' aligns with the API schema
    }
  };

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(url, data, options);

    const message = new Message(req.body);
    await message.save();

    res.status(200).json({ message: 'Contact sent successfully.', data: response.data });
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
  }
};

  
const GetAllcontactUsMsgs = async (req, res) => {

    // Controller function to get all messages
    
    try {
        // Fetch all messages from the database
        const messages = await Message.find();
        
        // Return the messages in the response
        res.status(200).json({ success: true, data: messages });
      } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch messages', error: error.message });
      }

}



module.exports = {
    SendcontactUs,
    GetAllcontactUsMsgs
}