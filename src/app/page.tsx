import SkillRating from '@/components/SkillRating';
import Technology from '@/components/Technology';
import { clientPortfolio } from '@/libs/client';
import { Portfolio } from '@/types/microcms/portfolio';
import Link from 'next/link';

export default async function Home() {
  const portfolio = await clientPortfolio.get<Portfolio>({
    endpoint: 'portfolio',
    customRequestInit: {
      cache: 'no-store',
    },
  });

  return (
    <main className='container mx-auto my-8 lg:w-4/5 xl:w-3/5'>
      <article>
        <h1 className='text-center'>Fuji's Portfolio.</h1>
        <section className='text-center'>
          <h2>Gallery</h2>
          <p>成果物一覧です。</p>
          <section className='mx-auto w-4/5 columns-1 gap-8 sm:columns-2'>
            {portfolio.gallery.map((gallery) => {
              const content = (
                <div className='card image-full break-inside-avoid-column shadow'>
                  <figure className='m-0'>
                    <img src={gallery.image.url} alt='Blog image' />
                  </figure>
                  <div className='card-body text-left'>
                    <h3 className='card-title mt-auto text-gray-200'>{gallery.title}</h3>
                    {gallery.description && (
                      <div>
                        <p className='m-0'>{gallery.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );

              return gallery.url ? (
                <Link href='/blog' className='no-underline'>
                  {content}
                </Link>
              ) : (
                content
              );
            })}
          </section>
        </section>
        <section className='text-center'>
          <h2>Skill</h2>
          <p>出来ること一覧です。</p>
          <div className='mx-auto w-fit space-y-2 text-left [&>div]:space-x-4 [&_p]:my-0 [&_p]:inline-block'>
            <div>
              <SkillRating id={`explain-${1}`} rate={1} />
              <p>少し齧った程度です。</p>
            </div>
            <div>
              <SkillRating id={`explain-${2}`} rate={2} />
              <p>最近はあまり使っていません。</p>
            </div>
            <div>
              <SkillRating id={`explain-${3}`} rate={3} />
              <p>趣味でたまに使っています。</p>
            </div>
            <div>
              <SkillRating id={`explain-${4}`} rate={4} />
              <p>趣味でよく使っています。</p>
            </div>
            <div>
              <SkillRating id={`explain-${5}`} rate={5} />
              <p>業務で使用しています。</p>
            </div>
          </div>
          {portfolio.skill.map((skill) => {
            return (
              <>
                <h3>{skill.category}</h3>
                <div className='grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5'>
                  {skill.tech.map((tech) => (
                    <Technology tech={tech} showRating />
                  ))}
                </div>
              </>
            );
          })}
        </section>
        <section className='text-center'>
          <h2>Profile</h2>
          <p className='mx-auto max-w-xs text-left'>{portfolio.profile}</p>
        </section>
        <section className='text-center'>
          <h2>Tech</h2>
          <p>使用技術一覧です。</p>
          <div className='grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5'>
            {portfolio.tech.map((tech) => (
              <Technology tech={tech} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
