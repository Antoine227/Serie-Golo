// Declare the action

import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Serie Golo !");
};

// Export it to import it somewhere else

export default { sayWelcome };