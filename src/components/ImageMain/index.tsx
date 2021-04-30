import styles from './styles.module.scss';

export default function ImageMain() {
    return (
        <div id={styles.imageBackground}>
            <img 
                className={styles.image}
                src="/image-header-desktop.jpg"
                alt="employees"
            />
        </div>
    );
}

// mediaQuerieList.matches ? 320 : 483
// mediaQuerieList.matches ? 265 : 400