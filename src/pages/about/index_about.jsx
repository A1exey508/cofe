import React from 'react'
import './style_about.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const About = () => {

  return (
    <div className='about_s'>


            <div class = "about">
            <span>O нас</span>
            </div>

          <div className='images'>
            <img src = {"/about/tolpa.svg"}/>
            <img src = {"/about/galoqka.svg"}/>
            <img src = {"/about/cofe.svg"}/>
            <img src = {"/about/clock.svg"}/>
            <img src = {"/about/zerna.svg"}/>
            </div>
          <div className='tekst_i'>
            <a>Опытная команда</a>
            <span>Более 5 лет на рынке</span>
            <span>Можно взять с собой</span>
            <span>Быстрое обслуживание</span>
            <span>Напитки из качественных ингредиентов</span>
            </div>



            <div class = "mi_a">
            <span>Мы находимся</span>
            </div>
            
            <YMaps>
            <div className='map_a' >
                <Map  width='1317px' height='840px' defaultState={{ center: [53.342575, 83.783567], zoom: 17 }} />
            </div>
            </YMaps>

    </div>
  )
}

export default About