import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield, Lock, Eye, Server, AlertTriangle, FileSearch,
  ArrowRight, CheckCircle, Target, Bug, Scan, ShieldCheck,
} from "lucide-react";

const services = [
  { icon: Target, title: "Penetration Testing", desc: "Simulated attacks on your systems to find and fix vulnerabilities before hackers do." },
  { icon: Bug, title: "Vulnerability Assessment", desc: "Comprehensive scanning and analysis of your infrastructure for known weaknesses." },
  { icon: Eye, title: "Threat Monitoring", desc: "24/7 real-time monitoring and detection of malicious activities and anomalies." },
  { icon: AlertTriangle, title: "Incident Response", desc: "Rapid containment, investigation, and recovery from security breaches." },
  { icon: ShieldCheck, title: "Compliance Auditing", desc: "SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001 compliance assessments." },
  { icon: Scan, title: "Red Team Operations", desc: "Advanced adversary simulation to test your organization's detection and response." },
];

const tools = [
  "Burp Suite", "Metasploit", "Nessus", "Wireshark", "OWASP ZAP",
  "Nmap", "Kali Linux", "Snort", "Splunk", "CrowdStrike",
  "Carbon Black", "Tenable", "Qualys", "Elastic SIEM", "HashiCorp Vault",
];

const scenarios = [
  { title: "Financial Institution Breach Prevention", desc: "Identified 47 critical vulnerabilities in a major bank's online platform, preventing a potential $12M breach. Implemented zero-trust architecture." },
  { title: "Healthcare Data Protection", desc: "Secured patient data for a hospital network serving 500K+ patients. Achieved full HIPAA compliance and deployed encrypted communication channels." },
  { title: "E-Commerce Platform Hardening", desc: "Protected a retail platform processing $50M annually. Implemented WAF rules, DDoS mitigation, and PCI-DSS compliant payment flows." },
];

const CybersecurityPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="inline-block mb-6 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">Cybersecurity</span>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Protect What <span className="text-gradient-accent">Matters Most</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Enterprise-grade cybersecurity services to defend your organization from evolving threats.</p>
          <Button variant="accent" size="lg" className="mt-8">Get Security Assessment <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Security Services" title="Comprehensive" highlight="Protection" description="Multi-layered security services designed to detect, prevent, and respond to threats." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-glow transition-colors duration-300">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3"><s.icon className="h-6 w-6 text-accent" /></div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Risk Assessment Process */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Risk Assessment" title="Our Security" highlight="Process" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Reconnaissance", desc: "Asset discovery and attack surface mapping." },
            { step: "02", title: "Assessment", desc: "Vulnerability scanning and risk evaluation." },
            { step: "03", title: "Exploitation", desc: "Controlled penetration testing and validation." },
            { step: "04", title: "Remediation", desc: "Detailed reporting and fix implementation." },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="font-heading text-3xl font-bold text-accent/30">{p.step}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tools */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Arsenal" title="Tools &" highlight="Practices" />
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-glow transition-colors">
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* Case Scenarios */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Case Studies" title="Real-World" highlight="Impact" />
        <div className="grid gap-6 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-8">
              <FileSearch className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl border border-accent/20 p-12 md:p-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Don't Wait for a <span className="text-gradient-accent">Breach</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Get a comprehensive security assessment today and protect your organization.</p>
          <Button variant="accent" size="lg" className="mt-8">Schedule Assessment <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default CybersecurityPage;
