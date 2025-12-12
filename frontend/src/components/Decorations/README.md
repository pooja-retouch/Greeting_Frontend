# Decorations Components

Collection of isolated, reusable decoration components for the Landing page.

## Components

### 1. SnowEffect.jsx
**Purpose**: Animated snow and particles falling from the sky

**Features**:
- Snowflakes (25 elements)
- Large snowflakes (12 elements)
- Magical particles (30 elements)
- Respects `prefers-reduced-motion` preference

**Configuration**:
```javascript
// From animationConfig.js
- snowflakesStatic: Animation data for small snowflakes
- largeSnowflakesStatic: Animation data for large snowflakes
- magicalParticlesStatic: Color and position data for particles
```

**Usage**:
```jsx
import SnowEffect from './Decorations/SnowEffect';

<SnowEffect />
```

**What it renders**: ~67 animated elements (or 0 if motion is reduced)

---

### 2. LightingElements.jsx
**Purpose**: Animated lights, stars, and sparkles

**Features**:
- Animated starfield (40 or 10 stars based on preference)
- Twinkling light string (12 lights)
- Floating stars (8 stars)
- Respects `prefers-reduced-motion` preference

**Configuration**:
```javascript
// From animationConfig.js
- lightColors: Array of color hex values
```

**Usage**:
```jsx
import LightingElements from './Decorations/LightingElements';

<LightingElements />
```

**What it renders**: ~60 elements (or ~30 if motion is reduced)

---

### 3. ChristmasTree.jsx
**Purpose**: Animated Christmas tree with lights

**Features**:
- SVG-based Christmas tree (3 tiers)
- Animated trunk
- Bouncing star on top
- Tree lights (12 lights)
- Respects `prefers-reduced-motion` preference

**Configuration**:
```javascript
// From animationConfig.js
- lightColors: Colors for the tree lights
```

**Usage**:
```jsx
import ChristmasTree from './Decorations/ChristmasTree';

<ChristmasTree />
```

**What it renders**: ~14 elements (or null if motion is reduced)

**Position**: Fixed to bottom-left corner

---

### 4. FloatingDecorations.jsx
**Purpose**: Floating Christmas ornaments, candy canes, gifts, etc.

**Features**:
- Animated ornament (bouncing)
- Animated candy cane (pulsing)
- Blinking gift box
- Floating snowballs (3 elements)
- Rotating snowflakes (4 elements)
- Swinging holly (3 elements)
- Shimmering icicles (8 elements)
- Respects `prefers-reduced-motion` preference

**Configuration**:
```javascript
// From animationConfig.js
- lightColors: For various decorations
```

**Usage**:
```jsx
import FloatingDecorations from './Decorations/FloatingDecorations';

<FloatingDecorations />
```

**What it renders**: ~19 elements (or null if motion is reduced)

---

## Shared Features

### Motion Preference Support
All components respect `prefers-reduced-motion` system setting:

```javascript
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function MyDecoration() {
  const prefersReduced = useMotionPreference();
  
  if (prefersReduced) return null; // Hide all animations
  
  return <AnimatedContent />;
}
```

### Configuration
All animation data is centralized in `config/animationConfig.js`:

```javascript
// Easy to modify animation speeds globally
export const snowflakesStatic = [
  { left: '10%', delay: '1s', duration: '8s', scale: '0.6' },
  // ... more objects
];
```

### Styling
Each component uses:
- Inline styles for dynamic values (delay, duration, position)
- Tailwind classes for base styles
- CSS animations from `animationConfig.js`

---

## Element Count Summary

```
Default User (motion allowed):
├─ SnowEffect: ~67 elements
├─ LightingElements: ~60 elements
├─ ChristmasTree: ~14 elements
└─ FloatingDecorations: ~19 elements
Total: ~160 elements

Motion-Reduced User:
├─ SnowEffect: 0 elements
├─ LightingElements: ~30 elements
├─ ChristmasTree: 0 elements
└─ FloatingDecorations: 0 elements
Total: ~30 elements
```

---

## Customization

### Change Animation Speed
Edit `config/animationConfig.js`:

```javascript
// Make snow fall faster
export const snowflakesStatic = [
  { left: '10%', delay: '1s', duration: '4s', scale: '0.6' }, // was '8s'
  // ...
];
```

### Change Colors
Edit `config/animationConfig.js`:

```javascript
export const lightColors = [
  '#FF0000', // Changed from #FF4444
  // ... more colors
];
```

### Reduce Elements
In the component file:

```jsx
// Before: render all 25 snowflakes
{snowflakesStatic.map((flake, i) => (...))}

// After: render only 10 snowflakes
{snowflakesStatic.slice(0, 10).map((flake, i) => (...))}
```

### Hide Component
In `Landing.jsx`:

```jsx
{/* Comment out to hide */}
{/* <ChristmasTree /> */}
```

---

## Adding New Decorations

### Step 1: Create Data in animationConfig.js
```javascript
// Add your animation data
export const myDecorationsStatic = [
  { ... },
  { ... },
];
```

### Step 2: Create Component
```jsx
// Create Decorations/MyDecoration.jsx
import React from 'react';
import { myDecorationsStatic } from '../../config/animationConfig';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function MyDecoration() {
  const prefersReduced = useMotionPreference();
  
  if (prefersReduced) return null;
  
  return (
    <>
      {myDecorationsStatic.map((item, i) => (
        <div key={`my-decoration-${i}`}>
          {/* Your decoration JSX */}
        </div>
      ))}
    </>
  );
}
```

### Step 3: Add Keyframe (if needed)
```javascript
// In animationConfig.js
export const animationKeyframes = `
  @keyframes myAnimation {
    0% { /* ... */ }
    100% { /* ... */ }
  }
`;
```

### Step 4: Import and Use
```jsx
// In Landing.jsx
import MyDecoration from './Decorations/MyDecoration';

export default function Landing() {
  return (
    <>
      <MyDecoration />
    </>
  );
}
```

---

## Performance Tips

### 1. Reduce Element Count
Fewer elements = better performance. Start with 1/3 of what you think you need.

### 2. Use CSS Animations
CSS animations are faster than JavaScript animations.

### 3. Optimize SVGs
Keep SVGs simple and minimal. Avoid complex paths.

### 4. Respect Motion Preferences
Always check `prefersReduced`. Significantly improves performance for motion-sensitive users.

### 5. Use will-change (sparingly)
```css
/* Only on frequently animated elements */
will-change: transform, opacity;
```

---

## Troubleshooting

### Animations not showing?
1. Check browser console for errors
2. Verify `animationConfig.js` has the animation data
3. Check if `prefers-reduced-motion` is enabled
4. Verify CSS is loaded

### Animations are jittery?
1. Reduce number of simultaneous animations
2. Reduce number of elements
3. Use GPU-accelerated properties (`transform`, `opacity`)
4. Avoid `left`, `top`, `width`, `height` in animations

### Component not rendering?
1. Check import path is correct
2. Verify file exists
3. Check for JavaScript errors in console
4. Verify component doesn't return `null` (motion-reduced case)

---

## Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | CSS animations, matchMedia |
| Firefox | ✅ Full | CSS animations, matchMedia |
| Safari | ✅ Full | CSS animations, matchMedia |
| Mobile | ✅ Full | Touch-friendly, responsive |
| IE11 | ⚠️ Limited | No matchMedia support (use polyfill) |

---

## Related Files

- `config/animationConfig.js` - All animation configuration
- `hooks/useMotionPreference.js` - Motion preference detection
- `pages/Landing.jsx` - Main page that uses these components

---

## Examples

### Minimal Setup
```jsx
// Just the essential decorations
<SnowEffect />
<LightingElements />
```

### Full Setup (current)
```jsx
<LightingElements />
<ChristmasTree />
<SnowEffect />
<FloatingDecorations />
```

### Light Setup (performance)
```jsx
<LightingElements />
<SnowEffect />
{/* Skip heavy decorations */}
```

### Themed Setup
```jsx
// Create separate components for different themes
<ChristmasDecorations />
// or
<ValentineDecorations />
// or
<HalloweenDecorations />
```

---

## Best Practices

1. ✅ Always include `useMotionPreference` hook
2. ✅ Keep animation data in centralized config
3. ✅ Return null for motion-reduced users
4. ✅ Use semantic HTML and SVGs
5. ✅ Add comments for complex animations
6. ✅ Test on mobile devices
7. ✅ Monitor performance with DevTools
8. ✅ Keep components focused and single-purpose

---

**Last Updated**: 2024  
**Version**: 1.0  
**Maintenance**: Active
