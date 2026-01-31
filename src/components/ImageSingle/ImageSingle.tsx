import Image from "next/image";
import styles from "./image-single.module.css";

interface ImageSingleProps {
  image: {
    url: string;
    altText: string;
    descText: string;
    width: number[];
    backgroundColor?: string;
  };
}

function ImageSingle({ image }: ImageSingleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} style={{ backgroundColor: image.backgroundColor }}>
        <Image
          src={image.url}
          alt={image.altText}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={image.width[1]}
          height={image.width[1] * 0.7}
        />
        <p className={styles.imageDesc}>{image.descText}</p>
      </div>
    </div>
  );
}

export default ImageSingle;
