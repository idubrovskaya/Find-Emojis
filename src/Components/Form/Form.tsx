import styles from './Form.module.css';

interface IProps {
  emojiTitle: string;
  emojiSearch: (text: string) => void;
}

export const Form = ({ emojiTitle, emojiSearch }: IProps) => {
  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        value={emojiTitle}
        onChange={(event) => emojiSearch(event.target.value)}
      />
    </div>
  );
};
