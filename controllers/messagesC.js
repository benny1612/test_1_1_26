import { addmeesgeD, findMeesageD } from "../dal/MessagesD.js";
import { updateusercount } from "../dal/usersD.js";

import { reverse } from "./CipherFunc.js";

export const EncryptMessage = async (req, res) => {
  try {
    const { message, cipher_type } = req.body;
    const { username } = req.headers;
    if (cipher_type == "reverse") {
      const encrypted_text = reverse(message);
      const addmessge = await addmeesgeD(username, cipher_type, encrypted_text);
      if (addmessge) {
        await updateusercount(req.user.id);
        res.status(201).json({ id: req.user.id, cipher_type, encrypted_text });
      } else {
        res.json("Message not added");
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
export const DecryptMessage = async (req, res) => {
  try {
    const { messageid } = req.body;
    const message = await findMeesageD(messageid);
    if (message != false) {
      const decryptedText = reverse(message.encrypted_text);
      res.status(200).json({ id: messageid, decryptedText });
    } else {
      res
        .status(200)
        .json({ id: messageid, decryptedText: null, error: "CANNOT_DECRYPT" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
