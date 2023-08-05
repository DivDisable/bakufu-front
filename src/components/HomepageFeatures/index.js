import React, { useState, useEffect} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Лазание - не только о пальцах',
    Svg: require('@site/static/img/gpp.svg').default,
    description: (
      <>
				Общая Физическая Подготовка - огромный набор упражнений.
				Но не все нужны боулдерингисту. Какие нужны? И как их делать?
      </>
    ),
  },
  {
    title: 'Реализуй ту силу, что у тебя есть',
    Svg: require('@site/static/img/technique.svg').default,
    description: (
      <>
				Не всё подвластно силе. Какие движения есть в спортивном лазании?
				Что такое техника и как её тренировать?
      </>
    ),
  },
  {
    title: 'Исскуство о хвате',
    Svg: require('@site/static/img/spp.svg').default,
    description: (
      <>
				Пальцы - Ваш контакт со стеной. Как его наладить и при этом
				не травмироваться?
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  const [isHide, setIsHide] = useState(true)
  const cond = isHide
    ? styles.featuresHide
    : styles.featuresHide + " " + styles.featuresAppear;

  useEffect(() => {
    setIsHide(false);
  }, []);

  return (
    <div className={clsx('col col--4', cond)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{position: "relative"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
