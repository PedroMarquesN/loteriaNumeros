import { useState, useEffect } from "react";
import ContadorDisplay from "./ContadorDisplay";
import styles from "../styles/Lotery.module.css";
import LoteryFunction from "./LoteryFunction";

export default function Lotery() {
    const [numeros, setNumero] = useState([]);

    useEffect(() => {
        setNumero(LoteryFunction());
    }, []); // Executar apenas uma vez no montagem do componente

    function renderNumeros() {
        return numeros.map((numero, index) => (
            <ContadorDisplay key={index} numero={numero} />
        ));
    }

    return (
        <div className={styles.estilo}>
            <h1 className={styles.estiloh1}>Mega Sena</h1>
            <div className={styles.divestilo}>{renderNumeros()}</div>
            <div>
                <button
                    className={styles.buttonAposta}
                    onClick={() => setNumero(LoteryFunction())}
                >
                    Gerar Aposta
                </button>
            </div>
        </div>
    );
}
