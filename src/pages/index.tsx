import styles from '../style/index.module.scss';

import { Main, ImageMain } from '../components';

export default function Home() {
  return (
    <div id={styles.main}>
      <Main>
        <ImageMain/>
      </Main>
    </div>
  )
}
