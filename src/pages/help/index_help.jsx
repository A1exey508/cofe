import React from 'react'
import './style_help.scss'
import { Link } from 'react-router-dom'

const Help = () => {

  return (
    <div className='help_str'>

      
        <div class = "help">
        <span>Помощь</span>
        </div>

        <div class = "FIO_T">
        <span>ФИО</span>
        </div>
        <div class="FIO">
        <input class="FIO__input" type="text" name="ФИО" id="ФИО" placeholder="ФИО"/>
        </div>

        <div class = "phone_T">
        <span>Телефон</span>
        </div>
        <div class="phone">
        <input class="phone__input" type="text" name="Телефон" id="Телефон" placeholder="Телефон"/>
        </div>

        <div class = "problem_T">
        <span>Опишите проблему</span>
        </div>

        <div class="problem">
        <input class="problem__input" type="text" name="Описание" id="Описание"/>
        </div>

        <div class = "niz_problem">
        <span>Заполните контактную информацию, опишите проблему  и в течение 15 минут с вами свяжется наш представитель.</span>
        </div>
            <div className='niz_button'>
              <div>
                <Link to={'/catalog'}>Оставить заявку</Link>
              </div>
            </div>

    </div>
  )
}

export default Help