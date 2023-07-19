'use client';

import type { Blog } from '@/types/microcms/blog';
import { useQuery } from '@tanstack/react-query';

/**
 * ブログ取得関数
 *
 * @param blogId ブログID
 *
 * @returns ブログデータ
 */
async function getBlog(blogId: string): Promise<Blog> {
  return await fetch(`/api/blog/${blogId}`).then((res) => res.json());
}

/**
 * ブログコンテンツ
 *
 * @param blogId ブログID
 */
export default function BlogContent({
  blogId,
}: {
  /** ブログID */
  blogId: string;
}) {
  const { data, isLoading, isFetching, error } = useQuery<Blog>(['blog', blogId], () =>
    getBlog(blogId),
  );

  if (error) {
    return <p>Error</p>;
  }

  return (
    <article>
      {data ? (
        <>
          <h1 className='break-all text-center'>{data.title}</h1>
          <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
      ) : null}
    </article>
  );
}
