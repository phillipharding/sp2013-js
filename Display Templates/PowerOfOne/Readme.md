Reckitt Benckiser O365
=======================================
### Summary ###

---
Power of One list navigation breadcrumbs and Security information panel.
![](https://rj0asg.bn1304.livefilestore.com/y2pFinneUI1oGxef6YqbDmvuu29ttm1XVA5lwh3THLcWbtOrOBzcxLPnG8xXQW-JmXEE_CNiRgzpffE0VplHtEvRNbXJqF-23L1x2cjsVO6XlBc7pCLRP28s4CFwzPLunlbvh3dxuVHbxs_hmGy3BFppA/po1-listnavigation.png?psid=1)

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

