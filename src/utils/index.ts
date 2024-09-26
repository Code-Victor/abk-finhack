import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * The function `cn` in TypeScript merges multiple class values using `clsx` and `twMerge`.
 * @param {ClassValue[]} inputs - The `cn` function takes in an array of `ClassValue` inputs. These
 * inputs are used to generate a combined class string that can be applied to HTML elements for styling
 * purposes.
 * @returns The `cn` function is returning the result of merging the class names passed as arguments
 * using the `clsx` function and then applying Tailwind CSS utility classes using the `twMerge`
 * function.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BreakpointKey = "default" | "sm" | "md" | "lg" | "xl" | "2xl";

type BreakpointConfig<T> = {
  [K in BreakpointKey]?: T;
};

/**
 * The function `screenSize` determines the appropriate screen size based on breakpoints and window
 * width.
 * @param breakpoints - The `breakpoints` parameter in the `screenSize` function is an object that
 * contains configuration values for different breakpoints. The keys in this object correspond to
 * different breakpoint keys such as "sm", "md", "lg", "xl", and "2xl". The values associated with
 * these keys are
 * @returns The `screenSize` function returns the appropriate breakpoint value based on the current
 * window width and the provided `breakpoints` configuration. If a matching breakpoint is found, it
 * returns the corresponding value from the `breakpoints` object. If no matching breakpoint is found,
 * it returns `null`.
 */
export function screenSize<T>(breakpoints: BreakpointConfig<T>): T | null {
  // Tailwind default breakpoints
  const twBreakpoints: Record<Exclude<BreakpointKey, "default">, number> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  const width = window.innerWidth;
  if (width >= twBreakpoints["2xl"] && breakpoints["2xl"]) {
    return breakpoints["2xl"];
  } else if (width >= twBreakpoints["xl"] && breakpoints.xl) {
    return breakpoints.xl;
  } else if (width >= twBreakpoints.lg && breakpoints.lg) {
    return breakpoints.lg;
  } else if (width >= twBreakpoints.md && breakpoints.md) {
    return breakpoints.md;
  } else if (width >= twBreakpoints.sm && breakpoints.sm) {
    return breakpoints.sm;
  } else if (breakpoints.default) {
    return breakpoints.default;
  }

  // Default case if no matching breakpoint is found
  return null;
}
