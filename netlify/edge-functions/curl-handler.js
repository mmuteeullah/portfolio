// Netlify Edge Function to handle curl requests with ANSI colors
// Catppuccin Mocha color scheme - REDESIGNED

const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',

  // Catppuccin Mocha
  mauve: '\x1b[38;2;203;166;247m',
  red: '\x1b[38;2;243;139;168m',
  peach: '\x1b[38;2;250;179;135m',
  yellow: '\x1b[38;2;249;226;175m',
  green: '\x1b[38;2;166;227;161m',
  teal: '\x1b[38;2;148;226;213m',
  sky: '\x1b[38;2;137;220;235m',
  sapphire: '\x1b[38;2;116;199;236m',
  blue: '\x1b[38;2;137;180;250m',
  lavender: '\x1b[38;2;180;190;254m',
  text: '\x1b[38;2;205;214;244m',
  subtext: '\x1b[38;2;166;173;200m',
  overlay: '\x1b[38;2;108;112;134m',
  surface: '\x1b[38;2;49;50;68m',
};

const c = COLORS;

// ASCII Logo options - uncomment the one you want to use

// Option 1: Catppuccin block style
const ASCII_LOGO_BLOCK = `${c.mauve}
 ███╗   ███╗██╗   ██╗████████╗███████╗███████╗██╗   ██╗██╗     ██╗      █████╗ ██╗  ██╗
 ████╗ ████║██║   ██║╚══██╔══╝██╔════╝██╔════╝██║   ██║██║     ██║     ██╔══██╗██║  ██║
 ██╔████╔██║██║   ██║   ██║   █████╗  █████╗  ██║   ██║██║     ██║     ███████║███████║
 ██║╚██╔╝██║██║   ██║   ██║   ██╔══╝  ██╔══╝  ██║   ██║██║     ██║     ██╔══██║██╔══██║
 ██║ ╚═╝ ██║╚██████╔╝   ██║   ███████╗███████╗╚██████╔╝███████╗███████╗██║  ██║██║  ██║
 ╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
${c.reset}`;

// Option 2: Slanted style
const ASCII_LOGO_SLANT = `${c.mauve}${c.bold}
    __  ___      __            ____      __
   /  |/  /_  __/ /____  ___  / / /___ _/ /_
  / /|_/ / / / / __/ _ \\/ _ \\/ / / __ \`/ __ \\
 / /  / / /_/ / /_/  __/  __/ / / /_/ / / / /
/_/  /_/\\__,_/\\__/\\___/\\___/_/_/\\__,_/_/ /_/
${c.reset}`;

// Option 3: No banner
// const ASCII_LOGO = ``;

// Currently using: Catppuccin block style
const ASCII_LOGO = ASCII_LOGO_BLOCK;

function mainPage() {
  return `
${ASCII_LOGO}

${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}Mohammed Muteeullah${c.reset}  ${c.overlay}///${c.reset}  ${c.sapphire}Senior Site Reliability Engineer${c.reset}  ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.green}●${c.reset} ${c.text}Self-driven SRE with ${c.yellow}${c.bold}5+ years${c.reset}${c.text} of hands-on experience${c.reset}
   ${c.green}●${c.reset} ${c.text}Cloud infrastructure expert: ${c.sapphire}AWS${c.reset} ${c.overlay}+${c.reset} ${c.sapphire}GCP${c.reset}
   ${c.green}●${c.reset} ${c.text}Saved companies ${c.yellow}${c.bold}$100K+${c.reset}${c.text} annually through optimization${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

${c.teal}   [${c.reset} ${c.bold}CONTACT${c.reset} ${c.teal}]${c.reset}
   ${c.overlay}├─${c.reset} ${c.sapphire}Email${c.reset}      ${c.text}muteeullah.shaikh@gmail.com${c.reset}
   ${c.overlay}├─${c.reset} ${c.sapphire}LinkedIn${c.reset}   ${c.text}linkedin.com/in/muteeullah${c.reset}
   ${c.overlay}├─${c.reset} ${c.sapphire}GitHub${c.reset}     ${c.text}github.com/mmuteeullah${c.reset}
   ${c.overlay}└─${c.reset} ${c.sapphire}Location${c.reset}   ${c.text}Mumbai, India${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

${c.peach}   [${c.reset} ${c.bold}KEY ACHIEVEMENTS${c.reset} ${c.peach}]${c.reset}
   ${c.yellow}▸${c.reset} ${c.green}Cost Optimization${c.reset}     ${c.overlay}│${c.reset}  Saved $90K at Vimeo, $18K/mo at Media.net
   ${c.yellow}▸${c.reset} ${c.green}Zero Downtime${c.reset}         ${c.overlay}│${c.reset}  Cloud↔On-prem & AWS→GCP migrations
   ${c.yellow}▸${c.reset} ${c.green}Infrastructure${c.reset}        ${c.overlay}│${c.reset}  Terraform, K8s, Prometheus, Argo
   ${c.yellow}▸${c.reset} ${c.green}Incident Response${c.reset}     ${c.overlay}│${c.reset}  Reduced PagerDuty alerts to zero

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

${c.mauve}   [${c.reset} ${c.bold}EXPLORE MORE${c.reset} ${c.mauve}]${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/about${c.reset}        ${c.dim}→ About me${c.reset}
   ${c.green}${c.bold}curl muteeullah.b0lt.foo/experience${c.reset}   ${c.dim}→ Work history & projects${c.reset}
   ${c.green}${c.bold}curl muteeullah.b0lt.foo/skills${c.reset}       ${c.dim}→ Technical expertise${c.reset}
   ${c.green}${c.bold}curl muteeullah.b0lt.foo/education${c.reset}    ${c.dim}→ Academic background${c.reset}
   ${c.green}${c.bold}curl muteeullah.b0lt.foo/certs${c.reset}        ${c.dim}→ Certifications${c.reset}
   ${c.green}${c.bold}curl muteeullah.b0lt.foo/contact${c.reset}      ${c.dim}→ Get in touch${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.dim}${c.italic}💡 Visit ${c.sapphire}https://muteeullah.b0lt.foo${c.reset}${c.dim}${c.italic} for interactive terminal${c.reset}

`;
}

function aboutPage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}ABOUT${c.reset} ${c.overlay}::${c.reset} ${c.text}Mohammed Muteeullah${c.reset}                                       ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.yellow}${c.bold}Senior Site Reliability Engineer${c.reset}
   ${c.overlay}Mumbai, India${c.reset}

   ${c.text}Self-driven SRE with ${c.yellow}${c.bold}5+ years${c.reset}${c.text} of hands-on experience in AWS and GCP.
   Passionate about designing, implementing, and automating cloud and
   on-premises infrastructure at scale.${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

${c.green}   [${c.reset} ${c.bold}SPECIALIZATIONS${c.reset} ${c.green}]${c.reset}

   ${c.sapphire}${c.bold}💰 Cost Optimization${c.reset}
      ${c.text}Proven track record saving ${c.yellow}$100K+ annually${c.reset}${c.text} through strategic
      cloud cost analysis, resource right-sizing, and automation${c.reset}

   ${c.sapphire}${c.bold}☁️  Multi-Cloud Architecture${c.reset}
      ${c.text}Expert in ${c.blue}AWS${c.reset}${c.text} & ${c.blue}GCP${c.reset}${c.text} migrations, multi-region deployments,
      and hybrid cloud infrastructure design${c.reset}

   ${c.sapphire}${c.bold}🔧 Infrastructure as Code${c.reset}
      ${c.text}Terraform, Ansible, Kubernetes orchestration, GitOps workflows,
      and automated deployment pipelines${c.reset}

   ${c.sapphire}${c.bold}📊 Observability & SRE${c.reset}
      ${c.text}Prometheus, Grafana, SLO/SLA management, incident response,
      and proactive monitoring strategies${c.reset}

   ${c.sapphire}${c.bold}🚀 Zero-Downtime Operations${c.reset}
      ${c.text}Seamless migrations, blue-green deployments, disaster recovery,
      and high-availability system design${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/experience${c.reset}   ${c.dim}→ See my work history${c.reset}
   ${c.green}${c.bold}curl muteeullah.b0lt.foo/skills${c.reset}       ${c.dim}→ Technical skills${c.reset}

`;
}

function experiencePage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}WORK EXPERIENCE${c.reset} ${c.overlay}::${c.reset} ${c.text}Projects & Impact${c.reset}                             ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

${c.mauve}   ▰▰▰${c.reset} ${c.bold}Vimeo${c.reset}
   ${c.blue}${c.bold}Senior Site Reliability Engineer${c.reset}
   ${c.yellow}01/2025 – Present${c.reset} ${c.overlay}│${c.reset} ${c.dim}Remote, India${c.reset}

   ${c.green}✓${c.reset} Enhanced system stability through proactive monitoring & maintenance
   ${c.green}✓${c.reset} Strengthened security with GCP service integration & API management
   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Saved ~$90,000 annually${c.reset} via strategic cost optimization
   ${c.green}✓${c.reset} Accelerated development by resolving critical integration issues

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

${c.mauve}   ▰▰▰${c.reset} ${c.bold}Media.net${c.reset}
   ${c.blue}${c.bold}Senior Site Reliability Engineer${c.reset}
   ${c.yellow}01/2024 – 12/2024${c.reset} ${c.overlay}│${c.reset} ${c.dim}Mumbai, India${c.reset}

   ${c.green}✓${c.reset} Migrated from Cloud to On-prem with ${c.yellow}${c.bold}zero downtime${c.reset}
   ${c.green}✓${c.reset} Built cost analysis dashboards for cloud optimization
   ${c.green}✓${c.reset} Audited K8s workloads to reduce GKE unallocated costs

   ${c.blue}${c.bold}Site Reliability Engineer - 2${c.reset}
   ${c.yellow}01/2022 – 12/2023${c.reset} ${c.overlay}│${c.reset} ${c.dim}Mumbai, India${c.reset}

   ${c.green}✓${c.reset} Planned & executed ${c.yellow}${c.bold}AWS → GCP migration${c.reset}
   ${c.green}✓${c.reset} Migrated Spark workloads with significant cost savings
   ${c.green}✓${c.reset} PoC: Argo Workflows + K8s + Spark for better bin packing
   ${c.green}✓${c.reset} Automated Jupyter Notebook scheduling (Netflix-inspired)
   ${c.green}✓${c.reset} Migrated from Mesos orchestration to GKE

   ${c.blue}${c.bold}Site Reliability Engineer${c.reset}
   ${c.yellow}09/2019 – 12/2021${c.reset} ${c.overlay}│${c.reset} ${c.dim}Bengaluru, India${c.reset}

   ${c.green}✓${c.reset} Architected HA infrastructure on AWS & on-prem
   ${c.green}✓${c.reset} Managed Spark 2.4 & PySpark 3.0 for large-scale processing
   ${c.green}✓${c.reset} Containerized legacy infra with ${c.yellow}${c.bold}zero downtime${c.reset}
   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Reduced costs by $18K/month${c.reset} through optimization
   ${c.green}✓${c.reset} Recovered production DB during disaster & created DR plan
   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Reduced PagerDuty to zero${c.reset} in first 4 months

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.dim}💡 Total cost savings: ${c.yellow}${c.bold}$100K+ annually${c.reset}${c.dim} across all roles${c.reset}

`;
}

function skillsPage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}TECHNICAL SKILLS${c.reset} ${c.overlay}::${c.reset} ${c.text}Tools & Technologies${c.reset}                        ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.teal}[${c.reset} ${c.bold}Cloud Platforms${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} AWS    ${c.sapphire}▸${c.reset} GCP

   ${c.teal}[${c.reset} ${c.bold}Infrastructure as Code${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} Terraform    ${c.sapphire}▸${c.reset} Ansible

   ${c.teal}[${c.reset} ${c.bold}Container Orchestration${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} Kubernetes    ${c.sapphire}▸${c.reset} Nomad    ${c.sapphire}▸${c.reset} Mesos

   ${c.teal}[${c.reset} ${c.bold}Databases${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} MongoDB    ${c.sapphire}▸${c.reset} PostgreSQL

   ${c.teal}[${c.reset} ${c.bold}Monitoring & Observability${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} Prometheus    ${c.sapphire}▸${c.reset} Grafana

   ${c.teal}[${c.reset} ${c.bold}Programming Languages${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} Python    ${c.sapphire}▸${c.reset} Bash    ${c.sapphire}▸${c.reset} Go

   ${c.teal}[${c.reset} ${c.bold}CI/CD & Automation${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} Argo Workflows    ${c.sapphire}▸${c.reset} GitLab CI    ${c.sapphire}▸${c.reset} Jenkins

   ${c.teal}[${c.reset} ${c.bold}Big Data${c.reset} ${c.teal}]${c.reset}
   ${c.sapphire}▸${c.reset} Apache Spark    ${c.sapphire}▸${c.reset} PySpark

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.dim}${c.italic}💡 Jack of all trades, master of ${c.yellow}infrastructure automation${c.reset}

`;
}

function educationPage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}EDUCATION${c.reset} ${c.overlay}::${c.reset} ${c.text}Academic Background${c.reset}                                   ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.yellow}${c.bold}🎓 Bachelor of Engineering (B.E.) - Computer Engineering${c.reset}

   ${c.sapphire}${c.bold}Mumbai University${c.reset}
   ${c.overlay}2013 – 2019 │ Mumbai, India${c.reset}

   ${c.text}Foundation in computer science, software engineering, and
   systems architecture that led to a career in Site Reliability
   Engineering and cloud infrastructure.${c.reset}

`;
}

function certsPage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}CERTIFICATIONS${c.reset} ${c.overlay}::${c.reset} ${c.text}Professional Credentials${c.reset}                        ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Architecting with GCP Specialisation${c.reset}
     ${c.sapphire}Coursera${c.reset} ${c.overlay}• 2019${c.reset}

   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Advance Penetration Testing${c.reset}
     ${c.sapphire}CYBRARY${c.reset} ${c.overlay}• 2019${c.reset}

   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Pre Security Learning Path${c.reset}
     ${c.sapphire}Try Hack Me${c.reset} ${c.overlay}• 2021${c.reset}

   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Certified Information Security and Ethical Hacker${c.reset}
     ${c.sapphire}Pristine InfoSolutions${c.reset} ${c.overlay}• 2017${c.reset}

   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Certified Pentesting Expert${c.reset}
     ${c.sapphire}Pristine InfoSolutions${c.reset} ${c.overlay}• 2017${c.reset}

   ${c.green}✓${c.reset} ${c.yellow}${c.bold}Oracle Certified Professional Java Programmer SE 6${c.reset}
     ${c.sapphire}Oracle${c.reset} ${c.overlay}• 2015${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.dim}${c.italic}💡 Combining SRE expertise with security knowledge${c.reset}

`;
}

function contactPage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}CONTACT${c.reset} ${c.overlay}::${c.reset} ${c.text}Let's Connect${c.reset}                                          ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.text}I'm always interested in discussing:${c.reset}
   ${c.green}•${c.reset} SRE opportunities and collaborations
   ${c.green}•${c.reset} Cloud infrastructure challenges
   ${c.green}•${c.reset} Cost optimization strategies
   ${c.green}•${c.reset} DevOps best practices

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.sapphire}${c.bold}📧 Email${c.reset}
      ${c.text}muteeullah.shaikh@gmail.com${c.reset}

   ${c.sapphire}${c.bold}💼 LinkedIn${c.reset}
      ${c.text}linkedin.com/in/muteeullah${c.reset}

   ${c.sapphire}${c.bold}🐙 GitHub${c.reset}
      ${c.text}github.com/mmuteeullah${c.reset}

   ${c.sapphire}${c.bold}📍 Location${c.reset}
      ${c.text}Mumbai, India${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.dim}${c.italic}💡 Feel free to reach out for opportunities or just to chat about SRE!${c.reset}

`;
}

function helpPage() {
  return `
${c.blue}╭────────────────────────────────────────────────────────────────────────╮${c.reset}
${c.blue}│${c.reset}  ${c.peach}${c.bold}HELP${c.reset} ${c.overlay}::${c.reset} ${c.text}Available Endpoints${c.reset}                                        ${c.blue}│${c.reset}
${c.blue}╰────────────────────────────────────────────────────────────────────────╯${c.reset}

   ${c.mauve}[${c.reset} ${c.bold}ENDPOINTS${c.reset} ${c.mauve}]${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Main page with overview and key achievements${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/about${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Detailed about me, specializations, and expertise${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/experience${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Complete work history with projects and impact${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/skills${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Technical skills and tools I work with${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/education${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Academic background and qualifications${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/certs${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Professional certifications and credentials${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/contact${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}Get in touch - email, LinkedIn, GitHub${c.reset}

   ${c.green}${c.bold}curl muteeullah.b0lt.foo/help${c.reset}
   ${c.overlay}└─${c.reset} ${c.dim}This help message${c.reset}

${c.overlay}   ─────────────────────────────────────────────────────────────────────${c.reset}

   ${c.mauve}[${c.reset} ${c.bold}INTERACTIVE VERSION${c.reset} ${c.mauve}]${c.reset}

   ${c.dim}${c.italic}Want a full terminal experience? Visit in your browser:${c.reset}
   ${c.sapphire}${c.bold}https://muteeullah.b0lt.foo${c.reset}

   ${c.dim}${c.italic}Try commands like: ${c.green}help${c.reset}${c.dim}${c.italic}, ${c.green}experience${c.reset}${c.dim}${c.italic}, ${c.green}skills${c.reset}${c.dim}${c.italic}, ${c.green}matrix${c.reset}${c.dim}${c.italic}, ${c.green}coffee${c.reset}

`;
}

export default async (request, context) => {
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';

  // Check if request is from curl, wget, or similar CLI tools
  const isCLI = /curl|wget|httpie|fetch/i.test(userAgent);

  if (!isCLI) {
    // Not a CLI request, let it pass through to the static site
    return;
  }

  // Handle curl requests with ANSI colors
  const path = url.pathname;

  let content;
  switch (path) {
    case '/':
      content = mainPage();
      break;
    case '/about':
      content = aboutPage();
      break;
    case '/experience':
      content = experiencePage();
      break;
    case '/skills':
      content = skillsPage();
      break;
    case '/education':
      content = educationPage();
      break;
    case '/certs':
    case '/certifications':
      content = certsPage();
      break;
    case '/contact':
      content = contactPage();
      break;
    case '/help':
      content = helpPage();
      break;
    default:
      content = `${c.red}${c.bold}404 - Not Found${c.reset}\n\n${c.text}The endpoint ${c.yellow}'${path}'${c.reset}${c.text} doesn't exist.${c.reset}\n\nTry: ${c.green}${c.bold}curl muteeullah.b0lt.foo/help${c.reset}\n`;
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

export const config = {
  path: "/*",
};
