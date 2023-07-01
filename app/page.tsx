import { client } from "@/src/lib/client"
import type { Blog } from "@/src/types/microcms/blog"

export default async function Home() {
  const response = await client.get({ endpoint: "blogs" })

  return (
    <main>
      {response.contents.map((blog: Blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.publishedAt}</p>
          <div dangerouslySetInnerHTML={{__html: blog.content}} />
          <p>{blog.category.name}</p>
        </div>
      ))}
    </main>
  )
}
