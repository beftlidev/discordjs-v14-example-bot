const { readdirSync } = require("fs")

module.exports = (client) => {

  var events = readdirSync("./events")
  var files;
  let konsol = "";
  
  for(var event in events) {

    if (!events[event].endsWith(".js")) {

      files = readdirSync(`./events/${events[event]}`)

      for(var file in files) {

        const props = require(`../events/${events[event]}/${files[file]}`)
        client.on(props.name, (...data) => props.run(client, ...data))
        konsol += konsol ? `, { ${events[event]}/${files[file]} }` : `{ ${events[event]}/${files[file]} }`;
        
      }
      
    } else {
      
      const props = require(`../events/${events[event]}`)
      client.on(props.name, (...data) => props.run(client, ...data))
      konsol += konsol ? `, { ${events[event]} }` : `{ ${events[event]} }`;

    }
    
  }

  console.log(`[EVENTS] ( ${konsol} ) loaded.`)
  console.log()
  
}