import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps,] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		if (activeIndex > 0){
			setActiveIndex(activeIndex - 1)
		}
	}

	const handleNext = () => {
		if (activeIndex < steps.length){
			setActiveIndex(activeIndex + 1)
		}
	}

	const handleReset = () => {
  setActiveIndex(0)
}

const handleStepClick = (index) => {
  setActiveIndex(index)
}
	const isFirstStep = activeIndex === 0
	const isLastStep = activeIndex === steps.length - 1

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']} >
						<h2>{steps[activeIndex].title}</h2>
						<p>{steps[activeIndex].content}</p>
					</div>
					 <ul className={styles['steps-list']}>
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const isDone = index < activeIndex;

              return (
                <li
                  key={step.id}
                  className={`
                    ${styles['steps-item']}
                    ${isActive ? styles.active : ''}
                    ${isDone ? styles.done : ''}
                  `}
                >
                  <button
                    className={styles['steps-item-button']}
                    onClick={() => handleStepClick(index)}
                  >
                    {index + 1}
                  </button>
                  Шаг {index + 1}
                </li>
              );
            })}
          </ul>
				 <div className={styles['buttons-container']}>
            <button
              className={styles.button}
              onClick={handlePrev}
              disabled={isFirstStep}
            >
              Назад
            </button>
            {!isLastStep ? (
              <button className={styles.button} onClick={handleNext}>
                Далее
              </button>
            ) : (
              <button className={styles.button} onClick={handleReset}>
                Начать сначала
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
