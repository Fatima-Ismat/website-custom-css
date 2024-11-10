import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
    return (
        <main>
            <section className="hero-section">
                <div className="section-content">
                    
                    <div className="hero-details">
                        <link
                          href="https://fonts.googleapis.com/css2?family=Miniver&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
                          rel="stylesheet"
                        />

                        <h2 className="title">Best Coffee</h2>

                        <h3 className="subtitle">Make your day great with our special coffee!</h3>
                        <p className="description">
                            Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
                        </p>

                        <div className="buttons">
                            <Link href="#" className="order-now">
                              Order Now
                            </Link>

                            <Link href="#" className="contact-us">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hero-image-wrapper">
                        <Image src="/hero.png" alt="Hero Image" className="hero-image" width={500} height={500} />
                    </div>
                </div>
            </section>
        </main>
    );
}