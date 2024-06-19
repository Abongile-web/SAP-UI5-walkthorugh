sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.quickstart.controller.App", {




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