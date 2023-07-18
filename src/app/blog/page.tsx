import { client } from '@/libs/client';
import { Blog } from '@/types/microcms/blog';
import Link from 'next/link';

export default async function Home() {
  const response = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: {
      fields: ['id', 'publishedAt', 'title', 'subtitle', 'category'],
    },
    customRequestInit: {
      cache: 'no-store',
    },
  });

  return (
    <main className='container mx-auto py-8 lg:w-4/5 xl:w-3/5'>
      <h1 className='text-center'>記事一覧</h1>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>
        {response.contents.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`} className='no-underline'>
            <div key={blog.id} className='card break-inside-avoid-column rounded-md shadow-md'>
              <div className='card-body [&>p]:my-0'>
                <h2 className='card-title mt-0'>{blog.title + (blog.subtitle ?? '')}</h2>
                <p>{blog.publishedAt}</p>
                {blog.category && <p>{blog.category.name}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
