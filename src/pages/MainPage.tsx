import { useSelector } from "react-redux";
import CardBig from "../components/Cards/cardBig/CardBig";
import CardSmall from "../components/Cards/cardSmall/CardSmall";
import { Input } from "../components/UI/input/Input";
import { Loader } from "../components/UI/loader/Loader";
import s from './style/mainPage.module.css'
import Pagination from "../components/UI/pagination/Pagination";
const MainPage = () => {
  const store: any = useSelector(state => state)

  return (
    <>
      {(store.getPosts?.length == 0) ?
        <Loader prop={true} /> :
        <div className="">
          {
            store.getPosts[0].loader ?
              <Loader prop={true} /> :
              <div className={s.container}>
                <div className={s.title}>

                  <h1>Блог</h1>
                  <h2>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</h2>
                </div>
                <Input />
                <CardBig props={store.getPosts[0].pagination[0]} />
                <div className={s.postCatalog}>
                  {
                    store.getPosts[0].pagination.slice(1, 11).map((e: getPost, index: number) => <div className="div" key={index}>

                      <CardSmall props={e} />
                    </div>
                    )
                  }
                </div>
                <Pagination />
              </div>
          }
        </div>
      }

    </>
  )
}

export default MainPage