import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  badgeColor?: "primary" | "secondary" | "accent";
  highlightColor?: "primary" | "secondary" | "accent";
}

const colorMap = {
  primary: {
    badge: "border-primary/30 bg-primary/10 text-primary",
    gradient: "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary",
  },
  secondary: {
    badge: "border-secondary/30 bg-secondary/10 text-secondary",
    gradient: "bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary",
  },
  accent: {
    badge: "border-accent/30 bg-accent/10 text-accent",
    gradient: "bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent",
  },
};

const SectionHeading = ({ badge, title, highlight, description, badgeColor = "primary", highlightColor = "primary" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {badge && (
        <span className={`inline-block mb-4 rounded-full border px-4 py-1.5 text-xs font-medium ${colorMap[badgeColor].badge}`}>
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className={colorMap[highlightColor].gradient}>{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
