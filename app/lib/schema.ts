import { z } from "zod"

export const ExperienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  location: z.string().optional(),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1)
})

export const EducationSchema = z.object({
  institution: z.string().min(1),
  degree: z.string().min(1),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string()
})

export const ResumeSchema = z.object({
  personal: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(5),
    linkedin: z.string().url().optional().or(z.literal("")),
    github: z.string().url().optional().or(z.literal("")),
  }),
  summary: z.string().max(500).optional(),
  experience: z.array(ExperienceSchema).default([]),
  education: z.array(EducationSchema).default([]),
  skills: z.array(z.string()).default([])
})

export const defaultResume: Resume = {
  personal: {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: ""
  },
  summary: "",
  experience: [],
  education: [],
  skills: []
}

export type Resume = z.infer<typeof ResumeSchema>