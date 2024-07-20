interface Creator{
    name: string,
    imagePath: string,
    description: string,
}

interface CreatorData {
    [name: string] : Creator,
}


const creatorData: CreatorData ={
    "Shuniji": {
        name: "Shuniji",
        imagePath: "/images/creatorProfiles/DragonEye.png",
        description: "Something about me that is long a should overlap and shit",
    },
    "EventfulLynx915": {
        name: "EventfulLynx915",
        imagePath: "/images/creatorProfiles/Undertow.png",
        description: "Something about me that is long and should overlap and shit",
    },
}
export default creatorData;