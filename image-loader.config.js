import { imageLoader } from 'next-image-loader/image-loader'

imageLoader.loader = ({ src }) => {
  return src;
}