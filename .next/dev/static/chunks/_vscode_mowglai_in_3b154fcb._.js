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
"[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
const CustomCursor = ()=>{
    _s();
    // const [position, setPosition] = useState({ x: 0, y: 0 }); // Unused
    const [isPointer, setIsPointer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInverted, setIsInverted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs for direct DOM manipulation (better performance than state for cursor position)
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastRipplePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    }); // Track last ripple position
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const checkMobile = {
                "CustomCursor.useEffect.checkMobile": ()=>{
                    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
                    const isSmallScreen = window.innerWidth <= 1024;
                    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    setIsMobile(isCoarse && isSmallScreen || isMobileUA);
                }
            }["CustomCursor.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "CustomCursor.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (isMobile) return;
            // Use GSAP's quickTo for high-performance following
            // Set initial alignment to prevent "shifting" from transform conflicts
            __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                cursorRef.current,
                followerRef.current
            ], {
                xPercent: -50,
                yPercent: -50
            });
            const cursorX = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(cursorRef.current, "x", {
                duration: 0.1,
                ease: "power3.out"
            });
            const cursorY = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(cursorRef.current, "y", {
                duration: 0.1,
                ease: "power3.out"
            });
            const followerX = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(followerRef.current, "x", {
                duration: 0.35,
                ease: "power3.out"
            });
            const followerY = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(followerRef.current, "y", {
                duration: 0.35,
                ease: "power3.out"
            });
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    // Use functional updates to avoid stale closure issues and redundant sets
                    setIsVisible({
                        "CustomCursor.useEffect.handleMouseMove": (prev)=>prev ? prev : true
                    }["CustomCursor.useEffect.handleMouseMove"]);
                    // Update GSAP positions (direct DOM manipulation remains outside React state)
                    cursorX(e.clientX);
                    cursorY(e.clientY);
                    followerX(e.clientX);
                    followerY(e.clientY);
                    const target = e.target;
                    // Pointer Check - Avoid getComputedStyle for performance on every move
                    const isClickable = target.tagName === "A" || target.tagName === "BUTTON" || !!target.closest("a") || !!target.closest("button") || target.getAttribute("role") === "button";
                    setIsPointer({
                        "CustomCursor.useEffect.handleMouseMove": (prev)=>prev === isClickable ? prev : isClickable
                    }["CustomCursor.useEffect.handleMouseMove"]);
                    // Spawn ripple on move (throttled by distance)
                    const dist = Math.hypot(e.clientX - lastRipplePos.current.x, e.clientY - lastRipplePos.current.y);
                    if (dist > 50) {
                        lastRipplePos.current = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        const id = Date.now();
                        setRipples({
                            "CustomCursor.useEffect.handleMouseMove": (prev)=>[
                                    ...prev,
                                    {
                                        x: e.clientX,
                                        y: e.clientY,
                                        id
                                    }
                                ]
                        }["CustomCursor.useEffect.handleMouseMove"]);
                        setTimeout({
                            "CustomCursor.useEffect.handleMouseMove": ()=>{
                                setRipples({
                                    "CustomCursor.useEffect.handleMouseMove": (prev)=>prev.filter({
                                            "CustomCursor.useEffect.handleMouseMove": (r)=>r.id !== id
                                        }["CustomCursor.useEffect.handleMouseMove"])
                                }["CustomCursor.useEffect.handleMouseMove"]);
                            }
                        }["CustomCursor.useEffect.handleMouseMove"], 1500); // Match animation duration
                    }
                    // Theme/Color Check - Look for data-theme="gold" in the ancestry
                    const themeElement = target.closest('[data-theme="gold"]');
                    const shouldInvert = !!themeElement;
                    setIsInverted({
                        "CustomCursor.useEffect.handleMouseMove": (prev)=>prev === shouldInvert ? prev : shouldInvert
                    }["CustomCursor.useEffect.handleMouseMove"]);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": ()=>setIsVisible(false)
            }["CustomCursor.useEffect.handleMouseLeave"];
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": ()=>setIsVisible(true)
            }["CustomCursor.useEffect.handleMouseEnter"];
            window.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            document.addEventListener("mouseenter", handleMouseEnter);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                    document.removeEventListener("mouseenter", handleMouseEnter);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const handleClick = {
                "CustomCursor.useEffect.handleClick": (e)=>{
                    // Allow ripples on mobile? The custom cursor logic returns null effectively hiding everything.
                    // If we want ripples only when cursor is enabled strings attached, keep isMobile check.
                    if (isMobile) return;
                    const id = Date.now();
                    setRipples({
                        "CustomCursor.useEffect.handleClick": (prev)=>[
                                ...prev,
                                {
                                    x: e.clientX,
                                    y: e.clientY,
                                    id
                                }
                            ]
                    }["CustomCursor.useEffect.handleClick"]);
                    // Cleanup after animation
                    setTimeout({
                        "CustomCursor.useEffect.handleClick": ()=>{
                            setRipples({
                                "CustomCursor.useEffect.handleClick": (prev)=>prev.filter({
                                        "CustomCursor.useEffect.handleClick": (r)=>r.id !== id
                                    }["CustomCursor.useEffect.handleClick"])
                            }["CustomCursor.useEffect.handleClick"]);
                        }
                    }["CustomCursor.useEffect.handleClick"], 600);
                }
            }["CustomCursor.useEffect.handleClick"];
            window.addEventListener("click", handleClick);
            return ({
                "CustomCursor.useEffect": ()=>window.removeEventListener("click", handleClick)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isMobile
    ]);
    // Handle scaling via GSAP to avoid conflict with positional transforms
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (isMobile || !followerRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(followerRef.current, {
                scale: isPointer ? 1.6 : 1,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }["CustomCursor.useEffect"], [
        isPointer,
        isMobile
    ]);
    if (isMobile) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            ripples.map((ripple)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed pointer-events-none z-[9997] w-12 h-12 rounded-full border animate-ripple",
                    style: {
                        left: ripple.x,
                        top: ripple.y,
                        borderColor: isInverted ? 'rgba(27, 48, 34, 0.3)' : 'rgba(197, 160, 89, 0.3)',
                        borderWidth: '1px'
                    }
                }, ripple.id, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: followerRef,
                className: `fixed top-0 left-0 pointer-events-none z-[9998] w-12 h-12 rounded-full border border-primary/20 custom-cursor-follower transition-[opacity,background-color,border-color] duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                style: {
                    borderColor: isInverted ? '#1B3022' : '#C5A059',
                    backgroundColor: isPointer ? isInverted ? 'rgba(27, 48, 34, 0.1)' : 'rgba(197, 160, 89, 0.1)' : 'transparent'
                }
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: `fixed top-0 left-0 pointer-events-none z-[9999] w-3 h-3 rounded-full custom-cursor-dot transition-[opacity,background-color] duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                style: {
                    backgroundColor: isInverted ? '#1B3022' : '#C5A059'
                }
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CustomCursor, "qB51xGJ4Ch6uIxe95UUlfbZnPlY=");
_c = CustomCursor;
const __TURBOPACK__default__export__ = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/app/not-found.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveLeft$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/move-left.js [app-client] (ecmascript) <export default as MoveLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NotFound() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotFound.useEffect": ()=>{
            console.error("404 Error: User attempted to access non-existent route:", pathname);
        }
    }["NotFound.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background text-foreground selection:bg-primary/30 cursor-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    [
                        ...Array(20)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-1 w-1 rounded-full bg-primary/40 animate-twinkle",
                            style: {
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                opacity: Math.random() * 0.5 + 0.2
                            }
                        }, i, false, {
                            fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-[12rem] leading-none text-primary opacity-10 blur-sm md:text-[18rem]",
                                children: "404"
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "glow-text absolute inset-0 flex items-center justify-center font-display text-8xl transition-all duration-500 hover:scale-105 md:text-9xl",
                                children: "404"
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card max-w-lg p-8 md:p-12 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full bg-primary/10 p-4 ring-1 ring-primary/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-8 w-8 text-primary animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 font-display text-3xl md:text-4xl text-primary",
                                children: "Cosmos Disconnected"
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-8 text-lg text-muted-foreground font-body leading-relaxed",
                                children: "It seems you've drifted beyond our digital frontier. The path you're seeking doesn't exist in this coordinate of the Mowglai galaxy."
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        variant: "outline",
                                        className: "group h-12 border-primary/20 bg-primary/5 px-8 hover:bg-primary/10 hover:text-primary transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "h-4 w-4 transition-transform group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, this),
                                                "Return to Base"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>window.history.back(),
                                        variant: "ghost",
                                        className: "h-12 px-8 hover:bg-white/5 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveLeft$3e$__["MoveLeft"], {
                                                    className: "h-4 w-4 transition-transform group-hover:-translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 33
                                                }, this),
                                                "Go Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-sm text-muted-foreground/50 tracking-widest uppercase",
                        children: "Mowglai Digital Solutions • Evolving Since 2025"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-[80px]"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-[80px]"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.vscode/mowglai.in/app/not-found.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(NotFound, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NotFound;
var _c;
__turbopack_context__.k.register(_c, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_vscode_mowglai_in_3b154fcb._.js.map