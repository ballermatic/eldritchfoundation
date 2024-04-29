import tailwindForms from '@tailwindcss/forms';
import {
  defaultThemeFontSizeInRems,
  defaultThemeScreensInRems,
  fluidCorePlugins,
  fluidExtractor,
} from 'fluid-tailwind';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

import fontVariarionSettingsPlugin from './tailwind/fontVariationSettingsPlugin';
import safelist from './tailwind/tailwindSafelist';

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract: fluidExtractor(),
  },
  theme: {
    // Change default units
    fontSize: defaultThemeFontSizeInRems,
    screens: defaultThemeScreensInRems,
    // Additions
    extend: {
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.033em',
        tight: '-0.02em',
        tightish: '-0.01em',
      },
      // Note: colors are defined in 3 places for this demo
      // 1. Here, of course
      // 2. /tailwind/tailwindSafelist.js - prevents tree shaking, remove for production
      // 3. /src/app/colors/colors.json - parsed for colors page
      colors: {
        white: 'oklch(98.73% 0.004 106.47 / <alpha-value>)',
        smoke: 'oklch(18.26% 0.002 286.2 / <alpha-value>)',
        bluebird: {
          '50': 'oklch(97.77% 0.008 225.08 / <alpha-value>)',
          '100': 'oklch(94.93% 0.019 230.7 / <alpha-value>)',
          '200': 'oklch(89.12% 0.042 230.24 / <alpha-value>)',
          '300': 'oklch(82.69% 0.067 230.67 / <alpha-value>)',
          '400': 'oklch(75.09% 0.095 231.98 / <alpha-value>)',
          '500': 'oklch(65.45% 0.126 236.41 / <alpha-value>)',
          '600': 'oklch(60.69% 0.116 235.76 / <alpha-value>)',
          '700': 'oklch(54.62% 0.103 235.52 / <alpha-value>)',
          '800': 'oklch(47.4% 0.089 235.73 / <alpha-value>)',
          '900': 'oklch(39.09% 0.07 233.93 / <alpha-value>)',
          '950': 'oklch(31.2% 0.054 234.24 / <alpha-value>)',
        },
        acid: {
          '50': 'oklch(98.32% 0.02 121.83 / <alpha-value>)',
          '100': 'oklch(97.15% 0.035 122.63 / <alpha-value>)',
          '200': 'oklch(94.22% 0.076 123.07 / <alpha-value>)',
          '300': 'oklch(90.77% 0.118 123.44 / <alpha-value>)',
          '400': 'oklch(87.66% 0.156 124.95 / <alpha-value>)',
          '500': 'oklch(83.88% 0.194 126.96 / <alpha-value>)',
          '600': 'oklch(78.56% 0.196 127.73 / <alpha-value>)',
          '700': 'oklch(70.85% 0.175 127.52 / <alpha-value>)',
          '800': 'oklch(61.97% 0.153 127.5 / <alpha-value>)',
          '900': 'oklch(48.34% 0.117 127.35 / <alpha-value>)',
          '950': 'oklch(38.17% 0.09 126.82 / <alpha-value>)',
        },
        grass: {
          '50': 'oklch(97.11% 0.025 139.84 / <alpha-value>)',
          '100': 'oklch(93.9% 0.057 140.44 / <alpha-value>)',
          '200': 'oklch(88.14% 0.114 140.36 / <alpha-value>)',
          '300': 'oklch(80.55% 0.188 140.49 / <alpha-value>)',
          '400': 'oklch(72.23% 0.216 140.85 / <alpha-value>)',
          '500': 'oklch(62.46% 0.186 140.88 / <alpha-value>)',
          '600': 'oklch(58.18% 0.172 140.87 / <alpha-value>)',
          '700': 'oklch(53.25% 0.156 140.68 / <alpha-value>)',
          '800': 'oklch(46.94% 0.136 140.71 / <alpha-value>)',
          '900': 'oklch(35.3% 0.098 140.65 / <alpha-value>)',
          '950': 'oklch(29.63% 0.079 140.54 / <alpha-value>)',
        },
        eden: {
          '50': 'oklch(94.14% 0.015 191.75 / <alpha-value>)',
          '100': 'oklch(90.6% 0.031 189.04 / <alpha-value>)',
          '200': 'oklch(82.43% 0.071 184.57 / <alpha-value>)',
          '300': 'oklch(72.54% 0.117 177.85 / <alpha-value>)',
          '400': 'oklch(61.27% 0.104 174.68 / <alpha-value>)',
          '500': 'oklch(39.76% 0.07 172.44 / <alpha-value>)',
          '600': 'oklch(36.41% 0.058 176.07 / <alpha-value>)',
          '700': 'oklch(33.18% 0.049 178.46 / <alpha-value>)',
          '800': 'oklch(30.98% 0.041 182.67 / <alpha-value>)',
          '900': 'oklch(21.21% 0.021 185.01 / <alpha-value>)',
          '950': 'oklch(20.93% 0.019 183.79 / <alpha-value>)',
        },
        ticonderoga: {
          '50': 'oklch(97.43% 0.01 81.8 / <alpha-value>)',
          '100': 'oklch(96.61% 0.019 83.06 / <alpha-value>)',
          '200': 'oklch(94.29% 0.041 86.73 / <alpha-value>)',
          '300': 'oklch(91.98% 0.069 89.14 / <alpha-value>)',
          '400': 'oklch(89.49% 0.113 91.17 / <alpha-value>)',
          '500': 'oklch(87.17% 0.172 90.99 / <alpha-value>)',
          '600': 'oklch(81.63% 0.164 86.59 / <alpha-value>)',
          '700': 'oklch(75.86% 0.152 82.96 / <alpha-value>)',
          '800': 'oklch(68.3% 0.134 80.92 / <alpha-value>)',
          '900': 'oklch(58.91% 0.109 78.49 / <alpha-value>)',
          '950': 'oklch(52.17% 0.088 76.78 / <alpha-value>)',
        },
        cobalt: {
          '50': 'oklch(96.64% 0.011 286.2 / <alpha-value>)',
          '100': 'oklch(93.45% 0.023 280.58 / <alpha-value>)',
          '200': 'oklch(85.63% 0.057 277.5 / <alpha-value>)',
          '300': 'oklch(77.16% 0.098 272.36 / <alpha-value>)',
          '400': 'oklch(64.83% 0.168 265.62 / <alpha-value>)',
          '500': 'oklch(45.08% 0.206 262.04 / <alpha-value>)',
          '600': 'oklch(42.7% 0.201 263.57 / <alpha-value>)',
          '700': 'oklch(37.93% 0.183 265.37 / <alpha-value>)',
          '800': 'oklch(32.29% 0.151 267.98 / <alpha-value>)',
          '900': 'oklch(28.05% 0.123 271.81 / <alpha-value>)',
          '950': 'oklch(22.05% 0.079 276.79 / <alpha-value>)',
        },
        windows: {
          '50': 'oklch(97.69% 0.011 274.9 / <alpha-value>)',
          '100': 'oklch(94.59% 0.024 267.93 / <alpha-value>)',
          '200': 'oklch(87.84% 0.052 265.88 / <alpha-value>)',
          '300': 'oklch(80.06% 0.08 260.91 / <alpha-value>)',
          '400': 'oklch(70.28% 0.113 257.15 / <alpha-value>)',
          '500': 'oklch(56.05% 0.135 253.73 / <alpha-value>)',
          '600': 'oklch(51.97% 0.157 257.66 / <alpha-value>)',
          '700': 'oklch(46.92% 0.171 260.98 / <alpha-value>)',
          '800': 'oklch(39.71% 0.168 262.68 / <alpha-value>)',
          '900': 'oklch(32.07% 0.155 263.74 / <alpha-value>)',
          '950': 'oklch(22.73% 0.118 263.29 / <alpha-value>)',
        },
        aurum: {
          '50': 'oklch(98.37% 0.009 44.89 / <alpha-value>)',
          '100': 'oklch(96.02% 0.022 49.93 / <alpha-value>)',
          '200': 'oklch(91.64% 0.048 50.83 / <alpha-value>)',
          '300': 'oklch(86.8% 0.084 56.41 / <alpha-value>)',
          '400': 'oklch(81.33% 0.13 60.29 / <alpha-value>)',
          '500': 'oklch(74.58% 0.173 58.03 / <alpha-value>)',
          '600': 'oklch(69.72% 0.186 49.36 / <alpha-value>)',
          '700': 'oklch(62.63% 0.179 45.17 / <alpha-value>)',
          '800': 'oklch(54.96% 0.167 41.7 / <alpha-value>)',
          '900': 'oklch(40.76% 0.129 39.62 / <alpha-value>)',
          '950': 'oklch(28.47% 0.091 39.18 / <alpha-value>)',
        },
        pucker: {
          '50': 'oklch(93.91% 0.046 333.72 / <alpha-value>)',
          '100': 'oklch(90.98% 0.067 336.44 / <alpha-value>)',
          '200': 'oklch(86.2% 0.1 340.36 / <alpha-value>)',
          '300': 'oklch(80.54% 0.14 345.04 / <alpha-value>)',
          '400': 'oklch(73.89% 0.19 350.53 / <alpha-value>)',
          '500': 'oklch(64.7% 0.256 4.08 / <alpha-value>)',
          '600': 'oklch(60.77% 0.246 1.27 / <alpha-value>)',
          '700': 'oklch(56.14% 0.23 355.64 / <alpha-value>)',
          '800': 'oklch(50.5% 0.21 350.52 / <alpha-value>)',
          '900': 'oklch(43.28% 0.184 345.52 / <alpha-value>)',
          '950': 'oklch(39.08% 0.169 340.48 / <alpha-value>)',
        },
        splash: {
          '50': 'oklch(98.1% 0.013 221.42 / <alpha-value>)',
          '100': 'oklch(96.92% 0.022 217.63 / <alpha-value>)',
          '200': 'oklch(92.98% 0.052 217.85 / <alpha-value>)',
          '300': 'oklch(89.28% 0.079 213.07 / <alpha-value>)',
          '400': 'oklch(85.09% 0.106 210.6 / <alpha-value>)',
          '500': 'oklch(80.44% 0.122 207.04 / <alpha-value>)',
          '600': 'oklch(74.46% 0.13 215.66 / <alpha-value>)',
          '700': 'oklch(68.04% 0.123 220.46 / <alpha-value>)',
          '800': 'oklch(59.3% 0.113 225.78 / <alpha-value>)',
          '900': 'oklch(46.84% 0.094 230.66 / <alpha-value>)',
          '950': 'oklch(36.77% 0.077 233.7 / <alpha-value>)',
        },
        grenadine: {
          '50': 'oklch(97.98% 0.01 25.07 / <alpha-value>)',
          '100': 'oklch(95.25% 0.024 33.55 / <alpha-value>)',
          '200': 'oklch(90.13% 0.052 35.73 / <alpha-value>)',
          '300': 'oklch(82.45% 0.102 39.42 / <alpha-value>)',
          '400': 'oklch(74.13% 0.164 41.49 / <alpha-value>)',
          '500': 'oklch(62.27% 0.187 40.21 / <alpha-value>)',
          '600': 'oklch(58.28% 0.197 36.46 / <alpha-value>)',
          '700': 'oklch(52.56% 0.184 35.01 / <alpha-value>)',
          '800': 'oklch(46.73% 0.168 33.96 / <alpha-value>)',
          '900': 'oklch(35.62% 0.128 34 / <alpha-value>)',
          '950': 'oklch(28.59% 0.104 33.71 / <alpha-value>)',
        },
        pear: {
          '50': 'oklch(98.34% 0.028 95.89 / <alpha-value>)',
          '100': 'oklch(97.06% 0.062 99.57 / <alpha-value>)',
          '200': 'oklch(94.78% 0.12 101.76 / <alpha-value>)',
          '300': 'oklch(92.4% 0.159 104.45 / <alpha-value>)',
          '400': 'oklch(89.59% 0.182 106.14 / <alpha-value>)',
          '500': 'oklch(87.08% 0.173 108.05 / <alpha-value>)',
          '600': 'oklch(80.51% 0.169 106.25 / <alpha-value>)',
          '700': 'oklch(72.8% 0.152 103.06 / <alpha-value>)',
          '800': 'oklch(63.34% 0.132 100.11 / <alpha-value>)',
          '900': 'oklch(48.75% 0.1 96.91 / <alpha-value>)',
          '950': 'oklch(36.91% 0.076 93.43 / <alpha-value>)',
        },
      },
    },
    // Overrides here if any
  },
  plugins: [tailwindForms, fluidCorePlugins, fontVariarionSettingsPlugin],
  safelist: safelist, // remove if not using the colors page
};
export default config;
