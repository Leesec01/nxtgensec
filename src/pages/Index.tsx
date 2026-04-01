import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Code, Lock, Cpu, Globe, Zap, Users, Award,
  ArrowRight, CheckCircle, Star, ChevronDown, ChevronUp,
  Server, Eye, Terminal, Layers, Rocket, MessageSquare,
} from "lucide-react";
import { useState } from "react";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="absolute inset-0 bg-gradient-radial" />
    {/* Subtle accent glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]" />

    <div className="container relative mx-auto px-4 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 rounded-full border border-muted bg-muted/50 px-5 py-2 text-xs font-semibold tracking-wider text-foreground uppercase"
        >
          <Shield className="h-3.5 w-3.5 text-accent" />
          India's Best Platform for Security-First Development
        </motion.span>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-secondary font-heading text-sm md:text-base tracking-wide mb-4"
        >
          NxtGenSec | Next Generation Security
        </motion.p>

        {/* Main heading with multi-color words */}
        <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-foreground">Securing </span>
          <span className="text-accent">Digital </span>
          <span className="text-primary">Assets</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          We provide development and security solutions for startups, enterprises, and modern businesses using advanced technologies with a strict security-first approach.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="rounded-full">
            Get Started <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full">
            Explore Services
          </Button>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-sm md:text-base font-semibold text-gradient-primary tracking-wide"
        >
          Security-first. Execution-focused. Built for the future.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

/* ─── About ─── */
const About = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        badge="About Us"
        title="Who We Are at"
        highlight="NxtGenSec"
        description="We are a team of cybersecurity experts, software engineers, and innovators dedicated to building a safer digital world."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { icon: Shield, title: "Security First", desc: "Every solution we build is grounded in security-first principles, ensuring your assets are always protected.", color: "text-primary" },
          { icon: Rocket, title: "Innovation Driven", desc: "We stay ahead of threats by leveraging the latest technologies, frameworks, and research.", color: "text-accent" },
          { icon: Users, title: "Client Focused", desc: "Your success is our mission. We tailor solutions to match your unique business needs.", color: "text-secondary" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-xl border border-border bg-card p-8 hover:border-glow transition-colors duration-300"
          >
            <item.icon className={`h-10 w-10 ${item.color} mb-4`} />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Services ─── */
const Services = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        badge="Services"
        title="What We"
        highlight="Offer"
        description="End-to-end solutions from development to security, tailored for modern businesses."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Code, title: "Web Development", desc: "Modern, scalable web applications built with cutting-edge technologies.", color: "text-secondary" },
          { icon: Lock, title: "Cybersecurity", desc: "Comprehensive security audits, penetration testing, and threat protection.", color: "text-primary" },
          { icon: Cpu, title: "AI & Automation", desc: "Intelligent automation solutions powered by machine learning.", color: "text-accent" },
          { icon: Globe, title: "Cloud Solutions", desc: "Secure cloud architecture, migration, and management services.", color: "text-secondary" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 hover:border-glow hover:glow-primary transition-all duration-300"
          >
            <div className={`mb-4 inline-flex rounded-lg p-3 ${item.color === 'text-primary' ? 'bg-primary/10' : item.color === 'text-accent' ? 'bg-accent/10' : 'bg-secondary/10'}`}>
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Development Overview ─── */
const DevOverview = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid gap-12 items-center lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block mb-4 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-medium text-secondary">
            Development
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Building <span className="text-gradient-primary">Powerful</span> Solutions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From web and mobile apps to enterprise platforms, we architect scalable, secure, and performant software solutions.
          </p>
          <ul className="mt-6 space-y-3">
            {["Full-Stack Web Applications", "Mobile App Development", "API Design & Integration", "Cloud-Native Architecture"].map((t, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-surface-foreground">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/development">
            <Button variant="hero-outline" className="mt-8">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-accent" />
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-2">
              <p><span className="text-secondary">const</span> <span className="text-primary">app</span> = <span className="text-accent">createApp</span>({"{"}</p>
              <p className="pl-4"><span className="text-secondary">security</span>: <span className="text-primary">true</span>,</p>
              <p className="pl-4"><span className="text-secondary">scalable</span>: <span className="text-primary">true</span>,</p>
              <p className="pl-4"><span className="text-secondary">modern</span>: <span className="text-primary">true</span>,</p>
              <p>{"}"});</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Cybersecurity Overview ─── */
const CyberOverview = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid gap-12 items-center lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Eye, label: "Threat Monitoring", value: "24/7" },
              { icon: Shield, label: "Attacks Blocked", value: "99.9%" },
              { icon: Terminal, label: "Pen Tests Done", value: "500+" },
              { icon: Server, label: "Servers Secured", value: "10K+" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 text-center">
                <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-heading text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
          <span className="inline-block mb-4 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            Cybersecurity
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Defend Your <span className="text-gradient-accent">Infrastructure</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Enterprise-grade security services including penetration testing, vulnerability assessments, incident response, and continuous monitoring.
          </p>
          <ul className="mt-6 space-y-3">
            {["Penetration Testing & Red Teaming", "Vulnerability Assessment", "Incident Response & Recovery", "Compliance & Risk Management"].map((t, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-surface-foreground">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/cybersecurity">
            <Button variant="accent" className="mt-8">
              Explore Security <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Product (AwMate) ─── */
const Product = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        badge="Product"
        title="Introducing"
        highlight="AwMate"
        description="Your intelligent security companion — automated monitoring, instant alerts, and actionable insights all in one platform."
      />
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Zap, title: "Real-Time Alerts", desc: "Instant notifications when threats are detected across your infrastructure." },
            { icon: Layers, title: "Smart Dashboard", desc: "Unified view of all security metrics, logs, and threat intelligence." },
            { icon: Cpu, title: "AI-Powered Analysis", desc: "Machine learning models that identify patterns and predict vulnerabilities." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/awmate">
            <Button variant="hero" size="lg">
              Discover AwMate <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const testimonials = [
  { name: "Sarah Chen", role: "CTO, TechVault", text: "NxtGenSec transformed our security posture. Their penetration testing uncovered critical vulnerabilities we hadn't considered.", rating: 5 },
  { name: "Marcus Johnson", role: "CEO, DataFlow", text: "The development team delivered our platform 3 weeks ahead of schedule with exceptional code quality. Highly recommend.", rating: 5 },
  { name: "Elena Rodriguez", role: "CISO, FinEdge", text: "AwMate has become an essential tool in our security stack. The real-time monitoring is unmatched.", rating: 5 },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        badge="Testimonials"
        title="What Our Clients"
        highlight="Say"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Why NxtGenSec ─── */
const WhyUs = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        badge="Why Us"
        title="Why Choose"
        highlight="NxtGenSec"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Award, title: "Industry Certified", desc: "Our team holds OSCP, CEH, CISSP, and other top-tier certifications." },
          { icon: Zap, title: "Fast Turnaround", desc: "Agile processes ensure rapid delivery without compromising quality." },
          { icon: Shield, title: "Proven Track Record", desc: "500+ successful projects across cybersecurity and development." },
          { icon: Users, title: "Dedicated Support", desc: "Round-the-clock support with dedicated account managers." },
          { icon: Globe, title: "Global Reach", desc: "Serving clients across 20+ countries with localized expertise." },
          { icon: Lock, title: "Data Privacy", desc: "Strict NDA compliance and enterprise-grade data protection." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 rounded-xl border border-border bg-card p-6"
          >
            <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FAQs ─── */
const faqs = [
  { q: "What industries does NxtGenSec serve?", a: "We serve a wide range of industries including fintech, healthcare, e-commerce, SaaS, government, and enterprise organizations." },
  { q: "How does your cybersecurity assessment process work?", a: "We follow a structured approach: initial consultation, asset discovery, vulnerability assessment, penetration testing, reporting, and remediation support." },
  { q: "Do you offer ongoing security monitoring?", a: "Yes, through our AwMate platform we provide 24/7 continuous monitoring, real-time alerts, and monthly security reports." },
  { q: "What development technologies do you use?", a: "We work with React, Node.js, Python, Go, AWS, Azure, and more. Our stack is always tailored to your project requirements." },
  { q: "Can I hire interns from your program?", a: "Absolutely. Our internship program produces skilled professionals who are trained in real-world security and development scenarios." },
];

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="FAQs" title="Frequently Asked" highlight="Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-medium text-foreground text-sm">{faq.q}</span>
                {open === i ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const CTA = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-primary/20 bg-gradient-radial p-12 md:p-16 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Ready to <span className="text-gradient-primary">Secure</span> Your Future?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Let's discuss how NxtGenSec can protect your digital assets and accelerate your growth.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg">
            Get a Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="hero-outline" size="lg">
            <MessageSquare className="mr-1 h-4 w-4" /> Talk to an Expert
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Home Page ─── */
const Index = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <DevOverview />
    <CyberOverview />
    <Product />
    <Testimonials />
    <WhyUs />
    <FAQs />
    <CTA />
  </Layout>
);

export default Index;
