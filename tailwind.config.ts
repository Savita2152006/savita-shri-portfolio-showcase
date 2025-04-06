
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tech: {
					'blue': '#0EA5E9',
					'cyan': '#22D3EE',
					'dark': '#0F172A',
					'darker': '#020617'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': { textShadow: '0 0 10px rgba(14, 165, 233, 0.7), 0 0 20px rgba(14, 165, 233, 0.5)' },
					'50%': { textShadow: '0 0 15px rgba(14, 165, 233, 0.9), 0 0 30px rgba(14, 165, 233, 0.7)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'tech-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwLTIuMi0xLjgtNC00LTRIN2MtMi4yIDAtNCAxLjgtNCA0djE5YzAgMi4yIDEuOCA0IDQgNGgyNWMyLjIgMCA0LTEuOCA0LTRWMzR6IiBmaWxsPSIjNTZhYWYxIiBvcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik00IDQxaDI1djN6IiBzdHJva2U9IiM1NmFhZjEiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNNyAzMGgyNXY0SDB6IiBmaWxsPSIjNTZhYWYxIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik01MCAzMGMwLTIuMi0xLjgtNC00LTRIMjFjLTIuMiAwLTQgMS44LTQgNHYxOWMwIDIuMiAxLjggNCA0IDRoMjVjMi4yIDAgNC0xLjggNC00VjMweiIgZmlsbD0iIzU2YWFmMSIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTggMzdoMjV2M3oiIHN0cm9rZT0iIzU2YWFmMSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0yMSAyNmgyNXY0SDE0eiIgZmlsbD0iIzU2YWFmMSIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
