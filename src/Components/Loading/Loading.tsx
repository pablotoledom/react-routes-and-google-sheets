import { LoadingContent } from './Loading.styles';
import './Loading.css';

function Loading() {
  return (
    <LoadingContent>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </LoadingContent>
  );
}

export default Loading;
