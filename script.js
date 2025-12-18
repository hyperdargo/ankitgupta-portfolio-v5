// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    document.getElementById('current-date').textContent = `Last updated: ${currentDate}`;
    
    // Initialize navigation
    initNavigation();
    
    // Initialize theme switcher
    initThemeSwitcher();
    
    // Initialize terminal
    initTerminal();
    
    // Add animations
    addAnimations();
    
    console.log('✅ Portfolio loaded successfully!');
});

// Navigation System
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Set up hash navigation
    function navigateToPage(pageId) {
        // Update URL hash without scrolling
        history.pushState(null, null, `#${pageId}`);
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            }
        });
        
        // Show selected page
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
    }
    
    // Set up click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            navigateToPage(pageId);
        });
    });
    
    // Handle initial hash
    const initialPage = window.location.hash.substring(1) || 'home';
    navigateToPage(initialPage);
    
    // Handle back/forward navigation
    window.addEventListener('popstate', function() {
        const pageId = window.location.hash.substring(1) || 'home';
        navigateToPage(pageId);
    });
}

// Navigation helper
function navigateTo(pageId) {
    const link = document.querySelector(`.nav-link[href="#${pageId}"]`);
    if (link) link.click();
}

// Theme Switcher
function initThemeSwitcher() {
    const themeOptions = document.querySelectorAll('.theme-option');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'green';
    
    // Set saved theme
    setTheme(savedTheme);
    
    // Update active theme button
    themeOptions.forEach(option => {
        if (option.getAttribute('data-theme') === savedTheme) {
            option.classList.add('active');
        }
        
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            
            // Update active button
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Save to localStorage
            localStorage.setItem('portfolio-theme', theme);
        });
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Add theme transition animation
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
}

// Terminal System
let terminalHistory = [];
let historyIndex = -1;
let flagFound = false;

function initTerminal() {
    const terminalInput = document.getElementById('terminalCommand');
    const terminalOutput = document.getElementById('terminalOutput');
    
    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim();
            this.value = '';
            
            // Add command to history
            if (command) {
                terminalHistory.push(command);
                historyIndex = terminalHistory.length;
            }
            
            // Process command
            processCommand(command);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                this.value = terminalHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < terminalHistory.length - 1) {
                historyIndex++;
                this.value = terminalHistory[historyIndex];
            } else {
                historyIndex = terminalHistory.length;
                this.value = '';
            }
        }
    });
    
    // Add welcome message
    addTerminalLine('Type "help" for available commands');
}

function processCommand(command) {
    const terminalOutput = document.getElementById('terminalOutput');
    
    // Add command to output
    addTerminalLine(`<span class="prompt">user@dtempire:~$</span> ${command}`);
    
    // Process command
    const cmd = command.toLowerCase().split(' ')[0];
    const args = command.split(' ').slice(1);
    
    switch(cmd) {
        case 'help':
            addTerminalLine('Available commands:');
            addTerminalLine('  help - Show this help message');
            addTerminalLine('  clear - Clear terminal screen');
            addTerminalLine('  ls - List directory contents');
            addTerminalLine('  cd [dir] - Change directory');
            addTerminalLine('  whoami - Show current user');
            addTerminalLine('  date - Show current date and time');
            addTerminalLine('  echo [text] - Print text to terminal');
            addTerminalLine('  scan - Scan system for anomalies');
            addTerminalLine('  exit - Close terminal');
            break;
            
        case 'clear':
            terminalOutput.innerHTML = '';
            addTerminalLine('Terminal cleared');
            break;
            
        case 'ls':
            addTerminalLine('Desktop  Documents  Downloads  Music  Pictures  Videos');
            addTerminalLine('Projects  Services  Documentation  home');
            break;
            
        case 'cd':
            if (args.length === 0) {
                addTerminalLine('Usage: cd [directory]');
            } else if (args[0] === '/home/dtempire/flag') {
                if (flagFound) {
                    revealFlag();
                } else {
                    addTerminalLine('Access denied. Directory requires special access.');
                    addTerminalLine('Hint: Try scanning the system first with "scan" command');
                }
            } else if (args[0] === 'home') {
                addTerminalLine('Changed directory to /home');
            } else {
                addTerminalLine(`Directory '${args[0]}' not found`);
            }
            break;
            
        case 'whoami':
            addTerminalLine('user');
            break;
            
        case 'date':
            addTerminalLine(new Date().toString());
            break;
            
        case 'echo':
            addTerminalLine(args.join(' '));
            break;
            
        case 'scan':
            startSystemScan();
            break;
            
        case 'exit':
            closeTerminal();
            break;
            
        default:
            if (command) {
                addTerminalLine(`Command not found: ${command}`);
            }
    }
    
    // Scroll to bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function addTerminalLine(text) {
    const terminalOutput = document.getElementById('terminalOutput');
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function startSystemScan() {
    addTerminalLine('Starting system scan...');
    
    const steps = [
        'Scanning network... ✓',
        'Checking services... ✓',
        'Analyzing logs... ✓',
        'Verifying security... ✓',
        'Checking for anomalies...',
        'ANOMALY DETECTED in /home/dtempire/flag',
        'Access required to investigate'
    ];
    
    let i = 0;
    const scanInterval = setInterval(() => {
        if (i < steps.length) {
            addTerminalLine(steps[i]);
            i++;
            
            if (steps[i-1].includes('ANOMALY DETECTED')) {
                flagFound = true;
                addTerminalLine('<div class="flag-message">');
                addTerminalLine('<h3>⚠️ Security Alert!</h3>');
                addTerminalLine('Anomaly detected in restricted directory.');
                addTerminalLine('Use command: cd /home/dtempire/flag to investigate');
                addTerminalLine('</div>');
            }
        } else {
            clearInterval(scanInterval);
        }
    }, 800);
}

function revealFlag() {
    addTerminalLine('<div class="flag-message">');
    addTerminalLine('<h3>🎉 FLAG FOUND!</h3>');
    addTerminalLine('<div class="flag-code">flag{you_f0uNd_Fl@g_Dm_D@rG0_To_Cl@am}</div>');
    addTerminalLine('</div>');
    
    addTerminalLine('<div class="prize-message">');
    addTerminalLine('🎁 Congratulations! You found the hidden flag!');
    addTerminalLine('You won a free always online server (game or code hosting server).');
    addTerminalLine('DM hyperdargo on Discord to claim your prize!');
    addTerminalLine('</div>');
}

// Terminal Controls
function openTerminal() {
    document.getElementById('terminalOverlay').classList.add('active');
    document.getElementById('terminalCommand').focus();
}

function closeTerminal() {
    document.getElementById('terminalOverlay').classList.remove('active');
}

function minimizeTerminal() {
    closeTerminal();
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    });
}

// Animations
function addAnimations() {
    // Add floating animation to terminal toggle
    const toggle = document.querySelector('.terminal-toggle');
    if (toggle) {
        let floatDirection = 1;
        
        setInterval(() => {
            const currentBottom = parseInt(window.getComputedStyle(toggle).bottom);
            const newBottom = currentBottom + (floatDirection * 1);
            
            if (newBottom > 40 || newBottom < 20) {
                floatDirection *= -1;
            }
            
            toggle.style.bottom = `${newBottom}px`;
        }, 100);
    }
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .section-title, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+T to open terminal
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        openTerminal();
    }
    
    // Escape to close terminal
    if (e.key === 'Escape') {
        closeTerminal();
    }
});

// Service status simulation
function simulateServiceStatus() {
    const statusElements = document.querySelectorAll('.service-status');
    
    setInterval(() => {
        statusElements.forEach(status => {
            // Randomly change status (mostly online)
            if (Math.random() > 0.95) {
                status.classList.remove('online');
                status.innerHTML = '<i class="fas fa-circle"></i> Offline';
            } else {
                status.classList.add('online');
                status.innerHTML = '<i class="fas fa-circle"></i> Online';
            }
        });
    }, 10000);
}

// Start service status simulation
simulateServiceStatus();