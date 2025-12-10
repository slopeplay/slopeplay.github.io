// Components

// Styles
import styles from './styles/Promo.module.scss';
import ClassName from '@/utils/models/classname';

/**
 * Navigation for the application.
 * Includes mobile menu.
 */

type TPromoProps = {
  className?: string,
  html?: string
}

const Promo = ({ className, html }: TPromoProps) => {
  const promoClassName = new ClassName(styles.promo);

  if (className) {
    promoClassName.addIf(styles[className]);
  }

  return (
    <div
      className={promoClassName.toString()}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    />
  );
};

export default Promo;