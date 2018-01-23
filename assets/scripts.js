/*===========================================================================//
//                                                                           //
//                                   Main JS                                 //
//                            Offline Page Scripts                           //
//                                                                           //
// All  information  contained  herein  is,  and  remains  the  property  of //
// SmartlySoft  and  its suppliers, if any. The intellectual  and  technical //
// concepts  contained   herein  are  proprietary  to  SmartlySoft  and  its //
// suppliers  and  may be covered by Spain and Foreign Patents,  patents  in //
// process,   and  are   protected  by   trade   secret  or  copyright  law. //
// Dissemination  of  this information or reproduction of this  material  is //
// strictly  forbidden unless prior written explicit permission is  obtained //
// from SmartlySoft                                                          //
//===========================================================================*/

//===========================================================================//
// EMAIL ENCODING                                                            //
//===========================================================================//
function getHTMLEntity(letter)
{
	return "&#"+letter.charCodeAt(0)+";";
}
function show_mail(username,domain,text,subject)
{
	// Calculate address
	address = username+getHTMLEntity("@")+domain;

	// Create mailto
	link = "<a href=\"mailto:"+address+"?subject="+subject+"\">";

	// Append text
	if(text == "")
		link += address;
	else
		link += text;
	
	//Close link
	link += "</a>";

	// Write
	document.write(link);
} 
