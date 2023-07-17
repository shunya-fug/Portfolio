import { getBaseUrl } from '@/libs/getBaseUrl';
import getQueryClient from '@/libs/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import BlogContent from './content';

/**
 * ブログ取得関数
 *
 * @param blogId ブログID
 *
 * @returns ブログデータ
 */
async function getBlog(blogId: string) {
  return await fetch(`${getBaseUrl()}/api/blog/${blogId}`).then((res) => res.json());
}

/**
 * ブログページ
 *
 * @param params.blogId ブログID
 *
 * @see https://tanstack.com/query/v4/docs/react/guides/ssr#using-hydrate
 */
export default async function Home({
  params,
}: {
  params: {
    /** ブログID */
    blogId: string;
  };
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['blog', params.blogId], () => getBlog(params.blogId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className='container mx-auto pt-8 lg:w-4/5 xl:w-3/5'>
      <Hydrate state={dehydratedState}>
        <BlogContent blogId={params.blogId} />
      </Hydrate>
    </main>
  );
}
