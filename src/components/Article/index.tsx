import styles from './styles.module.scss';

const Data = (props) => {
    return (
        <div className={styles.data}>
            <h1 className={styles.numberData}>{props.numberData}</h1>
            <span className={styles.titleData}>{props.titleData}</span>
        </div>
    );
}

export default function Article() {
    return (
        <div id={styles.container}>
            <section id={styles.articleSection}>
                <article id={styles.content}>
                    <h1 id={styles.articleTitle}>Get <span>insights</span> that help your business grow.</h1>
                    <p id={styles.articleText}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                </article>
            </section>
            <section>
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