import styles from './styles.module.scss';

import Image from 'next/image';

export default function ImageMain() {
    return (
        <div id={styles.imageBackground}>
            <Image 
                className={styles.image}
                src="/image-header-desktop.jpg"
                width={483}
                height={400}
                alt="employees"
            />
        </div>
    );
}