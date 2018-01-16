jQuery("#simulation")
  .on("click", ".s-b7116aa5-bd56-458a-b89c-36fe062aa157 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-b7116aa5-bd56-458a-b89c-36fe062aa157")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b7116aa5-bd56-458a-b89c-36fe062aa157 > #backgroundBox": {
                      "attributes": {
                        "opacity": "0.25",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-b7116aa5-bd56-458a-b89c-36fe062aa157": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  },{
                    "#s-b7116aa5-bd56-458a-b89c-36fe062aa157 > #backgroundBox": {
                      "attributes": {
                        "opacity": "0.25",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-b7116aa5-bd56-458a-b89c-36fe062aa157": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });