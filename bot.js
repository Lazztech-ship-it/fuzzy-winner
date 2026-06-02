const { Telegraf, Markup } = require('telegraf');
const http = require('http');
const os = require('os'); 
const dns = require('dns'); // NEW: Standard DNS module for live network diagnostics

// 1. HIGH-AVAILABILITY HEALTH PROBE FOR CLOUD INFRASTRUCTURE
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('OPERATIONAL TERMINAL STATUS: OK');
  res.end();
}).listen(process.env.PORT || 3000);

const bot = new Telegraf(process.env.BOT_TOKEN);

// UPDATE THIS LINK INSIDE THE QUOTES TO CHANGE YOUR LOGO IMAGE INSTANTLY
const CONSOLE_BANNER = "https://i.postimg.cc/d0pV7S2F/men-293-2160x4836px.jpg";

// THE UNIFORM SYSTEM FOOTER
const TERMINAL_FOOTER = "\n\n⚙️ _LAZZ SECURE MAIN CORE NODE // ENCRYPTED RELAY COMPLIANT_";

// 2. TECH MASTER LOGS DATABASE (ENTERPRISE CORE)
const masterIntel = {
    provisioning: {
        title: "⚙️ SYSTEMS AUTOMATION & PROVISIONING PIPELINES",
        specs: "• Stack: Bash Enclaves, Systemd Daemons, GitOps Workflows\n• Compliance: CIS Hardened Server Benchmarks\n• Environments: Linux Enterprise Nodes (Ubuntu/Debian/RHEL)",
        details: "Deployment scripts designed to build, update, and manage servers automatically without human error. Features unattended kernel provisioning, storage partition tracking, automated package dependency resolution, and rolling environment updates.",
        sla: "◈ ARCHITECTURE ..... Automated Shell Scripts\n◈ DELIVERY ......... GitHub Private Sub-Modules"
    },
    orchestration: {
        title: "🐳 VIRTUALIZATION & CONTAINER CONTAINERIZATION",
        specs: "• Architecture: Docker Core, Multi-Tenant Namespaces, Cgroups\n• Networks: Custom Bridge Isolations & Sealed Local Routing\n• Gateways: Nginx / Caddy Edge Reverse Proxies",
        details: "Production-grade micro-segmentation architectures. Isolates multiple application structures into sealed virtual enclaves, implements system resource quotas to prevent denial-of-service, and automates volume backup pipelines under high-availability rules.",
        sla: "◈ LAYOUT ........... Multi-Container Docker Compose\n◈ EDGE SEGMENT ..... TLS-Encrypted Proxies"
    },
    cryptography: {
        title: "📡 CRYPTOGRAPHIC PACKET TUNNELING & PRIVACY TOPOLOGY",
        specs: "• Core Engines: VLESS-Reality, Trojan Routing, Shadowsocks Core\n• Transport layers: gRPC Multiplex Channels, HTTP/2 WebSockets\n• Security Matrix: Deep Packet Inspection (DPI) Bypass Protocols",
        details: "Technical network engineering to bypass hostile routing boundaries and deep packet inspection. Implements zero-signature TLS handshakes that wrap stealth tunnel streams directly inside standard web browsing signatures to pass carrier filters securely.",
        sla: "◈ ARCHIVE ENVELOPE ... Custom SNI Spoof Blueprints\n◈ PRIVACY TOPOLOGY ... End-to-End Encrypted Tunnel Nodes"
    },
    hardening: {
        title: "🛡️ SYSTEMS HARDENING & PERIMETER DEFENSE",
        specs: "• Firewalls: Netfilter Rulesets, Stateful IPTables / UFW Chains\n• Intrusion Analysis: Fail2Ban Deep Filter Hooks, Lynis Scanning\n• Access Matrix: Ed25519 Cryptographic Keys, Secretless Auth",
        details: "Deep root-level security tuning for servers. Implements absolute password-authentication lockouts, alters vulnerable standard listening ports, activates strict rate-limiting policies on all ingress points, and structures real-time log monitoring streams.",
        sla: "◈ AUDIT STANDARDS ... Zero-Trust Identity Parameters\n◈ SECURE BOUNDARY ... Rule-Based Access Layers"
    }
};

// 3. SECURE REUSABLE DATA DISPATCH ENGINE
const dispatchLogCluster = async (ctx, operationIdentifier, logModule) => {
    await ctx.reply(`> _STREAMS: PARSING_SECURE_METRICS_STREAM_FOR_${operationIdentifier}..._`);
    await new Promise(r => setTimeout(r, 450));
    
    const consoleOutput = `*${logModule.title}*\n` +
                          `──────────────────────────────\n` +
                          `*TECHNICAL SPECIFICATIONS:*\n${logModule.specs}\n\n` +
                          `*ENGINEERING OBJECTIVE:*\n${logModule.details}\n\n` +
                          `*SERVICE ARCHITECTURE FRAMEWORK:*\n${logModule.sla}` +
                          TERMINAL_FOOTER;

    return ctx.replyWithMarkdown(consoleOutput, Markup.inlineKeyboard([
        [Markup.button.url('⚡ INITIALIZE BRIEFING', 'https://wa.me/254106527992')],
        [Markup.button.callback('🔙 ROOT TERMINAL', 'console_root')]
    ]));
};

// 4. ENTERPRISE EXECUTIVE CONSOLE KEYBOARDS
const consoleMenu = Markup.inlineKeyboard([
    [Markup.button.callback('🛠️ HARDWARE & INFRASTRUCTURE', 'menu_infra')],
    [Markup.button.callback('📡 CRYPTOGRAPHY & TUNNELING', 'menu_security')],
    [Markup.button.callback('⚙️ DIAGNOSTICS & UTILITIES', 'menu_tools')],
    [Markup.button.callback('💳 SECURE PAYMENT GATEWAY', 'menu_billing')],
    [Markup.button.callback('🧠 MASTER NODE ARCHIVE (ABOUT ME)', 'menu_master')],
    [Markup.button.callback('🔬 LIVE NODE TELEMETRY', 'console_telemetry')]
]);

bot.start((ctx) => {
    ctx.replyWithPhoto(CONSOLE_BANNER, {
        caption: `*🔒 LAZZ ADMIN SYSTEMS SECURITY OPERATIONS CENTER v8.0*\n` +
                 `──────────────────────────────\n` +
                 `*OPERATOR AUTHENTICATION:* VERIFIED [${ctx.from.first_name}]\n` +
                 `*TRUST DOMAIN:* ZERO-TRUST SECURE ENCLAVE IDENTIFIED\n` +
                 `*STATUS:* MAIN CORE STANDBY — MONITORING PACKET ROUTERS\n\n` +
                 `Select an administrative directory module below to verify or launch enterprise infrastructure arrays.`,
        parse_mode: 'Markdown',
        ...consoleMenu
    });
});

// 5. SECURE SUB-DIRECTORY LAYER INTERFACES
bot.action('menu_infra', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*🛠️ SYSTEM ARCHIVE DIRECTORY: SYSTEM HARDWARE & AUTOMATION*\n──────────────────────────────\nSelect an advanced infrastructure provisioning directory branch:` + TERMINAL_FOOTER,
        Markup.inlineKeyboard([
            [Markup.button.callback('⚙️ BASH PROVISIONING', 'exec_bash'), Markup.button.callback('🐳 DOCKER CONTAINERS', 'exec_docker')],
            [Markup.button.callback('🔙 ACCESS ROOT CONSOLE', 'console_root')]
        ])
    );
});

bot.action('menu_security', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*📡 SYSTEM ARCHIVE DIRECTORY: CRYPTOGRAPHY & NETWORK HARDENING*\n──────────────────────────────\nSelect an operational security blueprint directory branch:` + TERMINAL_FOOTER,
        Markup.inlineKeyboard([
            [Markup.button.callback('📡 CRYPTOGRAPHIC PACKETS', 'exec_crypto'), Markup.button.callback('🛡️ SYSTEM PERIMETER', 'exec_harden')],
            [Markup.button.callback('🔙 ACCESS ROOT CONSOLE', 'console_root')]
        ])
    );
});

bot.action('menu_tools', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*⚙️ UTILITIES & DIAGNOSTIC INTERACTION TOOLS*\n──────────────────────────────\nSelect an on-demand core mainframe utility to execute or retrieve files:` + TERMINAL_FOOTER,
        Markup.inlineKeyboard([
            [Markup.button.callback('🔎 INITIATE PORT SCAN', 'tool_scan'), Markup.button.callback('📁 PAYLOAD DISPENSER', 'submenu_payload')],
            [Markup.button.callback('🌐 LIVE DNS LOOKUP', 'tool_dns_info'), Markup.button.callback('🎫 SUBMIT SECURE TICKET', 'tool_ticket')],
            [Markup.button.callback('🔙 ACCESS ROOT CONSOLE', 'console_root')]
        ])
    );
});

// 6. EXTRA PROTOCOL: TECH MASTER INFORMATION NODE (ABOUT ME)
bot.action('menu_master', async (ctx) => {
    await ctx.reply(`> _STREAMS: DECRYPTING IDENTITY METRICS FOR LAZZ MASTER..._`);
    await new Promise(r => setTimeout(r, 400));
    
    const bioText = `*🧠 TECH MASTER ARCHIVE // LAZZ ADMIN INTEGRITY LOG*\n` +
                    `──────────────────────────────\n` +
                    `*OPERATOR PROFILE:*\n` +
                    `Professional Full-Stack Infrastructure Engineer, Linux Systems Architect, and Cryptographic Network Administrator.\n\n` +
                    `*CORE COMPETENCIES & SPECIALIZATIONS:*\n` +
                    `• Complete Linux OS Hardening & CIS Security Audits\n` +
                    `• Zero-Trace Network Engineering & Anti-DPI Stealth Tunneling\n` +
                    `• Production Micro-Virtualization & Multi-Tenant Docker Scopes\n` +
                    `• End-to-End Task Automation via Advanced Shell/Node Architectures\n\n` +
                    `*SECURE COMMUNICATIONS ROUTING:*\n` +
                    `• 📞 *TELEPHONY LINK:* +254 106 527992\n` +
                    `• 📧 *SECURE EMAIL:* lazztech.services@gmail.com\n` +
                    `• 📡 *PRIMARY GATEWAY:* \`@Lazz_Admin\`` +
                    TERMINAL_FOOTER;

    return ctx.replyWithMarkdown(bioText, Markup.inlineKeyboard([
        [Markup.button.url('⚡ SECURE CHAT (WHATSAPP)', 'https://wa.me/254106527992')],
        [Markup.button.callback('🔙 ACCESS ROOT CONSOLE', 'console_root')]
    ]));
});

// 7. PIPELINE ROUTING TRIGGER EXECUTIONS
bot.action('exec_bash', (ctx) => dispatchLogCluster(ctx, 'SYS_PROVISIONING', masterIntel.provisioning));
bot.action('exec_docker', (ctx) => dispatchLogCluster(ctx, 'CONTAINER_ORCHESTRATION', masterIntel.orchestration));
bot.action('exec_crypto', (ctx) => dispatchLogCluster(ctx, 'CRYPTO_STEALTH_TUNNEL', masterIntel.cryptography));
bot.action('exec_harden', (ctx) => dispatchLogCluster(ctx, 'PERIMETER_HARDENING', masterIntel.hardening));

// 8. INTERACTIVE TOOLS SUB-ROUTINES
bot.action('tool_scan', async (ctx) => {
    await ctx.reply(`> _STREAMS: INITIALIZING REMOTE RECONNAISSANCE PROBE..._`);
    await new Promise(r => setTimeout(r, 500));
    await ctx.reply(`> _STREAMS: SCANNING TARGET FOR EXPOSED SERVICES..._`);
    await new Promise(r => setTimeout(r, 600));
    
    return ctx.replyWithMarkdown(
        `*🔎 SIMULATED CORE INTERFACE RECON REPORT*\n` +
        `──────────────────────────────\n` +
        `• *PORT 22/TCP:* 🔓 OPEN (SSH Core Framework Banner Detected)\n` +
        `• *PORT 80/TCP:* 🔓 OPEN (Nginx Frontend Reverse Gateway Engine)\n` +
        `• *PORT 443/TCP:* 🔒 PROTECTED (TLS Explicit Routing Pipeline Active)\n` +
        `• *PORT 8080/TCP:* 🚫 CLOSED (Dropping Connection Signature)\n\n` +
        `_To launch a genuine full system audit or close network vulnerabilities, connect with the master administrator directly._` +
        TERMINAL_FOOTER,
        Markup.inlineKeyboard([
            [Markup.button.url('⚡ ENGAGE SECURITY ANALYSIS', 'https://wa.me/254106527992')],
            [Markup.button.callback('🔙 UTILITIES MENU', 'menu_tools')]
        ])
    );
});

// MODULE: ACTIVE NETWORK DIAGNOSTICS HELP INTERFACE
bot.action('tool_dns_info', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*🌐 LIVE NETWORK DIAGNOSTICS SYSTEM*\n` +
        `──────────────────────────────\n` +
        `The main core can perform standard real-time DNS queries.\n\n` +
        `To trace a live server's IP address, type the command directly into the chat console:\n` +
        `\n\`/lookup [target_domain]\`\n\n` +
        `_Example: /lookup google.com_` + TERMINAL_FOOTER,
        Markup.inlineKeyboard([[Markup.button.callback('🔙 UTILITIES MENU', 'menu_tools')]])
    );
});

// REAL LIVE DNS LOOKUP EXECUTIVE ENGINE
bot.command('lookup', (ctx) => {
    const target = ctx.message.text.replace('/lookup ', '').trim();
    if (target === '/lookup' || target === '') {
        return ctx.replyWithMarkdown('⚠️ *SYNTAX ERROR:* Specify a domain target.\nFormat: \`/lookup google.com\`');
    }

    ctx.reply(`> _STREAMS: EXECUTING LIVE ARPANET/DNS RESOLUTION FOR [${target}]..._`);
    
    dns.lookup(target, (err, address, family) => {
        if (err) {
            return ctx.replyWithMarkdown(`❌ *RESOLUTION FAILED:* Target domain \`${target}\` could not be reached or resolved.`);
        }
        
        const diagnosticLog = `*🌐 CORE LIVE NETWORK RESOLUTION LOG*\n` +
                              `──────────────────────────────\n` +
                              `• *TARGET DOMAIN:* \`${target}\`\n` +
                              `• *RESOLVED IPV4:* \`${address}\`\n` +
                              `• *PROTOCOL SUITE:* IP version ${family}\n` +
                              `• *NETWORK ROUTE:* STABLE / ONLINE` + TERMINAL_FOOTER;
                              
        return ctx.replyWithMarkdown(diagnosticLog);
    });
});

bot.action('tool_ticket', async (ctx) => {
    const textTemplate = `*🎫 SECURE TICKET GENERATION PROTOCOL*\n` +
                         `──────────────────────────────\n` +
                         `To submit an encrypted project request directly to the master node queue, use the following text command format in the chat:\n\n` +
                         `\`/ticket [Your Project Description Here]\`\n\n` +
                         `_Example: /ticket I need a custom Docker Compose setup for my proxy node._` +
                         TERMINAL_FOOTER;
    return ctx.replyWithMarkdown(textTemplate, Markup.inlineKeyboard([
        [Markup.button.callback('🔙 UTILITIES MENU', 'menu_tools')]
    ]));
});

bot.command('ticket', async (ctx) => {
    const userMessage = ctx.message.text.replace('/ticket ', '').trim();
    if (userMessage === '/ticket' || userMessage === '') {
        return ctx.replyWithMarkdown(`⚠️ *SYNTAX ERROR:* You must include a message.\nFormat: \`/ticket [Message]\``);
    }

    await ctx.replyWithMarkdown(`> _ENCRYPTING PAYLOAD..._\n> _TRANSMITTING TO LAZZ ADMIN CORE..._`);
    await new Promise(r => setTimeout(r, 600));
    
    console.log(`\n🚨 NEW TICKET FROM: ${ctx.from.first_name} (@${ctx.from.username || 'No Username'})`);
    console.log(`💬 MESSAGE: ${userMessage}\n`);

    return ctx.replyWithMarkdown(
        `✅ *TICKET SUCCESSFULLY LOGGED*\n` +
        `──────────────────────────────\n` +
        `Your request has been routed to the master terminal. An administrator will initiate contact if parameters are met.` +
        TERMINAL_FOOTER
    );
});

// MODULE: PAYLOAD DISPENSER SUB-MENU
bot.action('submenu_payload', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*📁 MAIN CORE FILE PAYLOAD DISPENSER*\n` +
        `──────────────────────────────\n` +
        `Select an engineering template to compile and deliver directly into your file architecture:`,
        Markup.inlineKeyboard([
            [Markup.button.callback('📄 DOCKER COMPOSE CORE', 'get_file_docker')],
            [Markup.button.callback('📄 NGINX REVERSE CONFIG', 'get_file_nginx')],
            [Markup.button.callback('🔙 UTILITIES MENU', 'menu_tools')]
        ])
    );
});

// DELIVER DOCKER COMPOSE BUFFER FILE
bot.action('get_file_docker', async (ctx) => {
    await ctx.reply(`> _STREAMS: ARCHIVING DATA STREAM TO MEMORY BUFFER..._`);
    const fileContent = `version: "3.8"\nservices:\n  edge-proxy:\n    image: nginx:alpine\n    container_name: lazz_edge_proxy\n    ports:\n      - "80:80"\n      - "443:443"\n    volumes:\n      - ./config:/etc/nginx/conf.d\n    restart: always\nnetworks:\n  default:\n    name: secure_cluster_enclave`;
    return ctx.replyWithDocument(
        { source: Buffer.from(fileContent), filename: 'docker-compose.yml' },
        { caption: `*✅ COMPILE COMPLETE:* Standard isolated Docker Compose deployment manifest template.` + TERMINAL_FOOTER, parse_mode: 'Markdown' }
    );
});

// DELIVER NGINX REVERSE BUFFER FILE
bot.action('get_file_nginx', async (ctx) => {
    await ctx.reply(`> _STREAMS: ENCAPSULATING WEB ENTRY CONF FILE..._`);
    const fileContent = `server {\n    listen 80;\n    server_name localhost;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000;n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}`;
    return ctx.replyWithDocument(
        { source: Buffer.from(fileContent), filename: 'nginx.conf' },
        { caption: `*✅ COMPILE COMPLETE:* Production ready standard upstream proxy routing asset configuration.` + TERMINAL_FOOTER, parse_mode: 'Markdown' }
    );
});

// MODULE: INVOICE & BILLING SECURE GATEWAY ROUTING
bot.action('menu_billing', async (ctx) => {
    await ctx.reply(`> _STREAMS: OPENING SECURE ACCOUNT ROUTING MAPS..._`);
    await new Promise(r => setTimeout(r, 400));
    
    const billingLog = `*💳 LAZZ ADMIN OPERATIONAL INVOICE GATEWAY*\n` +
                       `──────────────────────────────\n` +
                       `Secure verified clearing pipelines allocated for client development resource processing:\n\n` +
                       `*1. LOCAL TRANSACTION CHANNELS:* \n` +
                       `• *Payment Method:* M-PESA Till / Mobile Remittance\n` +
                       `• *Primary Route:* Dial System to +254 106 527992\n\n` +
                       `*2. DIGITAL ASSET CRYPTO ENCLAVES:*\n` +
                       `• *USDT (Network: TRC-20):* \`[Request Active Address via Chat]\`\n` +
                       `• *BTC (Network: Native):* \`[Request Active Address via Chat]\`\n\n` +
                       `_Note: Always verify allocations with the master admin before pushing transaction metrics._` +
                       TERMINAL_FOOTER;

    return ctx.replyWithMarkdown(billingLog, Markup.inlineKeyboard([
        [Markup.button.url('🚀 DISPATCH TRANSFER VERIFICATION', 'https://wa.me/254106527992')],
        [Markup.button.callback('🔙 ACCESS ROOT CONSOLE', 'console_root')]
    ]));
});

// 9. UPGRADED: LIVE SYSTEM TELEMETRY (PULLS REAL SERVER DATA)
bot.action('console_telemetry', async (ctx) => {
    await ctx.reply(`> _STREAMS: SCANNING KERNEL MEMORY AND SOCKET REUSE ALLOCATIONS..._`);
    await new Promise(r => setTimeout(r, 400));
    
    const totalMem = (os.totalmem() / 1024 / 1024).toFixed(0);
    const freeMem = (os.freemem() / 1024 / 1024).toFixed(0);
    const usedMem = (totalMem - freeMem);
    const uptimeSeconds = Math.floor(process.uptime());
    const uptimeHrs = Math.floor(uptimeSeconds / 3600);
    const uptimeMins = Math.floor((uptimeSeconds % 3600) / 60);

    return ctx.replyWithMarkdown(
        `*🔬 LIVE NODE METRICS & TELEMETRY REPORT*\n` +
        `──────────────────────────────\n` +
        `• *CORE ARCHITECTURE:* ${os.arch()} Node Environment\n` +
        `• *SYSTEM PLATFORM:* ${os.platform()} Kernel OS\n` +
        `• *ACTIVE UPTIME:* ${uptimeHrs} Hours, ${uptimeMins} Minutes\n` +
        `• *MEMORY ALLOCATION:* ${usedMem}MB / ${totalMem}MB Active\n` +
        `• *WEBHOOK API STREAM:* TELEGRAM SYNCED (SECURE)\n\n` +
        `_Hardware nodes operating inside normal boundaries. Runtime is stable._` +
        TERMINAL_FOOTER,
        Markup.inlineKeyboard([[Markup.button.callback('🔙 ROOT TERMINAL', 'console_root')]])
    );
});

// 10. GLOBAL RETURN ESCAPE CHAIN
bot.action('console_root', async (ctx) => {
    return ctx.replyWithPhoto(CONSOLE_BANNER, {
        caption: `*🔒 LAZZ ADMIN OPERATIONS CENTER*\nSystem operational. Awaiting client administrative initialization token...`,
        parse_mode: 'Markdown',
        ...consoleMenu
    });
});

bot.launch();
console.log("Lazz Enterprise Systems Console: Active Execution.");
 
