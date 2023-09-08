import ActorItem from "../ActorItem/ActorItem";

import styles from './ActorsList.module.scss'

function ActorsList({ list }: any) {
console.log(list)
  return (   
      <ul className={styles['actors']}>
        {list.map((item: any) => (
          <li key={item.id}>
            <ActorItem item={item} />
          </li>
        ))}
      </ul>
  );
}

export default ActorsList;