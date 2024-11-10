import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-container">

      <Image
        src="/footer.png"
        alt="Footer Background"
        fill
        className="footer-image"
      />

      <div className="footer-text-container">
        <p className="footer-text">
          <i className="bx bx-copyright"></i> 2024 Made With
          <i className="bx bx-heart mx-1"></i> by Ismat Fatima | All rights reserved.
        </p>
      </div>
    </footer>
  );
}