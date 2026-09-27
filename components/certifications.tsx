"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react"

function AwsLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#232F3E" />
      <text
        x="32"
        y="26"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="19"
        letterSpacing="1"
      >
        aws
      </text>
      <path
        d="M18 42C26 47 38 47 46 42"
        stroke="#FF9900"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M42 38.5L47.5 42.5L41.5 45.5"
        stroke="#FF9900"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FF9900"
      />
    </svg>
  )
}

function GcpLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#1A202C" />
      {/* Official GCP 4-Color Cloud Shape */}
      <path
        d="M44 26.5C43.1 22.4 39.5 19.3 35.2 19.3c-3.5 0-6.5 2-8 4.9-3.6.4-6.4 3.4-6.4 7.1 0 4 3.3 7.2 7.3 7.2h23.8c3.3 0 6-2.7 6-6 0-3.1-2.4-5.7-5.5-5.9z"
        fill="#4285F4"
      />
      <path
        d="M35.2 19.3c-1.6 0-3.1.5-4.4 1.3l4.4 7.7c.4-.1.9-.2 1.4-.2 3.3 0 6 2.7 6 6 0 .5-.1 1-.2 1.5l4.3 2.9c1.1-1.2 1.8-2.9 1.8-4.8 0-3.1-2.4-5.7-5.5-5.9-1.2-3.6-4.5-6.5-9.1-6.5z"
        fill="#34A853"
      />
      <path
        d="M27.2 24.2C24.5 24.6 22.4 26.9 22.4 29.8c0 3.3 2.7 6 6 6h7.1v-6c0-1.6.6-3 1.7-4l-4.2-3.1z"
        fill="#FBBC05"
      />
      <path
        d="M35.2 19.3c-3.5 0-6.5 2-8 4.9l4.2 3.1c.8-1.3 2.2-2.1 3.8-2.1 1.6 0 3 .8 3.8 2.1l4.4-3c-1.9-3.2-5-5-8.2-5z"
        fill="#EA4335"
      />
    </svg>
  )
}

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services (AWS)",
      level: "Professional",
      badgeBg: "bg-amber-500/15 dark:bg-amber-500/25 text-amber-700 dark:text-amber-300 border-amber-500/40",
      borderColor: "hover:border-amber-500/50",
      accentColor: "text-amber-500",
      tag: "AWS",
      logo: AwsLogo,
    },
    {
      title: "GCP DevOps Engineer - Professional",
      issuer: "Google Cloud Platform (GCP)",
      level: "Professional",
      badgeBg: "bg-blue-500/15 dark:bg-blue-500/25 text-blue-700 dark:text-blue-300 border-blue-500/40",
      borderColor: "hover:border-blue-500/50",
      accentColor: "text-blue-500",
      tag: "GCP",
      logo: GcpLogo,
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      level: "Practitioner",
      badgeBg: "bg-orange-500/15 dark:bg-orange-500/25 text-orange-700 dark:text-orange-300 border-orange-500/40",
      borderColor: "hover:border-orange-500/50",
      accentColor: "text-orange-500",
      tag: "AWS AI",
      logo: AwsLogo,
    },
    {
      title: "GCP GEN-AI Leader",
      issuer: "Google Cloud Platform (GCP)",
      level: "Foundational",
      badgeBg: "bg-emerald-500/15 dark:bg-emerald-500/25 text-emerald-700 dark:text-emerald-300 border-emerald-500/40",
      borderColor: "hover:border-emerald-500/50",
      accentColor: "text-emerald-500",
      tag: "GCP AI",
      logo: GcpLogo,
    },
    {
      title: "GCP Cloud Digital Leader",
      issuer: "Google Cloud Platform (GCP)",
      level: "Digital Leader",
      badgeBg: "bg-sky-500/15 dark:bg-sky-500/25 text-sky-700 dark:text-sky-300 border-sky-500/40",
      borderColor: "hover:border-sky-500/50",
      accentColor: "text-sky-500",
      tag: "GCP",
      logo: GcpLogo,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Official{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <motion.a
            href="https://www.credly.com/users/prasad-thite/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary text-sm font-medium transition-all hover:shadow-md self-start md:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-4 h-4 text-primary" />
            View Badges on Credly
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, idx) => {
            const LogoComponent = cert.logo
            return (
              <motion.div key={idx} variants={itemVariants}>
                <motion.div
                  className={`relative h-full p-6 bg-card rounded-xl border border-border ${cert.borderColor} transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl`}
                  whileHover={{ y: -6 }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <LogoComponent className="w-9 h-9 flex-shrink-0 drop-shadow-sm" />
                        <span className={`px-2.5 py-0.5 text-xs font-extrabold rounded-md border ${cert.badgeBg}`}>
                          {cert.tag}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Verified
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <CheckCircle2 className={`w-4 h-4 ${cert.accentColor}`} />
                      {cert.level}
                    </span>
                    <span className="text-muted-foreground font-medium group-hover:text-primary transition-colors">
                      Credential Certified
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
