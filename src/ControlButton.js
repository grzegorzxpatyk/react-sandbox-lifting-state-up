import styles from "./ControllButton.module.scss";

export default function ControlButton({ onClick, innerText }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {innerText}
    </button>
  );
}
