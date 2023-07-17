import SkillRating from '@/components/SkillRating';
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
                  {gallery.image && (
                    <figure className='m-0'>
                      <img src={gallery.image.url} alt='Blog image' />
                    </figure>
                  )}
                  <div className='card-body text-left'>
                    <h3 className='card-title mt-auto text-gray-200'>{gallery.title}</h3>
                    {gallery.description && (
                      <div>
                        <p className='m-0'>不定期で更新しています。</p>
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
                <div className='columns-3 gap-4 sm:columns-4 md:columns-5'>
                  {skill.tech.map((tech) => {
                    const item = (
                      <div className='break-inside-avoid-column'>
                        <img
                          src={tech.icon.url}
                          alt={tech.name}
                          className='mx-auto my-0 h-[100px] w-[100px] p-4'
                        />
                        <b>{tech.name}</b>
                        <br />
                        <SkillRating id={tech.id} rate={tech.rating} />
                        {/* <div className='rating rating-sm'>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <input
                              type='radio'
                              name={`rating-${tech.id}`}
                              id={`rating-${tech.id}-${i}`}
                              className='mask mask-star-2 bg-orange-300'
                              checked={i + 1 === tech.rating}
                              readOnly
                            />
                          ))}
                        </div> */}
                      </div>
                    );

                    return tech.url ? (
                      <Link
                        id={`skill-${tech.id}`}
                        href={tech.url}
                        key={tech.id}
                        className='no-underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item}
                      </Link>
                    ) : (
                      item
                    );
                  })}
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
          <div className='columns-3 gap-4 sm:columns-4 md:columns-5'>
            {portfolio.tech.map((tech) => {
              const item = (
                <div className='break-inside-avoid-column'>
                  <img
                    src={tech.icon.url}
                    alt={tech.name}
                    className='mx-auto my-0 h-[100px] w-[100px] p-4'
                  />
                  <b>{tech.name}</b>
                </div>
              );

              return tech.url ? (
                <Link
                  id={`tech-${tech.id}`}
                  href={tech.url}
                  key={tech.id}
                  className='no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item}
                </Link>
              ) : (
                item
              );
            })}
          </div>
        </section>
      </article>
    </main>
  );
}
