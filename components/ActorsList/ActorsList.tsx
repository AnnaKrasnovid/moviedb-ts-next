import Actor from "../Actor/Actor";

import styles from './ActorsList.module.scss'

function ActorsList({ list }: any) {

  return (   
      <ul className={styles['actors']}>
        {list.map((item: any) => (
          <li key={item.id}>
            <Actor item={item} />
          </li>
        ))}
      </ul>
  );
}

export default ActorsList;