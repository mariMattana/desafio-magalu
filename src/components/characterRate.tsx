import styled from 'styled-components';

interface RatingProps {
  rating: number; // Current rating, can be a float or integer
}

const StarImage = styled.img`
  width: 20px; /* Adjust size as needed */
  height: 20px;
  margin-right: 5px;
`;

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
        <StarImage key={index} src={getStarImage(star)} alt={`${star} star`} />
      ))}
    </div>
  );
};
