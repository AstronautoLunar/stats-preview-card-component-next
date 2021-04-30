import styles from './styles.module.scss';

export default function Main(props) {
    return (
        <main id={styles.container}>
            {props.children}
        </main>
    );
}