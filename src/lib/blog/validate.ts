import { z } from "zod"

import { upgradeBlogDocumentInput, type BlogDocument } from "./document"

const textSpanSchema = z.object({ type: z.literal("text"), text: z.string() })
const linkSpanSchema = z.object({
  type: z.literal("link"),
  text: z.string(),
  href: z.string(),
})

const spanSchema = z.discriminatedUnion("type", [textSpanSchema, linkSpanSchema])

const paragraphNodeSchema = z.object({ type: z.literal("p"), spans: z.array(spanSchema) })
const headingH2NodeSchema = z.object({ type: z.literal("h2"), spans: z.array(spanSchema) })
const headingH3NodeSchema = z.object({ type: z.literal("h3"), spans: z.array(spanSchema) })
const quoteNodeSchema = z.object({ type: z.literal("quote"), spans: z.array(spanSchema) })
const ulListNodeSchema = z.object({ type: z.literal("ul"), items: z.array(z.array(spanSchema)) })
const olListNodeSchema = z.object({ type: z.literal("ol"), items: z.array(z.array(spanSchema)) })
const imageNodeSchema = z.object({
  type: z.literal("image"),
  imageId: z.string().uuid(),
  layout: z.enum(["center-wide", "float-left", "float-right"]).default("center-wide"),
})

const nodeSchema = z.discriminatedUnion("type", [
  paragraphNodeSchema,
  headingH2NodeSchema,
  headingH3NodeSchema,
  quoteNodeSchema,
  ulListNodeSchema,
  olListNodeSchema,
  imageNodeSchema,
])

const documentSchema = z.object({
  version: z.literal(1),
  nodes: z.array(nodeSchema),
})

export const parseBlogDocument = (input: unknown): BlogDocument => {
  const upgraded = upgradeBlogDocumentInput(input)
  return documentSchema.parse(upgraded) as BlogDocument
}
