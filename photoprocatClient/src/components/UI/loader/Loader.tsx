import './loader.scss';

const Loader = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`lds-ring ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
