import styles from "./ControlButton.module.scss";

export default function ControlButton({ onClick, innerText }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {innerText}
    </button>
  );
}
