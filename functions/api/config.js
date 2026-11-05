export async function onRequestGet({ env }) {
  const supabaseUrl = env.SUPABASE_URL;
  const supabaseAnonKey = env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return Response.json(
      { error: "Supabase is not configured for this Cloudflare Pages environment." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return Response.json(
    { supabaseUrl, supabaseAnonKey },
    { headers: { "Cache-Control": "no-store" } },
  );
}
