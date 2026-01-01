import { getDB, connect } from "../db/mongodb.js";
await connect();
export async function addUserD(newUser) {
  try {
    const result = await getDB().collection("user").insertOne(newUser);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function CheckUniqueName(name) {
  try {
    const messages = await getDB()
      .collection("user")
      .find({ username: name })
      .toArray();
    console.log("messages: ", messages);

    if (messages.length > 0) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function CheckUser(name, password) {
  try {
    const messages = await getDB()
      .collection("user")
      .find({ username: name, password: password })
      .toArray();
    console.log("messages: ", messages);

    if (messages.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function findUserD(name, password) {
  try {
    const messages = await getDB()
      .collection("user")
      .find({ username: name, password: password })
      .toArray();
    console.log("messages: ", messages);

    if (messages.length > 0) {
      return messages;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function updateusercount() {
  try {
    const newMessage = await getDB(userId)
      .collection("user")
      .findOneAndUpdate(
        { userId: userId },
        { $set: { encryptedMessagesCount: +1 } }
      );
  } catch (err) {
    console.error(err);
    throw err;
  }
}
