import styles from './BackgroundVideo.module.css'

interface Props {
  src: string
}
export const BackgroundVideo = ({ src }: Props) => {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.video}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
