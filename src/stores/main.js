import { writable } from 'svelte/store';

export const hasTabs = writable(false);
export const tabs = writable([]);
