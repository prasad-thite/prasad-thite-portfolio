import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
PRASAD THITE
DevOps Lead
Prasad.Thite@Outlook.com | +91-9518-377-512 | Pune, India
LinkedIn: https://www.linkedin.com/in/prasad-thite
Credly: https://www.credly.com/users/prasad-thite/badges#credly

SUMMARY
DevOps Lead | SRE with 11+ years of IT experience and 7+ years of expertise in DevOps, Cloud, and SRE. Proven track record of leading cloud transformation, platform modernization, and DevOps initiatives across AWS and GCP. Experienced in architecting highly available infrastructure, enterprise-scale CI/CD platforms, Kubernetes environments, Infrastructure as Code, observability, and automated operations. Strong focus on improving reliability, optimizing cloud costs, accelerating software delivery, and driving operational excellence.

EXPERIENCE

DevOps Lead | SRE Specialist
Equifax | 08/2025 – Present | Pune
• Established GenAI adoption strategy that reduced mean time to resolution by 40% and cut scripting time by 50% through AI-assisted automation.
• Led cloud migration using lift-and-shift, ensuring minimal downtime and seamless transition while collaborating with cross-functional teams for operational continuity.
• Improved production availability to 99.9%+ through monitored HA architecture, proactive monitoring, automated recovery, capacity planning, and SRE practices.
• Budgeted and optimized cloud infrastructure resources across environments, balancing performance, availability, and cost while driving cloud modernization initiatives.
• Led the design and implementation of enterprise-scale CI/CD pipelines using Jenkins, GitHub, Terraform, and Kubernetes, reducing deployment time by 80% while enabling multiple production releases per day.
• Architected and managed highly available cloud infrastructure on GCP using Infrastructure as Code (Terraform), implementing reusable modules, automated provisioning, and disaster recovery strategies across multiple environments.

Senior DevOps Engineer
Infogain | 11/2023 – 07/2025 | Remote
• Applied GenAI for infrastructure provisioning with Terraform, accelerating deployment processes and reducing provisioning time by 50% through automation with Jenkins.
• Adopted AWS Transit Gateway for a scalable and secure networking architecture across multiple AWS accounts, and configured services such as VPC, IAM, and Route53 for secure solutions.
• Reduced infrastructure expenses by 50% through AWS EC2 Spot Instances for QA and Development environments and improved resource utilization by 30% with Kubernetes horizontal pod autoscaling.
• Migrated from AWS CDK to Terraform, enhancing update processes by 30% and standardizing configurations for consistent deployments with Terraform-based IaC.
• Ensured code quality and compliance by implementing automated security scans with SonarQube via GitLab CI and maintaining high availability with Docker and Kubernetes (EKS).
• Prepared for disaster recovery with systematized RDS and EFS backups, ensuring business continuity while integrating artifact repositories using Artifactory.

DevOps Engineer
Precision Techserve Pvt. Ltd., Pune | 01/2021 – 10/2023 | Pune
• Upgraded automation frameworks and IaC modules to standardize infrastructure provisioning and reduce manual intervention.
• Reviewed AWS networking configurations to ensure secure and optimized connectivity across VPCs, VPN, subnets, routing tables, NAT gateways, and security groups.
• Boosted deployment efficiency by 30%, facilitating DevOps support across projects, enhancing integration and delivery processes.
• Mentored team members in configuring SQL, MySQL, DynamoDB, and RDBMS databases within RDS service.
• Participated in troubleshooting sessions, resolving over 25 technical issues weekly to meet project timelines.
• Enforced security best practices to maintain data integrity and confidentiality across environments.

Onsite Support Technician
Quess Corp Limited | 06/2019 – 01/2021 | Pune
• Gained practical experience in deployment workflows by participating in DevOps tasks such as release coordination, environment provisioning, and basic automation.
• Documented and logged the AWS network architecture, detailing VPC design, subnet configurations, routing policies, and security measures.
• Systematized AWS infrastructure (EC2, S3, VPC, Lambda) using Terraform for IaC.
• Handled and logged 150+ IaaS support tickets monthly for a diverse range of systems and software.

Printer Engineer
Aforeserve.com Ltd | 01/2019 – 05/2019 | Pune
• Reduced setup time by 30% by efficiently assisting 50 clients with remote printer installations.
• Enhanced branch operations by 20% through comprehensive tech support via phone and computer.

Customer Support Engineer
Aforeserve.com Ltd | 05/2018 – 12/2018 | Pune
• Conducted maintenance over 50 hardware and software components monthly.
• Handled 100+ customer tickets monthly and achieved 50% reduction in complaint resolution time.

System Administrator
Adsul's Technical Campus | 10/2015 – 05/2018 | Ahmednagar
• Setup OS (Windows, Unix, Debian, Ubuntu, CentOS, RedHat), maintained LAN/DNS for 200 PCs.

CERTIFICATIONS
• AWS Certified Solutions Architect - Professional
• GCP DevOps Engineer - Professional
• AWS Certified AI Practitioner
• GCP GEN-AI Leader
• GCP Cloud Digital Leader

SKILLS
Cloud Platforms: AWS, GCP
AI Tools: GitHub Copilot, Gemini, NotebookLM, Amazon Q, Ollama
Infrastructure Tools: Terraform, Backstage Stack builder, Saviynt, Ansible, CloudFormation
Development: Jenkins, Git, Docker, Kubernetes, AWS CodePipeline, GitLab CI, GitHub Actions, Linux, Jira, Confluence
Databases: RDS, MySQL, Redis, DynamoDB
Observability: GCP Log Explorer, CloudTrail, CloudWatch, NewRelic, Prometheus, Grafana
Scripting: Python, Bash, Shell Scripting, JSON, YAML, Groovy

AWARDS
• Spot Award Winner (Infogain - Dec-2023)
• Star of the Month (Infogain - Jan-2024)
• Appreciation from Client (Infogain - Mar-2024)

EDUCATION
• Bachelor of Computer Application (01/2019 - 01/2022) - Yashwantrao Chavan Open University
• Diploma in Computer Hardware and Networking (03/2015 - 04/2016) - Kohinoor Technical Institute

LANGUAGES
English (Proficient), Hindi (Proficient), Marathi (Native)
    `

    // Create a simple text-based response that can be downloaded as a file
    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Prasad_Thite_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
