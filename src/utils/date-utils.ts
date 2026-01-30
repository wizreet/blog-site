/**
 * Date Utilities
 *
 * @description Utility functions for date formatting and manipulation.
 * Uses Day.js for lightweight date handling.
 *
 * @module utils/date-utils
 */

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

// ============================================================================
// Date Formatting
// ============================================================================

/**
 * Format date for display
 *
 * @param date - Date to format
 * @param format - Format string (dayjs format)
 * @returns Formatted date string
 *
 * @example
 * formatDate(new Date('2025-01-30')) // 'Jan 30, 2025'
 * formatDate(new Date('2025-01-30'), 'YYYY-MM-DD') // '2025-01-30'
 */
export function formatDate(date: Date | string, format: string = 'MMM D, YYYY'): string {
  return dayjs(date).format(format);
}

/**
 * Format date with time
 *
 * @param date - Date to format
 * @returns Formatted datetime string
 *
 * @example
 * formatDateTime(new Date()) // 'Jan 30, 2025 at 10:30 AM'
 */
export function formatDateTime(date: Date | string): string {
  return dayjs(date).format('MMM D, YYYY [at] h:mm A');
}

/**
 * Format date for ISO/schema.org
 *
 * @param date - Date to format
 * @returns ISO 8601 formatted string
 */
export function formatDateISO(date: Date | string): string {
  return dayjs(date).toISOString();
}

/**
 * Format date for RSS feed
 *
 * @param date - Date to format
 * @returns RFC 2822 formatted string
 */
export function formatDateRSS(date: Date | string): string {
  return dayjs(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
}

// ============================================================================
// Relative Time
// ============================================================================

/**
 * Get relative time from now
 *
 * @param date - Date to compare
 * @returns Relative time string
 *
 * @example
 * getRelativeTime(yesterday) // 'a day ago'
 * getRelativeTime(lastWeek) // '7 days ago'
 */
export function getRelativeTime(date: Date | string): string {
  return dayjs(date).fromNow();
}

/**
 * Get relative time with threshold
 * Shows relative time if within threshold, otherwise shows formatted date
 *
 * @param date - Date to format
 * @param thresholdDays - Days threshold for relative time (default: 7)
 * @returns Relative time or formatted date
 */
export function getSmartDate(date: Date | string, thresholdDays: number = 7): string {
  const now = dayjs();
  const target = dayjs(date);
  const diffDays = now.diff(target, 'day');

  if (diffDays < thresholdDays) {
    return target.fromNow();
  }

  return target.format('MMM D, YYYY');
}

// ============================================================================
// Date Comparisons
// ============================================================================

/**
 * Check if date is today
 */
export function isToday(date: Date | string): boolean {
  return dayjs(date).isSame(dayjs(), 'day');
}

/**
 * Check if date is in the past
 */
export function isPast(date: Date | string): boolean {
  return dayjs(date).isBefore(dayjs());
}

/**
 * Check if date is in the future
 */
export function isFuture(date: Date | string): boolean {
  return dayjs(date).isAfter(dayjs());
}

/**
 * Check if date is within the last N days
 */
export function isWithinDays(date: Date | string, days: number): boolean {
  const target = dayjs(date);
  const threshold = dayjs().subtract(days, 'day');
  return target.isAfter(threshold);
}

// ============================================================================
// Date Extraction
// ============================================================================

/**
 * Get year from date
 */
export function getYear(date: Date | string): number {
  return dayjs(date).year();
}

/**
 * Get month from date (1-12)
 */
export function getMonth(date: Date | string): number {
  return dayjs(date).month() + 1;
}

/**
 * Get month name from date
 */
export function getMonthName(date: Date | string, short: boolean = false): string {
  return dayjs(date).format(short ? 'MMM' : 'MMMM');
}

/**
 * Get day of month from date
 */
export function getDay(date: Date | string): number {
  return dayjs(date).date();
}

// ============================================================================
// Date Range
// ============================================================================

/**
 * Format date range
 *
 * @param start - Start date
 * @param end - End date (optional, shows 'Present' if not provided)
 * @returns Formatted range string
 *
 * @example
 * formatDateRange('2024-01-01', '2024-12-31') // 'Jan 2024 - Dec 2024'
 * formatDateRange('2024-01-01') // 'Jan 2024 - Present'
 */
export function formatDateRange(start: Date | string, end?: Date | string | null): string {
  const startFormatted = dayjs(start).format('MMM YYYY');

  if (!end) {
    return `${startFormatted} - Present`;
  }

  const endFormatted = dayjs(end).format('MMM YYYY');
  return `${startFormatted} - ${endFormatted}`;
}

/**
 * Calculate duration between dates
 *
 * @param start - Start date
 * @param end - End date (defaults to now)
 * @returns Duration object with years and months
 */
export function calculateDuration(
  start: Date | string,
  end?: Date | string | null
): { years: number; months: number; text: string } {
  const startDate = dayjs(start);
  const endDate = end ? dayjs(end) : dayjs();

  const totalMonths = endDate.diff(startDate, 'month');
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let text = '';
  if (years > 0) {
    text += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (text) text += ' ';
    text += `${months} month${months > 1 ? 's' : ''}`;
  }
  if (!text) {
    text = 'Less than a month';
  }

  return { years, months, text };
}

// ============================================================================
// Current Date Helpers
// ============================================================================

/**
 * Get current year
 */
export function getCurrentYear(): number {
  return dayjs().year();
}

/**
 * Get current date in specified format
 */
export function getCurrentDate(format: string = 'YYYY-MM-DD'): string {
  return dayjs().format(format);
}
