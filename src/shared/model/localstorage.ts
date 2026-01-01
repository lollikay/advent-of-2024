export class LocalStorageService<T> {
  saveData(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as T;
    } catch {
      return null;
    }
  }

  clearData(key: string) {
    localStorage.removeItem(key);
  }
}