"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Cloud Transformation & Migration",
      description:
        "Architecting highly available infrastructure across AWS and GCP with zero-downtime lift-and-shift migrations.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Technical Leadership & SRE",
      description:
        "Mentoring teams, establishing SRE practices, and maintaining 99.9%+ production availability.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Standardizing environments with Terraform and AWS CDK, reducing provisioning times by 50%.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Enterprise CI/CD & Automation",
      description: "Building Jenkins, GitHub Actions & GitLab CI pipelines, reducing deployment times by 80%.",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "GenAI Automation",
      description: "Leveraging GenAI for automated IaC provisioning, cutting scripting time by 50% and MTTR by 40%.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Cost & Resource Optimization",
      description: "Optimizing cloud budgets, implementing Spot instances, and autoscaling to cut infrastructure costs by 50%.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated <span className="font-semibold text-foreground">DevOps Lead | SRE Specialist</span> with{" "}
              <span className="font-semibold text-foreground">11+ years</span> of IT experience and{" "}
              <span className="font-semibold text-foreground">7+ years</span> of core expertise in DevOps, Cloud, and SRE across AWS and GCP.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently at <span className="font-semibold text-foreground">Equifax</span>, I drive cloud transformation, SRE practices, high-availability architecture, and GenAI-assisted automation. Proven track record of architecting enterprise-scale CI/CD platforms, Kubernetes environments, and Infrastructure as Code (Terraform) while delivering 99.9%+ availability and 50%+ cost optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Equipped with certifications including <span className="font-semibold text-foreground">AWS Solutions Architect Professional</span> and <span className="font-semibold text-foreground">GCP DevOps Engineer Professional</span>, I focus on technical leadership, operational excellence, and engineering efficiency.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Pune, India", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "prasad.thite@outlook.com",
                  link: "mailto:prasad.thite@outlook.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Phone",
                  value: "+91 9518377512",
                  link: "tel:+919518377512",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                { label: "Experience", value: "11+ years", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
