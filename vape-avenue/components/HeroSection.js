import styles from '@/styles/Home.module.css';
import ReactPlayer from 'react-player';
import heroVideo from '../public/herovideo.mp4';
const HeroSection = () => {
    return(
        <section className={styles.heroSection}>
            <ReactPlayer
            url={heroVideo}
            playing={true}
            loop={true}
            volume={0}
            muted={true}
            width={'100%'}
            height={'100%'}
            />
        </section>
    )
};

export default HeroSection;