export const AppStorage = {
    getItem<T>(key: string, defualtValue: any = null): T {
        const data: any = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return defualtValue;
    },
    setItem(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key: string) {
        window.localStorage.removeItem(key);
    },
    clear() {
        window.localStorage.clear();
    },
};