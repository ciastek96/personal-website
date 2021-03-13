import Image from "next/Image";
import { textChangeRangeIsUnchanged } from "typescript";
import styles from "./ProjectsWrapper.module.scss";

const ProjectsWrapper = () => {
  function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window;
    let { clientX: x, clientY: y } = e;
    const walk = 10;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const rotateX = Math.round((x / innerWidth) * walk - walk / 2);
    const rotateY = Math.round((y / innerHeight) * walk - walk / 2);

    e.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    console.log(`${rotateY}deg, ${rotateX}deg`);
    console.log(window);
  }

  function handleMouseOver(e) {
    e.target.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Image
          priority
          src={`/images/2lb.jpg`}
          height={600}
          width={800}
          quality="100"
          alt="2lb.pl website"
          className={styles.image}
          onMouseMove={handleMouseMove}
          onMouseOver={handleMouseOver}
        />
        <div className={styles.content}>
          <h2>2LB</h2>
          <p>Website created for 2LB company</p>
          <ul>
            <li>GatsbyJS</li>
            <li>Styled-Components</li>
            <li>SanityCMS</li>
            <li>GraphQL</li>
          </ul>
          <a href="https://2lb.pl" target="_blank" rel="noopener noreferrer">
            LIVE DEMO
          </a>
        </div>
      </div>

      <div className={styles.innerWrapper}>
        <Image
          priority
          src={`/images/rentapp.jpg`}
          height={600}
          width={800}
          quality="100"
          alt="Rentapp screenshot"
          className={styles.image}
          onMouseMove={handleMouseMove}
          onMouseOver={handleMouseOver}
        />
        <div className={styles.content}>
          <h2>RentApp</h2>
          <p>
            A SPA app created for an engineering thesis. Constantly in progress.
          </p>
          <ul>
            <li>React</li>
            <li>Styled-Components</li>
            <li>Redux</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
          </ul>
          <a
            disabled
            href="https://2lb.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWrapper;
