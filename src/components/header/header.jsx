import styles from "./header.module.css";
import reactLogo from "../../assets/react.svg";
export const Header = () => {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <img src={reactLogo} alt="logo" width={50} height={50} />
                    <div>
                        <h1>Get It Done</h1>
                        <div className="color-gray">
                            <code>Simplifiez vos tâches, maîtrisez votre journée</code>
                        </div>
                    </div>
                </div>
                <code className="color-primary">
                    v.1.0
                </code>
            </div>
        </main>
    );
};