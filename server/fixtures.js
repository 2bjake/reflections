if (Forms.find().count() === 0) {
  Forms.insert({
    name: "wlc",
    fields: [
      {id:"foodPoints", label:"Food Points", type:"select", values:[5,4,3,2,1,0]},
      {id:"exercise", label:"Did you exercise?", type:"radios", values:["yes", "no"]},
      {id:"stretch", label:"Did you stretch?", type:"radios", values:["yes", "no"]},
      {id:"challenge", label:"Did you do the weekly challenge today?", type:"radios", values:["yes", "no"]},
      {id:"reflection", label:"Reflection", type:"textarea", htmlAttributes:{rows: "5"}}
    ]
  });

  Forms.insert({
    name: "work",
    fields: [
      {
        id:"title",
        label:"Title",
        type:"text",
        check: "String"
      },
      {
        id:"journal",
        label:"Journal entry",
        type:"textarea",
        htmlAttributes:{rows: "20"},
        check: "String"
      },
      {
        id:"accomplishments",
        label:"Accomplishments",
        type:"textarea",
        htmlAttributes:{rows: "5"},
        check: "String"
      },
      {
        id:"todos",
        label:"Things to do tomorrow",
        type:"textarea",
        htmlAttributes:{rows: "5"},
        check: "String"
      },
      {
        id:"enjoy",
        label:"How enjoyable was today?",
        type:"select",
        values:[10,9,8,7,6,5,4,3,2,1],
        check: "String"
      },
      {
        id:"effective",
        label:"How effective were you today?",
        type:"select",
        values:[10,9,8,7,6,5,4,3,2,1],
        check: "String"
      }
    ]
  });
}