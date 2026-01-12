(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.vscode/mowglai.in/src/components/Magnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const Magnetic = ({ children, amount = 0.3, className = "" })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Magnetic.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            const xTo = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(element, "x", {
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
            const yTo = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(element, "y", {
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
            const handleMouseMove = {
                "Magnetic.useEffect.handleMouseMove": (e)=>{
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = element.getBoundingClientRect();
                    const x = clientX - (left + width / 2);
                    const y = clientY - (top + height / 2);
                    xTo(x * amount);
                    yTo(y * amount);
                }
            }["Magnetic.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "Magnetic.useEffect.handleMouseLeave": ()=>{
                    xTo(0);
                    yTo(0);
                }
            }["Magnetic.useEffect.handleMouseLeave"];
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "Magnetic.useEffect": ()=>{
                    element.removeEventListener("mousemove", handleMouseMove);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["Magnetic.useEffect"];
        }
    }["Magnetic.useEffect"], [
        amount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `inline-block ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/.vscode/mowglai.in/src/components/Magnetic.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Magnetic, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Magnetic;
const __TURBOPACK__default__export__ = Magnetic;
var _c;
__turbopack_context__.k.register(_c, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/MowglaiLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const MowglaiLogo = ({ className, size = "md" })=>{
    const sizeClasses = {
        sm: "w-10 h-10",
        md: "w-14 h-14",
        lg: "w-20 h-20",
        xl: "w-32 h-32"
    };
    const getImageUrl = (filename)=>{
        return `/${filename}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-center overflow-hidden rounded-full", "bg-background/5 border border-primary/20 backdrop-blur-sm", "transition-transform duration-500 hover:scale-105", sizeClasses[size], className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: getImageUrl("logo1.png"),
                alt: "Mowglai",
                className: "w-full h-full object-cover hidden dark:block"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/MowglaiLogo.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: getImageUrl("logo2.png"),
                alt: "Mowglai",
                className: "w-full h-full object-cover block dark:hidden"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/MowglaiLogo.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/.vscode/mowglai.in/src/components/MowglaiLogo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MowglaiLogo;
const __TURBOPACK__default__export__ = MowglaiLogo;
var _c;
__turbopack_context__.k.register(_c, "MowglaiLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/Magnetic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$MowglaiLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/MowglaiLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const navItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "HOME",
        href: "/"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        label: "ABOUT",
        href: "/about"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        label: "SERVICES",
        href: "/services"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        label: "INVESTMENT",
        href: "/investment"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        label: "CONTACT",
        href: "/contact"
    }
];
const FullScreenNav = ({ onOpenChat })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    const handleClick = (e, label, href)=>{
        e.preventDefault();
        setIsOpen(false);
        router.push(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block fixed top-[calc(2rem+env(safe-area-inset-top))] right-[calc(2rem+env(safe-area-inset-right))] z-[60]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleMenu,
                        className: "w-16 h-16 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 group border border-transparent hover:border-primary/20 bg-background/5 backdrop-blur-sm",
                        "aria-label": "Toggle Menu",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6 text-primary group-hover:rotate-90 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                            lineNumber: 55,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-6 h-6 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                            lineNumber: 57,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-[calc(2rem+env(safe-area-inset-top))] left-[calc(2rem+env(safe-area-inset-left))] z-[60]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    amount: 0.4,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-pointer",
                        onClick: ()=>router.push('/'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$MowglaiLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "lg",
                                className: "w-16 h-16"
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                lineNumber: 73,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[55] bg-background backdrop-blur-3xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]", isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-50 pointer-events-none"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "w-[90%] flex h-full",
                                children: navItems.map((item)=>{
                                    const isHovered = hoveredItem === item.label;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full relative group/col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-center p-4", isHovered ? "flex-[1.5] bg-primary/5" : "flex-1 hover:bg-primary/5"),
                                        onMouseEnter: ()=>setHoveredItem(item.label),
                                        onMouseLeave: ()=>setHoveredItem(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 right-0 w-[1px] h-full transition-all duration-500", "bg-gradient-to-b from-transparent via-primary/20 to-transparent", isHovered ? "w-[2px] bg-primary shadow-[0_0_15px_rgba(34,197,94,0.4)]" : "" // Active/Glow state
                                                )
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                lineNumber: 108,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                onClick: (e)=>handleClick(e, item.label, item.href),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-6 text-center transition-all duration-300 cursor-pointer select-none py-4"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 mb-6 transition-all duration-500 transform -translate-y-4 group-hover/col:translate-y-0 opacity-0 group-hover/col:opacity-100", isHovered ? "text-primary drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "text-primary/40")
                                                    }, void 0, false, {
                                                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        amount: 0.3,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(item.label === "TESTIMONIALS" ? "text-3xl md:text-4xl lg:text-5xl xl:text-6xl" : "text-4xl md:text-5xl lg:text-6xl xl:text-7xl", "font-display font-bold uppercase tracking-tight break-words max-w-full [writing-mode:vertical-rl] rotate-180 inline-block", isHovered ? "text-transparent bg-clip-text bg-gradient-to-b from-primary via-accent to-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "text-primary/30"),
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                lineNumber: 115,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-10 left-0 w-full flex md:hidden justify-center gap-6 z-50",
                                children: [
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                        href: "https://www.instagram.com/mowglai_",
                                        label: "Instagram"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                        href: "https://x.com/Mowglai11",
                                        label: "X (Twitter)"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                        href: "https://linkedin.com/company/mowglai",
                                        label: "LinkedIn"
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        amount: 0.5,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "relative group w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 bg-background/50 backdrop-blur-sm",
                                            "aria-label": item.label,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: "w-5 h-5 text-primary/60 group-hover:text-primary transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                lineNumber: 159,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex w-[10%] h-full border-l border-primary/10 flex-col justify-center items-center py-10 bg-primary/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-8 items-center",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                            href: "https://www.instagram.com/mowglai_",
                                            label: "Instagram"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                            href: "https://x.com/Mowglai11",
                                            label: "X (Twitter)"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                            href: "https://linkedin.com/company/mowglai",
                                            label: "LinkedIn"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            amount: 0.5,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "relative group w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10",
                                                "aria-label": item.label,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-5 h-5 text-primary/60 group-hover:text-primary transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                                lineNumber: 176,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, i, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                            lineNumber: 175,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(FullScreenNav, "Y+JVMZ2DadY9SpjefXfM4wQ6Dic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = FullScreenNav;
const __TURBOPACK__default__export__ = FullScreenNav;
var _c;
__turbopack_context__.k.register(_c, "FullScreenNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const navItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home",
        href: "/"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        label: "About",
        href: "/about"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        label: "Services",
        href: "/services"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        label: "Price",
        href: "/investment"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        label: "Contact",
        href: "/contact"
    }
];
const socialItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: "https://www.instagram.com/mowglai_",
        label: "Instagram"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: "https://x.com/Mowglai11",
        label: "X (Twitter)"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: "https://linkedin.com/company/mowglai",
        label: "LinkedIn"
    }
];
const glassStyle = {
    background: 'hsl(var(--background) / 0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid hsl(var(--border) / 0.2)',
    boxShadow: '0 0 20px hsl(var(--primary) / 0.15)'
};
const MobileNav = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Home");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync active item with location
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            const currentPath = pathname;
            const active = navItems.find({
                "MobileNav.useEffect.active": (item)=>item.href === currentPath
            }["MobileNav.useEffect.active"]);
            if (active) setActiveItem(active.label);
        }
    }["MobileNav.useEffect"], [
        pathname
    ]);
    const handleClick = (e, label, href)=>{
        e.preventDefault();
        setActiveItem(label);
        router.push(href);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed right-[calc(1rem+env(safe-area-inset-right))] top-[calc(2rem+env(safe-area-inset-top))] z-50 flex flex-col items-end gap-4 md:hidden",
        "aria-label": "Mobile Navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20,
                                scale: 0.8
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                x: 20,
                                scale: 0.8
                            },
                            className: "h-16 rounded-full px-4 flex items-center justify-center gap-2 overflow-hidden",
                            style: glassStyle,
                            children: navItems.map((item)=>{
                                const Icon = item.icon;
                                const isActive = activeItem === item.label;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    onClick: (e)=>handleClick(e, item.label, item.href),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 relative", isActive ? "text-primary bg-primary/10" : "text-muted-foreground opacity-70 hover:opacity-100 hover:bg-primary/5"),
                                    "aria-label": item.label,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                                            lineNumber: 81,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_var(--primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                                            lineNumber: 85,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                                    lineNumber: 71,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        layout: true,
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "w-16 h-16 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 text-primary z-50 flex-shrink-0",
                        style: glassStyle,
                        "aria-label": isOpen ? "Close menu" : "Open menu",
                        whileTap: {
                            scale: 0.95
                        },
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                            lineNumber: 103,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                            lineNumber: 103,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        y: -20,
                        height: 0
                    },
                    className: "w-16 rounded-full py-4 flex flex-col items-center gap-6 overflow-hidden",
                    style: glassStyle,
                    children: socialItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "p-3 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300",
                            "aria-label": item.label,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                                lineNumber: 126,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.label, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                            lineNumber: 118,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                    lineNumber: 110,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/.vscode/mowglai.in/src/components/MobileNav.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileNav, "+W99/NQ3vYXc1y4eUgi4WhUr6mI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileNav;
const __TURBOPACK__default__export__ = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
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
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isPointer, setIsPointer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInverted, setIsInverted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New state for color inversion
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
            const cursorX = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(cursorRef.current, "x", {
                duration: 0.1,
                ease: "power3.out"
            });
            const cursorY = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(cursorRef.current, "y", {
                duration: 0.1,
                ease: "power3.out"
            });
            const followerX = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(followerRef.current, "x", {
                duration: 0.6,
                ease: "power3.out"
            });
            const followerY = __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(followerRef.current, "y", {
                duration: 0.6,
                ease: "power3.out"
            });
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    setIsVisible(true);
                    // Update GSAP positions
                    cursorX(e.clientX);
                    cursorY(e.clientY);
                    followerX(e.clientX);
                    followerY(e.clientY);
                    const target = e.target;
                    // Pointer Check
                    const isClickable = target.tagName === "A" || target.tagName === "BUTTON" || !!target.closest("a") || !!target.closest("button") || target.getAttribute("role") === "button" || window.getComputedStyle(target).cursor === "pointer";
                    setIsPointer(isClickable);
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
                    // Theme/Color Check
                    // Look for data-theme="gold" in the ancestry
                    const themeElement = target.closest('[data-theme="gold"]');
                    setIsInverted(!!themeElement);
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
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: followerRef,
                className: `fixed top-0 left-0 pointer-events-none z-[9998] w-12 h-12 rounded-full border transition-[width,height,border-color,background-color] duration-300 ease-out custom-cursor-follower ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                style: {
                    transform: 'translate(-50%, -50%)',
                    borderColor: isInverted ? '#1B3022' : '#C5A059',
                    backgroundColor: isPointer ? isInverted ? 'rgba(27, 48, 34, 0.1)' : 'rgba(197, 160, 89, 0.1)' : 'transparent',
                    scale: isPointer ? 1.5 : 1
                }
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: `fixed top-0 left-0 pointer-events-none z-[9999] w-3 h-3 rounded-full transition-colors duration-300 ease-out custom-cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                style: {
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: isInverted ? '#1B3022' : '#C5A059'
                }
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CustomCursor, "Q1y0WAkLWsL4G/IIqiVukPbRgHI=");
_c = CustomCursor;
const __TURBOPACK__default__export__ = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ThemeToggle = ()=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const savedTheme = localStorage.getItem("theme");
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const initialTheme = savedTheme || systemTheme || "dark";
            setTheme(initialTheme);
            if (initialTheme === 'light') {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            } else {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            }
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] left-[calc(2rem+env(safe-area-inset-left))] z-[60] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleTheme,
            className: "w-16 h-16 rounded-full bg-background/5 border border-primary/20 backdrop-blur-md flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]",
            "aria-label": "Toggle Theme",
            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "w-6 h-6 animate-in fade-in rotate-0 transition-transform duration-500 hover:rotate-12"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/ThemeToggle.tsx",
                lineNumber: 44,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "w-6 h-6 animate-in fade-in rotate-0 transition-transform duration-500 hover:rotate-90"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/ThemeToggle.tsx",
                lineNumber: 46,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.vscode/mowglai.in/src/components/ThemeToggle.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.vscode/mowglai.in/src/components/ThemeToggle.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeToggle, "HKZhbbE1NL5O9VXEQueUHrvooII=");
_c = ThemeToggle;
const __TURBOPACK__default__export__ = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/.vscode/mowglai.in/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "w-full py-16 flex flex-col items-center justify-center bg-background/5 relative z-10 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-muted-foreground/30 font-display tracking-widest uppercase",
            children: [
                "© ",
                new Date().getFullYear(),
                " Mowglai Galaxy"
            ]
        }, void 0, true, {
            fileName: "[project]/.vscode/mowglai.in/src/components/Footer.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.vscode/mowglai.in/src/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ScrollToTop = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
};
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
const __TURBOPACK__default__export__ = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const JungleBackground = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-x-0 top-0 w-full h-full -z-10 overflow-hidden pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b transition-colors duration-1000    /* Dark Mode: Palm Leaf -> Dark Green -> Deep Green */   dark:from-[#799851] dark:via-[#47622A] dark:to-[#374426]    /* Light Mode: Off-white/Peach (#FDF3E7) -> Golden (#D4AF37) */   from-[#FDF3E7] via-[#EBD5B3] to-[#D4AF37]"
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 dark:bg-green-900/10 rounded-full blur-[120px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 dark:bg-emerald-900/10 rounded-full blur-[150px] animate-bounce-slow"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.06] dark:opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 15s ease-in-out infinite;
                }
            `
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = JungleBackground;
const __TURBOPACK__default__export__ = JungleBackground;
var _c;
__turbopack_context__.k.register(_c, "JungleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/PageLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$FullScreenNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/FullScreenNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$MobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/MobileNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ChatbotModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/ChatbotModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ScrollToTop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/ScrollToTop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$JungleBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/src/components/JungleBackground.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
const PageLayout = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageLayout.useEffect": ()=>{
            // Initialize AOS
            __turbopack_context__.A("[project]/.vscode/mowglai.in/node_modules/aos/dist/aos.js [app-client] (ecmascript, async loader)").then({
                "PageLayout.useEffect": (AOS)=>{
                    AOS.init({
                        duration: 1000,
                        once: false,
                        mirror: true
                    });
                }
            }["PageLayout.useEffect"]);
        }
    }["PageLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative text-foreground transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ScrollToTop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$JungleBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$FullScreenNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenChat: ()=>setIsChatOpen(true)
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$MobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] right-[calc(2rem+env(safe-area-inset-right))] z-[60]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsChatOpen(true),
                    className: "relative group w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] backdrop-blur-md",
                    "aria-label": "Open AI Assistant",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20 group-hover:opacity-40"
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                            className: "w-6 h-6 text-primary z-10"
                        }, void 0, false, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$ChatbotModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isChatOpen,
                onClose: ()=>setIsChatOpen(false)
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-screen flex items-center justify-center text-primary font-display animate-pulse",
                                children: "Loading Content..."
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                                lineNumber: 74,
                                columnNumber: 45
                            }, void 0),
                            children: [
                                children,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                                    lineNumber: 76,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                            lineNumber: 74,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, pathname, false, {
                        fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/.vscode/mowglai.in/src/components/PageLayout.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PageLayout, "1c1ikM73xPg2B8IIdnaAyvJT2Sg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PageLayout;
const __TURBOPACK__default__export__ = PageLayout;
var _c;
__turbopack_context__.k.register(_c, "PageLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.vscode/mowglai.in/src/components/AestheticShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AestheticShowcase",
    ()=>AestheticShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/.vscode/mowglai.in/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const cards = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: "Aesthetic"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Global"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Fast"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        title: "Deep"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        title: "Mobile"
    }
];
function AestheticShowcase() {
    _s();
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AestheticShowcase.useEffect": ()=>{
            const interval = setInterval({
                "AestheticShowcase.useEffect.interval": ()=>{
                    setActiveCard({
                        "AestheticShowcase.useEffect.interval": (prev)=>(prev + 1) % 5
                    }["AestheticShowcase.useEffect.interval"]);
                }
            }["AestheticShowcase.useEffect.interval"], 3000);
            return ({
                "AestheticShowcase.useEffect": ()=>clearInterval(interval)
            })["AestheticShowcase.useEffect"];
        }
    }["AestheticShowcase.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[400px] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 1.2,
                    y: -30
                },
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                },
                className: "w-full max-w-[300px] aspect-square flex flex-col items-center justify-center p-12 relative",
                children: (()=>{
                    const ItemIcon = cards[activeCard].icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                                className: "w-24 h-24 text-primary mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]",
                                strokeWidth: 1
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/AestheticShowcase.tsx",
                                lineNumber: 40,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$vscode$2f$mowglai$2e$in$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl md:text-5xl font-display font-black uppercase tracking-[0.2em] text-foreground text-center",
                                children: cards[activeCard].title
                            }, void 0, false, {
                                fileName: "[project]/.vscode/mowglai.in/src/components/AestheticShowcase.tsx",
                                lineNumber: 41,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true);
                })()
            }, activeCard, false, {
                fileName: "[project]/.vscode/mowglai.in/src/components/AestheticShowcase.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/.vscode/mowglai.in/src/components/AestheticShowcase.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/.vscode/mowglai.in/src/components/AestheticShowcase.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(AestheticShowcase, "HE/fbR4+c+vkkFCUct/mWm9Y1SI=");
_c = AestheticShowcase;
var _c;
__turbopack_context__.k.register(_c, "AestheticShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_vscode_mowglai_in_src_components_6dbf263b._.js.map