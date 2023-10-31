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
  <div class="sposob_dostavki"></div>
  <div class="sposob_oplaty"></div>
  <div class="poluchatel"></div>
  <div class="itog"></div>
</div>
  <footer>
  <div class="scruglenie2"></div>
</footer>
  <div class="tabbar"></div>
</div>
   </div>
  
`



