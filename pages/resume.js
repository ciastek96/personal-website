import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";
import Heading from "../components/Heading/Heading";
import List from "../components/List/List";
import SkillsWrapper from "../components/SkillsWrapper/SkillsWrapper";
import Carousel from "../components/Carousel/Carousel";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>About me</h1>
        <p>Hi! I'm Kamil 👋</p>
        <p>
          I'm a beginner frontend developer looking for first commercial
          experience. In my projects I put a strong emphasis on visual aspects.
        </p>
        <Carousel>
          <div>
            <Heading>Skills</Heading>
            <div>
              <div>
                <p>Development</p>
                <List>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>SCSS/SASS</li>
                  <li>Styled-Components</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                </List>
              </div>
              <div>
                <p>Additional</p>
                <List>
                  <li>Git</li>
                  <li>Photoshop</li>
                  <li>SketchUp</li>
                  <li>FL Studio</li>
                </List>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Strengths</p>
              <List>
                <li>Hard-working</li>
                <li>Conscientious</li>
                <li>Precise</li>
              </List>
            </div>
            <div>
              <div>
                <p>Languages</p>
                <List>
                  <li>Polish</li>
                  <li>English</li>
                </List>
              </div>
              <div>
                <p>Hobby</p>
                <List>
                  <li>Bboying</li>
                  <li>Beatmaking</li>
                </List>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </Layout>
  );
}
