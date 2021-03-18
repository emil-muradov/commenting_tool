import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

export function timePassed(dateString: string): string {
    const parsed = new Date(dateString);
    const now = new Date();
    const days = differenceInDays(now, parsed);
    const hours = differenceInHours(now, parsed);
    const minutes = differenceInMinutes(now, parsed);
    if (days) {
      return `${days} days ago`;
    } else if (hours) {
      return `${hours} hours ago`;
    } else if (minutes) {
      return `${minutes} minutes ago`;
    } else {
      return `less than a minute ago`;
    }
}
