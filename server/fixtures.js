if (Forms.find().count() === 0) {
  Forms.insert({
    name: "wlc",
    private: false,
    fields: [
      {
        id: "nutrition",
        label: "Nutrition Points",
        formElement: "select",
        values: [5,4,3,2,1,0]
      },
      {
        id: "exercise",
        label: "Did you exercise for at least 10 minutes?",
        formElement: "radios",
        values: ["yes", "no"]
      },
      {
        id: "stretch",
        label: "Did you stretch for at least 10 minutes?",
        formElement: "radios",
        values: ["yes", "no"]
      },
      {
        id: "challenge",
        label: "Did you complete the daily challenge?",
        formElement: "radios",
        values: ["yes", "no"]
      },
      {
        id:"reflection",
        label:"Reflection",
        formElement:"textarea",
        htmlAttributes:{rows: "5"}
      }
    ]
  });

  Forms.insert({
    name: "work",
    private: true,
    fields: [
      {
        id:"title",
        label:"Title",
        formElement:"text",
        checkExp: "String"
      },
      {
        id:"journal",
        label:"Journal entry",
        formElement:"textarea",
        htmlAttributes:{rows: "20"},
        checkExp: "String"
      },
      {
        id:"accomplishments",
        label:"Accomplishments",
        formElement:"textarea",
        htmlAttributes:{rows: "5"},
        checkExp: "String"
      },
      {
        id:"todos",
        label:"Things to do tomorrow",
        formElement:"textarea",
        htmlAttributes:{rows: "5"},
        checkExp: "String"
      },
      {
        id:"enjoy",
        label:"How enjoyable was today?",
        formElement:"select",
        values:[10,9,8,7,6,5,4,3,2,1],
        checkExp: "String"
      },
      {
        id:"effective",
        label:"How effective were you today?",
        formElement:"select",
        values:[10,9,8,7,6,5,4,3,2,1],
        checkExp: "String"
      }
    ]
  });
}