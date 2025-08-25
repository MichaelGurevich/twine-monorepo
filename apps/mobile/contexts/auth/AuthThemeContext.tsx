import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

// Auth theme interface with absolute positioning system
export interface AuthThemeContextType {
  // Legacy spacing system (kept for backward compatibility)
  spacing: {
    inputFieldMarginTop: string;
  };

  padding: {
    authLinkPadding: string;
  };

  textSize: {
    authLinkTextSize: string;
  };

  // Component dimensions
  dimensions: {
    inputMinHeight: string;
  };

  // New absolute positioning system for login page
  absolute: {
    title: {
      top: string; // Middle of first third (16.66%)
      alignSelf: string; // Center horizontally
    };
    inputFields: {
      top: string; // Middle of second third (50%)
      alignSelf: string; // Center horizontally
    };
    inputFieldsGroup: {
      top: string; // Middle of second third (50%)
      alignSelf: string; // Center horizontally
    };
    primaryButton: {
      top: string; // Upper part of third third (70%)
      alignSelf: string; // Center horizontally
    };
    redirectLink: {
      top: string; // Just below sign in button (77%)
      alignSelf: string; // Center horizontally
    };
  };

  // Screen division system
  screenDivision: {
    firstThird: {
      start: string;
      end: string;
      middle: string;
    };
    secondThird: {
      start: string;
      end: string;
      middle: string;
    };
    thirdThird: {
      start: string;
      end: string;
      upperPart: string;
    };
  };
}

interface AuthThemeProviderProps {
  children: ReactNode;
}

export const AuthThemeProvider = ({ children }: AuthThemeProviderProps) => {
  // Design system spacing scale (legacy)
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

  // Screen division constants (in percentages)
  const SCREEN_THIRDS = {
    firstThirdStart: 0,
    firstThirdEnd: 33.33,
    firstThirdMiddle: 16.66,

    secondThirdStart: 33.33,
    secondThirdEnd: 66.66,
    secondThirdMiddle: 50,

    thirdThirdStart: 66.66,
    thirdThirdEnd: 100,
    thirdThirdUpperPart: 70,
  } as const;

  // Build the theme object
  const authTheme: AuthThemeContextType = {
    // Legacy spacing system
    spacing: {
      inputFieldMarginTop: `${SPACING.base}px`,
    },
    padding: {
      authLinkPadding: `${SPACING.xs}px`,
    },
    textSize: {
      authLinkTextSize: `${2 * SPACING.xs}px`,
    },
    dimensions: {
      inputMinHeight: `${DIMENSIONS.inputHeight}px`,
    },

    absolute: {
      title: {
        top: `${SCREEN_THIRDS.firstThirdMiddle}%`,
        alignSelf: 'center',
      },
      inputFields: {
        top: `${SCREEN_THIRDS.secondThirdMiddle}%`,
        alignSelf: 'center',
      },
      inputFieldsGroup: {
        top: `${45}%`,
        alignSelf: 'center',
      },
      primaryButton: {
        top: `${SCREEN_THIRDS.thirdThirdUpperPart}%`,
        alignSelf: 'center',
      },
      redirectLink: {
        top: `${SCREEN_THIRDS.thirdThirdUpperPart + 20}%`, // 7% below sign in button
        alignSelf: 'center',
      },
    },

    // Screen division reference
    screenDivision: {
      firstThird: {
        start: `${SCREEN_THIRDS.firstThirdStart}%`,
        end: `${SCREEN_THIRDS.firstThirdEnd}%`,
        middle: `${SCREEN_THIRDS.firstThirdMiddle}%`,
      },
      secondThird: {
        start: `${SCREEN_THIRDS.secondThirdStart}%`,
        end: `${SCREEN_THIRDS.secondThirdEnd}%`,
        middle: `${SCREEN_THIRDS.secondThirdMiddle}%`,
      },
      thirdThird: {
        start: `${SCREEN_THIRDS.thirdThirdStart}%`,
        end: `${SCREEN_THIRDS.thirdThirdEnd}%`,
        upperPart: `${SCREEN_THIRDS.thirdThirdUpperPart}%`,
      },
    },
  };

  return <ThemeProvider theme={authTheme}>{children}</ThemeProvider>;
};

// Export constants for direct use
export const AUTH_SPACING = {
  xs: 8,
  sm: 12,
  base: 20,
  lg: 40,
  xl: 50,
  xxl: 100,
} as const;

// Export screen division constants
export const SCREEN_LAYOUT = {
  FIRST_THIRD_MIDDLE: 16.66,
  SECOND_THIRD_MIDDLE: 50,
  THIRD_THIRD_UPPER: 70,
  SIGN_UP_LINK_OFFSET: 77,
} as const;
