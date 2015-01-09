if (Forms.find().count() === 0) {
  Forms.insert({
    name: "wlc",
    fields: [
      {id:"nutrition", label:"Nutrition Points", formElement:"select", values:[5,4,3,2,1,0]},
      {id:"exercise", label:"Did you exercise?", formElement:"radios", values:["yes", "no"]},
      {id:"stretch", label:"Did you stretch?", formElement:"radios", values:["yes", "no"]},
      {id:"challenge", label:"Did you do the weekly challenge today?", formElement:"radios", values:["yes", "no"]},
      {id:"reflection", label:"Reflection", formElement:"textarea", htmlAttributes:{rows: "5"}}
    ]
  });

  Forms.insert({
    name: "work",
    fields: [
      {
        id:"title",
        label:"Title",
        formElement:"text",
        check: "String"
      },
      {
        id:"journal",
        label:"Journal entry",
        formElement:"textarea",
        htmlAttributes:{rows: "20"},
        check: "String"
      },
      {
        id:"accomplishments",
        label:"Accomplishments",
        formElement:"textarea",
        htmlAttributes:{rows: "5"},
        check: "String"
      },
      {
        id:"todos",
        label:"Things to do tomorrow",
        formElement:"textarea",
        htmlAttributes:{rows: "5"},
        check: "String"
      },
      {
        id:"enjoy",
        label:"How enjoyable was today?",
        formElement:"select",
        values:[10,9,8,7,6,5,4,3,2,1],
        check: "String"
      },
      {
        id:"effective",
        label:"How effective were you today?",
        formElement:"select",
        values:[10,9,8,7,6,5,4,3,2,1],
        check: "String"
      }
    ]
  });
}