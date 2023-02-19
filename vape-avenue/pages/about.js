import styles from '@/styles/Home.module.css';
import dynamic from 'next/dynamic';
import heroVid from '../public/about-hero.mp4';
const HeroSection = dynamic(() =>import( '@/components/HeroSection'),{ssr: false});
import brandImg from '../public/Va-about-900.png';
import Image from 'next/image';
const About = () => {
    return(
        <>
        <HeroSection video={heroVid}/>
        <section className={styles.aboutOuterSec}>
        <section className={styles.aboutSection}>
            <div className={styles.aboutImgDiv1}>
       <img className={styles.nextImg} src='/Va-about-900.png' alt='vape avenue branding'/>
       </div>
            <p className={styles.aboutParagraph}>
            Welcome to Vape Avenue, your one-stop shop for all your vaping needs! We are a local store that specializes in selling high-quality vaping products and providing exceptional customer service.
            </p>
            <p className={styles.aboutParagraph}>
At Vape Avenue, we believe that vaping is more than just a hobby or a habit; it's a lifestyle. 
That's why we offer a wide range of vaping products, including e-cigarettes, e-liquids, mods, tanks, and accessories, 
to help you create your perfect vaping experience.
            </p> 
            <p className={styles.aboutParagraph}>
 We source our products from reputable manufacturers and ensure that they meet our high standards of quality.
           </p>
           <p className={styles.aboutParagraph}>
But we don't just sell products – we also provide top-notch customer service. Our knowledgeable staff is always happy to answer your questions and help you find the products that suit your needs. We understand that vaping can be overwhelming, especially for new users, and we're here to make the process as easy and enjoyable as possible.
          </p>
           <p className={styles.aboutParagraph}>
In addition to our products and customer service, we also take pride in our commitment to promoting responsible vaping. We advocate for safe and responsible vaping practices and educate our customers on how to use vaping products safely and responsibly.
            </p>
            <p className={styles.aboutParagraph}>
At Vape Avenue, we are passionate about vaping and the vaping community, and we're committed to providing the best possible experience for our customers. Whether you're a seasoned vaper or just getting started, we're here to help you find the products that are right for you. Visit us today and discover why we're the go-to vaping store in town!
            </p>
            <section className={styles.brandSectionAbt}>
            <div className={styles.aboutImgDiv}>
          <img
          src='/ruthless-brand.png'
          
          />
          </div>
        
          <div className={styles.aboutImgDiv}>
          <img
          src='/twist-brand.png'
        
          />
          </div>
         
          <div className={styles.aboutImgDiv}>
          <img
          src='/milk-brand.png'
          
          />
          </div>
          </section>
          <section className={styles.brandSectionAbt}>
          <div className={styles.aboutImgDiv}>
          <img
          src='/frutia-brand.png'
          
          />
          </div>
          <div className={styles.aboutImgDiv}>
          <img
          src='/reds-brand.png'
          
          />
          </div>
          <div className={styles.aboutImgDiv}>
          <img
          src='/daze-brand.png'
          
          />
          </div>
         
         
       </section>
        </section>
        </section>
        </>
    );
};

export default About;