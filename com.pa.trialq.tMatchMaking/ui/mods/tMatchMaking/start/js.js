model.navToMatchMaking = function () {
            model.redirectToGalacticWar(true);
            if (model.devMode() || (model.uberNetRegion() && model.isUberNetRegionAvailable())) {
                model.inRegionSetup(false);
                window.location.href = 'coui://ui/main/game/matchmaking/matchmaking.html';
                return; /* window.location.href will not stop execution. */
            }
            else {
                model.inRegionSetup(true);
                $("#regionDlg").dialog('open');
            }
        }

//$("#navigation_items").append("<a href=\"#\" class=\"nav_item\" data-bind=\"click: function(){window.location.href='coui://ui/mods/tRPG/tMyGWStart.html';return;}, click_sound: 'default', rollover_sound: 'default', css: { nav_item_disabled: !allowNewOrJoinGame() } \"><span class=\"nav_item_text\">RPG GW</span></a>");

$("#navigation_items").append("<a href=\"#\" class=\"nav_item\" data-bind=\"click: navToMatchMaking, click_sound: 'default', rollover_sound: 'default', css: { nav_item_disabled: !allowNewOrJoinGame() } \"><span class=\"nav_item_text\" data-bind=\"css: { nav_item_text_disabled: !allowNewOrJoinGame() }\">Match Maker (TESTING)</span></a>");
                
