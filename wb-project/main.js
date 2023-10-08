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
        <div id="otsutsvTovar1"></div>
        <div id="otsutsvTovar2"></div>
        <div id="otsutsvTovar3"></div>
      </div>
    </div>
    <div id="blockDelivery" class="containerDelivery">
      <div id="dostavka1Round">Способ доставки</div>
      <div id="oplataRound"> Способ оплаты</div>
      <div id="poluchatelRound">Получатель</div>
    </div></div>
    <div id="sidebarItog">
      <div id="Itog">Итог</div>
    </div>
  </div>
  <footer>
    <div id="Skruglenie2"> </div>
  </footer>
  <div id="tabbar"> табар
  </div>
  </div>
`

