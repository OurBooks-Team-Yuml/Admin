export interface Author {
    id: number
    firstName?: string
    lastName?: string
    fullName?: string
    birthdayDate?: string
    biography?: string
    imagePath?: string
    books?: Book
}

export interface Category {
    id: number
    name: string
}

export interface Book {
    id?: number
    name?: string
    description?: string
    imagePath?: string
    authorsId?: Array<Author>
    isbn?: string
    publishingHouse?: string
    publishedDate?: string
    categories?: Array<Category>
    relatedBook?: Book
}
