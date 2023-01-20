const search = document.querySelector("input")


async function getJsonData(){
   const responce = await fetch('./assets/json/data.json')
   return await responce.json()
}

const searchRecord = async (value) =>{
    const data = await getJsonData()
    const record = data.find((res) => {
        return res.code === value || value.toUpperCase().startsWith(res.code)
    })

    const result = document.querySelector("#result")
    if(record){
        result.classList.remove("hidden")
        console.log(record);
        result.querySelector("#query").innerText    = value.toUpperCase()
        result.querySelector("#id").innerText       = record.id
        result.querySelector("#code").innerText     = record.code
        result.querySelector("#location").innerText = record.location
        result.querySelector("#district").innerText = record.district
        result.querySelector("#type").innerText     = record.type
    }
    else{
        result.classList.add("hidden")
        // const errorEl = document.createElement("h1")
        // errorEl.innerText = "Data Not Found"

        // result.append(errorEl)
    }
}

search.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        if(search.value.length > 3){
            searchRecord(search.value)
        }
    }
})