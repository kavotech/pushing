"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/cn";

type Variant = "quote" | "contact";
type Status = "idle" | "loading" | "success" | "error";

const propertyTypes = ["Domestic", "Communal / Residential Block", "Estate", "Commercial"];

async function getRecaptchaToken(): Promise<string | undefined> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === "undefined" || !window.grecaptcha) return undefined;

  const grecaptcha = window.grecaptcha;
  return new Promise((resolve) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(siteKey, { action: "submit" }).then(resolve).catch(() => resolve(undefined));
    });
  });
}

export function EnquiryForm({ variant = "quote" }: { variant?: Variant }) {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const recaptchaToken = await getRecaptchaToken();
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      postcode: String(data.get("postcode") ?? ""),
      propertyType: String(data.get("propertyType") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      formType: variant,
      recaptchaToken,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-lime-200 bg-lime-50 p-10 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <CheckCircle2 className="size-10 text-lime-600" />
        </motion.span>
        <h3 className="text-xl font-semibold text-ink-900">Thanks — your message is on its way</h3>
        <p className="max-w-sm text-sm text-ink-500">
          We&apos;ll be in touch shortly. If your enquiry is urgent, feel free to call or WhatsApp
          us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor={`${formId}-name`} required>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </Field>

        <Field label="Phone number" htmlFor={`${formId}-phone`} required>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
            placeholder="07000 000000"
          />
        </Field>

        <Field label="Email address" htmlFor={`${formId}-email`} required>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Postcode" htmlFor={`${formId}-postcode`}>
          <input
            id={`${formId}-postcode`}
            name="postcode"
            type="text"
            autoComplete="postal-code"
            className={inputClasses}
            placeholder="e.g. SW1A 1AA"
          />
        </Field>

        <Field label="Property type" htmlFor={`${formId}-propertyType`}>
          <select id={`${formId}-propertyType`} name="propertyType" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Service" htmlFor={`${formId}-service`}>
          <select id={`${formId}-service`} name="service" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Not sure / general enquiry">Not sure / general enquiry</option>
          </select>
        </Field>
      </div>

      <Field
        label={variant === "quote" ? "Tell us about the job" : "Your message"}
        htmlFor={`${formId}-message`}
        required
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder={
            variant === "quote"
              ? "Let us know what needs cleaning, roughly how big the area is, and any access details."
              : "How can we help?"
          }
        />
      </Field>

      <AnimatePresence>
        {status === "error" ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            {errorMessage}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-glow-blue active:scale-[0.97] active:bg-blue-600 active:duration-150 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
        {status === "loading"
          ? "Sending..."
          : variant === "quote"
            ? "Request My Free Quote"
            : "Send Message"}
      </button>

      <p className="text-xs text-ink-400">
        By submitting this form you agree to be contacted about your enquiry. We won&apos;t use
        your details for anything else.
      </p>
    </form>
  );
}

const inputClasses =
  "focus-ring w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus-visible:border-blue-400";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2")}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-800">
        {label}
        {required ? <span className="ml-1 text-blue-600">*</span> : null}
      </label>
      {children}
    </div>
  );
}
