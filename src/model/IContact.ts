export interface IContact {
  id: number;
  title: string;
  description: string;
} 

export type WeakContact = Pick<IContact, "title" | "description">