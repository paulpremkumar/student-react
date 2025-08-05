export const apiFetch = async <T>(
    url: string,
    params: Record<string, any> = {},
    method: string = 'GET'
): Promise<T> => {
    try {
        const token = localStorage.getItem('token');

        let finalUrl = url;
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        };

        const fetchConfig: RequestInit = {
            method,
            headers,
        };

        if (method.toUpperCase() === 'GET') {
            // Convert params object to query string for GET
            const queryString = new URLSearchParams(params).toString();
            if (queryString) {
                finalUrl += (url.includes('?') ? '&' : '?') + queryString;
            }
        } else {
            // For other methods, stringify params as body
            fetchConfig.body = JSON.stringify(params);
        }

        const response = await fetch(finalUrl, fetchConfig);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }

        return response.json();
    } catch (err: any) {
        console.error('[apiFetch error]', err.message);
        throw err;
    }
};
