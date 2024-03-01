import Image from "next/image";

interface InternalImageProps {
    src: string;
    className?: string;
}

const IntImg = ({src, className}: InternalImageProps) => <Image src={src} alt="" width={0} height={0} className={className} />;

export default IntImg;
