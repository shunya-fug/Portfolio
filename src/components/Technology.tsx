import SkillRating from '@/components/SkillRating';
import { Tech } from '@/types/microcms/portfolio';
import Link from 'next/link';

export default function Technology({
  tech,
  showRating,
}: {
  tech: Tech;
  showRating?: boolean;
}) {
  const item = (
    <div className='break-inside-avoid-column'>
      <img src={tech.icon.url} alt={tech.name} className='mx-auto my-0 h-[100px] w-[100px] p-4' />
      <b>{tech.name}</b>
      <br />
      {showRating && <SkillRating id={tech.id} rate={tech.rating} />}
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
}
