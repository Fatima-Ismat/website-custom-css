export default function Contact() {
     return (
       <>
         <div className="Contact" id="Contact">
           <h2>
             Contact <span>Me!</span>
           </h2>
   
           <form action="mailto:your-email@example.com" method="POST" encType="text/plain">
             <div className="input-box">
               <input type="text" placeholder="Full Name" required />
               <input type="email" placeholder="Email" required />
             </div>
   
             <div className="input-box">
               <input type="number" placeholder="Phone Number" required />
               <input type="text" placeholder="Email Subject" required />
             </div>
   
             <textarea cols={30} rows={5} placeholder="Your Message Here" required></textarea>
   
             <input type="submit" value="Send Message" />
           </form>
         </div>
       </>
     );
   }