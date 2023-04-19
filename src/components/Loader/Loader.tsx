import { Audio } from 'react-loader-spinner';
import { ILoader } from '../../types/appTypes';

export const Loader:React.FC<ILoader> = ({ visible })=> {
  return (
    <div>
      <Audio
        height="80"
        width="80"
        // radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        // wrapperStyle
        // wrapperClass
        visible={visible}
      />
    </div>
  );
}
