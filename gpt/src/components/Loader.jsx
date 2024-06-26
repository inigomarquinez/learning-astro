import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-16 w-16 relative">
        <div
          className={styles.loader + " ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}
        />
      </div>
    </div>
  );
}
