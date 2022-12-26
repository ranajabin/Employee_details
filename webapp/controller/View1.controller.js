sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("fragment1.fragmentproject.controller.View1", {
            onInit: function () {

                // storing value in an array to bind into a model
                var emp =  [
                    {
                        "empid": "01",
                        "empname": "Rakesh"
                    },
                    {
                        "empid": "02",
                        "empname": "Suman"
                    },
                    {
                        "empid": "03",
                        "empname": "nikita"
                    }
                ];       
              
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(emp);
                this.getView().setModel(oModel, "emp11");
            },
            onLoadDialog: function () {
                var myView = this.getView();
                var oDialog = myView.byId("idDialog");
                if (!oDialog) {
                    oDialog = sap.ui.xmlfragment(myView.getId(),"fragment1.fragmentproject.view.View1");
                    myView.addDependent(oDialog);
                }
                oDialog.open();
            },
            cancelpress: function () {
                this.byId("idDialog").close();
            },

            okpress: function () {
                this.byId("idDialog").close();
            },
            onClick: function (oEvent) {
                var oSelectedItem = oEvent.oSource.mProperties;
                var oInput = this.byId("emplyId");
                oInput.setValue(oSelectedItem.title);

                this.byId("idDialog").close();

                
            }
        });
    });
