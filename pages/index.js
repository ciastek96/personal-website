import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";
import Heading from "../components/Heading/Heading";
import List from "../components/List/List";
import SkillsWrapper from "../components/SkillsWrapper/SkillsWrapper";
import AboutMe from "../components/AboutMe/AboutMe";
import Carousel from "../components/Carousel/Carousel";

const data = {
  development: [
    "HTML5",
    "CSS3",
    "SCSS/SASS",
    "Styled-Components",
    "JavaScript",
    "React",
    "Redux",
  ],
  additional: ["Git", "Photoshop", "SketchUp", "FL Studio"],
  strengths: ["Hard-working", "Conscientious", "Precise"],
  languages: ["Polish", "English"],
  hobby: ["Bboying", "Beatmaking"],
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>About me</h1>
        <p>Hi! I'm Kamil 👋</p>
        <AboutMe />
        <Carousel>
          <div>
            <Heading>Skills</Heading>
            <div>
              <div>
                <p>Development</p>
                <List>
                  {data.development.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              </div>
              <div>
                <p>Additional</p>
                <List>
                  {data.additional.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Strengths</p>
              <List>
                {data.strengths.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </List>
            </div>
            <div>
              <div>
                <p>Languages</p>
                <List>
                  {data.languages.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              </div>
              <div>
                <p>Hobby</p>
                <List>
                  {data.hobby.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </Layout>
  );
}
