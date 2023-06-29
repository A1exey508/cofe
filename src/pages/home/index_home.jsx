import React from 'react'
import './style_home.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className = "home_cont">
        <div class = "top_img">
            <img src = {"/home/cofe.svg"}/>
        </div>

        <div class = "zerna">
            <img src = {"/home/zerna.svg"}/>
            <span>Используем только лучшие сорта зерен</span>
            <img className = "clock_m" src = {"/home/clock.svg"}/>
            <span>Приготовим ваш напиток в течение 5 минут</span>
            <img className = "stakan_m" src = {"/home/stakan.svg"}/>
            <span>Можно взять с собой</span>
        </div>

        <div class = "avtor">
            <span>Авторские напитки для вас</span>
        </div>

<div className="mid_img">
    <div class="mid_img_flower_right">
        <img src = {"/home/mid_img.svg"}/>
    </div>
    <div class="mid_img_tekst_down_1">
    <span>Мы готовим для вас только свежайший и качественный кофе из лучших сортов зерен. Наша команда барист приготовит любой напиток по вашему желанию, от классического эспрессо до современных латте-артов. 
                  Кроме кофе, мы предлагаем вам широкий выбор чая, свежеиспеченных десертов и закусок. </span>
    </div>
</div>



        <div class = "popular">
            <span>Популярное</span>
        </div>

        <div class = "kofe_t">
            <span className='del1'>Капучино</span>
            <span className='del2'>Раф</span>
            <span>Американо</span>
            <span>Латте</span>
        </div>
        <div class = "kofe_img">
            <img className='del1' src = {"/home/kofe1_img.svg"}/>
            <img className='del2' src = {"/home/kofe2_img.svg"}/>
            <img src = {"/home/kofe3_img.svg"}/>
            <img src = {"/home/kofe4_img.svg"}/>
        </div>
        <div className='button'>
            <div className='del1'> 
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div className='del1'>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
            <div>
                <Link to={'/catalog'}>Заказать</Link>
            </div>
        </div>


        <div class = "mi">
            <span>Мы находимся</span>
        </div>

        <YMaps>
          <div className='map' >
          <Map  width='1317px' height='840px' defaultState={{ center: [53.342575, 83.783567], zoom: 17 }} />
          </div>
        </YMaps>


        <div class = "sotr">
            <span>Сотрудничество</span>
        </div>

        <div class = "quest">
            <span>Все вопросы и предложения пресылайте к нам на почту</span>
        </div>

        <div class = "poqta_quest">
        <img src = {"/home/poqta_quest_img.svg"}/>
            <span>ap3942390@gmail.com</span>
        </div>

    </div>
  )
}
export default Home