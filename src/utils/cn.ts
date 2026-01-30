/**
 * Class Name Utilities
 *
 * @description Utility functions for combining class names.
 * Uses clsx and tailwind-merge for optimal class handling.
 *
 * @module utils/cn
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine class names with Tailwind merge support
 *
 * This function:
 * 1. Combines class names using clsx (handles conditionals, arrays, objects)
 * 2. Merges Tailwind classes intelligently (later classes win conflicts)
 *
 * @param inputs - Class values to combine
 * @returns Combined and merged class string
 *
 * @example
 * cn('px-2', 'py-1', 'px-4')
 * // Returns: 'py-1 px-4' (px-4 wins over px-2)
 *
 * cn('text-red-500', condition && 'text-blue-500')
 * // Returns: 'text-blue-500' if condition is true
 *
 * cn(['base-class', 'another-class'], { 'conditional-class': isActive })
 * // Returns: 'base-class another-class conditional-class' if isActive
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditional class helper for more readable conditionals
 *
 * @param condition - Condition to check
 * @param trueClass - Class(es) to apply when true
 * @param falseClass - Class(es) to apply when false (optional)
 * @returns Class string based on condition
 *
 * @example
 * conditionalClass(isActive, 'bg-blue-500', 'bg-gray-500')
 * // Returns 'bg-blue-500' if isActive, otherwise 'bg-gray-500'
 */
export function conditionalClass(
  condition: boolean,
  trueClass: ClassValue,
  falseClass?: ClassValue
): string {
  return cn(condition ? trueClass : falseClass);
}
