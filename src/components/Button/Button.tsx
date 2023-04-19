import { ButtonLoadMore } from './Button.styled';
import { IButtonLoad } from '../../types/appTypes';

export const ButtonLoad:React.FC<IButtonLoad> = ({ onClick }) =>{
  return <ButtonLoadMore onClick={onClick}>Load More</ButtonLoadMore>;
}

