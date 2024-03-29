import {  useState } from 'react'
/* import { ArrowIcons } from '.components/icons/arrow/ArrowIcons' */
import s from './style/itemPage.module.css'
/* import { DislikeIcons } from './icons/dislike/DislikeIcons'
import { LikeIcons } from './icons/like/LikeIcons' */
import { Link } from 'react-router-dom'
import { ArrowIcons } from '../components/icons/arrow/ArrowIcons'
import { DislikeIcons } from '../components/icons/dislike/DislikeIcons'
import { LikeIcons } from '../components/icons/like/LikeIcons'
import { useSelector } from 'react-redux'
const ItemPage = () => {

  // constants
  const data : Array<getPost> = [];
  const store : any = useSelector(state => state);

  //hooks
  const [DisLike, setDisLike] = useState(false)
  const [Like, setLike] = useState(false)

  //function
  const HandleLike = () => {
    setDisLike(false)
    setLike(!Like)
  }
  const HandledisLike = () => {
    setLike(false)
    
    setDisLike(!DisLike)
  }

  // cycle
  for (const iterator of store.getPosts[0].pagination) {
    if (iterator.id == document.location.pathname.slice(7, 15)) {
      data.push(iterator)
    }

  }

  return (
    <>
      <div className={s.ItemContainer}>
        <Link to={'/'}>
          <div className={s.back} >
            <ArrowIcons />
            <a>Вернуться к статьям</a>
          </div>
        </Link>
        <div className={s.rat}>
          <div className={s.rat_like}>
            {
              Like ?
                <p >{data[0].like + 1}</p> :
                <p >{data[0].like}</p>

            }
            <div className="" style={{ marginTop: `-10px`, cursor: `pointer` }} onClick={() => HandleLike()}>

              <LikeIcons />
            </div>
          </div>
          <div className={s.rat_dislike}>
            {
              DisLike ?
                <p >{data[0].dislike + 1}</p> :
                <p >{data[0].dislike}</p>

            }
            <div className="" style={{ cursor: `pointer` }} onClick={() => HandledisLike()}>

              <DislikeIcons />
            </div>
          </div>
        </div>
      </div>
      <div className={s.content}>
        <h1>{data[0].title}</h1>
        <img src="https://placehold.co/560x270/lightblue/white?text=Not+Image" alt="logo" className={s.img} />
        <p>{data[0].body}
        </p>
      </div>
    </>
  )
}

export default ItemPage