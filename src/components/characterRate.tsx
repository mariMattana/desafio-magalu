import { RatingProps } from '@/types';
import * as S from '@/styles';

export const RatingComponent: React.FC<RatingProps> = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  const getStarImage = (starIndex: number) => {
    return starIndex <= rating
      ? '/assets/avaliacao_on.svg'
      : '/assets/avaliacao_off.svg';
  };

  return (
    <div>
      {stars.map((star, index) => (
        <S.StarImage
          key={index}
          src={getStarImage(star)}
          alt={`${star} star`}
        />
      ))}
    </div>
  );
};
