import { IContact, WeakContact } from "../model/IContact";

const SERVER_API: string = "http://localhost:3005/";

enum URL {
  CONTACTS = "contacts",
}

const getFetch = async <Type>(url: string): Promise<Type> => {
  const response = await fetch(`${SERVER_API}${url}`);
  return await response.json();
};

export const api = {
  get: async () => await getFetch<IContact[]>(URL.CONTACTS),
  add: async (newContact: WeakContact): Promise<Response> =>
    await fetch(`${SERVER_API}${URL.CONTACTS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newContact),
    }),
  delete: async (id: number): Promise<Response> =>
    await fetch(`${SERVER_API}${URL.CONTACTS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }),
  edit: async (newContact: WeakContact, id:string): Promise<Response> =>
    await fetch(`${SERVER_API}${URL.CONTACTS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newContact),
    }),
    search: async (value:string) => await getFetch<IContact[]>(`${URL.CONTACTS}?q=${value}`),
};
