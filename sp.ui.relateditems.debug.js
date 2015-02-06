Type.registerNamespace('SP.UI.RelatedItems');
SP.UI.RelatedItems.AddUrlDialog = function SP_UI_RelatedItems_AddUrlDialog($p0, $p1) {
    this.$$d_$X_0 = Function.createDelegate(this, this.$X_0);
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$$d_$Y_0 = Function.createDelegate(this, this.$Y_0);
    this.$$d_$V_0 = Function.createDelegate(this, this.$V_0);
    this.$H_0 = $p1;
    this.$6_0 = $p0;
    this.$Z_0();
};
SP.UI.RelatedItems.AddUrlDialog.prototype = {
    $H_0: null,
    $6_0: null,
    $B_0: null,
    $F_0: null,
    $C_0: null,
    $D_0: null,
    $5_0: null,
    $Z_0: function SP_UI_RelatedItems_AddUrlDialog$$Z_0() {
        var $v_0 = this.$6_0.id + '_urltextbox';
        var $v_1 = this.$6_0.id + '_addbutton';
        var $v_2 = this.$6_0.id + '_cancelbutton';
        var $v_3 = document.createElement('div');

        $v_3.className = 'ms-relateditems-addurl';
        $v_3.innerHTML = SP.Res.relatedItems_AddUrlDialog_TextBoxLabel;
        $v_3.appendChild(document.createElement('br'));
        this.$5_0 = document.createElement('input');
        this.$5_0.id = $v_0;
        this.$5_0.type = 'text';
        this.$5_0.size = 40;
        $v_3.appendChild(this.$5_0);
        this.$6_0.appendChild($v_3);
        var $v_4 = document.createElement('div');

        $v_4.className = 'ms-relateditems-addurlbuttons';
        this.$C_0 = document.createElement('input');
        this.$C_0.id = $v_1;
        this.$C_0.type = 'button';
        this.$C_0.value = SP.Res.relatedItems_AddUrlDialog_AddButtonTitle;
        $v_4.appendChild(this.$C_0);
        this.$D_0 = document.createElement('input');
        this.$D_0.id = $v_2;
        this.$D_0.type = 'button';
        this.$D_0.value = SP.Res.relatedItems_AddUrlDialog_CancelButtonTitle;
        $v_4.appendChild(this.$D_0);
        this.$6_0.appendChild($v_4);
        this.$B_0 = new SP.UI.DialogOptions();
        this.$B_0.title = SP.Res.relatedItems_AddUrlDialog_Title;
        this.$B_0.height = 80;
        this.$B_0.html = this.$6_0;
        this.$B_0.dialogReturnValueCallback = this.$$d_$V_0;
    },
    $U_0: function SP_UI_RelatedItems_AddUrlDialog$$U_0($p0) {
        this.$F_0.close(1);
    },
    $X_0: function SP_UI_RelatedItems_AddUrlDialog$$X_0($p0) {
        this.$F_0.close(0);
    },
    show: function SP_UI_RelatedItems_AddUrlDialog$show() {
        this.$F_0 = SP.UI.ModalDialog.showModalDialog(this.$B_0);
        this.$5_0.focus();
        $addHandler(this.$5_0, 'keydown', this.$$d_$Y_0);
        $addHandler(this.$C_0, 'click', this.$$d_$U_0);
        $addHandler(this.$D_0, 'click', this.$$d_$X_0);
    },
    $Y_0: function SP_UI_RelatedItems_AddUrlDialog$$Y_0($p0) {
        if ($p0.keyCode === 13) {
            this.$F_0.close(1);
        }
        else if ($p0.keyCode === 27) {
            this.$F_0.close(0);
        }
    },
    $V_0: function SP_UI_RelatedItems_AddUrlDialog$$V_0($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = this.$5_0.value;

            this.$H_0($v_0);
        }
        else if (!$p0) {
            this.$H_0(null);
        }
    }
};
SP.UI.RelatedItems.PermissionsInitializer = function SP_UI_RelatedItems_PermissionsInitializer() {
};
SP.UI.RelatedItems.PermissionsInitializer.prototype = {
    High: 0,
    Low: 0
};
function Context() {
    this.Templates = {};
}
Context.prototype = {
    CurrentItem: null,
    listName: null,
    listTemplate: null,
    ListSchema: null,
    OnPreRender: null,
    OnPostRender: null,
    CurrentFieldSchema: null
};
function FormContext() {
}
FormContext.prototype = {
    controlMode: 0,
    fieldName: null,
    fieldSchema: null,
    fieldValue: null,
    itemAttributes: null,
    listAttributes: null,
    webAttributes: null
};
function UserInfo() {
}
UserInfo.prototype = {
    email: null,
    id: null,
    picture: null,
    sip: null,
    title: null,
    value: null
};
SP.UI.RelatedItems.GlobalTemplateOverrides = function SP_UI_RelatedItems_GlobalTemplateOverrides() {
};
SP.UI.RelatedItems.GlobalTemplateOverrides.$$cctor = function SP_UI_RelatedItems_GlobalTemplateOverrides$$$cctor() {
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(SP.UI.RelatedItems.RelatedItemsFieldTemplate.createRenderingContextOverrides());
};
SP.UI.RelatedItems.RelatedItemsFieldTemplate = function SP_UI_RelatedItems_RelatedItemsFieldTemplate() {
};
SP.UI.RelatedItems.RelatedItemsFieldTemplate.createRenderingContextOverrides = function SP_UI_RelatedItems_RelatedItemsFieldTemplate$createRenderingContextOverrides() {
    var $v_0 = new Context();

    $v_0.Templates['Fields'] = {
        RelatedItems: {
            DisplayForm: SP.UI.RelatedItems.RelatedItemsFieldTemplate.renderRelatedItemsField,
            View: SP.UI.RelatedItems.RelatedItemsFieldTemplate.renderRelatedItemsFieldColumn
        }
    };
    $v_0.OnPreRender = SP.UI.RelatedItems.RelatedItemsFieldTemplate.renderRelatedItemsPreRender;
    return $v_0;
};
SP.UI.RelatedItems.RelatedItemsFieldTemplate.renderRelatedItemsPreRender = function SP_UI_RelatedItems_RelatedItemsFieldTemplate$renderRelatedItemsPreRender(context) {
    if (context && context.ListSchema && context.ListSchema.Field) {
        for (var $$arr_1 = context.ListSchema.Field, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];

            if ($v_0.FieldType === 'RelatedItems') {
                $v_0.AllowGridEditing = false;
            }
        }
    }
};
SP.UI.RelatedItems.RelatedItemsFieldTemplate.renderRelatedItemsFieldColumn = function SP_UI_RelatedItems_RelatedItemsFieldTemplate$renderRelatedItemsFieldColumn(context) {
    return context.CurrentItem['RelatedItems'];
};
SP.UI.RelatedItems.RelatedItemsFieldTemplate.renderRelatedItemsField = function SP_UI_RelatedItems_RelatedItemsFieldTemplate$renderRelatedItemsField(context) {
    var $v_0;
    var $v_1;
    var $v_2;
    var $v_3;
    var $v_4 = SPClientTemplates.Utility.GetFormContextForCurrentField(context);
    var $v_5 = !SP.ScriptUtility.isNullOrUndefined($v_4);

    if ($v_5) {
        if (SP.ScriptUtility.isNullOrUndefined($v_4.itemAttributes) || SP.ScriptUtility.isNullOrUndefined($v_4.itemAttributes.Id) || SP.ScriptUtility.isNullOrUndefined($v_4.itemAttributes.FsObjType) || SP.ScriptUtility.isNullOrUndefined($v_4.listAttributes) || SP.ScriptUtility.isNullOrUndefined($v_4.listAttributes.Id)) {
            return SP.Res.relatedItemsFieldRenderer_AttributesMissing;
        }
        else {
            $v_0 = $v_4.itemAttributes.Id;
            $v_1 = $v_4.itemAttributes.FsObjType;
            $v_2 = $v_4.listAttributes.Id;
            $v_3 = $v_4.fieldValue;
            var $v_6 = new SP.UI.RelatedItems.PermissionsInitializer();

            $v_6.High = $v_4.itemAttributes.EffectiveBasePermissionsHigh;
            $v_6.Low = $v_4.itemAttributes.EffectiveBasePermissionsLow;
            var $v_7 = new SP.BasePermissions();

            $v_7.fromJson($v_6);
            var $v_8 = $v_7.has(3);
            var $v_9 = !$v_3 || !$v_3.length;

            if ($v_1 === '1') {
                return SP.Res.relatedItemsFieldRenderer_TypeFile;
            }
            else {
                var $v_A = new SP.UI.RelatedItems.RelatedItemsFormRenderer($v_0, $v_2, $v_8);

                return $v_A.ShowOnePage($v_9);
            }
        }
    }
    else {
        return SP.Res.relatedItemsFieldRenderer_ZeroRelatedItems;
    }
};
SP.UI.RelatedItems.RelatedItemsServerSideFieldTemplate = function SP_UI_RelatedItems_RelatedItemsServerSideFieldTemplate() {
};
SP.UI.RelatedItems.RelatedItemsServerSideFieldTemplate.RenderRelatedItemsField = function SP_UI_RelatedItems_RelatedItemsServerSideFieldTemplate$RenderRelatedItemsField(elementId, itemId, listId, canEditListItems, relatedItemsEmpty) {
    var $v_0 = $get(elementId);
    var $v_1 = new SP.UI.RelatedItems.RelatedItemsFormRenderer(itemId, listId, canEditListItems);

    $v_0.innerHTML = $v_1.ShowOnePage(relatedItemsEmpty);
};
SP.UI.RelatedItems.RelatedItemsFormRenderer = function SP_UI_RelatedItems_RelatedItemsFormRenderer($p0, $p1, $p2) {
    this.$$d_$W_0 = Function.createDelegate(this, this.$W_0);
    this.$$d_$S_0 = Function.createDelegate(this, this.$S_0);
    this.$$d_$R_0 = Function.createDelegate(this, this.$R_0);
    this.$$d_RenderFooterTemplate = Function.createDelegate(this, this.RenderFooterTemplate);
    this.$$d_RenderItemTemplate = Function.createDelegate(this, this.RenderItemTemplate);
    this.$$d_RenderBodyTemplate = Function.createDelegate(this, this.RenderBodyTemplate);
    this.$$d_RenderViewTemplate = Function.createDelegate(this, this.RenderViewTemplate);
    this.$8_0 = $p0;
    this.$E_0 = $p1;
    this.$9_0 = false;
    this.$I_0 = $p2;
    if ($p2) {
        SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControl = this;
    }
    SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControlReadOnly = this;
};
SP.UI.RelatedItems.RelatedItemsFormRenderer.$a = function SP_UI_RelatedItems_RelatedItemsFormRenderer$$a($p0) {
    return !!$p0.addEventListener;
};
SP.UI.RelatedItems.RelatedItemsFormRenderer.ShowRemoveButton = function SP_UI_RelatedItems_RelatedItemsFormRenderer$ShowRemoveButton(removeId) {
    var $v_0 = $get(removeId);

    $v_0.style.display = 'inline';
    var $v_1 = $get(removeId.replace('_ri_item_remove', '_ri_item_title_div'));

    $v_1.style.marginRight = (Sys.UI.DomElement.getBounds($v_0)).width + 8 + 'px';
};
SP.UI.RelatedItems.RelatedItemsFormRenderer.HideRemoveButton = function SP_UI_RelatedItems_RelatedItemsFormRenderer$HideRemoveButton(removeId) {
    var $v_0 = $get(removeId);

    if ($v_0) {
        $v_0.style.display = 'none';
        var $v_1 = $get(removeId.replace('_ri_item_remove', '_ri_item_title_div'));

        $v_1.style.marginRight = '0px';
    }
};
SP.UI.RelatedItems.RelatedItemsFormRenderer.prototype = {
    $G_0: false,
    $J_0: null,
    $K_0: false,
    $3_0: null,
    $8_0: 0,
    $E_0: null,
    $4_0: 0,
    $2_0: null,
    $9_0: false,
    $I_0: false,
    $A_0: null,
    $7_0: null,
    ShowOnePage: function SP_UI_RelatedItems_RelatedItemsFormRenderer$ShowOnePage(relatedItemsEmpty) {
        var $v_0 = !!this.$3_0 && this.$3_0.id === this.$A_0;
        var $$t_2 = this;

        return this.$N_0(function() {
            if ($v_0) {
                ($get($$t_2.$A_0)).focus();
            }
        }, relatedItemsEmpty);
    },
    $N_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$N_0($p0, $p1) {
        this.$9_0 = true;
        this.$G_0 = false;
        var $v_0 = SP.ClientContext.get_current();

        if (!$p1) {
            var $v_1 = SP.RelatedItemManager.getPageOneRelatedItems($v_0, this.$E_0, this.$8_0);

            this.$4_0 = 0;
            var $$t_9 = this, $$t_A = this;

            $v_0.executeQueryAsync(function($p1_0, $p1_1) {
                $$t_9.$4_0 = $v_1.length;
                $$t_9.$2_0 = [];
                for (var $v_2 = 0; $v_2 < $$t_9.$4_0 && $v_2 < 3; $v_2++) {
                    Array.add($$t_9.$2_0, $v_1[$v_2]);
                }
                $$t_9.Render();
                if ($p0) {
                    $p0();
                }
            }, function($p1_0, $p1_1) {
                $$t_A.$G_0 = true;
                $$t_A.$J_0 = $v_0.get_traceCorrelationId();
                $$t_A.Render();
            });
        }
        else {
            var $$t_B = this;

            window.setTimeout(function() {
                $$t_B.$4_0 = 0;
                $$t_B.$2_0 = [];
                $$t_B.Render();
                if ($p0) {
                    $p0();
                }
            }, 0);
        }
        return String.format('<div id=\'{0}\' class=\'ms-relateditems-core\'></div>', this.$1_0());
    },
    ShowAll: function SP_UI_RelatedItems_RelatedItemsFormRenderer$ShowAll() {
        var $v_0 = !!this.$3_0 && this.$3_0.id === this.$A_0;
        var $$t_1 = this;

        return this.$M_0(function() {
            if ($v_0) {
                ($get($$t_1.$A_0)).focus();
            }
        });
    },
    $M_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$M_0($p0) {
        this.$9_0 = false;
        this.$G_0 = false;
        var $v_0 = SP.ClientContext.get_current();

        this.$2_0 = SP.RelatedItemManager.getRelatedItems($v_0, this.$E_0, this.$8_0);
        this.$4_0 = 0;
        var $$t_6 = this, $$t_7 = this;

        $v_0.executeQueryAsync(function($p1_0, $p1_1) {
            $$t_6.$4_0 = $$t_6.$2_0.length;
            $$t_6.Render();
            if ($p0) {
                $p0();
            }
        }, function($p1_0, $p1_1) {
            $$t_7.$G_0 = true;
            $$t_7.$J_0 = $v_0.get_traceCorrelationId();
            $$t_7.Render();
        });
        return String.format('<div id=\'{0}\' class=\'ms-relateditems-core\'></div>', this.$1_0());
    },
    Render: function SP_UI_RelatedItems_RelatedItemsFormRenderer$Render() {
        var $v_0 = $get(this.$1_0());
        var $v_1 = {};

        $v_1['View'] = this.$$d_RenderViewTemplate;
        $v_1['Body'] = this.$$d_RenderBodyTemplate;
        $v_1['Item'] = this.$$d_RenderItemTemplate;
        $v_1['Footer'] = this.$$d_RenderFooterTemplate;
        var $v_2 = {};

        $v_2['ListData'] = this.$2_0;
        $v_2['Templates'] = $v_1;
        SPClientRenderer.Render($v_0, $v_2);
        this.$b_0($v_0);
    },
    $b_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$b_0($p0) {
        if (SP.UI.RelatedItems.RelatedItemsFormRenderer.$a($p0)) {
            $p0.addEventListener('focus', this.$$d_$R_0, true);
            $p0.addEventListener('blur', this.$$d_$S_0, true);
        }
        else {
            $addHandler($p0, 'focusin', this.$$d_$R_0);
            $addHandler($p0, 'focusout', this.$$d_$S_0);
        }
    },
    $R_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$R_0($p0) {
        this.$K_0 = true;
        this.$3_0 = $p0.target;
        if (this.$3_0.id.endsWith('_ri_item_title')) {
            SP.UI.RelatedItems.RelatedItemsFormRenderer.ShowRemoveButton(this.$3_0.id.replace('_ri_item_title', '_ri_item_remove'));
        }
    },
    $S_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$S_0($p0) {
        this.$K_0 = false;
        if ($p0.target.id.endsWith('_ri_item_title') || $p0.target.id.endsWith('_ri_item_remove')) {
            var $v_0 = new SP.UI.RelatedItems.RelatedItemsFocusHandler(this, $p0.target);

            $v_0.handleLostFocus();
        }
    },
    RenderBodyTemplate: function SP_UI_RelatedItems_RelatedItemsFormRenderer$RenderBodyTemplate(renderCtx) {
        var $v_0 = renderCtx.ListData.length;

        if (!$v_0) {
            return '';
        }
        var $v_1 = '<div>';

        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            renderCtx.CurrentIdx = $v_2;
            renderCtx.CurrentItem = renderCtx.ListData[$v_2];
            $v_1 += this.RenderItemTemplate(renderCtx);
        }
        $v_1 += '</div>';
        return $v_1;
    },
    RenderViewTemplate: function SP_UI_RelatedItems_RelatedItemsFormRenderer$RenderViewTemplate(renderCtx) {
        if (this.$G_0) {
            return String.format(SP.Res.relatedItems_RelatedItemsControl_GetError, this.$J_0);
        }
        var $v_0 = renderCtx.RenderHeader(renderCtx);

        $v_0 += renderCtx.RenderBody(renderCtx);
        $v_0 += renderCtx.RenderFooter(renderCtx);
        return $v_0;
    },
    RenderItemTemplate: function SP_UI_RelatedItems_RelatedItemsFormRenderer$RenderItemTemplate(renderCtx) {
        var $v_0 = this.$1_0() + '_' + renderCtx.CurrentIdx + '_ri_item';
        var $v_1 = this.$1_0() + '_' + renderCtx.CurrentIdx + '_ri_item_title';
        var $v_2 = this.$1_0() + '_' + renderCtx.CurrentIdx + '_ri_item_title_div';
        var $v_3 = this.$1_0() + '_' + renderCtx.CurrentIdx + '_ri_item_remove';
        var $v_4 = renderCtx.CurrentItem;
        var $v_5 = $v_4.get_url();

        if (!SP.ScriptUtility.isNullOrUndefined($v_4.get_title()) && !SP.ScriptUtility.isNullOrEmptyString($v_4.get_title())) {
            $v_5 = $v_4.get_title();
        }
        var $v_6;

        if (SP.ScriptUtility.isNullOrUndefined($v_4.get_iconUrl())) {
            $v_6 = SP.UI.RelatedItems.Utility.defaultIcon;
        }
        else {
            $v_6 = SP.Utilities.Utility.getImageUrl($v_4.get_iconUrl());
        }
        var $v_7 = ($v_4.get_url()).lastIndexOf('.');
        var $v_8 = '';

        if ($v_7 > 0) {
            $v_8 = ($v_4.get_url()).substring($v_7 + 1, ($v_4.get_url()).length);
        }
        var $v_9 = String.format('<div id=\'{0}\' class=\'ms-relateditems-item\' onmouseover=\"javascript:SP.UI.RelatedItems.RelatedItemsFormRenderer.ShowRemoveButton(\'{1}\')\" onmouseout=\"javascript:SP.UI.RelatedItems.RelatedItemsFormRenderer.HideRemoveButton(\'{1}\')\">', $v_0, $v_3);

        $v_9 += String.format('<img src=\'{1}\' alt=\'{2}\' class=\'ms-floatLeft ms-relateditems-icon\' />', $v_4.get_url(), $v_6, SP.Res.relatedItems_RelatedItemsControl_ImgAlt);
        $v_9 += String.format('<div class=\'ms-relateditems-title ms-noWrap\' id=\'{3}\'><a href=\'{0}\' id=\'{1}\' target=\'_top\'>{2}</a></div>', $v_4.get_url(), $v_1, SP.Utilities.HttpUtility.htmlEncode($v_5), $v_2);
        if (this.$I_0) {
            $v_9 += String.format('<div class=\'ms-relateditems-deletelink\'><a class=\"ms-calloutLink\" style=\'display: none;\' href=\'javascript:;\' onClick=\'javascript:{0}.DeleteItem({1});\' id=\'{2}\'>{3}</a></div>', 'SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControl', renderCtx.CurrentIdx, $v_3, SP.Res.relatedItems_RelatedItemsControl_RemoveItem);
        }
        else {
            $v_9 += String.format('<div class=\'ms-relateditems-deletelink ms-calloutLinkDisabled\'><a id=\'{0}\'></a></div>', $v_3);
        }
        $v_9 += '</div>';
        return $v_9;
    },
    RenderFooterTemplate: function SP_UI_RelatedItems_RelatedItemsFormRenderer$RenderFooterTemplate(renderCtx) {
        this.$A_0 = this.$1_0() + '_ri_show_all';
        this.$7_0 = this.$1_0() + '_ri_add_related_items';
        var $v_0 = this.$4_0 < 9 && this.$I_0;
        var $v_1 = '<div>';

        if (this.$4_0 > 3) {
            if (this.$9_0) {
                $v_1 += String.format('<a class=\"ms-calloutLink\" href=\'javascript:;\' onClick=\'javascript:{0}.ShowAll();\' id=\'{1}\'><span class=\'ms-relateditems-showmore-span\'><img class=\'ms-relateditems-showmore-icon\' src=\'{3}\' /></span>{2}</a>', 'SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControlReadOnly', this.$A_0, SP.Res.relatedItems_RelatedItemsControl_ShowMore, '/_layouts/15/images/spcommon.png?rev=23');
            }
            else {
                $v_1 += String.format('<a class=\"ms-calloutLink\" href=\'javascript:;\' onClick=\'javascript:{0}.ShowOnePage();\' id=\'{1}\'><span class=\'ms-relateditems-showless-span\'><img class=\'ms-relateditems-showless-icon\' src=\'{3}\' /></span>{2}</a>', 'SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControlReadOnly', this.$A_0, SP.Res.relatedItems_RelatedItemsControl_ShowFewer, '/_layouts/15/images/spcommon.png?rev=23');
            }
        }
        $v_1 += '<span style=\'float: right;\'>';
        if ($v_0) {
            $v_1 += String.format('<a class=\"ms-calloutLink\" href=\"javascript:{0}.AddRelatedItemUrl()\" id=\'{2}\'>{1}</a>', 'SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControl', SP.Res.relatedItems_RelatedItemsControl_AddRelatedItem, this.$7_0);
        }
        else {
            $v_1 += String.format('<a class=\"ms-calloutLinkDisabled\" id=\'{0}\'></a>', this.$7_0);
        }
        $v_1 += '</span>';
        $v_1 += '</div>';
        return $v_1;
    },
    AddRelatedItem: function SP_UI_RelatedItems_RelatedItemsFormRenderer$AddRelatedItem(toListId, toItemId) {
        var $v_0 = SP.ClientContext.get_current();

        SP.RelatedItemManager.addSingleLink($v_0, this.$E_0, this.$8_0, null, toListId, toItemId, null, true);
        var $v_1 = SP.UI.Notify.addNotification(SP.Res.relatedItems_RelatedItemsControl_Adding, true);
        var $$t_8 = this, $$t_9 = this;

        $v_0.executeQueryAsync(function($p1_0, $p1_1) {
            SP.UI.Notify.removeNotification($v_1);
            makeItemVisible($get($$t_8.$1_0()));
            if ($$t_8.$9_0) {
                $$t_8.ShowOnePage(false);
            }
            else {
                $$t_8.ShowAll();
            }
        }, function($p1_0, $p1_1) {
            SP.UI.Notify.removeNotification($v_1);
            SP.UI.Notify.addNotification(!$p1_1.get_errorValue() ? $p1_1.get_message() : $p1_1.get_errorValue(), false);
        });
    },
    AddRelatedItemUrl: function SP_UI_RelatedItems_RelatedItemsFormRenderer$AddRelatedItemUrl() {
        var $v_0 = document.createElement('div');

        if (SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsPicker) {
            var $v_1 = SP.ClientContext.get_current();
            var $v_2 = $v_1.get_web();

            $v_1.load($v_2, ['Url']);
            var $$t_9 = this, $$t_A = this;

            $v_1.executeQueryAsync(function($p1_0, $p1_1) {
                SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsPicker($v_2.get_url(), $$t_9.$$d_$W_0);
            }, function($p1_0, $p1_1) {
                var $v_3 = new SP.UI.RelatedItems.AddUrlDialog($v_0, $$t_A.$$d_$W_0);

                $v_3.show();
            });
        }
        else {
            var $v_4 = new SP.UI.RelatedItems.AddUrlDialog($v_0, this.$$d_$W_0);

            $v_4.show();
        }
    },
    $W_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$W_0($p0) {
        if (!$p0) {
            ($get(this.$7_0)).focus();
        }
        else {
            var $v_0 = SP.ClientContext.get_current();
            var $v_1 = $v_0.get_web();

            SP.RelatedItemManager.addSingleLinkToUrl($v_0, this.$E_0, this.$8_0, $p0, true);
            var $v_2 = SP.UI.Notify.addNotification(SP.Res.relatedItems_RelatedItemsControl_Adding, true);
            var $$t_8 = this, $$t_9 = this;

            $v_0.executeQueryAsync(function($p1_0, $p1_1) {
                SP.UI.Notify.removeNotification($v_2);
                if ($$t_8.$9_0) {
                    $$t_8.$N_0(function() {
                        ($get($$t_8.$7_0)).focus();
                    }, false);
                }
                else {
                    $$t_8.$M_0(function() {
                        ($get($$t_8.$7_0)).focus();
                    });
                }
            }, function($p1_0, $p1_1) {
                SP.UI.Notify.removeNotification($v_2);
                SP.UI.Notify.addNotification(!$p1_1.get_errorValue() ? $p1_1.get_message() : $p1_1.get_errorValue(), false);
                ($get($$t_9.$7_0)).focus();
            });
        }
    },
    DeleteItem: function SP_UI_RelatedItems_RelatedItemsFormRenderer$DeleteItem(index) {
        var $v_0 = SP.ClientContext.get_current();
        var $v_1 = this.$2_0[index];

        SP.RelatedItemManager.deleteSingleLink($v_0, this.$E_0, this.$8_0, null, $v_1.get_listId(), $v_1.get_itemId(), $v_1.get_webId(), true);
        var $v_2 = SP.UI.Notify.addNotification(SP.Res.relatedItems_RelatedItemsControl_Deleting, true);
        var $$t_8 = this, $$t_9 = this;

        $v_0.executeQueryAsync(function($p1_0, $p1_1) {
            $$t_8.$O_0($v_2, index);
        }, function($p1_0, $p1_1) {
            $$t_9.$O_0($v_2, index);
            SP.UI.Notify.addNotification(!$p1_1.get_errorValue() ? $p1_1.get_message() : $p1_1.get_errorValue(), false);
        });
    },
    $O_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$O_0($p0, $p1) {
        SP.UI.Notify.removeNotification($p0);
        if (this.$9_0) {
            var $$t_2 = this;

            this.$N_0(function() {
                $$t_2.$P_0($p1);
            }, false);
        }
        else {
            var $$t_3 = this;

            this.$M_0(function() {
                $$t_3.$P_0($p1);
            });
        }
    },
    $P_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$P_0($p0) {
        var $v_0 = $p0;

        if ($p0 >= this.$2_0.length) {
            $p0 = this.$2_0.length - 1;
        }
        if ($p0 >= 0) {
            ($get(this.$1_0() + '_' + $p0 + '_ri_item_title')).focus();
        }
    },
    $1_0: function SP_UI_RelatedItems_RelatedItemsFormRenderer$$1_0() {
        return 'relatedItems-' + this.$8_0;
    }
};
SP.UI.RelatedItems.RelatedItemsFocusHandler = function SP_UI_RelatedItems_RelatedItemsFocusHandler($p0, $p1) {
    this.$$d_$T_0 = Function.createDelegate(this, this.$T_0);
    this.$L_0 = $p0;
    this.$Q_0 = $p1;
};
SP.UI.RelatedItems.RelatedItemsFocusHandler.prototype = {
    $L_0: null,
    $Q_0: null,
    $T_0: function SP_UI_RelatedItems_RelatedItemsFocusHandler$$T_0() {
        var $v_0 = this.$Q_0.id.replace('_ri_item_title', '');

        $v_0 = $v_0.replace('_ri_item_remove', '');
        if (!this.$L_0.$K_0 || !this.$L_0.$3_0.id.startsWith($v_0)) {
            SP.UI.RelatedItems.RelatedItemsFormRenderer.HideRemoveButton($v_0 + '_ri_item_remove');
        }
    },
    handleLostFocus: function SP_UI_RelatedItems_RelatedItemsFocusHandler$handleLostFocus() {
        window.setTimeout(this.$$d_$T_0, 20);
    }
};
SP.UI.RelatedItems.Utility = function SP_UI_RelatedItems_Utility() {
};
SP.UI.RelatedItems.ScriptApplicationManager = function SP_UI_RelatedItems_ScriptApplicationManager() {
};
SP.UI.RelatedItems.AddUrlDialog.registerClass('SP.UI.RelatedItems.AddUrlDialog');
SP.UI.RelatedItems.PermissionsInitializer.registerClass('SP.UI.RelatedItems.PermissionsInitializer');
Context.registerClass('Context');
FormContext.registerClass('FormContext');
UserInfo.registerClass('UserInfo');
SP.UI.RelatedItems.GlobalTemplateOverrides.registerClass('SP.UI.RelatedItems.GlobalTemplateOverrides');
SP.UI.RelatedItems.RelatedItemsFieldTemplate.registerClass('SP.UI.RelatedItems.RelatedItemsFieldTemplate');
SP.UI.RelatedItems.RelatedItemsServerSideFieldTemplate.registerClass('SP.UI.RelatedItems.RelatedItemsServerSideFieldTemplate');
SP.UI.RelatedItems.RelatedItemsFormRenderer.registerClass('SP.UI.RelatedItems.RelatedItemsFormRenderer');
SP.UI.RelatedItems.RelatedItemsFocusHandler.registerClass('SP.UI.RelatedItems.RelatedItemsFocusHandler');
SP.UI.RelatedItems.Utility.registerClass('SP.UI.RelatedItems.Utility');
SP.UI.RelatedItems.ScriptApplicationManager.registerClass('SP.UI.RelatedItems.ScriptApplicationManager');
function sp_ui_relateditems_initialize() {
    SP.UI.RelatedItems.GlobalTemplateOverrides.$$cctor();
    SP.UI.RelatedItems.Utility.defaultIcon = SP.Utilities.Utility.getImageUrl('icgen.gif');
    SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControl = null;
    SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsControlReadOnly = null;
    SP.UI.RelatedItems.ScriptApplicationManager.RelatedItemsPicker = null;
}
;
sp_ui_relateditems_initialize();
RegisterModuleInit("sp.ui.relateditems.js", sp_ui_relateditems_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.relateditems.js");
