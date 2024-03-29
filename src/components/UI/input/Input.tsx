import { ChangeEvent, useEffect, useState } from 'react'
import s from './Input.module.css'
import { SearchIcons } from '../../icons/search/SearchIcons'
import { URL } from '../../../store/getPosts/GetData'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Btn } from '../Button/Btn'
import { Loader } from '../loader/Loader'
import { useDebounce } from '../../hooks/useDebounce'

export const Input = () => {

  // hooks

  const [Write, setWrite] = useState<string>(``);
  const [dataPost, setDataPost] = useState<Array<getPost>>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  const debouncedSearchTerm = useDebounce(Write, 2500);

  //function

  const HandleWrite = (e: ChangeEvent<HTMLInputElement>) => {
    dataPost.length = 0;
    setWrite(e.target.value)
    setLoading(true)
  }


  const GetCatalogPosts = async (Write: string): Promise<void> => {
    try {

      const { data } = await axios.get(URL);
      data.forEach((element: getPost) => {
        if (element.title === Write) {
          dataPost.push(element)

        }

      });
      setLoading(false)
    } catch (error) {
      alert(`Возникла внутрення ошибка, попробуйте зайти на сайт позже `);
      console.log(`ошибка`);
    }
  };


  useEffect(() => {
    if (debouncedSearchTerm) {
      GetCatalogPosts(Write);
    }
  }, [debouncedSearchTerm]);



  return (
    <>
      <div className={s.container}>
        <input type="text" placeholder='Поиск по названию статьи' onChange={(e) => HandleWrite(e)} className={s.input} />
        <div className="" style={{ cursor: `pointer` }}>

          <SearchIcons />
        </div>
        {Write.length != 0 ?

          <div className={s.search_place}>
            <div className={s.content}>
              <h1>Результаты поиска:</h1>
              {
                Loading ?
                  <Loader prop={false} /> :

                  <div>
                    {dataPost.length == 0 ?
                      <p>Поиск не дал результатов :( </p> :
                      <div className={s.cards}>
                        <h1>Найдено: {dataPost.length}</h1>
                        {
                          dataPost.map((e, index) => (

                            <div className={s.card} key={index}>
                              <img src="https://placehold.co/560x270/lightblue/white?text=Not+Image" alt="logo" className="img" />
                              <h1> {e.title}</h1>
                              <NavLink to={`/posts/${e.id}`}>
                                <Btn />
                              </NavLink>
                            </div>
                          ))
                        }
                      </div>
                      }
                      </div>}
            </div>
          </div>
          : null
        }
      </div>

    </>
  )
}
