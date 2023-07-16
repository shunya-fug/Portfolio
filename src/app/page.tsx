import Link from 'next/link';

export default async function Home() {
  return (
    <main className='container mx-auto lg:w-4/5 xl:w-3/5'>
      <article>
        <h1 className='mt-8 text-center'>Fuji's Portfolio.</h1>
        <section className='text-center'>
          <h2>Gallery</h2>
          <p>成果物一覧です。</p>
          <section className='mx-auto w-4/5 columns-1 gap-8 sm:columns-2'>
            <Link href='/blog' className='no-underline'>
              <div className='card image-full break-inside-avoid-column shadow'>
                <figure className='m-0'>
                  <img src='https://source.unsplash.com/jLwVAUtLOAQ' alt='Blog image' />
                </figure>
                <div className='card-body text-left'>
                  <h3 className='card-title mt-auto text-gray-200'>Blog</h3>
                  <div>
                    <p className='m-0'>不定期で更新しています。</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className='card image-full break-inside-avoid-column shadow'>
              <figure className='m-0'>
                <img src='https://source.unsplash.com/tE3D-Slk5EM' alt='Blog image' />
              </figure>
              <div className='card-body text-left'>
                <h3 className='card-title mt-auto text-gray-200'>作成中...</h3>
              </div>
            </div>
          </section>
        </section>
        <section className='text-center'>
          <h2>Skill</h2>
          <p>出来ること一覧です。</p>
        </section>
        <section className='text-center'>
          <h2>Profile</h2>
        </section>
        <section className='text-center'>
          <h2>Tech</h2>
          <p>使用技術一覧です。</p>
        </section>
      </article>
    </main>
  );
}
