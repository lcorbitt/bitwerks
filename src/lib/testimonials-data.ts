export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

export const sampleTestimonials: Testimonial[] = [
  {
    quote: "BitWerks is exactly what every senior executive is looking for. They volunteer for challenging tasks and crush them with precision, operate with a calm sense of urgency, and have great UI/UX solution ideas.",
    author: "Jed B.",
    title: "CEO & Founder",
    company: "Greater Boston, MA"
  },
  {
    quote: "BitWerks delivered exceptional results for our project. They're incredibly efficient, always available for questions, and their technical expertise made the entire process smooth and successful.",
    author: "Gill H.",
    title: "Entrepreneur",
    company: "St. Louis, MO"
  },
  {
    quote: "I approached BitWerks with a very specific vision for our new website, and they knocked it out of the park. I was looking for a clean, original design and a faster site. They absolutely delivered.",
    author: "Brandan C.",
    title: "Founder & Executive Producer",
    company: "Nashville, TN"
  }
]
