export type Product = {
    id: number,
    slug: string,
    name: string,
    cover: string,
    images?: string[],
    price: string,
    stars?: number,
    created_at?: string,
    updated_at?: string
}

export type ProductFormData = Omit<
    Product,
    "id" |
    "created_at" |
    "updated_at"
>