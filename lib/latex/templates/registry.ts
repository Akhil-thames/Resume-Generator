export const TEMPLATE_REGISTRY: Record<string, { id: string; name: string; file: string }> = {
  classic: { id: "classic", name: "Classic", file: "lib/latex/templates/classic.tex" },
  modern: { id: "modern", name: "Modern", file: "lib/latex/templates/modern.tex" },
  ats: { id: "ats", name: "ATS", file: "lib/latex/templates/ats.tex" },
};
