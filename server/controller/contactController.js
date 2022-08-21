const { ContactMsg } = require('../model/ContactMsg');

const storeContactMessage = async (req, res) => {
    try
    {
        const { name, email, message } = req.body;
        const newMessage = await ContactMsg.create({ 
            name,
            email,
            message
        });
        return res.status(200).json({ message: "Message stored successfully", newMessage });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.storeContactMessage = storeContactMessage;