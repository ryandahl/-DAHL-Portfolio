jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 > #backgroundBox": {
                      "attributes": {
                        "opacity": "0.3",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 > #backgroundBox": {
                      "attributes": {
                        "opacity": "0.3",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724": {
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