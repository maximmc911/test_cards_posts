import s from './pagination.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../store/getPosts/getPosts'


const Pagination = () => {

  //constants

  const store: any = useSelector(state => state)
  const dispach = useDispatch();

  // function
  const HandleCheck = (e:page): void => {
    dispach(actions.handleCheckPagination(e))
  }
  return (
    <>
      <div className={s.pagination}>
        {
          store.getPosts[0].pages.map((e : page, index : number) => (
            <p className={e.active ? s.numberActive : s.number} onClick={() => HandleCheck(e)} key={index}>{e.number}</p>
          ))
        }

      </div>
    </>
  )
}

export default Pagination


