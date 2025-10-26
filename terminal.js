// Terminal Emulator for Mohammed Muteeullah's Portfolio
// Catppuccin Mocha themed terminal

const ASCII_BANNER = `
 ███╗   ███╗██╗   ██╗████████╗███████╗███████╗██╗   ██╗██╗     ██╗      █████╗ ██╗  ██╗
 ████╗ ████║██║   ██║╚══██╔══╝██╔════╝██╔════╝██║   ██║██║     ██║     ██╔══██╗██║  ██║
 ██╔████╔██║██║   ██║   ██║   █████╗  █████╗  ██║   ██║██║     ██║     ███████║███████║
 ██║╚██╔╝██║██║   ██║   ██║   ██╔══╝  ██╔══╝  ██║   ██║██║     ██║     ██╔══██║██╔══██║
 ██║ ╚═╝ ██║╚██████╔╝   ██║   ███████╗███████╗╚██████╔╝███████╗███████╗██║  ██║██║  ██║
 ╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`;

class Terminal {
    constructor() {
        this.output = document.getElementById('output');
        this.input = document.getElementById('terminal-input');
        this.terminalBody = document.getElementById('terminal-output');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.startTime = Date.now();

        this.init();
    }

    init() {
        this.printWelcome();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleCommand(this.input.value.trim());
                this.input.value = '';
                this.historyIndex = -1;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autocomplete();
            } else if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.clear();
            } else if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                this.print(`<span class="error">^C</span>`);
                this.input.value = '';
            }
        });

        // Keep input focused
        document.addEventListener('click', () => this.input.focus());
    }

    printWelcome() {
        this.print(`<div class="ascii-art">${ASCII_BANNER}</div>`);
        this.print(`<span class="info">Senior Site Reliability Engineer</span>`);
        this.print(`<span class="muted">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>`);
        this.print(`Welcome to my portfolio! Type <span class="command">help</span> to see available commands.`);
        this.print(`Or try: <span class="command">about</span>, <span class="command">experience</span>, <span class="command">skills</span>, <span class="command">contact</span>`);
        this.print(`\nTip: Use <span class="highlight">↑↓</span> for command history, <span class="highlight">Tab</span> for autocomplete, <span class="highlight">Ctrl+L</span> to clear`);
        this.print('');
    }

    handleCommand(input) {
        if (!input) return;

        this.print(`<span class="terminal-prompt"><span class="user">guest</span><span class="at">@</span><span class="host">muteeullah</span> <span class="path">~</span> <span class="symbol">$</span></span> ${input}`);
        this.commandHistory.unshift(input);

        const [cmd, ...args] = input.split(' ');
        const command = cmd.toLowerCase();

        const commands = {
            'help': () => this.help(),
            'about': () => this.about(),
            'whoami': () => this.whoami(),
            'experience': () => this.experience(),
            'work': () => this.experience(),
            'skills': () => this.skills(),
            'education': () => this.education(),
            'certs': () => this.certifications(),
            'certifications': () => this.certifications(),
            'contact': () => this.contact(),
            'resume': () => this.resume(),
            'download': () => this.download(),
            'github': () => this.github(),
            'linkedin': () => this.linkedin(),
            'clear': () => this.clear(),
            'cls': () => this.clear(),
            'ls': () => this.ls(),
            'cat': () => this.cat(args[0]),
            'curl': () => this.curl(),
            // Easter eggs
            'sudo': () => this.sudo(args.join(' ')),
            'hack': () => this.hack(),
            'exit': () => this.exit(),
            'quit': () => this.exit(),
            'rm': () => this.rm(args),
            'cowsay': () => this.cowsay(),
            'matrix': () => this.matrix(),
            'coffee': () => this.coffee(),
            'uptime': () => this.uptime(),
            'ps': () => this.ps(),
            'fortune': () => this.fortune(),
            'echo': () => this.echo(args.join(' ')),
            'pwd': () => this.pwd(),
            'cd': () => this.cd(),
            'date': () => this.date(),
        };

        if (commands[command]) {
            commands[command]();
        } else {
            this.print(`<span class="error">Command not found: ${command}</span>`);
            this.print(`Type <span class="command">help</span> to see available commands.`);
        }

        this.scrollToBottom();
    }

    // Main Commands
    help() {
        this.print(`<span class="section-title">Available Commands:</span>\n`);
        this.print(`<span class="command">about</span> / <span class="command">whoami</span>    - Learn more about me`);
        this.print(`<span class="command">experience</span>        - View my work experience`);
        this.print(`<span class="command">skills</span>            - Check out my technical skills`);
        this.print(`<span class="command">education</span>         - View my educational background`);
        this.print(`<span class="command">certs</span>             - See my certifications`);
        this.print(`<span class="command">contact</span>           - Get in touch with me`);
        this.print(`<span class="command">resume</span>            - View formatted resume`);
        this.print(`<span class="command">download</span>          - Download my resume (PDF)`);
        this.print(`<span class="command">github</span>            - Visit my GitHub profile`);
        this.print(`<span class="command">linkedin</span>          - Connect on LinkedIn`);
        this.print(``);
        this.print(`<span class="section-title">Utility Commands:</span>\n`);
        this.print(`<span class="command">ls</span>                - List available files`);
        this.print(`<span class="command">cat</span> <file>        - Display file contents`);
        this.print(`<span class="command">clear</span> / <span class="command">cls</span>     - Clear the terminal`);
        this.print(`<span class="command">curl</span>              - Get curl instructions`);
        this.print(`<span class="command">help</span>              - Show this help message`);
        this.print(``);
        this.print(`<span class="muted">Try some easter eggs: sudo, hack, matrix, coffee, cowsay, exit...</span>`);
    }

    about() {
        this.print(`<span class="section-title">╔════════════════════════════════════════════════════════════════════╗</span>`);
        this.print(`<span class="section-title">║                          ABOUT ME                                  ║</span>`);
        this.print(`<span class="section-title">╚════════════════════════════════════════════════════════════════════╝</span>\n`);
        this.print(`<span class="highlight">Mohammed Muteeullah</span>`);
        this.print(`<span class="info">Senior Site Reliability Engineer</span>\n`);
        this.print(`Self-driven SRE with <span class="highlight">5+ years</span> of hands-on experience in AWS and GCP.`);
        this.print(`Specializing in designing, implementing, and automating cloud/on-prem infrastructure.\n`);
        this.print(`<span class="success">💰 Cost Optimization Expert:</span> Saved over <span class="highlight">$100,000+</span> annually through strategic cloud optimization`);
        this.print(`<span class="success">☁️  Multi-Cloud:</span> Expert in AWS & GCP migrations and infrastructure`);
        this.print(`<span class="success">🔧 Infrastructure as Code:</span> Terraform, Kubernetes, Ansible`);
        this.print(`<span class="success">📊 Observability:</span> Prometheus, monitoring, and SLA management`);
        this.print(`<span class="success">🚀 Zero Downtime:</span> Proven track record of seamless migrations`);
        this.print(``);
        this.print(`<span class="muted">📍 Location: Mumbai, India</span>`);
    }

    whoami() {
        this.print(`<span class="highlight">You are: guest</span>`);
        this.print(`<span class="muted">But you're here to learn about:</span> <span class="info">Mohammed Muteeullah</span>`);
        this.print(``);
        this.about();
    }

    experience() {
        this.print(`<span class="section-title">╔════════════════════════════════════════════════════════════════════╗</span>`);
        this.print(`<span class="section-title">║                      WORK EXPERIENCE                               ║</span>`);
        this.print(`<span class="section-title">╚════════════════════════════════════════════════════════════════════╝</span>\n`);

        this.print(`<span class="company">█ Vimeo</span>`);
        this.print(`  <span class="job-title">Senior Site Reliability Engineer</span>`);
        this.print(`  <span class="date">01/2025 – Present | Remote, India</span>\n`);
        this.print(`  • Enhanced system stability and uptime through proactive monitoring`);
        this.print(`  • Strengthened security posture with GCP services integration`);
        this.print(`  • <span class="highlight">Saved ~$90,000 annually</span> through strategic cost optimization`);
        this.print(`  • Accelerated development cycles by resolving critical issues\n`);

        this.print(`<span class="company">█ Media.net</span>`);
        this.print(`  <span class="job-title">Senior Site Reliability Engineer</span>`);
        this.print(`  <span class="date">01/2024 – 12/2024 | Mumbai, IN</span>\n`);
        this.print(`  • Migrated from Cloud to On-prem with <span class="highlight">Zero Downtime</span>`);
        this.print(`  • Created dashboards for cloud cost analysis and optimization`);
        this.print(`  • Audited K8s workloads to reduce GKE unallocated costs\n`);

        this.print(`  <span class="job-title">Site Reliability Engineer - 2</span>`);
        this.print(`  <span class="date">01/2022 – 12/2023 | Mumbai, IN</span>\n`);
        this.print(`  • Planned and executed <span class="highlight">migration from AWS to GCP</span>`);
        this.print(`  • Migrated Spark workloads delivering significant cost savings`);
        this.print(`  • PoC: Argo Workflows + Kubernetes + Spark for better bin packing`);
        this.print(`  • Automated Jupyter Notebook scheduling (Netflix-inspired)`);
        this.print(`  • Migrated from Mesos orchestration to GKE\n`);

        this.print(`  <span class="job-title">Site Reliability Engineer</span>`);
        this.print(`  <span class="date">09/2019 – 12/2021 | Bengaluru, IN</span>\n`);
        this.print(`  • Architected highly available infrastructure (AWS & on-prem)`);
        this.print(`  • Managed Spark 2.4 & PySpark 3.0 for large-scale batch processing`);
        this.print(`  • Containerized legacy infrastructure with zero downtime`);
        this.print(`  • <span class="highlight">Reduced cost by ~$18,000/month</span> through resource optimization`);
        this.print(`  • Recovered production database during disaster`);
        this.print(`  • <span class="success">Reduced PagerDuty to Zero</span> in first 4 months`);
    }

    skills() {
        this.print(`<span class="section-title">╔════════════════════════════════════════════════════════════════════╗</span>`);
        this.print(`<span class="section-title">║                     TECHNICAL SKILLS                               ║</span>`);
        this.print(`<span class="section-title">╚════════════════════════════════════════════════════════════════════╝</span>\n`);

        const skills = {
            'Cloud Platforms': ['AWS', 'GCP'],
            'Infrastructure as Code': ['Terraform', 'Ansible'],
            'Orchestration': ['Kubernetes', 'Nomad', 'Mesos'],
            'Databases': ['MongoDB', 'PostgreSQL'],
            'Monitoring': ['Prometheus', 'Grafana'],
            'Programming': ['Python', 'Bash', 'Go'],
            'CI/CD': ['Argo Workflows', 'GitLab CI', 'Jenkins'],
            'Big Data': ['Apache Spark', 'PySpark'],
        };

        for (const [category, items] of Object.entries(skills)) {
            this.print(`<span class="info">▸ ${category}:</span>`);
            const tags = items.map(skill => `<span class="skill-tag">${skill}</span>`).join(' ');
            this.print(`  ${tags}\n`);
        }
    }

    education() {
        this.print(`<span class="section-title">╔════════════════════════════════════════════════════════════════════╗</span>`);
        this.print(`<span class="section-title">║                        EDUCATION                                   ║</span>`);
        this.print(`<span class="section-title">╚════════════════════════════════════════════════════════════════════╝</span>\n`);
        this.print(`<span class="highlight">🎓 B.E. (Computer Engineering)</span>`);
        this.print(`   <span class="info">Mumbai University</span>`);
        this.print(`   <span class="date">2013 – 2019 | Mumbai, IN</span>`);
    }

    certifications() {
        this.print(`<span class="section-title">╔════════════════════════════════════════════════════════════════════╗</span>`);
        this.print(`<span class="section-title">║                     CERTIFICATIONS                                 ║</span>`);
        this.print(`<span class="section-title">╚════════════════════════════════════════════════════════════════════╝</span>\n`);

        const certs = [
            { name: 'Architecting with GCP Specialisation', org: 'Coursera', year: '2019' },
            { name: 'Advance Penetration Testing', org: 'CYBRARY', year: '2019' },
            { name: 'Pre Security Learning Path', org: 'Try Hack Me', year: '2021' },
            { name: 'Certified Information Security and Ethical Hacker', org: 'Pristine InfoSolutions', year: '2017' },
            { name: 'Certified Pentesting Expert', org: 'Pristine InfoSolutions', year: '2017' },
            { name: 'Oracle Certified Professional Java Programmer SE 6', org: 'Oracle', year: '2015' },
        ];

        certs.forEach(cert => {
            this.print(`<span class="success">✓</span> <span class="highlight">${cert.name}</span>`);
            this.print(`  <span class="info">${cert.org}</span> <span class="muted">• ${cert.year}</span>\n`);
        });
    }

    contact() {
        this.print(`<span class="section-title">╔════════════════════════════════════════════════════════════════════╗</span>`);
        this.print(`<span class="section-title">║                      GET IN TOUCH                                  ║</span>`);
        this.print(`<span class="section-title">╚════════════════════════════════════════════════════════════════════╝</span>\n`);
        this.print(`<span class="info">📧 Email:</span>    <span class="link" onclick="window.location.href='mailto:muteeullah.shaikh@gmail.com'">muteeullah.shaikh@gmail.com</span>`);
        this.print(`<span class="info">💼 LinkedIn:</span> <span class="link" onclick="window.open('https://linkedin.com/in/muteeullah', '_blank')">linkedin.com/in/muteeullah</span>`);
        this.print(`<span class="info">🐙 GitHub:</span>   <span class="link" onclick="window.open('https://github.com/mmuteeullah', '_blank')">github.com/mmuteeullah</span>`);
        this.print(`<span class="info">📍 Location:</span> Mumbai, India`);
        this.print(``);
        this.print(`<span class="muted">Feel free to reach out for opportunities, collaborations, or just to chat about SRE!</span>`);
    }

    resume() {
        this.print(`<span class="section-title">Full Resume</span>\n`);
        this.about();
        this.print('');
        this.experience();
        this.print('');
        this.skills();
        this.print('');
        this.education();
        this.print('');
        this.certifications();
        this.print('');
        this.contact();
        this.print('');
        this.print(`<span class="info">💾 To download PDF version, use:</span> <span class="command">download</span>`);
    }

    download() {
        this.print(`<span class="info">📥 Downloading resume...</span>`);
        window.open('Mohammed-Muteeullah-Resume.pdf', '_blank');
        this.print(`<span class="success">✓ Resume download started!</span>`);
    }

    github() {
        this.print(`<span class="info">🐙 Opening GitHub profile...</span>`);
        window.open('https://github.com/mmuteeullah', '_blank');
    }

    linkedin() {
        this.print(`<span class="info">💼 Opening LinkedIn profile...</span>`);
        window.open('https://linkedin.com/in/muteeullah', '_blank');
    }

    // Utility Commands
    ls() {
        this.print(`<span class="info">total 7</span>`);
        this.print(`<span class="command">drwxr-xr-x</span>  2 muteeullah  staff   64B  about.txt`);
        this.print(`<span class="command">drwxr-xr-x</span>  2 muteeullah  staff  128B  experience.txt`);
        this.print(`<span class="command">drwxr-xr-x</span>  2 muteeullah  staff   96B  skills.txt`);
        this.print(`<span class="command">drwxr-xr-x</span>  2 muteeullah  staff   64B  education.txt`);
        this.print(`<span class="command">drwxr-xr-x</span>  2 muteeullah  staff   96B  certs.txt`);
        this.print(`<span class="command">drwxr-xr-x</span>  2 muteeullah  staff   64B  contact.txt`);
        this.print(`<span class="command">-rw-r--r--</span>  1 muteeullah  staff  512K  resume.pdf`);
    }

    cat(file) {
        if (!file) {
            this.print(`<span class="error">cat: missing file argument</span>`);
            this.print(`Usage: cat <file>`);
            this.print(`Available files: about.txt, experience.txt, skills.txt, education.txt, certs.txt, contact.txt`);
            return;
        }

        const files = {
            'about.txt': () => this.about(),
            'about': () => this.about(),
            'experience.txt': () => this.experience(),
            'experience': () => this.experience(),
            'skills.txt': () => this.skills(),
            'skills': () => this.skills(),
            'education.txt': () => this.education(),
            'education': () => this.education(),
            'certs.txt': () => this.certifications(),
            'certs': () => this.certifications(),
            'certifications.txt': () => this.certifications(),
            'contact.txt': () => this.contact(),
            'contact': () => this.contact(),
            'resume.pdf': () => this.print(`<span class="error">cat: resume.pdf: binary file (use 'download' command instead)</span>`),
            'resume': () => this.resume(),
        };

        if (files[file.toLowerCase()]) {
            files[file.toLowerCase()]();
        } else {
            this.print(`<span class="error">cat: ${file}: No such file or directory</span>`);
        }
    }

    curl() {
        this.print(`<span class="section-title">🌐 cURL Access</span>\n`);
        this.print(`<span class="info">You can also access this portfolio via curl!</span>\n`);
        this.print(`<span class="command">$ curl muteeullah.b0lt.foo</span>          <span class="muted"># Main page with ASCII art</span>`);
        this.print(`<span class="command">$ curl muteeullah.b0lt.foo/about</span>     <span class="muted"># About me</span>`);
        this.print(`<span class="command">$ curl muteeullah.b0lt.foo/experience</span> <span class="muted"># Work experience</span>`);
        this.print(`<span class="command">$ curl muteeullah.b0lt.foo/skills</span>    <span class="muted"># Technical skills</span>`);
        this.print(`<span class="command">$ curl muteeullah.b0lt.foo/contact</span>   <span class="muted"># Contact info</span>`);
        this.print(``);
        this.print(`<span class="info">All curl responses feature ANSI colors and ASCII art!</span>`);
    }

    clear() {
        this.output.innerHTML = '';
    }

    // Easter Eggs
    sudo(cmd) {
        this.print(`<span class="error">Permission denied!</span> Nice try, but you don't have root access here 😏`);
        this.print(`<span class="muted">[sudo] password for guest: </span><span class="error">✗✗✗✗✗✗✗✗</span>`);
        this.print(`<span class="error">sudo: 3 incorrect password attempts</span>`);
        if (cmd) {
            this.print(`<span class="muted">But if I had to ${cmd}, I'd probably mess something up anyway...</span>`);
        }
    }

    hack() {
        this.print(`<span class="success">Initializing hack sequence...</span>`);
        setTimeout(() => {
            this.print(`<span class="info">[████████████████████████████████████] 100%</span>`);
            this.print(`<span class="success">ACCESS GRANTED</span>`);
            this.print(`<span class="warning">⚠ WARNING: Mainframe breached!</span>`);
            this.print(`<span class="muted">Just kidding... but wouldn't that be cool?</span>`);
            this.print(`<span class="info">Fun fact: I'm actually a pentesting certified SRE 🔐</span>`);
            this.scrollToBottom();
        }, 1500);
    }

    exit() {
        this.print(`<span class="error">You can't exit. You're here forever...</span>`);
        this.print(`<span class="info">Just kidding! Close the tab if you really want to leave 😢</span>`);
        this.print(`<span class="muted">Or stay and explore more commands? Try 'help'</span>`);
    }

    rm(args) {
        if (args.includes('-rf') && (args.includes('/') || args.includes('*'))) {
            this.print(`<span class="error">💀 Are you trying to delete my portfolio?!</span>`);
            this.print(`<span class="warning">⚠ WARNING: Extremely dangerous command detected!</span>`);
            this.print(`<span class="info">Don't worry, I've prevented disaster. This is a web page, not a real terminal 😅</span>`);
            this.print(`<span class="muted">But seriously, be careful with rm -rf in real life!</span>`);
        } else {
            this.print(`<span class="error">rm: cannot remove files in read-only portfolio</span>`);
        }
    }

    cowsay() {
        const quotes = [
            "Infrastructure as Code is not just a practice, it's a lifestyle",
            "There are no clouds in the cloud, just someone else's computer",
            "If it's not monitored, it's not in production",
            "Automate everything, trust nothing, monitor all",
            "The best SRE is a lazy SRE - automate yourself out of a job"
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        const border = '─'.repeat(quote.length + 2);

        this.print(`<span class="info"> ${border}</span>`);
        this.print(`<span class="info">< ${quote} ></span>`);
        this.print(`<span class="info"> ${border}</span>`);
        this.print(`<span class="highlight">        \\   ^__^</span>`);
        this.print(`<span class="highlight">         \\  (oo)\\_______</span>`);
        this.print(`<span class="highlight">            (__)\\       )\\/\\</span>`);
        this.print(`<span class="highlight">                ||----w |</span>`);
        this.print(`<span class="highlight">                ||     ||</span>`);
    }

    matrix() {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');

        canvas.style.display = 'block';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        // Responsive font size based on screen width
        const fontSize = window.innerWidth < 480 ? 10 : window.innerWidth < 768 ? 12 : 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        let frameCount = 0;
        const maxFrames = 300; // Run for ~5 seconds at 60fps

        // Handle window resize during animation
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            frameCount++;
            if (frameCount < maxFrames) {
                requestAnimationFrame(draw);
            } else {
                canvas.style.display = 'none';
                window.removeEventListener('resize', handleResize);
                this.print(`<span class="success">The Matrix has you...</span>`);
                this.print(`<span class="info">Press any key to return to reality.</span>`);
                this.scrollToBottom();
            }
        };

        draw();

        this.print(`<span class="success">Loading The Matrix...</span>`);
    }

    coffee() {
        this.print(`<span class="highlight">      ) )  (</span>`);
        this.print(`<span class="highlight">     ( (   ) )</span>`);
        this.print(`<span class="highlight">      ) )  ( (</span>`);
        this.print(`<span class="highlight">    ___________</span>`);
        this.print(`<span class="highlight">   |           |]</span>`);
        this.print(`<span class="highlight">   |  Coffee   |]</span>`);
        this.print(`<span class="highlight">   |___________|]</span>`);
        this.print(`<span class="highlight">   |___________|</span>\n`);
        this.print(`<span class="info">☕ Brewing coffee...</span>`);
        this.print(`<span class="success">✓ Coffee ready! SREs run on coffee and automation 🚀</span>`);
        this.print(`<span class="muted">Fun fact: I've optimized infrastructure while drinking coffee</span>`);
    }

    uptime() {
        const elapsed = Date.now() - this.startTime;
        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        if (hours > 0) {
            this.print(`<span class="info">System uptime:</span> ${hours}h ${minutes % 60}m ${seconds % 60}s`);
        } else if (minutes > 0) {
            this.print(`<span class="info">System uptime:</span> ${minutes}m ${seconds % 60}s`);
        } else {
            this.print(`<span class="info">System uptime:</span> ${seconds}s`);
        }
        this.print(`<span class="success">✓ No incidents. All systems operational.</span>`);
        this.print(`<span class="muted">Unlike production, this never goes down 😎</span>`);
    }

    ps() {
        this.print(`<span class="info">USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</span>`);
        this.print(`muteeullah   1  0.0  0.1   2048  1024 pts/0    S+   00:00   0:00 <span class="success">career.service</span>`);
        this.print(`muteeullah  42  2.5  5.0   8192  4096 pts/0    R+   00:00   0:42 <span class="success">infrastructure.automation</span>`);
        this.print(`muteeullah 108 15.0  8.3  16384 12288 pts/0    S+   00:00   2:30 <span class="success">cost.optimization</span>`);
        this.print(`muteeullah 256  0.1  1.2   4096  2048 pts/0    S+   00:00   0:15 <span class="success">sre.excellence</span>`);
        this.print(`muteeullah 404  0.0  0.0      0     0 pts/0    Z+   00:00   0:00 <span class="error">[pagerduty.alert] <defunct></span>`);
        this.print(`muteeullah 512  99.9 50.0  32768 65536 pts/0    R+   00:00  99:99 <span class="warning">coffee.consumption</span>`);
        this.print(``);
        this.print(`<span class="success">✓ All critical processes running smoothly!</span>`);
    }

    fortune() {
        const fortunes = [
            "A cloud migration awaits you... prepare your Terraform!",
            "You will save much money on AWS this month... if you remember to delete those snapshots.",
            "Beware of the production deploy on Friday afternoon.",
            "Your next incident will be caused by DNS. It's always DNS.",
            "A great opportunity in Site Reliability Engineering is heading your way.",
            "The best time to automate was yesterday. The second best time is now.",
            "In the future, you will implement monitoring before the incident.",
            "Your infrastructure will scale effortlessly... after you fix that memory leak.",
        ];
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        this.print(`<span class="info">🔮 Your fortune:</span>`);
        this.print(`<span class="highlight">"${fortune}"</span>`);
    }

    echo(text) {
        this.print(text || '');
    }

    pwd() {
        this.print(`<span class="info">/home/muteeullah/portfolio</span>`);
    }

    cd() {
        this.print(`<span class="muted">You're already in the best directory! 😊</span>`);
    }

    date() {
        const now = new Date();
        this.print(`<span class="info">${now.toString()}</span>`);
    }

    // Helper methods
    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.input.value = this.commandHistory[this.historyIndex];
            }
        } else if (direction === 'down') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = -1;
                this.input.value = '';
            }
        }
    }

    autocomplete() {
        const input = this.input.value;
        if (!input) return;

        // Check if we're autocompleting a command or an argument
        const parts = input.split(' ');

        if (parts.length === 1) {
            // Autocomplete command
            const commands = ['help', 'about', 'whoami', 'experience', 'work', 'skills', 'education',
                             'certs', 'certifications', 'contact', 'resume', 'download', 'github',
                             'linkedin', 'clear', 'ls', 'cat', 'sudo', 'hack', 'exit', 'matrix',
                             'coffee', 'uptime', 'ps', 'cowsay', 'fortune', 'curl', 'pwd', 'cd',
                             'date', 'echo', 'rm'];

            const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));

            if (matches.length === 1) {
                this.input.value = matches[0];
            } else if (matches.length > 1) {
                // Complete to longest common prefix
                const commonPrefix = this.getCommonPrefix(matches);
                if (commonPrefix.length > input.length) {
                    this.input.value = commonPrefix;
                } else {
                    // Already at common prefix, show all matches
                    this.print(`<span class="info">Possible completions:</span>`);
                    this.print(matches.join('  '));
                    this.scrollToBottom();
                }
            }
        } else if (parts.length >= 2) {
            // Autocomplete arguments
            const command = parts[0].toLowerCase();
            const argInput = parts[parts.length - 1].toLowerCase();

            if (command === 'cat') {
                // Available files for cat command
                const files = [
                    'about.txt', 'about',
                    'experience.txt', 'experience',
                    'skills.txt', 'skills',
                    'education.txt', 'education',
                    'certs.txt', 'certs', 'certifications.txt',
                    'contact.txt', 'contact',
                    'resume.pdf', 'resume'
                ];

                const matches = files.filter(file => file.startsWith(argInput));

                if (matches.length === 1) {
                    parts[parts.length - 1] = matches[0];
                    this.input.value = parts.join(' ');
                } else if (matches.length > 1) {
                    // Complete to longest common prefix
                    const commonPrefix = this.getCommonPrefix(matches);
                    if (commonPrefix.length > argInput.length) {
                        parts[parts.length - 1] = commonPrefix;
                        this.input.value = parts.join(' ');
                    } else {
                        // Already at common prefix, show all matches
                        this.print(`<span class="info">Possible completions:</span>`);
                        this.print(matches.join('  '));
                        this.scrollToBottom();
                    }
                }
            }
        }
    }

    getCommonPrefix(strings) {
        if (!strings.length) return '';
        if (strings.length === 1) return strings[0];

        // Sort to compare first and last strings
        const sorted = strings.slice().sort();
        const first = sorted[0];
        const last = sorted[sorted.length - 1];
        let i = 0;

        while (i < first.length && first[i] === last[i]) {
            i++;
        }

        return first.substring(0, i);
    }

    print(text) {
        const line = document.createElement('div');
        line.innerHTML = text;
        this.output.appendChild(line);
    }

    scrollToBottom() {
        this.terminalBody.scrollTop = this.terminalBody.scrollHeight;
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});
