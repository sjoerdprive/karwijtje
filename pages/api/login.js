import { supabase } from "#/supabase";

export default async function handleLogin(req, res) {
  const body = JSON.parse(req.body);

  const { email } = body;

  try {
    const { user, session, error } = await supabase.auth.signInWithOtp({
      email: email,
    });

    res.status(200).json(session);
  } catch (err) {
    res.status(500).json(err);
  }
}
