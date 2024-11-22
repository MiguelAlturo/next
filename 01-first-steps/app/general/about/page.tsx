import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seo title",
  description: "Seo description",
  keywords: ["about page", "Miguel", "otros"],
};

export default function About() {
  return <span className="text-5xl">About page</span>;
}
