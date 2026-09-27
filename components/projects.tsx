"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const projects = [
    {
      title: "File Mover GCP Migration & Modernization",
      description: "Led cloud migration and modernization of the File Mover application on GCP with Dataflow workflows.",
      highlights: [
        "Led the cloud migration and modernization of the File Mover application on Google Cloud Platform.",
        "Containerized and deployed the application on Google Compute Engine (GCE) using Docker.",
        "Designed and managed Dataflow jobs for scalable data processing and file movement workflows.",
        "Automated infrastructure provisioning and improved operational efficiency, scalability, and maintainability."
      ],
      technologies: ["GCP", "GCE", "Docker", "Dataflow", "Terraform"],
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Altair Workbench Windows Application Cloud Migration",
      description: "Migrated legacy Windows-based application to Google Cloud Platform using lift-and-shift approach with GCE and Terraform.",
      highlights: [
        "Migrated a legacy Windows-based application from on-premises infrastructure to Google Cloud Platform (GCP) using a lift-and-shift approach.",
        "Provisioned and configured Windows Server workloads on Google Compute Engine (GCE) to replicate the existing application environment.",
        "Automated cloud infrastructure provisioning and configuration using Terraform.",
        "Improved infrastructure scalability, availability, and operational flexibility while reducing dependency on legacy on-premises infrastructure."
      ],
      technologies: ["GCP", "GCE", "Windows Server", "Terraform"],
      gradient: "from-teal-600 to-emerald-600",
    },
    {
      title: "GenAI-Assisted IaC Automation",
      description: "Established GenAI adoption strategy for Terraform provisioning & automated resolution, cutting scripting time by 50% and MTTR by 40%.",
      highlights: [
        "Established GenAI adoption strategy for Terraform provisioning and automated resolution of IaC issues.",
        "Achieved 50% reduction in scripting time and 40% improvement in Mean Time to Resolution (MTTR) through AI assistance.",
        "Implemented best practices for prompt engineering and GenAI usage in IaC development and maintenance."
      ],
      technologies: ["Github Copilot", "Gemini", "Notebooklm", "GenAI"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "EKS Transformation",
      description: "Redesigned infrastructure to a multi-tenant Amazon EKS architecture with automated provisioning.",
      highlights: [
        "Migrated IaC from AWS CDK (Python) to Terraform with modular components.",
        "Redesigned platform to a multi-tenant Amazon EKS architecture.",
        "Implemented tenant isolation and automated provisioning.",
        "Optimized resource utilization and reduced management overhead."
      ],
      technologies: ["AWS", "Terraform", "EKS", "Kubernetes", "Helm"],
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "AWS Transit Gateway & VPC Architecture",
      description: "Implemented secure multi-account AWS networking architecture with Transit Gateway, VPC peering, Route53, and IAM security policies.",
      highlights: [
        "Implemented secure multi-account AWS networking architecture with Transit Gateway, VPC peering, Route53, and IAM security policies.",
        "Established best practices for network segmentation, traffic flow optimization, and security group management.",
        "Reduced operational complexity and improved security posture across multiple AWS accounts."
      ],
      technologies: ["AWS Transit Gateway", "VPC", "IAM", "Route53", "Terraform"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Enterprise Multi-Cloud CI/CD Pipeline",
      description: "Designed enterprise-scale automated deployment pipelines enabling multi-stage releases and 80% reduction in deployment time.",
      highlights: [
        "Designed enterprise-scale automated deployment pipelines enabling multi-stage releases and 80% reduction in deployment time.",
        "Architected containerized workflows using Docker and orchestrations with Kubernetes for application deployments",
        "Implemented CI/CD pipelines using Jenkins, GitHub Actions, and SonarQube for automated code quality and security testing"
      ],
      technologies: ["Jenkins", "GitHub Actions", "Kubernetes", "Docker", "SonarQube"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Multi-Tenant Kubernetes HPA Implementation",
      description: "Implemented Horizontal Pod Autoscaling (HPA) across a multi-tenant Kubernetes architecture for dynamic workload scaling.",
      highlights: [
        "Implemented Horizontal Pod Autoscaling (HPA) across a multi-tenant Kubernetes architecture to dynamically scale workloads based on resource utilization.",
        "Configured tenant-specific scaling policies and resource requests/limits to ensure efficient workload management.",
        "Integrated HPA configuration into Helm-based deployments for consistent and automated tenant provisioning.",
        "Improved application scalability and resource utilization while reducing manual intervention during workload fluctuations."
      ],
      technologies: ["Kubernetes", "HPA", "Helm", "AWS EKS", "Terraform"],
      gradient: "from-amber-600 to-orange-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Enterprise{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} className="h-full">
              <div className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden flex flex-col justify-between">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                        <Building2 className="w-3.5 h-3.5" />
                        Enterprise
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">{project.title}</h3>

                    {project.highlights ? (
                      <ul className="space-y-1.5 mb-4 text-xs text-muted-foreground">
                        {project.highlights.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-2.5 py-1 bg-slate-100 text-slate-800 dark:bg-slate-800/90 dark:text-slate-100 text-xs rounded-md font-semibold border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
