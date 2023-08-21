export interface Order {
  id: string,
  code: number,
  customer: [Customer],
  products: [OrderItem],
  status: string,
  total: number,
  discount: number,
  appointmentTime: Date,
  endTime: Date
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
