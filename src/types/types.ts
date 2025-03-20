// src/types/types.ts

// Osnovni tip za produkt (prije dodavanja u korpu)
export interface Product {
  id: string;
  title: string;
  description?: string;
  image?: string;
  price: number;
  addons?: string[]; // opcioni prilozi
}

// Tip za prilog u korpi
export interface AddonItem {
  id: string;
  title: string;
  quantity: number; // (default: 1, min: 0, max: 2)
  price?: number; // cijena ako je dodatno naplaćen, inače 0
}

// Tip za glavnu stavku u korpi
export interface CartItem {
  id: string;
  title: string;
  quantity: number; // default: 1, min: 1
  price: number;
  addons: AddonItem[];
}
