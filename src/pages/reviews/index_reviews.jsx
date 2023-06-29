import React from 'react'
import './style_reviews.scss'
import { Link } from 'react-router-dom'

const Reviews = () => {

  return (
    <div className='reviews_str'>


        <div class = "reviews">
        <span>Отзывы</span>
        </div>

        <div class = "ostav_reviews">
        <span>Оставить отзыв</span>
        </div>

        <div class = "Name">
        <span>Имя</span>
        </div>

        <div class="Name_pole">
        <input class="Name__input" type="text" name="Имя" id="Имя"/>
        </div>

        <div class = "write_review">
        <span>Оставьте отзыв</span>
        </div>
        <div class="write_review_pole">
        <input class="write_review_pole__input" type="text" name="Отзыв" id="Отзыв"/>
        </div>

            <div className='niz_button'>
              <div>
                <Link to={'/catalog'}>Оставить заявку</Link>
              </div>
            </div>


        <div className = "zad_reviews_users"></div>
        <div class = "reviews_users">
        <span>Отзывы посетителей</span>
        </div>

        <div className = "zad_reviews_users_tekst"></div>
        <div class="vwrap"><div class="vmove">
  <div class="vslide">
    <h3>Егор Олегович от 30.05.2023</h3>
    <p>Немного критики с послевкусием оскорблений...</p>
  </div>
  <div class="vslide">
    <h3>Иван Юрьевич от 22.06.2023</h3>
    <p>Теперь этот кофе я покупаю литрами.</p>
  </div>
  <div class="vslide">
    <h3>Екатерина Знаменщикова от 01.03.2023</h3>
    <p>Этот кофе не сравнится с моим!</p>
  </div>
</div></div>

    </div>
  )
  }

  export default Reviews