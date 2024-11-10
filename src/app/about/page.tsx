import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return (
      <>
        <div className="about-container" id="about">
          <div className="home-img">
            <Image
              src="/1.png"
              alt="about"
              width={600} 
              height={600}
            />
          </div>

          <div className="about-content">
            <h2 className="about-title">
              About Us!
              <span className="title-underline"></span>
            </h2>

            <p className="about-description">
              At Coffee House in Karachi, Pakistan. We pride Ourselves on being a go-to destination for coffee lovers and conversation seekers alike. We&apos;re dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
            </p>

            <div className="buttons">
              <Link href="#" className="order-now"> Order Now </Link>
            </div>
          </div>
        </div>
      </>
    )
}