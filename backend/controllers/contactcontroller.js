import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const contact = await Contact.create({
      name,
      phone,
    });

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};