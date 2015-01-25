
function services_addShopUser(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="addshopuser";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_editShopUser(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="editshopuser";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_deleteShopUser(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="deleteshopuser";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_getShopUsers(successFunction)
{
	var Type = "GET";
	var ServiceUrl ="getshopusers";	
	connectServer(Type,ServiceUrl,'',successFunction);
}

function services_getCategories(successFunction)
{
	var Type = "GET";
	var ServiceUrl ="getcategories";	
	connectServer(Type,ServiceUrl,'',successFunction);
}

function services_getProducts(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="getproducts";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_changeProduct(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="changeproduct";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_getOrders(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="getorders";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_getOrderDetails(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="getorderdetails";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_getUnPackedItems(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="fetchitems";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_makePayment(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="submitpayment";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}

function services_changeOrderState(varData,successFunction)
{
	var Type = "POST";
	var ServiceUrl ="changeorderstate";	
	connectServer(Type,ServiceUrl,varData,successFunction);
}


function services_getRole(successFunction)
{
	var Type = "GET";
	var ServiceUrl ="getrole";	
	connectServer(Type,ServiceUrl,'',successFunction);
}