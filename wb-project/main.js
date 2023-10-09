import './style.css'



document.querySelector('#app').innerHTML = `
  <div>
  <div class="container">
  <nav>
    <div id="navigationBlock"> </div>
    <div id="Skruglenie"> </div>
  </nav>
  <div class="contantContainer"> 
  <h1>Корзина</h1>
  <div class="container1">
    <div id="vnalichii" class="containerVnalichii">
      <div id="vyborVse">Выбрать все</div>
      <div id="tovary" class="containerTovary">
        <div id="tovar1" class="tovar">
          <div id="picAndDescription" class="containerPicAndDescription">
            <div id="IdClickAndPic" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor">Цвет: белый</div>
                <div id="idThingSize">Размер: 56</div>
              </div>
              <div id="companyFromDescriptionFromPicAndDescription">
                <div>Коледино WB</div>
                <div class="containercompanyFromDescriptionFromPicAndDescription"> <div id="idCompany"> OOO Вайлдберриз </div>
                  <div id="idInfo">[i]</div>
                </div>
              </div>
            </div>
          </div>
          <div id="sumAndCount" class="containerSumAndCount">
            <div class="countFromSumAndCount">
              <div id="plusFromCountFromSumAndCount">111 </div>
              <div id="ostatkiFromCountFromSumAndCount">Осталось 2 шт.</div>
              <div id="iconsFromCountFromSumAndCount">
                <i>1</i>
                <i>2</i>
              </div>
            </div>
            <div id="IdSumFromSumAndCount" class="sumFromSumAndCount">
              <div id="sumFromSumFromSumAndCount">
                <div class="containerSumFromIdSumFromSumFromSumAndCount">
                  <div id="sumOfItem">522</div>
                  <div id="valutaOfItem">сом</div>
                </div>
              </div>
              <div id="oldSumFromSumFromSumAndCount">1051 сом</div>
            </div>
          </div>
        </div>
        <div id="tovar2" class="tovar">
          <div id="picAndDescription2" class="containerPicAndDescription">
            <div id="IdClickAndPic2" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription2" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription2"> Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe</div>
              <div id="specificationFromDescriptionFromPicAndDescription2"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor2">Цвет: белый</div>
              </div>
              <div id="companyFromDescriptionFromPicAndDescription2">
                <div>Коледино WB</div>
                <div class="containercompanyFromDescriptionFromPicAndDescription"> <div id="idCompany2"> OOO Мегапрофстиль </div>
                  <div id="idInfo2">[i]</div>
                </div>
              </div>
            </div>
          </div>
          <div id="sumAndCount2" class="containerSumAndCount">
            <div class="countFromSumAndCount">
              <div id="plusFromCountFromSumAndCount2">111 </div>
              <div id="ostatkiFromCountFromSumAndCount2">Осталось 2 шт.</div>
              <div id="iconsFromCountFromSumAndCount2">
                <i>1</i>
                <i>2</i>
              </div>
            </div>
            <div id="IdSumFromSumAndCount2" class="sumFromSumAndCount">
              <div id="sumFromSumFromSumAndCount2">
                <div class="containerSumFromIdSumFromSumFromSumAndCount">
                  <div id="sumOfItem2">522</div>
                  <div id="valutaOfItem2">сом</div>
                </div>
              </div>
              <div id="oldSumFromSumFromSumAndCount2">1051 сом</div>
            </div>
          </div>
        </div>
        <div id="tovar3" class="tovar">
          <div id="picAndDescription3" class="containerPicAndDescription">
            <div id="IdClickAndPic3" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription3" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription3"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription3"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor3">Цвет: белый</div>
                <div id="idThingSize3">Размер: 56</div>
              </div>
              <div id="companyFromDescriptionFromPicAndDescription3">
                <div>Коледино WB</div>
                <div class="containercompanyFromDescriptionFromPicAndDescription"> <div id="idCompany3"> OOO Вайлдберриз </div>
                  <div id="idInfo3">[i]</div>
                </div>
              </div>
            </div>
          </div>
          <div id="sumAndCount3" class="containerSumAndCount">
            <div class="countFromSumAndCount">
              <div id="plusFromCountFromSumAndCount3">111 </div>
              <div id="ostatkiFromCountFromSumAndCount3">Осталось 2 шт.</div>
              <div id="iconsFromCountFromSumAndCount3">
                <i>1</i>
                <i>2</i>
              </div>
            </div>
            <div id="IdSumFromSumAndCount3" class="sumFromSumAndCount">
              <div id="sumFromSumFromSumAndCount3">
                <div class="containerSumFromIdSumFromSumFromSumAndCount">
                  <div id="sumOfItem3">522</div>
                  <div id="valutaOfItem3">сом</div>
                </div>
              </div>
              <div id="oldSumFromSumFromSumAndCount3">1051 сом</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="otsutsv" class="containerOtsutsv">
      <div id="otsutsvInto">Отсутсвуют</div>
      <div id="tovaryOtsutsv" class="containertovaryOtsutsv">
        <div id="otsutsvTovar1" class="tovar" >
         <div id="picAndDescription4" class="containerPicAndDescription">
            <div id="IdClickAndPic4" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription4" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription4"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription4"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor4">Цвет: белый</div>
                <div id="idThingSize4">Размер: 56</div>
              </div>
            </div>
          </div>
          <div id="sumAndCount4" class="containerSumAndCount">
              <div id="iconsFromOtsuts">
                <i>1</i>
                <i>2</i>
            </div>
          </div>
     </div>
        <div id="otsutsvTovar2" class="tovar">
                 <div id="picAndDescription5" class="containerPicAndDescription">
            <div id="IdClickAndPic5" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription5" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription5"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription5"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor5">Цвет: белый</div>
                <div id="idThingSize5">Размер: 56</div>
              </div>
            </div>
          </div>
          <div id="sumAndCount5" class="containerSumAndCount">
              <div id="iconsFromOtsuts2">
                <i>1</i>
                <i>2</i>
            </div>
          </div>
</div>
        <div id="otsutsvTovar3" class="tovar">
        <div id="picAndDescription6" class="containerPicAndDescription">
            <div id="IdClickAndPic6" class="ClickAndPic">
              <div class="ClickFromClickAndPic"> </div>
              <div class="PictureFromClickAndPic">
                <div style="width: 72px; height: 96px; background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
border-radius: 8px;"> </div>
              </div>
            </div>
            <div id="IdDescriptionFromPicAndDescription6" class="DescriptionFromPicAndDescription">
              <div id="nameFromDescriptionFromPicAndDescription6"> Футболка UZcotton мужская</div>
              <div id="specificationFromDescriptionFromPicAndDescription6"
                   class="containerSpecificationFromDescriptionFromPicAndDescription">
                <div id="idThingColor6">Цвет: белый</div>
                <div id="idThingSize6">Размер: 56</div>
              </div>
            </div>
          </div>
          <div id="sumAndCount6" class="containerSumAndCount">
              <div id="iconsFromOtsuts3">
                <i>1</i>
                <i>2</i>
            </div>
          </div>
</div>
      </div>
    </div>
    <div id="blockDelivery" class="containerDelivery">
      <div id="dostavka1Round" class="containerdostavka1Round" >
     <div id="idContainerDostavkaTitle" class="containerDostavkaTitle"> 
                     <div id="h4">Способ доставки</div>
                     <div id="IdContainerAdressDelivery" class="containerAdressDelivery"> 
                     <div id="labelContainerAdressDelivery"> 
                     <div>Пункт выдачи</div>
                      <div> Стоимость доставки </div>
                      <div> 5—6 февраля </div>
                      <div> 7—8 февраля</div>
         </div>
         
         <div id="adressContainerAdressDelivery"> 
          <div id="idAdressDeliveryOfPost">
          <div>Бишкек, улица Ахматбека Суюмбаева, 12/1 </div>
          <div id="idInfoRaitingPost"> 
          <div>icon </div>
          <div>Ежедневно с 10 до 21 </div>
          </div>
          </div>
          <div> Бесплатно </div>
           <div id="idSmallTovary"> 
             <div id="idContainerSmallTovary6" class="containerSmallTovary6">
               <div id="picSmall1" style="width: 40px ;height: 56px ;background-color: black"> </div>
               <div id="picSmall2" style="width: 40px ;height: 56px ;background-color: black"> </div>
               <div id="picSmall3" style="width: 40px ;height: 56px ;background-color: black"> </div>
             </div>
            </div>
                <div id="idContainerSmallTovary8"> <div style="width: 40px ;height: 56px ;background-color: black" </div> </div>
            </div>
            </div>
             </div>
             </div>      
      <div id="idStrokaInfoOtkaz"> hruuuuuu </div>    
       </div>
      
      <div id="oplataRound" class="containerOplata"> 
      
       <div id="sposobOplaty" class="containerSposobOplaty"> 
         <div id="h6SposobOplaty">Способ оплаты </div>
         <div id="cartMir" style="gap: 4px"> мир карта </div>
         </div>
       <div id="spishemOplatu">Спишем оплату с карты при получении </div>
      </div>
      <div id="poluchatelRound" class="containerPoluchatelRound">
      
      <div id="h6ЗoluchatelRound"> Получатель </div>
      <div id="idAnketa" class="classAnketa">
       <div  id="idNameSurname"> 
        <input>
        <input>
        </div>
       <div  id="idMailNumInn">
        <input>
        <input>
        <input>
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
                      <div id="idItogoCeny">Итого</div>  
                     <div id="id2101063сом">2 101 063 сом</div> 
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
           <div id="idNazvPunkta"> Доставка в пункт выдачи</div>
           <div id="idGorod"> Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
           <div id="idDataDost">5–8 фев </div>
          </div>
       <div class="containerBesplatDostavka">
         <div id="idIconSber">icon </div>
         <div id="idObratDostav">
           <div>Обратная доставка товаров насклад при отказе— </div>
            <div>бесплатно </div>
         </div>
        </div>
       </div>
      <div id="idOplataKartoy" style="display:grid; row-gap: 12px">
       
       <div id="idKartaOplata">
         <div>    
           <div style="  display:flex; justify-content: space-between; border: solid">
             <div style="display:inline-block;">Оплата картой</div>
             <div style="display:inline-block;">icon</div>
         </div>
            <div style=" display:flex; border: solid; gap: 8px">
           <div> icon</div>
           <div>1234 12•• •••• 1234 </div>
            </div>
           </div>
         <div>  </div>
         </div>
       <div id="idSpisatOplatu">
            <div style=" display:flex; border: solid; gap: 8px">
           <div> check</div>
           <div>Списать оплату сразу</div>
            </div>
          <div style=" display:flex; border: solid;">
            Спишем оплату с карты при получении
            </div>
        </div>
       
        </div>
      </div>
      <div id="idKnopkaZakaza"> 1</div>
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

