// Components

// Styles
import styles from './styles/Promo.module.scss';
import { ReactNode } from "react";
import ClassName from '@/utils/models/classname';

/**
 * Navigation for the application.
 * Includes mobile menu.
 */

type TPromoProps = {
  children?: ReactNode,
  className?: string,
  html?: string
}

const Promo = ({ children, className, html }: TPromoProps) => {
  const promoClassName = new ClassName(styles.promo);

  if (className) {
    promoClassName.addIf(styles[className]);
  }

  return (
    <div
      className={promoClassName.toString()}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    >
      {!html && children}
    </div>
  );
};

export default Promo;