import { useSelector } from 'react-redux';
import { user } from 'redux/selectors';
import css from './Main.module.css';

const Main = () => {
  const users = useSelector(user);

  return (
    users && (
      <ul className={css.list}>
        {users.map(item => {
          return (
            <li key={item.id}>
              <div></div>
              <div>
                <p>{item.followers}</p>
                <p>{item.tweets}</p>
                <button>Follow</button>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Main;
