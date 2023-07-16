import { client } from '@/libs/client';
import { Blog } from '@/types/microcms/blog';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
  return NextResponse.json(
    await client.getList<Blog>({
      endpoint: 'blogs',
      queries: {
        fields: ['id', 'publishedAt', 'title', 'subtitle', 'category'],
      },
      customRequestInit: {
        cache: 'no-store',
      },
    }),
  );
}
