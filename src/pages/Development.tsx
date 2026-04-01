import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Code, Globe, Smartphone, Database, Cloud, Layers,
  ArrowRight, CheckCircle, Workflow, Settings, Cpu, Palette,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Applications", desc: "Responsive, performant web apps with React, Next.js, and modern frameworks." },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform mobile apps using React Native and Flutter." },
  { icon: Database, title: "Backend & APIs", desc: "Scalable REST and GraphQL APIs with Node.js, Python, and Go." },
  { icon: Cloud, title: "Cloud Architecture", desc: "AWS, Azure, and GCP solutions with infrastructure-as-code." },
  { icon: Cpu, title: "AI & ML Solutions", desc: "Custom machine learning models and intelligent automation." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design with modern aesthetics and accessibility." },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Terraform",
  "GraphQL", "REST", "CI/CD", "Git",
];

const process = [
  { step: "01", title: "Discovery", desc: "We analyze your requirements, goals, and constraints to define the project scope." },
  { step: "02", title: "Architecture", desc: "We design scalable, secure architecture tailored to your business needs." },
  { step: "03", title: "Development", desc: "Agile sprints with continuous integration, testing, and code reviews." },
  { step: "04", title: "Launch & Support", desc: "Smooth deployment with monitoring, maintenance, and ongoing optimization." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const DevelopmentPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="inline-block mb-6 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">Development Services</span>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Build <span className="text-gradient-accent">Powerful</span> Digital Products
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">From concept to deployment, we engineer scalable, secure, and high-performance software solutions.</p>
          <Button variant="accent" size="lg" className="mt-8 rounded-full">Start Your Project <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </motion.div>
      </div>
    </section>

    {/* What We Offer */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="What We Offer" title="Full-Spectrum" highlight="Development" description="End-to-end development services covering every layer of the modern tech stack." badgeColor="accent" highlightColor="accent" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-accent/30 transition-colors duration-300">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3"><s.icon className="h-6 w-6 text-accent" /></div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technologies */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Tech Stack" title="Technologies We" highlight="Master" badgeColor="accent" highlightColor="accent" />
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent transition-colors">
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Our Process" title="How We" highlight="Work" badgeColor="accent" highlightColor="accent" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6">
              <span className="font-heading text-3xl font-bold text-accent/30">{p.step}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Solutions */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Solutions" title="Tailored for Your" highlight="Industry" description="We build solutions that fit your domain — from fintech to healthcare." badgeColor="accent" highlightColor="accent" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "E-Commerce Platforms", desc: "Scalable online stores with payment integration, inventory management, and analytics." },
            { title: "SaaS Applications", desc: "Multi-tenant SaaS platforms with subscription billing and user management." },
            { title: "Healthcare Systems", desc: "HIPAA-compliant applications with EHR integration and telehealth features." },
            { title: "Fintech Solutions", desc: "Secure banking APIs, payment gateways, and regulatory compliance tools." },
            { title: "EdTech Platforms", desc: "Learning management systems with video streaming and progress tracking." },
            { title: "IoT Dashboards", desc: "Real-time device monitoring, data visualization, and remote management." },
          ].map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6">
              <Workflow className="h-6 w-6 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div {...fadeUp}
          className="rounded-2xl border border-accent/20 p-12 md:p-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Have a Project in <span className="text-accent">Mind?</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Let's turn your idea into a production-ready product.</p>
          <Button variant="accent" size="lg" className="mt-8 rounded-full">Let's Talk <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default DevelopmentPage;
