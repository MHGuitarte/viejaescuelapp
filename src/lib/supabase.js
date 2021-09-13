import { createClient } from '@supabase/supabase-js';

const startSupabase = () => {
	try {
		return createClient(
			import.meta.env.VITE_SUPABASE_URL,
			import.meta.env.VITE_SUPABASE_KEY
		);

		
	} catch(error) {
		console.error('Could not connect to database', error)
		return undefined;
	}
}

export const supabaseClient = startSupabase();