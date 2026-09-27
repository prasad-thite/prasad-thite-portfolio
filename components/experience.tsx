"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "DevOps Lead | SRE Specialist",
      company: "Equifax",
      period: "08/2025 – Present",
      location: "Pune",
      highlights: [
        "Established GenAI adoption strategy that reduced mean time to resolution by 40% and cut scripting time by 50% through AI-assisted automation.",
        "Led cloud migration using lift-and-shift, ensuring minimal downtime and seamless transition while collaborating with cross-functional teams for operational continuity.",
        "Improved production availability to 99.9%+ through monitored HA architecture, proactive monitoring, automated recovery, capacity planning, and SRE practices.",
        "Budgeted and optimized cloud infrastructure resources across environments, balancing performance, availability, and cost while driving cloud modernization initiatives.",
        "Led the design and implementation of enterprise-scale CI/CD pipelines using Jenkins, GitHub, Terraform, and Kubernetes, reducing deployment time by 80% while enabling multiple production releases per day.",
        "Architected and managed highly available cloud infrastructure on GCP using Infrastructure as Code (Terraform), implementing reusable modules, automated provisioning, and disaster recovery strategies across multiple environments.",
      ],
    },
    {
      title: "Senior DevOps Engineer",
      company: "Infogain",
      period: "11/2023 – 07/2025",
      location: "Remote",
      highlights: [
        "Applied GenAI for infrastructure provisioning with Terraform, accelerating deployment processes and reducing provisioning time by 50% through automation with Jenkins.",
        "Adopted AWS Transit Gateway for a scalable and secure networking architecture across multiple AWS accounts, and configured services such as VPC, IAM, and Route53.",
        "Reduced infrastructure expenses by 50% through AWS EC2 Spot Instances for QA/Dev environments and improved resource utilization by 30% with Kubernetes horizontal pod autoscaling.",
        "Migrated from AWS CDK to Terraform, enhancing update processes by 30% and standardizing configurations for consistent deployments with Terraform-based IaC.",
        "Ensured code quality and compliance by implementing automated security scans with SonarQube via GitLab CI and maintaining high availability with Docker and Kubernetes (EKS).",
        "Prepared for disaster recovery with systematized RDS and EFS backups, ensuring business continuity while integrating artifact repositories using Artifactory.",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Precision Techserve Pvt. Ltd.",
      period: "01/2021 – 10/2023",
      location: "Pune",
      highlights: [
        "Upgraded automation frameworks and IaC modules to standardize infrastructure provisioning and reduce manual intervention.",
        "Reviewed AWS networking configurations to ensure secure and optimized connectivity across VPCs, VPN, subnets, routing tables, NAT gateways, and security groups.",
        "Boosted deployment efficiency by 30%, facilitating DevOps support across projects, enhancing integration and delivery processes.",
        "Mentored team members in configuring SQL, MySQL, DynamoDB, and RDBMS databases within RDS service.",
        "Participated in troubleshooting sessions, resolving over 25 technical issues weekly to meet project timelines.",
        "Enforced security best practices to maintain data integrity and confidentiality across environments.",
      ],
    },
    {
      title: "Onsite Support Technician",
      company: "Quess Corp Limited",
      period: "06/2019 – 01/2021",
      location: "Pune",
      highlights: [
        "Gained practical experience in deployment workflows by participating in DevOps tasks such as release coordination, environment provisioning, and basic automation.",
        "Documented and logged the AWS network architecture, detailing VPC design, subnet configurations, routing policies, and security measures.",
        "Systematized AWS infrastructure (EC2, S3, VPC, Lambda) using Terraform for IaC.",
        "Handled and logged 150+ IaaS support tickets monthly for a diverse range of systems and software.",
      ],
    },
    {
      title: "Printer Engineer",
      company: "Aforeserve.com Ltd",
      period: "01/2019 – 05/2019",
      location: "Pune",
      highlights: [
        "Reduced setup time by 30% by efficiently assisting 50 clients with remote printer installations.",
        "Enhanced branch operations by 20% through comprehensive tech support via phone and computer.",
        "Provided prompt troubleshooting assistance.",
      ],
    },
    {
      title: "Customer Support Engineer",
      company: "Aforeserve.com Ltd",
      period: "05/2018 – 12/2018",
      location: "Pune",
      highlights: [
        "Conducted maintenance over 50 hardware and software components monthly, ensuring optimal project operation.",
        "Handled over 100+ customer tickets monthly, ensuring timely resolution and support.",
        "Managed and developed 10+ product support guides, contributed overseeing content accuracy and update frequency.",
        "Achieved 50% reduction in complaint resolutions by streamlining ticket categorization processes.",
      ],
    },
    {
      title: "System Administrator",
      company: "Adsul's Technical Campus",
      period: "10/2015 – 05/2018",
      location: "Ahmednagar",
      highlights: [
        "Setup of various OS like Windows, Unix, Debian, Ubuntu, CentOS, RedHat.",
        "Improved online exam support efficiency by 30% by orchestrating technical assistance strategies.",
        "Set up and maintained LAN and DNS for 200 PCs, enhancing lab connectivity and performance.",
        "Increased hardware repair efficiency by 20% by servicing 50 computer units, reducing downtime.",
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
