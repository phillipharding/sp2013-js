List and Library Breadcrumbs / Security Information
=======================================
### Summary ###

---
Power of One list navigation breadcrumbs and Security information panel. This Display Template extends the list view webpart for lists and libraries by adding;
- Folder breadcrumbs
- Security role assignment information for the current folder location, including the root list/library folder.

The role assignment information includes clickable links to role asssignment members for SharePoint *groups* and *users*. Also shown is a clickable link to the locations first unique ancestor if the current location does not have unique role assignments.

![](http://i.imgur.com/P252tJ0.png)

###Permissions###
**All users who should access the site AND who should also be able to view security role assignment information** must have the **Enumerate Permissions** permission from the **Site Permissions** collection.
This can be done by modifying 'Reader' type groups or by creating a new permission level.
![](http://i.imgur.com/tRJqJij.png)

The code will gracefully degrade if a user does not have **Enumerate Permissions** and instead show the current set of effective permissions;
![Todo image here when imagur comes back up](http://i.imgur.com/Sxs6T34.png)


### Version History ###
Version  | Date | Comments
---------| -----| --------
0.1  | April 24th 2015 | Initial release.
0.2  | April 27th 2015 | Added clickable links and ancestor infomation.
0.3  | April 29th 2015 | Graceful degrade if user does not have **Enumerate Permissions** permission.

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

