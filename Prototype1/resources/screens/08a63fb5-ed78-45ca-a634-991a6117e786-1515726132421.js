jQuery("#simulation")
  .on("click", ".s-08a63fb5-ed78-45ca-a634-991a6117e786 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/08a63fb5-ed78-45ca-a634-991a6117e786"
                  },
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-08a63fb5-ed78-45ca-a634-991a6117e786 > #backgroundBox": {
                      "attributes": {
                        "opacity": "0.3",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-08a63fb5-ed78-45ca-a634-991a6117e786": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-08a63fb5-ed78-45ca-a634-991a6117e786 > #backgroundBox": {
                      "attributes": {
                        "opacity": "0.3",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-08a63fb5-ed78-45ca-a634-991a6117e786": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
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