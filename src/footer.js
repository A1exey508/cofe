import React from "react";

const Footer = () => (
    <div class = "bottom">
    <div class = "bottom_t">
        <span>Адрес:
Г. Барнаул,
Ленина 40</span>
        <span>Режим работы:
Ежедневно 
7:00 - 21:00</span>
        <span>Контакты:
Телефон: +79964554692</span>
    </div>
    <div class="bottom_vktg">
        <a href="https://vk.com/id263468538">
        <img style = {{width: 70, height:65}} src={"/home/vk.svg"}/>   
        </a>     
        <img style = {{width: 50, height:65}} src={"/home/tg.svg"}/>
        <img style = {{width: 60, height:65}} src={"/home/poqta_quest_img.svg"}/>
    </div>   
  </div>
);

export default Footer;