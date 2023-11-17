import { writable } from 'svelte/store';
import { browser } from '$app/environment';
function getInitialValue(key, defaultValue) {
    if (browser) {
        const value = localStorage.getItem(key);
        return value ?? defaultValue; // Use the nullish coalescing operator
    }
    return defaultValue;
}

function createAuthStore() {
    const initialValue = {
        token: getInitialValue('token', null),
        userId: getInitialValue('userId', null)
    };

    const { subscribe, set } = writable(initialValue);

    return {
        subscribe,
        login: (token, userId) => {
            if (browser) {
                localStorage.setItem('token', token); // Save as plain string
                localStorage.setItem('userId', userId); // Save as plain string
            }
            set({ token, userId });
        },
        logout: () => {
            if (browser) {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
            }
            set({ token: null, userId: null });
        }
    };
}

export const authStore = createAuthStore();