import Image from 'next/image';

const Error = () => {
  return (
    <div className=" w-80 h-80"> 
      <Image
        src="/404.gif"
        alt="Error"
        fill
        className="object-contain" // or object-cover
      />
    </div>
  );
};

export default Error;


