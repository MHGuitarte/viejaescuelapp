import { writable } from 'svelte/store';
import { supabaseClient } from '../lib/supabase';

export const userStore = writable(supabaseClient?.auth.user());
