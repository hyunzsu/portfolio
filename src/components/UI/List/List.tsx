import styles from "./List.module.css";

interface ListProps {
  items: React.ReactNode[];
}

export default function List({ items }: ListProps) {
  return (
    <ul className={styles.ul}>
      {items.map((item, index) => (
        <li key={index} className={styles.li}>
          {item}
        </li>
      ))}
    </ul>
  );
}
