if (Forms.find().count() === 0) {
  Forms.insert({
    name: "wlc",
    fields: [
        {id:"foodPoints", label:"Food Points", type:"select", values:[5,4,3,2,1,0]},
        {id:"exercise", label:"Did you exercise?", type:"radios", values:["yes", "no"]},
        {id:"stretch", label:"Did you stretch?", type:"radios", values:["yes", "no"]},
        {id:"challenge", label:"Did you do the weekly challenge today?", type:"radios", values:["yes", "no"]},
        {id:"reflection", label:"Reflection", type:"textarea", attributes:{rows: "5"}}
    ]
  });

  Forms.insert({
    name: "work",
    fields: [
        {id:"title", label:"Title", type:"text"},
        {id:"journal", label:"Journal entry", type:"textarea", attributes:{rows: "20"}},
        {id:"accomplishments", label:"Accomplishments", type:"textarea", attributes:{rows: "5"}},
        {id:"todos", label:"Things to do tomorrow", type:"textarea", attributes:{rows: "5"}},
        {id:"enjoy", label:"How enjoyable was today?", type:"select", values:[10,9,8,7,6,5,4,3,2,1]},
        {id:"effective", label:"How effective were you today?", type:"select", values:[10,9,8,7,6,5,4,3,2,1]}
    ]
  });
}