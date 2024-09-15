/* 
  [출처] 하단의 영상을 보고 진행한 내용입니다. 
  https://www.youtube.com/watch?v=dir9iHcUkZI&t=101s
*/

window.onload = function() {
  function InventoryViewModel() {
    var self = this;

    var iconTypes = [
      { icon: "icon-bone", text: "Bone" },
      { icon: "icon-ball", text: "Ball" },
      { icon: "icon-circle", text: "Circle" },
      { icon: "icon-rabbit", text: "Rabbit" }
    ];

    self.inventory = ko.observableArray([]);

    self.addItem = function() {
      var index = Math.floor(Math.random() * iconTypes.length);
      self.inventory.push(iconTypes[index]);
    }

    self.removeItem = function(data, event) {
      var indexToRemove = event.target.getAttribute("item-index");
      self.inventory.splice(indexToRemove, 1);
    }
  }
  
  const knockoutApp = document.querySelector("#knockout-app");
  ko.applyBindings(new InventoryViewModel(), knockoutApp);
};