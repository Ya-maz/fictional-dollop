export interface IContact {
  id:string;
  title: string;
  description: string;
} 

export type WeakContact = Pick<IContact, "title" | "description">