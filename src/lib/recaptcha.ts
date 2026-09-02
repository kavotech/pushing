const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const SCORE_THRESHOLD = 0.5;

type SiteVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

/**
 * Verifies a reCAPTCHA v3 token server-side. Returns true when unconfigured
 * (no secret key set) so local/preview environments without the key aren't
 * blocked — set RECAPTCHA_SECRET_KEY to actually enforce this.
 */
export async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const response = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await response.json()) as SiteVerifyResponse;
  if (!data.success) return false;
  if (typeof data.score === "number" && data.score < SCORE_THRESHOLD) return false;
  return true;
}
