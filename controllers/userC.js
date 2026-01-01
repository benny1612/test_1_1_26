import { addUserD, CheckUniqueName, findUserD } from "../dal/usersD.js";

export const addUserC = async (req, res) => {
  try {
    const { username, password } = req.body;
    const uniqe = await CheckUniqueName(username);
    if (typeof password === "string" && uniqe) {
      const addUser = await addUserD({ username, password });
      const { acknowledged, insertedId } = addUser;
      if (acknowledged) {
        return res.status(201).json({ id: insertedId, username });
      }
    } else {
      return res.json("user not addaed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
export const findUserC = async (req, res) => {
  try {
    const { username, password } = req.headers;
    const User = await findUserD(username, password);
    if (!User) {
      res.json("user not found");
    } else {
      res.json(User);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
