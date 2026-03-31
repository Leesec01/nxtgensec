import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Zap, Layers, Cpu, Shield, BarChart3, Bell,
  ArrowRight, CheckCircle, Globe, Lock, Eye,
} from "lucide-react";

const features = [
  { icon: Bell, title: "Real-Time Alerts", desc: "Instant notifications for security threats, anomalies, and system events." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Comprehensive visual analytics with customizable reports and metrics." },
  { icon: Cpu, title: "AI Threat Detection", desc: "Machine learning models that identify and predict threats before they strike." },
  { icon: Layers, title: "Multi-Cloud Support", desc: "Monitor AWS, Azure, GCP, and on-premise infrastructure from a single pane." },
  { icon: Lock, title: "Compliance Tracking", desc: "Automated compliance checks for SOC 2, HIPAA, GDPR, and ISO 27001." },
  { icon: Globe, title: "Global Threat Intelligence", desc: "Aggregated threat feeds from worldwide sources for proactive defense." },
];

const useCases = [
  { title: "Enterprise SOC", desc: "Centralize your security operations center with AwMate's unified dashboard and automated response workflows." },
  { title: "DevSecOps Pipeline", desc: "Integrate AwMate into your CI/CD pipeline for continuous security scanning and compliance validation." },
  { title: "Managed Security Services", desc: "MSPs can use AwMate to manage multiple client environments with multi-tenant capabilities." },
  { title: "Incident Response", desc: "Automate incident classification, escalation, and response with intelligent playbooks." },
];

const AwMatePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block mb-6 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Product
          </span>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Meet <span className="text-gradient-primary">AwMate</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Your intelligent security companion — automated monitoring, instant alerts, and actionable insights all in one powerful platform.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="hero" size="lg">Request Demo <ArrowRight className="ml-1 h-4 w-4" /></Button>
            <Button variant="hero-outline" size="lg">View Docs</Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Features" title="Everything You Need in" highlight="One Platform" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-glow transition-colors duration-300">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3"><f.icon className="h-6 w-6 text-primary" /></div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading badge="Benefits" title="Why Teams Love" highlight="AwMate" />
            <ul className="space-y-4">
              {[
                "Reduce mean time to detection by 85%",
                "Automate 70% of routine security tasks",
                "Single dashboard for all cloud environments",
                "No-code playbook builder for incident response",
                "SOC 2 and GDPR compliance out of the box",
              ].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-surface-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl border border-border bg-card p-8 space-y-6">
              {[
                { label: "Threat Detection", value: "99.8%", color: "bg-primary" },
                { label: "Response Time", value: "<2min", color: "bg-secondary" },
                { label: "False Positives", value: "<0.5%", color: "bg-accent" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-heading font-semibold text-foreground">{stat.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: i === 2 ? "5%" : i === 1 ? "95%" : "99.8%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full rounded-full ${stat.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Use Cases" title="Built for" highlight="Every Scenario" />
        <div className="grid gap-6 sm:grid-cols-2">
          {useCases.map((uc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8">
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-gradient-radial p-12 md:p-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Start Using <span className="text-gradient-primary">AwMate</span> Today
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">14-day free trial. No credit card required.</p>
          <Button variant="hero" size="lg" className="mt-8">Get Started Free <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AwMatePage;
