import { Cover, Inline, PadBox, Stack } from '@bedrock-layout/primitives';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Card = ({
  type,
  count,
  length,
  className,
}: {
  type: string;
  count: string;
  length: string;
  className?: string;
}) => (
  <PadBox padding="2rem" className={`card ${className}`}>
    <Stack gutter="1rem">
      <h4>{type}</h4>
      <div>{count}</div>
      <div className="card__length">
        {length}
        <br />
        km
      </div>
    </Stack>
  </PadBox>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023</title>
        <meta
          name="title"
          content="PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023"
        />
        <meta
          name="description"
          content="Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://provodinska-strapanda.cz/" />
        <meta
          property="og:title"
          content="PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023"
        />
        <meta
          property="og:description"
          content="Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín"
        />
        <meta
          property="og:image"
          content="https://provodinska-strapanda.cz/social-cover-min.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://provodinska-strapanda.cz/"
        />
        <meta
          property="twitter:title"
          content="PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023"
        />
        <meta
          property="twitter:description"
          content="Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín"
        />
        <meta
          property="twitter:image"
          content="https://provodinska-strapanda.cz/social-cover-min.jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <Cover
        bottom={
          <PadBox padding={['2rem', '2rem']} className="footer">
            Pořádá <FontAwesomeIcon icon={faHeart} color="#ee6352" />{' '}
            KČT&nbsp;Česká&nbsp;Lípa, OÚ&nbsp;Provodín
          </PadBox>
        }
      >
        <PadBox padding={['4rem', '2rem']} as="main" className="main-content">
          <Stack gutter="4rem">
            <Stack gutter="2rem">
              <h1>
                PROVODÍNSKÁ ŠTRAPANDA <span className="highlight">2023</span>
              </h1>
              <h2>
                Sobota <strong>17. června 2023</strong>
                <br />
                <span className="subtitle">
                  Sportovní areál u&nbsp;nádraží Jestřebí
                </span>
              </h2>
            </Stack>
            <Stack gutter="1rem">
              <h3>Trasy</h3>
              <Inline
                gutter="2rem"
                stretch="all"
                switchAt="48rem"
                className="tracks-block"
              >
                <Card
                  type="Pěší"
                  count="3 trasy"
                  length="8 – 32"
                  className="card--hike"
                />
                <Card
                  type="Cyklo"
                  count="3 trasy"
                  length="20 – 60"
                  className="card--bike"
                />
              </Inline>
            </Stack>
            <PadBox
              as="a"
              padding={['0.5rem', '1rem']}
              className="contact"
              href="mailto:petr@provodinska-strapanda.cz"
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Napište nám
            </PadBox>
          </Stack>
        </PadBox>
      </Cover>
    </div>
  );
}
