import React from 'react';
import style from "../StyleSheet/Home/home.module.css"
// import Errormessage from '../Error/Errormessage';

const Home = ({id,name,image}) => {
  // const [error, setError] = useState();
  return (
  <>
      {/* {error && <Errormessage>Please check internet connection </Errormessage>} */}
    <div className={style["home"]}>
        <div className={style['container_thumb']}>
        <div className={style['imager']}>
        <span style={{margin:10,fontSize:25}}>{id}{`)`}</span>
          <h3>{name}</h3>
          <div className={style['poke_img']}>
              <img src={image} alt={name}  />
          </div>
          </div>
          </div>
      </div>
      </>
  );
};

export default Home;
