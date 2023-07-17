export default function SkillRating({
  id,
  rate,
  ...rest
}: {
  id: string;
  rate: number;
  rest?: JSX.IntrinsicElements['input'];
}) {
  return (
    <div className='rating rating-sm'>
      {Array.from({ length: 5 }).map((_, i) => (
        <input
          type='radio'
          name={`rating-${id}`}
          id={`rating-${id}-${i}`}
          className='mask mask-star-2 bg-orange-300'
          checked={i + 1 === rate}
          readOnly
          {...rest}
        />
      ))}
    </div>
  );
}
