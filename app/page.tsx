import { client } from "@/src/lib/client"
import type { Blog } from "@/src/types/microcms/blog"

export default async function Home() {
  const response = await client.getList<Blog>({
    endpoint: "blogs",
    customRequestInit: {
      cache: "no-store"
    }
  })

  return (
    <main>
      {response.contents.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.publishedAt}</p>
          <p>{blog.category && blog.category.name}</p>
        </div>
      ))}
    </main>
  )
}
