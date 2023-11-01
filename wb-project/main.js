import './style.css'



document.querySelector('#app').innerHTML = `
  <div>
  <div class="container">
  <nav>
  <div class="menu"></div>
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
  <div class="tovary">
  <div class="tovar">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii">  <img src="src/img/Frame38531.png"/> </div>
  <div class="sumFromSumAndCount">
                  <div>522</div>
                  <div>сом</div> 
              <div><s>1051 сом</s></div>
            </div>
  <div class="description_tovar">
   <div> Футболка UZcotton мужская</div>
              <div>
                <div id="idThingColor">Цвет: белый</div>
                <div id="idThingSize">Размер: 56</div>
              </div>
<div>Коледино WB</div>
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
    <div>Осталось 2 шт. </div>
    <div class="icons"> 
                <div class="action_icon"><object  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon">  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
 <div class="tovar">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii">  <img src="src/img/Frame38531.png"/> </div>
  <div class="sumFromSumAndCount">
                  <div>522</div>
                  <div>сом</div> 
              <div><s>1051 сом</s></div>
            </div>
  <div class="description_tovar">
   <div> Футболка UZcotton мужская</div>
              <div>
                <div id="idThingColor">Цвет: белый</div>
                <div id="idThingSize">Размер: 56</div>
              </div>
<div>Коледино WB</div>
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
    <div>Осталось 2 шт. </div>
    <div class="icons"> 
                <div class="action_icon"><object  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon">  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
<div class="tovar">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii">  <img src="src/img/Frame38531.png"/> </div>
  <div class="sumFromSumAndCount">
                  <div>522</div>
                  <div>сом</div> 
              <div><s>1051 сом</s></div>
            </div>
  <div class="description_tovar">
   <div> Футболка UZcotton мужская</div>
              <div>
                <div id="idThingColor">Цвет: белый</div>
                <div id="idThingSize">Размер: 56</div>
              </div>
<div>Коледино WB</div>
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
    <div>Осталось 2 шт. </div>
    <div class="icons"> 
                <div class="action_icon"><object  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon">  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
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
  <div class="img_vnalichii">  <img src="src/img/Frame38531.png"/> </div>
  <div class="description_tovar">
   <div> Футболка UZcotton мужская</div>
   <div>Цвет: белый</div>
    </div>
  <div class="otsutsv_kolvo_tovar">
    <div class="icons"> 
      <div class="action_icon"><object  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon">  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
       <div class="otsutsv_tovar">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii">  <img src="src/img/Frame38531.png"/> </div>

  <div class="description_tovar">
   <div> Футболка UZcotton мужская</div>
   <div>Цвет: белый</div>
    </div>
  <div class="otsutsv_kolvo_tovar">
    <div class="icons"> 
      <div class="action_icon"><object  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon">  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
              </div>
  </div>
</div>
          <div class="otsutsv_tovar">
  <div class="hr"> 
  <hr>
  </div>
  <div class="img_vnalichii">  <img src="src/img/Frame38531.png"/> </div>

  <div class="description_tovar">
   <div> Футболка UZcotton мужская</div>
   <div>Цвет: белый</div>
    </div>
  <div class="otsutsv_kolvo_tovar">
    <div class="icons"> 
      <div class="action_icon"><object  type="image/svg+xml" data="src/icons/favorite.svg" id="svg4442"></object></div>
                   <div class="action_icon">  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg3444"></object> </div>
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
               
      <div class="strokaInfoOtkaz">
       
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
  <div class="itog"></div>
</div>
  <footer>
  <div class="scruglenie2"></div>
</footer>
  <div class="tabbar"></div>
</div>
   </div>
  
`



