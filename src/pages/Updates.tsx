import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "NxtGenSec Launches AwMate 2.0 with AI-Powered Threat Detection", date: "Mar 28, 2026", category: "Product", excerpt: "AwMate 2.0 introduces next-generation AI models for real-time threat detection, reducing false positives by 90% and response times to under 2 minutes." },
  { id: 2, title: "Top 10 Cybersecurity Threats to Watch in 2026", date: "Mar 20, 2026", category: "Cybersecurity", excerpt: "From AI-driven phishing to quantum computing risks, here are the top threats organizations should prepare for this year." },
  { id: 3, title: "How We Built a Scalable SaaS Platform in 8 Weeks", date: "Mar 12, 2026", category: "Development", excerpt: "A deep dive into our development process, tech stack choices, and how we delivered a production-ready SaaS platform for a fintech client." },
  { id: 4, title: "NxtGenSec Opens Cybersecurity Internship Applications", date: "Mar 5, 2026", category: "Company", excerpt: "Our 2026 internship cohort is now accepting applications. Learn penetration testing, incident response, and more from industry experts." },
  { id: 5, title: "Zero Trust Architecture: A Practical Implementation Guide", date: "Feb 25, 2026", category: "Cybersecurity", excerpt: "Step-by-step guide to implementing zero trust in your organization, from identity verification to micro-segmentation." },
  { id: 6, title: "Introducing Our New Cloud Security Assessment Service", date: "Feb 18, 2026", category: "Product", excerpt: "We now offer comprehensive cloud security assessments for AWS, Azure, and GCP environments with automated compliance reporting." },
];

const categoryColors: Record<string, string> = {
  Product: "border-primary/30 bg-primary/10 text-primary",
  Cybersecurity: "border-accent/30 bg-accent/10 text-accent",
  Development: "border-secondary/30 bg-secondary/10 text-secondary",
  Company: "border-border bg-muted text-muted-foreground",
};

const UpdatesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block mb-6 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Blog & News</span>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Latest <span className="text-gradient-primary">Updates</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">Stay up to date with our latest news, insights, and product announcements.</p>
        </motion.div>
      </div>
    </section>

    {/* Posts Grid */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-glow transition-colors duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[post.category] || categoryColors.Company}`}>
                  <Tag className="h-3 w-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> {post.date}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default UpdatesPage;
