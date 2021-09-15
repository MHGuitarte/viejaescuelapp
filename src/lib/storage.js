import { Storage } from '@capacitor/storage';

export const set = async (key, value) => {
	if (typeof value === 'object') {
		value = JSON.stringify(value);
	}

	await Storage.set({ key, value });
};

export const get = async (key) => {
	const { value } = await Storage.get({ key });

	try {
		return JSON.parse(value);
	} catch (error) {
		return value;
	}
};

export const remove = async (key) => {
	await Storage.remove({ key });
};

export const searchByKeys = async (key) => {
	let { keys } = await Storage.keys();
	keys = keys.filter((k) => k.includes(key));

	const result = keys.map((k) => get(k));

	return Promise.all(result).then((res) => {
		try {
			return JSON.parse(res);
		} catch (error) {
			return res;
		}
	});
};
