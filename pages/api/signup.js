import { supabase } from "#/supabase";

export default async function signup(req, res) {
  const body = JSON.parse(req.body);

  console.log(body);

  try {
    const { email } = body;

    console.log(email);

    const { user, session, error } = await supabase.auth.signInWithOtp({
      email,
    });
    res.status(200).redirect("/account");
  } catch (err) {
    res.status(500).json(err);
  }
}
