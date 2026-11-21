import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { z } from 'astro/zod';

const Job = z.object({
  code: z.string(),
  org: z.string(),
  org_note: z.string().optional(),
  role: z.string(),
  start: z.coerce.string(),
  end: z.coerce.string(),
  place: z.string().optional(),
  specimen: z.string(),
  specimen_note: z.string().optional(),
  points: z.array(z.string()).default([]),
});

const Profile = z.object({
  name: z.string(),
  role: z.string(),
  location: z.string(),
  portrait: z.string().optional(),
  portrait_alt: z.string().default(''),
  headline: z.string(),
  intro: z.string(),
  email: z.string().email(),
  links: z.object({
    linkedin: z.string().optional().default(''),
    github: z.string().optional().default(''),
    scholar: z.string().optional().default(''),
  }),
  focus: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
  stack: z.array(z.object({ area: z.string(), tools: z.array(z.string()).default([]) })).default([]),
  experience: z.array(Job),
  education: z.array(z.object({ degree: z.string(), school: z.string(), year: z.coerce.string() })).default([]),
  certifications: z.array(z.string()).default([]),
  languages: z.array(z.object({ name: z.string(), level: z.string() })).default([]),
  open_slot: z.object({ title: z.string(), text: z.string() }),
});

export type ProfileData = z.infer<typeof Profile>;

// Resolved from the project root: the module is bundled elsewhere at build time.
const root = process.cwd();
const file = path.join(root, 'src/data/profile.yml');
export const profile: ProfileData = Profile.parse(parse(fs.readFileSync(file, 'utf8')));

/** Does the portrait file actually exist in /public? */
export const portraitExists = (() => {
  if (!profile.portrait) return false;
  try {
    return fs.existsSync(path.join(root, 'public', profile.portrait));
  } catch {
    return false;
  }
})();
