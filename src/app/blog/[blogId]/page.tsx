import { client } from '@/libs/client';
import type { Blog } from '@/types/microcms/blog';
import { load } from 'cheerio';
import hljs from 'highlight.js';

export default async function Home({ params }: { params: { blogId: string } }) {
  const response = await client.get<Blog>({
    endpoint: 'blogs',
    contentId: params.blogId,
    customRequestInit: {
      cache: 'no-store',
    },
  });

  const $ = load(response.content);
  // コードブロックのシンタックスハイライト処理
  $('pre code').each((_, elm) => {
    const language = $(elm).attr('class')?.replace('language-', '');
    const result = language
      ? hljs.highlight($(elm).text(), { language })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  // コードブロックのファイル名が入力されている場合の処理
  $('div[data-filename]').each((_, elm) => {
    // data-filename属性の値を持つspanを追加
    $(elm)
      .children('pre')
      .prepend(`<span>${$(elm).data('filename')}</span>`);
  });

  return (
    <main className='container mx-auto'>
      <article>
        <h1 className='break-all text-center'>{response.title}</h1>
        <div className='blog-content' dangerouslySetInnerHTML={{ __html: $.html() }} />
      </article>
    </main>
  );
}
