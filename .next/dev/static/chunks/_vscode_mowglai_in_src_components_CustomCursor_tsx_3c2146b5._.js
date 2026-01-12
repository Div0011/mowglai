(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_vscode_mowglai_in_src_components_CustomCursor_tsx_3c2146b5._.js.map