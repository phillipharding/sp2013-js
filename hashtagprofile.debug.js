function $_global_hashtagprofile() {
    HashTagProfile_Init = function() {
        var lastChildOf = function(node) {
            var last = node.lastChild;

            while (last.nodeType != 1) {
                last = last.previousSibling;
            }
            return last;
        };

        (function() {
            var follow = document.getElementById("HashTagProfile_FollowTagLinkSpan");
            var unfollow = document.getElementById("HashTagProfile_UnfollowTagLinkSpan");

            if ((lastChildOf(follow)).getAttribute('isFollowed') == "True") {
                follow.style.display = "none";
                unfollow.style.display = "inline";
            }
            else if ((lastChildOf(follow)).getAttribute('isFollowed') == "False") {
                follow.style.display = "inline";
                unfollow.style.display = "none";
            }
        })();
        SP.SOD.executeFunc("SP.js", "SP.ClientContext", function() {
            SP.SOD.executeFunc("SP.UserProfiles.js", "SP.UserProfiles", function() {
                var getTermID = function() {
                    var qs = window.location.search.substring(1, window.location.search.length);

                    if (SP.ScriptUtility.isNullOrEmptyString(qs)) {
                        qs = window.location.hash;
                        qs = qs.substring(qs.indexOf('?') + 1, qs.length);
                    }
                    var termID = null;

                    if (!SP.ScriptUtility.isNullOrEmptyString(qs) && qs.indexOf('TermID') !== -1) {
                        termID = qs.substr(qs.indexOf('TermID'));
                        termID = termID.substr(qs.indexOf('=') + 1);
                        if (termID.indexOf('&') !== -1) {
                            termID = termID.substring(0, termID.indexOf('&'));
                        }
                    }
                    return termID;
                };

                followHashTag = function() {
                    var ctx = SP.ClientContext.get_current();
                    var MyPeopleManager = SP.UserProfiles.PeopleManager.newObject(ctx);

                    MyPeopleManager.followTag(getTermID());
                    var follow = document.getElementById("HashTagProfile_FollowTagLinkSpan");
                    var unfollow = document.getElementById("HashTagProfile_UnfollowTagLinkSpan");

                    ctx.executeQueryAsync(function() {
                        (lastChildOf(follow)).setAttribute('isFollowed', 'True');
                        (lastChildOf(unfollow)).setAttribute('isFollowed', 'True');
                        follow.style.display = "none";
                        unfollow.style.display = "inline";
                    }, function() {
                        ;
                    });
                };
                unfollowHashTag = function() {
                    var ctx = SP.ClientContext.get_current();
                    var MyPeopleManager = SP.UserProfiles.PeopleManager.newObject(ctx);

                    MyPeopleManager.stopFollowingTag(getTermID());
                    var follow = document.getElementById("HashTagProfile_FollowTagLinkSpan");
                    var unfollow = document.getElementById("HashTagProfile_UnfollowTagLinkSpan");

                    ctx.executeQueryAsync(function() {
                        (lastChildOf(follow)).setAttribute('isFollowed', 'False');
                        (lastChildOf(unfollow)).setAttribute('isFollowed', 'False');
                        follow.style.display = "inline";
                        unfollow.style.display = "none";
                    }, function() {
                        ;
                    });
                };
                showAddAssociatedHashTags = function() {
                    (document.getElementById('HashTagProfile_RelatedTags_AddTagLink')).style.display = 'none';
                    (document.getElementById('HashTagProfile_RelatedTags_AddTagArea')).style.display = 'inline-block';
                    (document.getElementById('HashTagProfile_RelatedTags_TaggingControl')).style.display = 'inline-block';
                };
                clearRelatedTagControl = function(clientId) {
                    (document.getElementById('HashTagProfile_RelatedTags_TaggingControl')).style.display = 'none';
                    (document.getElementById('HashTagProfile_RelatedTags_AddTagArea')).style.display = 'none';
                    (document.getElementById('HashTagProfile_RelatedTags_AddTagLink')).style.display = 'block';
                    var tagControl = document.getElementById(clientId);
                    var control = new Microsoft.SharePoint.Taxonomy.ControlObject(tagControl);

                    control.setRawText('');
                    control.retrieveTerms();
                };
                saveTag = function(clientId) {
                    window.setTimeout("clearRelatedTagControl('" + clientId + "')", 0);
                };
                cancelTag = function(clientId) {
                    window.setTimeout("clearRelatedTagControl('" + clientId + "')", 0);
                };
                removeTag = function(clientId) {
                    window.setTimeout("clearRelatedTagControl('" + clientId + "')", 0);
                };
                showMoreTags = function(clientId) {
                    window.setTimeout("clearRelatedTagControl('" + clientId + "')", 0);
                };
            });
        });
    };
}
$_global_hashtagprofile();
