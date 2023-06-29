import React from 'react'
import './style_catalog.scss'
import { Link } from 'react-router-dom'

const Catalog = () => {

  return (
    <div className = 'catalog_str'>


        <div class = "catalog">
        <span>Каталог</span>
        </div>

        <div class = "cofe">
        <span>Кофе</span>
        </div>

        <div class = "catalog_t1">
            <a className='del'>Двойной эспрессо</a>
            <span className='del'>Какао</span>
            <span>Американо</span>
            <span>Раф</span>
        </div>
        <div class = "catalog_img1">
            <img className='del' src = {"/catalog/cofe1.svg"}/>
            <img className='del' src = {"/catalog/cofe2.svg"}/>
            <img src = {"/catalog/cofe3.svg"}/>
            <img src = {"/catalog/cofe4.svg"}/>
        </div>
        <div className='button1'>
            <div className='del'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div className='del'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
        </div>


        <div class = "tea">
        <span>Чай</span>
        </div>
        

        <div class = "catalog_t2">
            <span className='del'>Зеленый чай</span>
            <span className='del'>Черный чай</span>
            <span>Фруктовый чай</span>
            <a>Молочный улун</a>
        </div>
        <div class = "catalog_img2">
            <img className='del' src = {"/catalog/tea1.svg"}/>
            <img className='del' src = {"/catalog/tea2.svg"}/>
            <img src = {"/catalog/tea3.svg"}/>
            <img src = {"/catalog/tea4.svg"}/>
        </div>
        <div className='button1'>
            <div className='del'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div className='del'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
        </div>



        <div class = "desserts">
        <span>Десерты</span>
        </div>

        <div class = "catalog_t3">
            <span className='del'>Донат</span>
            <span className='del'>Макаронсы</span>
            <span>Терамису</span>
            <a>Сэндвич</a>
        </div>
        <div class = "catalog_img3">
            <img className='del' src = {"/catalog/dessert1.svg"}/>
            <img className='del' src = {"/catalog/dessert2.svg"}/>
            <img src = {"/catalog/dessert3.svg"}/>
            <img src = {"/catalog/dessert4.svg"}/>
        </div>
        <div className='button1'>
            <div className='del'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div className='del'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
        </div>

    </div>
  )
}

export default Catalog