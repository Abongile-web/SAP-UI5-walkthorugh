sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
 ], (Controller, MessageToast, JSONModel) => {
    "use strict";
 
    return Controller.extend("ui5.quickstart.controller.App", {

      onInit() {
         //set the data model on the view 

         var oData = {
            recipient : {
               name: "UI5"
            }
         };

         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel); 
      },

       onShowHello() {


          // show a native JavaScript alert
          MessageToast.show("Hello there")
       }
    });
 });