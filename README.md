# Portfolio - Mohammed Muteeullah

A modern, terminal-themed portfolio website featuring both interactive browser and curl interfaces. Built with vanilla JavaScript and styled with the Catppuccin Mocha color scheme.

## 🌐 Live Site

**Browser:** [muteeullah.b0lt.foo](https://muteeullah.b0lt.foo)
**Curl:** `curl muteeullah.b0lt.foo`

## ✨ Features

### Interactive Browser Terminal
- Full-featured terminal emulator with Catppuccin Mocha theme
- Command history navigation (↑↓ arrows)
- Tab autocomplete with intelligent prefix matching
- Multiple commands: `help`, `about`, `experience`, `skills`, `education`, `certs`, `contact`
- Fun easter eggs: `sudo`, `hack`, `matrix`, `coffee`, `cowsay`, and more
- Responsive design for all devices

### Beautiful Curl Interface
- ANSI-colored output with ASCII art banner
- Multiple endpoints for different content sections
- Optimized for terminal viewing
- Clean, professional formatting

## 🎨 Design

Built with the **Catppuccin Mocha** color palette for a cohesive, modern aesthetic across both interfaces.

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Hosting:** Netlify with Edge Functions
- **DNS:** Cloudflare
- **Theme:** Catppuccin Mocha

## 📦 Project Structure

```
portfolio/
├── index.html                          # Browser terminal interface
├── terminal.js                         # Terminal emulator & commands
├── netlify.toml                        # Netlify configuration
├── netlify/edge-functions/
│   └── curl-handler.js                 # Curl detection & ANSI output
└── Mohammed-Muteeullah-Resume.pdf      # Resume download
```

## 🚀 Local Development

### Quick Start
```bash
# Simple HTTP server (browser only)
python3 -m http.server 8000
```

### Full Development (with Edge Functions)
```bash
# Install dependencies
npm install

# Run with Netlify CLI
npm run dev
```

## 🌟 Available Commands

Try these in the browser terminal:

**Main Commands:**
- `help` - Show all commands
- `about` - About me
- `experience` - Work history
- `skills` - Technical skills
- `education` - Educational background
- `certs` - Certifications
- `contact` - Contact information
- `download` - Download resume PDF

**Utility:**
- `ls` - List files
- `cat <file>` - Display file contents
- `clear` - Clear terminal

**Fun:**
- `sudo` - Try to get root access
- `matrix` - Enter the matrix
- `hack` - Hacking sequence
- `coffee` - Brew some coffee
- `cowsay` - Wisdom from a cow
- `uptime` - System uptime
- `ps` - Show processes

## 📡 Curl Endpoints

```bash
curl muteeullah.b0lt.foo              # Main page
curl muteeullah.b0lt.foo/about        # About
curl muteeullah.b0lt.foo/experience   # Experience
curl muteeullah.b0lt.foo/skills       # Skills
curl muteeullah.b0lt.foo/education    # Education
curl muteeullah.b0lt.foo/certs        # Certifications
curl muteeullah.b0lt.foo/contact      # Contact info
curl muteeullah.b0lt.foo/help         # Help
```

## 🔐 Security & Privacy

- No tracking or analytics
- No external dependencies or CDNs
- Phone number excluded from public display
- Secure HTTPS via Netlify/Cloudflare

## 📄 License

This is a personal portfolio project. The code is available for reference and learning purposes.

## 📬 Contact

- **Email:** muteeullah.shaikh@gmail.com
- **LinkedIn:** [linkedin.com/in/muteeullah](https://linkedin.com/in/muteeullah)
- **GitHub:** [github.com/mmuteeullah](https://github.com/mmuteeullah)

---

Built with 💙 using the Catppuccin Mocha theme
