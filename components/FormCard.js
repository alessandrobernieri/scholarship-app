import styles from "../styles/styles.module.scss";

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={styles.formCard}>
      {currentStep < 4 && (
        <>
          {currentStep > 0 && (
            <button
              className={styles.back}
              onClick={prevFormStep}
              type="button"
            >
              ←
            </button>
          )}

          <span className={styles.steps}>Step {currentStep + 1} of 4</span>
        </>
      )}
      {children}
    </div>
  );
}
