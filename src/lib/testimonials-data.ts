export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

export const sampleTestimonials: Testimonial[] = [
  {
    quote: "Lukas is exactly what every senior exec is looking for. He volunteers for challenging tasks and crushes them with precision, operates with a calm sense of urgency, and has great UI/UX solution ideas.",
    author: "Jed B.",
    title: "CEO & Founder",
    company: "Greater Boston, MA"
  },
  {
    quote: "Lukas delivered exceptional results for our project. He's incredibly efficient, always available for questions, and his technical expertise made the entire process smooth and successful.",
    author: "Gill H.",
    title: "Entrepreneur",
    company: "St. Louis, MO"
  },
  {
    quote: "I approached Lukas with a very specific vision for our new website, and he knocked it out of the park. I was looking for a clean, original design and a faster site. He absolutely delivered.",
    author: "Brandan C.",
    title: "Founder & Executive Producer",
    company: "Nashville, TN"
  }
]
