export interface Order {
  id: string,
  code: number,
  customer: Customer,
  products: [OrderItem] | null,
  status: string,
  total: number,
  discount: number,
  createdAt: Date,
  updatedAt: Date
}

export interface Customer {
  id: string,
  name: string,
  phone: string
}

export interface OrderItem {
  id: string,
  name: string,
	price: number,
	quantity: number,
	brand: string,
	status: boolean
}
