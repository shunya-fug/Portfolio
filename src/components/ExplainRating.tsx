import SkillRating from '@/components/SkillRating';

export default function ExplainRating() {
  return (
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
  );
}
