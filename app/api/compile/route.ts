import { ResumeSchema } from "@/app/lib/schema"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const parsed = ResumeSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const resume = parsed.data

    // Continue LaTeX generation here...

    return Response.json({ success: true })

  } catch (error) {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400 }
    )
  }
}