import styles from '../styles/ContadorDisplay.module.css';

export default function ContadorDisplay(props) {

    return (
        <div className={styles.contadorDisplay}>
            {props.numero}
        </div>
    )

}