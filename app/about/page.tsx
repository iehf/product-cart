import Image from "next/image";
import styles from "./page.module.css";
import storeImage from "@/public/about/store.jpg";
import mapImage from "@/public/about/map.jpg";
import { team } from "@/lib/data/team";

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>About Us</h1>
          <p>
            We are a passionate team of sport enthusiasts dedicated to bringing
            you the best quality gear. From running shoes to gym equipment —
            everything you need to stay active and reach your goals.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={storeImage}
            alt="Our Store"
            fill
            className={styles.heroImage}
          />
        </div>
      </section>
      <section className={styles.section}>
        <h2>Our Team</h2>
        <div className={styles.team}>
          {team.map((member) => (
            <div key={member.name} className={styles.member}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={100}
                  height={100}
                  className={styles.avatar}
                />
              </div>
              <p className={styles.memberName}>{member.name}</p>
              <p className={styles.memberRole}>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2>Contact Us</h2>
        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <span className={styles.label}>Phone</span>
            <a href="tel:+10000000001">+1 (000) 000-0001</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Phone</span>
            <a href="tel:+10000000002">+1 (000) 000-0002</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Email</span>
            <a href="mailto:hello@sportstore.com">hello@sportstore.com</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Address</span>
            <span>123 Sport Ave, New York, NY 10001</span>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Find Us</h2>
        <div className={styles.mapWrapper}>
          <Image src={mapImage} alt="map" fill className={styles.map} />
        </div>
      </section>
    </div>
  );
}
