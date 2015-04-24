Reckitt Benckiser O365
=======================================
### Summary ###

---
Power of One list navigation breadcrumbs and Security information panel.

### Version History ###
Version  | Date | Comments
---------| -----| --------
0.1  | April 24th 2015 | Initial release

### Applies to ###
-  Office 365 Multi Tenant (MT)
-  Office 365 Dedicated (D)
-  SharePoint Server 2013

###Files###

---
- po1-listnavigation.js
- po1-listnavigation.css

###Deployment###

---
Upload the above files to the following location in the site collection, creating the `PO1` folder as neccesary;
>
> ~sitecollection/_catalogs/Masterpage/Display Templates/PO1
> 

###Configuration###

---
- Navigate to the root folder of the list or library and edit the listview webpart configuration
- Set the *JS Link* property in the *Miscellaneous* section to; `~sitecollection/_catalogs/masterpage/Display Templates/PO1/po1-listnavigation.js`

