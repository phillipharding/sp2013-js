
Type.registerNamespace('SP.UI.People');

SP.UI.People.ListType = function() {}
SP.UI.People.ListType.prototype = {
    undefined: -1, 
    following: 0, 
    followers: 1, 
    inCommon: 2
}
SP.UI.People.ListType.registerEnum('SP.UI.People.ListType', false);


SP.UI.People.MySitePeopleIdsAndClasses = function SP_UI_People_MySitePeopleIdsAndClasses() {
}


SP.UI.People.PeopleSortMenu = function SP_UI_People_PeopleSortMenu(ID) {
    SP.UI.People.PeopleSortMenu.initializeBase(this, [ ID ]);
}
SP.UI.People.PeopleSortMenu.prototype = {
    
    setStyles: function SP_UI_People_PeopleSortMenu$setStyles() {
        this.set_controlStyle('ms-mysitemenu-control ms-people-peopleListViewSortMenu');
        this.set_controlImageStyle('ms-mysitemenu-image');
        this.set_controlHeaderStyle('ms-mysitemenu-link');
        this.set_controlElementType('div');
    }
}


SP.UI.People.MySitePeopleImages = function SP_UI_People_MySitePeopleImages() {
}
SP.UI.People.MySitePeopleImages.get_$d = function SP_UI_People_MySitePeopleImages$get_$d() {
    return GetThemedImageUrl('spcommon.png');
}
SP.UI.People.MySitePeopleImages.get_$1G = function SP_UI_People_MySitePeopleImages$get_$1G() {
    return GetThemedImageUrl('socialcommon.png');
}


SP.UI.People.PeopleListManager = function SP_UI_People_PeopleListManager() {
    this.$l_0 = {};
    this.$j_0 = {};
}
SP.UI.People.PeopleListManager.get_lists = function SP_UI_People_PeopleListManager$get_lists() {
    if (!SP.UI.People.PeopleListManager.$2) {
        SP.UI.People.PeopleListManager.$2 = new SP.UI.People.PeopleListManager();
    }
    return SP.UI.People.PeopleListManager.$2;
}
SP.UI.People.PeopleListManager.setList = function SP_UI_People_PeopleListManager$setList(list) {
    if (list) {
        if (list.get_typeOfList() !== -1) {
            SP.UI.People.PeopleListManager.get_lists().$l_0[SP.UI.People.ListType.toString(list.get_typeOfList())] = list;
        }
    }
}
SP.UI.People.PeopleListManager.setIndexByView = function SP_UI_People_PeopleListManager$setIndexByView(type, index) {
    if (type !== -1) {
        SP.UI.People.PeopleListManager.get_lists().$j_0[SP.UI.People.ListType.toString(type)] = index;
    }
}
SP.UI.People.PeopleListManager.getList = function SP_UI_People_PeopleListManager$getList(type) {
    return SP.UI.People.PeopleListManager.get_lists().$l_0[SP.UI.People.ListType.toString(type)];
}
SP.UI.People.PeopleListManager.getIndexByView = function SP_UI_People_PeopleListManager$getIndexByView(type) {
    return SP.UI.People.PeopleListManager.get_lists().$j_0[SP.UI.People.ListType.toString(type)];
}
SP.UI.People.PeopleListManager.prototype = {
    $l_0: null,
    $j_0: null
}


SP.UI.People.FollowMultiplePeopleDialog = function SP_UI_People_FollowMultiplePeopleDialog() {
}
SP.UI.People.FollowMultiplePeopleDialog.get_dialog = function SP_UI_People_FollowMultiplePeopleDialog$get_dialog() {
    if (!SP.UI.People.FollowMultiplePeopleDialog.$2) {
        SP.UI.People.FollowMultiplePeopleDialog.$2 = new SP.UI.People.FollowMultiplePeopleDialog();
    }
    return SP.UI.People.FollowMultiplePeopleDialog.$2;
}
SP.UI.People.FollowMultiplePeopleDialog.showFollowMultiplePeopleDialog = function SP_UI_People_FollowMultiplePeopleDialog$showFollowMultiplePeopleDialog(e) {
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.width = 552;
    $v_0.height = 257;
    $v_0.url = SP.Utilities.Utility.getLayoutsPageUrl('FollowMultiplePeopleDialog.aspx');
    $v_0.dialogReturnValueCallback = SP.UI.People.FollowMultiplePeopleDialog.$1B;
    SP.UI.ModalDialog.showModalDialog($v_0);
}
SP.UI.People.FollowMultiplePeopleDialog.$1B = function SP_UI_People_FollowMultiplePeopleDialog$$1B($p0, $p1) {
    if ($p0 === 1) {
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $v_0 = ($p1).split(',');
            var $v_1 = [];
            for (var $$arr_4 = $v_0, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_2 = $$arr_4[$$idx_6];
                if (!SP.UI.People.PersonManager.getPerson($v_2)) {
                    var $v_3 = SP.UI.People.PeopleData.get_peopleManager().getPropertiesFor($v_2);
                    SP.UI.People.PeopleData.get_context().load($v_3, SP.UI.People.MySitePeopleUtilities.getPersonPropertiesToInclude());
                    $v_1[$v_1.length] = $v_3;
                }
            }
            if ($v_1.length > 0) {
                SP.UI.People.PeopleData.get_context().executeQueryAsync(function() {
                    for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
                        var $v_5 = $v_1[$v_4];
                        SP.UI.People.PersonManager.addPerson($v_5);
                        var $v_6 = SP.UI.People.FollowLinkManager.getLink($v_5.get_accountName());
                        if ($v_6) {
                            $v_6.generateTRC();
                        }
                    }
                    SP.UI.People.FollowMultiplePeopleDialog.$i($v_0);
                }, function() {
                    SP.UI.People.FollowMultiplePeopleDialog.$i($v_0);
                });
            }
            else {
                SP.UI.People.FollowMultiplePeopleDialog.$i($v_0);
            }
        });
    }
}
SP.UI.People.FollowMultiplePeopleDialog.$i = function SP_UI_People_FollowMultiplePeopleDialog$$i($p0) {
    for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_1 = $$arr_1[$$idx_3];
        var $v_2 = SP.UI.People.FollowLinkManager.getLink($v_1);
        if ($v_2) {
            $v_2.updateFromExternalSource(true, SP.UI.People.FollowLink.followMultiplePeoplePrefixAndSource);
        }
    }
    var $v_0 = SP.UI.People.PeopleListManager.getList(0);
    if (SP.UI.People.PeopleListViewPane.get_isOwnList() && !SP.UI.People.PeopleListViewPane.get_currentList() && $v_0) {
        if (($v_0).processAddUpdates()) {
            SP.UI.People.PeopleListViewPane.sortPeopleList(false);
        }
    }
}


SP.UI.People.PeopleListViewPane = function SP_UI_People_PeopleListViewPane() {
    this.$U_0 = -1;
    this.$6_0 = -1;
    this.$b_0 = -1;
    var $v_0 = $get('PeopleListView');
    if (!$v_0) {
        return;
    }
    var $$t_K = this;
    SP.UI.People.FollowLinkManager.set_followCallback(function($p1_0, $p1_1, $p1_2, $p1_3) {
        if (!$p1_3) {
            return;
        }
        if (SP.UI.People.PeopleListViewPane.get_isPeopleWebpartOnPage()) {
            if (SP.UI.People.PeopleListViewPane.get_isOwnList()) {
                var $v_D = SP.UI.People.PeopleListManager.getList(0);
                if ($v_D) {
                    if ($p1_1 && !SP.UI.People.PeopleListViewPane.get_currentList() && $p1_2 === SP.UI.People.FollowLink.suggestionIdPrefixAndSource) {
                        $v_D.addImmediately($p1_0);
                    }
                    else {
                        $v_D.updateList($p1_0, $p1_1);
                    }
                }
            }
            else if ($p1_0 === SP.UI.People.PeopleListViewPane.get_currentUserAccountName()) {
                var $v_E = SP.UI.People.PeopleListManager.getList(1);
                if ($v_E) {
                    $v_E.updateList($p1_1);
                }
            }
            else {
                var $v_F = SP.UI.People.PeopleListManager.getList(2);
                if ($v_F) {
                    $v_F.updateList($p1_0, $p1_1);
                }
            }
        }
    });
    this.$10_0 = true;
    $v_0.className = 'ms-people-peopleListView';
    var $v_1 = document.createElement('div');
    $v_1.id = 'PeopleListViewLeftPane';
    $v_1.className = 'ms-people-floatLeft ms-people-peopleListViewLeftPane';
    this.$S_0 = document.createElement('div');
    this.$S_0.id = 'PeopleListViewRightPane';
    this.$S_0.className = 'ms-people-peopleListViewRightPane';
    var $v_2 = document.createElement('div');
    $v_2.className = 'ms-people-peopleListViewHeaderDiv';
    $v_2.id = 'PeopleListViewHeader';
    var $v_3 = document.createElement('div');
    $v_3.id = 'PeopleListViewFooter';
    $v_3.className = SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewFooterClass;
    this.$O_0 = document.createElement('span');
    this.$O_0.id = 'LeftHeaderSpan';
    this.$O_0.className = 'ms-people-floatLeft';
    this.$Q_0 = document.createElement('span');
    this.$Q_0.id = 'PrivacyIconHeaderSpan';
    this.$Q_0.className = 'ms-people-privacyIconHeader';
    var $v_4 = document.createElement('div');
    $v_4.id = 'SortDiv';
    $v_4.className = 'ms-people-peopleListViewSortDiv';
    this.$F_0 = document.createElement('div');
    this.$F_0.id = 'PeopleListViewMain';
    this.$F_0.className = 'ms-clear';
    this.$D_0 = document.createElement('span');
    this.$D_0.id = 'NavigationSpan';
    this.$D_0.className = 'ms-metadata';
    this.$A_0 = document.createElement('div');
    this.$A_0.id = 'FollowMultiplePeopleDiv';
    this.$A_0.className = 'ms-people-followMultiplePeople ms-textXLarge ms-soften';
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, this.$A_0);
    var $v_5 = SP.UI.MySiteCommon.CommonUIElements.makeImageAltSameAsTitle(SP.UI.People.MySitePeopleImages.get_$d(), 'PreviousPageImage', 'ms-people-pagingArrowLeftImage', SpsClient.ScriptResources.previousPageText);
    var $v_6 = SP.UI.MySiteCommon.CommonUIElements.makeImageAltSameAsTitle(SP.UI.People.MySitePeopleImages.get_$d(), 'NextPageImage', 'ms-people-pagingArrowRightImage', SpsClient.ScriptResources.nextPageText);
    this.$G_0 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler('PreviousLink', 'ms-people-navigationLink', null, null, null, SP.UI.People.PeopleListViewPane.previousPage);
    this.$E_0 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler('NextLink', 'ms-people-navigationLink', null, null, null, SP.UI.People.PeopleListViewPane.nextPage);
    this.$c_0 = new SP.UI.People.PeopleSortMenu('SortMenu');
    this.$15_0 = this.$c_0.add(SpsClient.ScriptResources.sortAscendingText, SpsClient.ScriptResources.sortAscendingTooltip, null, null, SP.UI.People.PeopleListViewPane.$11);
    this.$16_0 = this.$c_0.add(SpsClient.ScriptResources.sortDescendingText, SpsClient.ScriptResources.sortDescendingTooltip, null, null, SP.UI.People.PeopleListViewPane.$11);
    this.$g_0 = document.createElement('a');
    this.$f_0 = document.createElement('a');
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, this.$G_0);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, this.$E_0);
    this.$o_0 = document.createTextNode('');
    this.$A_0.innerHTML = '<a id=\"FollowMultiplePeopleImageLink\"><img src=\"' + SP.UI.People.MySitePeopleImages.get_$1G() + '\" class=\"' + 'ms-profile-followHeroImage' + '\">' + '</a>' + String.format(SpsClient.ScriptResources.bulkFollowText, '<a id=\"FollowMultiplePeopleLink\">', '</a>');
    for (var $v_A = 0; $v_A < this.$A_0.children.length; $v_A++) {
        var $v_B = this.$A_0.children[$v_A];
        if ($v_B.id === 'FollowMultiplePeopleLink' || $v_B.id === 'FollowMultiplePeopleImageLink') {
            var $v_C = $v_B;
            $v_C.className = 'ms-heroCommandLink';
            $v_C.title = SpsClient.ScriptResources.bulkFollowLinkTooltip;
            if ($v_B.id === 'FollowMultiplePeopleLink') {
                this.$g_0 = $v_C;
            }
            else {
                $v_C.className += ' ms-profile-followHeroImageParent';
                this.$f_0 = $v_C;
            }
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_C);
            SP.UI.MySiteCommon.CommonUIElements.addClickHandlerToAnchorElement($v_C, SP.UI.People.FollowMultiplePeopleDialog.showFollowMultiplePeopleDialog);
        }
    }
    this.$D_0.appendChild(this.$G_0);
    this.$D_0.appendChild(this.$o_0);
    this.$D_0.appendChild(this.$E_0);
    $v_3.appendChild(this.$D_0);
    this.$q_0 = document.createElement('div');
    this.$q_0.id = 'PeopleViewSelectorPivotParent';
    var $v_7 = document.createElement('span');
    $v_7.className = 'ms-people-pagingArrowImageParent';
    var $v_8 = document.createElement('span');
    $v_8.className = 'ms-people-pagingArrowImageParent';
    $v_7.appendChild($v_5);
    this.$G_0.appendChild($v_7);
    $v_8.appendChild($v_6);
    this.$E_0.appendChild($v_8);
    $v_4.appendChild(this.$c_0.render());
    $v_2.appendChild(this.$O_0);
    $v_2.appendChild(this.$Q_0);
    var $v_9 = document.createElement('div');
    $v_9.className = 'ms-clear';
    $v_2.appendChild($v_9);
    $v_1.appendChild(this.$A_0);
    $v_1.appendChild($v_2);
    $v_1.appendChild($v_4);
    $v_1.appendChild(this.$F_0);
    $v_1.appendChild($v_3);
    $v_0.innerHTML = '';
    $v_0.appendChild($v_1);
    $v_0.appendChild(this.$S_0);
}
SP.UI.People.PeopleListViewPane.get_view = function SP_UI_People_PeopleListViewPane$get_view() {
    if (!SP.UI.People.PeopleListViewPane.$2) {
        SP.UI.People.PeopleListViewPane.$2 = new SP.UI.People.PeopleListViewPane();
    }
    return SP.UI.People.PeopleListViewPane.$2;
}
SP.UI.People.PeopleListViewPane.get_pivotControl = function SP_UI_People_PeopleListViewPane$get_pivotControl() {
    if (!SP.UI.People.PeopleListViewPane.get_view().$Z_0) {
        SP.SOD.executeFunc('clienttemplates.js', 'ClientPivotControl', function() {
            var $v_0 = {};
            $v_0['PivotParentId'] = 'PeopleViewSelectorPivotParent';
            $v_0['PivotContainerId'] = 'PeopleViewSelectorPivotContainer';
            SP.UI.People.PeopleListViewPane.get_view().$Z_0 = new ClientPivotControl($v_0);
            SP.UI.People.PeopleListViewPane.get_view().$Z_0.SurfacedPivotCount = 2;
            for (var $v_1 = 0; $v_1 < SP.UI.People.PeopleListViewPane.get_view().$p_0.length; $v_1++) {
                SP.UI.People.PeopleListViewPane.$18(SP.UI.People.PeopleListViewPane.get_view().$p_0[$v_1]);
            }
            SP.UI.People.PeopleListViewPane.updateDropdown(SP.UI.People.PeopleListManager.getIndexByView(SP.UI.People.PeopleListViewPane.get_view().$6_0));
        });
    }
    return SP.UI.People.PeopleListViewPane.get_view().$Z_0;
}
SP.UI.People.PeopleListViewPane.get_currentUserAccountName = function SP_UI_People_PeopleListViewPane$get_currentUserAccountName() {
    return SP.UI.People.PeopleListViewPane.get_view().$z_0;
}
SP.UI.People.PeopleListViewPane.get_isPeopleWebpartOnPage = function SP_UI_People_PeopleListViewPane$get_isPeopleWebpartOnPage() {
    return SP.UI.People.PeopleListViewPane.get_view().$10_0;
}
SP.UI.People.PeopleListViewPane.get_isOwnList = function SP_UI_People_PeopleListViewPane$get_isOwnList() {
    return SP.UI.People.PeopleListViewPane.get_view().$X_0;
}
SP.UI.People.PeopleListViewPane.get_currentList = function SP_UI_People_PeopleListViewPane$get_currentList() {
    return SP.UI.People.PeopleListViewPane.get_view().$U_0;
}
SP.UI.People.PeopleListViewPane.refreshVisibilityOfSuggestions = function SP_UI_People_PeopleListViewPane$refreshVisibilityOfSuggestions() {
    if (SP.UI.People.PeopleListViewPane.get_isPeopleWebpartOnPage() && SP.UI.People.PeopleListViewPane.get_isOwnList()) {
        var $v_0 = SP.UI.People.PeopleListManager.getList(0);
        SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.PeopleListViewPane.get_view().$r_0, SP.UI.People.SuggestionManager.get_numberOfSuggestions() > 0 && !!$v_0 && $v_0.get_isLoaded());
    }
}
SP.UI.People.PeopleListViewPane.clearInstance = function SP_UI_People_PeopleListViewPane$clearInstance() {
    SP.UI.People.PeopleListViewPane.$2 = null;
}
SP.UI.People.PeopleListViewPane.get_isMyPeopleListPublic = function SP_UI_People_PeopleListViewPane$get_isMyPeopleListPublic() {
    return SP.UI.People.PeopleListViewPane.get_view().$n_0;
}
SP.UI.People.PeopleListViewPane.set_isMyPeopleListPublic = function SP_UI_People_PeopleListViewPane$set_isMyPeopleListPublic(value) {
    SP.UI.People.PeopleListViewPane.get_view().$n_0 = value;
    return value;
}
SP.UI.People.PeopleListViewPane.get_editProfileLink = function SP_UI_People_PeopleListViewPane$get_editProfileLink() {
    return SP.UI.People.PeopleListViewPane.get_view().$m_0;
}
SP.UI.People.PeopleListViewPane.set_editProfileLink = function SP_UI_People_PeopleListViewPane$set_editProfileLink(value) {
    SP.UI.People.PeopleListViewPane.get_view().$m_0 = value;
    return value;
}
SP.UI.People.PeopleListViewPane.get_people = function SP_UI_People_PeopleListViewPane$get_people() {
    return SP.UI.People.PeopleListManager.getList(SP.UI.People.PeopleListViewPane.get_view().$U_0);
}
SP.UI.People.PeopleListViewPane.set_people = function SP_UI_People_PeopleListViewPane$set_people(value) {
    if (value) {
        SP.UI.People.PeopleListManager.setList(value);
        SP.UI.People.PeopleListViewPane.get_view().$U_0 = value.get_typeOfList();
        SP.UI.People.PeopleListViewPane.sortPeopleList(true);
        SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.PeopleListViewPane.get_view().$A_0, SP.UI.People.PeopleListViewPane.get_people().get_bulkAddEnabled());
        SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.PeopleListViewPane.get_view().$g_0, SP.UI.People.PeopleListViewPane.get_people().get_bulkAddEnabled());
        SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.PeopleListViewPane.get_view().$f_0, SP.UI.People.PeopleListViewPane.get_people().get_bulkAddEnabled());
    }
    return value;
}
SP.UI.People.PeopleListViewPane.setListsForSelf = function SP_UI_People_PeopleListViewPane$setListsForSelf() {
    SP.UI.People.PeopleData.loadJsonData();
    if (SP.UI.People.PeopleData.isValid()) {
        SP.UI.People.PersonManager.addPerson(SP.UI.People.PeopleData.get_currentUserProperties());
        SP.UI.People.PeopleListViewPane.get_view().$X_0 = true;
        SP.UI.People.PeopleListViewPane.$12();
        if (SP.UI.People.PeopleListViewPane.get_view().$6_0 === -1 || SP.UI.People.PeopleListViewPane.get_view().$6_0 === 2) {
            SP.UI.People.PeopleListViewPane.get_view().$6_0 = 0;
        }
        var $v_0 = [ new SP.UI.People.MyFollowingList(), new SP.UI.People.MyFollowerList() ];
        SP.UI.People.PeopleListViewPane.$13($v_0, null);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if ($v_2.get_typeOfList() !== SP.UI.People.PeopleListViewPane.get_view().$6_0) {
                $v_2.loadPeople(false);
            }
        }
        SP.UI.People.PeopleListViewPane.get_view().$r_0 = SP.UI.People.SuggestionManager.htmlForSuggestions();
        SP.UI.People.PeopleListViewPane.get_view().$S_0.appendChild(SP.UI.People.PeopleListViewPane.get_view().$r_0);
        SP.UI.People.SuggestionManager.loadSuggestions();
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.displaySimpleErrorDialog(null);
    }
}
SP.UI.People.PeopleListViewPane.setListsForPerson = function SP_UI_People_PeopleListViewPane$setListsForPerson(accountName, displayName) {
    SP.UI.People.PeopleData.loadJsonData();
    if (SP.UI.People.PeopleData.isValid()) {
        SP.UI.People.PersonManager.addPerson(SP.UI.People.PeopleData.get_currentUserProperties());
        SP.UI.People.PeopleListViewPane.get_view().$X_0 = false;
        SP.UI.People.PeopleListViewPane.$12();
        if (SP.UI.People.PeopleListViewPane.get_view().$6_0 === -1) {
            SP.UI.People.PeopleListViewPane.get_view().$6_0 = 0;
        }
        var $v_0 = [ new SP.UI.People.FollowingList(displayName), new SP.UI.People.FollowerList(displayName), new SP.UI.People.InCommonList(displayName) ];
        SP.UI.People.PeopleListViewPane.$13($v_0, accountName);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if ($v_2.get_typeOfList() !== SP.UI.People.PeopleListViewPane.get_view().$6_0 && $v_2.get_typeOfList() !== 2 && !(!$v_2.get_typeOfList() && SP.UI.People.PeopleListViewPane.get_view().$6_0 === 2)) {
                $v_2.loadPeople(false);
            }
        }
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.displaySimpleErrorDialog(null);
    }
}
SP.UI.People.PeopleListViewPane.$13 = function SP_UI_People_PeopleListViewPane$$13($p0, $p1) {
    SP.UI.People.PeopleListViewPane.get_view().$p_0 = $p0;
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        SP.UI.People.PeopleListManager.setList($p0[$v_0]);
    }
    SP.UI.People.PeopleListViewPane.get_view().$z_0 = $p1;
    SP.UI.People.PeopleListViewPane.get_view().$O_0.innerHTML = '';
    SP.UI.People.PeopleListViewPane.get_view().$O_0.appendChild(SP.UI.People.PeopleListViewPane.get_view().$q_0);
    window.setTimeout(function() {
        SP.UI.People.PeopleListViewPane.switchToViewAndUpdateDropdown(SP.UI.People.PeopleListViewPane.get_view().$6_0);
    }, 0);
}
SP.UI.People.PeopleListViewPane.$12 = function SP_UI_People_PeopleListViewPane$$12() {
    var $v_0 = window.self.ajaxNavigate;
    var $v_1 = $v_0.get_search();
    if ($v_1.startsWith('?')) {
        $v_1 = $v_1.substring(1, $v_1.length);
    }
    var $v_2 = $v_1.split('&');
    for (var $$arr_3 = $v_2, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_3 = $$arr_3[$$idx_5];
        var $v_4 = $v_3.split('=');
        if ($v_4.length !== 2) {
            continue;
        }
        var $v_5 = $v_4[0];
        var $v_6 = $v_4[1];
        switch ($v_5.toLowerCase()) {
            case 'initialview':
                if ($v_6.toLowerCase() === 'following') {
                    SP.UI.People.PeopleListViewPane.get_view().$6_0 = 0;
                }
                else if ($v_6.toLowerCase() === 'followers') {
                    SP.UI.People.PeopleListViewPane.get_view().$6_0 = 1;
                }
                else if ($v_6.toLowerCase() === 'incommon') {
                    SP.UI.People.PeopleListViewPane.get_view().$6_0 = 2;
                }
                break;
        }
    }
}
SP.UI.People.PeopleListViewPane.switchToViewAndUpdateDropdown = function SP_UI_People_PeopleListViewPane$switchToViewAndUpdateDropdown(type) {
    var $v_0 = SP.UI.People.PeopleListManager.getList(type);
    if ($v_0) {
        $v_0.loadPeople(true);
    }
    var $v_1 = SP.UI.People.PeopleListManager.getIndexByView(type);
    SP.UI.People.PeopleListViewPane.updateDropdown($v_1);
    SP.UI.People.PeopleListViewPane.get_view().$b_0 = $v_1;
}
SP.UI.People.PeopleListViewPane.updateDropdown = function SP_UI_People_PeopleListViewPane$updateDropdown(viewIndex) {
    if (SP.UI.People.PeopleListViewPane.get_pivotControl() && viewIndex >= 0) {
        if (SP.UI.People.PeopleListViewPane.get_view().$b_0 >= 0) {
            SP.UI.People.PeopleListViewPane.get_pivotControl().AllOptions[SP.UI.People.PeopleListViewPane.get_view().$b_0].SelectedOption = false;
        }
        SP.UI.People.PeopleListViewPane.get_pivotControl().AllOptions[viewIndex].SelectedOption = true;
        SP.UI.People.PeopleListViewPane.get_pivotControl().Render();
    }
}
SP.UI.People.PeopleListViewPane.$11 = function SP_UI_People_PeopleListViewPane$$11($p0) {
    if ($p0 === SP.UI.People.PeopleListViewPane.get_view().$15_0) {
        SP.UI.People.PeopleListViewPane.$1H();
    }
    else if ($p0 === SP.UI.People.PeopleListViewPane.get_view().$16_0) {
        SP.UI.People.PeopleListViewPane.$1I();
    }
}
SP.UI.People.PeopleListViewPane.$1H = function SP_UI_People_PeopleListViewPane$$1H() {
    if (!SP.UI.People.PeopleListViewPane.get_view().$T_0) {
        SP.UI.People.PeopleListViewPane.get_view().$T_0 = true;
        SP.UI.People.PeopleListViewPane.sortPeopleList(true);
    }
}
SP.UI.People.PeopleListViewPane.$1I = function SP_UI_People_PeopleListViewPane$$1I() {
    if (SP.UI.People.PeopleListViewPane.get_view().$T_0) {
        SP.UI.People.PeopleListViewPane.get_view().$T_0 = false;
        SP.UI.People.PeopleListViewPane.sortPeopleList(true);
    }
}
SP.UI.People.PeopleListViewPane.sortPeopleList = function SP_UI_People_PeopleListViewPane$sortPeopleList(setToFirstPage) {
    if (SP.UI.People.PeopleListViewPane.get_people()) {
        if (SP.UI.People.PeopleListViewPane.get_view().$T_0) {
            SP.UI.People.PeopleListViewPane.get_people().sortPeopleByNameAscending();
        }
        else {
            SP.UI.People.PeopleListViewPane.get_people().sortPeopleByNameDescending();
        }
        if (setToFirstPage) {
            SP.UI.People.PeopleListViewPane.get_view().$7_0 = 1;
            SP.UI.People.PeopleListViewPane.updatePagingLinks();
        }
        SP.UI.People.PeopleListViewPane.updateViewPaneHTML();
    }
}
SP.UI.People.PeopleListViewPane.updateViewPaneHTML = function SP_UI_People_PeopleListViewPane$updateViewPaneHTML() {
    if (SP.UI.People.PeopleListViewPane.get_people()) {
        SP.UI.People.PeopleListViewPane.get_view().$F_0.innerHTML = '';
        SP.UI.People.PeopleListViewPane.get_view().$F_0.appendChild(SP.UI.People.PeopleListViewPane.get_people().htmlForList(SP.UI.People.PeopleListViewPane.$1J(), SP.UI.People.PeopleListViewPane.get_view().$P_0));
        ProcessImn();
        SP.UI.People.PeopleListViewPane.updatePagingLinks();
        SP.UI.People.PeopleListViewPane.updatePrivacyIcon();
    }
}
SP.UI.People.PeopleListViewPane.$18 = function SP_UI_People_PeopleListViewPane$$18($p0) {
    if (!SP.UI.People.PeopleListViewPane.get_pivotControl()) {
        return;
    }
    var $v_0 = (SP.UI.People.PeopleListViewPane.get_pivotControl().AllOptions) ? SP.UI.People.PeopleListViewPane.get_pivotControl().AllOptions.length : 0;
    var $v_1 = new ClientPivotControlMenuOption();
    $v_1.DisplayText = SP.UI.People.PeopleListViewPane.$x($p0);
    $v_1.Description = $p0.get_description();
    $v_1.OnClickAction = 'SP.UI.People.PeopleListViewPane.switchToViewAndUpdateDropdown(' + ($p0.get_typeOfList()).toString() + ');';
    SP.UI.People.PeopleListViewPane.get_pivotControl().AddMenuOption($v_1);
    SP.UI.People.PeopleListManager.setIndexByView($p0.get_typeOfList(), $v_0);
}
SP.UI.People.PeopleListViewPane.$x = function SP_UI_People_PeopleListViewPane$$x($p0) {
    var $v_0 = 0;
    switch ($p0.get_typeOfList()) {
        case 0:
            $v_0 = SP.UI.People.PeopleListViewPane.get_view().$w_0;
            break;
        case 1:
            $v_0 = SP.UI.People.PeopleListViewPane.get_view().$v_0;
            break;
        case 2:
            $v_0 = SP.UI.People.PeopleListViewPane.get_view().$y_0;
            break;
    }
    return String.format(SpsClient.ScriptResources.pivotControlViewTitleText, $p0.get_displayName(), $v_0);
}
SP.UI.People.PeopleListViewPane.$1J = function SP_UI_People_PeopleListViewPane$$1J() {
    return (SP.UI.People.PeopleListViewPane.get_view().$7_0 - 1) * SP.UI.People.PeopleListViewPane.get_view().$P_0;
}
SP.UI.People.PeopleListViewPane.$1A = function SP_UI_People_PeopleListViewPane$$1A() {
    if ((!SP.UI.People.PeopleListViewPane.get_people()) || (!SP.UI.People.PeopleListViewPane.get_people().get_length())) {
        return 0;
    }
    return (SP.UI.People.PeopleListViewPane.get_view().$7_0 - 1) * SP.UI.People.PeopleListViewPane.get_view().$P_0 + 1;
}
SP.UI.People.PeopleListViewPane.$1F = function SP_UI_People_PeopleListViewPane$$1F() {
    if (!SP.UI.People.PeopleListViewPane.get_people()) {
        return 0;
    }
    if (SP.UI.People.PeopleListViewPane.get_view().$7_0 === SP.UI.People.PeopleListViewPane.$W()) {
        return SP.UI.People.PeopleListViewPane.get_people().get_length();
    }
    return SP.UI.People.PeopleListViewPane.get_view().$7_0 * SP.UI.People.PeopleListViewPane.get_view().$P_0;
}
SP.UI.People.PeopleListViewPane.$W = function SP_UI_People_PeopleListViewPane$$W() {
    if (!SP.UI.People.PeopleListViewPane.get_people()) {
        return 1;
    }
    var $v_0 = SP.UI.People.PeopleListViewPane.get_people().get_length();
    if (!$v_0) {
        return 1;
    }
    var $v_1 = Math.floor($v_0 / SP.UI.People.PeopleListViewPane.get_view().$P_0);
    if ($v_0 % SP.UI.People.PeopleListViewPane.get_view().$P_0) {
        $v_1++;
    }
    return $v_1;
}
SP.UI.People.PeopleListViewPane.nextPage = function SP_UI_People_PeopleListViewPane$nextPage(e) {
    var $v_0 = SP.UI.People.PeopleListViewPane.$W();
    if (SP.UI.People.PeopleListViewPane.get_view().$7_0 >= $v_0) {
        SP.UI.People.PeopleListViewPane.get_view().$7_0 = $v_0;
        return;
    }
    SP.UI.People.PeopleListViewPane.get_view().$7_0++;
    SP.UI.People.PeopleListViewPane.updateViewPaneHTML();
    SP.UI.People.PeopleListViewPane.get_view().$F_0.scrollIntoView(true);
}
SP.UI.People.PeopleListViewPane.previousPage = function SP_UI_People_PeopleListViewPane$previousPage(e) {
    if (SP.UI.People.PeopleListViewPane.get_view().$7_0 <= 1) {
        SP.UI.People.PeopleListViewPane.get_view().$7_0 = 1;
        return;
    }
    SP.UI.People.PeopleListViewPane.get_view().$7_0--;
    SP.UI.People.PeopleListViewPane.updateViewPaneHTML();
    SP.UI.People.PeopleListViewPane.get_view().$F_0.scrollIntoView(true);
}
SP.UI.People.PeopleListViewPane.updatePagingLinks = function SP_UI_People_PeopleListViewPane$updatePagingLinks() {
    if (SP.UI.People.PeopleListViewPane.get_view().$7_0 < 2) {
        SP.UI.People.PeopleListViewPane.get_view().$G_0.disabled = true;
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, SP.UI.People.PeopleListViewPane.get_view().$G_0);
    }
    else {
        SP.UI.People.PeopleListViewPane.get_view().$G_0.disabled = false;
        SP.UI.MySiteCommon.CommonUIElements.display(SP.UI.People.PeopleListViewPane.get_view().$G_0);
    }
    if (SP.UI.People.PeopleListViewPane.get_view().$7_0 >= SP.UI.People.PeopleListViewPane.$W()) {
        SP.UI.People.PeopleListViewPane.get_view().$E_0.disabled = true;
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, SP.UI.People.PeopleListViewPane.get_view().$E_0);
    }
    else {
        SP.UI.People.PeopleListViewPane.get_view().$E_0.disabled = false;
        SP.UI.MySiteCommon.CommonUIElements.display(SP.UI.People.PeopleListViewPane.get_view().$E_0);
    }
    SP.UI.People.PeopleListViewPane.get_view().$o_0.nodeValue = String.format(SpsClient.ScriptResources.pageNumberText, SP.UI.People.PeopleListViewPane.$1A(), SP.UI.People.PeopleListViewPane.$1F());
    SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.PeopleListViewPane.get_view().$D_0, SP.UI.People.PeopleListViewPane.$W() > 1);
}
SP.UI.People.PeopleListViewPane.updatePrivacyIcon = function SP_UI_People_PeopleListViewPane$updatePrivacyIcon() {
    SP.UI.People.PeopleListViewPane.get_view().$Q_0.innerHTML = '';
    if (SP.UI.People.PeopleListViewPane.get_view().$X_0 && !SP.UI.People.PeopleListViewPane.get_view().$n_0) {
        var $v_0 = new SP.UI.MySiteCommon.MySitePrivacyIcon('PeoplePrivacyIcon', SpsClient.ScriptResources.peoplePrivacyIcon_Tooltip, SP.UI.People.PeopleListViewPane.get_view().$m_0);
        var $v_1 = $v_0.render();
        SP.UI.People.PeopleListViewPane.get_view().$Q_0.innerHTML = $v_1;
    }
}
SP.UI.People.PeopleListViewPane.updateListCount = function SP_UI_People_PeopleListViewPane$updateListCount(list, count) {
    switch (list) {
        case 0:
            SP.UI.People.PeopleListViewPane.get_view().$w_0 = count;
            break;
        case 1:
            SP.UI.People.PeopleListViewPane.get_view().$v_0 = count;
            break;
        case 2:
            SP.UI.People.PeopleListViewPane.get_view().$y_0 = count;
            break;
    }
    if (SP.UI.People.PeopleListViewPane.get_pivotControl()) {
        var $v_0 = SP.UI.People.PeopleListManager.getIndexByView(list);
        if ($v_0 >= 0) {
            var $v_1 = SP.UI.People.PeopleListViewPane.get_pivotControl().AllOptions[$v_0];
            $v_1.DisplayText = SP.UI.People.PeopleListViewPane.$x(SP.UI.People.PeopleListManager.getList(list));
        }
        SP.UI.People.PeopleListViewPane.get_pivotControl().Render();
    }
}
SP.UI.People.PeopleListViewPane.prototype = {
    $P_0: 30,
    $7_0: 1,
    $T_0: true,
    $10_0: false,
    $X_0: true,
    $z_0: null,
    $n_0: false,
    $m_0: null,
    $Z_0: null,
    $q_0: null,
    $F_0: null,
    $G_0: null,
    $E_0: null,
    $o_0: null,
    $w_0: 0,
    $v_0: 0,
    $y_0: 0,
    $D_0: null,
    $c_0: null,
    $15_0: 0,
    $16_0: 0,
    $A_0: null,
    $g_0: null,
    $f_0: null,
    $O_0: null,
    $Q_0: null,
    $S_0: null,
    $r_0: null,
    $p_0: null
}


SP.UI.People.PeopleList = function SP_UI_People_PeopleList() {
    this.$$d_comparePeopleByNameDescending = Function.createDelegate(this, this.comparePeopleByNameDescending);
    this.$$d_comparePeopleByNameAscending = Function.createDelegate(this, this.comparePeopleByNameAscending);
}
SP.UI.People.PeopleList.get_listViewer = function SP_UI_People_PeopleList$get_listViewer() {
    return SP.UI.People.PeopleData.get_currentUserProperties().get_accountName();
}
SP.UI.People.PeopleList.getPersonDivId = function SP_UI_People_PeopleList$getPersonDivId(accountName) {
    return SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonDivFor{0}', accountName);
}
SP.UI.People.PeopleList.addPictureFollowLinkAndNameToDiv = function SP_UI_People_PeopleList$addPictureFollowLinkAndNameToDiv(PersonDiv, person, prefix, includeFollowLink, isSuggestion) {
    var $v_0 = person.get_accountName();
    var $v_1 = ((!person.get_pictureUrl()) ? ((isSuggestion) ? SP.UI.MySiteCommon.CommonUIElements.get_profileImagePlaceholder32() : SP.UI.MySiteCommon.CommonUIElements.get_profileImagePlaceholder42()) : person.get_pictureUrl());
    var $v_2 = document.createElement('div');
    $v_2.className = 'ms-people-personImageDiv';
    $v_2.id = SP.UI.MySiteCommon.CommonUIElements.getValidId(prefix + 'PersonImageDivFor{0}', $v_0);
    SP.UI.MySiteCommon.PresenceManager.ensurePresenceJSLoaded(function() {
        SP.UI.MySiteCommon.PresenceManager.drawLyncUserImage($v_2, $v_0, person.get_displayName(), $v_1, person.get_userUrl(), person.get_email(), null, isSuggestion, true);
    });
    var $v_3 = document.createElement('div');
    $v_3.className = 'ms-people-personInfoDiv';
    $v_3.id = SP.UI.MySiteCommon.CommonUIElements.getValidId(prefix + 'PersonInfoDivFor{0}', $v_0);
    $v_3.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML(SP.UI.MySiteCommon.CommonUIElements.getValidId(prefix + 'PersonNameLinkFor{0}', $v_0), person.get_displayName(), 'ms-textLarge ms-subtleLink', person.get_userUrl(), '', true);
    if (includeFollowLink) {
        var $v_4 = SP.UI.People.FollowLinkManager.getLink($v_0);
        var $v_5 = $v_4.htmlForLink(prefix, true, true);
        if (isSuggestion) {
            $v_5.className = SP.UI.People.FollowLink.suggestionFollowLinkClass;
        }
        $v_3.appendChild(document.createElement('br'));
        $v_3.appendChild($v_5);
    }
    PersonDiv.appendChild($v_2);
    PersonDiv.appendChild($v_3);
    return $v_3;
}
SP.UI.People.PeopleList.$u = function SP_UI_People_PeopleList$$u($p0, $p1) {
    var $v_0 = new CalloutActionOptions();
    $v_0.text = ($p1.get_followingState()) ? SpsClient.ScriptResources.stopFollowingLinkText : SpsClient.ScriptResources.followLinkText;
    $v_0.onClickCallback = function($p1_0, $p1_1) {
        var $v_1 = (SP.UI.People.PeopleListViewPane.get_isOwnList()) ? SP.UI.People.FollowLink.calloutSourceOwnPage : SP.UI.People.FollowLink.calloutSourceOtherPage;
        $p1.onClick($v_1);
        $p0.close();
    };
    return $v_0;
}
SP.UI.People.PeopleList.$19 = function SP_UI_People_PeopleList$$19($p0, $p1) {
    var $v_0 = new CalloutActionOptions();
    $v_0.text = SpsClient.ScriptResources.mentionPersonLinkText;
    $v_0.onClickCallback = function($p1_0, $p1_1) {
        var $v_1 = SP.UI.MySiteCommon.CommonUIElements.ensureTrailingSlash(_spPageContextInfo.webAbsoluteUrl) + 'default.aspx?MentionPerson=' + SP.Utilities.HttpUtility.urlKeyValueEncode($p0) + '&MentionPersonName=' + SP.Utilities.HttpUtility.urlKeyValueEncode($p1);
        STSNavigate($v_1);
    };
    return $v_0;
}
SP.UI.People.PeopleList.prototype = {
    $3_0: null,
    
    get_typeOfList: function SP_UI_People_PeopleList$get_typeOfList() {
        return -1;
    },
    
    get_dependentList: function SP_UI_People_PeopleList$get_dependentList() {
        return -1;
    },
    
    get_displayName: function SP_UI_People_PeopleList$get_displayName() {
        return '';
    },
    
    get_description: function SP_UI_People_PeopleList$get_description() {
        return '';
    },
    
    get_emptyListString: function SP_UI_People_PeopleList$get_emptyListString() {
        return '';
    },
    
    get_length: function SP_UI_People_PeopleList$get_length() {
        return (!this.$3_0) ? 0 : this.$3_0.length;
    },
    
    get_lengthWithUpdates: function SP_UI_People_PeopleList$get_lengthWithUpdates() {
        return (!this.$3_0) ? 0 : this.$3_0.length;
    },
    
    get_bulkAddEnabled: function SP_UI_People_PeopleList$get_bulkAddEnabled() {
        return false;
    },
    
    get_followAndStopFollowingEnabled: function SP_UI_People_PeopleList$get_followAndStopFollowingEnabled() {
        return false;
    },
    
    get_isLoaded: function SP_UI_People_PeopleList$get_isLoaded() {
        return !!this.$3_0;
    },
    
    includePersonOnLoad: function SP_UI_People_PeopleList$includePersonOnLoad(person) {
        return true;
    },
    
    processAnyUpdates: function SP_UI_People_PeopleList$processAnyUpdates() {
    },
    
    loadPeople: function SP_UI_People_PeopleList$loadPeople(display) {
        if (this.get_isLoaded()) {
            this.processAnyUpdates();
            if (display) {
                SP.UI.People.PeopleListViewPane.set_people(this);
            }
        }
        else if (SP.UI.People.PeopleData.isValid()) {
            var $v_0 = (1 === this.get_typeOfList()) ? SP.UI.People.PeopleData.get_userFollowerList() : SP.UI.People.PeopleData.get_userFollowingList();
            this.setPeople($v_0);
            SP.UI.People.PersonCalloutSocialFeedManager.clearCalloutMicroFeedCache();
            if (display) {
                SP.UI.People.PeopleListViewPane.set_isMyPeopleListPublic(SP.UI.People.PeopleData.get_frontloadedPeopleManager().get_isMyPeopleListPublic());
                SP.UI.People.PeopleListViewPane.set_editProfileLink(SP.UI.People.PeopleData.get_frontloadedPeopleManager().get_editProfileLink());
                SP.UI.People.PeopleListViewPane.set_people(this);
            }
            SP.UI.People.PeopleListViewPane.refreshVisibilityOfSuggestions();
        }
        else if (display) {
            SP.UI.MySiteCommon.CommonUIElements.displaySimpleErrorDialog(null);
        }
    },
    
    setPeople: function SP_UI_People_PeopleList$setPeople(peopleList) {
        this.$3_0 = [];
        if (peopleList) {
            var $$enum_1 = peopleList.getEnumerator();
            while ($$enum_1.moveNext()) {
                var $v_1 = $$enum_1.get_current();
                if (this.includePersonOnLoad($v_1)) {
                    SP.UI.People.PersonManager.addPerson($v_1);
                    this.$3_0[this.$3_0.length] = $v_1.get_accountName();
                }
            }
        }
        this.updateListCount();
        var $v_0 = SP.UI.People.PeopleListManager.getList(this.get_dependentList());
        if ($v_0 && !$v_0.get_isLoaded()) {
            $v_0.setPeople(peopleList);
        }
    },
    
    updateListCount: function SP_UI_People_PeopleList$updateListCount() {
        SP.UI.People.PeopleListViewPane.updateListCount(this.get_typeOfList(), this.get_lengthWithUpdates());
    },
    
    contains: function SP_UI_People_PeopleList$contains(accountName) {
        if ((!this.$3_0) || (!accountName)) {
            return false;
        }
        return Array.contains(this.$3_0, accountName);
    },
    
    addPerson: function SP_UI_People_PeopleList$addPerson(accountName) {
        if (!this.contains(accountName)) {
            if (!this.$3_0) {
                this.$3_0 = [];
            }
            Array.add(this.$3_0, accountName);
            return true;
        }
        return false;
    },
    
    removePerson: function SP_UI_People_PeopleList$removePerson(accountName) {
        if (this.contains(accountName)) {
            Array.remove(this.$3_0, accountName);
        }
    },
    
    sortPeopleByNameAscending: function SP_UI_People_PeopleList$sortPeopleByNameAscending() {
        if (this.$3_0) {
            this.$3_0.sort(this.$$d_comparePeopleByNameAscending);
        }
    },
    
    comparePeopleByNameAscending: function SP_UI_People_PeopleList$comparePeopleByNameAscending(a, b) {
        var $v_0 = SP.UI.People.PersonManager.getPerson(a).get_displayName().toLowerCase();
        var $v_1 = SP.UI.People.PersonManager.getPerson(b).get_displayName().toLowerCase();
        return $v_0.localeCompare($v_1);
    },
    
    sortPeopleByNameDescending: function SP_UI_People_PeopleList$sortPeopleByNameDescending() {
        if (this.$3_0) {
            this.$3_0.sort(this.$$d_comparePeopleByNameDescending);
        }
    },
    
    comparePeopleByNameDescending: function SP_UI_People_PeopleList$comparePeopleByNameDescending(a, b) {
        return this.comparePeopleByNameAscending(b, a);
    },
    
    $1E_0: function SP_UI_People_PeopleList$$1E_0($p0) {
        var $v_0 = document.createElement('div');
        $v_0.className = 'ms-people-personDiv';
        if ((!this.$3_0) || ($p0 < 0) || ($p0 >= this.get_length())) {
            return $v_0;
        }
        var $v_1 = this.$3_0[$p0];
        var $v_2 = SP.UI.People.PersonManager.getPerson($v_1);
        $v_0.id = SP.UI.People.PeopleList.getPersonDivId($v_1);
        var $v_3 = SP.UI.People.PeopleList.addPictureFollowLinkAndNameToDiv($v_0, $v_2, SP.UI.People.FollowLink.personDivPrefixAndSource, false, false);
        if (!SP._yam) {
            var $v_4 = SP.UI.MySiteCommon.CommonUIElements.makeImageWithAltText(SP.UI.People.MySitePeopleImages.get_$d(), SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutTargetImageFor{0}', $v_1), 'ms-ellipsis-icon', String.format(SpsClient.ScriptResources.personCalloutTargetTooltip, $v_2.get_displayName()), SpsClient.ScriptResources.personCalloutTargetAltText);
            var $v_5 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler(SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutTargetFor{0}', $v_1), 'ms-lstItmLinkAnchor ms-ellipsis-a', $v_4, null, null, null);
            var $v_6 = document.createElement('div');
            $v_6.className = 'ms-people-personFollowDiv';
            if (!$v_2.get_isFollowed() && $v_2.get_accountName() !== SP.UI.People.PeopleList.get_listViewer()) {
                var $v_8 = SP.UI.People.FollowLinkManager.getLink($v_1);
                if ($v_8) {
                    $v_6.appendChild($v_8.htmlForLink(SP.UI.People.FollowLink.personDivPrefixAndSource, true, false));
                }
            }
            $v_0.appendChild($v_6);
            var $v_7 = document.createElement('div');
            $v_7.className = 'ms-people-personCalloutDiv';
            $v_7.appendChild($v_5);
            $v_0.appendChild($v_7);
            if (!SP.ScriptHelpers.isNullOrEmptyString($v_2.get_latestPost())) {
                var $v_9 = document.createElement('div');
                $v_9.id = SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonStatusFor{0}', $v_1);
                $v_9.className = 'ms-noWrap ms-textSmall ms-people-personStatus';
                SP.UI.MySiteCommon.CommonUIElements.setElementText($v_9, $v_2.get_latestPost());
                $v_3.appendChild(document.createElement('br'));
                $v_3.appendChild($v_9);
            }
            var $$t_M = this;
            SP.SOD.executeFunc('callout.js', 'Callout', function() {
                var $v_A = (SP.UI.People.PeopleList.get_listViewer() !== $v_1);
                var $v_B = new CalloutOptions();
                $v_B.launchPoint = $v_5;
                $v_B.ID = SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutFor{0}', $v_1);
                $v_B.title = SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('div', SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutTitleFor{0}', $v_1), '') + SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML(SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutNameLinkFor{0}', $v_1), $v_2.get_displayName(), 'ms-link', $v_2.get_userUrl(), '', true) + '</div>';
                $v_B.contentElement = SP.UI.People.PersonCalloutSocialFeedManager.getCalloutContentForUser($v_1);
                var $v_C = $get('contentBox');
                $v_B.boundingBox = ((!$v_C) ? document.body : $v_C);
                $v_B.beakOrientation = 'leftRight';
                $v_B.contentWidth = 300;
                $v_B.onOpenedCallback = function($p2_0) {
                    SP.UI.People.PersonCalloutSocialFeedManager.updateCalloutForUser($v_1);
                    if ($v_A) {
                        var $v_H = SP.UI.People.FollowLinkManager.getLink($v_1);
                        var $v_I = SP.UI.People.PeopleList.$u($p2_0, $v_H);
                        var $v_J = $p2_0.getActionMenu().getActions()[0];
                        $v_J.set($v_I);
                        $p2_0.refreshActions();
                    }
                };
                var $v_D = CalloutManager.createNew($v_B);
                if ($v_A) {
                    var $v_F = SP.UI.People.FollowLinkManager.getLink($v_1);
                    var $v_G = SP.UI.People.PeopleList.$u($v_D, $v_F);
                    $v_D.addAction(new CalloutAction($v_G));
                }
                var $v_E = SP.UI.People.PeopleList.$19($v_1, $v_2.get_displayName());
                $v_D.addAction(new CalloutAction($v_E));
            });
        }
        return $v_0;
    },
    
    htmlForList: function SP_UI_People_PeopleList$htmlForList(startIndex, numPerPage) {
        var $v_0 = document.createElement('div');
        $v_0.id = 'PeopleListDiv';
        $v_0.className = 'ms-people-personListDiv';
        if (!this.get_length()) {
            var $v_1 = document.createElement('p');
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, this.get_emptyListString());
            $v_0.appendChild($v_1);
        }
        else {
            for (var $v_2 = startIndex; $v_2 < startIndex + numPerPage && $v_2 < this.get_length(); $v_2++) {
                $v_0.appendChild(this.$1E_0($v_2));
            }
        }
        return $v_0;
    }
}


SP.UI.People.FollowingList = function SP_UI_People_FollowingList(displayName) {
    SP.UI.People.FollowingList.initializeBase(this);
    this.$9_1 = displayName;
}
SP.UI.People.FollowingList.prototype = {
    $9_1: null,
    
    get_typeOfList: function SP_UI_People_FollowingList$get_typeOfList() {
        return 0;
    },
    
    get_dependentList: function SP_UI_People_FollowingList$get_dependentList() {
        return 2;
    },
    
    get_displayName: function SP_UI_People_FollowingList$get_displayName() {
        return String.format(SpsClient.ScriptResources.followingDropdownText, this.$9_1);
    },
    
    get_description: function SP_UI_People_FollowingList$get_description() {
        return String.format(SpsClient.ScriptResources.followingDropdownTooltip, this.$9_1);
    },
    
    get_emptyListString: function SP_UI_People_FollowingList$get_emptyListString() {
        return String.format(SpsClient.ScriptResources.emptyFollowingListText, this.$9_1);
    }
}


SP.UI.People.MyFollowingList = function SP_UI_People_MyFollowingList() {
    SP.UI.People.MyFollowingList.initializeBase(this);
    this.$4_1 = [];
    this.$5_1 = [];
}
SP.UI.People.MyFollowingList.prototype = {
    $4_1: null,
    $5_1: null,
    
    get_typeOfList: function SP_UI_People_MyFollowingList$get_typeOfList() {
        return 0;
    },
    
    get_displayName: function SP_UI_People_MyFollowingList$get_displayName() {
        return SpsClient.ScriptResources.myFollowingDropdownText;
    },
    
    get_description: function SP_UI_People_MyFollowingList$get_description() {
        return SpsClient.ScriptResources.myFollowingDropdownTooltip;
    },
    
    get_emptyListString: function SP_UI_People_MyFollowingList$get_emptyListString() {
        return SpsClient.ScriptResources.emptyMyFollowingListText;
    },
    
    get_lengthWithUpdates: function SP_UI_People_MyFollowingList$get_lengthWithUpdates() {
        return this.get_length() + this.$4_1.length - this.$5_1.length;
    },
    
    get_bulkAddEnabled: function SP_UI_People_MyFollowingList$get_bulkAddEnabled() {
        return true;
    },
    
    get_followAndStopFollowingEnabled: function SP_UI_People_MyFollowingList$get_followAndStopFollowingEnabled() {
        return true;
    },
    
    updateList: function SP_UI_People_MyFollowingList$updateList(accountName, followingState) {
        if (followingState) {
            if (!this.contains(accountName) && !Array.contains(this.$4_1, accountName)) {
                Array.add(this.$4_1, accountName);
            }
            else if (Array.contains(this.$5_1, accountName)) {
                Array.remove(this.$5_1, accountName);
            }
        }
        else {
            if (this.contains(accountName) && !Array.contains(this.$5_1, accountName)) {
                Array.add(this.$5_1, accountName);
            }
            else if (Array.contains(this.$4_1, accountName)) {
                Array.remove(this.$4_1, accountName);
            }
        }
        this.updateListCount();
    },
    
    addImmediately: function SP_UI_People_MyFollowingList$addImmediately(accountName) {
        var $v_0 = this.addPerson(accountName);
        if (Array.contains(this.$4_1, accountName)) {
            Array.remove(this.$4_1, accountName);
        }
        if (Array.contains(this.$5_1, accountName)) {
            Array.remove(this.$5_1, accountName);
        }
        this.updateListCount();
        if ($v_0) {
            SP.UI.People.PeopleListViewPane.sortPeopleList(false);
        }
    },
    
    processAddUpdates: function SP_UI_People_MyFollowingList$processAddUpdates() {
        var $v_0 = false;
        for (var $v_1 = 0; $v_1 < this.$4_1.length; $v_1++) {
            $v_0 = !!($v_0 | this.addPerson(this.$4_1[$v_1]));
        }
        Array.clear(this.$4_1);
        this.updateListCount();
        return $v_0;
    },
    
    processAnyUpdates: function SP_UI_People_MyFollowingList$processAnyUpdates() {
        this.processAddUpdates();
        for (var $v_0 = 0; $v_0 < this.$5_1.length; $v_0++) {
            this.removePerson(this.$5_1[$v_0]);
        }
        Array.clear(this.$5_1);
        this.updateListCount();
    }
}


SP.UI.People.FollowerList = function SP_UI_People_FollowerList(displayName) {
    SP.UI.People.FollowerList.initializeBase(this);
    this.$9_1 = displayName;
    this.$I_1 = false;
    this.$J_1 = false;
}
SP.UI.People.FollowerList.prototype = {
    $9_1: null,
    $I_1: false,
    $J_1: false,
    
    get_typeOfList: function SP_UI_People_FollowerList$get_typeOfList() {
        return 1;
    },
    
    get_displayName: function SP_UI_People_FollowerList$get_displayName() {
        return String.format(SpsClient.ScriptResources.followersDropdownText, this.$9_1);
    },
    
    get_description: function SP_UI_People_FollowerList$get_description() {
        return String.format(SpsClient.ScriptResources.followersDropdownTooltip, this.$9_1);
    },
    
    get_emptyListString: function SP_UI_People_FollowerList$get_emptyListString() {
        return String.format(SpsClient.ScriptResources.emptyFollowerListText, this.$9_1);
    },
    
    get_lengthWithUpdates: function SP_UI_People_FollowerList$get_lengthWithUpdates() {
        return this.get_length() + ((this.$I_1) ? 1 : 0) - ((this.$J_1) ? 1 : 0);
    },
    
    updateList: function SP_UI_People_FollowerList$updateList(followingState) {
        if (followingState) {
            if (this.contains(SP.UI.People.PeopleList.get_listViewer())) {
                this.$I_1 = false;
            }
            else {
                this.$I_1 = true;
            }
            this.$J_1 = false;
        }
        else {
            if (this.contains(SP.UI.People.PeopleList.get_listViewer())) {
                this.$J_1 = true;
            }
            else {
                this.$J_1 = false;
            }
            this.$I_1 = false;
        }
        this.updateListCount();
    },
    
    processAnyUpdates: function SP_UI_People_FollowerList$processAnyUpdates() {
        if (this.$I_1) {
            this.addPerson(SP.UI.People.PeopleList.get_listViewer());
        }
        else if (this.$J_1) {
            this.removePerson(SP.UI.People.PeopleList.get_listViewer());
        }
        this.$I_1 = false;
        this.$J_1 = false;
        this.updateListCount();
    }
}


SP.UI.People.MyFollowerList = function SP_UI_People_MyFollowerList() {
    SP.UI.People.MyFollowerList.initializeBase(this);
}
SP.UI.People.MyFollowerList.prototype = {
    
    get_typeOfList: function SP_UI_People_MyFollowerList$get_typeOfList() {
        return 1;
    },
    
    get_displayName: function SP_UI_People_MyFollowerList$get_displayName() {
        return SpsClient.ScriptResources.myFollowersDropdownText;
    },
    
    get_description: function SP_UI_People_MyFollowerList$get_description() {
        return SpsClient.ScriptResources.myFollowersDropdownTooltip;
    },
    
    get_emptyListString: function SP_UI_People_MyFollowerList$get_emptyListString() {
        return SpsClient.ScriptResources.emptyMyFollowerListText;
    },
    
    get_bulkAddEnabled: function SP_UI_People_MyFollowerList$get_bulkAddEnabled() {
        return true;
    },
    
    get_followAndStopFollowingEnabled: function SP_UI_People_MyFollowerList$get_followAndStopFollowingEnabled() {
        return true;
    }
}


SP.UI.People.InCommonList = function SP_UI_People_InCommonList(displayName) {
    SP.UI.People.InCommonList.initializeBase(this);
    this.$9_1 = displayName;
    this.$4_1 = [];
    this.$5_1 = [];
}
SP.UI.People.InCommonList.prototype = {
    $9_1: null,
    $4_1: null,
    $5_1: null,
    
    get_typeOfList: function SP_UI_People_InCommonList$get_typeOfList() {
        return 2;
    },
    
    get_dependentList: function SP_UI_People_InCommonList$get_dependentList() {
        return 0;
    },
    
    get_displayName: function SP_UI_People_InCommonList$get_displayName() {
        return SpsClient.ScriptResources.inCommonDropdownText;
    },
    
    get_description: function SP_UI_People_InCommonList$get_description() {
        return String.format(SpsClient.ScriptResources.inCommonDropdownTooltip, this.$9_1);
    },
    
    get_emptyListString: function SP_UI_People_InCommonList$get_emptyListString() {
        return String.format(SpsClient.ScriptResources.emptyInCommonListText, this.$9_1);
    },
    
    get_lengthWithUpdates: function SP_UI_People_InCommonList$get_lengthWithUpdates() {
        return this.get_length() + this.$4_1.length - this.$5_1.length;
    },
    
    includePersonOnLoad: function SP_UI_People_InCommonList$includePersonOnLoad(person) {
        return person.get_isFollowed();
    },
    
    updateList: function SP_UI_People_InCommonList$updateList(accountName, followingState) {
        if (followingState) {
            var $v_0 = SP.UI.People.PeopleListManager.getList(0);
            if ($v_0 && $v_0.contains(accountName)) {
                if (!this.contains(accountName) && !Array.contains(this.$4_1, accountName)) {
                    Array.add(this.$4_1, accountName);
                }
                else if (Array.contains(this.$5_1, accountName)) {
                    Array.remove(this.$5_1, accountName);
                }
            }
        }
        else {
            if (this.contains(accountName) && !Array.contains(this.$5_1, accountName)) {
                Array.add(this.$5_1, accountName);
            }
            else if (Array.contains(this.$4_1, accountName)) {
                Array.remove(this.$4_1, accountName);
            }
        }
        this.updateListCount();
    },
    
    processAnyUpdates: function SP_UI_People_InCommonList$processAnyUpdates() {
        for (var $v_0 = 0; $v_0 < this.$4_1.length; $v_0++) {
            this.addPerson(this.$4_1[$v_0]);
        }
        Array.clear(this.$4_1);
        for (var $v_1 = 0; $v_1 < this.$5_1.length; $v_1++) {
            this.removePerson(this.$5_1[$v_1]);
        }
        Array.clear(this.$5_1);
        this.updateListCount();
    }
}


SP.UI.People.PersonCalloutSocialFeedManager = function SP_UI_People_PersonCalloutSocialFeedManager() {
    this.$R_0 = {};
}
SP.UI.People.PersonCalloutSocialFeedManager.get_$H = function SP_UI_People_PersonCalloutSocialFeedManager$get_$H() {
    if (!SP.UI.People.PersonCalloutSocialFeedManager.$2) {
        SP.UI.People.PersonCalloutSocialFeedManager.$2 = new SP.UI.People.PersonCalloutSocialFeedManager();
    }
    return SP.UI.People.PersonCalloutSocialFeedManager.$2;
}
SP.UI.People.PersonCalloutSocialFeedManager.clearCalloutMicroFeedCache = function SP_UI_People_PersonCalloutSocialFeedManager$clearCalloutMicroFeedCache() {
    SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$R_0 = {};
}
SP.UI.People.PersonCalloutSocialFeedManager.getCalloutContentForUser = function SP_UI_People_PersonCalloutSocialFeedManager$getCalloutContentForUser(accountName) {
    var $v_0 = SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$R_0[accountName.toLowerCase()];
    var $v_1 = document.createElement('div');
    $v_1.id = SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutContentsFor{0}', accountName);
    $v_1.className = 'ms-people-personCalloutContents';
    var $v_2 = document.createElement('div');
    $v_2.id = SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutMicroBlogFor{0}', accountName);
    $v_2.className = '';
    $v_2.innerHTML = ((!$v_0) ? SP.UI.MySiteCommon.CommonUIElements.createLoadingDiv(SpsClient.ScriptResources.initialFeedLoad, SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutLoadingContentsFor{0}', accountName), 'ms-people-alignCenter') : $v_0);
    $v_1.appendChild($v_2);
    return $v_1;
}
SP.UI.People.PersonCalloutSocialFeedManager.updateCalloutForUser = function SP_UI_People_PersonCalloutSocialFeedManager$updateCalloutForUser(accountName) {
    var $v_0 = SP.UI.People.FollowLinkManager.getLink(accountName);
    $v_0.refreshLinks();
    var $v_1 = $get(SP.UI.MySiteCommon.CommonUIElements.getValidId('PersonCalloutMicroBlogFor{0}', accountName));
    if ($v_1 && !SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$R_0[accountName.toLowerCase()]) {
        if (SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$h_0) {
            SP.UI.People.PersonCalloutSocialFeedManager.$e($v_1, null, accountName, SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$h_0);
        }
        else {
            SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
                var $v_2 = new SP.Social.SocialFeedOptions();
                $v_2.set_maxThreadCount(5);
                var $v_3 = SP.UI.People.PeopleData.get_socialManager().getFeedFor(accountName, $v_2);
                if (SP.UI.People.PeopleData.get_context().get_hasPendingRequest()) {
                    SP.UI.People.PeopleData.get_context().executeQueryAsync(function() {
                        SP.UI.People.PersonCalloutSocialFeedManager.$e($v_1, $v_3, accountName, null);
                    }, function($p2_0, $p2_1) {
                        var $v_4 = null;
                        switch ($p2_1.get_errorCode()) {
                            case 16:
                                $v_4 = SpsClient.ScriptResources.featureDisabledErrorMessage;
                                SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$h_0 = $v_4;
                                break;
                            case 9:
                            case 12:
                            case 11:
                            case 10:
                                break;
                            default:
                                $v_4 = SpsClient.ScriptResources.emptyFeedDueToError;
                                break;
                        }
                        SP.UI.People.PersonCalloutSocialFeedManager.$e($v_1, null, accountName, $v_4);
                    });
                }
            });
        }
    }
}
SP.UI.People.PersonCalloutSocialFeedManager.$e = function SP_UI_People_PersonCalloutSocialFeedManager$$e($p0, $p1, $p2, $p3) {
    SP.SOD.executeFunc('SP.UI.Microfeed.js', 'SP.UI.MicroFeed.SPMicroFeed', function() {
        $p0.innerHTML = '';
        if (!$p1 || !$p1.get_threads() || !$p1.get_threads().length) {
            var $v_0 = SP.UI.MicroFeed.SPMicroFeed.drawEmptyFeedThreadWithGivenMessage((!$p3) ? STSHtmlEncode(SpsClient.ScriptResources.emptyPersonCalloutText) : STSHtmlEncode($p3), '');
            $p0.appendChild($v_0);
        }
        else {
            var $v_1 = null;
            var $v_2 = null;
            for (var $v_3 = 0; $v_3 < $p1.get_threads().length; $v_3++) {
                $v_2 = $p1.get_threads()[$v_3];
                $v_1 = SP.UI.MicroFeed.SPMicroFeed.drawMinimalThread($v_2);
                $p0.appendChild($v_1);
            }
            if ($v_1) {
                $v_1.className += ' ms-microfeed-noBorder';
            }
        }
        SP.UI.People.PersonCalloutSocialFeedManager.get_$H().$R_0[$p2.toLowerCase()] = $p0.innerHTML;
    });
}
SP.UI.People.PersonCalloutSocialFeedManager.prototype = {
    $R_0: null,
    $h_0: null
}


SP.UI.People.SuggestionManager = function SP_UI_People_SuggestionManager() {
    this.$C_0 = [];
    this.$8_0 = 0;
}
SP.UI.People.SuggestionManager.get_$0 = function SP_UI_People_SuggestionManager$get_$0() {
    if (!SP.UI.People.SuggestionManager.$2) {
        SP.UI.People.SuggestionManager.$2 = new SP.UI.People.SuggestionManager();
    }
    return SP.UI.People.SuggestionManager.$2;
}
SP.UI.People.SuggestionManager.get_numberOfSuggestions = function SP_UI_People_SuggestionManager$get_numberOfSuggestions() {
    return SP.UI.People.SuggestionManager.get_$0().$C_0.length;
}
SP.UI.People.SuggestionManager.get_$M = function SP_UI_People_SuggestionManager$get_$M() {
    return SP.UI.People.SuggestionManager.get_$0().$17_0;
}
SP.UI.People.SuggestionManager.set_$M = function SP_UI_People_SuggestionManager$set_$M($p0) {
    SP.UI.People.SuggestionManager.get_$0().$17_0 = $p0;
    return $p0;
}
SP.UI.People.SuggestionManager.$14 = function SP_UI_People_SuggestionManager$$14() {
    var $v_0 = SP.UI.People.SuggestionManager.get_$0().$8_0 > 0 || SP.UI.People.SuggestionManager.get_numberOfSuggestions() > SP.UI.People.SuggestionManager.get_$0().$L_0;
    SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.SuggestionManager.get_$0().$K_0, $v_0);
    SP.UI.MySiteCommon.CommonUIElements.displayOrHide(SP.UI.People.SuggestionManager.get_$0().$Y_0, $v_0);
}
SP.UI.People.SuggestionManager.$1C = function SP_UI_People_SuggestionManager$$1C($p0) {
    if (SP.UI.People.SuggestionManager.get_$0().$8_0 + SP.UI.People.SuggestionManager.get_$0().$L_0 >= SP.UI.People.SuggestionManager.get_numberOfSuggestions()) {
        SP.UI.People.SuggestionManager.get_$0().$8_0 = 0;
    }
    else {
        SP.UI.People.SuggestionManager.get_$0().$8_0 += SP.UI.People.SuggestionManager.get_$0().$L_0;
    }
    SP.UI.People.SuggestionManager.$1K();
    SP.UI.People.SuggestionManager.$s();
}
SP.UI.People.SuggestionManager.$1K = function SP_UI_People_SuggestionManager$$1K() {
    var $v_0 = [];
    var $v_1 = -1;
    for (var $v_2 = 0; $v_2 < SP.UI.People.SuggestionManager.get_numberOfSuggestions(); $v_2++) {
        var $v_3 = SP.UI.People.SuggestionManager.get_$0().$C_0[$v_2];
        if (!SP.UI.People.FollowLinkManager.getLink($v_3).get_followingState()) {
            $v_0[$v_0.length] = $v_3;
            if ($v_1 < 0 && $v_2 >= SP.UI.People.SuggestionManager.get_$0().$8_0) {
                $v_1 = $v_0.length - 1;
            }
        }
    }
    SP.UI.People.SuggestionManager.get_$0().$C_0 = $v_0;
    SP.UI.People.SuggestionManager.get_$0().$8_0 = (($v_1 === -1 || SP.UI.People.SuggestionManager.get_numberOfSuggestions() <= SP.UI.People.SuggestionManager.get_$0().$L_0) ? 0 : $v_1);
}
SP.UI.People.SuggestionManager.loadSuggestions = function SP_UI_People_SuggestionManager$loadSuggestions() {
    if (SP.UI.People.PeopleData.isValid()) {
        SP.UI.People.SuggestionManager.get_$0().$C_0 = [];
        var $v_0 = SP.UI.People.PeopleData.get_userSuggestionList();
        if ($v_0) {
            var $$enum_1 = $v_0.getEnumerator();
            while ($$enum_1.moveNext()) {
                var $v_1 = $$enum_1.get_current();
                SP.UI.People.PersonManager.addPerson($v_1);
                SP.UI.People.SuggestionManager.get_$0().$C_0[SP.UI.People.SuggestionManager.get_numberOfSuggestions()] = $v_1.get_accountName();
            }
        }
        SP.UI.People.SuggestionManager.$s();
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.displaySimpleErrorDialog(null);
    }
}
SP.UI.People.SuggestionManager.$1D = function SP_UI_People_SuggestionManager$$1D($p0) {
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
        SP.UI.People.PeopleData.get_peopleManager().hideSuggestion($p0);
        var $v_0 = $get(SP.UI.MySiteCommon.CommonUIElements.getValidId('HideSuggestionLinkFor{0}', $p0));
        var $v_1 = SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon('', '');
        if ($v_0 && $v_0.parentNode) {
            $v_0.parentNode.replaceChild($v_1, $v_0);
        }
        if (SP.UI.People.PeopleData.get_context().get_hasPendingRequest()) {
            SP.UI.People.PeopleData.get_context().executeQueryAsync(function() {
                Array.remove(SP.UI.People.SuggestionManager.get_$0().$C_0, $p0);
                if (SP.UI.People.SuggestionManager.get_$0().$8_0 >= SP.UI.People.SuggestionManager.get_numberOfSuggestions()) {
                    SP.UI.People.SuggestionManager.get_$0().$8_0 = 0;
                    SP.UI.People.SuggestionManager.$s();
                }
                else {
                    var $v_2 = $get(SP.UI.MySiteCommon.CommonUIElements.getValidId('SuggestionDivFor{0}', $p0));
                    if ($v_2 && $v_2.parentNode) {
                        $v_2.parentNode.removeChild($v_2);
                        if (SP.UI.People.SuggestionManager.get_$0().$8_0 + SP.UI.People.SuggestionManager.get_$0().$L_0 <= SP.UI.People.SuggestionManager.get_numberOfSuggestions()) {
                            SP.UI.People.SuggestionManager.$t(SP.UI.People.SuggestionManager.get_$0().$C_0[SP.UI.People.SuggestionManager.get_$0().$8_0 + SP.UI.People.SuggestionManager.get_$0().$L_0 - 1]);
                            ProcessImn();
                        }
                        SP.UI.People.SuggestionManager.$14();
                    }
                }
            }, function($p2_0, $p2_1) {
                SP.UI.MySiteCommon.CommonUIElements.displaySimpleErrorDialog($p2_1.get_message());
            });
        }
    });
}
SP.UI.People.SuggestionManager.$t = function SP_UI_People_SuggestionManager$$t($p0) {
    var $v_0 = SP.UI.People.PersonManager.getPerson($p0);
    var $v_1 = document.createElement('div');
    $v_1.id = SP.UI.MySiteCommon.CommonUIElements.getValidId('SuggestionDivFor{0}', $p0);
    $v_1.className = 'ms-people-suggestionDiv';
    var $v_2 = SP.UI.People.PeopleList.addPictureFollowLinkAndNameToDiv($v_1, $v_0, SP.UI.People.FollowLink.suggestionIdPrefixAndSource, true, true);
    var $v_3 = SP.UI.MySiteCommon.CommonUIElements.makeImageAltSameAsTitle(SP.UI.People.MySitePeopleImages.get_$d(), 'HideSuggestionImageFor{0}', 'ms-microfeed-deleteButtonImage', String.format(SpsClient.ScriptResources.hideSuggestionTooltip, $v_0.get_displayName()));
    var $v_4 = document.createElement('span');
    $v_4.className = 'ms-microfeed-deleteButtonImageParent';
    $v_4.appendChild($v_3);
    var $v_5 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler(SP.UI.MySiteCommon.CommonUIElements.getValidId('HideSuggestionLinkFor{0}', $p0), 'ms-people-hideSuggestionLink', $v_4, null, null, function() {
        SP.UI.People.SuggestionManager.$1D($p0);
    });
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_5);
    var $v_6 = document.createElement('div');
    $v_6.className = 'ms-people-hideSuggestionDiv';
    $v_6.appendChild($v_5);
    $v_1.appendChild($v_6);
    $addHandler($v_1, 'mouseover', function() {
        SP.UI.MySiteCommon.CommonUIElements.display($v_5);
    });
    $addHandler($v_5, 'focus', function() {
        SP.UI.MySiteCommon.CommonUIElements.display($v_5);
    });
    $addHandler($v_1, 'mouseout', function() {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_5);
    });
    $addHandler($v_5, 'blur', function() {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_5);
    });
    SP.UI.People.SuggestionManager.get_$M().appendChild($v_1);
}
SP.UI.People.SuggestionManager.$s = function SP_UI_People_SuggestionManager$$s() {
    if (SP.UI.People.SuggestionManager.get_$M()) {
        SP.UI.People.SuggestionManager.get_$M().innerHTML = '';
        for (var $v_0 = SP.UI.People.SuggestionManager.get_$0().$8_0; $v_0 < SP.UI.People.SuggestionManager.get_$0().$8_0 + SP.UI.People.SuggestionManager.get_$0().$L_0 && $v_0 < SP.UI.People.SuggestionManager.get_numberOfSuggestions(); $v_0++) {
            SP.UI.People.SuggestionManager.$t(SP.UI.People.SuggestionManager.get_$0().$C_0[$v_0]);
        }
    }
    SP.UI.People.SuggestionManager.$14();
    SP.UI.People.PeopleListViewPane.refreshVisibilityOfSuggestions();
    ProcessImn();
}
SP.UI.People.SuggestionManager.htmlForSuggestions = function SP_UI_People_SuggestionManager$htmlForSuggestions() {
    var $v_0 = document.createElement('div');
    $v_0.id = 'SuggestionsDiv';
    $v_0.className = '';
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
    var $v_1 = document.createElement('h2');
    $v_1.id = 'SuggestionsTitleDiv';
    $v_1.className = '';
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, SpsClient.ScriptResources.suggestionsTitleText);
    SP.UI.People.SuggestionManager.set_$M(document.createElement('div'));
    SP.UI.People.SuggestionManager.get_$M().id = 'SuggestionsListDiv';
    SP.UI.People.SuggestionManager.get_$M().className = 'ms-people-suggestionsListDiv';
    SP.UI.People.SuggestionManager.get_$0().$K_0 = document.createElement('div');
    SP.UI.People.SuggestionManager.get_$0().$K_0.id = 'MoreSuggestionsDiv';
    SP.UI.People.SuggestionManager.get_$0().$K_0.className = '';
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, SP.UI.People.SuggestionManager.get_$0().$K_0);
    SP.UI.People.SuggestionManager.get_$0().$Y_0 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler('MoreSuggestionsLink', 'ms-commandLink', null, SpsClient.ScriptResources.moreSuggestionsText, SpsClient.ScriptResources.moreSuggestionsTooltip, SP.UI.People.SuggestionManager.$1C);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, SP.UI.People.SuggestionManager.get_$0().$Y_0);
    SP.UI.People.SuggestionManager.get_$0().$K_0.appendChild(SP.UI.People.SuggestionManager.get_$0().$Y_0);
    $v_0.appendChild($v_1);
    $v_0.appendChild(SP.UI.People.SuggestionManager.get_$M());
    $v_0.appendChild(SP.UI.People.SuggestionManager.get_$0().$K_0);
    return $v_0;
}
SP.UI.People.SuggestionManager.prototype = {
    $C_0: null,
    $17_0: null,
    $K_0: null,
    $Y_0: null,
    $8_0: 0,
    $L_0: 5
}


SP.UI.People.PeopleData = function SP_UI_People_PeopleData() {
}
SP.UI.People.PeopleData.$k = function SP_UI_People_PeopleData$$k() {
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
        SP.UI.People.PeopleData.$N = SP.ClientContext.get_current();
        SP.UI.People.PeopleData.$V = SP.Social.SocialFeedManager.newObject(SP.UI.People.PeopleData.$N);
        SP.UI.People.PeopleData.$a = SP.UserProfiles.PeopleManager.newObject(SP.UI.People.PeopleData.$N);
    });
}
SP.UI.People.PeopleData.loadJsonData = function SP_UI_People_PeopleData$loadJsonData() {
    var $v_0 = [ 'PeopleManagerJsonDataID', 'CurrentUserPropertiesJsonDataID', 'FollowingJsonDataID', 'FollowersJsonDataID', 'SuggestionsJsonDataID' ];
    var $v_1 = $get('PeopleWebPartJsonDataID');
    if (null !== $v_1) {
        SP.UI.People.PeopleData.$B.loadCacheFromJsonData($v_0);
        SP.UI.People.PeopleData.$B.set_isNoExpiration(true);
        $v_1.parentNode.removeChild($v_1);
    }
}
SP.UI.People.PeopleData.isValid = function SP_UI_People_PeopleData$isValid() {
    return SP.UI.People.PeopleData.$B.isCacheValid();
}
SP.UI.People.PeopleData.get_context = function SP_UI_People_PeopleData$get_context() {
    if (!SP.UI.People.PeopleData.$N) {
        SP.UI.People.PeopleData.$k();
    }
    return SP.UI.People.PeopleData.$N;
}
SP.UI.People.PeopleData.get_socialManager = function SP_UI_People_PeopleData$get_socialManager() {
    if (!SP.UI.People.PeopleData.$V) {
        SP.UI.People.PeopleData.$k();
    }
    return SP.UI.People.PeopleData.$V;
}
SP.UI.People.PeopleData.get_peopleManager = function SP_UI_People_PeopleData$get_peopleManager() {
    if (!SP.UI.People.PeopleData.$a) {
        SP.UI.People.PeopleData.$k();
    }
    return SP.UI.People.PeopleData.$a;
}
SP.UI.People.PeopleData.get_frontloadedPeopleManager = function SP_UI_People_PeopleData$get_frontloadedPeopleManager() {
    return ((SP.UI.People.PeopleData.isValid()) ? SP.UI.People.PeopleData.$B.getDataObject('PeopleManagerJsonDataID') : null);
}
SP.UI.People.PeopleData.get_currentUserProperties = function SP_UI_People_PeopleData$get_currentUserProperties() {
    return ((SP.UI.People.PeopleData.isValid()) ? SP.UI.People.PeopleData.$B.getDataObject('CurrentUserPropertiesJsonDataID') : null);
}
SP.UI.People.PeopleData.get_userFollowingList = function SP_UI_People_PeopleData$get_userFollowingList() {
    return ((SP.UI.People.PeopleData.isValid()) ? SP.UI.People.PeopleData.$B.getDataObject('FollowingJsonDataID') : null);
}
SP.UI.People.PeopleData.get_userFollowerList = function SP_UI_People_PeopleData$get_userFollowerList() {
    return ((SP.UI.People.PeopleData.isValid()) ? SP.UI.People.PeopleData.$B.getDataObject('FollowersJsonDataID') : null);
}
SP.UI.People.PeopleData.get_userSuggestionList = function SP_UI_People_PeopleData$get_userSuggestionList() {
    return ((SP.UI.People.PeopleData.isValid()) ? SP.UI.People.PeopleData.$B.getDataObject('SuggestionsJsonDataID') : null);
}


SP.UI.People.MySitePeopleIdsAndClasses.registerClass('SP.UI.People.MySitePeopleIdsAndClasses');
SP.UI.People.PeopleSortMenu.registerClass('SP.UI.People.PeopleSortMenu', SP.UI.MySiteCommon.MySiteMenu);
SP.UI.People.MySitePeopleImages.registerClass('SP.UI.People.MySitePeopleImages');
SP.UI.People.PeopleListManager.registerClass('SP.UI.People.PeopleListManager');
SP.UI.People.FollowMultiplePeopleDialog.registerClass('SP.UI.People.FollowMultiplePeopleDialog');
SP.UI.People.PeopleListViewPane.registerClass('SP.UI.People.PeopleListViewPane');
SP.UI.People.PeopleList.registerClass('SP.UI.People.PeopleList');
SP.UI.People.FollowingList.registerClass('SP.UI.People.FollowingList', SP.UI.People.PeopleList);
SP.UI.People.MyFollowingList.registerClass('SP.UI.People.MyFollowingList', SP.UI.People.PeopleList);
SP.UI.People.FollowerList.registerClass('SP.UI.People.FollowerList', SP.UI.People.PeopleList);
SP.UI.People.MyFollowerList.registerClass('SP.UI.People.MyFollowerList', SP.UI.People.PeopleList);
SP.UI.People.InCommonList.registerClass('SP.UI.People.InCommonList', SP.UI.People.PeopleList);
SP.UI.People.PersonCalloutSocialFeedManager.registerClass('SP.UI.People.PersonCalloutSocialFeedManager');
SP.UI.People.SuggestionManager.registerClass('SP.UI.People.SuggestionManager');
SP.UI.People.PeopleData.registerClass('SP.UI.People.PeopleData');
function sp_ui_people_initialize() {
SP.UI.People.MySitePeopleIdsAndClasses.floatLeftClass = 'ms-people-floatLeft';
SP.UI.People.MySitePeopleIdsAndClasses.floatRightClass = 'ms-people-floatRight';
SP.UI.People.MySitePeopleIdsAndClasses.centerAlignClass = 'ms-people-alignCenter';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewId = 'PeopleListView';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewClass = 'ms-people-peopleListView';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewLeftPaneId = 'PeopleListViewLeftPane';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewLeftPaneClass = 'ms-people-floatLeft ms-people-peopleListViewLeftPane';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewRightPaneId = 'PeopleListViewRightPane';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewRightPaneClass = 'ms-people-peopleListViewRightPane';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewHeaderId = 'PeopleListViewHeader';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewHeaderClass = 'ms-people-peopleListViewHeaderDiv';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewFooterId = 'PeopleListViewFooter';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewFooterClass = 'ms-people-alignCenter';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewMainId = 'PeopleListViewMain';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListViewMainClass = 'ms-clear';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListDivId = 'PeopleListDiv';
SP.UI.People.MySitePeopleIdsAndClasses.peopleListDivClass = 'ms-people-personListDiv';
SP.UI.People.MySitePeopleIdsAndClasses.sortDivId = 'SortDiv';
SP.UI.People.MySitePeopleIdsAndClasses.sortDivClass = 'ms-people-peopleListViewSortDiv';
SP.UI.People.MySitePeopleIdsAndClasses.navigationSpanId = 'NavigationSpan';
SP.UI.People.MySitePeopleIdsAndClasses.navigationSpanClass = 'ms-metadata';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleDivId = 'FollowMultiplePeopleDiv';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleDivClass = 'ms-people-followMultiplePeople ms-textXLarge ms-soften';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleLinkId = 'FollowMultiplePeopleLink';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleLinkClass = 'ms-heroCommandLink';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionsDivId = 'SuggestionsDiv';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionsDivClass = '';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionsTitleDivId = 'SuggestionsTitleDiv';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionsTitleDivClass = '';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionsListDivId = 'SuggestionsListDiv';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionsListDivClass = 'ms-people-suggestionsListDiv';
SP.UI.People.MySitePeopleIdsAndClasses.moreSuggestionsDivId = 'MoreSuggestionsDiv';
SP.UI.People.MySitePeopleIdsAndClasses.moreSuggestionsDivClass = '';
SP.UI.People.MySitePeopleIdsAndClasses.moreSuggestionsLinkId = 'MoreSuggestionsLink';
SP.UI.People.MySitePeopleIdsAndClasses.moreSuggestionsLinkClass = 'ms-commandLink';
SP.UI.People.MySitePeopleIdsAndClasses.privacyIconHeaderClass = 'ms-people-privacyIconHeader';
SP.UI.People.MySitePeopleIdsAndClasses.personDivId = 'PersonDivFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personDivClass = 'ms-people-personDiv';
SP.UI.People.MySitePeopleIdsAndClasses.personStatusId = 'PersonStatusFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personStatusClass = 'ms-noWrap ms-textSmall ms-people-personStatus';
SP.UI.People.MySitePeopleIdsAndClasses.personNameLinkId = 'PersonNameLinkFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personNameLinkClass = 'ms-textLarge ms-subtleLink';
SP.UI.People.MySitePeopleIdsAndClasses.personImageDivId = 'PersonImageDivFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personImageDivClass = 'ms-people-personImageDiv';
SP.UI.People.MySitePeopleIdsAndClasses.personInfoDivId = 'PersonInfoDivFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personInfoDivClass = 'ms-people-personInfoDiv';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutTargetId = 'PersonCalloutTargetFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutTargetClass = 'ms-lstItmLinkAnchor ms-ellipsis-a';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutTargetImageId = 'PersonCalloutTargetImageFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutTargetImageClass = 'ms-ellipsis-icon';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutContentsId = 'PersonCalloutContentsFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutLoadingContentsId = 'PersonCalloutLoadingContentsFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutContentsClass = 'ms-people-personCalloutContents';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutNameLinkId = 'PersonCalloutNameLinkFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutNameLinkClass = 'ms-link';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutTitleId = 'PersonCalloutTitleFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutTitleClass = '';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutMicroBlogId = 'PersonCalloutMicroBlogFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutMicroBlogClass = '';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionDivId = 'SuggestionDivFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.suggestionDivClass = 'ms-people-suggestionDiv';
SP.UI.People.MySitePeopleIdsAndClasses.hideSuggestionLinkId = 'HideSuggestionLinkFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.hideSuggestionLinkClass = 'ms-people-hideSuggestionLink';
SP.UI.People.MySitePeopleIdsAndClasses.hideSuggestionImageId = 'HideSuggestionImageFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.hideSuggestionImageClass = 'ms-microfeed-deleteButtonImage';
SP.UI.People.MySitePeopleIdsAndClasses.hideSuggestionImageParentSpanClass = 'ms-microfeed-deleteButtonImageParent';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleImageLinkId = 'FollowMultiplePeopleImageLink';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleImageLinkClass = 'ms-profile-followHeroImageParent';
SP.UI.People.MySitePeopleIdsAndClasses.leftHeaderSpanId = 'LeftHeaderSpan';
SP.UI.People.MySitePeopleIdsAndClasses.privacyIconHeaderSpanId = 'PrivacyIconHeaderSpan';
SP.UI.People.MySitePeopleIdsAndClasses.previousLinkId = 'PreviousLink';
SP.UI.People.MySitePeopleIdsAndClasses.previousPageImageId = 'PreviousPageImage';
SP.UI.People.MySitePeopleIdsAndClasses.nextLinkId = 'NextLink';
SP.UI.People.MySitePeopleIdsAndClasses.sortMenuId = 'SortMenu';
SP.UI.People.MySitePeopleIdsAndClasses.nextPageImageId = 'NextPageImage';
SP.UI.People.MySitePeopleIdsAndClasses.followingLinkId = 'FollowingLink';
SP.UI.People.MySitePeopleIdsAndClasses.followersLinkId = 'FollowersLink';
SP.UI.People.MySitePeopleIdsAndClasses.calloutId = 'PersonCalloutFor{0}';
SP.UI.People.MySitePeopleIdsAndClasses.peopleViewPivotParentId = 'PeopleViewSelectorPivotParent';
SP.UI.People.MySitePeopleIdsAndClasses.peopleViewPivotContainerId = 'PeopleViewSelectorPivotContainer';
SP.UI.People.MySitePeopleIdsAndClasses.peoplePrivacyIconId = 'PeoplePrivacyIcon';
SP.UI.People.MySitePeopleIdsAndClasses.clearDivClass = 'ms-clear';
SP.UI.People.MySitePeopleIdsAndClasses.navigationImageLeftClass = 'ms-people-pagingArrowLeftImage';
SP.UI.People.MySitePeopleIdsAndClasses.navigationImageRightClass = 'ms-people-pagingArrowRightImage';
SP.UI.People.MySitePeopleIdsAndClasses.navigationImageParentSpanClass = 'ms-people-pagingArrowImageParent';
SP.UI.People.MySitePeopleIdsAndClasses.navigationLinkClass = 'ms-people-navigationLink';
SP.UI.People.MySitePeopleIdsAndClasses.borderlessMicrofeedThread = 'ms-microfeed-noBorder';
SP.UI.People.MySitePeopleIdsAndClasses.personCalloutDivClass = 'ms-people-personCalloutDiv';
SP.UI.People.MySitePeopleIdsAndClasses.personFollowDivClass = 'ms-people-personFollowDiv';
SP.UI.People.MySitePeopleIdsAndClasses.hideSuggestionDivClass = 'ms-people-hideSuggestionDiv';
SP.UI.People.MySitePeopleIdsAndClasses.followMultiplePeopleImageClass = 'ms-profile-followHeroImage';
SP.UI.People.PeopleListManager.$2 = null;
SP.UI.People.FollowMultiplePeopleDialog.$2 = null;
SP.UI.People.PeopleListViewPane.$2 = null;
SP.UI.People.PersonCalloutSocialFeedManager.$2 = null;
SP.UI.People.SuggestionManager.$2 = null;
SP.UI.People.PeopleData.$B = new SP.UI.MySiteCommon.DataCache();
SP.UI.People.PeopleData.$a = null;
SP.UI.People.PeopleData.$V = null;
SP.UI.People.PeopleData.$N = null;
};
sp_ui_people_initialize();

RegisterModuleInit("sp.ui.people.js", sp_ui_people_initialize);

ExecuteAndRegisterBeginEndFunctions("sp.ui.people.js", SP.UI.People.PeopleListViewPane.clearInstance, null, null);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.People.js");
