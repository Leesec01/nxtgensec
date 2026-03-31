import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Book, Search, ChevronRight, FileText, Code, Shield, Layers, Settings } from "lucide-react";
import { useState } from "react";

const sidebar = [
  { icon: Book, label: "Getting Started", items: ["Introduction", "Quick Start", "Installation", "Configuration"] },
  { icon: Code, label: "API Reference", items: ["Authentication", "Endpoints", "Rate Limiting", "Webhooks"] },
  { icon: Shield, label: "Security", items: ["Best Practices", "Encryption", "Access Control", "Audit Logs"] },
  { icon: Layers, label: "Integrations", items: ["AWS", "Azure", "Slack", "Jira"] },
  { icon: Settings, label: "Administration", items: ["User Management", "Billing", "Settings", "Troubleshooting"] },
];

const docContent: Record<string, { title: string; content: string }> = {
  Introduction: {
    title: "Introduction",
    content: `Welcome to the NxtGenSec documentation. This guide covers everything you need to get started with our platform, APIs, and security tools.

NxtGenSec provides enterprise-grade cybersecurity solutions including threat monitoring, vulnerability assessment, and incident response through our AwMate platform.

## Key Concepts

- **Workspaces** — Isolated environments for organizing your security operations.
- **Agents** — Lightweight collectors deployed in your infrastructure for data gathering.
- **Policies** — Rule sets that define security baselines and alert thresholds.
- **Playbooks** — Automated response workflows triggered by security events.

## Architecture Overview

NxtGenSec follows a cloud-native, microservices architecture designed for scalability and resilience. All data is encrypted at rest and in transit using AES-256 and TLS 1.3.`,
  },
  "Quick Start": {
    title: "Quick Start Guide",
    content: `Get up and running with NxtGenSec in under 10 minutes.

## Step 1: Create Your Workspace

Sign up at app.nxtgensec.com and create a new workspace. Choose your region and compliance requirements.

## Step 2: Install the Agent

\`\`\`bash
curl -fsSL https://install.nxtgensec.com | bash
nxtgen-agent configure --token YOUR_API_TOKEN
nxtgen-agent start
\`\`\`

## Step 3: Configure Your First Policy

Navigate to **Policies → Create New** and select from our pre-built templates:
- Web Application Security
- Network Monitoring
- Cloud Infrastructure
- Endpoint Protection

## Step 4: Set Up Alerts

Configure notification channels (Slack, Email, PagerDuty) under **Settings → Notifications**.`,
  },
  Installation: {
    title: "Installation Guide",
    content: `## System Requirements

- **OS:** Ubuntu 20.04+, CentOS 8+, macOS 12+, Windows Server 2019+
- **RAM:** 4GB minimum, 8GB recommended
- **Disk:** 20GB available space
- **Network:** Outbound HTTPS (443)

## Docker Installation

\`\`\`bash
docker pull nxtgensec/agent:latest
docker run -d --name nxtgen-agent \\
  -e API_TOKEN=your_token \\
  -v /var/log:/var/log:ro \\
  nxtgensec/agent:latest
\`\`\`

## Kubernetes

\`\`\`yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nxtgen-agent
spec:
  selector:
    matchLabels:
      app: nxtgen-agent
  template:
    spec:
      containers:
      - name: agent
        image: nxtgensec/agent:latest
\`\`\``,
  },
};

const DocsPage = () => {
  const [activeItem, setActiveItem] = useState("Introduction");
  const [openSection, setOpenSection] = useState("Getting Started");
  const [searchQuery, setSearchQuery] = useState("");
  const currentDoc = docContent[activeItem] || docContent.Introduction;

  return (
    <Layout>
      <section className="min-h-screen bg-surface">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {sidebar.map((section) => (
                <div key={section.label}>
                  <button
                    onClick={() => setOpenSection(openSection === section.label ? "" : section.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    <span className="flex items-center gap-2"><section.icon className="h-4 w-4 text-primary" /> {section.label}</span>
                    <ChevronRight className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${openSection === section.label ? "rotate-90" : ""}`} />
                  </button>
                  {openSection === section.label && (
                    <div className="ml-6 mt-1 space-y-0.5">
                      {section.items
                        .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item) => (
                          <button
                            key={item}
                            onClick={() => setActiveItem(item)}
                            className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
                              activeItem === item ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <FileText className="h-3.5 w-3.5" /> {item}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.aside>

            {/* Content */}
            <motion.div key={activeItem} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-8 lg:p-12">
              <h1 className="font-heading text-3xl font-bold text-foreground mb-8">{currentDoc.title}</h1>
              <div className="prose-custom space-y-4">
                {currentDoc.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) {
                    return <h2 key={i} className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">{block.replace("## ", "")}</h2>;
                  }
                  if (block.startsWith("```")) {
                    const lines = block.split("\n");
                    const code = lines.slice(1, -1).join("\n");
                    return (
                      <pre key={i} className="rounded-lg border border-border bg-background p-4 overflow-x-auto">
                        <code className="text-sm text-muted-foreground font-mono">{code}</code>
                      </pre>
                    );
                  }
                  if (block.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2">
                        {block.split("\n").map((line, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/`(.*?)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-xs text-primary font-mono">$1</code>') }} />
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-sm text-muted-foreground leading-relaxed">{block}</p>;
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocsPage;
