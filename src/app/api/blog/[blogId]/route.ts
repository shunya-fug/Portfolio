import { client } from '@/libs/client';
import type { Blog } from '@/types/microcms/blog';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest, { params }: { params: { blogId: string } }) {
  if (!params.blogId) {
    return NextResponse.json({ error: 'blogId is required' }, { status: 400 });
  }
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

  response.content = $.html();
  return NextResponse.json(response);
}
