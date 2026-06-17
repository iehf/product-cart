import Image from "next/image";
import classes from "./page.module.css";
import storeImage from "@/public/about/store.jpg";
import mapImage from "@/public/about/map.jpg";
import { team } from "@/lib/data/team";

export default function About() {
  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.heroText}>
          <h1>About Us</h1>
          <p>
            We are a passionate team of sport enthusiasts dedicated to bringing
            you the best quality gear. From running shoes to gym equipment —
            everything you need to stay active and reach your goals.
          </p>
        </div>
        <div className={classes.heroImageWrapper}>
          <Image
            src={storeImage}
            alt="Our Store"
            fill
            className={classes.heroImage}
          />
        </div>
      </section>
      <section className={classes.section}>
        <h2>Our Team</h2>
        <div className={classes.team}>
          {team.map((member) => (
            <div key={member.name} className={classes.member}>
              <div className={classes.avatarWrapper}>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={100}
                  height={100}
                  className={classes.avatar}
                />
              </div>
              <p className={classes.memberName}>{member.name}</p>
              <p className={classes.memberRole}>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={classes.section}>
        <h2>Contact Us</h2>
        <div className={classes.contacts}>
          <div className={classes.contactItem}>
            <span className={classes.label}>Phone</span>
            <a href="tel:+10000000001">+1 (000) 000-0001</a>
          </div>
          <div className={classes.contactItem}>
            <span className={classes.label}>Phone</span>
            <a href="tel:+10000000002">+1 (000) 000-0002</a>
          </div>
          <div className={classes.contactItem}>
            <span className={classes.label}>Email</span>
            <a href="mailto:hello@sportstore.com">hello@sportstore.com</a>
          </div>
          <div className={classes.contactItem}>
            <span className={classes.label}>Address</span>
            <span>123 Sport Ave, New York, NY 10001</span>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <h2>Find Us</h2>
        <div className={classes.mapWrapper}>
          <Image src={mapImage} alt="map" fill className={classes.map} />
        </div>
      </section>
    </div>
  );
}
