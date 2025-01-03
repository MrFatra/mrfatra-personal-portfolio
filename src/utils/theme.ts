import { defineConfig, mergeConfigs, defaultConfig, createSystem, defineTextStyles } from "@chakra-ui/react"

const textStyles = defineTextStyles({
    base: {
        value: {
            fontSize: "16px",
        }
    },
    sm: {
        value: {
            fontSize: "12px",
        }
    },
    md: {
        value: {
            fontSize: "18px",
        }
    },
    lg: {
        value: {
            fontSize: "24px",
        }
    },
    xl: {
        value: {
            fontSize: "26px",
        }
    },
    "2xl": {
        value: {
            fontSize: "28px",
        }
    },
})

const config = defineConfig({
    theme: {
        semanticTokens: {
            colors: {
                primary: { value: "#FF0000" },
                secondary: { value: "#00FF00" },
                tertiary: { value: "#0000FF" },
            },
        },
        textStyles: {
            ...textStyles,
        }
    }
})

const mergeConfig = mergeConfigs(defaultConfig, config)
const system = createSystem(mergeConfig)

export default system
