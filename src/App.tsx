import React, { useState, useEffect } from 'react';
import {
    Palette,
    Layout,
    Type,
    MousePointer2,
    Layers,
    Moon,
    Sun,
    Zap,
    Box,
    Boxes,
    CheckCircle2,
    AlertCircle,
    Menu,
    X,
    Github,
    Search,
    Bell,
    User,
    CreditCard,
    Users,
    Settings,
    Sliders,
    MessageSquare,
    Clock,
    ChevronRight,
    MoreHorizontal,
    Send,
    RefreshCw,
    Loader2,
    Plus,
    ArrowRight,
    Check,
    Terminal
} from 'lucide-react';

const themes = [
    { id: 'minimal', name: 'Modern Minimal', icon: <Zap size={18} />, description: 'Clean, professional, and accessible.' },
    { id: 'glassmorphism', name: 'Glassmorphism', icon: <Layers size={18} />, description: 'Transparent, blurred backgrounds.' },
    { id: 'neo-brutalism', name: 'Neo-Brutalism', icon: <Box size={18} />, description: 'Bold borders and high contrast.' },
    { id: 'soft-ui', name: 'Soft UI (Neumo)', icon: <MousePointer2 size={18} />, description: 'Soft shadows and highlights.' },
    { id: 'claymorphism', name: 'Claymorphism', icon: <Palette size={18} />, description: '3D clay-like soft elements.' },
    { id: 'flat', name: 'Flat Design', icon: <Layout size={18} />, description: 'Simple, 2D vibrant aesthetic.' },
    { id: 'material', name: 'Material V2', icon: <Box size={18} />, description: 'Google-inspired depth.' },
    { id: 'cyberpunk', name: 'Cyberpunk', icon: <Zap size={18} />, description: 'Neon high-tech dystopia.' },
    { id: 'retro', name: 'Retro Pixel', icon: <Box size={18} />, description: '8-bit nostalgia visuals.' },
    { id: 'oled', name: 'Dark OLED', icon: <Moon size={18} />, description: 'Pure black power-saving.' },
    { id: 'terminal', name: 'Terminal', icon: <Type size={18} />, description: 'Command-line aesthetic.' },
    { id: 'paper', name: 'Paper / E-Ink', icon: <Type size={18} />, description: 'Tactile, easy on the eyes.' },
    { id: 'nord', name: 'Nord', icon: <Sun size={18} />, description: 'Arctic, bluish color palette.' },
    { id: 'dracula', name: 'Dracula', icon: <Moon size={18} />, description: 'Dark theme for night owls.' },
    { id: 'monokai', name: 'Monokai', icon: <Box size={18} />, description: 'High-contrast vibrant theme.' },
    { id: 'solarized-light', name: 'Solarized Light', icon: <Sun size={18} />, description: 'Precision colors for clarity.' },
    { id: 'solarized-dark', name: 'Solarized Dark', icon: <Moon size={18} />, description: 'Optimized for long coding.' },
    { id: 'gruvbox', name: 'Gruvbox', icon: <Palette size={18} />, description: 'Retro groove color scheme.' },
    { id: 'catppuccin', name: 'Catppuccin', icon: <Moon size={18} />, description: 'Soothing pastel colors.' },
    { id: 'synthwave', name: 'Synthwave', icon: <Zap size={18} />, description: '80s neon glows aesthetic.' },
    { id: 'win95', name: 'Windows 95', icon: <Box size={18} />, description: 'Classic 3D desktop look.' },
    { id: 'ios', name: 'iOS 7+', icon: <Layers size={18} />, description: 'Frosted glass rounded corners.' },
    { id: 'fluent', name: 'Fluent Design', icon: <Layers size={18} />, description: 'Translucent layers design.' },
    { id: 'high-contrast', name: 'High Contrast', icon: <Zap size={18} />, description: 'Maximum accessibility.' },
    { id: 'nature', name: 'Nature', icon: <Sun size={18} />, description: 'Organic tones and calming greens.' },
    { id: 'ocean', name: 'Ocean', icon: <Layers size={18} />, description: 'Deep blues refreshing aquatics.' },
    { id: 'sunset', name: 'Sunset', icon: <Sun size={18} />, description: 'Warm oranges soft purples.' },
    { id: 'berry', name: 'Berry', icon: <Palette size={18} />, description: 'Rich magentas deep reds.' },
    { id: 'royal', name: 'Royal', icon: <Layers size={18} />, description: 'Purples and elegant gold.' },
    { id: 'luxury', name: 'Luxury', icon: <Moon size={18} />, description: 'Sleek black premium gold.' },
    { id: 'coffee', name: 'Coffee', icon: <Palette size={18} />, description: 'Earthy browns warm creams.' },
    { id: 'mint', name: 'Mint', icon: <Zap size={18} />, description: 'Fresh energetic greens.' },
    { id: 'lavender', name: 'Lavender', icon: <Sun size={18} />, description: 'Soft calming purple tones.' },
    { id: 'sky', name: 'Sky', icon: <Sun size={18} />, description: 'Bright airy optimistic blues.' },
    { id: 'canary', name: 'Canary', icon: <Sun size={18} />, description: 'Cheerful high-energy yellow.' },
    { id: 'midnight', name: 'Midnight', icon: <Moon size={18} />, description: 'Deep navy starry accents.' },
    { id: 'forest', name: 'Forest', icon: <Sun size={18} />, description: 'Dense greens earthy textures.' },
    { id: 'wireframe', name: 'Wireframe', icon: <Layout size={18} />, description: 'Dashed line blueprint feel.' },
    { id: 'skeleton', name: 'Skeleton', icon: <Layers size={18} />, description: 'Minimalist placeholder look.' },
    { id: 'hand-drawn', name: 'Hand Drawn', icon: <Palette size={18} />, description: 'Sketched, organic look.' },
    { id: 'corporate', name: 'Corporate', icon: <Layout size={18} />, description: 'Professional business grid.' },
    { id: 'startup', name: 'Startup', icon: <Zap size={18} />, description: 'Modern fast-paced bold.' },
    { id: 'bauhaus', name: 'Bauhaus', icon: <Box size={18} />, description: 'Geometric primary functional.' },
    { id: 'swiss', name: 'Swiss', icon: <Layout size={18} />, description: 'Grid-based typo focused.' },
    { id: 'lofi', name: 'Lo-Fi', icon: <Type size={18} />, description: 'Raw grainy low-fidelity.' },
    { id: 'vaporwave', name: 'Vaporwave', icon: <Zap size={18} />, description: 'Glitch art aesthetic.' },
    { id: 'y2k', name: 'Y2K', icon: <Layers size={18} />, description: 'Glossy plastic bubble tech.' },
    { id: 'pop-art', name: 'Pop Art', icon: <Palette size={18} />, description: 'Comic-book style art.' },
    { id: 'gothic', name: 'Gothic', icon: <Moon size={18} />, description: 'Ornate dark dramatic.' },
    { id: 'dashed', name: 'Dashed / Draft', icon: <Layout size={18} />, description: 'Conceptual unfinished draft.' },
];

const App = () => {
    const [currentTheme, setCurrentTheme] = useState('minimal');
    const [layoutMode, setLayoutMode] = useState('dashboard'); // 'classic' or 'dashboard'

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    return (
        <div className="flex h-screen overflow-hidden bg-bg-primary">
            {/* Sidebar - Theme Switcher */}
            <aside className={`w-80 glass-card m-4 hidden md:flex flex-col overflow-hidden transition-all duration-300 h-[calc(100vh-2rem)]`}>
                <div className="p-6 border-b border-border-default">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        Antigravity UI <Zap className="text-accent" />
                    </h1>
                    <p className="text-text-secondary text-sm mt-1">50 Styles Live Preview</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Select Style (50/50)</p>
                    </div>
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => setCurrentTheme(theme.id)}
                            className={`w-full text-left p-4 rounded-custom transition-all group relative overflow-hidden ${currentTheme === theme.id
                                ? 'bg-accent text-accent-foreground shadow-custom'
                                : 'hover:bg-bg-secondary text-text-primary'
                                }`}
                        >
                            <div className="flex items-center gap-3 relative z-10">
                                {theme.icon}
                                <div>
                                    <div className="font-bold">{theme.name}</div>
                                    <div className={`text-xs ${currentTheme === theme.id ? 'opacity-80' : 'text-text-secondary'}`}>
                                        {theme.description}
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="p-6 border-t border-border-default text-xs text-text-secondary text-center">
                    Pro Max v2.0 • 2026
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto h-screen custom-scrollbar relative">
                {/* Navbar Demo */}
                <nav className="glass-card px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <span className="font-black text-2xl tracking-tighter">PR<span className="text-accent">O</span></span>
                        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                            <div className="flex bg-bg-secondary p-1 rounded-lg border border-border-default mr-4">
                                <button
                                    onClick={() => setLayoutMode('classic')}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${layoutMode === 'classic' ? 'bg-bg-primary shadow-sm text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                                >
                                    <Layout size={14} /> Classic
                                </button>
                                <button
                                    onClick={() => setLayoutMode('dashboard')}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${layoutMode === 'dashboard' ? 'bg-bg-primary shadow-sm text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                                >
                                    <Zap size={14} /> Dashboard
                                </button>
                                <button
                                    onClick={() => setLayoutMode('patterns')}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${layoutMode === 'patterns' ? 'bg-bg-primary shadow-sm text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                                >
                                    <Plus size={14} /> Patterns
                                </button>
                                <button
                                    onClick={() => setLayoutMode('themes-view')}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${layoutMode === 'themes-view' ? 'bg-bg-primary shadow-sm text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                                >
                                    <Palette size={14} /> Themes
                                </button>
                                <button
                                    onClick={() => setLayoutMode('docs')}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${layoutMode === 'docs' ? 'bg-bg-primary shadow-sm text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                                >
                                    <Type size={14} /> Docs
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center bg-bg-secondary border border-border-default rounded-custom px-3 py-1.5 gap-2">
                            <Search size={14} className="text-text-secondary" />
                            <input type="text" placeholder="Quick search..." className="bg-transparent text-sm outline-none w-32 focus:w-48 transition-all" />
                            <kbd className="text-[10px] bg-bg-primary border border-border-default px-1.5 py-0.5 rounded">⌘K</kbd>
                        </div>
                        <button className="p-2 hover:bg-bg-secondary rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-bg-primary"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-custom">
                            <User size={20} />
                        </div>
                    </div>
                </nav>

                {layoutMode === 'classic' && (
                    <>
                        {/* Hero Section */}
                        <section className="text-center py-12 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold animate-pulse">
                                <Zap size={14} /> New Style: {themes.find(t => t.id === currentTheme)?.name}
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-none">
                                Design <span className="text-accent">Everything</span> faster than light.
                            </h2>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                                Experience the future of UI with our 50 curated design systems. Swappable in real-time, built for performance.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <button className={`px-8 py-4 rounded-custom font-bold text-lg shadow-custom flex items-center gap-2 ${currentTheme === 'neo-brutalism' ? 'brutal-btn' : 'bg-accent text-accent-foreground hover:opacity-90'}`}>
                                    Get Started <Zap size={18} />
                                </button>
                                <button className="px-8 py-4 rounded-custom font-bold text-lg border border-border-default bg-bg-secondary hover:bg-border-default transition-colors">
                                    Read Documentation
                                </button>
                            </div>
                        </section>

                        {/* Components Gallery */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
                            {/* Typography */}
                            <section className="glass-card p-8 space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Type className="text-accent" />
                                    <h3 className="font-bold text-xl">Typography System</h3>
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-black tracking-tight">Display Large</h1>
                                    <h2 className="text-3xl font-bold">Heading Second</h2>
                                    <h3 className="text-2xl font-semibold">Subtitle Medium</h3>
                                    <p className="text-text-primary leading-relaxed">
                                        Body text goes here. This demo shows how the color palette and spacing adjust automatically across different themes.
                                    </p>
                                    <p className="text-text-secondary text-sm">
                                        Secondary/Muted text is used for less important information and captions.
                                    </p>
                                    <div className="p-4 bg-bg-secondary rounded-custom border border-border-default">
                                        <code className="text-xs font-mono text-accent">--font-family: 'Inter', system-ui;</code>
                                    </div>
                                </div>
                            </section>

                            {/* Buttons & Actions */}
                            <section className="glass-card p-8 space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <MousePointer2 className="text-accent" />
                                    <h3 className="font-bold text-xl">Interactive Elements</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className={`p-4 rounded-custom font-bold flex items-center justify-center gap-2 ${currentTheme === 'neo-brutalism' ? 'brutal-btn' : 'bg-accent text-accent-foreground shadow-custom'}`}>
                                        Primary Button
                                    </button>
                                    <button className="p-4 rounded-custom font-bold border-2 border-border-default bg-bg-secondary flex items-center justify-center gap-2">
                                        Secondary
                                    </button>
                                    <button className="p-4 rounded-custom font-bold text-accent hover:underline flex items-center justify-center gap-2">
                                        Ghost Link
                                    </button>
                                    <button className="p-4 rounded-custom font-bold bg-red-500 text-white shadow-lg flex items-center justify-center gap-2">
                                        Destructive
                                    </button>
                                    <div className="col-span-2 space-x-2 flex">
                                        <div className="flex-1 h-2 bg-bg-secondary rounded-full overflow-hidden">
                                            <div className="w-2/3 h-full bg-accent animate-pulse"></div>
                                        </div>
                                        <CheckCircle2 className="text-green-500" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                )}

                {layoutMode === 'dashboard' && (
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-20">
                        {/* Column 1: Payment & Forms */}
                        <div className="xl:col-span-1 space-y-6">
                            <div className="glass-card p-6 space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg">Checkout</h3>
                                    <p className="text-xs text-text-secondary">Secure payment and billing data.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-1 space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">Month</label>
                                            <select className="w-full text-xs p-2.5 bg-bg-secondary border border-border-default rounded-custom outline-none">
                                                <option>MM</option>
                                                {Array.from({ length: 12 }, (_, i) => <option key={i}>{String(i + 1).padStart(2, '0')}</option>)}
                                            </select>
                                        </div>
                                        <div className="flex-1 space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">Year</label>
                                            <select className="w-full text-xs p-2.5 bg-bg-secondary border border-border-default rounded-custom outline-none">
                                                <option>YYYY</option>
                                                {[2026, 2027, 2028, 2029, 2030].map(y => <option key={y}>{y}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-border-default">
                                        <h4 className="text-xs font-bold mb-1">Billing Address</h4>
                                        <p className="text-[10px] text-text-secondary mb-3 leading-relaxed">
                                            The billing address associated with your payment method
                                        </p>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-4 h-4 rounded border border-accent bg-accent flex items-center justify-center">
                                                <Check size={10} className="text-accent-foreground" />
                                            </div>
                                            <span className="text-[11px] font-medium">Same as shipping address</span>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 pt-2 border-t border-border-default">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">Comments</label>
                                        <textarea
                                            placeholder="Add any additional comments"
                                            className="w-full text-xs p-3 bg-bg-secondary border border-border-default rounded-custom min-h-[80px] outline-none"
                                        />
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <button className={`flex-1 py-2.5 rounded-custom font-bold text-xs shadow-custom ${currentTheme === 'neo-brutalism' ? 'brutal-btn' : 'bg-accent text-accent-foreground'}`}>Submit</button>
                                        <button className="flex-1 py-2.5 rounded-custom border border-border-default bg-bg-secondary text-xs font-bold">Cancel</button>
                                    </div>
                                </div>

                                {/* Column 1 Extended Widgets */}
                                {/* Pagination & Copilot */}
                                <div className="flex flex-wrap gap-4 items-center pt-2">
                                    <div className="flex items-center bg-bg-secondary rounded-lg border border-border-default p-1">
                                        <button className="w-8 h-8 flex items-center justify-center text-xs font-bold bg-bg-primary rounded border border-border-default shadow-sm">1</button>
                                        <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-text-secondary hover:bg-bg-primary rounded transition-colors">2</button>
                                        <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-text-secondary hover:bg-bg-primary rounded transition-colors">3</button>
                                        <div className="w-px h-4 bg-border-default mx-1"></div>
                                        <button className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary"><ChevronRight size={14} /></button>
                                    </div>
                                    <button className="h-10 px-4 flex items-center gap-2 bg-bg-secondary border border-border-default rounded-lg text-xs font-bold hover:bg-bg-primary transition-colors shadow-sm">
                                        <Zap size={14} className="text-yellow-500 fill-yellow-500" /> Copilot
                                    </button>
                                </div>

                                {/* Avatar Stack Widget */}
                                <div className="glass-card p-5 flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-primary bg-bg-secondary flex items-center justify-center text-[10px] font-bold shadow-sm relative overflow-hidden">
                                                <div className="absolute inset-0 bg-accent/20"></div>
                                                U{i}
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-bg-primary bg-accent text-accent-foreground flex items-center justify-center text-[10px] font-bold shadow-sm z-10">
                                            +9
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold">Team Active</div>
                                        <div className="flex items-center gap-1 justify-end">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-[10px] text-text-secondary">Online</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Analytics Widget */}
                                <div className="glass-card p-5 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Daily Usage</span>
                                        <span className="text-xs font-mono text-accent">84%</span>
                                    </div>
                                    <div className="h-2 w-full bg-bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full bg-accent w-[84%] rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-text-secondary pt-1">
                                        <span>0GB</span>
                                        <span>500GB</span>
                                        <span>1TB</span>
                                    </div>
                                </div>

                                {/* System Status Widget */}
                                <div className="glass-card p-5 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Terminal size={14} className="text-accent" />
                                        <h4 className="font-bold text-xs uppercase tracking-wider">System Status</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[10px] font-medium">
                                                <span>API Latency</span>
                                                <span className="text-green-500">24ms</span>
                                            </div>
                                            <div className="flex gap-1 h-1.5">
                                                {[...Array(20)].map((_, i) => (
                                                    <div key={i} className={`flex-1 rounded-full ${i < 15 ? 'bg-green-500' : 'bg-bg-secondary'}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[10px] font-medium">
                                                <span>Database Load</span>
                                                <span className="text-accent">42%</span>
                                            </div>
                                            <div className="w-full bg-bg-secondary h-1.5 rounded-full overflow-hidden">
                                                <div className="h-full bg-accent w-[42%] rounded-full relative">
                                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Team & Messaging */}
                        <div className="xl:col-span-1 space-y-6">
                            <div className="glass-card p-6 space-y-4">
                                <div className="flex items-center gap-2 bg-bg-secondary p-1 rounded-custom border border-border-default">
                                    <button className="flex-1 py-1 px-1 rounded-custom bg-white/20 text-white text-[10px] font-bold flex items-center justify-center gap-1">
                                        <RefreshCw size={10} className="animate-spin" /> Syncing
                                    </button>
                                    <button className="flex-1 py-1 px-1 rounded-custom text-text-secondary text-[10px] font-bold flex items-center justify-center gap-1 hover:bg-bg-primary">
                                        <RefreshCw size={10} /> Updating
                                    </button>
                                    <button className="flex-1 py-1 px-1 rounded-custom text-text-secondary text-[10px] font-bold flex items-center justify-center gap-1 hover:bg-bg-primary">
                                        <RefreshCw size={10} /> Loading
                                    </button>
                                </div>

                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Plus size={14} className="text-accent" />
                                    </div>
                                    <input type="text" placeholder="Send a message..." className="w-full text-xs p-3 pl-11 bg-bg-secondary border border-border-default rounded-full outline-none" />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <Loader2 size={14} className="text-text-secondary animate-spin" />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div>
                                        <h4 className="font-bold text-sm">Price Range</h4>
                                        <p className="text-[10px] text-text-secondary">Set your budget range ($200 - 800).</p>
                                    </div>
                                    <div className="relative h-1.5 bg-bg-secondary rounded-full border border-border-default">
                                        <div className="absolute inset-y-0 left-[30%] right-[30%] bg-accent"></div>
                                        <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-accent rounded-full shadow-custom"></div>
                                        <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-accent rounded-full shadow-custom"></div>
                                    </div>
                                    <div className="flex items-center justify-between bg-bg-secondary p-2.5 rounded-custom border border-border-default">
                                        <div className="flex items-center gap-2">
                                            <Search size={14} className="text-text-secondary" />
                                            <span className="text-xs">Search...</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-text-secondary">12 results</span>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div className="relative">
                                        <input type="text" defaultValue="https://example.com" className="w-full text-xs p-3 bg-bg-secondary border border-border-default rounded-custom outline-none pr-10 text-text-secondary" />
                                        <AlertCircle size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                                    </div>

                                    <div className="p-4 bg-bg-secondary border border-border-default rounded-xl space-y-4">
                                        <p className="text-xs text-text-secondary">Ask, Search or Chat...</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Plus size={14} className="text-accent" /></div>
                                                <span className="text-[11px] font-bold">Auto</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-bold text-text-secondary">52% used</span>
                                                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                                                    <ArrowRight size={14} className="-rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-bg-secondary border border-border-default rounded-custom">
                                        <span className="text-xs text-text-secondary">@shadcn</span>
                                        <div className="w-4 h-4 rounded-full bg-white border border-border-default"></div>
                                    </div>
                                </div>

                                {/* Column 2 Extended Widgets */}

                            </div>

                            {/* How did you hear card */}
                            <div className="glass-card p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h4 className="font-bold text-lg leading-tight max-w-[120px]">How did you hear about us?</h4>
                                    <div className="p-2 bg-accent/10 rounded-full text-accent">
                                        <Search size={16} />
                                    </div>
                                </div>
                                <p className="text-[10px] text-text-secondary">Please select the option that best describes how you found our platform.</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <div className="px-4 py-2 rounded-full bg-text-primary text-bg-primary text-xs font-bold flex items-center gap-2 shadow-lg">
                                        <CheckCircle2 size={14} /> Social Media
                                    </div>
                                    {['Search Engine', 'Referral', 'Advertisement', 'Event'].map(tag => (
                                        <div key={tag} className="px-4 py-2 rounded-full border border-border-default text-xs font-bold text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:border-text-primary transition-all cursor-pointer">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Config & Status */}
                        <div className="xl:col-span-1 space-y-6">
                            <div className="glass-card p-6 space-y-6">
                                <div>
                                    <h4 className="font-bold text-sm">Compute Environment</h4>
                                    <p className="text-[10px] text-text-secondary">Select the compute environment for your cluster.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-4 border-2 border-accent bg-accent/5 rounded-custom flex items-center justify-between">
                                        <div>
                                            <span className="font-bold text-sm">Kubernetes</span>
                                            <p className="text-[10px] text-text-secondary mt-1 max-w-[180px]">Run GPU workloads on a K8s configured cluster. This is the default.</p>
                                        </div>
                                        <div className="w-4 h-4 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 border border-border-default rounded-custom flex items-center justify-between opacity-50">
                                        <div>
                                            <span className="font-bold text-sm">Virtual Machine</span>
                                            <p className="text-[10px] text-text-secondary mt-1">Access a VM configured cluster to run workloads.</p>
                                        </div>
                                        <div className="w-4 h-4 rounded-full border-2 border-border-default shrink-0"></div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-border-default">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-sm">Number of GPUs</h4>
                                            <p className="text-[10px] text-text-secondary">You can add more later.</p>
                                        </div>
                                        <div className="flex items-center bg-bg-secondary rounded-lg border border-border-default">
                                            <span className="px-4 py-1.5 font-bold text-sm">8</span>
                                            <div className="flex border-l border-border-default">
                                                <button className="px-3 py-1.5 hover:bg-bg-primary transition-colors border-r border-border-default"><Sliders size={12} /></button>
                                                <button className="px-3 py-1.5 hover:bg-bg-primary transition-colors"><Plus size={12} /></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-sm">Wallpaper Tinting</h4>
                                            <p className="text-[10px] text-text-secondary">Allow the wallpaper to be tinted.</p>
                                        </div>
                                        <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                                            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 Extended Widgets */}
                            {/* Processing card */}
                            <div className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-4 relative border-dashed border-2 border-border-default bg-transparent">
                                <div className="w-10 h-10 rounded-full border-2 border-text-secondary/20 border-t-text-secondary animate-spin"></div>
                                <div>
                                    <h4 className="font-bold text-base">Processing Data</h4>
                                    <p className="text-[10px] text-text-secondary mt-1 max-w-[150px] mx-auto">Analyzing payment gateways and syncing status.</p>
                                </div>
                                <button className="px-6 py-2 bg-bg-secondary border border-border-default rounded-lg text-xs font-bold mt-2">Cancel</button>
                            </div>

                            {/* Quick Actions Row */}
                            <div className="flex gap-4">
                                <button className="flex-1 py-3 rounded-lg border border-border-default bg-bg-secondary hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2 text-xs font-bold">
                                    <Bell size={14} /> Alerts
                                </button>
                                <button className="flex-1 py-3 rounded-lg border border-border-default bg-bg-secondary hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2 text-xs font-bold">
                                    <Settings size={14} /> Config
                                </button>
                            </div>

                            {/* Recent Activity Widget */}
                            <div className="glass-card p-5">
                                <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-text-secondary">Recent Activity</h4>
                                <div className="space-y-4">
                                    {[
                                        { icon: <Zap size={10} />, text: "Deployment trigger", time: "2m ago", color: "text-yellow-500 bg-yellow-500/10" },
                                        { icon: <CheckCircle2 size={10} />, text: "System backup", time: "1h ago", color: "text-green-500 bg-green-500/10" },
                                        { icon: <Bell size={10} />, text: "New alert rule", time: "3h ago", color: "text-accent bg-accent/10" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] font-bold truncate">{item.text}</p>
                                                <p className="text-[9px] text-text-secondary">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                )}

                {
                    layoutMode === 'patterns' && (
                        <div className="space-y-12 pb-20">
                            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: 'Feature Strategy', icon: <Boxes className="text-accent" />, desc: 'Atomic design principles applied to enterprise-grade components.' },
                                    { title: 'Interaction Layer', icon: <MousePointer2 className="text-accent" />, desc: 'Smooth transitions and tactile feedback for every user touchpoint.' },
                                    { title: 'Data Flow', icon: <RefreshCw className="text-accent" />, desc: 'Real-time synchronization and optimistic UI patterns.' }
                                ].map((item, i) => (
                                    <div key={i} className="glass-card p-8 space-y-4 group hover:scale-[1.02] transition-transform cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-bold text-xl">{item.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                                        <div className="pt-4 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
                                            Explore Pattern <ArrowRight size={14} />
                                        </div>
                                    </div>
                                ))}
                            </section>

                            <section className="glass-card p-10 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h2 className="text-4xl font-black">Modern Grid Systems</h2>
                                        <p className="text-text-secondary leading-relaxed">
                                            Our layouts use a dynamic 12-column grid that adapts based on the active theme's spacing variables.
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="px-4 py-2 bg-bg-secondary border border-border-default rounded-lg text-xs font-mono">grid-cols-12</div>
                                            <div className="px-4 py-2 bg-bg-secondary border border-border-default rounded-lg text-xs font-mono">gap-custom</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 h-48">
                                        {Array.from({ length: 12 }).map((_, i) => (
                                            <div key={i} className="bg-accent/10 border border-accent/20 rounded-md flex items-end p-2">
                                                <div className="w-full bg-accent/20 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                }

                {
                    layoutMode === 'themes-view' && (
                        <div className="space-y-8 pb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="glass-card p-6 space-y-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary">Color Palette</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent border border-white/10 shadow-sm"></div>
                                            <div>
                                                <p className="text-sm font-bold">Primary</p>
                                                <p className="text-[10px] font-mono text-text-secondary">var(--accent)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-bg-secondary border border-border-default"></div>
                                            <div>
                                                <p className="text-sm font-bold">Secondary</p>
                                                <p className="text-[10px] font-mono text-text-secondary">var(--bg-secondary)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-text-primary"></div>
                                            <div>
                                                <p className="text-sm font-bold">Accent</p>
                                                <p className="text-[10px] font-mono text-text-secondary">var(--text-primary)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-card p-6 space-y-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary">Shadow & Depth</h3>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-bg-primary rounded-lg shadow-sm border border-border-default text-xs font-bold text-center">Shadow SM</div>
                                        <div className="p-3 bg-bg-primary rounded-lg shadow-md border border-border-default text-xs font-bold text-center">Shadow MD</div>
                                        <div className="p-3 bg-bg-primary rounded-lg shadow-xl border border-border-default text-xs font-bold text-center">Shadow LG</div>
                                    </div>
                                </div>

                                <div className="glass-card p-6 space-y-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary">Border Radius</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="aspect-square bg-accent/10 border border-accent/20 rounded-none flex items-center justify-center text-[10px] font-bold">None</div>
                                        <div className="aspect-square bg-accent/10 border border-accent/20 rounded-md flex items-center justify-center text-[10px] font-bold">MD</div>
                                        <div className="aspect-square bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-[10px] font-bold">XL</div>
                                        <div className="aspect-square bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-[10px] font-bold">Full</div>
                                    </div>
                                </div>

                                <div className="glass-card p-6 space-y-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary">Glass Effects</h3>
                                    <div className="relative h-32 rounded-custom overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-500 to-pink-500"></div>
                                        <div className="absolute inset-4 glass-card flex items-center justify-center text-[10px] font-bold text-white">
                                            Backdrop Blur
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-text-secondary italic">Current: var(--blur)</p>
                                </div>
                            </div>

                            <div className="glass-card p-8">
                                <h3 className="font-bold text-xl mb-6">Typography Scale Visualization</h3>
                                <div className="space-y-8">
                                    <div className="flex items-baseline gap-6">
                                        <span className="text-[10px] font-mono text-text-secondary w-16">7xl</span>
                                        <h1 className="text-7xl font-black">Design Everything</h1>
                                    </div>
                                    <div className="flex items-baseline gap-6 border-t border-border-default pt-6">
                                        <span className="text-[10px] font-mono text-text-secondary w-16">4xl</span>
                                        <h2 className="text-4xl font-bold">The future of components</h2>
                                    </div>
                                    <div className="flex items-baseline gap-6 border-t border-border-default pt-6">
                                        <span className="text-[10px] font-mono text-text-secondary w-16">xl</span>
                                        <h3 className="text-xl font-semibold">Atomic design systems built for scale</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    layoutMode === 'docs' && (
                        <div className="flex gap-8 pb-20">
                            <aside className="w-64 shrink-0 hidden lg:block space-y-8">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-text-secondary">Getting Started</h4>
                                    <nav className="space-y-1">
                                        {['Introduction', 'Installation', 'Architecture', 'Theming'].map(item => (
                                            <a key={item} href="#" className={`block px-3 py-2 rounded-md text-sm font-medium ${item === 'Introduction' ? 'bg-accent/10 text-accent' : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'}`}>
                                                {item}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>

                            <article className="flex-1 glass-card p-10 max-w-4xl mx-auto space-y-8">
                                <div className="space-y-4">
                                    <div className="text-accent text-xs font-bold uppercase tracking-widest">Docs / Getting Started</div>
                                    <h1 className="text-5xl font-black">Introduction</h1>
                                    <p className="text-xl text-text-secondary leading-relaxed">
                                        Stellar UI is a premium component kit designed to give you ultimate flexibility with over 50 swappable design themes.
                                    </p>
                                </div>

                                <div className="p-6 bg-accent/5 border-l-4 border-accent rounded-r-xl">
                                    <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                                        <Zap size={16} /> Note on Interactivity
                                    </h4>
                                    <p className="text-sm text-text-secondary">
                                        All themes are reactive. Changing the data-theme attribute on the root element will instantly update all CSS variables and component styles.
                                    </p>
                                </div>
                            </article>
                        </div>
                    )
                }
            </main >
        </div >
    );
};

export default App;
