// familyNameDropdown.js

/**
 * Populates a dropdown with family names based on the provided dropdown ID.
 * @param {string} dropdownId - The ID of the dropdown element.
 

this function is called in the html file, and it populates the dropdown menu with the family names
in the registration form. 
*/
export function populateFamilyNameDropdown(dropdownId) {
    console.log('DOMContentLoaded event fired');
    const familyNames = [
        {region: "The Americas", name:["Adena","Anasazi","Chavín","Cherokee","Choctaw","Coclé",
            "Haida","Hopewell","Lenca","Mapuche","Mixtec","Muisca","Nazca","Nez Perce","Paracas",
            "Teotihuacan","Yaghan", "Yurok", "Zapotec"]
        },

        {region: "Asia", name:["Qin", "Wu", "Taizong", "Khan", "Zhu", "Ashoka", "Maurya", "Harsha", "Padmini", 
            "Mirabai", "Gwanggaeto", "Seondeok", "Jumong", "Sejong", "Hwang", "Jimmu", "Shotoku", "Suiko",  
            "Murasaki", "Tomoe" ]
        },

        {region: "Celtic", name:["Averni ","Boii ", "Brigantes ", "Caledonii ","Cantabri ",
            "FitzGerald ","Icenix ","Joyce ","Llywelyn ","MacAlpin ","MacFergus ","O'Brien ",	
            "Pendragon ","Stewart ","Tudor ","Ui Imair ","Ui Neill ","Veneti ",	"Volcae ", 
            "Votandini "]
        },

        {region: "Egyptian", name:["Ahmose ","Ahmose ","Akhenaten ",	"Amenhotep ","Djoser ",
        	"Hatshepsut ","Hor-Aha ","Hypatia ","Khufu ","Mafdet ",	"Menes ","Merenptah ",	
            "Nefertiti ","Nuit ","Ptolemy ","Ramses ",	"Senusret ","Seti ","Taharqa ",	
            "Thutmose ","Tutankhamun"]
        },

        {region: "Germanic", name: ["Alemanni ",	"Alemanni ","Amaling ",	"Burgundar ",
            "Karlinger ","Chattian ","Cherusci ","Frank ",	"Godwin ",	"Habsburg ","Hun ",	
            "Meroving ","Ottonen ",	"Ragnarsson ","Rurik ","Scylding ",	"Sturlungar ",	"Vandali ",
            "Wettin ",	"Wulfing ",	"Yngling "]
        },

        {region: "Greek", name: ["Alcaeus ", "Alexandros ","Archimedes ",	"Ariston ","Basil ",	
            "Chioniades ",	"Cleisthenes ","Dionysius ",	"Drakon ",	"Euclid ",	"Galen ",	"Herodotus ",	
            "Hippocrates ","Leonidas ","Perseus ","Philip ","Pythagoras ",	"Seleukos ","Theocritos ","Theseus "]
        },

        {region: " NearEastern", name: ["Amytis ","ApilSin ","Ashurbanipal ","Cyrus ","Damuzi ",	"Darius ",	
            "Dido ","Eshmunazar ","Etana ","Ghazali ","Giglamesh ","Hammurabi ",	"Maimonides ",	"Nabopolassar ",	
            "Naram-Sin ",	"Nebuchadnezzar ",	"Puabi ",	"Sargon ",	"Siduri ",	"Xerxes "]
        },

        {region: "Oceanic", name: ["Baiame ","Daramulum ",	"Hiiaka ",	"Hikuleo ",	"Hina ","Hinemoa ","Hine-nui-te-pō ",	
            "Karora ",	"Laupe ","Mahuika ","Manaia ",	"Maui ","Pele ","Rongo ","Sina ","Tangaroa ","Telesa ",	
            "Tiddalik ","Tohi Te Ururangi ","Waugal "]
        },

        {region: "Prehistoric", name:["Azilian ","Ballygalley ",	"Beaker People ","Chinchorro ",	"Chulmun ",	"Ertebølle ",
            "Faiyum ","Hadza ",	"Jomon ","Koster ",	"Kunda ","Maglemosian ","Mehrgarh ","Narva ","Natufian ","Shigir ",	
            "Skara Brae ","Swabian Jura ","Swiderian ",	"Zarubintsy "]
        },
        
        {region: "Roman", name: ["Aemilius ","Caecilius ","Claudius ","Colonna ","Curius ","Curtius ","Didius ",	"Este ",
            "Farnese ",	"Flavius ",	"Horatius ","Julius ","Livius ","Marius ","Medici ","Orsini ","Sempronius ","Sforza ",	
            "Terentius ","Visconti "]     
        }];

    const dropdown = document.getElementById(dropdownId);

    // Populate the dropdown with family names
    familyNames.forEach(region => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = region.region;

        region.name.forEach(name => {
        const option = document.createElement("option");  
        option.value = name;  
        option.textContent = name; 
        optgroup.appendChild(option);
    });

    dropdown.appendChild(optgroup);
    });
}

