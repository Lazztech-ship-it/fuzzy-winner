const { Telegraf, Markup } = require('telegraf');
const http = require('http');
const services = require('./services'); 

// 1. HEALTH-CHECK MAINFRAME SERVER
http.createServer((req, res) => {
  res.write('LAZZ TECH MASTER ENGINE: ACTIVE');
  res.end();
}).listen(process.env.PORT || 3000);

// Initialize with the new token from BotFather
const bot = new Telegraf(process.env.BOT_TOKEN);
const TERMINAL_BANNER = "https://raw.githubusercontent.com/lazztech-ship-it/lazztech.github.io/main/logo.png";

// 2. REUSABLE SYSTEM CORE COMMAND EXECUTION
const runTerminalCommand = async (ctx, operationCode, dataModule) => {
    await ctx.reply(`> _STREAMS: EXECUTING_${operationCode}_LOG_ALLOCATION..._`);
    await new Promise(r => setTimeout(r, 400));
    
    const outputLog = `*${dataModule.title}*\n` +
                      `──────────────────────────────\n` +
                      `*SYSTEM SPECIFICATIONS:*\n${dataModule.specs}\n\n` +
                      `*OPERATOR DIRECTIVE:*\n${dataModule.details}\n\n` +
                      `*SERVICE MATRIX VALUE:*\n${dataModule.pricing}`;

    return ctx.replyWithMarkdown(outputLog, Markup.inlineKeyboard([
        [Markup.button.url('⚡ ENGAGE OPERATOR', 'https://wa.me/254106527992')],
        [Markup.button.callback('🔙 TERMINAL ROOT', 'terminal_root')]
    ]));
};

// 3. MAIN TECH MASTER MENUS
const rootMenu = Markup.inlineKeyboard([
    [Markup.button.callback('🛠️ SCRIPT COMPILER', 'menu_scripts'), Markup.button.callback('📡 NETWORK LAYER', 'menu_network')],
    [Markup.button.callback('🛡️ SYSTEM HARDENING', 'vps_hardening')],
    [Markup.button.callback('💻 MATRIX STATUS', 'system_status')]
]);

bot.start((ctx) => {
    ctx.replyWithPhoto(TERMINAL_BANNER, {
        caption: `*🚨 LAZZ MASTER TERMINAL v6.0 🚨*\n` +
                 `──────────────────────────────\n` +
                 `*SECURE IDENTITY AUTHENTICATED*\n` +
                 `*NODE ACCESS:* OPERATOR [${ctx.from.first_name}]\n` +
                 `*INTEGRITY:* ENCRYPTED AIR-GAPPED CORE\n\n` +
                 `Enter an operational cluster index to deploy resources.`,
        parse_mode: 'Markdown',
        ...rootMenu
    });
});

// 4. SUB-MENU LAYERS (THE ADVANCED PART)
bot.action('menu_scripts', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*🛠️ SYSTEM SCRIPT ARCHIVES* \n──────────────────────────────\nSelect an advanced automation module code branch:`,
        Markup.inlineKeyboard([
            [Markup.button.callback('⚡ BASH PROVISIONING', 'run_bash'), Markup.button.callback('🐳 DOCKER COMPOSE', 'run_docker')],
            [Markup.button.callback('🔙 ROOT MAIN', 'terminal_root')]
        ])
    );
});

bot.action('menu_network', async (ctx) => {
    return ctx.replyWithMarkdown(
        `*📡 NETWORKING & STEALTH TUNNELS*\n──────────────────────────────\nSelect a cryptographic packet routing blueprint:`,
        Markup.inlineKeyboard([
            [Markup.button.callback('🛡️ SNI STEALTH (DPI)', 'run_sni')],
            [Markup.button.callback('🔙 ROOT MAIN', 'terminal_root')]
        ])
    );
});

// 5. DATA STREAM ROUTING
bot.action('run_bash', (ctx) => runTerminalCommand(ctx, 'BASH_CORE_LOAD', services.bash_scripts));
bot.action('run_docker', (ctx) => runTerminalCommand(ctx, 'DOCKER_ENCLAVE_DEPLOY', services.docker_nodes));
bot.action('run_sni', (ctx) => runTerminalCommand(ctx, 'STEALTH_NET_ROUTE', services.sni_stealth));
bot.action('vps_hardening', (ctx) => runTerminalCommand(ctx, 'KERNEL_HARDEN_SEC', services.vps_hardening));

// LIVE SYSTEM TELEMETRY DIAGNOSTIC BUTTON
bot.action('system_status', async (ctx) => {
    await ctx.reply(`> _FETCHING CORE RESILIENCE LOGS..._`);
    await new Promise(r => setTimeout(r, 300));
    return ctx.replyWithMarkdown(
        `*💻 CORE TELEMETRY STATUS REPORT*\n` +
        `──────────────────────────────\n` +
        `• *CORE STATUS:* 🟢 EXECUTING FUNCTIONAL STABLE\n` +
        `• *WEBHOOK STREAM:* ONLINE (ACTIVE STREAM SECURE)\n` +
        `• *SECURITY MATRIX:* MAXIMUM INTEGRITY LOADED\n` +
        `• *DATA RELAY:* ACTIVE SEPARATED COMMAND ARCHIVE`,
        Markup.inlineKeyboard([[Markup.button.callback('🔙 TERMINAL ROOT', 'terminal_root')]])
    );
});

// 6. GLOBAL ESCAPE SEQUENCES
bot.action('terminal_root', async (ctx) => {
    return ctx.replyWithPhoto(TERMINAL_BANNER, {
        caption: `*🚨 LAZZ MASTER TERMINAL*\nSystem ready for next injection sequence.`,
        parse_mode: 'Markdown',
        ...rootMenu
    });
});

bot.launch();
console.log("Lazz Advanced Command Center: Operational.");
 
