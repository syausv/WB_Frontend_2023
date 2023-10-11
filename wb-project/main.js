import './style.css'



document.querySelector('#app').innerHTML = `
  <div>
  <div class="container">
  <nav>
    <div id="navigationBlock" style="display: flex; padding: 16px 3px 16px 24px; gap: 32px"> 
      <div style="display: block; width: 170px; height: 56px; border: solid">
       <div style="display: block; width: 48px; height: 48px"> </div>
       </div>
      <div style="display:flex ; height: 56px; width: 100%; border: solid"> </div>
      <div style="display: block; width: 169px; height: 56px; border: solid; padding: 0px 17px 0px 0px"> </div>
    </div>
    <div id="Skruglenie"> </div>
  </nav>
  <div class="contantContainer"> 
  <h1>Корзина</h1>
  <div class="container1">
    <div id="vnalichii" class="containerVnalichii">
      <div id="vyborVse">
      <input type="checkbox" checked/>
    <label for="vyborCheck">Выбрать все</label>
</div>
      <div id="tovary" class="containerTovary">
        <div id="tovar1" class="tovar">
          <div id="picAndDescription" class="containerPicAndDescription">
            <div id="IdClickAndPic" class="ClickAndPic">
              <div class="ClickFromClickAndPic">
               <input type="checkbox" checked/>
               </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor"   class="class13px">Цвет: белый</div>
                <div id="idThingSize"  class="class13px">Размер: 56</div>
              </div>
              <div id="companyFromDescriptionFromPicAndDescription">
                <div class="class13px">Коледино WB</div>
                <div class="containercompanyFromDescriptionFromPicAndDescription"> <div id="idCompany" class="class13px"> OOO Вайлдберриз </div>
                  <div id="idInfo">[i]</div>
                </div>
              </div>
            </div>
          </div>
          <div id="sumAndCount" class="containerSumAndCount">
            <div class="countFromSumAndCount" style="gap: 8px">
              <div id="plusFromCountFromSumAndCount">
              
        <div class="displayCounter">
            <button  class="buttons"> - </button>
            <div class="chisloCount">1</div>
            <button  class="buttons"> + </button>
        </div>
              </div>
              <div id="ostatkiFromCountFromSumAndCount" style="display: inline-flex; font-size: 13px; height: 16px">Осталось 2 шт.</div>
              <div id="iconsFromCountFromSumAndCount" class="icons">
                <div><object type="image/svg+xml" data="src/icons/favorite.svg" id="svg"></object></div>
                   <div>  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg"></object> </div>
              </div>
            </div>
            <div id="IdSumFromSumAndCount" class="sumFromSumAndCount">
              <div id="sumFromSumFromSumAndCount">
                <div class="containerSumFromIdSumFromSumFromSumAndCount">
                  <div id="sumOfItem" class="class20px">522</div>
                  <div id="valutaOfItem" class="class16px">сом</div>
                </div>
              </div>
              <div id="oldSumFromSumFromSumAndCount" class="class13px">1051 сом</div>
            </div>
          </div>
        </div>
        <div id="tovar2" class="tovar">
          <div id="picAndDescription2" class="containerPicAndDescription">
            <div id="IdClickAndPic2" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> 
               <input type="checkbox" checked/>
              </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription2" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription2"> Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe</div>
              <div id="specificationFromDescriptionFromPicAndDescription2"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor2"  class="class13px">Цвет: белый</div>
              </div>
              <div id="companyFromDescriptionFromPicAndDescription2">
                <div class="class13px">Коледино WB</div>
                <div class="containercompanyFromDescriptionFromPicAndDescription"> <div id="idCompany2" class="class13px"> OOO Мегапрофстиль </div>
                  <div id="idInfo2">[i]</div>
                </div>
              </div>
            </div>
          </div>
          <div id="sumAndCount2" class="containerSumAndCount">
            <div class="countFromSumAndCount">
              <div id="plusFromCountFromSumAndCount2">
                 <div class="displayCounter">
            <button  class="buttons"> - </button>
            <div class="chisloCount">222</div>
            <button  class="buttons"> + </button>
        </div>
               </div>
              <div id="iconsFromCountFromSumAndCount2" class="icons">
                 <div><object type="image/svg+xml" data="src/icons/favorite.svg" id="svg"></object></div>
                   <div>  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg"></object> </div>
              </div>
            </div>
            <div id="IdSumFromSumAndCount2" class="sumFromSumAndCount">
              <div id="sumFromSumFromSumAndCount2">
                <div class="containerSumFromIdSumFromSumFromSumAndCount">
                  <div id="sumOfItem2" class="class16px">2 100 047</div>
                  <div id="valutaOfItem2" class="class16px">сом</div>
                </div>
              </div>
              <div id="oldSumFromSumFromSumAndCount2" class="class13px">1051 сом</div>
            </div>
          </div>
        </div>
        <div id="tovar3" class="tovar">
          <div id="picAndDescription3" class="containerPicAndDescription">
            <div id="IdClickAndPic3" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> 
              <input type="checkbox" checked/>
              </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription3" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription3"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription3"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor3"  class="class13px">Цвет: белый</div>
                <div id="idThingSize3"  class="class13px">Размер: 56</div>
              </div>
              <div id="companyFromDescriptionFromPicAndDescription3">
                <div class="class13px">Коледино WB</div>
                <div class="containercompanyFromDescriptionFromPicAndDescription"> <div id="idCompany3" class="class13px"> OOO Вайлдберриз </div>
                  <div id="idInfo3">[i]</div>
                </div>
              </div>
            </div>
          </div>
          <div id="sumAndCount3" class="containerSumAndCount">
            <div class="countFromSumAndCount">
              <div id="plusFromCountFromSumAndCount3">
                 <div class="displayCounter">
            <button  class="buttons"> - </button>
            <div class="chisloCount">2</div>
            <button  class="buttons"> + </button>
                  </div>
               </div>
              <div id="ostatkiFromCountFromSumAndCount3" style="display: inline-flex; font-size: 13px; height: 16px">Осталось 2 шт.</div>
              <div id="iconsFromCountFromSumAndCount3" class="icons">
                <div><object type="image/svg+xml" data="src/icons/favorite.svg" id="svg"></object></div>
                   <div>  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg"></object> </div>
              </div>
            </div>
            <div id="IdSumFromSumAndCount3" class="sumFromSumAndCount">
              <div id="sumFromSumFromSumAndCount3">
                <div class="containerSumFromIdSumFromSumFromSumAndCount">
                  <div id="sumOfItem3" class="class20px">494</div>
                  <div id="valutaOfItem3" class="class16px">сом</div>
                </div>
              </div>
              <div id="oldSumFromSumFromSumAndCount3" class="class13px">1051 сом</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="otsutsv" class="containerOtsutsv">
      <div id="otsutsvInto" style="font-weight: bolder ">Отсутствуют · 3 товара</div>
      <div id="tovaryOtsutsv" class="containertovaryOtsutsv">
        <div id="otsutsvTovar1" class="tovar" >
         <div id="picAndDescription4" class="containerPicAndDescription2">
            <div id="IdClickAndPic4">
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription4" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription4"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription4"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor4" class="class13px">Цвет: белый</div>
                <div id="idThingSize4"  class="class13px">Размер: 56</div>
              </div>
            </div>
          </div>
          <div id="sumAndCount4" class="containerSumAndCount">
              <div id="iconsFromOtsuts" class="icons">
                <div><object type="image/svg+xml" data="src/icons/favorite.svg" id="svg"></object></div>
                   <div>  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg"></object> </div>
            </div>
          </div>
     </div>
        <div id="otsutsvTovar2" class="tovar">
                 <div id="picAndDescription5" class="containerPicAndDescription2">
            <div id="IdClickAndPic5">
            
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription5" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription5"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription5"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor5"  class="class13px">Цвет: белый</div>
                <div id="idThingSize5"  class="class13px">Размер: 56</div>
              </div>
            </div>
          </div>
          <div id="sumAndCount5" class="containerSumAndCount">
              <div id="iconsFromOtsuts2" class="icons">
                <div><object type="image/svg+xml" data="src/icons/favorite.svg" id="svg"></object></div>
                   <div>  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg"></object> </div>
            </div>
          </div>
</div>
        <div id="otsutsvTovar3" class="tovar">
        <div id="picAndDescription6" class="containerPicAndDescription2">
            <div id="IdClickAndPic6" >
            
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription6" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription6"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription6"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor6" class="class13px">Цвет: белый</div>
                <div id="idThingSize6"  class="class13px">Размер: 56</div>
              </div>
            </div>
          </div>
          <div id="sumAndCount6" class="containerSumAndCount">
              <div id="iconsFromOtsuts3" class="icons">
                <div><object type="image/svg+xml" data="src/icons/favorite.svg" id="svg"></object></div>
                   <div>  <object type="image/svg+xml" data="src/icons/delete.svg" id="svg"></object> </div>
            </div>
          </div>
</div>
      </div>
    </div>
    <div id="blockDelivery" class="containerDelivery">
      <div id="dostavka1Round" class="containerdostavka1Round" >
     <div id="idContainerDostavkaTitle" class="containerDostavkaTitle"> 
                     <div id="h4" style="display: flex; justify-content: space-between; padding: 0px 24px 0px 24px"><div class="zagalovki">Способ доставки</div> <div>Изменить</div></div>
                     <div id="IdContainerAdressDelivery" class="containerAdressDelivery"> 
                     <div id="labelContainerAdressDelivery"> 
                     <div>Пункт выдачи</div>
                      <div> Стоимость доставки </div>
                      <div> 5—6 февраля </div>
                      <div> 7—8 февраля</div>
         </div>
         
         <div id="adressContainerAdressDelivery"> 
          <div id="idAdressDeliveryOfPost" style="height: 44px">
          <div>Бишкек, улица Ахматбека Суюмбаева, 12/1 </div>
          <div id="idInfoRaitingPost" style="display: flex; gap: 8px; font-size: 13px"> 
          <div style="display: flex"><div>icon</div>4.99 </div>
          <div>Ежедневно с 10 до 21 </div>
          </div>
          </div>
          <div> Бесплатно </div>
           <div id="idSmallTovary"> 
             <div id="idContainerSmallTovary6" class="containerSmallTovary6">
               <div id="picSmall1" style="width: 40px ;height: 56px ;background-color: black; border-radius: 8px"> </div>
               <div id="picSmall2" style="width: 40px ;height: 56px ;background-color: black; border-radius: 8px"> </div>
               <div id="picSmall3" style="width: 40px ;height: 56px ;background-color: black; border-radius: 8px"> </div>
             </div>
            </div>
                <div id="idContainerSmallTovary8"> <div style="width: 40px ;height: 56px ;background-color: black; border-radius: 8px" </div> </div>
            </div>
            </div>
             </div>
             </div>      
      <div id="idStrokaInfoOtkaz" style="display: flex">
       <div  style="display: flex; gap: 8px"> 
       <div id="idSber2"><object type="image/svg+xml" data="src/icons/priceshipping.svg" id="svg"></object> </div>
       <div id="idObratDostav2" class="class13px">Обратная доставка товаров на склад при отказе —</div>
       <div id="idBesplat" class="class13px"> бесплатно</div>
       </div>
       
       </div>    
       </div>
      
      <div id="oplataRound" class="containerOplata"> 
      
       <div id="sposobOplaty" class="containerSposobOplaty"> 
         <div id="h6SposobOplaty" style="display: flex; justify-content: space-between"><div class="zagalovki">Способ оплаты</div> <div>Изменить</div> </div>
         <div style="display: flex; gap: 8px">
         <div id="cartMir" style="gap:4px"> <object type="image/svg+xml" data="src/icons/platSber.svg" id="svg"> </object> 
         </div>
         <div style="display: flex; gap: 12px"><div>1234 56•• •••• 1234</div> <div>01/30</div></div>
         </div>
         
         </div>
         
       <div id="spishemOplatu" class="class13px">Спишем оплату с карты при получении </div>
      </div>
      <div id="poluchatelRound" class="containerPoluchatelRound">
      
      <div id="h6ЗoluchatelRound" class="zagalovki"> Получатель </div>
      <div id="idAnketa" class="classAnketa">
       <div class="nameSurname">
        <div id="nameClass" class="text-field text-field_floating-3">
      <input class="text-field__input" type="name" id="name" name="name" placeholder="Имя">
      <label class="text-field__label" for="name">Имя</label>
    </div>
    
         <div id="surnameClass" class="text-field text-field_floating-3">
      <input class="text-field__input" type="surname" id="surname" name="surname" placeholder="Фамилия">
      <label class="text-field__label" for="surname">Фамилия</label>
        </div>
        </div>
         <div class="emailPhoneInn">
         <div id="emailClass" class="text-field text-field_floating-3">
      <input class="text-field__input" type="email" id="email" name="email" placeholder="Почта">
      <label class="text-field__label" for="email">Почта</label>
        </div>
        
         <div id="phoneClass"  class="text-field text-field_floating-3">
      <input class="text-field__input" type="phone" id="phone" name="phone" placeholder="Телефон">
      <label class="text-field__label" for="phone">Телефон</label>
        </div>
        
         <div id="innNumbClass" class="text-field text-field_floating-3">
      <input class="text-field__input" type="number" id="innNumb" name="innNumb" placeholder="ИНН">
      <label class="text-field__label" for="surname">ИНН</label>
             <div style="display: inline-flex; font-size: 12px ">Для таможенного оформления </div>
        </div>
        </div>
        
        </div>
       
</div>

      </div>
</div>
    <div id="sidebarItog">
      <div id="Itog" class="containerItog">
      <div id="idStoimodyZakaza" class="containerRazdelenieZakaz"> 
      <div id="idCena" class="containerCena">
           <div class="ceny" id="idItogoCeny1">
                      <div id="idItogoCeny" style="font-size: 24px; font-weight: bold">Итого</div>  
                     <div id="id2101063сом" class="class20px" style="font-weight: bold">2 101 063 сом</div> 
       </div>
           <div id="idItogoCeny2" class="containerCeny2">
             <div class="ceny1" id="id1idItogoCeny2">
              <div id="id203tov">203 товара</div>   
              <div id="id2302com">2 302 048 сом</div> 
             </div>
            <div class="ceny2"  id="id2idItogoCeny2">
              <div id="skidkaWord">Скидка</div> 
              <div id="id985com">−200985 сом</div>
              </div>
            <div class="ceny3" id="id3idItogoCeny2">
              <div  id="dostavkaWord">Доставка</div> 
              <div id="besplatno">Бесплатно</div>
              </div>
          </div>
       </div>
      <div id="idDostavka" class="containerDostavka"> 
      <div class="containerDostavkaVPunktVydachi"> 
      <div style="display: inline-flex; justify-content: space-between">
           <div id="idNazvPunkta" style="font-weight: bold"> Доставка в пункт выдачи</div>
            
            <object type="image/svg+xml" data="src/icons/icon-20.svg" id="svg7"> </object> 
            </div>
           <div id="idGorod" class="class13px"> Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
           <div id="idDataDost" class="class13px">5–8 фев </div>
          </div>
       <div class="containerBesplatDostavka" >
         <div id="idIconSber" style="display: block; text-align: center;">
          <object type="image/svg+xml" data="src/icons/priceshipping.svg" id="svg3""> </object>
          </div>
         <div id="idObratDostav" style="display: inline-block">
           Обратная доставка товаров на склад при отказе — <span> бесплатно </span>
         </div>
        </div>
       </div>
      <div id="idOplataKartoy" style="display:grid; row-gap: 12px">
       
       <div id="idKartaOplata">
         <div>    
           <div style="display:flex; justify-content: space-between; border: solid">
             <div style="display:inline-flex; font-weight: bold">Оплата картой
             </div>
             <div><object type="image/svg+xml" data="src/icons/icon-20.svg" id="svg7"> </object> </div>
         </div>
            <div style=" display:flex; border: solid; gap: 8px" class="class13px">
           <div> 
           <object type="image/svg+xml" data="src/icons/platSber.svg" id="svg4"> </object>
           </div>
           <div style="display: inline-flex; text-align: center; vertical-align: middle;">1234 12•• •••• 1234 </div>
            </div>
           </div>
         <div>  </div>
         </div>
       <div id="idSpisatOplatu" class="class13px">
            <div style=" display:flex; border: solid; gap: 8px">
           <div>  <input type="checkbox" style="width: 22px;height: 22px"/></div>
           <div>Списать оплату сразу</div>
            </div>
          <div style=" display:flex; border: solid;">
            Спишем оплату с карты при получении
            </div>
        </div>
       
        </div>
      </div>
      <div id="idKnopkaZakaza" style="display: grid; gap:8px"> 
      <div id="buttonZakazat"> 
      <button style="display: block; width: 100%; height: 44px">Заказать</button>
      </div>
      
      <div style="display:flex; justify-content: space-between; border: solid; height: 32px" class="class13px"> 
       <div>icon </div>
       <div>Соглашаюсь с правилами пользования торговой площадкой и возврата </div>
      </div>
      
      
      </div>
</div>
    </div>
  </div>
  <footer>
    <div id="Skruglenie2"> </div>
  </footer>
  <div id="tabbar"> табар
  </div>
  </div>
`

