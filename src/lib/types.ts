export type Categories = 'Technology' | 'Productivity' | 'Miscellaneous' | 'Health'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
