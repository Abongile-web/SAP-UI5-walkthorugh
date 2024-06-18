sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], (Controller, MessageToast, JSONModel, ResourceModel) => {
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

         //Set i18n model on view 
         const i18nModel = new ResourceModel({
            bundleName: "ui5.quickstart.i18n.i18n",
         });
         this.getView().setModel(i18nModel, 'i18n');
      },



       onShowHello() {
         // read message from i18n model 
         const oBundle = this.getView().getModel('i18n').getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

          // show a native JavaScript alert
          MessageToast.show(sMsg)
       }
    });
 });