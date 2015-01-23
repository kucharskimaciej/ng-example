angular.module('installations.index')
    .service('MainGrid', function () {
        var options;

        options = {
            dataSource: {
                type: "odata",
                transport: {
                    read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                },
                pageSize: 15,
                group: { field: "ContactTitle" }
            },
            height: 500,
            groupable: true,
            sortable: true,
            selectable: "multiple",
            reorderable: true,
            resizable: true,
            filterable: true,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: [
                {
                    field: "ContactName",
                    template: "<div class='customer-photo' style='background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${data.CustomerID}.jpg);'></div><div class='customer-name'>#: ContactName #</div>",
                    title: "Contact",
                    width: 200
                },{
                    field: "ContactTitle",
                    title: "Contact Title",
                    width: 220
                },{
                    field: "Phone",
                    title: "Phone",
                    width: 140
                },{
                    field: "CompanyName",
                    title: "Company Name"
                },{
                    field: "City",
                    title: "City",
                    width: 120
                }
            ]
        };


        this.getOptions = function () {
            return options;
        }
    })