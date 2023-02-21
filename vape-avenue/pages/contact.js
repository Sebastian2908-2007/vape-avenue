import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const HeroSection = dynamic(() =>import( '@/components/HeroSection'),{ssr: false});
import heroVid from '../public/contact-hero3.mp4';
import { validateEmail } from '@/utils/helpers';
import styles from '@/styles/Home.module.css';
const Contact = () => {
        // this is  our hook for keeping track of our email error message
        const [errorMessage, setErrorMessage] = useState('');
        // this hook will manage the form data "set initial data to empty strings"
        const [formState, setFormState] = useState({name: '', email: '', message: ''});
        // destructure formState
        const {name, email,message} = formState;
        // This function will sync the internal state of the component formState with the user input from the DOM. 
        function handleChange(e) {
            // use helper function to help check against our email value and make sure its valid
            if(e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                //console.log(isValid);
                // isValid conditional statement for the email validation
                if(!isValid) {
                    setErrorMessage('your email is not valid !')
                }else {
                    setErrorMessage('');
                }
            }else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                }else {
                    setErrorMessage('');
                }
            }
            // only update state if all data is valid form data
            if(!errorMessage) { 
            setFormState({...formState, [e.target.name]: e.target.value})
            }
           
            
        };
        // below will log form data updating in real time.
        //console.log(formState);
        function handleSubmit(e) {
               e.preventDefault();
               console.log(formState);
        };
    return(
        <>
         <HeroSection video={heroVid}/>
        <section className={styles.contactSection}>
            <h1 className={styles.contactSecH1} data-testid='contact-title'>Contact Us</h1>
            <form className={styles.contactForm} id="contact-form" onSubmit={handleSubmit}>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel} htmlFor="name">Name:</label>
                    <input className={styles.contactInput} type='text' name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel} htmlFor="email">Email:</label>
                    <input className={styles.contactInput} type='email' name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel} htmlFor="message">Message:</label>
                    <textarea className={styles.contactTextarea} name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage &&(
                    <div>
                        <p className={styles.errMsgP}>{errorMessage}</p>
                    </div>
                )}
                <button className={styles.formBtn} data-testid='contact-submit' type="submit">Submit</button>
            </form>
            <section className={styles.modBrndSec}>
              <div className={styles.imgBrandDiv}>
              <Image
              src='/geekvape-brand.png'
              alt='mod brand'
              height={50}
              width={100}
              />  
              </div>  
              <div className={styles.imgBrandDiv}>
              <Image
              src='/vaporesso-brand.png'
              alt='mod brand'
              height={50}
              width={100}
              />  
              </div>  
              <div className={styles.imgBrandDiv}>
              <Image
              src='/voopoo-brand.png'
              alt='mod brand'
              height={50}
              width={100}
              />  
              </div>  
            </section>
        </section>
        </>
    );
};

export default Contact;