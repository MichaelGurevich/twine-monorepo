import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

// Auth theme interface with better organization
export interface AuthThemeContextType {
  // Spacing system
  spacing: {
    titleMarginTop: string;
    formMarginTop: string;
    inputFieldMarginTop: string;
    buttonGroupMarginTop: string;
    buttonSecondaryGroupMarginTop: string;
  };

  // Component dimensions
  dimensions: {
    inputMinHeight: string;
  };

  // Page-specific spacing
  pages: {
    signIn: {
      formMarginTop: string;
    };
    signUp: {
      formMarginTop: string;
    };
  };
}

interface AuthThemeProviderProps {
  children: ReactNode;
}

export const AuthThemeProvider = ({ children }: AuthThemeProviderProps) => {
  // Design system spacing scale
  const SPACING = {
    xs: 8,
    sm: 12,
    base: 20,
    lg: 40,
    xl: 50,
    xxl: 100,
  } as const;

  // Component dimensions
  const DIMENSIONS = {
    inputHeight: 60,
  } as const;

  // Calculated values for specific use cases
  const CALCULATED_SPACING = {
    signUpFormOffset: SPACING.xxl + SPACING.base + DIMENSIONS.inputHeight, // 180px
  } as const;

  // Build the theme object
  const authTheme: AuthThemeContextType = {
    spacing: {
      titleMarginTop: `${SPACING.xxl}px`,
      formMarginTop: `${SPACING.xxl}px`,
      inputFieldMarginTop: `${SPACING.base}px`,
      buttonGroupMarginTop: `${SPACING.lg}px`,
      buttonSecondaryGroupMarginTop: `${SPACING.xl}px`,
    },
    dimensions: {
      inputMinHeight: `${DIMENSIONS.inputHeight}px`,
    },
    pages: {
      signIn: {
        formMarginTop: `${SPACING.xxl}px`,
      },
      signUp: {
        formMarginTop: `${CALCULATED_SPACING.signUpFormOffset}px`,
      },
    },
  };

  return <ThemeProvider theme={authTheme}>{children}</ThemeProvider>;
};

// Optional: Export spacing constants for direct use if needed
export const AUTH_SPACING = {
  xs: 8,
  sm: 12,
  base: 20,
  lg: 40,
  xl: 50,
  xxl: 100,
} as const;
