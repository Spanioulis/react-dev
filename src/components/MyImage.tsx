import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MyImageProps } from '../types/types';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ alt, height, src, width, placeholder }: MyImageProps) => (
    <LazyLoadImage alt={alt} height={height} src={src} width={width} effect="blur" placeholderSrc={placeholder} />
);

export default MyImage;
