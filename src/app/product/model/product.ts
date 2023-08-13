export interface Product {
  id: string,
  name: string,
  price: number,
  quantity: number,
  brand: string,
  status: boolean,
  createdAt: Date | null,
  updatedAt: Date | null
}
