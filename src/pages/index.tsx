import styles from '../style/index.module.scss';

import { Main, ImageMain, Article } from '../components';

export default function Home() {
  return (
    <div id={styles.main}>
      <Main>
        <Article/>
        <ImageMain/>
      </Main>
    </div>
  )
}
