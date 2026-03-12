/* ──────────────────────────────────────────────
 *  Join Form Client – Registration form for creators
 *  Fields: Name, City, Skill, Description, Portfolio
 *  Includes validation and success state.
 *  
 *  CUSTOMIZE:
 *  - Cities list: src/lib/data.ts → pakistanCities
 *  - Skill options: src/lib/data.ts → skillCategories
 * ────────────────────────────────────────────── */
"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pakistanCities, skillCategories } from "@/lib/data";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

interface FormData {
  name: string;
  city: string;
  skill: string;
  description: string;
  portfolioFiles: FileList | null;
}

interface FormErrors {
  name?: string;
  city?: string;
  skill?: string;
  description?: string;
}

export default function JoinFormClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    city: "",
    skill: "",
    description: "",
    portfolioFiles: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ─── Validation ─── */
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (formData.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!formData.city) newErrors.city = "Please select a city";
    if (!formData.skill) newErrors.skill = "Please select a skill category";
    if (!formData.description.trim())
      newErrors.description = "Please describe your skills";
    if (formData.description.trim().length < 20)
      newErrors.description = "Description must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ─── Submit Handler ─── */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  /* ─── Input helper ─── */
  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-2xl border text-sm transition-all outline-none ${
      errors[field]
        ? "border-red-400 focus:ring-2 focus:ring-red-200"
        : "border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
    }`;

  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-20">
      <div className="container-custom max-w-2xl">
        {/* ─── Header ─── */}
        <FadeInOnScroll>
          <SectionHeading
            title="Join as Creator"
            subtitle="Start your journey on Alwan and showcase your talent to the world"
          />
        </FadeInOnScroll>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* ─── Success State ─── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-card p-10 text-center"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Welcome to Alwan!
              </h2>
              <p className="text-neutral-500 mb-6">
                Your application has been submitted successfully. We&apos;ll
                review your profile and get back to you within 24 hours.
              </p>
              <Button variant="primary" href="/">
                Back to Home
              </Button>
            </motion.div>
          ) : (
            /* ─── Form ─── */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-6"
              noValidate
            >
              {/* ─── Name ─── */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g., Ayesha Khan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClasses("name")}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* ─── City ─── */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  City <span className="text-red-400">*</span>
                </label>
                <select
                  id="city"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className={inputClasses("city")}
                  aria-describedby={errors.city ? "city-error" : undefined}
                >
                  <option value="">Select your city</option>
                  {pakistanCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p id="city-error" className="mt-1 text-xs text-red-400">
                    {errors.city}
                  </p>
                )}
              </div>

              {/* ─── Skill Category ─── */}
              <div>
                <label
                  htmlFor="skill"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Skill Category <span className="text-red-400">*</span>
                </label>
                <select
                  id="skill"
                  value={formData.skill}
                  onChange={(e) =>
                    setFormData({ ...formData, skill: e.target.value })
                  }
                  className={inputClasses("skill")}
                  aria-describedby={errors.skill ? "skill-error" : undefined}
                >
                  <option value="">Select your skill</option>
                  {skillCategories.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
                {errors.skill && (
                  <p id="skill-error" className="mt-1 text-xs text-red-400">
                    {errors.skill}
                  </p>
                )}
              </div>

              {/* ─── Description ─── */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Tell Us About Your Skills{" "}
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Describe your experience, specialties, and what makes your work unique..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className={inputClasses("description")}
                  aria-describedby={
                    errors.description ? "description-error" : undefined
                  }
                />
                <div className="flex justify-between mt-1">
                  {errors.description ? (
                    <p
                      id="description-error"
                      className="text-xs text-red-400"
                    >
                      {errors.description}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-neutral-400">
                    {formData.description.length}/500
                  </span>
                </div>
              </div>

              {/* ─── Portfolio Upload ─── */}
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Upload Portfolio Images{" "}
                  <span className="text-neutral-400">(optional)</span>
                </label>
                <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-8 text-center hover:border-primary/40 transition-colors">
                  <div className="text-3xl mb-2">📁</div>
                  <input
                    id="portfolio"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        portfolioFiles: e.target.files,
                      })
                    }
                    className="hidden"
                  />
                  <label
                    htmlFor="portfolio"
                    className="text-sm text-primary font-medium cursor-pointer hover:underline"
                  >
                    Click to upload
                  </label>
                  <span className="text-sm text-neutral-400 block mt-1">
                    PNG, JPG up to 5MB each (max 6 images)
                  </span>
                  {formData.portfolioFiles &&
                    formData.portfolioFiles.length > 0 && (
                      <p className="text-sm text-green-600 mt-2 font-medium">
                        ✓ {formData.portfolioFiles.length} file(s) selected
                      </p>
                    )}
                </div>
              </div>

              {/* ─── Submit Button ─── */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </Button>

              {/* ─── Disclaimer ─── */}
              <p className="text-xs text-neutral-400 text-center">
                By submitting, you agree to our{" "}
                <a href="/under-development" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/under-development" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
