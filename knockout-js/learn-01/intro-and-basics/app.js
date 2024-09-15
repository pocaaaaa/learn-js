/* 
  [출처] 하단의 영상을 보고 진행한 내용입니다. 
  https://www.youtube.com/watch?v=XhfPaNTEuTs
*/

window.onload = function() {
  function CounterViewModel() {
    var self = this;
    
    self.count = ko.observable(0);
    self.firstName = ko.observable("Wayne");
    self.dogStatus = ko.computed(function() {
      if(self.count() === 1) return "UNDERWHELMED";
      if(self.count() === 2) return "LISTENING...";
      if(self.count() > 3) return "EXCITED!";
      return "UPSET";
    });

    self.increase = function() {
      var currentValue = self.count();
      self.count(currentValue + 1);
    };

    self.decrease = function() {
      var currentValue = self.count();
      if(currentValue > 0) {
        self.count(currentValue - 1);
      }
    };
  }
  
  const knockoutApp = document.querySelector("#knockout-app");
  ko.applyBindings(new CounterViewModel(), knockoutApp);
};