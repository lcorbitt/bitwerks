import sanitizeHtml from "sanitize-html"

export const sanitizeBlogHtml = (dirtyHtml: string) =>
  sanitizeHtml(dirtyHtml, {
    allowedTags: [
      "p",
      "br",
      "hr",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "s",
      "code",
      "pre",
      "a",
      "img",
      "figure",
      "figcaption",
      "span",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "loading", "width", "height"],
      figure: ["data-blog-attachment-image", "data-image-id", "data-blog-img-layout"],
      span: ["class"],
      code: ["class"],
      pre: ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer", target: "_blank" }),
      img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }),
    },
  })

