import Image from "next/image";

interface InternalImageProps {
    src: string;
    className?: string;
    width?: number;
    height?: number;
}

const IntImg = ({src, className, width, height}: InternalImageProps) => (
    <Image src={src} alt="" width={width ?? 0} height={width ?? 0} className={className} />
);

export default IntImg;
