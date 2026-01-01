import supabase from "../db/sopabasa.js";
export async function addmeesgeD(username, cipher_type, encrypted_text) {
  try {
    const { error } = await supabase
      .from("messages")
      .insert([{ username, cipher_type, encrypted_text }]);
    if (error) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
}
export async function findMeesageD(id) {
  try {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("id", id);
    if (error) {
      throw error;
    }
    if (data.length > 0) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}
