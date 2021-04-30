import styles from './styles.module.scss';

type DataType = {
    numberData: string,
    titleData: string,
}

const Data = ({numberData, titleData}: DataType) => {
    return (
        <div className={styles.data}>
            <h1 className={styles.numberData}>{numberData}</h1>
            <span className={styles.titleData}>{titleData}</span>
        </div>
    );
}

export default function Article() {
    return (
        <div id={styles.container}>
            <section id={styles.descriptionSection}>
                <article id={styles.content}>
                    <h1 id={styles.articleTitle}>Get <span>insights</span> that help your business grow.</h1>
                    <p id={styles.articleText}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                </article>
            </section>
            <section id={styles.dataSection}>
                    <article id={styles.listData}>
                        <Data
                            numberData="10k+"
                            titleData="COMPANIES"
                        />
                        <Data
                            numberData="314"
                            titleData="TEMPLATES"
                        />
                        <Data
                            numberData="12M+"
                            titleData="QUERIES"
                        />
                    </article>
            </section>
        </div>
    );
}