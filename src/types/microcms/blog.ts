import { CommonSchema } from "./common"

export type Blog = {
    id: string
    title: string
    content: string
    category: Category
} & CommonSchema

export type Category = {
    name: string
} & CommonSchema