import styles from './styles/Sidebar.module.scss';
import BestGames from '../BestGames';
import { getSiteoptions } from '@/utils/hooks/ServerContext';
import Promo from "@/components/Promo";

const Sidebar = ({ ...rest }) => {

  const siteoptions = getSiteoptions();

  return (
    <aside {...rest} className={styles.sidebar}>
      <BestGames />

      <Promo
        className={`promo--side`}
        html={siteoptions.sweetcoreSettings.promo.side}
      />
    </aside>
  );
};

export default Sidebar;
