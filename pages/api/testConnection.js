

import dbConnect from '../../lib/dbConnect';

const handler = async (req, res) => {
  await dbConnect();  // Ensure DB connection

  try {
    // If connected, send success response
    res.status(200).json({ message: 'MongoDB connected successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to MongoDB' });
  }
};

export default handler;
