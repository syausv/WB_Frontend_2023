import './style.css'



document.querySelector('#app').innerHTML = `
  <div>
  <div class="container">
  <nav>
  <div class="menu">
  
  <div class="menu_icon">
  <object class="menu_action_icon"  type="image/svg+xml" data="src/icons/bar.svg" id="svg4442"></object>
</div>
  <div class="logo_icon">
  Товары и точка
</div>
  <div class="menu_search">
  <object class="action_icon"  type="image/svg+xml" data="src/icons/search.svg" id="svg4442"></object>
</div>

  
</div>
  <div class="scruglenie"></div>
</nav>
  <div class="content">
  <div class="h_korzina">Корзина</div>
  <div class="vnalichii">
      <div class="vyborVse"><div class="vyborVseInput">
      <input class="checked_vybor_vse" id="vyborCheck" type="checkbox" />
    <label for="vyborCheck">Выбрать все</label>
</div>
<div>icon</div>
</div>
  <div class="tovary" >
  <div class="tovar" id="tovar1">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii"> 
  <input class="checkedColor" type="checkbox" checked/>
   <img class="img_vnalichii_image" src="src/img/Frame38531.png"/> 
   
   </div>
  <div class="sumFromSumAndCount">
                  <div class="cena_sumFromSumAndCount">522</div>
                  <div class="val_sumFromSumAndCount">сом</div> 
              <div class="old_sumFromSumAndCount"><s>1051 сом</s></div>
            </div>
  <div class="description_tovar">
   <div  class="description_tovar_title"> Футболка UZcotton мужская</div>
              <div  class="description_tovar_spec">
                <div id="idThingColor">Цвет: белый</div>
                <div id="idThingSize">Размер: 56</div>
              </div>
<div class="description_tovar_spec_punkt">Коледино WB</div>
    </div>
  <div class="kolvo_tovar">
  <div class="col-md-3">
                            <div class="button-card-wrapper">
                                <input type="button" value="-" class="subtract ">
                                <input type="number" step="1" min="0" max="120" value="1" class="js-number"
                                    autocomplete="off" placeholder="" inputmode="numeric">
                                <input type="button" value="+" class="add">
                            </div>
                        </div>
    <div class="tovar_ostatki">Осталось 2 шт. </div>
    <div class="icons"> 
                <div class="action_icon_container"><object class="action_icon"  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon_container">  <object class="action_icon" type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
 <div class="tovar" id="tovar2">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii"> 
   <input class="checkedColor" type="checkbox" checked/>
   <img class="img_vnalichii_image" src="src/img/Frame38531.png"/>
   
    </div>
  <div class="sumFromSumAndCount">
                  <div id="id_cena_sumFromSumAndCount1" class="cena_sumFromSumAndCount">2 100 047</div>
                  <div class="val_sumFromSumAndCount">сом</div> 
              <div class="old_sumFromSumAndCount"><s>2 300 047 сом</s></div>
            </div>
  <div class="description_tovar">
   <div  class="description_tovar_title"> Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe</div>
              <div  class="description_tovar_spec">
                <div id="idThingColor">Цвет: прозрачный</div>
            
              </div>
<div class="description_tovar_spec_punkt">
   <div>Коледино WB</div>
   <div>OOO Мегапрофстиль</div>
   </div>
    </div>
  <div class="kolvo_tovar">
  <div class="col-md-3">
                            <div class="button-card-wrapper">
                                <input type="button" value="-" class="subtract ">
                                <input type="number" step="1" min="0" max="120" value="1" class="js-number"
                                    autocomplete="off" placeholder="" inputmode="numeric">
                                <input type="button" value="+" class="add">
                            </div>
                        </div>
    <div style="display: none">Осталось 2 шт. </div>
    <div class="icons"> 
                <div class="action_icon_container"><object class="action_icon" type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon_container">  <object class="action_icon" type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
<div class="tovar" id="tovar3">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii">
  <input class="checkedColor" type="checkbox" checked/>
    <img class="img_vnalichii_image" src="src/img/Frame38531.png"/>  
  
  </div>
  <div class="sumFromSumAndCount">
                  <div class="cena_sumFromSumAndCount">494</div>
                  <div class="val_sumFromSumAndCount">сом</div> 
              <div class="old_sumFromSumAndCount"><s>950 сом</s></div>
            </div>
  <div class="description_tovar">
   <div class="description_tovar_title"> Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell </div>
              <div class="description_tovar_spec">
                <div id="idThingColor">Цвет: белый</div>
                <div id="idThingSize">Размер: 56</div>
              </div>
<div class="description_tovar_spec_punkt">Коледино WB</div>
    </div>
  <div class="kolvo_tovar">
  <div class="col-md-3">
                            <div class="button-card-wrapper">
                                <input type="button" value="-" class="subtract ">
                                <input type="number" step="1" min="0" max="120" value="1" class="js-number"
                                    autocomplete="off" placeholder="" inputmode="numeric">
                                <input type="button" value="+" class="add">
                            </div>
                        </div>
    <div class="tovar_ostatki" >Осталось 2 шт. </div>
    <div class="icons"> 
                <div class="action_icon_container"><object class="action_icon" type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon_container">  <object class="action_icon" type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
</div>
  
</div>
  <div class="otsutsv">
   <div class="otsutsv_text">
   Отсутствуют · 3 товара 
<div>icon</div>
</div>
  <div class="otsutsv_tovary">
    <div class="otsutsv_tovar">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_otsutsv">  <img class="img_vnalichii_image" src="src/img/Frame38531.png"/> </div>
  <div class="description_tovar">
   <div class="description_tovar_title"> Футболка UZcotton мужская</div>
   <div class="description_tovar_spec">Цвет: белый</div>
    </div>
  <div class="otsutsv_kolvo_tovar">
    <div class="icons"> 
      <div class="action_icon_container"><object class="action_icon"  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon_container">  <object class="action_icon" type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
       <div class="otsutsv_tovar">
  <div style="display: none" class="hr"> 
  <hr>
  </div>
  <div class="img_otsutsv">  <img class="img_vnalichii_image" src="src/img/Frame38531.png"/> </div>

  <div class="description_tovar">
   <div  class="description_tovar_title"> Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe</div>
   <div class="description_tovar_spec" >Цвет: прозрачный</div>
    </div>
  <div class="otsutsv_kolvo_tovar">
    <div class="icons"> 
      <div class="action_icon_container"><object class="action_icon" type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon_container">  <object class="action_icon" type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
          <div class="otsutsv_tovar">
  <div style="display: none" class="hr"> 
  <hr>
  </div>
  <div class="img_otsutsv">  <img class="img_vnalichii_image" src="src/img/Frame38531.png"/> </div>

  <div class="description_tovar">
   <div class="description_tovar_title"> Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell </div>
     </div>
  <div class="otsutsv_kolvo_tovar">
    <div class="icons"> 
      <div class="action_icon_container"><object class="action_icon" type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon_container">  <object class="action_icon" type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
</div>
</div>
  <div class="sposob_dostavki">

      
     <div class="sposob_dostavki_title"> 
                     <div class="zagalovki">Способ доставки</div> <div id="containerForIzmenit"><div class="izmenit">Изменить</div></div>
                     </div>
                     
   <div class="sposob_dostavki_delivery">  
                   
  
 <div id="punktV" class="line_height_dostavka">Пункт выдачи</div>
  
 <div id="idAdressDeliveryOfPost">
          <div class="line_height_dostavka">Бишкек, улица Ахматбека Суюмбаева, 12/1 </div>
          <div id="idInfoRaitingPost"> 
<div class="rating"> <object type="image/svg+xml" data="src/icons/star.svg" id="svg11"></object>  <div>4.99 </div></div>
<div>Ежедневно с 10 до 21 </div>
</div>
</div>
 <div id="stoimost" class="line_height_dostavka"> Стоимость доставки </div>
  
 <div id="besplatno" class="line_height_dostavka"> Бесплатно </div>
  
<div id="date1"> 5—6 февраля </div>
  
<div id="idSmallTovary"> 
<div id="idContainerSmallTovary6" class="containerSmallTovary6">
               <div id="picSmall1" style="width: 40px ;height: 56px ; border-radius: 8px">
                <img style="width: 40px ;height: 56px ; border-radius: 8px" src="/src/img/Frame38531.png" alt=""/>
                </div>
               <div id="picSmall2" style="width: 40px ;height: 56px ; border-radius: 8px">
                <img style="width: 40px ;height: 56px ; border-radius: 8px" src="/src/img/Frame277132129.png" alt=""/>
                </div>
               <div id="picSmall3" style="width: 40px ;height: 56px ; border-radius: 8px"> 
               <img style="width: 40px ;height: 56px ; border-radius: 8px" src="/src/img/Frame2771321291.png" alt=""/>
               </div>
             </div>
            </div>
 
<div id="date2"> 7—8 февраля</div>
  
  <div id="idContainerSmallTovary8"> <div style="width: 40px ;height: 56px ; border-radius: 8px"> 
                  <img style="width: 40px ;height: 56px ;border-radius: 8px" src="/src/img/Frame277132129.png" alt=""/>
            </div>
            </div>
     </div>
               
      <div class="strokaInfoOtkaz" >
       
       <div id="idSber2"><object class="idSber2" type="image/svg+xml" data="src/icons/priceshipping.svg" id="svg"></object> </div>
       <div id="idObratDostav2" class="class13px" style="display: inline-block">Обратная доставка товаров на склад при отказе — <div id="idBesplat"> бесплатно</div></div>
    
       </div>    
       </div>

  <div class="sposob_oplaty">
    <div class="sposob_oplaty_title"> 
                     <div class="zagalovki">Способ оплаты</div> <div class="containerForIzmenit"><div class="izmenit">Изменить</div></div>
                     </div>
                     
                     
         <div class="cartMir">
         <div class="cartMir_icon"> 
           <object type="image/svg+xml" data="src/icons/platSber.svg" id="svg33"> </object> 
         </div>
    <div class="cartMir_numbers">  <div>1234 56•• •••• 1234</div> <div>01/30</div> </div>
         </div>  
       <div class="cartMir_text">Спишем оплату с карты при получении </div>

</div>
  <div class="poluchatel">
   <div class="zagalovki">Получатель</div> 
     <div id="idAnketa" class="classAnketa">
      
        <div id="name_input" class="text-field text-field_floating-3">
      <input class="text-field__input" type="name" id="name" name="name" placeholder="Имя">
      <label class="text-field__label" for="name">Имя</label>
    </div>
    
         <div id="surname_input" class="text-field text-field_floating-3">
      <input class="text-field__input" type="surname" id="surname" name="surname" placeholder="Фамилия">
      <label class="text-field__label" for="surname">Фамилия</label>
        </div>
       
        
         <div id="email_input" class="text-field text-field_floating-3">
      <input class="text-field__input" type="email" id="email" name="email" placeholder="Почта">
      <label class="text-field__label" for="email">Электронная почта</label>
        </div>
        
         <div id="phone_input"  class="text-field text-field_floating-3">
      <input class="text-field__input" type="phone" id="phone" name="phone" value="+7 988 123-45-67" placeholder="Телефон">
      <label class="text-field__label" for="phone">Телефон</label>
        </div>
        
         <div id="innNumb_input" class="text-field text-field_floating-3">
      <input class="text-field__input" type="number" id="innNumb" name="innNumb" placeholder="ИНН">
      <label class="text-field__label" for="surname">ИНН</label>
             <div style="display: inline-flex; font-size: 12px ">Для таможенного оформления </div>
        </div>
        
        </div>
</div>
  <div class="itog">
   
      
      <div class="itog_cena">
          
<div id="itog_cena_zagalovki" class="zagalovki">
       <div>Итого</div> 
           <div>2 101 063 сом</div> </div>
              <div class="itog_rasschet"> 
             <div class="itog_rasschet_sum">
              <div>203 товара</div>   
              <div>2 302 048 сом</div> 
             </div>
            <div class="itog_rasschet_sum">
              <div >Скидка</div> 
              <div>−200985 сом</div>
              </div>
            <div class="itog_rasschet_sum">
              <div>Доставка</div> 
              <div>Бесплатно</div>
              </div>
          </div>
      </div>  
   <div class="itog_dostavka">
         <div class="itog_dostavka_title">
           <div> Доставка в пункт выдачи</div>
            
   <object type="image/svg+xml" data="src/icons/icon-20.svg" id="svg47"> </object> 
            </div>
           <div id="idGorod"> Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
           <div id="idDataDost">5–8 фев </div>
          </div>
     <div class="strokaInfoOtkaz" id="dostavka_strokaInfoOtkaz">
       
       <div id="idSber2"><object class="idSber2" type="image/svg+xml" data="src/icons/priceshipping.svg" id="svg"></object> </div>
       <div id="idObratDostav2" class="class13px" style="display: inline-block">Обратная доставка товаров на склад при отказе — <div id="idBesplat"> бесплатно</div></div>
    
       </div>   
   <div class="itog_oplata"> 
      <div class="itog_oplata_title">
           <div id="itog_oplata_title"> Оплата картой</div>
   <div class="cartMir">
         <div class="cartMir_icon"> 
           <object type="image/svg+xml" data="src/icons/platSber.svg" id="svg33"> </object> 
         </div>
    <div class="cartMir_numbers"> 1234 56•• •••• 1234  </div>
         </div>  
   </div>
    </div>
      <div class="itog_spisatOplatu">
            <div class="itog_srazy">
           <div>  <input id="itog_srazy_checkbox" type="checkbox"/></div>
           <div id="itog_spisatOplatu_label">Списать оплату сразу</div>
            </div>
          <div>
Спишем оплату с карты при получении
            </div>
        </div>
      <button id="button_zakaz"> Заказать</button>
          <div class="itog_soglashenie"> 
       <div> <object type="image/svg+xml" data="src/icons/stroke.svg" id="svg10"> </object> </div>
       <div>Соглашаюсь с правилами пользования торговой площадкой и возврата </div>
      </div>
       
  
</div>
</div>
  <footer>
  <div class="scruglenie2"></div>
   <div class="footer_description" style=""><div>© 2022  ООО «Товары и точка»</div>
</footer>
  <div class="tabbar">
   <object type="image/svg+xml" data="src/icons/main.svg" id="svg96" style="justify-self: center; padding: 12px"></object>
      <object type="image/svg+xml" data="src/icons/catalog.svg" id="svg97" style="justify-self: center; padding: 12px"></object>
       <object type="image/svg+xml" data="src/icons/cart.svg" id="svg98" style="justify-self: center; padding: 12px"></object>
        <object type="image/svg+xml" data="src/icons/favorites.svg" id="svg9" style="justify-self: center; padding: 12px"></object>
         <object type="image/svg+xml" data="src/icons/profile.svg" id="svg99" style="justify-self: center; padding: 12px"></object>
  
</div>
</div>
   </div>
  
`



