# Mowglai Home Page Animation Enhancements - Implementation Guide

## Overview

This document explains the new scroll-triggered texture reveal system, enhanced animations, and device-specific optimizations added to the Mowglai home page.

## 🎨 New Features Implemented

### 1. **Scroll-Triggered Texture Reveal**

The textured background now dynamically appears and disappears based on scroll position:

- **Fade In Phase (10-35% scroll)**: Textured background gradually reveals as you scroll down
- **Peak Visibility (35-75% scroll)**: Texture is fully visible
- **Fade Out Phase (75-100% scroll)**: Texture fades back to solid gradient color as you approach the footer
- **Footer Gradient**: Returns to clean solid gradient on the footer section

#### How It Works:

- Uses the `useScrollTextureReveal` hook to track scroll position
- Automatically adjusts reveal percentages for mobile devices (earlier reveal, faster fade)
- Smooth opacity transitions create a cinematic effect

### 2. **Enhanced Button Animations**

#### Available Button Components:

1. **EnhancedPrimaryButton**: Scale and shadow effects on hover
2. **EnhancedSecondaryButton**: Slide and opacity effects
3. **EnhancedIconButton**: Rotation and scale on hover
4. **RippleButton**: Mouse position-based ripple effect

All buttons include:

- Device-aware animations (disabled on touch devices)
- Smooth transitions with optimized easing
- Accessible keyboard interactions

### 3. **Scroll-Reveal Animations**

New components for scroll-triggered reveals:

```typescript
// Slide up with fade
<ScrollReveal variant="slideUpFade" delay={0}>
  {children}
</ScrollReveal>

// Slide in from left/right
<ScrollReveal variant="slideInLeft" delay={0.5}>
  {children}
</ScrollReveal>

// Scale in with fade
<ScrollReveal variant="scaleInFade">
  {children}
</ScrollReveal>

// Cascade/Staggered animations for lists
<CascadeContainer>
  <CascadeItem>{item1}</CascadeItem>
  <CascadeItem>{item2}</CascadeItem>
</CascadeContainer>
```

### 4. **Device-Specific Optimizations**

The `useDeviceOptimization` hook provides:

#### Mobile Devices:

- Disabled mouse tracking effects
- Reduced animation durations (0.4s vs 0.7s on desktop)
- Disabled heavy effects (dappled lights, bouncing elements)
- Disabled fireflies animation
- Reduced parallax effect
- Forced solid background on initial load

#### Tablet Devices:

- Moderate animation durations (0.5s)
- Limited mouse tracking
- Most heavy effects enabled
- Reduced parallax

#### Desktop/Laptop:

- Full animation experience
- Mouse tracking enabled
- All effects fully enabled
- Maximum parallax depth

### 5. **Hero Section Enhancements**

New features:

- **Background Glow Effect**: Responsive radial gradient follows mouse on desktop
- **Staggered Title Animation**: Letters animate in on page load
- **Optimized Button Animations**: Device-aware shake effect
- **Improved Mobile Responsiveness**: Adjusted sizing and spacing
- **Responsive Indicators**: Bottom text indicators hide on mobile

### 6. **Home Content Animations**

All major sections now include:

- **Scroll-triggered reveals**: Sections animate in as they enter viewport
- **Staggered animations**: Multiple elements cascade into view
- **Parallax effects**: Subtle depth on desktop devices
- **Device-optimized timing**: Faster animations on mobile

## 📁 New Files Created

### Hooks:

1. **`src/hooks/useScrollTextureReveal.ts`**
   - Manages the scroll-triggered texture reveal
   - Configurable reveal/peak/fadeout percentages
   - Device-aware offset calculation

2. **`src/hooks/useDeviceOptimization.ts`**
   - Detects device type (mobile/tablet/desktop)
   - Checks hover and touch capabilities
   - Returns optimization settings for animations

### Animation Utilities:

3. **`src/animations/animationVariants.ts`**
   - Pre-configured Framer Motion variants
   - Button, section, text, and container animations
   - Cascade and stagger configurations

### Components:

4. **`src/components/EnhancedButtons.tsx`**
   - Reusable button components with advanced animations
   - Ripple effect button with mouse position tracking

5. **`src/components/ScrollRevealComponents.tsx`**
   - `ScrollReveal`: Generic scroll-trigger component
   - `CascadeContainer`/`CascadeItem`: Staggered animations
   - `ParallaxScroll`: Parallax text effect
   - `TextRevealAnimation`: Character/word reveal
   - `StaggeredList`: List item animation

## 🚀 Usage Examples

### Basic Scroll Reveal

```tsx
import { ScrollReveal } from "@/components/ScrollRevealComponents";

<ScrollReveal variant="slideUpFade">
  <h2>Animated Heading</h2>
</ScrollReveal>;
```

### With Custom Delay

```tsx
<ScrollReveal variant="slideInLeft" delay={0.5}>
  <p>This content slides in from the left with a 0.5s delay</p>
</ScrollReveal>
```

### Text Animation

```tsx
import { TextRevealAnimation } from "@/components/ScrollRevealComponents";

<TextRevealAnimation text="Your text here" type="word" />;
```

### Device-Aware Optimization

```tsx
import { useDeviceOptimization } from "@/hooks/useDeviceOptimization";

const MyComponent = () => {
  const deviceInfo = useDeviceOptimization();

  return <div>{!deviceInfo.isMobile && <HeavyAnimation />}</div>;
};
```

## 🎯 Scrolling Experience Flow

1. **0-10% (Hero Section)**
   - Clean gradient background, no texture
   - Interactive hero animations

2. **10-35% (Content Reveal)**
   - Texture gradually fades in
   - Content sections animate in with scroll

3. **35-75% (Peak Texture)**
   - Full texture visibility
   - All animations at full opacity

4. **75-100% (Texture Fade)**
   - Texture gradually disappears
   - Returns to solid gradient
   - Footer appears with clean gradient

## 📱 Mobile vs Desktop Differences

### Mobile (< 768px)

- Faster animations (0.4s duration)
- No mouse tracking glow effect
- Disabled fireflies
- Simplified parallax
- Texture reveals at 5% scroll start

### Tablet (768px - 1024px)

- Moderate animations (0.5s duration)
- Reduced mouse effects
- Most features enabled
- Moderate parallax

### Desktop (> 1024px)

- Full animations (0.7s duration)
- Complete mouse tracking effects
- All animations enabled
- Full parallax depth

## 🔧 Configuration

### Texture Reveal Timing

To adjust when texture appears/disappears, modify in `JungleBackground.tsx`:

```tsx
useScrollTextureReveal(textureLayerRef, {
  revealStart: deviceInfo.isMobile ? 5 : 8, // Start %
  revealPeak: deviceInfo.isMobile ? 25 : 35, // Peak %
  fadeOutStart: deviceInfo.isMobile ? 70 : 75, // Fade out %
  isMobile: deviceInfo.isMobile,
});
```

### Animation Duration

Modify `getAnimationOptimizations()` in `useDeviceOptimization.ts` to change animation speeds.

## ⚡ Performance Optimizations

1. **GPU Acceleration**: All animations use `transform` and `opacity` for smooth 60fps
2. **Passive Event Listeners**: Scroll and mouse events use `passive: true`
3. **RequestAnimationFrame**: Throttled scroll calculations
4. **Lazy Loading**: Heavy 3D effects only on desktop
5. **Conditional Rendering**: Features disable on mobile/tablet based on needs

## 🎭 Animation Easing

All animations use the optimized easing curve:

```
[0.22, 1, 0.36, 1] // Cubic Bezier - Fast in, smooth out
```

This provides a modern, premium feel similar to Apple and high-end design systems.

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ⚠️ Mobile browsers with reduced animations

## 🔄 Future Enhancements

Potential additions:

- GSAP timeline sequences for more complex animations
- Scroll velocity-based animations
- WebGL-based texture transitions
- Advanced parallax with depth mapping
- Video background integration

## 📝 Notes

- All animations are fully responsive
- No breaking changes to existing components
- Backward compatible with AOS library usage
- Optimized bundle size with tree-shaking
- Accessibility considerations maintained (prefers-reduced-motion support can be added)

## 🐛 Troubleshooting

### Texture not appearing?

- Check scroll position (should be between 10-75% for visibility)
- Verify `JungleBackground.tsx` mount
- Check device detection

### Animations feel slow on mobile?

- Duration is intentionally reduced (0.4s)
- Adjust in `getAnimationOptimizations()` if needed
- Check network performance

### Scroll freezing?

- Disable heavy effects on very old devices
- Check SmoothScroll configuration
- Verify no multiple scroll event listeners
