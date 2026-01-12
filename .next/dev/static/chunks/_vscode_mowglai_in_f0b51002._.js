(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.vscode/mowglai.in/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/.vscode/mowglai.in/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// --- KNOWLEDGE BASE ---
const SUPPORTED_SERVICES = {
    web_design: [
        'web design',
        'ui',
        'ux',
        'website',
        'interface',
        'landing',
        'store',
        'shop',
        'blog',
        'site',
        'redesign',
        'revamp',
        'visuals',
        'looks'
    ],
    development: [
        'development',
        'code',
        'react',
        'api',
        'backend',
        'frontend',
        'software',
        'app',
        'application',
        'engineering',
        'cms',
        'wordpress',
        'shopify',
        'tech',
        'stack',
        'nextjs',
        'typescript'
    ],
    strategy: [
        'strategy',
        'seo',
        'marketing',
        'growth',
        'analysis',
        'competitor',
        'content',
        'brand',
        'identity',
        'logo',
        'positioning'
    ],
    database: [
        'database',
        'data',
        'cloud',
        'migration',
        'security',
        'sql',
        'nosql',
        'server',
        'hosting',
        'supabase'
    ],
    investment: [
        'price',
        'cost',
        'plan',
        'quote',
        'money',
        'budget',
        'expensive',
        'cheap',
        'package',
        'pricing',
        'investment',
        'billing',
        'payment',
        'terms'
    ],
    about: [
        'about',
        'mowglai',
        'who are you',
        'company',
        'agency',
        'team',
        'mission',
        'vision',
        'what do you do',
        'founder',
        'history'
    ],
    contact: [
        'contact',
        'email',
        'phone',
        'call',
        'reach',
        'address',
        'support',
        'help',
        'location',
        'office',
        'based',
        'where'
    ],
    social: [
        'social',
        'instagram',
        'twitter',
        'linkedin',
        'facebook',
        'media',
        'community'
    ]
};
const FAQ_KNOWLEDGE_BASE = [
    {
        keywords: [
            'location',
            'where are you',
            'located',
            'office',
            'based',
            'city',
            'country'
        ],
        response: "Mowglai operates globally with command centers in Noida (India), London, and Singapore. We work across time zones to ensure continuous delivery.",
        options: [
            {
                label: "Contact Us",
                path: "/contact"
            }
        ]
    },
    {
        keywords: [
            'turnaround',
            'how long',
            'duration',
            'time',
            'timeline',
            'weeks',
            'days'
        ],
        response: "Project timelines vary by complexity. A 'Basic' single-page site typically launches in 5-7 days, while 'Advanced' sites take 10-14 days. 'Epic' enterprise solutions follow a custom roadmap.",
        options: [
            {
                label: "View Process",
                path: "/mowglai-brochure.html",
                external: true
            }
        ]
    },
    {
        keywords: [
            'ecommerce',
            'shop',
            'store',
            'selling',
            'products',
            'shopify',
            'woocommerce'
        ],
        response: "Yes, we build high-performance e-commerce platforms. We ensure secure payment gateways, inventory management, and seamless user checkouts.",
        options: [
            {
                label: "View Services",
                path: "/services"
            }
        ]
    },
    {
        keywords: [
            'brochure',
            'download',
            'pdf',
            'catalog',
            'deck'
        ],
        response: "You can download our detailed brochure to explore our full capabilities and success stories.",
        options: [
            {
                label: "Open Brochure",
                path: "/mowglai-brochure.html",
                external: true
            }
        ]
    },
    {
        keywords: [
            'technology',
            'stack',
            'tech',
            'react',
            'nextjs',
            'typescript',
            'framework'
        ],
        response: "We exclusively use the 2025 Tech Stack: React, Next.js, TypeScript, Tailwind CSS, and Supabase. This ensures your digital asset is fast, secure, and future-proof.",
        options: [
            {
                label: "See Our DNA",
                path: "/our-dna"
            }
        ]
    },
    {
        keywords: [
            'guarantee',
            'warranty',
            'support',
            'maintenance',
            'fix'
        ],
        response: "We provide 30 days of post-launch support for bug fixes and minor tweaks. Ongoing maintenance packages are available for long-term peace of mind.",
        options: [
            {
                label: "Contact Support",
                path: "/contact"
            }
        ]
    }
];
const FUTURE_SERVICES = [
    'blockchain',
    'crypto',
    'nft',
    'web3',
    'vr',
    'ar',
    'metaverse',
    'video editing',
    'video production',
    'photography',
    'social media management',
    'iot',
    'hardware',
    'training',
    'courses',
    'tutorial'
];
const ChatbotModal = ({ isOpen, onClose })=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Drafting State
    const [draftStep, setDraftStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [draftData, setDraftData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        service: '',
        details: ''
    });
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initial Greeting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatbotModal.useEffect": ()=>{
            if (isOpen && messages.length === 0) {
                setMessages([
                    {
                        id: '1',
                        sender: 'bot',
                        text: "Greetings, traveler. I am the Mowglai Guardian. I can guide you to the perfect digital solution. Tell me, what are you looking to build or achieve?",
                        options: [
                            {
                                label: "I need a Website",
                                action: {
                                    "ChatbotModal.useEffect": ()=>processInput("I need a Website")
                                }["ChatbotModal.useEffect"]
                            },
                            {
                                label: "Start a Project Request",
                                action: {
                                    "ChatbotModal.useEffect": ()=>startDrafting()
                                }["ChatbotModal.useEffect"]
                            },
                            {
                                label: "View Pricing",
                                action: {
                                    "ChatbotModal.useEffect": ()=>processInput("View Pricing")
                                }["ChatbotModal.useEffect"]
                            }
                        ]
                    }
                ]);
            }
        }
    }["ChatbotModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatbotModal.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ChatbotModal.useEffect"], [
        messages,
        isTyping
    ]);
    const addMessage = (text, sender, options)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now().toString(),
                    text,
                    sender,
                    options
                }
            ]);
    };
    const simulateTyping = (callback)=>{
        setIsTyping(true);
        setTimeout(()=>{
            setIsTyping(false);
            callback();
        }, 1000);
    };
    // --- DRAFTING FLOW ---
    const startDrafting = ()=>{
        setDraftStep('service');
        addMessage("Initiating Protocol: Project Request.", 'bot');
        simulateTyping(()=>{
            addMessage("First, what kind of service do you require? (e.g., Web Design, Development, SEO, Full Redesign)", 'bot', [
                {
                    label: "Web Design",
                    action: ()=>handleDraftInput("Web Design")
                },
                {
                    label: "Development",
                    action: ()=>handleDraftInput("Development")
                },
                {
                    label: "Full Custom Project",
                    action: ()=>handleDraftInput("Full Custom Project")
                }
            ]);
        });
    };
    const handleDraftInput = (text)=>{
        // Echo user choice
        addMessage(text, 'user');
        if (draftStep === 'service') {
            setDraftData((prev)=>({
                    ...prev,
                    service: text
                }));
            setDraftStep('details');
            simulateTyping(()=>{
                addMessage(`Understood: ${text}. Now, please describe your requirements, goals, or any specific features you need. The more details, the accurate our initial assessment will be.`, 'bot');
            });
        } else if (draftStep === 'details') {
            setDraftData((prev)=>({
                    ...prev,
                    details: text
                }));
            setDraftStep('none'); // End drafting
            simulateTyping(()=>{
                const mailSubject = `New Project Request: ${draftData.service}`;
                const mailBody = `Service Requested: ${draftData.service}\n\nProject Details:\n${text}`;
                const mailToLink = `mailto:info@mowglai.in?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
                addMessage("I have compiled your request dossier. You can now transmit this directly to our command center.", 'bot');
                addMessage(`Summary:\nService: ${draftData.service}\nDetails: ${text}`, 'bot', [
                    {
                        label: "Send Request via Email",
                        action: ()=>{
                            window.location.href = mailToLink;
                        }
                    },
                    {
                        label: "Restart",
                        action: ()=>startDrafting()
                    }
                ]);
            });
        }
    };
    // --- BRAIN ---
    const processInput = (input)=>{
        // If in drafting mode, route to draft handler
        if (draftStep !== 'none') {
            handleDraftInput(input);
            return;
        }
        // 1. User Message
        addMessage(input, 'user');
        const lowerInput = input.toLowerCase();
        simulateTyping(()=>{
            // Priority Check: "Write request", "Hire", "Project"
            if (lowerInput.includes('hire') || lowerInput.includes('project') || lowerInput.includes('request') || lowerInput.includes('proposal')) {
                startDrafting();
                return;
            }
            // 0. CHECK FAQ KNOWLEDGE BASE FIRST
            const faqMatch = FAQ_KNOWLEDGE_BASE.find((item)=>item.keywords.some((k)=>lowerInput.includes(k)));
            if (faqMatch) {
                const opts = faqMatch.options?.map((opt)=>{
                    const isExternal = 'external' in opt ? opt.external : false;
                    const path = opt.path;
                    return {
                        label: opt.label,
                        action: ()=>{
                            if (isExternal) {
                                window.open(path, '_blank');
                            } else {
                                onClose();
                                router.push(path);
                            }
                        },
                        path: path,
                        external: isExternal
                    };
                });
                addMessage(faqMatch.response, 'bot', opts);
                return;
            }
            // 2. Check for Future/Unsupported Services
            const futureMatch = FUTURE_SERVICES.find((keyword)=>lowerInput.includes(keyword));
            if (futureMatch) {
                addMessage(`That is an ambitious frontier! While we are currently focused on core web technologies, our labs are in the process of upgrading our capabilities to include ${futureMatch.toUpperCase()}.`, 'bot');
                addMessage("Would you like to explore our current high-performance solutions or join our waitlist for future tech?", 'bot', [
                    {
                        label: "Explore Current Services",
                        action: ()=>{
                            onClose();
                            router.push('/services');
                        }
                    },
                    {
                        label: "Contact for Waitlist",
                        action: ()=>{
                            onClose();
                            router.push('/contact');
                        }
                    }
                ]);
                return;
            }
            // 3. Check for Supported Services & Intents
            let matchType = '';
            if (SUPPORTED_SERVICES.web_design.some((k)=>lowerInput.includes(k))) matchType = 'design';
            else if (SUPPORTED_SERVICES.development.some((k)=>lowerInput.includes(k))) matchType = 'dev';
            else if (SUPPORTED_SERVICES.strategy.some((k)=>lowerInput.includes(k))) matchType = 'strat';
            else if (SUPPORTED_SERVICES.database.some((k)=>lowerInput.includes(k))) matchType = 'data';
            else if (SUPPORTED_SERVICES.investment.some((k)=>lowerInput.includes(k))) matchType = 'price';
            else if (SUPPORTED_SERVICES.about.some((k)=>lowerInput.includes(k))) matchType = 'about';
            else if (SUPPORTED_SERVICES.contact.some((k)=>lowerInput.includes(k))) matchType = 'contact';
            else if (SUPPORTED_SERVICES.social.some((k)=>lowerInput.includes(k))) matchType = 'social';
            // 4. Responses based on match
            if (matchType === 'design') {
                addMessage("Aesthetic excellence is our specialty. We craft visually stunning, responsive interfaces that merge art with precision.", 'bot', [
                    {
                        label: "See Design Services",
                        action: ()=>{
                            onClose();
                            router.push('/services');
                        }
                    },
                    {
                        label: "View Portfolio",
                        action: ()=>{
                            onClose();
                            router.push('/work');
                        }
                    }
                ]);
            } else if (matchType === 'dev') {
                addMessage("Robust engineering is in our DNA. Whether it's a complex web app, CMS, or API integration, we build for scale and security.", 'bot', [
                    {
                        label: "View Dev Solutions",
                        action: ()=>{
                            onClose();
                            router.push('/services');
                        }
                    },
                    {
                        label: "Start a Project",
                        action: ()=>{
                            onClose();
                            router.push('/contact');
                        }
                    }
                ]);
            } else if (matchType === 'strat') {
                addMessage("Growth requires map-making. Our strategy team assists with SEO, Content Curation, and Market Analysis to position your brand globally.", 'bot', [
                    {
                        label: "Explore Strategy",
                        action: ()=>{
                            onClose();
                            router.push('/services');
                        }
                    }
                ]);
            } else if (matchType === 'data') {
                addMessage("Data is the lifeblood of modern business. We design secure, high-performance database architectures and cloud solutions.", 'bot', [
                    {
                        label: "Data Services",
                        action: ()=>{
                            onClose();
                            router.push('/services');
                        }
                    }
                ]);
            } else if (matchType === 'price') {
                addMessage("Financial clarity is key. We offer transparent investment plans: Basic, Advanced, and Epic, tailored to your growth stage.", 'bot', [
                    {
                        label: "View Investment Plans",
                        action: ()=>{
                            onClose();
                            router.push('/investment');
                        }
                    }
                ]);
            } else if (matchType === 'about') {
                addMessage("Mowglai is a global collective of Digital Artisans. We operate Monday to Saturday across multiple time zones, ensuring we align perfectly with your schedule.", 'bot');
                addMessage("Our philosophy is 'Growth in the Wild'—combining rapid Adaptation with resilient Survival strategies. We have delivered 100+ projects in 15+ countries.", 'bot', [
                    {
                        label: "Read Our DNA",
                        action: ()=>{
                            onClose();
                            router.push('/our-dna');
                        }
                    },
                    {
                        label: "Meet the Team",
                        action: ()=>{
                            onClose();
                            router.push('/about');
                        }
                    }
                ]);
            } else if (matchType === 'contact') {
                addMessage("Communication is the first step to evolution. You can reach our command center directly via email or through our social channels.", 'bot', [
                    {
                        label: "Go to Contact Page",
                        action: ()=>{
                            onClose();
                            router.push('/contact');
                        }
                    },
                    {
                        label: "Email: info@mowglai.in",
                        action: ()=>{
                            window.location.href = "mailto:info@mowglai.in";
                        }
                    }
                ]);
            } else if (matchType === 'social') {
                addMessage("Join our tribe in the digital wild. Follow us for updates, insights, and success stories.", 'bot', [
                    {
                        label: "Instagram",
                        action: ()=>{
                            window.open("https://www.instagram.com/mowglai_", "_blank");
                        }
                    },
                    {
                        label: "LinkedIn",
                        action: ()=>{
                            window.open("https://linkedin.com/company/mowglai", "_blank");
                        }
                    },
                    {
                        label: "X (Twitter)",
                        action: ()=>{
                            window.open("https://x.com/Mowglai11", "_blank");
                        }
                    }
                ]);
            } else {
                // Fallback or Generic
                addMessage("I am processing your signal. While I didn't catch a specific service request, our team can likely assist. We specialize in Web Design, Development, and Digital Strategy.", 'bot', [
                    {
                        label: "Start a Project Request",
                        action: ()=>startDrafting()
                    },
                    {
                        label: "View All Services",
                        action: ()=>{
                            onClose();
                            router.push('/services');
                        }
                    },
                    {
                        label: "Contact Human Command",
                        action: ()=>{
                            onClose();
                            router.push('/contact');
                        }
                    }
                ]);
            }
        });
    };
    const recommendPlan = (plan)=>{
        addMessage(plan, 'user');
        simulateTyping(()=>{
            let text = "";
            if (plan === "BASIC") text = "Excellent. The BASIC plan is perfect for startups needing a single-page powerhouse to establish a footprint.";
            if (plan === "ADVANCED") text = "A wise choice. The ADVANCED plan offers multi-page depth, analytics, and enhanced SEO for growing brands.";
            if (plan === "EPIC") text = "The EPIC plan provides custom-engineered digital ecosystems and unlimited scalability for market leaders.";
            addMessage(text, 'bot', [
                {
                    label: "View Details & Pricing",
                    action: ()=>{
                        onClose();
                        router.push('/investment');
                    }
                },
                {
                    label: "Request This Plan",
                    action: ()=>{
                        onClose();
                        router.push('/contact');
                    }
                }
            ]);
        });
    };
    const handleSend = ()=>{
        if (!inputValue.trim()) return;
        const temp = inputValue;
        setInputValue('');
        processInput(temp);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-background/60 backdrop-blur-sm z-[70]"
                }, void 0, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                    lineNumber: 306,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    className: "fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-background border border-primary/20 rounded-[2rem] shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)] z-[71] flex flex-col overflow-hidden origin-bottom-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-full bg-primary/10 text-primary animate-pulse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                lineNumber: 325,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                            lineNumber: 324,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display font-bold text-xl text-primary",
                                                    children: "Mowglai Guardian"
                                                }, void 0, false, {
                                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            size: 8,
                                                            className: "text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "AI Online"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                            lineNumber: 327,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                    lineNumber: 323,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: onClose,
                                    className: "rounded-full hover:bg-primary/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20,
                                        className: "text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                        lineNumber: 336,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                    lineNumber: 335,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                            lineNumber: 322,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-primary/20",
                            children: [
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col max-w-[85%]", msg.sender === 'user' ? "ml-auto items-end" : "mr-auto items-start"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-2xl text-base leading-relaxed shadow-sm", msg.sender === 'user' ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-primary/10 text-foreground border border-primary/10 rounded-tl-sm"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "whitespace-pre-wrap",
                                                    children: msg.text
                                                }, void 0, false, {
                                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                lineNumber: 350,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            msg.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2",
                                                children: msg.options.map((option, idx)=>option.path && !option.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: option.path,
                                                        onClick: ()=>{
                                                            onClose();
                                                            option.action();
                                                        },
                                                        className: "px-4 py-2 rounded-full border border-primary/30 bg-background/50 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                                                        children: option.label
                                                    }, idx, false, {
                                                        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: option.action,
                                                        className: "px-4 py-2 rounded-full border border-primary/30 bg-background/50 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                                                        children: option.label
                                                    }, idx, false, {
                                                        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                lineNumber: 361,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-muted-foreground mt-2 uppercase tracking-wider",
                                                children: msg.sender === 'bot' ? 'Guardian AI' : 'You'
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                                lineNumber: 385,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                        lineNumber: 343,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))),
                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mr-auto flex items-center gap-1 p-4 bg-primary/5 rounded-2xl rounded-tl-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                            lineNumber: 393,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                            lineNumber: 394,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-primary/40 rounded-full animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                            lineNumber: 395,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                    lineNumber: 398,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                            lineNumber: 341,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-primary/10 bg-background/80 backdrop-blur-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    handleSend();
                                },
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: inputValue,
                                        onChange: (e)=>setInputValue(e.target.value),
                                        placeholder: draftStep !== 'none' ? "Enter details..." : "Ask about plans, services...",
                                        className: "flex-1 bg-primary/5 hover:bg-primary/10 transition-colors border-none rounded-full px-6 py-3 text-base focus:ring-1 focus:ring-primary/50 outline-none placeholder:text-muted-foreground/50 text-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                        lineNumber: 407,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        size: "icon",
                                        className: "rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 transition-all active:scale-95 shadow-lg shadow-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                            lineNumber: 415,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                        lineNumber: 414,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                                lineNumber: 403,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                            lineNumber: 402,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
                    lineNumber: 315,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx",
        lineNumber: 302,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatbotModal, "GJpPJlp+IUZYzmScgHMAe30X2Gw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatbotModal;
const __TURBOPACK__default__export__ = ChatbotModal;
var _c;
__turbopack_context__.k.register(_c, "ChatbotModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx [app-client] (ecmascript)"));
}),
"[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
]);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/.vscode/mowglai.in/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
// src/slot.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" use ".trim().toString()];
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=_vscode_mowglai_in_f0b51002._.js.map