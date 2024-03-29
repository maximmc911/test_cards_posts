import { useEffect, useState } from 'react'
import { Btn } from '../../UI/Button/Btn'
import './style.css'
import { LikeIcons } from '../../icons/like/LikeIcons'
import { DislikeIcons } from '../../icons/dislike/DislikeIcons'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CardSmall = (props: Props) => {

  //hooks 
  const [DisLike, setDisLike] = useState(false)
  const [Like, setLike] = useState(false)
  const store: any = useSelector(state => state);
  useEffect(() => {
    setLike(false);
    setDisLike(false);

  }, [store.getPosts[0].pagination])

    //function
  const HandleLike = () => {
    setDisLike(false)
    setLike(!Like)
  }
  const HandledisLike = () => {
    setLike(false)
    setDisLike(!DisLike)
  }

  return (
    <>
      <div className="card">
        <img src="https://placehold.co/560x270/lightblue/white?text=Not+Image" alt="logo" className="img" />
        <div className="content">
          <h1 className="title">{props.props?.title}</h1>
          <div className="footer">
            <div className="rating">
              <div className="rating_like">
                {
                  Like ?
                    <p>{props.props?.like + 1}</p> :
                    <p>{props.props?.like}</p>
                }
                <div className="" style={{ marginTop: `-10px`, cursor: `pointer` }} onClick={() => HandleLike()}>

                  <LikeIcons />
                </div>
              </div>
              <div className="rating_dislike">
                {
                  DisLike ?
                    <p >{props.props?.dislike + 1}</p> :
                    <p >{props.props?.dislike}</p>

                }
                <div className="" style={{ cursor: `pointer` }} onClick={() => HandledisLike()}>

                  <DislikeIcons />
                </div>
              </div>
            </div>
            <NavLink to={`/posts/${props.props?.id}`}>
              <Btn />
            </NavLink>


          </div>
        </div>
      </div>

    </>
  )
}

export default CardSmall