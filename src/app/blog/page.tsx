import { Blog } from '@/types/microcms/blog';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';

export default async function Home() {
  const response: MicroCMSListResponse<Blog> = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/blog`,
  ).then((res) => res.json());

  return (
    <main className='mx-auto w-96 columns-1 gap-5'>
      {response.contents.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <div key={blog.id} className='card rounded-md shadow-md'>
            <div className='card-body [&>p]:my-0'>
              <h2 className='card-title mt-0'>{blog.title + (blog.subtitle ?? '')}</h2>
              <p>{blog.publishedAt}</p>
              {blog.category && <p>{blog.category.name}</p>}
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
