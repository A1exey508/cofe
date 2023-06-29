import React from 'react'
import './style_header.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'



export const HeaderPage = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <React.Fragment>
      <div className={'header'}>
        <div className={'header__menu'}>
          <div>
          <Link to={'/'}>E-Coffee</Link>
          </div>
          <div>
            <Link to={'/catalog'}>Каталог</Link>
          </div>
          <div>
            <Link to={'/about'}>О нас</Link>
          </div>
          <div>
            <Link to={'/help'}>Помощь</Link>
          </div>
          <div>
            <Link to={'/reviews'}>Отзывы</Link>
          </div>
      </div>
      </div>
  
      <div className={'header-mobile'}>
          <div className={'header-mobile__menu'}>
          <div class="tekst_logo">
          <Link to={'/'}>E-Coffee</Link>
          </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              <img src={'burger.svg'} />
            </div>
          </div>
          <div
            className={classNames('header-mobile__block', {
              'header-mobile__block-open': isOpen,
            })}
          >
            {isOpen && (
              <>
                <div>
                  <Link to={'/catalog'}>Каталог</Link>
                </div>
                <div>
                  <Link to={'/about'}>О нас</Link>
                </div>
                <div>
                  <Link to={'/help'}>Помощь</Link>
                </div>
                <div>
                  <Link to={'/reviews'}>Отзывы</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
  