import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Shield, ArrowRight, CheckCircle, Clock, Users, BookOpen, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const devInternship = {
  title: "Development Internship",
  icon: Code,
  color: "accent" as const,
  duration: "3–6 Months",
  topics: ["React & TypeScript", "Node.js & APIs", "Database Design", "Cloud Deployment", "CI/CD Pipelines", "Code Reviews & Testing"],
  outcomes: ["Build production-ready applications", "Master modern development workflows", "Contribute to real client projects", "Get mentored by senior engineers"],
};

const cyberInternship = {
  title: "Cybersecurity Internship",
  icon: Shield,
  color: "primary" as const,
  duration: "3–6 Months",
  topics: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Incident Response", "SIEM & Log Analysis", "Compliance Frameworks"],
  outcomes: ["Perform real security assessments", "Learn industry-standard tools", "Earn certification preparation", "Work on live security operations"],
};

const colorStyles = {
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
};

const InternshipCard = ({ data }: { data: { title: string; icon: typeof Code; color: "accent" | "primary"; duration: string; topics: string[]; outcomes: string[] } }) => {
  const styles = colorStyles[data.color];
  return (
    <motion.div {...fadeUp}
      className="rounded-xl border border-border bg-card p-8 lg:p-10">
      <div className={`mb-4 inline-flex rounded-lg p-3 ${styles.bg}`}>
        <data.icon className={`h-8 w-8 ${styles.text}`} />
      </div>
      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{data.title}</h3>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Clock className="h-4 w-4" /> {data.duration}
      </div>

      <div className="mb-8">
        <h4 className="font-heading font-semibold text-foreground mb-3">What You'll Learn</h4>
        <div className="grid grid-cols-2 gap-2">
          {data.topics.map((t, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className={`h-3.5 w-3.5 shrink-0 ${styles.text}`} /> {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-heading font-semibold text-foreground mb-3">Outcomes</h4>
        <ul className="space-y-2">
          {data.outcomes.map((o, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className={`h-3.5 w-3.5 shrink-0 ${styles.text}`} /> {o}
            </li>
          ))}
        </ul>
      </div>

      <Button variant={data.color === "accent" ? "accent" : "default"} size="lg" className="w-full rounded-full">
        Apply Now <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

const InternshipsPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block mb-6 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Internship Programs</span>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Launch Your <span className="text-gradient-primary">Career</span> With Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Gain real-world experience in development and cybersecurity through our structured internship programs.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Programs" title="Choose Your" highlight="Path" />
        <div className="grid gap-8 lg:grid-cols-2">
          <InternshipCard data={devInternship} />
          <InternshipCard data={cyberInternship} />
        </div>
      </div>
    </section>

    {/* Why Intern With Us */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Why Us" title="Why Intern at" highlight="NxtGenSec" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, title: "Expert Mentors", desc: "Learn from OSCP, CEH, and senior-level professionals.", color: "text-primary", bg: "bg-primary/10" },
            { icon: BookOpen, title: "Hands-On Projects", desc: "Work on real client projects, not simulations.", color: "text-accent", bg: "bg-accent/10" },
            { icon: Award, title: "Certification Support", desc: "We help you prepare for industry certifications.", color: "text-secondary", bg: "bg-secondary/10" },
            { icon: ArrowRight, title: "Job Placement", desc: "Top performers get full-time offers at NxtGenSec.", color: "text-primary", bg: "bg-primary/10" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center">
              <div className={`mx-auto mb-3 inline-flex rounded-lg p-3 ${item.bg}`}>
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div {...fadeUp}
          className="rounded-2xl border border-primary/20 bg-gradient-radial p-12 md:p-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Ready to <span className="text-gradient-primary">Get Started?</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Applications are open year-round. No prior experience required — just passion and dedication.</p>
          <Button variant="hero" size="lg" className="mt-8 rounded-full">Apply Now <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default InternshipsPage;
